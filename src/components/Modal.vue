<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <!-- 对话框 -->
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="cancel"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <div class="btn-group">
            <a href="javascript:;" class="btn" @click="submit">{{sureText}}</a>
            <a href="javascript:;" class="btn btn-default" @click="cancel">{{cancelText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
  
</template>
<script>
export default {
  name:'modal',
  props:{
    //弹框类型 小 中 大 表单
    modalType:{
      type:String,
      default:'form'
    },
    //弹框标题
    title:String,
    //按钮类型: 1:确定按钮 2:取消按钮 3:确定取消
    btnType:String,
    sureText:{
      type:String,
      default:'确定'
    },
    cancelText:{
      type:String,
      dafault:'取消'
    },
    showModal:Boolean
  },
  methods:{
    //确定加入购物车 通过$emit给父组件传参
    submit(){
      this.$emit('submit')
    },
    //取消加入购物车
    cancel(){
      this.$emit('cancel')
    }
  },
}
</script>
<style lang="scss">
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
@import '../assets/scss/modal.scss';
</style>