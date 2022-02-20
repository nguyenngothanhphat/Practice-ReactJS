import React, { Component } from 'react'

export default class SanPhamItem extends Component {
  render() {
    let {hinhAnh, tenSP} = this.props.dataPhone;
    return (
      <div className="card" style={{width: '300px'}}>
        <img className="card-img-top" src={hinhAnh} alt={tenSP} style={{width: '250px'}} />
        <div className="card-body">
          <h4 className="card-title">{tenSP}</h4>
          <button className="btn btn-secondary" onClick={this.props.click}>Xem chi tiết</button>
        </div>
      </div>
    )
  }
}
