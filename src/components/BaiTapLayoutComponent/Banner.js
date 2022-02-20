import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className="bg-light" style={{padding: "50px 20px", marginBottom: 20, marginTop: 20}}>
        <h1>A Warm Welcome</h1>
        <p>lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur</p>
        <a href="#" className="btn btn-primary">Call to action!</a>
      </div>
    )
  }
}
