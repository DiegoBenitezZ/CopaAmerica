import {Route, Routes} from 'react-router-dom'
import HomePage from '../app/pages/HomePage'
import GroupStagePage from '../app/pages/GroupStagePage'
import FinalStagePage from '../app/pages/FinalStagePage'
import ResultStagePage from '../app/pages/ResultStagePage'

function Index() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/group-stage' element={<GroupStagePage/>}/>
      <Route path='/final-stage' element={<FinalStagePage/>}/>
      <Route path='/results' element={<ResultStagePage/>}/>
    </Routes>
  )
}

export default Index