import React, { Component } from 'react'
import Child from './Child'

export default class Ref extends Component {
  refChild = React.createRef();

  changeNameHead = () => {
    this.refChild.current.changeName()
  }
  render() {
    return (
      <div>
        <Child ref={this.refChild} />
        <button onClick={this.changeNameHead}>Change name</button>
      </div>
    )
  }
}
