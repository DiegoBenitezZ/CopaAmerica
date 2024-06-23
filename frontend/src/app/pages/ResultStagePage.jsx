import React from 'react'
import Layout from '../layouts/Layout'
import '../../assets/css/results-page/index.css'
import { groups } from '../../assets/data/groups.js'
import { useLocation } from 'react-router-dom'
import GroupCard from '../components/group-stage/GroupCard.jsx'
import WinnerItem from '../components/final-stage/WinnerItem.jsx'
import StageItem from '../components/final-stage/StageItem.jsx'
import '../../assets/css/group-stage/group-card.css'
import GroupList from '../components/group-stage/GroupList.jsx'
import StageList from '../components/final-stage/StageList.jsx'

function ResultStagePage() {
    let location = useLocation();
    let groupStage = location.state.groupStage;
    let finalStage = location.state.finalStage;

    console.log({groupStage, finalStage})
    return (
        <Layout id='results-container'>
            <h1 className='text-white header-sm'>Group Stage</h1>
            <GroupList tracker={groupStage}/>
            <h1 className='text-white header-sm'>Final Stage</h1>
            <StageList tracker={finalStage}/>
        </Layout>
    )
}

export default ResultStagePage