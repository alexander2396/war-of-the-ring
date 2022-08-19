import React from 'react'
import { Region } from '../../models/region'
import { regionClicked, RegionClickedTypes } from '../../tools/helpers/regionClicked'
import { RenderRegionUnits } from '../render-region-units/RenderRegionUnits'

type PropTypes = {
    regions: Region[]
    regionClicked: RegionClickedTypes
}
export const RenderRegions = ({regions, regionClicked: regionClickedProp}: PropTypes) => {
    const {dispatch, setSelectedRegion, SelectedRegion, showUnitsMenu} = regionClickedProp;
  return (
    <>
        {
            regions.map((region, i) => (
                <div key={i}>
                    <div 
                    className='regionArmy d-flex flex-row' 
                    style={{ left: region.xposition + 'px', top: region.yposition + 'px' }}
                    onClick={
                        () => regionClicked({region, dispatch, setSelectedRegion, SelectedRegion, showUnitsMenu})
                    }>
                            
                        <RenderRegionUnits region={region}/>
                    </div>
                </div>
            ))
        }
    </>
  )
}
