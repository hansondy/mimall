<template>
  <div class="home">
    <index-header></index-header>
    <router-view></router-view>
    <index-footer></index-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import indexHeader from '@/components/Header.vue'
import indexFooter from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    indexHeader,
    indexFooter
  },
}
</script>
