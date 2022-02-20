import React, { Component } from "react";
import SanPhamInfo from "./SanPhamInfo";
import SanPhamItem from "./SanPhamItem";

export default class DanhSachSanPham extends Component {
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
    dataPhone: {
      "maSP": 1,
      "tenSP": "VinSmart Live",
      "manHinh": "AMOLED, 6.2, Full HD+",
      "heDieuHanh": "Android 9.0 (Pie)",
      "cameraTruoc": "20 MP",
      "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
      "ram": "4 GB",
      "rom": "64 GB",
      "giaBan": 5700000,
      "hinhAnh": "../img/phone/vsphone.jpg",
    }
  }
  renderSanPham = () => {
    return this.data.map((item, index) => {
      return <SanPhamItem dataPhone={item} key={index} click={() => {this.handleClick(item)}} />;
    });
  };
  handleClick = (item) => {
    this.setState({
      dataPhone: item
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center pt-5 pb-5">DANH SÁCH SẢN PHẨM</h3>
            <div className="card-columns">
              {this.renderSanPham()}
            </div>
          </div>
        </div>
          <SanPhamInfo productInfo={this.state.dataPhone} />
      </div>
    )
  }
}
