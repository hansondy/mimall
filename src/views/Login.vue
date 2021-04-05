<template>
  <div class="login">
    <div class="container">
      <a href="/#/index">
        <img src="/imgs/login-logo.png" alt="">
      </a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">账号登陆</span>
            <span class="sep-line">|</span>
            <span>扫码登陆</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入账号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登陆</a>
          </div>
          <div class="tips">
            <div class="sms">手机短信登录/注册</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-login">
      <div class="container">
        <div class="footer-link">
          <a href="javascript:;">前端菜鸟主页</a><span>|</span>
          <a href="javascript:;">Vue全栈课程</a><span>|</span>
          <a href="javascript:;">React全家桶课程</a><span>|</span>
          <a href="javascript:;">配套课程：Java通用型支付+电商平台双系统实战</a>
        </div>
        <div class="copyright">
          Copyright ©2020 mi.futurefe.com
          All Rights Reserved.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      username:'',
      password:'',
      userId:'',
    }
  },
  methods:{
    login(){
      let {username,password}=this;
      this.axios.post('/user/login',{
        username,
        password
      }).then(res=>{
        
        this.$cookie.set('userId',res.id,{expires:'1M'});
        this.$store.dispatch('saveUsername',res.username)
        this.$router.push('/index')
        console.log(res)
      })
    },
  },
  mounted(){},
}
</script>
<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
.login{
  .container{
    height: 113px;
    img{
      width: auto;
      height: 100%;
    }
  }
  .wrapper{
    height: 576px;
    background: url(/imgs/login-bg.jpg) no-repeat 50%;
    .container{
      .login-form{
        width: 410px;height: 510px;
        background: $colorG;
        position: absolute;
        top: 29px;
        right: 0;
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        h3{
          line-height: 23px;
          font-size: 24px;
          text-align: center;
          margin: 40px auto 49px;
          .checked{
            color: $colorA;
          }
          .sep-line{
              margin: 0 32px;
          } 
        }
        .input{
          display: inline-block;
          width: 348px;
          height: 50px;
          border: 1px solid #e5e5e5;
          margin-bottom: 20px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn{
          width: 100%;
          line-height: 50px;
          margin-top: 10px;
          font-size: 16px;
        }
        .tips{
          margin-top: 14px;
          font-size: 14px;
          cursor: pointer;
          .sms{
            color: $colorA;
          }
        }
      }
    }
  }
  .footer-login{
    height: 100px;
    padding-top: 60px;
    font-size: 16px;
    color: #999;
    text-align: center;
    .container{
      .footer-link{
        margin-bottom: 13px;
        a{
          color: #999;
          display: inline-block;
        }
        span{
          margin: 0 10px;
        }
      }
      .copyright{
        margin-top: 13px;
      }
    }
  }
}
</style>