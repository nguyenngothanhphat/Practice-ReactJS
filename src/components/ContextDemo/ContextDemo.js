import React, { Component } from 'react'
import CardModel from './CardModel'
import LikeModel from './LikeModel'
import ModelStateProvider from './_Provider/ModelStateProvider'

export default class ContextDemo extends Component {
  render() {
    return (
      <ModelStateProvider>
        <div className="container">
          <h4 className="text-danger text-center pt-5 pb-5 text-uppercase">Tình yêu của tôi</h4>
          <CardModel />
          <LikeModel />      
        </div>
      </ModelStateProvider>
    )
  }
}
