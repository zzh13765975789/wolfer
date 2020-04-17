<template>
  <div id="app">
  <router-view/> 
   
    <tabbar class="tabbar"></tabbar>
  </div>
</template>
<script>
import tabbar from  "../src/components/tabbar"
export default {
  components:{tabbar}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 
  color: #2c3e50;
  position: relative;

}
.tabbar{
  position: absolute;
  bottom: -625px;
  left: 0;
}


</style>
