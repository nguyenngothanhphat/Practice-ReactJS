import React, { Component } from 'react'
import { ModelContext } from './_Context/ModelContext'

export default class LikeModel extends Component {
  render() {
    return (
      <ModelContext.Consumer>
        {(value) => {
          return <div>
          <div class="card" style={{width: '300px'}}>
            <div class="card-body">
              <button className="btn btn-outline-danger" onClick={() => {value.handleLike()}}>Love ❤️</button>
            </div>
          </div>
        </div>
        }}
      </ModelContext.Consumer>
    )
  }
}
