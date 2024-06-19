import React from 'react'
import { countries } from '../../../assets/data/countries'
import '../../../assets/css/home/track-flags.css'

function TrackFlags() {
  return (
    <div className='container-track-flags'>
      {
          countries.map((country) => 
              <img className='flag-icon' src={`/img/countries/${country.filename}`} alt="" />
          )
      }
    </div>
  )
}

export default TrackFlags