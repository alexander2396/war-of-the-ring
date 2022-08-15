import { Button, Card } from "react-bootstrap";
import { RenderRegionAreas } from "../../helpers/renderRegionAreas/renderRegionAreas";
import { RenderRegions } from "../../helpers/renderRegions/renderRegions";
import { SelectUnit } from "../../helpers/selectUnit/selectUnit";
import { useSelectedRegion } from "../../hooks/useSelectedRegion";
import { useShowUnitsMenu } from "../../hooks/useShowUnitsMenu";
import './Board.css';

export function Board(props: any) {
    const {showUnitsMenu, setShowUnitsMenu} = useShowUnitsMenu();
    const {selectedRegion, setSelectedRegion} = useSelectedRegion();
    return (
        <div className='board'>
            <img className='boardMap' src={"images/board.jpg"} useMap="#Map" alt=""/>

            <RenderRegions />

            <map name="Map" id="Map">
                <RenderRegionAreas />
            </map>

            {
                showUnitsMenu && 
                <Card className="unitsMenu">
                    <Card.Body>
                        <Card.Title>Selected Army</Card.Title>
                        <Card.Text>
                        <div className="selectableUnitsBlock">
                            {selectedRegion.units.map((unit) => {    
                                return (<div className={ "selectableUnit" + (unit.selected ? " selected" : "") } onClick={() => { SelectUnit(unit) }}>
                                    <img className="selectedUnit" style={{height: '50px'}} src={unit.imageUrl} alt=""/>
                                </div>) 
                            })}
                        </div>
                        </Card.Text>
                        <Button variant="primary" onClick={() => {setShowUnitsMenu(false); setSelectedRegion(null);}}>Cancel</Button>
                    </Card.Body>
                </Card>
            }            
        </div>
    );
}