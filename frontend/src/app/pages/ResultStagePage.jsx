import React, { useEffect } from 'react'
import Layout from '../layouts/Layout'
import '../../assets/css/results-page/index.css'
import { useLocation, useNavigate } from 'react-router-dom'
import '../../assets/css/group-stage/group-card.css'
import GroupList from '../components/group-stage/GroupList.jsx'
import StageList from '../components/final-stage/StageList.jsx'
import Button from '../components/common/Button.jsx'

function ResultStagePage() {
    let location = useLocation();
    let navigate = useNavigate();
    let groupStage = (location.state) && location.state.groupStage;
    let finalStage = (location.state) && location.state.finalStage;

    const handleSubmit = () => {
        navigate('/')
    }

    useEffect(() => {
        if(groupStage === null & finalStage === null) {
            navigate('/group-stage');
        }
    });

    return (
        <Layout id='results-container'>
            {(finalStage != null && groupStage != null) &&
                <>
                    <h1 className='text-white header-sm'>Group Stage</h1>
                    <GroupList tracker={groupStage}/>
                    <h1 className='text-white header-sm'>Final Stage</h1>
                    <StageList tracker={finalStage}/>
                    <div className="btn-group btn-absolute">
                        <Button callback={handleSubmit} className='btn-primary'>Reset Bracket</Button>
                    </div>
                </>
            }
        </Layout>
    )
}

export default ResultStagePage