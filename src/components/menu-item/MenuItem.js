import React from 'react'
import './menuitem.scss'

export default function MenuItem({title, subtitle, imageSrc}) {
  return (
    <div 
      style={{
        backgroundImage: `url(${imageSrc})`
      }}
      className='menu-item'>
      <div className='content'>
        <div className='title'>{title}</div>
        <span className='subtitle'>{subtitle}</span>
      </div>
    </div>
  )
}
