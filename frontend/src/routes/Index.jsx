import {Route, Routes} from 'react-router-dom'
import HomePage from '../app/pages/HomePage'
import GroupStagePage from '../app/pages/GroupStagePage'
import FinalStagePage from '../app/pages/FinalStagePage'

function Index() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/group-stage' element={<GroupStagePage/>}/>
      <Route path='/final-stage' element={<FinalStagePage/>}/>
    </Routes>
  )
}

export default Index