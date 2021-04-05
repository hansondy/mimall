<template>
  <div class="carts">
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="cart-box">
          <ul class="cart-item-head">
            <li class="col-1">
              <span class="checkbox checked"></span>
              全选
            </li>
            <li class="col-3">商品名称</li>
            <li class="col-1">单价</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计</li>
            <li class="col-1">操作</li>
          </ul>
          <ul class="cart-item-list">
            <li class="cart-item">
              <div class="item-check">
                <span class="checkbox checked"></span>
              </div>
              <div class="item-name">
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png" alt="">
                <span>小米CC9e , 3200万+4800万 前后双旗舰相机</span>
              </div>
              <div class="item-price">1299元</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;">-</a>
                  <span>1</span>
                  <a href="javascript:;">+</a>
                </div>
              </div>
              <div class="item-total">1299元</div>
              <div class="item-del"></div>
            </li>
          </ul>
        </div>
        <div class="order-wrap clearfix">
          <div class="cart-tip fl">
            <a href="/#index">继续购物</a>
            共
            <span>1</span>
            件商品,已选择
            <span>1</span>
            件
          </div>
          <div class="total fr">
            合计:
            <span>1299</span>
            元
            <a href="javascript:;" class="btn btn-large">去结算</a>
          </div>  
        </div>
      </div>
    </div>
    <nav-service></nav-service>
    <index-footer></index-footer>
  </div>
</template>
<script>
import indexFooter from '@/components/Footer.vue';
import navService from '@/components/Service.vue'
import orderHeader from '@/components/OrderHeader.vue'
export default {
  components:{
    indexFooter,
    navService,
    orderHeader
  },
}
</script>
<style lang="scss">
.carts{
  .wrapper{
    background-color: #f5f5f5;
    padding-top: 30px;
    padding-bottom: 114px;
    .container{
      .cart-box{
        background-color: #fff;
        font-size: 14px;
        color: #999;
        text-align: center;
        .checkbox{
          display: inline-block;
          width: 22px;
          height: 22px;
          border: 1px solid #e5e5e5;
          vertical-align: middle;
          margin-right: 17px;
          cursor: pointer;
          &.checked{
            background: url(/imgs/icon-gou.png) #f60 no-repeat 50%;
            background-size: 16px 12px;
            border: none;
          }
        }
        .cart-item-head{
          height: 79px;
          line-height: 79px;
          display: flex;
          .col-1{
            flex: 1;
          }
          .col-2{
            flex: 2;
          }
          .col-3{
            flex: 3;
          }
        }
        .cart-item-list{
          .cart-item{
            display: flex;
            align-items: center;
            height: 125px;
            border-top: 1px solid #e5e5e5;
            font-size: 16px;
            .item-check{
              flex: 1;
            }
            .item-name{
              flex: 3;
              font-size: 18px;
              color: #333;
              display: flex;
              align-items: center;
              img{
                width: 80px;
                height: 80px;
              }
            }
            .item-price{
              flex: 1;
              color: #333;
            }
            .item-num{
              flex: 2;
              width: 150px;
              height: 40px;
              line-height: 40px;
              border: 1px solid #e5e5e5;
              font-size: 14px;
              a{
                display: inline-block;
                width: 50px;
                color: #333;
              }
              span{
                display: inline-block;
                width: 50px;
                color: #333;
              }
            }
            .item-total{
              flex: 1;
              color: #f60;
            }
            .item-del{
              width: 14px;
              height: 12px;
              background: url(/imgs/icon-close.png) no-repeat 50%;
              background-size: contain;
              cursor: pointer;
              flex: 1;
            }
          }
        }
      }
      .order-wrap{
        font-size: 14px;
        color: #666;
        margin-top: 20px;
        height: 50px;
        line-height: 50px;
        .cart-tip{
          margin-left: 29px;
          a{
            color: #666;
            margin-right: 37px;
          }
          span{
            color: #f60;
            margin: 0 5px;
          }
        }
        .total{
          font-size: 14px;
          color: #f60;
          span{
            font-size: 24px;
          }
          .btn{
            margin-left: 37px;
          }
        }
      }
    }
  }
}
</style>