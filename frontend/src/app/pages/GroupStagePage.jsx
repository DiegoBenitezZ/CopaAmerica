import Button from '../components/common/Button.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import '../../assets/css/group-stage/index.css'
import Layout from '../layouts/Layout.jsx'
import GroupList from '../components/group-stage/GroupList.jsx'
import Message from '../components/common/Message.jsx'

function GroupStagePage() {
  const navigate = useNavigate();
  const [positionsTracker, setPostionsTracker] = useState(() => {
    return {
      1: [undefined, undefined, undefined, undefined],
      2: [undefined, undefined, undefined, undefined],
      3: [undefined, undefined, undefined, undefined],
      4: [undefined, undefined, undefined, undefined],
    }
  })
  const [error, setError] = useState(null);

  const setErrorMessage = (msg) => {
    setError((prevState) => msg);
  }

  const handleClickError = () => {
    setError((prevState) => null);
  }

  const changePositions = (countryId, groupId, positionId) => {
    setPostionsTracker((prevState) => {
      prevState[groupId][positionId] = countryId;

      return {
        ...prevState
      }
    })
  }

  const handleSubmit = () => {
    let filter = Object.keys(positionsTracker).filter(key => positionsTracker[key].includes(undefined));
    let isValid = filter.length === 0;

    if(isValid) {
      navigate('/final-stage', {state: positionsTracker});
    }
    else {
      setErrorMessage('No empty fields allowed')
    }
  }

  return (
    <Layout id='group-stage-container'>
        <Message className='message-danger' callback={handleClickError} msg={error}/>
        <h1 className='text-white header-sm'>Group Stage</h1>
        <GroupList tracker={positionsTracker} changePositions={changePositions}/>
        <div className="btn-group btn-absolute">
          <NavLink to='/' className='btn btn-primary'>Back to Main</NavLink>
          <Button 
            callback={handleSubmit} 
            className='btn-secondary'
          >Next Stage</Button>
        </div>
    </Layout>
  )
}

export default GroupStagePage