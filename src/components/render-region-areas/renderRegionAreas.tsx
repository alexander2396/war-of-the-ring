import React from 'react'
import { Region } from '../../models/region'

type PropTypes = {
    regions: Region[]
    regionClicked: (region: Region) => void
}

export const RenderRegionAreas = ({regions, regionClicked}: PropTypes) => {
    
  return (
    <>
        {
            regions.map((region, i) => {
                const coords = [region.xposition, region.yposition, 25].join(',');
                return (
                    <area key={i} className='region' shape="circle" onClick={() => regionClicked(region)} coords={coords} alt = "" />
                )
            })
        }
    </>
  )
}
