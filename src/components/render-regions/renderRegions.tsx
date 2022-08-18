import React from 'react'
import { Region } from '../../models/region'
import { RenderRegionUnits } from '../render-region-units/RenderRegionUnits'

type PropTypes = {
    regions: Region[]
    regionClicked: (region: Region) => void
}
export const RenderRegions = ({regions, regionClicked}: PropTypes) => {
  return (
    <>
        {
            regions.map((region, i) => (
                <div key={i}>
                    <div className='regionArmy d-flex flex-row' style={{ left: region.xposition + 'px', top: region.yposition + 'px' }}
                        onClick={() => regionClicked(region)}>
                            
                        <RenderRegionUnits region={region}/>
                    </div>
                </div>
            ))
        }
    </>
  )
}
