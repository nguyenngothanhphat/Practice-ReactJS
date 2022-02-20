import React, { Component } from 'react';
import Swal from 'sweetalert2';

export default class UserProfile extends Component {
  state = {
    value: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      passwordConfirm: ''
    },
    error: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
    // statusSubmit: true
  }
  changeInput = (e) => {
    e.preventDefault();
    let {name, value, type} = e.target;
    let valueNew = {...this.state.value, [name]: value}
    let errorNew = {...this.state.error}
    if (value.trim() === '') {
      errorNew[name] = name + ' là yêu cầu'
    } else {
      errorNew[name] = ' '
    }
    if (type === 'email') {
      let re =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (re.test(value)) {
        errorNew[name] = ''
      } else {
        errorNew[name] = name + ' phải là email'
      }
    }
    if (name === 'passwordConfirm') {
      if (valueNew['password'] === value) {
        errorNew[name] = ' '
      } else {
        errorNew[name] = name + ' không khớp với password'
      }
    }
    this.setState({
      value: valueNew,
      error: errorNew
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let {value, error} = this.state;
    let valid = false;
    for (var key in value) {
      if (value[key] === '') {
        valid = true;
      }
    }

    for (var key in error) {
      if (error[key] === '') {
        valid = true;
      }
    }
    
  }
  render() {
    return (
      <div className="container">
        <h3 className="text-center text-success pt-5 mb-5 display-4">User Profile</h3>
        <form onSubmit={this.handleSubmit} className="bg-light p-5">
          <div className="row">
            <div className="col-6">
              <label>First Name</label>
              <input type="text" className="form-control" name="firstName" value={this.state.value.firstName} onChange={this.changeInput} />
              <span className="text-danger">{this.state.error.firstName}</span>
            </div>
            <div className="col-6">
              <label>Last Name</label>
              <input type="text" className="form-control" name="lastName" value={this.state.value.lastName} onChange={this.changeInput} />
              <span className="text-danger">{this.state.error.lastName}</span>
            </div>
          </div>        
          <div className="row">
            <div className="col-12">
              <label>User Name</label>
              <input type="text" className="form-control" name="userName" value={this.state.value.userName} onChange={this.changeInput} />
              <span className="text-danger">{this.state.error.userName}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label>Email</label>
              <input type="email" className="form-control" name="email" value={this.state.value.email} onChange={this.changeInput} />
              <span className="text-danger">{this.state.error.email}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Password</label>
              <input type="password" className="form-control" name="password" value={this.state.value.password} onChange={this.changeInput} />
              <span className="text-danger">{this.state.error.password}</span>
            </div>
            <div className="col-6">
              <label>Password Confirm</label>
              <input type="password" className="form-control" name="passwordConfirm" value={this.state.value.passwordConfirm} onChange={this.changeInput} />
              <span className="text-danger">{this.state.error.passwordConfirm}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button className="btn btn-primary w-100 mt-5">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
