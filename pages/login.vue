<template>
  <v-app id="login" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="../static/m.png" alt="Vue Material Admin" width="120" height="120">
                  <h1 class="flex my-4 primary--text">관리자 페이지</h1>
                </div>
                <v-form>
                  <v-text-field append-icon="person" name="login" label="Login" type="text"
                                v-model="model.username"></v-text-field>
                  <v-text-field append-icon="lock" name="password" label="Password" id="password" type="password"
                                v-model="model.password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn icon>
                  <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="red">fa fa-google fa-lg</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn block color="primary" @click="login" :loading="loading">Login</v-btn>
                <v-btn block color="primary" @click="scrollable.dialog = true">alert</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <fx-dialog title="제목" msg="아이디 및 비밀번호를 확인해 주세요"/>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import { callLogin } from '@/api/login';
import AppDrawer from '../components/AppDrawer.vue';

  export default {
  components: { AppDrawer },
    layout: 'default',
    data: () => ({
      loading: false,
      model: {
        username: 'mandoo1027',
        password: 'rkskekfk5%1'
      },
      basic: {
          dialog: false
        },
        fullscreen: {
          dialog: false,
          notifications: false,
          sound: true,
          widgets: false
        },
        scrollable: {
          name: '',
          dialog: false
        }
    }),

    methods: {
      login() {
        this.loading = true; 
          const username = this.model.username
          const password = this.model.password
          let params = {
              userId : username
              ,password : password
          }
          callLogin(params).then((result)=>{
              if(result.result){ 
                this.$router.push('/dashboard')
              }else{
                alert('오류')
              }
          }).finally(() => {
            this.loading = false
          });
        
      }
    }

  };
</script>
<style scoped lang="css">
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>
