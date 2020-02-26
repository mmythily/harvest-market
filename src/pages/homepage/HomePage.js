import React from 'react'
import './homePage.scss'
import Directory from '../../components/directory/Directory'

export default function HomePage() {
  return (
    <div className='homepage'>
      <h1>Harvest Market</h1>
      <Directory />
    </div>
  )
}
