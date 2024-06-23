import { useState } from 'react'
import '../../assets/css/layouts/layout.css'
import NavTop from '../components/common/NavTop'
import NavSide from '../components/common/NavSide'

function Layout({id, children}) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu((prevState) => !prevState)
  }
  
  return (
    <div id={id} className="layout-container">
      <NavSide showMenu={showMenu}/>
      <header id='layout-header'>
        <NavTop toggleShowMenu={toggleShowMenu}/>
      </header>
      <main id='layout-content'>
        {children}
      </main>
    </div>
  )
}

export default Layout