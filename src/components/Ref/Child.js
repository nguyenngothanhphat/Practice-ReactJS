import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    name: "Thành Phát"
  }

  changeName = () => {
    this.setState({
      name: "Phát Nguyễn"
    })
  }
  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
      </div>
    )
  }
}
