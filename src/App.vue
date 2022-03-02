<template>
  <div id="app">
     <router-view></router-view>
  <maintabbar></maintabbar>
  </div>
</template>

<script>
import maintabbar from 'components/content/Maintabbar/maintabbar.vue'

export default {
  name: 'App',
  components: {
    maintabbar
   
  }
}
</script>

<style scoped>
@import url("assets/css/base.css");

</style>
