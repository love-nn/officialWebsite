<template>
  <div class="teacher">
    <vheader> </vheader>
    <div class="teacher_info">
      <h1>导师介绍</h1>
      <!-- <div class="teacher_box">
        <img src="../../assets/cc.jpg" alt="" />
        <img src="../../assets/gy.jpg" alt="" />
        <img src="../../assets/scx.jpg" alt="" />
        <img src="../../assets/lb.jpg" alt="" />
        <img src="../../assets/wc.jpg" alt="">
      </div> -->
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <img src="../../assets/scx.jpg" alt="" />
            <a href="https://xinxi.hebau.edu.cn/info/1050/1362.htm" target="_blank">孙晨霞</a>
          </div>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">
            <img src="../../assets/lb.jpg" alt="" />
            <a href="https://xinxi.hebau.edu.cn/info/1050/1350.htm" target="_blank">刘博</a>
          </div></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <img src="../../assets/wc.jpg" alt="" />
            <a href="https://xinxi.hebau.edu.cn/info/1050/1351.htm" target="_blank">王超</a>
          </div></el-col
        >
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <img src="../../assets/gy.jpg" alt="" />
            <a href="https://xinxi.hebau.edu.cn/info/1050/1349.htm" target="_blank">高媛</a>
          </div></el-col
        >
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <img src="../../assets/cc.jpg" alt="" />
            <a href="https://xinxi.hebau.edu.cn/info/1050/1348.htm" target="_blank">陈晨</a>
          </div></el-col
        >
      </el-row>
    </div>
    <vfooter> </vfooter>
  </div>
</template>

<script>
import vheader from "../homePage/header.vue";
import vfooter from "../homePage/footer.vue";


export default {
created(){
  activeIndex = 3;
},
components: { vheader, vfooter },
};
</script>


<style scoped>
a:link{
  color: #409eff;
  text-decoration: none;
  font-size: 30px;
}
a:visited{
  color:#409eff;
  text-decoration: none;
  font-size: 30px;
}
img {
  width: 100%;
  padding: 100px;
  float: left;
}
.teacher_info {
  display: block;
  margin: 30px auto;
}
.teacher_box {
  margin: 50px;
  height: 400px;
  background-color: #000;
}
h1 {
  font-weight: normal;
  text-align: center;
  color: #494949;
  font-size: 36px;
  line-height: 50px;
  padding: 0 10px;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>