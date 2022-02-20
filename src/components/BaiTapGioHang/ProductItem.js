import React, { Component } from 'react'
import {connect} from 'react-redux';

class ProductItem extends Component {
  render() {
    let {productData} = this.props;
    return (
      <div className="card" style={{margin: '0 auto'}}>
        <img className="card-img-top" src={productData.hinhAnh} alt={productData.tenSP} style={{width: "300px"}} />
        <div className="card-body">
          <h4 className="card-title">{productData.tenSP}</h4>
          <p className="card-text">{productData.giaBan.toLocaleString()} VNĐ</p>
          <button className="btn btn-success mr-3" onClick={() => {this.props.xemChiTiet(productData)}}>Xem chi tiết</button>
          <button className="btn btn-danger" onClick={() => {this.props.themGioHang(productData)}}>Thêm giỏ hàng</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (product) => {
      let gioHang = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        giaBan: product.giaBan,
        hinhAnh: product.hinhAnh,
        soLuong: 1
      }
      let action = {
        type: "THEM_GIO_HANG",
        gioHang
      }
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductItem);