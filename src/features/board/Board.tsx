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
            regularBlock = renderUnit(imageUrl, count);
        }
    
        let eliteBlock;
        if (region.units.some(x => x.type === UnitType.Elite)) {
            const imageUrl = region.units.find(x => x.type === UnitType.Elite).imageUrl;
            const count = region.units.filter(x => x.type === UnitType.Elite).length;
            eliteBlock = renderUnit(imageUrl, count);
        }
    
        
        let leaderBlock;
        if (region.units.some(x => x.type === UnitType.Leader)) {
            const imageUrl = region.units.find(x => x.type === UnitType.Leader).imageUrl;
            const count = region.units.filter(x => x.type === UnitType.Leader).length;
            leaderBlock = renderUnit(imageUrl, count);
        }
    
        return (
            [
                regularBlock,
                eliteBlock,
                leaderBlock
            ]
        );
    }

    function renderUnit(imageUrl: string, count: number) {
        return <div className='unit d-flex flex-column'>
            <div><img style={{height: '65px'}} src={imageUrl} /></div>
            <div className="unitCount">{count}</div>
        </div>;
    }

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
                    <div className="selectableUnitsBlock">
                        {SelectedRegion.units.map((unit) => {    
                            return (<div className={ "selectableUnit" + (unit.selected ? " selected" : "") } onClick={() => { selectUnit(unit) }}>
                                <img className="selectedUnit" style={{height: '50px'}} src={unit.imageUrl} />
                            </div>) 
                        })}
                    </div>
                    </Card.Text>
                    <Button variant="primary" onClick={() => {showUnitsMenu(false); setSelectedRegion(null);}}>Cancel</Button>
                </Card.Body>
            </Card>}            
        </div>
    );
}