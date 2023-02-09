<template>
  <div class="text-center">
    <v-dialog v-model="isShowAlert" width="500">

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          안내
        </v-card-title>

        <v-card-text>
          {{ alertMsg }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="clickBtn">
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods:{
    clickBtn(){
      this.isShowAlert = false
      this.alertMsg = ''
    }
  },
  computed:{
    isShowAlert: {
      get() {
        return this.$store.state.isShowAlert
      },
      set(val) {
        this.$store.commit('setShowAlert', val)
      }
    },
    alertMsg: {
      get() {
        return this.$store.state.alertMsg
      },
      set(val) {
        this.$store.commit('setAlertMsg', val)
      }
    },
  }
}
</script>