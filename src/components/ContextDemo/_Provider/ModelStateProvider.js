import React, { Component } from 'react'
import { ModelContext } from '../_Context/ModelContext'

export default class ModelStateProvider extends Component {
  state = {
    like: 1
  }

  handleLike = () => {
    this.setState({
      like: this.state.like + 1
    })
  }
  render() {
    return (
      <div>
        <ModelContext.Provider value={{stateLike: this.state.like, handleLike: this.handleLike}}>
          {this.props.children}
        </ModelContext.Provider>
      </div>
    )
  }
}
