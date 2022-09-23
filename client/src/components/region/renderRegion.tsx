import { Side } from '../../models/enums/side'
import { Region } from '../../models/region'
import { Fellowship } from './fellowship'
import { regionClicked, RegionClickedTypes } from './regionClicked'
import { RenderRegionUnits } from './renderRegionUnits'

type PropTypes = {
    region: Region
    regionClicked: RegionClickedTypes
}
export const RenderRegion = ({region, regionClicked: regionClickedProp}: PropTypes) => {
    const {dispatch, setSelectedRegion, SelectedRegion, showUnitsMenu} = regionClickedProp;

    return (
        <div>
            <div 
            className='regionArmy d-flex flex-row' 
            style={{ left: region.xposition + 'px', top: region.yposition + 'px' }}
            onClick={
                () => {regionClicked({region, dispatch, setSelectedRegion, SelectedRegion, showUnitsMenu})}
            }>
                    
                <RenderRegionUnits region={region} />

                { region.isFellowshipHere === true && <Fellowship region={region} />}

                {
                    region.captured === true && region.side === Side.FreePeople &&
                    <img className='region-control-image' src='images/ShadowControl.png' alt = ""/>
                }

                {
                    region.captured === true && region.side === Side.SauronForces &&
                    <img className='region-control-image' src='images/FreeControl.png' alt = ""/>
                }
            </div>
        </div>
    )
}
