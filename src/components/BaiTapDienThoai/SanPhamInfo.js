import React, { Component } from 'react'

export default class SanPhamInfo extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4">
          <img src={this.props.productInfo.hinhAnh} alt={this.props.productInfo.tenSP} style={{width: "300px"}}/>
        </div>
        <div className="col-8">
          <h4>Thông số kỹ thuật</h4>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{this.props.productInfo.manHinh}</td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
