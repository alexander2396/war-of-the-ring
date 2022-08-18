import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../../tools/hooks/hooks";
import { RenderRegionAreas } from "../../components/render-region-areas/renderRegionAreas";
import { RenderRegions } from "../../components/render-regions/renderRegions";
import { Region } from "../../models/region";
import { Unit } from "../../models/unit";
import { selectRegions, setRegionUnits } from "../../redux/game/gameSlice";
import './Board.css';

export function Board(props: any) {
    const [ShowUnitsMenu, showUnitsMenu]=useState(false);
    const [SelectedRegion, setSelectedRegion]=useState(null as Region);
    const regions = useAppSelector(selectRegions);
    const dispatch = useAppDispatch();


    function regionClicked(region: Region): void {
        if (!SelectedRegion) {
            if (!region.units || region.units.length === 0) return;

            region.units.map(x => x.selected = true);
            showUnitsMenu(true);
            setSelectedRegion(region);
        } else {
            if (region.key === SelectedRegion.key) return;

            let unitsArray = [];
            unitsArray = unitsArray.concat(SelectedRegion.units.filter(x => x.selected));
            unitsArray = unitsArray.concat(region.units);
            dispatch(setRegionUnits({
                regionKey: region.key,
                units: unitsArray
            }));
            dispatch(setRegionUnits({
                regionKey: SelectedRegion.key,
                units: SelectedRegion.units.filter(x => !x.selected)
            }));

            showUnitsMenu(false);
            setSelectedRegion(null);
        }    
    }

    function selectUnit(unit: Unit) {
        let region = { ...SelectedRegion };
        region.units.find(x => x.key === unit.key).selected = !unit.selected;
        setSelectedRegion(region);
    }

    return (
        <div className='board'>
            <img className='boardMap' src={"images/board.jpg"} useMap="#Map" alt=""/>

            <RenderRegions regions = {regions} regionClicked = {regionClicked} />

            <map name="Map" id="Map">
                <RenderRegionAreas regions = {regions} regionClicked = {regionClicked}/>
            </map>

            {ShowUnitsMenu && 
            <Card className="unitsMenu">
                <Card.Body>
                    <Card.Title>Selected Army</Card.Title>
                    <div className="selectableUnitsBlock">
                        {SelectedRegion.units.map((unit, i) => {    
                            return (
                                <div key={i} className={ "selectableUnit" + (unit.selected ? " selected" : "") } onClick={() => { selectUnit(unit) }}>
                                    <img className="selectedUnit" style={{height: '50px'}} src={unit.imageUrl} alt=""/>
                                </div>
                            ) 
                        })}
                    </div>
                    <Button variant="primary" onClick={() => {showUnitsMenu(false); setSelectedRegion(null);}}>Cancel</Button>
                </Card.Body>
            </Card>}            
        </div>
    );
}