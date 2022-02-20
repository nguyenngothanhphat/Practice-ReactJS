import React, { Component } from 'react'

export default class ProductDetail extends Component {
  render() {
    let {productData} = this.props;
    return (
      <div className="row">
        <div className="col-4">
          <img src={productData.hinhAnh} alt={productData.tenSP} style={{width: "400px"}} />
        </div>
        <div className="col-8">
          <h3>Thông tin sản phẩm</h3>
          <table className="table">
            <tbody>      
              <tr>
                <td>Màn hình</td>
                <td>{productData.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{productData.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera chính</td>
                <td>{productData.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera phụ</td>
                <td>{productData.cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{productData.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{productData.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}