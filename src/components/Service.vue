<template>
  <div class="service">
    <div class="container">
      <ul>
        <li>
          <span class="icon-setting"></span>
          预约维修服务
        </li>
        <li>
          <span class="icon-7day"></span>
          七天无理由退货
        </li>
        <li>
          <span class="icon-15ay"></span>
          15天免费换货
        </li>
        <li>
          <span class="icon-post"></span>
          满150包邮
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  name:'navService',
}
</script>
<style lang="scss">
  @import '../assets/scss/base.scss';
  @import '../assets/scss/mixin.scss';
  @import '../assets/scss/config.scss';
  .service{
    .container{
      padding: 33px 0;
      ul{
        @include flex();
        font-size: 16px;
        color: #666;
        li{
          flex: 0 0 25%;
          text-align: center;
          border-right: 1px solid #e5e5e5;
          span{
            vertical-align: middle;
            margin-right: 4px
          }
        }
        .icon-setting{
          @include backImg(20px,20px,'/imgs/icon-setting.png');
        }
        .icon-7day{
          @include backImg(20px,20px,'/imgs/icon-7day.png');
        }
        .icon-15day{
          @include backImg(20px,20px,'/imgs/icon-15day.png');
        }
        .icon-post{
          @include backImg(20px,20px,'/imgs/icon-post.png');
        }
      }
    }
  }
</style>