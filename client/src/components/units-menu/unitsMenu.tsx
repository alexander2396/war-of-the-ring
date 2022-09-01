import React, { useState } from "react"
import { Card, Button, Form } from "react-bootstrap"
import { Faction } from "../../models/enums/faction"
import { Hero } from "../../models/hero"
import { Region } from "../../models/region"
import { Side } from "../../models/enums/side"
import { Unit } from "../../models/unit"
import { UnitType } from "../../models/enums/unitType"
import { setRegionUnits } from "../../redux/game/gameSlice"
import { useAppDispatch } from "../../tools/hooks/hooks"

type UnitsMenuProps = {
    selectedRegion: Region,
    setSelectedRegion: React.Dispatch<React.SetStateAction<Region>>,
    showUnitsMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const UnitsMenu = ({selectedRegion, setSelectedRegion, showUnitsMenu}: UnitsMenuProps) => {   
    
    const [showAddNewUnitsModal, setShowAddNewUnitsModal] = useState(false);
    const [selectedSideOfUnit, setSelectedSideOfUnit] = useState(selectedRegion.side);
    const [selectedFactionOfUnit, setSelectedFactionOfUnit] = useState(selectedRegion.faction);
    const [selectedUnitType, setSelectedUnitType] = useState(UnitType.Regular);
    const [selectedHero, setSelectedHero] = useState(null as Hero);
    
    const dispatch = useAppDispatch();

    const addNewUnit = () => {
        const newUnit = selectedHero !== null
            ? new Unit(selectedSideOfUnit, selectedFactionOfUnit, UnitType.Leader, selectedHero)
            : new Unit(selectedSideOfUnit, selectedFactionOfUnit, selectedUnitType)
        const units = [...selectedRegion.units, newUnit]

        dispatch(setRegionUnits({
            regionKey: selectedRegion.key,
            units: units
        }));

        setSelectedRegion({
            ...selectedRegion,
            units: units
        });
    }
    
    const deleteUnits = () => {
        const units = selectedRegion.units.filter(unit => !unit.selected)
        
        dispatch(setRegionUnits({
            regionKey: selectedRegion.key,
            units: units
        }));

        setSelectedRegion({
            ...selectedRegion,
            units: units
        });
    }

    const selectUnit = (unit: Unit) => {
        let region = { ...selectedRegion };
        region.units.find(x => x.key === unit.key).selected = !unit.selected;
        setSelectedRegion(region);
    }

    return (
        <>
            <Card className="unitsMenu">
                <Card.Body className="SelectedArmyCard">
                    <Card.Title className="text-center">Selected Army</Card.Title>
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
                        <Button variant="secondary" onClick={() => { setShowAddNewUnitsModal(true) }}>Add</Button>

                        <Button variant="danger" onClick={deleteUnits}>Delete</Button>

                        <Button variant="primary" onClick={() => {showUnitsMenu(false); setSelectedRegion(null); setShowAddNewUnitsModal(false);}}>Cancel</Button>
                    </div>
                </Card.Body>
            </Card>
            
            {showAddNewUnitsModal && <Card className="AddNewUnitsMenu">
                <Card.Body className="AddNewUnitsCard">
                    <Card.Title className="text-center">Add new Unit</Card.Title>

                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Side</Form.Label>
                            <Form.Select size="sm" value={selectedSideOfUnit} onChange={(e) => setSelectedSideOfUnit(Number(e.currentTarget.value))}>
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
