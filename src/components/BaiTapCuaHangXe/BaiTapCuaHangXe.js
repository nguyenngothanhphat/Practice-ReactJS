import React, { Component } from "react";
import DanhSachXe from "./DanhSachXe";
import Modal from "./Modal";

export default class BaiTapCuaHangXe extends Component {
  products = [
    {
      id: 1,
      name: "black car",
      img: "../img/products/black-car.jpg",
      price: 1000,
    },
    { 
      id: 2, 
      name: "red car", 
      img: "../img/products/red-car.jpg", 
      price: 2000 
    },
    {
      id: 3,
      name: "silver car",
      img: "../img/products/silver-car.jpg",
      price: 3000,
    },
    {
      id: 4,
      name: "steel car",
      img: "../img/products/steel-car.jpg",
      price: 4000,
    },
  ];

  state = {
    data: {
      id: 1,
      name: "black car",
      img: "../img/products/black-car.jpg",
      price: 1000,
    }
  };

  handleClick = (product) => {
  console.log("🚀 ~ file: BaiTapCuaHangXe.js ~ line 43 ~ BaiTapCuaHangXe ~ product", product)
    this.setState({
      data: product
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Modal info={this.state.data} />
          <DanhSachXe sanPham={this.products} click={this.handleClick} />
        </div>
      </div>
    );
  }
}
