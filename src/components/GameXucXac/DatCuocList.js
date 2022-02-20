import React, { Component } from 'react';
import {connect} from 'react-redux';
import styles from './GameXucXac.module.css';

class DatCuocList extends Component {
  renderXucXac = () => {
    return this.props.xucXac.map((item, index) => {
      return (<img src={`../img/xucxac/${item}.png`} alt="xuc-xac" style={{width: "50px"}} key={index} />)
    })
  }
  render() {
    return (
      <div className="row text-center mb-5">
        <div className="col-4">
          <button className={`${styles.btnCuoc} btn text-white text-uppercase pt-5 pr-5 pb-5 pl-5`} onClick={() => {this.props.datCuoc('TÀI')}}>TÀI</button>
        </div>
        <div className="col-4">
          {this.renderXucXac()}
        </div>
        <div className="col-4">
          <button className={`${styles.btnCuoc} btn text-white text-uppercase pt-5 pr-5 pb-5 pl-5`} onClick={() => {this.props.datCuoc('XỈU')}}>XỈU</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    xucXac: state.stateDatCuoc.data.soXucXac,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (chon) => {
      let action = {
        type: "DAT_CUOC",
        chon
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DatCuocList)
