<template>
  <div class="container">
    <div style="display: flex;align-items: center;justify-content: center;margin-top: 150px;margin-bottom: 20px;flex-direction: row">
      <img src="http://img.qdaily.com/article/article_show/20180226115511QR0IMWjcBZmo8FaV.gif" class="logo"/>
      <img src="http://zxpic.imtt.qq.com/zxpic_imtt/2018/06/08/2000/originalimage/200721_3738332814_3_540_364.jpg" class="logo"/>
      <span class="logoFont">Link</span>
    </div>
    <div class="inputContainer">
      <input class="input" v-model="userId" name="userId" type="number" placeholder="Link账号"/>
    </div>
    <div class="inputContainer">
      <input class="input" v-model="password" name="password" type="password" placeholder="输入密码"/>
    </div>
    <div class="loginContainer" type="button" v-on:click="login">确认</div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Model, Emit, Prop, Watch } from 'vue-property-decorator'
  import logo from '../assets/link_logo_mid.png'

  @Component
  export default class LoginComponent extends Vue {
    private userId_:number=0;
    private password:string="";
    private images:{logo:typeof Image}={logo:logo};
    constructor() {
      super();
    }
    public set userId(val:string) {
      this.userId_=Number(val);
    }
    public get userId():string {
      if(this.userId_===0) {
        return "";
      }
      return this.userId_+"";
    }
    public login():void {
      console.log(this.userId_);
    }
  }

</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }
  .inputContainer{
    margin-top: 10px;
    margin-bottom: 10px;
    height: 50px;
    width: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e7ebf1;
    border-radius: 25px;
  }
  .loginContainer{
    border-radius: 36px;
    background-color: #e7ebf1;
    width: 72px;
    height: 72px;
    margin-top: 50px;
    display: flex;
    overflow: hidden;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-end;
  }
  .input{
    border: none;
    background-color: transparent;
    outline: none;
    width: 80px;
    appearance: none;
    text-align: center;
    font-size: 18px;
    overflow: hidden;
  }
  .input::-webkit-outer-spin-button,
  .input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  .input[type="number"]{
    -moz-appearance: textfield;
  }
  .logo{
    width: 80px;
    height: 80px;
  }
  .logoFont{
    font-size: 45px;
    font-weight: normal;
    color: #5a5a5a;
  }
</style>
