import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../../tools/hooks/hooks";
import { RenderRegionAreas } from "../../components/render-region-areas/renderRegionAreas";
import { RenderRegions } from "../../components/render-regions/renderRegions";
import { Region } from "../../models/region";
import { selectRegions } from "../../redux/game/gameSlice";
import './Board.css';
import { selectUnit } from "../../tools/helpers/selectUnit";

export function Board(props: any) {
    const [ShowUnitsMenu, showUnitsMenu]=useState(false);
    const [SelectedRegion, setSelectedRegion]=useState(null as Region);
    const [showAddNewUnitsModal, setShowAddNewUnitsModal] = useState(false);

    const regions = useAppSelector(selectRegions);
    const dispatch = useAppDispatch();

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
                        <Form.Select size="sm">
                            <option>Side select</option>
                        </Form.Select>
                        <br />
                        <Form.Select size="sm">
                            <option>Faction select</option>
                        </Form.Select>
                        <br />
                        <Form.Select size="sm">
                            <option>Unit type select</option>
                        </Form.Select>
                        </div>
                        <div className="buttonGroup">
                            <Button variant="secondary" onClick={() => { /*showUnitsMenu(false) */}}>Add</Button>
                            <Button variant="primary" onClick={() => {setShowAddNewUnitsModal(false)}}>Cancel</Button>
                        </div>
                    </Card.Body>
                </Card>}
            </>
            }            
        </div>
    );
}