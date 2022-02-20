import React, { Component } from 'react'

export default class BaiTapChonKinh extends Component {
  dataSelect = [
    {
      "id": 1,
      "img": "../img/glassesImage/g1.jpg"
    },
    {
      "id": 2,
      "img": "../img/glassesImage/g2.jpg"
    }
  ]

  renderChonKinh = () => {
    return this.dataSelect.map((kinh, index) => {
      return (
        <img key={kinh.id} src={kinh.img} alt="kinh" style={{width: "100px"}} />
      )
    })
  }
  render() {
    return (
      <div className="container-fluid" style={{background: "url(../img/glassesImage/background.jpg) center/cover no-repeat"}}>
        <div style={{background: 'rgb(71, 68, 68, .5)', paddingTop: "30px", paddingBottom: "30px"}}>
          <h3 className="text-center text-white">TRY GLASSES APP ONLINE</h3>
        </div>
        <div className="row" style={{textAlign: "center"}}>
          <div className="col-6">
            <img src="../img/glassesImage/model.jpg" alt="img" />
          </div>
          <div className="col-6">
            <img src="../img/glassesImage/model.jpg" alt="img" />
          </div>
        </div>
        <div className="row">
          {this.renderChonKinh()}
        </div>
      </div>
    )
  }
}
