import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../../tools/hooks/hooks";
import { RenderRegionAreas } from "../../components/render-region-areas/renderRegionAreas";
import { RenderRegions } from "../../components/render-regions/renderRegions";
import { Region } from "../../models/region";
import { selectRegions, setRegionUnits } from "../../redux/game/gameSlice";
import './Board.css';
import { selectUnit } from "../../tools/helpers/selectUnit";
import { Side } from "../../models/side";
import { Faction } from "../../models/faction";
import { UnitType } from "../../models/unitType";
import { Unit } from "../../models/unit";

export function Board(props: any) {
    const [ShowUnitsMenu, showUnitsMenu]=useState(false);
    const [SelectedRegion, setSelectedRegion]=useState(null as Region);
    const [showAddNewUnitsModal, setShowAddNewUnitsModal] = useState(false);
    const [selectedSideOfUnit, setSelectedSideOfUnit] = useState(Side.FreePeople)
    const [selectFactionOfUnit, setSelectedFactionOfUnit] = useState(Faction.Elves)
    const [selectedUnitType, setSelectedUnitType] = useState(UnitType.Regular)

    const regions = useAppSelector(selectRegions);
    const dispatch = useAppDispatch();

    const addNewUnit = () => {
        const newUnit = new Unit(selectedSideOfUnit, selectFactionOfUnit, selectedUnitType)
        const units = regions.filter(region => region.key === SelectedRegion.key)[0].units;

        dispatch(setRegionUnits({
                regionKey: SelectedRegion.key,
                units: [...units, newUnit]
            }));
    }

    return (
        <div className='board'>
            <img className='boardMap' src={"images/board.jpg"} useMap="#Map" alt=""/>

            <RenderRegions regions = {regions} regionClicked = {{showUnitsMenu, setSelectedRegion, dispatch, SelectedRegion}} />

            <map name="Map" id="Map">
                <RenderRegionAreas regions = {regions} regionClicked = {{showUnitsMenu, setSelectedRegion, dispatch, SelectedRegion}}/>
            </map>

            {ShowUnitsMenu && 
            <>
                <Card className="unitsMenu">
                    <Card.Body className="SelectedArmyCard">
                        <Card.Title>Selected Army</Card.Title>
                        <div className="selectableUnitsBlock">
                            {SelectedRegion.units.map((unit, i) => {    
                                return (
                                    <div key={i} className={ "selectableUnit" + (unit.selected ? " selected" : "") } onClick={() => { selectUnit({unit, setSelectedRegion, SelectedRegion}) }}>
                                        <img className="selectedUnit" style={{height: '50px'}} src={unit.imageUrl} alt=""/>
                                    </div>
                                ) 
                            })}
                        </div>
                        <div className="buttonGroup">
                            <Button variant="secondary" onClick={() => { setShowAddNewUnitsModal(true) }}>Add</Button>
                            <Button variant="primary" onClick={() => {showUnitsMenu(false); setSelectedRegion(null); setShowAddNewUnitsModal(false);}}>Cancel</Button>
                        </div>
                    </Card.Body>
            
                </Card>
                {showAddNewUnitsModal && <Card className="AddNewUnitsMenu">
                    <Card.Body className="AddNewUnitsCard">
                        <Card.Title>Add new Units</Card.Title>
                        <div className="selectableUnitsBlock">
                            <span>Side select</span>
                        <Form.Select size="sm" onChange={(e) => setSelectedSideOfUnit(Side[e.currentTarget.value])}>
                            <option>FreePeople</option>
                            <option>SauronForces</option>
                        </Form.Select>
                        <br />
                        <span>Faction select</span>
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
                        <br />
                            <span>Unit type select</span>
                        <Form.Select size="sm" onChange={(e) => setSelectedUnitType(UnitType[e.currentTarget.value])}>
                            <option>Regular</option>
                            <option>Elite</option>
                            <option>Leader</option>
                        </Form.Select>
                        </div>
                        <div className="buttonGroup">
                            <Button variant="secondary" onClick={() => addNewUnit()}>Add</Button>
                            <Button variant="primary" onClick={() => {setShowAddNewUnitsModal(false)}}>Cancel</Button>
                        </div>
                    </Card.Body>
                </Card>}
            </>
            }            
        </div>
    );
}