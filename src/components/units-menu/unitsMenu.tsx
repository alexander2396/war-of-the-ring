import React, { useState } from "react"
import { Card, Button, Form } from "react-bootstrap"
import { Faction } from "../../models/faction"
import { Region } from "../../models/region"
import { Side } from "../../models/side"
import { Unit } from "../../models/unit"
import { UnitType } from "../../models/unitType"
import { setRegionUnits } from "../../redux/game/gameSlice"
import { useAppDispatch } from "../../tools/hooks/hooks"

type UnitsMenuProps = {
    selectedRegion: Region,
    setSelectedRegion: React.Dispatch<React.SetStateAction<Region>>,
    showUnitsMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const UnitsMenu = ({selectedRegion, setSelectedRegion, showUnitsMenu}: UnitsMenuProps) => {   

    const [showAddNewUnitsModal, setShowAddNewUnitsModal] = useState(false);
    const [selectedSideOfUnit, setSelectedSideOfUnit] = useState(Side.FreePeople)
    const [selectFactionOfUnit, setSelectedFactionOfUnit] = useState(Faction.Elves)
    const [selectedUnitType, setSelectedUnitType] = useState(UnitType.Regular)
    
    const dispatch = useAppDispatch();

    const addNewUnit = () => {
        const newUnit = new Unit(selectedSideOfUnit, selectFactionOfUnit, selectedUnitType)
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
                            <Form.Select size="sm" onChange={(e) => setSelectedSideOfUnit(Side[e.currentTarget.value])}>
                                <option>FreePeople</option>
                                <option>SauronForces</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Faction</Form.Label>
                            <Form.Select size="sm" onChange={(e) => setSelectedFactionOfUnit(Faction[e.currentTarget.value])}>
                                {
                                    selectedSideOfUnit !== Side.SauronForces 
                                    &&
                                    <>
                                        <option>Elves</option>
                                        <option>Dwarfs</option>
                                        <option>Northmen</option>
                                        <option>Gondor</option>
                                        <option>Rohan</option>
                                    </>
                                }
                                {
                                    selectedSideOfUnit === Side.SauronForces 
                                    &&
                                    <>
                                        <option>Sauron</option>
                                        <option>Isengard</option>
                                        <option>Easterlings</option>
                                    </>
                                }
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Unit type</Form.Label>
                            <Form.Select size="sm" onChange={(e) => setSelectedUnitType(UnitType[e.currentTarget.value])}>
                                <option>Regular</option>
                                <option>Elite</option>
                                <option>Leader</option>
                            </Form.Select>
                        </Form.Group>
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
