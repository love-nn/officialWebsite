<template>
  <div class="home">
    <vheader></vheader>
    <carousel></carousel>
    <office-info></office-info>
    <conduct></conduct>
    <news></news>
    <honor></honor>
    <vfooter></vfooter>
  </div>
</template>

<script>
import vheader from "./header.vue";
import carousel from "./carousel.vue";
import officeInfo from "./officeInfo.vue";
import conduct from "./conduct.vue";
import news from "./news.vue";
import honor from "./honor.vue";
import vfooter from "./footer.vue";
export default {
  components: { vheader, carousel, officeInfo, conduct, news, honor, vfooter },
  created(){
    setIndex();
  },
  method:{
    setIndex(){
      this.$store.commit('setActiveIndex',4)
    }
  }
};
</script>
 
<style>
</style>