import React from 'react'
import './homePage.scss'
import MenuList from '../../components/menu-list/MenuList';
import Nav from '../../components/navigation menu/Nav'

export default function HomePage() {
  return (
    <div className='homepage'>
      <Nav />
      <MenuList />
    </div>
  )
}
