import React from 'react'
import StageItem from './StageItem'
import WinnerItem from './WinnerItem'

function StageList({tracker, passToFinal = () => {}, passToSemiFinal = () => {}, setWinner = () => {}}) {
  return (
    <div id='final-stage-bracket'>
        <WinnerItem countryId={tracker.champion}/>
        <h1 className='stage-title text-white header-sm'>Quarter Finals</h1>
        <StageItem id='quarter-stage-1' match={tracker.quarters.quarter1} wonId={tracker.semis.semi1.team1} passTo={passToSemiFinal}/>
        <StageItem id='quarter-stage-2' match={tracker.quarters.quarter2} wonId={tracker.semis.semi1.team2} passTo={passToSemiFinal}/>
        <StageItem id='quarter-stage-3' match={tracker.quarters.quarter3} wonId={tracker.semis.semi2.team1} passTo={passToSemiFinal}/>
        <StageItem id='quarter-stage-4' match={tracker.quarters.quarter4} wonId={tracker.semis.semi2.team2} passTo={passToSemiFinal}/>
        <h1 className='stage-title text-white header-sm'>Semi Finals</h1>
        <StageItem 
          id='semi-stage-1'
          match={tracker.semis.semi1}
          wonId={tracker.final.team1}
          passTo={passToFinal}
        />
        <StageItem 
          id='semi-stage-2'
          match={tracker.semis.semi2}
          wonId={tracker.final.team2}
          passTo={passToFinal}
        />
        <h1 className='stage-title text-white header-sm'>Final</h1>
        <StageItem 
          id='final-stage'
          match={tracker.final}
          wonId={tracker.champion}
          passTo={setWinner}
        />
      </div>
  )
}

export default StageList