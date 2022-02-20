import React, { Component } from 'react'
import {connect} from 'react-redux';
class Cart extends Component {
  showCart = () => {
    return this.props.gioHang.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td><img src={item.hinhAnh} alt={item.tenSP} style={{width: "50px"}} /></td>
          <td>{item.tenSP}</td>
          <td>
            <button className="btn btn-primary" onClick={() => {this.props.tangSoLuong(item.maSP)}}>+</button>
            <span className="ml-2 mr-2">{item.soLuong}</span>
            <button className="btn btn-primary" onClick={() => {this.props.giamSoLuong(item.maSP)}}>-</button>
          </td>
          <td>{item.giaBan.toLocaleString()}VND</td>
          <td>{(item.soLuong * item.giaBan).toLocaleString()}VND</td>
          <td><button className="btn btn-danger" onClick={() => {this.props.xoaSanPham(item.maSP)}}>Delete</button></td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div className="modal fade" id="modelId" tabindex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog" role="document" style={{minWidth: "1000px"}}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quanlity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.showCart()}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
/* Hàm lấy state redux biến đổi thành props của component */
const mapStateToProps = (state) => { // State là state tổng của ứng dụng chứa các state con (rootReducer)
  return {
    gioHang: state.stateGioHang.gioHang
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    xoaSanPham: (maSP) => {
      let action = {
        type: "XOA_SAN_PHAM",
        maSP
      }
      dispatch(action);
    },
    tangSoLuong: (maSP) => {
      let action = {
        type: "TANG_SO_LUONG",
        maSP
      }
      dispatch(action);
    },
    giamSoLuong: (maSP) => {
      let action = {
        type: "GIAM_SO_LUONG",
        maSP
      }
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)