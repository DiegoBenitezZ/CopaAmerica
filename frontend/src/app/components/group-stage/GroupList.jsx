import React from 'react'
import GroupCard from './GroupCard.jsx'
import { groups } from '../../../assets/data/groups.js' 

function GroupList({tracker, changePositions = () => {}}) {
  return (
    <div className='group-stage-list'>
          {
              groups.map((group) => 
                <GroupCard key={group.id} changePositions={changePositions} group={group} tracker={tracker[group.id]}/>
              )
          }
    </div>
  )
}

export default GroupList