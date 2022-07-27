export default {
    state: {
      confDialog: false,
      stickerDialog: false,
      modifStickerDialog: false,
      stickerData: [],
      colNameDialog: false,
      colIndex: null,
      arrayIndex: null,
      chooseDialog: 'sticker',
      eta: false
    },

    mutations: {
      ocConfDialog(state, data){
        state.confDialog = data
      },
      ocModifColNameDialog(state, data){
        state.colNameDialog = data
      },
      ocStickerDialog(state, data){
        state.stickerDialog = data
      },
      ocModifStickerDialog(state, data){
        state.modifStickerDialog = data
      },
      setStickerData(state, data){
        state.stickerData = data
      },
      setChooseDialog(state, data){
        state.chooseDialog = data
      },
      setColIndex(state, data){
        state.colIndex = data
      },
      setArrayIndex(state, data){
        state.arrayIndex = data
      },
      statement(state, data){
        state.eta = data
      }
    }
}