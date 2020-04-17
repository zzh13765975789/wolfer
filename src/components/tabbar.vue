<template>
  <div>
    <ul class="tabbars">
      <li v-for="(item ,index) in tabList"
          :key="index"
          class="tablistt"
          @click="routerGo(item.clickUrl)"
      >
       
       <span><img :src="item.imgUrl" alt="" srcset=""></span>
       <span>{{item.title}}</span>
      </li>
   
    </ul>
  </div>
</template>

<script>
export default {
   computed:{
     tabList(){
       return this.$store.state.tabList
     }
   },
   methods:{
     routerGo(e){
       this.$router.push(e)
     }
   }

}
</script>

<style scoped lang="scss">
.tabbars{
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .tablistt{
    width: 25%;
    img{
      width: 50%;
    }
    span{
       display: block;
    }
  }
}

</style>