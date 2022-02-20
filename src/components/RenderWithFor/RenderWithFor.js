import React, { Component } from 'react'

export default class RenderWithFor extends Component {
  productLists = [
    {
      id: 1,
      name: "Black",
      price: 1000,
      img: "../img/products/black-car.jpg"
    },
    {
      id: 2,
      name: "Steel",
      price: 1000,
      img: "../img/products/steel-car.jpg"
    },
    {
      id: 3,
      name: "Silver",
      price: 1000,
      img: "../img/products/silver-car.jpg"
    },
    {
      id: 4,
      name: "Red",
      price: 1000,
      img: "../img/products/red-car.jpg"
    }
  ];

  // renderProduct = () => {
  //   let productArray = []
  //   for (var i = 0; i < this.productLists.length; i++) {
  //     let tdJSX = <tr>
  //     <td>{this.productLists[i].name}</td>
  //     <td>{this.productLists[i].price}</td>
  //     <td><img src={this.productLists[i].img} style={{width: "100px"}}/></td>
  //   </tr>
  //     productArray.push(tdJSX)
  //   }
  //   return productArray;
  // }

  renderProduct = () => {
    return this.productLists.map((product, index) => {
      return (
        <tr>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td><img src={product.img} alt={product.id} style={{width: "100px"}} /></td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {this.renderProduct()}
          </tbody>
        </table>
      </div>
    )
  }
}
