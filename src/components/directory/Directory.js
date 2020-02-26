import React, { Component } from 'react'
import MenuItem from '../menu-item/MenuItem'
import './directory.scss'

export default class Directory extends Component {
  constructor (){
    super()
    this.state = {
      sections:[
        {
          title: 'Fruits',
          subtitle: 'fresh from farm',
          id: 1
        },
        {
          title: 'Vegetables',
          subtitle: 'fresh from farm',
          id: 2
        },
        {
          title: 'Dairy',
          subtitle: 'fresh from farm',
          id: 3
        },
        {
          title: 'Fermented',
          subtitle: 'canned with care',
          id: 4
        },
        {
          title: 'Nut and seeds',
          subtitle: 'just nuts for seeds',
          size: 'large',
          id: 5
        },
        {
          title: 'Baked Goods',
          subtitle: 'fresh from oven',
          id: 6
        }
      ]
    }
  }
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections
          .map(({title, subtitle, imageUrl, id, size}) => (
            <MenuItem key={id} title={title} subtitle={subtitle} imageUrl={imageUrl} size={size}/>
          ))}
      </div>
    )
  }
}
