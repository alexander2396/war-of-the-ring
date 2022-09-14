import React, { useState } from "react"
import { Card, Button, Form } from "react-bootstrap"
import { Faction } from "../../models/enums/faction"
import { Hero } from "../../models/hero"
import { Region } from "../../models/region"
import { Side } from "../../models/enums/side"
import { Unit } from "../../models/unit"
import { UnitType } from "../../models/enums/unitType"
import { addUnit, downgradeUnit, killRandomCompanion, moveFellowshipToRegion, removeUnits, selectRegions, selectUnitsPool, selectUserData, updateUnitsPool } from "../../redux/game/gameSlice"
import { useAppDispatch, useAppSelector } from "../../tools/hooks/hooks"

type UnitsMenuProps = {
    selectedRegion: Region,
    setSelectedRegion: React.Dispatch<React.SetStateAction<Region>>,
    showUnitsMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const UnitsMenu = ({selectedRegion, setSelectedRegion, showUnitsMenu}: UnitsMenuProps) => {   
    
    const userData = useAppSelector(selectUserData);
    const unitsPool = useAppSelector(selectUnitsPool);
    
    const [showAddNewUnitsModal, setShowAddNewUnitsModal] = useState(false);

    const [selectedSideOfUnit, setSelectedSideOfUnit] = useState(selectedRegion.side ?? (userData.freePeoplePlayer === userData.username
        ? Side.FreePeople : Side.SauronForces));
    const [selectedFactionOfUnit, setSelectedFactionOfUnit] = useState(selectedRegion.faction ?? (userData.freePeoplePlayer === userData.username
        ? Faction.Elves : Faction.Sauron));

    const [selectedUnitType, setSelectedUnitType] = useState(UnitType.Regular);
    const [selectedHero, setSelectedHero] = useState(null as Hero);
    const [allUnitsSelected, setAllUnitsSelected] = useState(true);

    const dispatch = useAppDispatch();

    function _setSelectedSideOfUnit(side: Side) {
        setSelectedSideOfUnit(side);

        if (side === Side.FreePeople)
            setSelectedFactionOfUnit(Faction.Elves);
        else 
            setSelectedFactionOfUnit(Faction.Sauron);
    }

    const addNewUnit = () => {
        let unit = null;

        if (selectedHero !== 0 && !selectedHero) {
            unit = unitsPool.find(x => x.side === selectedSideOfUnit && x.faction === selectedFactionOfUnit && x.type === selectedUnitType);

            if (!unit) return;

            dispatch(updateUnitsPool(unitsPool.filter(x => x.key !== unit.key)));
        } else {
            unit = new Unit(selectedSideOfUnit, selectedFactionOfUnit, UnitType.Leader, selectedHero);
        }
        
        dispatch(addUnit({
            regionKey: selectedRegion.key,
            unit: unit
        }));

        var tempRegion = {...selectedRegion};
        tempRegion.units = [].concat(selectedRegion.units);
        tempRegion.units.push(unit);

        setSelectedRegion(tempRegion);
    }
    
    const deleteUnits = () => {
        const selectedSFUnits = selectedRegion.units.filter(x => x.selected === true && x.side === Side.SauronForces);

        dispatch(removeUnits({
            regionKey: selectedRegion.key,
            units: selectedRegion.units.filter(unit => unit.selected)
        }));

        var tempRegion = {...selectedRegion};
        tempRegion.units = [].concat(selectedRegion.units.filter(unit => !unit.selected));

        setSelectedRegion(tempRegion);

        if (selectedSFUnits.some(x => x)) {
            dispatch(updateUnitsPool(selectedSFUnits.concat(unitsPool)));
        }
    }

    const _downgradeUnit = () => {
        const selectedUnits = selectedRegion.units.filter(x => x.selected === true);

        if (selectedUnits.length > 1) return;

        const selectedUnit = selectedRegion.units.find(x => x.selected === true);

        if (selectedUnit.type !== UnitType.Elite) return;

        dispatch(downgradeUnit({
            regionKey: selectedRegion.key,
            unit: selectedUnit
        }));

        var tempRegion = {...selectedRegion};
        tempRegion.units = [].concat(selectedRegion.units.filter(unit => !unit.selected));

        showUnitsMenu(false);
        setSelectedRegion(null);
        setShowAddNewUnitsModal(false);
    }

    const selectUnit = (unit: Unit) => {
        let region = { ...selectedRegion };
        region.units = [];
        selectedRegion.units.forEach(x => region.units.push({...x}))
        region.units.find(x => x.key === unit.key).selected = !unit.selected;
        setSelectedRegion(region);
    }

    function moveFellowship() {
        dispatch(moveFellowshipToRegion(selectedRegion.key));
    }

    function _killRandomCompanion() {
        dispatch(killRandomCompanion());

        showUnitsMenu(false);
        setSelectedRegion(null);
        setShowAddNewUnitsModal(false);
    }

    function _changeAllUnitsSelected() {
        const value = !allUnitsSelected;
        setAllUnitsSelected(value);
        let region = { ...selectedRegion };
        region.units = [];
        selectedRegion.units.forEach(x => region.units.push({...x}))
        region.units.forEach(unit => {
            unit.selected = value;
        });
        setSelectedRegion(region);
    }

    return (
        <>
            <Card className="unitsMenu">
                <Card.Body className="SelectedArmyCard">
                    <Card.Title className="text-center">{selectedRegion.key}</Card.Title>

                    <div>
                        <Form.Check type='checkbox' id='select-units-checkbox' label='select all'
                            checked={allUnitsSelected} onChange={() => _changeAllUnitsSelected()} />
                    </div>

                    <div className="selectableUnitsBlock text-center">
                        {selectedRegion.units.map((unit, i) => {    
                            return (
                                <div key={i} className={ "selectableUnit" + (unit.selected ? " selected" : "") } onClick={() => selectUnit(unit)}>
                                    <img className="selectedUnit" style={{height: '50px'}} src={unit.imageUrl} alt=""/>
                                </div>
                            ) 
                        })}
                    </div>
                    <div className="buttonGroup">
                        <Button variant="primary" onClick={() => { setShowAddNewUnitsModal(true) }}>Add</Button>

                        <Button variant="danger" onClick={deleteUnits}>Delete</Button>

                        <Button variant="secondary" onClick={() => {showUnitsMenu(false); setSelectedRegion(null); setShowAddNewUnitsModal(false);}}>Cancel</Button>
                    </div>
                    {
                        selectedRegion.key !== 'fellowship' &&
                        <div className="buttonGroup">
                            <Button variant="success" onClick={() => {moveFellowship();showUnitsMenu(false); setSelectedRegion(null); setShowAddNewUnitsModal(false);}}>Move Fellowship here</Button>
                        </div>
                    }
                    {
                        selectedRegion.key === 'fellowship' &&
                        <div className="buttonGroup">
                            <Button variant="danger" onClick={() => {_killRandomCompanion();}}>Kill random companion</Button>
                        </div>
                    }
                    {
                        selectedRegion.units.filter(x => x.selected === true).length == 1 &&
                        selectedRegion.units.filter(x => x.selected === true && x.type === UnitType.Elite).length == 1 &&
                        <div className="buttonGroup">
                        <Button variant="info" onClick={() => {_downgradeUnit()}}>Downgrade</Button>
                        </div>
                    }
                </Card.Body>
            </Card>
            
            {showAddNewUnitsModal && <Card className="AddNewUnitsMenu">
                <Card.Body className="AddNewUnitsCard">
                    <Card.Title className="text-center">Add new Unit</Card.Title>

                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Side</Form.Label>
                            <Form.Select size="sm" value={selectedSideOfUnit} onChange={(e) => _setSelectedSideOfUnit(Number(e.currentTarget.value))}>
                                <option value={Side.FreePeople}>Free People</option>
                                <option value={Side.SauronForces}>Sauron Forces</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Faction</Form.Label>
                            <Form.Select size="sm" value={selectedFactionOfUnit} onChange={(e) => setSelectedFactionOfUnit(Number(e.currentTarget.value))}>
                                {
                                    selectedSideOfUnit !== Side.SauronForces 
                                    &&
                                    <>
                                        <option value={Faction.Elves}>Elves</option>
                                        <option value={Faction.Dwarfs}>Dwarfs</option>
                                        <option value={Faction.Northmen}>Northmen</option>
                                        <option value={Faction.Gondor}>Gondor</option>
                                        <option value={Faction.Rohan}>Rohan</option>
                                    </>
                                }
                                {
                                    selectedSideOfUnit === Side.SauronForces 
                                    &&
                                    <>
                                        <option value={Faction.Sauron}>Sauron</option>
                                        <option value={Faction.Isengard}>Isengard</option>
                                        <option value={Faction.Easterlings}>Easterlings</option>
                                    </>
                                }
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Unit type</Form.Label>
                            <Form.Select size="sm" onChange={(e) => setSelectedUnitType(Number(e.currentTarget.value))}>
                                <option value={UnitType.Regular}>Regular</option>
                                <option value={UnitType.Elite}>Elite</option>
                                <option value={UnitType.Leader}>Leader</option>
                            </Form.Select>
                        </Form.Group>

                        {   
                            selectedUnitType == UnitType.Leader
                            &&
                            <Form.Group className="mb-3">
                                <Form.Label>Hero</Form.Label>
                                <Form.Select size="sm" onChange={(e) => setSelectedHero(Number(e.currentTarget.value))}>
                                    <option value={null}>none</option>
                                    {
                                        selectedSideOfUnit !== Side.SauronForces 
                                        &&
                                        <>
                                            <option value={Hero.Gandalf}>Gandalf</option>
                                            <option value={Hero.Aragorn}>Aragorn</option>
                                            <option value={Hero.Legolas}>Legolas</option>
                                            <option value={Hero.Gimli}>Gimli</option>
                                            <option value={Hero.Boromir}>Boromir</option>
                                            <option value={Hero.Merry}>Merry</option>
                                            <option value={Hero.Pippin}>Pippin</option>
                                        </>
                                    }
                                    {
                                        selectedSideOfUnit === Side.SauronForces 
                                        &&
                                        <>
                                            <option value={Hero.Saruman}>Saruman</option>
                                            <option value={Hero.WitchKing}>WitchKing</option>
                                            <option value={Hero.Mouth}>Mouth</option>
                                        </>
                                    }                      
                                </Form.Select>
                            </Form.Group>
                        }
                    </Form>

                    <div className="buttonGroup">
                        <Button variant="secondary" onClick={() => addNewUnit()}>Add</Button>
                        <Button variant="primary" onClick={() => {setShowAddNewUnitsModal(false)}}>Cancel</Button>
                    </div>

                </Card.Body>
            </Card>}
        </>
    )
}
