import '../../../assets/css/home/card.css'
import Button from '../common/Button'
import TrackFlags from './TrackFlags'
import { Link, NavLink } from 'react-router-dom'

function CardHome() {
  return (
    <div className='card-container'>
        <span>
          <TrackFlags/>
          <h1 className='header-lg text-blue'>TOURNAMENT BRACKETS</h1>
          <h2 className='header-md text-outline-red'>Copa America USA 2024</h2>
        </span>
        <summary className='text-lg text-gray'>
          Pellentesque viverra massa ac enim maximus lacinia. 
          Ut molestie est sem, sit amet condimentum magna 
          maximus sed. In in elementum nulla. Quisque vitae 
          fringilla odio, vitae mattis sapien. Nam viverra lorem
          sit amet magna euismod, sed gravida mauris varius. 
          Praesent auctor quis ex non mattis. Duis pulvinar 
          scelerisque tortor eget aliquam.
        </summary>
        <div className='btn-group'>
          <NavLink className="btn btn-primary">Create Brackets</NavLink>
          <Link className="link-action external-link" to="https://copaamerica.com" target="_blank" rel="noopener noreferrer">Go to Official Page</Link>
        </div>
    </div>
  )
}

export default CardHome