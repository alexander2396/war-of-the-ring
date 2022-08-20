import { Region } from '../../models/region'
import { regionClicked, RegionClickedTypes } from './regionClicked'

type PropTypes = {
    regions: Region[]
    regionClicked: RegionClickedTypes
}

export const RenderRegionAreas = ({regions, regionClicked: regionClickedProp}: PropTypes) => {
    const {dispatch, setSelectedRegion, SelectedRegion, showUnitsMenu} = regionClickedProp;
  return (
    <>
        {
            regions.map((region, i) => {
                const coords = [region.xposition, region.yposition, 25].join(',');
                return (
                    <area 
                    key={i} 
                    className='region' 
                    shape="circle" 
                    onClick={
                        () => regionClicked({region, dispatch, setSelectedRegion, SelectedRegion, showUnitsMenu})
                    } 
                    coords={coords} alt = "" />
                )
            })
        }
    </>
  )
}
