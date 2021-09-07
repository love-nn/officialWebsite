<template>
  <div class="index">
    <vvheader></vvheader>
    <div class="swiper_div">
      <swiper ref="mySwiper" :mousewheel="true" :options="swiperOptions">
        <swiper-slide> <carousel></carousel> </swiper-slide>
        <swiper-slide> <structure></structure> </swiper-slide>
        <swiper-slide> <member></member> </swiper-slide>
        <swiper-slide> <joinus></joinus> </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import vvheader from "./header.vue";
import aboutus from "./aboutus.vue";
import carousel from "./carousel.vue";
import joinus from "./joinus.vue";
import member from "./member.vue";
import project from "./project.vue";
import structure from "./structure.vue";
// import Swiper core and required modules
import SwiperCore, { Mousewheel, Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([Mousewheel, Pagination]);
export default {
  name: "HomeSwiper",
  components: {
    vvheader,
    aboutus,
    carousel,
    joinus,
    member,
    project,
    structure,
  },
  data() {
    return {
      projectList: [],
      swiperOptions: {
        pagination: "swiper-pagination",
        direction: "vertical",
        autoplay: false,
        speed: 1500,
        mousewheelControl: true, 
      },
    };
  },
};
</script>

<style scoped>
.swiper_div {
  height: 100vh;
  width: 100vw;
}
.swiper_div .swiper-container {
  height: 100vh;
}
.swiper_div .swiper-slide {
  height: 100vh;
}
.swiper_div .swiper-slide div {
  box-sizing: border-box;
  height: 100%;
  background-color: #fbfbfb;
  text-align: center;
  border-bottom: 1px solid #e5e5e5;
}
</style>