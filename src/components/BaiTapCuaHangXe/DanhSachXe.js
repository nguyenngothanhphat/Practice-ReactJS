import React, { Component } from 'react'
import XeItem from './XeItem'

export default class DanhSachXe extends Component {
  renderListXe = () => {
    return this.props.sanPham.map((item, index) => {
      return (
        <XeItem product={item} key={index} click={this.props.click} />
      )
    })
  }
  render() {
    return (
      <div className="col-12">
        <div className="card-columns">
          {this.renderListXe()}
        </div>
      </div>
    )
  }
}