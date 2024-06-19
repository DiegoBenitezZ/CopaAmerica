import NavTop from "../components/common/NavTop"
import '../../assets/css/layouts/index.css'
import NavSide from "../components/common/NavSide"
import { useState } from "react"

function BaseLayout({id, children}) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu((prevState) => !prevState)
  }
  
  return (
    <div id={id} className="layout-container">
        <NavTop toggleShowMenu={toggleShowMenu}/>
        <NavSide showMenu={showMenu}/>
        <div className="layout-content">
          {children}
        </div>
        
    </div>
  )
}

export default BaseLayout