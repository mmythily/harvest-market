import React from 'react'
import './menucollection.scss'

function MenuCollection({title, items}) {
  return (
    <>
      <h1 id='item-title'>{title.toUpperCase()}</h1>
      <div className='menu-collection'>
        {items.map(item => (
          <article id='item-article'>
            <img src={item.src} alt={item.name}/><br/>
            <p id='item-name'>{item.name}</p>
            <p id='item-price'>${item.price}.00</p>
            <button>Add</button>
          </article>
        ))}
      </div>
    </>
  )
}

export default MenuCollection