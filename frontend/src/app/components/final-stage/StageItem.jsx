import React from 'react'
import { countries } from '../../../assets/data/countries'
import '../../../assets/css/final-stage/stage-item.css'

function StageItem({id, match = undefined, wonId = undefined, passTo}) {
    let country1 = (match != undefined) && countries.find((country) => (country.id) == match.team1);
    let country2 = (match != undefined) && countries.find((country) => (country.id) == match.team2);

    const handleClick = (country) => {
        if(match === undefined || country1 === undefined || country2 === undefined) {
            return;
        }

        if(match.hasOwnProperty('goTo')) {
            passTo(country, match.teamId, match.goTo);
        }
        else if (match.hasOwnProperty('teamId')){
            passTo(country, match.teamId);
        }
        else {
            passTo(country);
        }
    }

    return (
        <div id={id} className="stage">
            <div onClick={() => handleClick(country1.id)} className={`stage-team ${(country1 != undefined && country1.id === wonId) ? "bg-red text-white" : ''}`}>
                <img className='stage-team-img' src={(country1) ? `/img/countries/` + country1.filename : '/img/utils/circle.svg'} alt="" />
                <span className='stage-team-name'>{(country1) ? country1.name : ''}</span>
            </div>
            <hr/>
            <div onClick={() => handleClick(country2.id)} className={`stage-team ${(country2 != undefined && country2.id === wonId) ? "bg-red text-white" : ''}`}>
                <img className='stage-team-img' src={(country2) ? `/img/countries/` + country2.filename : '/img/utils/circle.svg'} alt="" />
                <span className='stage-team-name'>{(country2) ? country2.name : ''}</span>
            </div>
        </div>
    )
}

export default StageItem