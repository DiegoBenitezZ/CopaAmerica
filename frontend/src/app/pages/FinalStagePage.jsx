import { useEffect, useState } from 'react'
import Layout from '../layouts/Layout'
import '../../assets/css/final-stage/index.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import '../../assets/css/final-stage/winner-item.css'
import Button from '../components/common/Button'
import StageList from '../components/final-stage/StageList'
import Message from '../components/common/Message'

function FinalStagePage() {
  let navigate = useNavigate();
  let location = useLocation();
  const [error, setError] = useState(null);
  let groupStage = location.state;  
  let [finalStage, setFinalStage] = (groupStage !== null) ? useState(() => {
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
      champion: undefined,
    }
  }) : useState(null);


  useEffect(() => {
    if(finalStage == null) {
      navigate('/group-stage')
    }
  }, []);

  const setErrorMessage = (msg) => {
    setError((prevState) => msg);
  }

  const handleClickError = () => {
    setError((prevState) => null);
  }


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
    let filterQuarter = Object.keys(finalStage.quarters).filter(key =>  finalStage['quarters'][key].team1 === undefined || finalStage['quarters'][key].team2 === undefined)
    let filterSemi = Object.keys(finalStage.semis).filter(key =>  finalStage['semis'][key].team1 === undefined || finalStage['semis'][key].team2 === undefined)
    let filterFinal = (finalStage.final.team1 === undefined || finalStage.final.team2 === undefined) ? ['final'] : [];
    
    if(filterQuarter.length === 0 && filterSemi.length === 0 && filterFinal.length === 0 && finalStage.champion !== undefined){
      navigate('/results',{state: {groupStage: groupStage, finalStage: finalStage}});
    }
    else {
      setErrorMessage('No empty fields allowed')
    }
  }

  return (
    <Layout id='final-stage-container'>
      <Message className='message-danger' callback={handleClickError} msg={error}/>
      {
        (finalStage !== null) &&
        <>
          <h1 className='view-title text-white header-sm'>Final Stage</h1>
          <StageList tracker={finalStage} passToFinal={passToFinal} passToSemiFinal={passToSemiFinal} setWinner={setWinner}/>
          <div className="btn-group btn-absolute">
            <NavLink to='/group-stage' className='btn btn-primary'>Back to Group State</NavLink>
            <Button 
              callback={handleSubmit} 
              className='btn-secondary'
            >FInish Bracket</Button>
          </div>
        </>
      }
    </Layout>
  )
}

export default FinalStagePage