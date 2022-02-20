import React, { Component } from 'react'
import Banner from './Banner'
import Item from './Item'

export default class Body extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <Banner />
          <div className="card-columns">
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </main>
    )
  }
}