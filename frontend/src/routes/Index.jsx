import {Route, Routes} from 'react-router-dom'
import HomePage from '../app/pages/HomePage'

function Index() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
  )
}

export default Index