<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="top-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="top-user">
          <a href="javasript:;" v-if="username">{{username}}</a>
          <a href="javasript:;" v-else @click="login">登录</a>
          <a href="javasript:;" v-if="username">我的订单</a>
          <a href="javasript:;" class="my-cart"><span class="icon-cart" @click="gotoCart"></span> 购物车({{cartCount}})</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(phone,i) of  phoneList" :key="i">
                  <a href="`/#/product/${phone.id}`" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="phone.mainImage">
                    </div>
                    <div class="pro-name">{{phone.name}}</div>
                    <div class="pro-price">{{phone.price | currency}}</div>
                  </a>
                </li> 
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">¥ 1799</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png'">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">¥ 1799</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png'">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">¥ 1799</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png'">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">¥ 1799</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png'">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">¥ 1799</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png'">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">¥ 1799</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'indexHeader',
  data(){
    return {
      phoneList:[],
    }
  },
  //过滤器
  filters:{
    currency(oldVal){
      if(!oldVal) return '0.00';
      return `¥ ${oldVal.toFixed(2)}元`
    }
  },
  computed:{
    username(){
      return this.$store.state.username
    },
    cartCount(){
      return this.$store.state.cartCount
    }
  },
  methods:{
    getProductList(){
      this.axios.get('/products',{
        params:{
          categoryId:'100012',
          pageSize:6
        }
      }).then(res=>{
        console.log(res)
        if(res.list.length>=6){
          this. phoneList=res.list.slice(0,6)
        }
      })
    },
    login(){
      this.$router.push(`/login`)
    },
    gotoCart(){
      console.log(333333)
      this.$router.push(`/carts`)
    }
  },
  mounted(){
    this.getProductList()
  }
}
</script>
<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
.header{
  .nav-topbar{
    height: 39px;
    line-height: 39px;
    background: #333;
    .container{
      @include flex();
      a{
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart{
        width: 110px;
        background: #FF6600;
        color: #fff;
        text-align: center;
        margin-right: 0
      }
      .icon-cart{
        @include backImg(16px,12px,'/imgs/icon-cart-checked.png');
        margin-right: 4px;
      }
    }
  }
  .nav-header{
    .container{
      position: relative;
      height: 112px;
      @include flex();
      
      .header-menu{
        width: 643px;
        padding-left: 209px;
        .item-menu{
          display: inline-block;
          color: #333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span{
            cursor: pointer;
          }
          &:hover{
            color: $colorA;
            .children{
              height: 220px;
              opacity: 1;
            }
          }
          .children{
            position: absolute;
            top: 112px;left: 0;
            z-index: 20 !important;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0 4px 12px 0 rgba(0,0,0,0.11);
            z-index: 10;
            background: #fff;
            transition: all 0.5s;
            .product{
              position: relative;
              float: left;
              width: 16.6%;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              &::before{
                content: '';
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid #d7d7d7;
                height: 100px;
                width: 1px;
              }
              &:last-child::before{
                display: none;
              }
              a{
                display: inline-block;
                height: 220px;
              }
              .pro-img{
              height: 137px;
                img{
                  height: 111px;
                  margin-top: 26px;
                }
              }
              .pro-name{
                font-weight: 700;
                margin-top: 19px;
                margin-bottom: 8px;
                color: #333;
              }
              .pro-price{
                color: $colorA;
              }
            }
            
          }
          
        }
      }
      .header-search{
        width: 319px;
        .wrapper{
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input{
            width: 264px;
            height: 50px;
            box-sizing: border-box;
            border: none;
            border-right: 1px solid #e0e0e0;
            padding-left: 14px;
          }
          a{
            @include backImg(18px,18px,'/imgs/icon-search.png');
            margin-left: 17px;
          }
        }
      }
    }
  }
} 
</style>