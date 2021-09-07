<template>
  <div class="test">
    <vheader></vheader>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <carousel></carousel>
      </swiper-slide>
      <swiper-slide>
        <officeInfo></officeInfo>
      </swiper-slide>
      <swiper-slide>
        <depart></depart>
      </swiper-slide>
      <swiper-slide>
        <project></project>
      </swiper-slide>
    </swiper>
    <vfooter></vfooter>
  </div>
</template>

<script>
import vheader from "./header.vue";
import carousel from "./carousel.vue";
import vfooter from "./footer.vue";
import depart from "./departInfo.vue";
import project from "./projectInfo.vue";
export default {
  components: { vheader, carousel, vfooter, project, depart },
  data() {
    return {
      swiperOptions: {
        pagination: "swiper-pagination",
        loop: true,
        speed: 500,
        direction: "vertical",
      },
    };
  },
};
</script>
 
<style>
.test {
  height: 800px;
  overflow: hidden;
}
</style>