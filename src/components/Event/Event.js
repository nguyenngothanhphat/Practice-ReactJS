import React, { Component } from 'react'

export default class Event extends Component {
  handleClick = (name) => {
    console.log("Hello " + name)
  }
  handleClickBind = (name, age, button) => {
    console.log("Name: " + name)
    console.log("Age: " + age)
    console.log("Button: ", button.target)
  } 
  render() {
    return (
      <div>
        <button onClick={() => {this.handleClick("Phát")}}>Click me</button>
        <button onClick={this.handleClickBind.bind(this, "Tuyết", "20")}>Click me</button>
      </div>
    )
  }
}
