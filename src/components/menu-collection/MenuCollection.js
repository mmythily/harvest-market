import React from 'react'
import './menucollection.scss'

function MenuCollection({title, items, id}) {
  return (
    <div 
      className='menu-collect'
      
      >
      <div className='collect'>
        <div className='title'>{title}</div>
        <div>
        {items.map(item => (
          <div>
            {item.name}
            {item.price}
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default MenuCollection