import React from 'react'
import { countries } from '../../../assets/data/countries'


function WinnerItem({countryId}) {
  let country = countries.find(country => country.id === countryId)

  return (
    <div id='winner-container'>
      <img id='winner-cup' src="/img/utils/cup.png" alt="Copa america cup" />
      <img id='winner-flag' src={(country !== undefined) ? `/img/countries/${country.filename}` : '/img/utils/circle.svg'} alt="Copa america cup" />
    </div>
  )
}

export default WinnerItem