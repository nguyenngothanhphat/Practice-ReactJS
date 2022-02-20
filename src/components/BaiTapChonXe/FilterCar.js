import React, { Component } from 'react'

export default class FilterCar extends Component {
  state = {
    imgCar: "../img/products/black-car.jpg"
  }
  handleChangeColor = (newImg) => {
    this.setState({
      imgCar: newImg
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img src={this.state.imgCar} alt="car img" style={{width: "100%"}} />
          </div>
          <div className="col-5">
            <div className="card text-primary">
              <div className="card-header">Exterior Color</div>
              <div className="card-body">
                <div className="row border boder-link pt-3 pb-3" style={{cursor: "pointer"}} onClick={() => {this.handleChangeColor('../img/products/black-car.jpg')}}>
                  <img src="../img/icons/icon-black.jpg" alt="icon black" className="col-2" />
                  <div className="col-10">
                    <h3 className="text-dark">Crystal Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>
                <div className="row border boder-link pt-3 pb-3" style={{cursor: "pointer"}} onClick={() => {this.handleChangeColor('../img/products/steel-car.jpg')}}>
                  <img src="../img/icons/icon-steel.jpg" alt="icon black" className="col-2" />
                  <div className="col-10">
                    <h3 className="text-dark">Modern Steel</h3>
                    <p>Metallic</p>
                  </div>
                </div>
                <div className="row border boder-link pt-3 pb-3" style={{cursor: "pointer"}} onClick={() => {this.handleChangeColor('../img/products/silver-car.jpg')}}>
                  <img src="../img/icons/icon-silver.jpg" alt="icon black" className="col-2" />
                  <div className="col-10">
                    <h3 className="text-dark">Lunar Silver</h3>
                    <p>Metallic</p>
                  </div>
                </div>
                <div className="row border boder-link pt-3 pb-3" style={{cursor: "pointer"}} onClick={() => {this.handleChangeColor('../img/products/red-car.jpg')}}>
                  <img src="../img/icons/icon-red.jpg" alt="icon black" className="col-2" />
                  <div className="col-10">
                    <h3 className="text-dark">Rallye red</h3>
                    <p>Metallic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
