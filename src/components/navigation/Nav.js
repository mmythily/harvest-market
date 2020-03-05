import React from 'react'
import {Link} from 'react-router-dom';
import './Nav.scss'


export default function Nav() {
  return (
    <nav className='navigation'>
      <ul>
        <li><Link to='/'>Harvest Market </Link></li>
        <li><Link to='/produce'> Produce</Link></li>
        <li><Link to='/signin'> Sign In</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
      </ul>
    </nav>
  )
}
