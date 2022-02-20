import React, { Component } from 'react'

export default class DataBinding extends Component {
  name = "Nguyễn Ngô Thành Phát"

  student = {
    name: "Tuyết",
    age: 20,
    school: "University"
  }

  renderImage = () => {
    return (
      <img src="https://via.placeholder.com/500x325.png" alt="covid img" />
    )
  }

  renderInfoCovid = () => {
    const infoCovid = {
      id: "covid-1",
      name: "Covid SA",
      alias: "Cô vi",
      img: "https://via.placeholder.com/500x325.png"
    }
    return (
      <div className="card bg-primary text-white w-50 h-50">
        <img className="card-img-top" src={infoCovid.img} alt="covid img" />
        <div className="card-body">
          <h4 className="card-title">{infoCovid.name}</h4>
          <p className="card-text">{infoCovid.alias}</p>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div>
        <h3>Hello {this.student.name} - Age: {this.student.age} - School: {this.student.school}</h3>        
        <h3>Xuất image covid</h3>
        {this.renderImage()}
        <h3>Xuất thông tin covid</h3>
        {this.renderInfoCovid()}
      </div>
    )
  }
}
