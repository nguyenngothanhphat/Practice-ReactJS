import React, { Component } from 'react';
import {connect} from 'react-redux';
import styles from './GameXucXac.module.css'

class KetQua extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 text-center">
          <h3 className="display-4">BẠN CHỌN: <span className="text-danger">{this.props.data.chon}</span></h3>
          <h3 className="display-4">Số bàn thắng: <span className="text-success">{this.props.data.soBanThang}</span></h3>
          <h3 className="mb-5 display-4">Tổng số bàn chơi: <span className="text-primary">{this.props.data.tongSoBan}</span></h3>
          <button className={`btn btn-success ${styles.btnPlay}`} onClick={() => {this.props.playGame(this.props)}}>Play game</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.stateDatCuoc.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: (data) => {
      let action = {
        type: "PLAY_GAME",
        data
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KetQua);
