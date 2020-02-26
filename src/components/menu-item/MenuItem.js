import React from 'react'
import './menuitem.scss'

export default function MenuItem({title, subtitle}) {
  return (
    <div className='menu-item'>
      <div className='content'>
        <div className='title'>{title}</div>
        <span className='subtitle'>{subtitle}</span>
      </div>
    </div>
  )
}
