const stateDatCuoc = {
  data: {
    chon: "TÀI",
    soBanThang: 0,
    tongSoBan: 0,
    soXucXac: [1, 2, 3]
  }
}

const XucXacReducer = (state = stateDatCuoc, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.data.chon = action.chon;
      state.data = {...state.data}
      return {...state}
    }
    case "PLAY_GAME": {
      let soXucXac = [];
      let tong = 0;
      const dataDuplicate = {...state.data}
      dataDuplicate.tongSoBan++;
      state.data = dataDuplicate
      for (var i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 6 +1);
        soXucXac.push(num);
      }
      for (var j = 0; j < soXucXac.length; j++) {
        tong += soXucXac[j];
      }
      dataDuplicate.soXucXac = soXucXac;

      if (tong <= 11 && dataDuplicate.chon === "XỈU") {
        dataDuplicate.soBanThang++;
      } else if (tong > 11 && dataDuplicate.chon === "TÀI") {
        dataDuplicate.soBanThang++;
      }
      state.data = {...dataDuplicate};
      
      return {...state}
    }
    default:
      return {...state}
  }
}

export default XucXacReducer;