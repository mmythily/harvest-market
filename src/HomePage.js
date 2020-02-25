import React from 'react'

export default function HomePage() {
  return (
    <div className='homepage'>
      <h1>Harvest Market</h1>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>Fruits</div>
            <span className='subtitle'>fresh from farm</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>Vegetables</div>
            <span className='subtitle'>fresh from farm</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>Dairy</div>
            <span className='subtitle'>fresh from farm</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>Fermented</div>
            <span className='subtitle'>canned with care</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>Nuts and Seeds</div>
            <span className='subtitle'>just nuts for seeds</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>Baked Goods</div>
            <span className='subtitle'>fresh from oven</span>
          </div>
        </div>
      </div>
    </div>
  )
}
