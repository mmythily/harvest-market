import React, { Component } from 'react'
import './directory.scss'
import MenuItem from '../menu-item/MenuItem'

import imgfruit from '../../assets/fruits.jpg'
import imgvegetable from '../../assets/vegetables.jpg'
import imgdairy from '../../assets/dairy.jpg'
import imgfermented from '../../assets/fermented.jpg'
import imgnuts from '../../assets/nuts.jpg'
import imgbaked from '../../assets/baked.jpg'


export default class Directory extends Component {
  constructor (){
    super()
    this.state = {
      sections:[
        {
          title: 'Fruits',
          subtitle: 'fresh from farm',
          imageSrc: imgfruit,
          id: 1
        },
        {
          title: 'Vegetables',
          subtitle: 'fresh from farm',
          imageSrc: imgvegetable,
          id: 2
        },
        {
          title: 'Dairy',
          subtitle: 'fresh from farm',
          imageSrc: imgdairy,
          id: 3
        },
        {
          title: 'Fermented',
          subtitle: 'canned with care',
          imageSrc: imgfermented,
          id: 4
        },
        {
          title: 'Nut and seeds',
          subtitle: 'just nuts for seeds',
          imageSrc: imgnuts,
          id: 5
        },
        {
          title: 'Baked Goods',
          subtitle: 'fresh from oven',
          imageSrc: imgbaked,
          id: 6
        }
      ]
    }
  }
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections
          .map(({id, title, subtitle, imageSrc}) => (
            <MenuItem key={id} title={title} subtitle={subtitle} imageSrc={imageSrc} />
          ))}
      </div>
    )
  }
}
