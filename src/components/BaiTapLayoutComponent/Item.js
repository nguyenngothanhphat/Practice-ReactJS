import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className="card text-center">
        <img className="card-img-top" src="https://via.placeholder.com/500x325.png" alt="card-img" />
        <div className="card-body">
          <h4 className="card-title">Card Title</h4>
          <p className="card-text">lorem ipsum dolor sit amet, con lorem ipsum dolor sit amet, con lorem ipsum dolor sit amet, con lorem ipsum dolor sit amet, con</p>
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    )
  }
}
