import Vue from 'vue'

const methods = {
    customAlert(str){
        this.$store.commit('setAlertMsg',str)
        this.$store.commit('setShowAlert', true)
    }
}
Vue.prototype.$fxAlert = methods.customAlert;