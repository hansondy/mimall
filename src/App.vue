<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res={})=>{
        
        this.$store.dispatch('saveUsername',res.username)
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res=0)=>{
        console.log(res)
        this.$store.dispatch('saveCartCount',res)
      })
    },
  },
  mounted(){
    this.getUser();
    this.getCartCount()
  },
}
</script>

<style lang="scss">
   @import './assets/scss/reset.scss';
   @import './assets/scss/config.scss';
   @import './assets/scss/button.scss';
</style>
