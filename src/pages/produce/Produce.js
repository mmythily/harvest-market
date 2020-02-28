import React, { Component } from 'react'
import './produce.scss'
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
              name: 'apple',
              src: 'https://pngimg.com/uploads/apple/apple_PNG12458.png',
              price:10
            },
            {
              id: 2,
              name:'grape',
              src: 'https://www.tfocanada.ca/global/egypt%20grapes.png',
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
              src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190423-microwave-corn-140-1556657770.jpg',
              price:10
            },
            {
              id: 2,
              name:'tomato',
              src: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg',
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
              src: 'https://pngimg.com/uploads/milk/milk_PNG12742.png',
              price:10
            },
            {
              id: 2,
              name:'eggs',
              src: 'https://purepng.com/public/uploads/large/purepng.com-eggseggseggshellegg-whiteegg-yolk-1411527410594xzobo.png',
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
              src: 'https://w0.pngwave.com/png/174/93/tea-soured-milk-plant-milk-yogurt-yogurt-png-clip-art-thumbnail.png',
              price:10
            },
            {
              id: 2,
              name:'kombucha',
              src: 'https://banner2.cleanpng.com/20180628/fqb/kisspng-brew-dr-kombucha-tea-raw-foodism-drink-5b34c539b2f1d2.347939891530185017733.jpg',
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
              name: 'peanut',
              src: 'https://pngimg.com/uploads/peanut/peanut_PNG40.png',
              price:10
            },
            {
              id: 2,
              name:'cashew nuts',
              src: 'https://pngimg.com/uploads/cashew/cashew_PNG31.png',
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
              src: 'https://img.favpng.com/7/17/23/apple-pie-tart-mince-pie-blueberry-pie-png-favpng-rZ3m68ZuFKe4R5dRbQVgTF6nA.jpg',
              price:10
            },
            {
              id: 2,
              name:'apple crisp',
              src:'https://banner2.cleanpng.com/20180628/kek/kisspng-apple-crisp-dish-recipe-food-cuisine-side-dish-5b359073b4df10.9173057115302370437409.jpg',
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
