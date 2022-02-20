import React, { Component } from 'react'
import { ModelContext } from './_Context/ModelContext'

export default class CardModel extends Component {
  render() {
    return (
      <ModelContext.Consumer>
        {(value) => {
          return <div>
            <div className="card mb-3" style={{width: '300px'}}>
              <img className="card-img-top" src="../img/context/love.png" alt="love"  />
              <div className="card-body">
                <h4 className="card-title">Tên: Lê Thị Tuyết</h4>
                <p className="card-text">Tuổi: 20 tuổi</p>
                <p className="card-text">Lượt tim: <span className="text-danger"> {value.stateLike} ❤️</span></p>
              </div>
            </div>
        </div>
        }}
      </ModelContext.Consumer>
    )
  }
}
