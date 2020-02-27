import React, { Component } from 'react'
import './menulist.scss'
import MenuItem from '../menu-item/MenuItem'

import imgfruit from '../../assets/fruits.jpg'
import imgvegetable from '../../assets/vegetables.jpg'
import imgdairy from '../../assets/dairy.jpg'
import imgfermented from '../../assets/fermented.jpg'
import imgnuts from '../../assets/nuts.jpg'
import imgbaked from '../../assets/baked.jpg'


export default class MenuList extends Component {
  constructor (){
    super()
    this.state = {
      produceData:[
        {
          id: 1,
          title: 'Fruits',
          subtitle: 'fresh from farm',
          imageSrc: imgfruit,
          routeName: 'fruit',
          items: [
            {
              id: 1,
              name: 'apples',
              price:10
            },
            {
              id: 2,
              name:'grapes',
              price:20
            }
          ]
        },
        {
          id: 2,
          title: 'Vegetables',
          subtitle: 'fresh from farm',
          imageSrc: imgvegetable,
          routeName: 'veg',
          items: [
            {
              id: 1,
              name: 'corn',
              price:10
            },
            {
              id: 2,
              name:'tomato',
              price:20
            }
          ]
        },
        {
          id: 3,
          title: 'Dairy',
          subtitle: 'fresh from farm',
          imageSrc: imgdairy,
          routeName: 'dairy',
          items: [
            {
              id: 1,
              name: 'milk',
              price:10
            },
            {
              id: 2,
              name:'eggs',
              price:20
            }
          ]
        },
        {
          id: 4,
          title: 'Fermented',
          subtitle: 'canned with care',
          imageSrc: imgfermented,
          routeName: 'fermented',
          items: [
            {
              id: 1,
              name: 'yogurt',
              price:10
            },
            {
              id: 2,
              name:'kombucha',
              price:20
            }
          ]
        },
        {
          id: 5,
          title: 'Nuts and seeds',
          subtitle: 'just nuts for seeds',
          imageSrc: imgnuts,
          routeName: 'nuts',
          items: [
            {
              id: 1,
              name: 'peanuts',
              price:10
            },
            {
              id: 2,
              name:'cashew nuts',
              price:20
            }
          ]
        },
        {
          id: 6,
          title: 'Baked Goods',
          subtitle: 'fresh from oven',
          imageSrc: imgbaked,
          routeName: 'baked',
          items: [
            {
              id: 1,
              name: 'apple pie',
              price:10
            },
            {
              id: 2,
              name:'apple crisp',
              price:20
            }
          ]
        }
      ]
    }
  }
  render() {
    return (
      <div className='menu-list'>
        {this.state.produceData
          .map(({id, title, subtitle, imageSrc}) => (
            <MenuItem key={id} title={title} subtitle={subtitle} imageSrc={imageSrc} />
          ))}
      </div>
    )
  }
}
