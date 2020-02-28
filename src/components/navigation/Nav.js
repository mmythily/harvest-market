import React from 'react'
import {Link} from 'react-router-dom';


export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Harvest Market </Link></li>
        <li><Link to='/produce'> Produce</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
      </ul>
    </nav>
  )
}
