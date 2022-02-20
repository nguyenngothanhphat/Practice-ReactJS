import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  renderProductList = () => {
    return this.props.productsData.map((product, index) => {
      return (
        <ProductItem productData={product} key={index} xemChiTiet={this.props.xemChiTiet} />
      )
    })
  }
  render() {
    return (
      <div className="row mb-5">
        {this.renderProductList()}
      </div>
    )
  }
}
