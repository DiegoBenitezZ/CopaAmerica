import { NavLink, Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../assets/css/common/nav-side.css'

function NavSide({showMenu}) {
  return (
    <nav id="nav-side" className={`container-nav-side ${(showMenu == true ? 'show' : '')}`}>
        <ul className="list-nav-side">
            <img className='nav-logo' src="/img/logo/logo2.png" alt="Copa America"/>
            <hr/>
            <li className="item-nav-side">
                <NavLink className="link-action" to="/">Tournament</NavLink>
            </li>
            <hr/>
            <li className="item-nav-side">
                <Link className="link-action" to="https://personal-page-iota-ten.vercel.app/" target="_blank" rel="noopener noreferrer">Contact Us</Link>
            </li>
            <hr/>
            <li className="item-nav-side">
                <Link className="link-action">
                    Language
                    <FontAwesomeIcon size="sm" icon="fa-solid fa-caret-down" />
                </Link>
            </li>
            <hr/>
        </ul>
    </nav>
  )
}

export default NavSide