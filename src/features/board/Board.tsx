import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Region } from "../../models/region";
import { Unit } from "../../models/unit";
import { UnitType } from "../../models/unitType";
import { selectRegions, setRegionUnits } from "../gameSlice";
import './Board.css';

export function Board(props: any) {
    const [ShowUnitsMenu, showUnitsMenu]=useState(false);
    const [SelectedRegion, setSelectedRegion]=useState(null as Region);
    const regions = useAppSelector(selectRegions);
    const dispatch = useAppDispatch();

    function renderRegions(): any {
        const regionBlocks: any = [];
        regions.forEach((region) => {
            regionBlocks.push(
            <div>
                <div className='regionArmy d-flex flex-row' style={{ left: region.xposition, top: region.yposition }}
                    onClick={() => regionClicked(region)}>{renderRegionUnits(region)}</div>
            </div>
            )
        })
    
        return regionBlocks;
    }

    function renderRegionAreas(): any {
        const blocks: any = [];

        regions.forEach((region) => {
            blocks.push(<area className='region' shape="poly" onClick={() => regionClicked(region)} coords={region.rectangleCoordinates} />)
        });

        return blocks;
    }
    
    function renderRegionUnits(region: Region): any {
        let regularBlock;
        if (region.units.some(x => x.type === UnitType.Regular)) {
            const imageUrl = region.units.find(x => x.type === UnitType.Regular).imageUrl;
            const count = region.units.filter(x => x.type === UnitType.Regular).length;
            regularBlock = <div className='unit d-flex flex-column'>
                <div><img style={{height: '65px'}} src={imageUrl} /></div>
                <div className="unitCount">{count}</div>
            </div>
        }
    
        let eliteBlock;
        if (region.units.some(x => x.type === UnitType.Elite)) {
            const imageUrl = region.units.find(x => x.type === UnitType.Elite).imageUrl;
            const count = region.units.filter(x => x.type === UnitType.Elite).length;
            eliteBlock = <div className='unit d-flex flex-column'>
                <div><img style={{height: '65px'}} src={imageUrl} /></div>
                <div className="unitCount">{count}</div>
            </div>
        }
    
        
        let leaderBlock;
        if (region.units.some(x => x.type === UnitType.Leader)) {
            const imageUrl = region.units.find(x => x.type === UnitType.Leader).imageUrl;
            const count = region.units.filter(x => x.type === UnitType.Leader).length;
            leaderBlock = <div className='unit d-flex flex-column'>
                <div><img style={{height: '65px'}} src={imageUrl} /></div>
                <div className="unitCount">{count}</div>
            </div>
        }
    
        return (
            [
                regularBlock,
                eliteBlock,
                leaderBlock
            ]
        );
    }

    function regionClicked(region: Region): void {
        if (!SelectedRegion) {
            showUnitsMenu(true);
            setSelectedRegion(region);
        } else {
            let unitsArray = [];
            unitsArray = unitsArray.concat(SelectedRegion.units);
            unitsArray = unitsArray.concat(region.units);
            dispatch(setRegionUnits({
                regionKey: region.key,
                units: unitsArray
            }));
            dispatch(setRegionUnits({
                regionKey: SelectedRegion.key,
                units: []
            }));

            showUnitsMenu(false);
            setSelectedRegion(null);
        }
        
    }

    return (
        <div className='board'>
            <img className='boardMap' src={"images/board.jpg"} useMap="#Map" />

            {renderRegions()}

            <map name="Map" id="Map">
            {renderRegionAreas()}
            </map>

            {ShowUnitsMenu && 
            <Card className="unitsMenu">
                <Card.Body>
                    <Card.Title>Selected Army</Card.Title>
                    <Card.Text>
                    {SelectedRegion.units.map((unit, i) => {    
                        return (<img className="selectedUnit" style={{height: '50px'}} src={unit.imageUrl} />) 
                    })}
                    </Card.Text>
                    <Button variant="primary" onClick={() => {showUnitsMenu(false); setSelectedRegion(null);}}>Cancel</Button>
                </Card.Body>
            </Card>}            
        </div>
    );
}