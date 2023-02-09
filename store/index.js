export const state = () => ({
  drawer: true,
  alertMsg : '',
  isShowAlert : false
})

export const mutations = {
  toggleDrawer(state) {
    state.drawer = !state.drawer
  },
  drawer(state, val) {
    state.drawer = val
  },
  setAlertMsg(state,val){
    state.alertMsg = val
  },
  setShowAlert(state,val){
    state.isShowAlert = val
  }  
}


