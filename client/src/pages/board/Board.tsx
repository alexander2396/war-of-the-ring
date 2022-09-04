import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../tools/hooks/hooks";
import { RenderRegionAreas } from "../../components/region/renderRegionAreas";
import { RenderRegion } from "../../components/region/renderRegion";
import { Region } from "../../models/region";
import { selectRegions } from "../../redux/game/gameSlice";
import './Board.css';
import { UnitsMenu } from "../../components/units-menu/unitsMenu";
import { ActiveCards } from "../../components/active-cards/activeCards";
import { Room } from "../../components/room/room";
import { HuntDices } from "../../components/hunt-dices/huntDices";
import { PoliticsTracks } from "../../components/politics/politicsTracks";
import { Rings } from "../../components/rings/rings";
import { VictoryPoints } from "../../components/victory-points/victoryPoints";

export function Board(props: any) {
    const [ShowUnitsMenu, showUnitsMenu]=useState(false);
    const [SelectedRegion, setSelectedRegion]=useState(null as Region);

    const regions = useAppSelector(selectRegions);
    const dispatch = useAppDispatch();

    return (
        <div className='board'>
            <img className='boardMap' src={"images/board.jpg"} useMap="#Map" alt=""/>

            {regions.map((region, i) => (
                <RenderRegion region = {region} regionClicked = {{showUnitsMenu, setSelectedRegion, dispatch, SelectedRegion}} />
            ))}

            <map name="Map" id="Map">
                <RenderRegionAreas regions = {regions} regionClicked = {{showUnitsMenu, setSelectedRegion, dispatch, SelectedRegion}}/>
            </map>

            {ShowUnitsMenu && 
                <UnitsMenu selectedRegion={SelectedRegion} setSelectedRegion={setSelectedRegion} showUnitsMenu={showUnitsMenu}/>
            }

            <ActiveCards />

            <HuntDices />

            <Room />

            <PoliticsTracks />

            <Rings />

            <VictoryPoints />
        </div>
    );
}