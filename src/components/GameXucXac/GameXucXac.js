import React, { Component } from 'react'
import DatCuocList from './DatCuocList'
import KetQua from './KetQua'
import styles from './GameXucXac.module.css';

export default class GameXucXac extends Component {
  render() {
    return (
      <div className={`${styles.sectionGame} pt-5`}>
        <div className="container">
          <h1 className="text-center text-uppercase mb-5 display-2">Game đổ xúc xắc</h1>
          <DatCuocList />
          <KetQua />
        </div>
      </div>
    )
  }
}
