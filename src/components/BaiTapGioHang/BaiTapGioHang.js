import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cart from './Cart'
import ProductDetail from './ProductDetail';
import ProductList from './ProductList'

class BaiTapGioHang extends Component {
  data = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "../img/phone/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "../img/phone/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "../img/phone/applephone.jpg",
    },
  ];

  state = {
    productData: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "../img/phone/vsphone.jpg",
    },
    carts: [
      {
        maSP: 1,
        tenSP: "VinSmart Live",
        giaBan: 5700000,
        hinhAnh: "../img/phone/vsphone.jpg",
        soLuong: 1
      }
    ]
  }

  xemChiTiet = (newProduct) => {
    this.setState({
      productData: newProduct
    })
  }
  
  render() {
    return (
      <div className="container">
        <h3 className="text-center pt-4 pb-4">Danh Sách Sản Phẩm</h3>
        <a href="#" className="text-danger text-right d-block mr-4 mb-3" data-toggle="modal" data-target="#modelId">Giỏ hàng ({this.props.gioHang.length.toLocaleString()})</a>
        <Cart />
        <ProductList productsData={this.data} xemChiTiet={this.xemChiTiet} />
        <ProductDetail productData={this.state.productData} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.stateGioHang.gioHang
  }
}

export default connect(mapStateToProps)(BaiTapGioHang)