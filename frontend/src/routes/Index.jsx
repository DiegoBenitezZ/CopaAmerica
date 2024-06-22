import {Route, Routes} from 'react-router-dom'
import HomePage from '../app/pages/HomePage'
import GroupStagePage from '../app/pages/GroupStagePage'

function Index() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/group-stage' element={<GroupStagePage/>}/>
    </Routes>
  )
}

export default Index