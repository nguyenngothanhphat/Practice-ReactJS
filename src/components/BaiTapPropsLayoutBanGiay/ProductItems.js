import React, { Component } from 'react';

export default class ProductItems extends Component {
  render() {
    let {name, alias, price, image} = this.props.dataShoesProp;
    return (
      <div>
        <div className="card text-center" style={{height: '400px'}}>
          <img className="card-img-top" src={image} alt={alias} style={{width: '200px'}} />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">${price}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    )
  }
}
