import React from 'react'
import './menuitem.scss'

export default function MenuItem({title, subtitle, imageSrc}) {
  return (
    <div 
      className='menu-item'
      style={{
        backgroundImage: `url(${imageSrc})`
      }}
      >
      <div className='content'>
        <div className='title'>{title}</div>
        <span className='subtitle'>{subtitle}</span>
      </div>
    </div>
  )
}
