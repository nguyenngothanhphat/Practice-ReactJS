import React, { Component } from 'react'

export default class XeItem extends Component {
  render() {
    let {product} = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={product.img} alt={product.name} />
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text">{product.price.toLocaleString()}</p>
          <button className="btn btn-success" onClick={() => {this.props.click(product)}} data-toggle="modal" data-target="#modalId">Xem chi tiết</button>
        </div>
      </div>
    )
  }
}
