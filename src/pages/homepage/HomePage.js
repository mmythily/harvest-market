import React from 'react'
import {Link} from 'react-router-dom';
import './homePage.scss'
import MenuList from '../../components/menu-list/MenuList';

export default function HomePage() {
  return (
    <div className='homepage'>
      <nav>
        <ul>
          <li><Link to='/'>Harvest Market </Link></li>
          <li><Link to='/produce'> Produce</Link></li>
        </ul>
      </nav>
      <MenuList />
    </div>
  )
}
