import Button from '../components/common/Button.jsx'
import GroupCard from '../components/group-stage/GroupCard.jsx'
import { useState } from 'react'
import { groups } from '../../assets/data/groups.js' 
import { NavLink } from 'react-router-dom'
import '../../assets/css/group-stage/index.css'
import Layout from '../layouts/Layout.jsx'

function GroupStagePage() {
  const [positionsTracker, setPostionsTracker] = useState(() => {
    return {
      1: [undefined, undefined, undefined, undefined],
      2: [undefined, undefined, undefined, undefined],
      3: [undefined, undefined, undefined, undefined],
      4: [undefined, undefined, undefined, undefined],
    }
  })

  const changePositions = (countryId, groupId, positionId) => {
    setPostionsTracker((prevState) => {
      prevState[groupId][positionId] = countryId;

      return {
        ...prevState
      }
    })
  }

  return (
    <Layout id='group-stage-container'>
        <h1 id="test-drag" className='text-white header-sm'>Group Stage</h1>
        <div className='group-stage-list'>
        {
            groups.map((group) => 
              <GroupCard key={group.id} changePositions={changePositions} group={group} tracker={positionsTracker[group.id]}/>
            )
          }
        </div>
        <div className="btn-group align-end">
          <NavLink to='/' className='btn btn-primary'>Back to Main</NavLink>
          <Button className='btn-secondary'>Next Stage</Button>
        </div>
    </Layout>
  )
}

export default GroupStagePage