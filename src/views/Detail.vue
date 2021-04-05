<template>
  <div class="detail">
    <product-params :productInfo="productInfo"></product-params>
    <div class="wrapper">
      <div class="container">
        <div class="swiper">
          <swiper :options="swiperOption">
            <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        </div>
        <div class="content">
          <h2 class="item-title">
            {{productInfo.name}}
          </h2>
          <p class="item-info">
            相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红<br>
            外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏
          </p>
          <div class="delivery">小米自营</div>
          <div class="item-price">
            {{productInfo.price}}元
            <span class="del">1799元</span>
          </div>
          <div class="line"></div>
          <div class="item-addr">
            <i class="icon-loc"></i>
            <div class="addr">北京 北京市 朝阳区 安定门街道</div>
            <div class="stock">有现货</div>
          </div>
          <h2 class="version">选择版本</h2>
          <div class="item-version">
            <div class="phone" :class="{'checked':active==1}" @click="active=1">6GB+64GB 全网通</div>
            <div class="phone" :class="{'checked':active==2}" @click="active=2">4GB+64GB 移动4G</div>
          </div>
          <div class="item-color">
            <h2>选择颜色</h2>
            <div class="phone checked">
              <span class="color"></span>
              深空灰
            </div>
          </div>
          <div class="phone-info">
            <div>{{productInfo.name}} {{active==1?'6GB+64GB 全网通 深灰色':'4GB+64GB 移动4G'}}</div>
            <div>{{productInfo.price}}元</div>
          </div>
          <div class="phone-total">总计：{{productInfo.price}}元</div>
          <div class="btn-group">
            <a href="javascript:;" class="btn btn-huge" @click="addCart">加入购物车</a>
          </div>
        </div>
      </div>
    </div>
    <div class="price-info">
      <div class="container">
        <h2>价格说明</h2>
        <div class="desc">
          <img src="/imgs/detail/item-price.jpeg" alt="">
        </div>
      </div>
    </div>
    <nav-service></nav-service>
  </div>
</template>
<script>
import navService from '@/components/Service.vue';
import ProductParams from '@/components/ProductParams.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
export default {
  props:["id"],
  components:{
    navService,
    ProductParams,
    Swiper,
    SwiperSlide,
  },
  data(){
    return{
      productInfo:{},
      //选择版本
      active:1,
      swiperOption:{
        autoplay:true,
        slidesPerView:1,
        // spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        }
      }
    }
  },
  methods:{
    getProductInfo(){
      this.axios.get(`/products/${this.id}`).then(res=>{
        this.productInfo=res;
      })
    },
    addCart(){
      this.axios.post('/carts',{
        productId:this.id,
        selected: true
      }).then((res)=>{
        this.$store.dispatch('saveCartCount',res.cartTotalQuantity);
        this.$router.push('/carts')
      })
    },
  },
  mounted(){
    this.getProductInfo();
  },
}
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
.detail{
  .wrapper{
    .container{
      display: flex;
      justify-content: space-between;
      .swiper{
        width: 642px;
        height: 617px;
        margin-top: 5px;
        img{
          width: 100%;
        }
      }
    }
    .content{
      width: 584px;
      height: 870px;
      .item-title{
        font-size: $fontC;
        padding-top: 30px;
        padding-bottom: 16px;
        height: 26px;
      }
      .item-info{
        font-size: $fontJ;
        height: 36px;
      }
      .delivery{
        font-size: $fontI;
        color: #ff6700;
        margin-top: 26px;
        margin-bottom: 14px;
        height: 15px;
      }
      .item-price{
        font-size: 20px;
        color: #ff6700;
        height: 19px;
        .del{
          font-size: $fontI;
          color: $colorD;
          margin-left: 10px;
          text-decoration: line-through;
        }
      }
      .line{
        height: 0;
        margin-top: 25px;
        margin-bottom: 28px;
        border-top: 1px solid $colorH;
      }
      .item-addr{
        height: 108px;
        background: #fafafa;
        border: 1px solid $colorH;
        padding-top: 31px;
        padding-left: 64px;
        line-height: 14px;
        font-size: $fontJ;
        position: relative;
        .icon-loc{
          @include position(absolute,27px,34px,20px,20px);
          display: inline-block;
          background: url(/imgs/detail/icon-loc.png) no-repeat 50%;
          background-size: contain;
        }
        .addr{
          color:$colorC;
        }
        .stock{
          margin-top: 15px;
          color: #ff6700;
        }
      }
      .version{
        margin-top: 30px;
        margin-bottom: 20px;
        font-size: 18px;
      }
      .item-version{
        @include flex();
        .phone{
          width: 287px;
          height: 50px;
          line-height: 50px;
          border: 1px solid $colorH;
          box-sizing: border-box;
          text-align: center;
          font-size: 16px;
          color: #333;
          cursor: pointer;
          &.checked{
            border: 1px solid $colorA;
            color: $colorA;
          }
        }
      }
      .item-color{
        margin-top: 30px;
        h2{
          font-size: $fontH;
          margin-bottom: 20px;
        }
        .phone{
          width: 287px;
          height: 50px;
          line-height: 50px;
          border: 1px solid $colorH;
          box-sizing: border-box;
          text-align: center;
          font-size: 16px;
          color: #333;
          cursor: pointer;
          .color{
            display: inline-block;
            width: 14px;
            height: 14px;
            background-color: #666;
            margin-left: 15px;
          }
          &.checked{
            border: 1px solid $colorA;
            color: $colorA;
          }
        }
      }
      .phone-info{
        @include flex();
        margin-top: 50px;
        background: #fafafa;
        font-size: $fontJ;
        padding: 24px 33px 0px 30px;
      }
      .phone-total{
        margin-top: 18px;
        font-size: 24px;
        color: $colorA;
        margin-bottom: 30px;
        padding: 0px 33px 29px 30px;
      }
    }
  }
  .price-info{
    .container{
      h2{
        font-size: 24px;
        color: $colorB;
        padding-top: 38px;
        margin-bottom: 30px;
      }
    }
  }
}
</style>