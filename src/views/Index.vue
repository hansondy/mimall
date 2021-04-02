<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,index) of menuList" :key="index">
                  <li v-for="(phone,i) of item" :key="i">
                    <a href="javascript:;"></a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" :key="index">
            <a :href="`/#/product/${item.id} `"><img :src="item.img" alt=""></a>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <nav-service></nav-service>
  </div>
</template>
<script>
import navService from '@/components/Service.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
// import 'swiper/css/swiper.css'
//import 'swiper/swiper-bundle.css';
export default {
  components:{
    navService,
    Swiper,
    SwiperSlide, 
  },
  data(){
    return {
      swiperOption:{
        autoplay:true,
        loop:true,
        effect:'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable:true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList:[
        {
          id:'42',
          img:'/imgs/slider/slide-1.jpg'
        },
        {
          id:'45',
          img:'/imgs/slider/slide-2.jpg'
        },
        {
          id:'46',
          img:'/imgs/slider/slide-3.jpg'
        },
        {
          id:'',
          img:'/imgs/slider/slide-4.jpg'
        },
        {
          id:'',
          img:'/imgs/slider/slide-5.jpg'
        }
      ],
      //导航菜单手机列表数组
      menuList:[
        [
          {
            id:30,
            img:'/imgs/item-box-1.png',
            name:'小米CC9'
          },
          {
            id:31,
            img:'/imgs/item-box-2.png',
            name:'小米8青春版'
          },
          {
            id:32,
            img:'/imgs/item-box-3.png',
            name:'Redmi K20 Pro'
          },
          {
            id:33,
            img:'/imgs/item-box-4.png',
            name:'移动4G专区'
          },
        ],[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]
      ]
    }
  },
  methods:{},
  mounted(){
  },
}
</script>
<style lang="scss">
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
  .index{
    .container{
      .swiper-box{
        .nav-menu{
          position: absolute;
          width: 264px;
          height: 451px;
          z-index: 10;
          padding: 26px 0;
          box-sizing: border-box;
          background: rgba(85,88,90,.48);
          .menu-wrap{
            .menu-item{
              height: 50px;
              line-height: 50px;
              a{
                display: block;
                position: relative;
                color: #fff;
                font-size: 16px;
                padding-left: 30px;
                &::after{
                  position: absolute;
                  right: 30px;
                  top: 17.5px;
                  content: '';
                  @include backImg(10px,15px,'/imgs/icon-arrow.png');
                }
              }
              &:hover{
                background: $colorA;
              }
            }
          }
        }
        .swiper-container {
          height: 451px;
          .swiper-button-prev{
            left: 274px;
          }
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>