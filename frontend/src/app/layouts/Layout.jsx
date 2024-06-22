import { useState } from 'react'
import '../../assets/css/layouts/layout.css'
import NavTop from '../components/common/NavTop'

function Layout({id, children}) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu((prevState) => !prevState)
  }
  
  return (
    <div id={id} className="layout-container">
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