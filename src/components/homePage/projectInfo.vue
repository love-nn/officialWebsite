<template>
  <div class="project">
    <h3>项目介绍</h3>
    <swiper ref="mySwiper" :options="swiperOptions" class="sw">
      <swiper-slide>
        <img class="swiper-img" src="../../assets/project/maian.png" alt="" />
        <div>
          <h1>麦安农业知识图谱服务平台</h1>
          <!-- <p>
              “麦安”农业知识图谱服务平台是以农业知识图谱为基础，向农业种植户、
              农业科研者、智慧农业公司开发者提供知识图谱应用服务的智能服务平台。
            </p> -->
        </div>
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="../../assets/project/3D.png" alt="" />
        <div>
          <h1>手持三维扫描仪--三维地图重建</h1>
          <!-- <p>
              以同时定位与建图技术（SLAM）为基础框架，
              融合视觉传感器、惯性传感器以及激光雷达进行农
              大校园的高精度三维地图重建，山寨手持扫描仪。
            </p> -->
        </div>
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="../../assets/project/ai.png" alt="" />
        <div>
          <h1>智能算法与应用</h1>
          <!-- <p>
              使用近几年人工智能中最火热的神经网络结合或 • 校级项目
              改进前沿模型，解决如目标检测、图像质量识别、人
              脸识别等计算机视觉方面的实际问题。
            </p> -->
        </div>
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="../../assets/project/skyland.png" alt="" />
        <div>
          <h1>空天地一体化大数据平台研发</h1>
          <!-- <p>
              所使用的开发技术包含Vue、Angular、Spring • 熟悉消息队列、SQL优化等
              Boot、Spring Cloud、消息中间件、SQL优化、Docker 容器
              、OpenLayers、GDAL等。覆盖前端、后端和遥 感地理信息处理。
            </p> -->
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { getProject } from "../../api/api.js";
export default {
  created() {
    this.getPro();
  },
  methods: {
    getPro: async function () {
      let resp = await getProject();
      this.projectList = resp.data.body;
      console.log(this.projectList);
    },
  },
  name: "HomeSwiper",
  data() {
    return {
      projectList: [],
      swiperOptions: {
        pagination: "swiper-pagination",
        loop: true,
        effect: "coverflow",
        autoplay: 3000,
        slidesPerView: 3,
        spaceBetween: 20,
        touchRatio: 1,
      },
    };
  },
};
</script>

<style scoped>
.project {
  width: 100%;
  padding: 30px 5%;
  height: 700px;
}
.wrapper {
  width: 100%;
  height: 0;
}
.sw {
  background-color: #eee;
}
.swiper-img {
  width: 100%;
  height: 400px;
  border-radius: 100px;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
h3 {
  font-size: 48px;
  font-weight: 700;
  line-height: 2;
}
h1 {
  text-align: center;
  font-weight: 500;
}
p {
  font-size: 22px;
  line-height: 1.8;
  text-align: left;
  text-indent: 2em;
}
</style>