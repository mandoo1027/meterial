<template>
          <v-widget title="Scrollable Dialog">
            <div slot="widget-content">
              <v-dialog v-model="scrollable.dialog" scrollable max-width="500px"> 
                    <v-flex sm12 sm6> 
                          <v-alert type="warning" dismissible v-model="alert.showWarnning">
                            {{msg}}
                          </v-alert> 
                        
                    </v-flex>  
              </v-dialog>
            </div>
          </v-widget>
</template>

<script>
  export default {
    name: 'app-dialog', 
    props:{
      msg : {
        type : String,
        default : ''
      },
      title : {
        type : String,
        default : '확인'
      }
    },
    watch:{
      'alert.showWarnning'(data){
        this.scrollable.dialog = data
      }
    },
    data: () => ({
      basic: {
          dialog: true
        },
        fullscreen: {
          dialog: true,
          notifications: true,
          sound: true,
          widgets: true
        },
        scrollable: {
          name: '',
          dialog: true
        },
    alert: {
          showSuccess: true,
          showError: true,
          showWarnning: true,
          showInfo: true,
        }
    }),


    methods: {
      handleReset() {
        this.alert.showError = true;
        this.alert.showSuccess = true;
        this.alert.showWarnning = true;
        this.alert.showInfo = true;
      }
    }
  };
</script>
