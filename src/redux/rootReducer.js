import {combineReducers} from 'redux';
import GioHangReducer from './GioHangReducer';
import XucXacReducer from './XucXacReducer';

const rootReducer = combineReducers({ //store tổng của ứng dụng
  stateGioHang: GioHangReducer,
  stateDatCuoc: XucXacReducer
})

export default rootReducer;