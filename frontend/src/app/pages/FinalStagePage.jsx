import { useState, useEffect } from 'react'
import Layout from '../layouts/Layout'
import '../../assets/css/final-stage/index.css'
import StageItem from '../components/final-stage/StageItem'
import { NavLink, useLocation } from 'react-router-dom'
import WinnerItem from '../components/final-stage/WinnerItem'
import '../../assets/css/final-stage/winner-item.css'
import Button from '../components/common/Button'


function FinalStagePage() {
  let location = useLocation();
  let groupStage = location.state;  
  let [finalStage, setFinalStage] = useState(() => {
    return {
      quarters: {
        quarter1: {team1: groupStage[1][0], team2: groupStage[2][1], goTo: 'semi1', teamId: 'team1'},
        quarter2: {team1: groupStage[2][0], team2: groupStage[1][1], goTo: 'semi1', teamId: 'team2'},
        quarter3: {team1: groupStage[3][0], team2: groupStage[4][1], goTo: 'semi2', teamId: 'team1'},
        quarter4: {team1: groupStage[4][0], team2: groupStage[3][1], goTo: 'semi2', teamId: 'team2'},
      },
      semis:  {
        semi1:  {team1: undefined, team2:undefined, teamId: 'team1'},
        semi2:  {team1: undefined, team2: undefined, teamId: 'team2'}
      },
      final: {team1: undefined, team2:undefined, goTo: 'champion'},
      champion: undefined
    }
  });

  const passToSemiFinal = (countryId, teamId, goTo) => {
    setFinalStage((prevState) => {
        let finalTeam =  prevState['semis'][goTo].teamId;

        prevState['semis'][goTo][teamId] = countryId;
        prevState['final'][finalTeam]= undefined;
        prevState.champion = undefined;

        return {
          ...prevState
        }
    });
  }

  const passToFinal = (countryId, teamId) => {

    setFinalStage((prevState) => {
      prevState['final'][teamId] = countryId;
      prevState.champion = undefined;

      return {
        ...prevState
      }
    });
  }

  const setWinner = (countryId) => {
    setFinalStage((prevState) => {
      return {
        ...prevState,
        champion: countryId
      }
    });
  }

  const handleSubmit = () => {
    alert(1);
  }

  return (
    <Layout id='final-stage-container'>
      <h1 className='view-title text-white header-sm'>Final Stage</h1>
      <div id='final-stage-bracket'>
        <WinnerItem countryId={finalStage.champion}/>
        <h1 className='stage-title text-white header-sm'>Quarter Finals</h1>
        <StageItem id='quarter-stage-1' match={finalStage.quarters.quarter1} wonId={finalStage.semis.semi1.team1} passTo={passToSemiFinal}/>
        <StageItem id='quarter-stage-2' match={finalStage.quarters.quarter2} wonId={finalStage.semis.semi1.team2} passTo={passToSemiFinal}/>
        <StageItem id='quarter-stage-3' match={finalStage.quarters.quarter3} wonId={finalStage.semis.semi2.team1} passTo={passToSemiFinal}/>
        <StageItem id='quarter-stage-4' match={finalStage.quarters.quarter4} wonId={finalStage.semis.semi2.team2} passTo={passToSemiFinal}/>
        <h1 className='stage-title text-white header-sm'>Semi Finals</h1>
        <StageItem 
          id='semi-stage-1'
          match={finalStage.semis.semi1}
          wonId={finalStage.final.team1}
          passTo={passToFinal}
        />
        <StageItem 
          id='semi-stage-2'
          match={finalStage.semis.semi2}
          wonId={finalStage.final.team2}
          passTo={passToFinal}
        />
        <h1 className='stage-title text-white header-sm'>Final</h1>
        <StageItem 
          id='final-stage'
          match={finalStage.final}
          wonId={finalStage.champion}
          passTo={setWinner}
        />
      </div>
      <div className="btn-group align-end">
        <NavLink to='/group-stage' className='btn btn-primary'>Back to Group State</NavLink>
        <Button 
          callback={handleSubmit} 
          className='btn-secondary'
        >Next Stage</Button>
      </div>
    
    </Layout>
  )
}

export default FinalStagePage