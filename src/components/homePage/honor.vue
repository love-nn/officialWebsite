<template>
  <div class="honor">
    <div class="top_honor">
        <h3>荣誉墙</h3>
    </div>
    <div class="bot_honor">
      <el-card>
        <el-carousel type="card" trigger="click" height="350px">
          <el-carousel-item v-for="item in honorList" :key="item.cid">
            <img :src="item.picture" style="height: 100%; width: 100%" />
          </el-carousel-item>
        </el-carousel>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getHonor } from '../../api/api';
export default {
  data() {
    return {
      honorList: [
        // { id: 1, imgAddress: "" },
        // { id: 2, imgAddress: "" },
        // { id: 3, imgAddress: "" },
        // { id: 4, imgAddress: require("../../assets/4.png") },
      ],
    };
  },
  created(){
    this.getInfo();
  },
  methods:{
    getInfo:async function(){
      let resp = await getHonor()
      this.honorList = resp.data;
      console.log(resp.data);
    }
  }
};
</script>

<style>
.el-carousel__item img {
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
h3{
  font-size: 40px;
  line-height: 100px;
}
</style>