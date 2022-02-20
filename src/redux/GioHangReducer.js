/* Setup state giỏ hàng trên store */
const stateGioHang = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      giaBan: 5700000,
      hinhAnh: "../img/phone/vsphone.jpg",
      soLuong: 1
    }
  ]
}

const GioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let index = state.gioHang.findIndex(gioHang => gioHang.maSP === action.gioHang.maSP);
      if (index !== -1) {
        state.gioHang[index].soLuong++;
      } else {
        state.gioHang.push(action.gioHang);
      }
      state.gioHang = [...state.gioHang];
      return {...state}
    }
    case "XOA_SAN_PHAM": {
      let products = state.gioHang.filter(gioHang => gioHang.maSP !== action.maSP);
      let answer = window.confirm("Bạn có muốn xóa không ?");
      if (answer) {
        state.gioHang = [...products];
      }
      return {...state}
    }
    case "TANG_SO_LUONG": {
      let index = state.gioHang.findIndex(gioHang => gioHang.maSP === action.maSP);
      if (index !== -1) {
        state.gioHang[index].soLuong++;
      }
      state.gioHang = [...state.gioHang];
      return {...state}
    }
    case "GIAM_SO_LUONG": {
      let index = state.gioHang.findIndex(gioHang => gioHang.maSP === action.maSP);
      if (index !== -1) {
        state.gioHang[index].soLuong--;
      }
      if (state.gioHang[index].soLuong < 1) {
        alert("Số lượng không được dưới 1");
        return {...state}
      }
      state.gioHang = [...state.gioHang];
      return {...state}
    }
    default:
      return {...state}
  }
}

export default GioHangReducer;