<template>
  <div class="carousel" >
    <el-card>
      <el-carousel  trigger="click" height="600px">
        <el-carousel-item v-for="item in imgList" :key="item.cid">
          <img :src="item.picture" style="height: 100%; width: 100%" />
        </el-carousel-item>
      </el-carousel>
    </el-card>
  </div>
</template>

<script>
import {getCarousel} from '../../api/api.js';
export default {
  created(){
     this.getPic();
  },
  data() {
    return {
      imgList:
       [
        // { id: 1, imgAddress: require("../../assets/1.png") },
        // { id: 2, imgAddress: require("../../assets/2.png") },
        // { id: 3, imgAddress: require("../../assets/3.png") },
        // { id: 4, imgAddress: require("../../assets/4.png") },
      ],
    };
  },
  methods:{
    getPic:async function(){
      let resp = await getCarousel()
      this.imgList = resp.data;
      console.log(resp.data);
    }
  }
};
</script>

<style>
.carousel{
  border-bottom: #c5c5c5 solid 1px;
}
.el-carousel__item{
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>