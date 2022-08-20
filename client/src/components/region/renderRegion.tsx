import { Region } from '../../models/region'
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
                () => regionClicked({region, dispatch, setSelectedRegion, SelectedRegion, showUnitsMenu})
            }>
                    
                <RenderRegionUnits region={region}/>
            </div>
        </div>
    )
}
