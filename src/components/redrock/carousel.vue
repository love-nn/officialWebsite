<template>
  <div class="carousel">
    <!-- <el-card>
      <el-carousel trigger="click" height="600px">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img :src="item.imgAddress" style="height:500px; width: 100%" />
        </el-carousel-item>
      </el-carousel>
    </el-card> -->
     <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide  v-for="item in imgList" :key="item.id"> 
        <img class="carousel_img" :src="item.imgAddress" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
export default {
  data() {
    return {
      imgList: [
        { id: 1, imgAddress: require("../../assets/carousel/1.png") },
        { id: 2, imgAddress: require("../../assets/carousel/2.png") },
        { id: 3, imgAddress: require("../../assets/carousel/3.png") },
        { id: 4, imgAddress: require("../../assets/carousel/4.png") },
      ],
       swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 3000,
      },
    };
  },
};
</script>

<style scoped>
.carousel_img{
  height: 90vh;
  width:100vw;
}
.carousel{
  height: 100vh;
}

</style>
