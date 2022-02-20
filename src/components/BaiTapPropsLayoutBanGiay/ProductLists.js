import React, { Component } from 'react'
import dataShoes from '../../Data/dataShoes.json';
import ProductItems from './ProductItems';

export default class ProductLists extends Component {
  renderProductItems = () => {
    return dataShoes.map((item, index) => {
      return (
        <ProductItems dataShoesProp={item} key={index} />
      )
    })
  }
  render() {
    return (
      <div className="card-columns">
        {this.renderProductItems()}
      </div>
    )
  }
}
