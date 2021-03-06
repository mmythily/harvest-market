import React from 'react'
import {withRouter} from 'react-router-dom'
import './menuitem.scss'

function MenuItem({title, subtitle, imageSrc, history, match, routeName}) {
  return (
    <div 
      className='menu-item'
      onClick={() => history.push(`${match.url}${routeName}`)}
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

export default withRouter(MenuItem)