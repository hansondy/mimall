<template>
  <div class="product">
    <product-params :productInfo="productInfo">
      <template v-slot:buy>
        <button class="btn" @click="buy">立即购买</button>
      </template>
    </product-params>
    <div class="content">
      <div class="item-bg">
        <h2>{{productInfo.name}}</h2>
        <h3>{{productInfo.subtitle}}</h3>
        <P>
          <a href="/#/index">全球首款双频 GP</a><span>|</span>
          <a href="/#/index">骁龙845</a><span>|</span>
          <a href="/#/index">AI 变焦双摄</a><span>|</span>
          <a href="/#/index">红外人脸识别</a>
        </P>
        <div class="price"><span>￥{{productInfo.price}}</span></div>
      </div>
      <div class="item-bg-2"></div>
      <div class="item-bg-3"></div>
      <div class="item-swiper">
        <swiper :options="swiperOption">
            <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <p class="desc">小米8 AI变焦双摄拍摄</p>
      </div>
      <div class="item-video">
        <h2>60帧超慢动作摄影<br>慢慢回味每一瞬间的精彩</h2>
        <p>
          后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！
          <br>
          更能AI 精准分析视频内容，15个场景智能匹配背景音效。
        </p>
        <div class="video-bg" @click="showVideo=true"></div>
        <div class="video-box">
          <div class="overlay" v-show="showVideo"></div>
          <div class="video" :class="{'slide':showVideo}">
            <span class="icon-close" @click="showVideo=false"></span>
            <video src="/imgs/product/video.mp4" autoplay muted controls></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductParams from '@/components/ProductParams.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
export default {
  components: { ProductParams,Swiper,SwiperSlide },
  name:'Product',
  data(){
    return {
      //video 动画效果
      showVideo:false,
      //商品信息
      productInfo:{},
      swiperOption:{
        autoplay:true,
        slidesPerView:3,
        spaceBetween: 30,
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
      let id=this.$route.params.id;
      this.axios.get(`/products/${id}`).then(res=>{
        console.log(res)
        this.productInfo=res
      })
    },
    buy(){
      let id=this.$route.params.id;
      this.$router.push(`/detail/${id}`)
    },
  },
  mounted(){
    this.getProductInfo()
  },
}
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
.product{
  .content{
    .item-bg{
      background: url(/imgs/product/product-bg-1.png) no-repeat 50%;
      // @include backImg(100%,718px,'/imgs/product/product-bg-1.png');
      text-align: center;
      height: 718px;
      h2{
        font-size: 80px;
        padding-top: 55px;
      }
      h3{
        font-size: 24px;
        letter-spacing: 10px;
      }
      p{
        margin-top: 21px;
        margin-bottom: 40px;
        a{
          color:$colorB;
          font-size: $fontI;
        }
        span{
          margin: 0 15px;
        }
      }
      .price{
        color: $colorB;
        font-size: 30px;
      }
    }
    .item-bg-2{
      background: url(/imgs/product/product-bg-2.png) no-repeat 50%;
      height: 480px;
      background-size: 1226px 397px;
    }
    .item-bg-3{
      background: url(/imgs/product/product-bg-3.png) no-repeat 50%;
      height: 638px;
      background-size: cover;
    }
    .item-swiper{
      margin:36px auto 52px;
      .desc{
        font-size:18px;
        color:#333333;
        text-align:center;
      }
      img{
        width:100%;
      }
    }
    .item-video{
      height: 1044px;
      background-color: #070708;
      margin-bottom: 76px;
      color: #fff;
      text-align: center;
      h2{
        font-size: 60px;
        padding-top: 82px;
        margin-bottom: 47px;
      }
      p{
        font-size: 24px;
        margin-bottom: 58px;
      }
      .video-bg{
        @include backImg(1226px,540px,'/imgs/product/gallery-1.png',cover);
        cursor: pointer;
      }
      .video-box{
        .overlay{
          @include position(fixed);
          background: #333;
          opacity: .4;
          z-index: 10;
        }
        .video{
          position: fixed;
          top: -50%;
          left: 50%;
          transform: translate(-50%,-50%);
          z-index:10;
          width:1000px;
          height:536px;
          opacity: 0;
          transition: all .5s;
          &.slide{
            top:50%;
            opacity: 1;
          }
          .icon-close{
            position: absolute;
            top: 20px;right: 20px;
            @include backImg(20px,20px,'/imgs/icon-close.png');
            z-index: 11;
            cursor: pointer;
          }
          video{
            width:100%;
            height:100%;
            object-fit:cover;
            outline:none;
          }
        }
      }
    }
  }
  button{
    margin-left: 10px;
  }
}
</style>