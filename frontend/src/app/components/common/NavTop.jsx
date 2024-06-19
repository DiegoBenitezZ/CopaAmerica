import React from 'react'
import '../../../assets/css/common/nav-top.css'
import { NavLink, Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavTop({toggleShowMenu}) {
  return (
    <nav className='nav-container'>
      <img className='nav-logo' src="/img/logo/logo.png" alt="Copa America"/>
      <div className='icon-group'>
        <NavLink className="link-action" to="/">Tournament</NavLink>
        <Link className="link-action" to="https://personal-page-iota-ten.vercel.app/" target="_blank" rel="noopener noreferrer">Contact Us</Link>
        <Link className="link-action">
          <FontAwesomeIcon size='md' icon="fa-solid fa-globe" />
          English
          <FontAwesomeIcon icon="fa-solid fa-caret-down" />
        </Link>
        <FontAwesomeIcon onClick={() => toggleShowMenu()}  className='nav-menu-icon' icon="fa-solid fa-bars" />
      </div>
    </nav>
  )
}

export default NavTop