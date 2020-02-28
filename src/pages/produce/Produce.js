import React, { Component } from 'react'
import MenuCollection from '../../components/menu-collection/MenuCollection'

export default class Produce extends Component {
  constructor (){
    super()
    this.state = {
      produceData:[
        {
          id: 1,
          title: 'Fruits',
          subtitle: 'fresh from farm',
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
      <div className='produce-list'>
        {this.state.produceData
          .map(({id, title, items}) => (
            <MenuCollection key={id} title={title} items={items}/>
          ))}
      </div>
    )
  }
}
