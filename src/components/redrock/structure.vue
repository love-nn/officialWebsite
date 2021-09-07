<template>
  <div class="structure">
    <div class="pc-page">
      <div class="pc-container">
        <div class="pc-carousel">
          <div class="departInfo">
    <div class="left">
      <h3>组织架构</h3>
      <p>部门是零一跃动的重要组成部分，是我们分工合作的基本单位。</p>
      <p>我们的部门包括：</p>
      <p>| &nbsp;产品部</p>
      <p>| &nbsp;设计部</p>
      <p>| &nbsp;开发部</p>
      <p>&nbsp;&nbsp; &nbsp;├─前端部</p>
      <p>&nbsp;&nbsp; &nbsp;├─后端部</p>
      <p>&nbsp;&nbsp; &nbsp;├─移动端部</p>
      <p>| &nbsp;运营部</p>
    </div>
    <div class="right">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <div class="slide">
            <img class="swiper-img" src="../../assets/chanpin.png" alt="" />
          </div>
          <div class="info">
            <h1>产品部</h1>
            <ul class="info_ul">
              <li class="info_li">商业谈判家</li>
              <li class="info_li">策划产品开发</li>
            </ul>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide">
            <img class="swiper-img" src="../../assets/sheji.png" alt="" />
          </div>
          <div class="info">
            <h1>设计部</h1>
            <ul class="info_ul">
              <li class="info_li">UI设计师</li>
              <li class="info_li">平面设计</li>
            </ul>
          </div></swiper-slide
        ><swiper-slide>
          <div class="slide">
            <img class="swiper-img" src="../../assets/qianduan.png" alt="" />
          </div>
          <br />
          <div class="info">
            <h1>开发部前端部</h1>
            <ul class="info_ul">
              <li class="info_li">网页美化师</li>
              <li class="info_li">根据设计实现网页</li>
            </ul>
          </div> </swiper-slide
        ><swiper-slide>
          <div class="slide">
            <img class="swiper-img" src="../../assets/houduan.png" alt="" />
          </div>
          <div class="info">
            <h1>开发部后端部</h1>
            <ul class="info_ul">
              <li class="info_li">后台开发师</li>
              <li class="info_li">编写核心功能模块</li>
            </ul>
          </div> </swiper-slide
        ><swiper-slide>
          <div class="slide">
            <img class="swiper-img" src="../../assets/yidong.png" alt="" />
          </div>
          <div class="info">
            <h1>开发部移动端部</h1>
            <ul class="info_ul">
              <li class="info_li">小程序开发师</li>
              <li class="info_li">将网页/程序移植到移动端</li>
            </ul>
          </div> </swiper-slide
        ><swiper-slide>
          <div class="slide">
            <img class="swiper-img" src="../../assets/yunying.png" alt="" />
          </div>
          <div class="info">
            <h1>运营部</h1>
            <ul class="info_ul">
              <li class="info_li">综合管理</li>
              <li class="info_li">内容运营、日常管理</li>
            </ul>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        pagination: "swiper-pagination",
        loop: true,
        autoplay: 3000,
        mousewheel: true,
        touchRatio: 1,
      },
    };
  },
};
</script>

<style>
.pc-page {
  width: 100%;
  height: 100%;
  position: fixed;
  transition: -webkit-transform 1s;
  transition: transform 1s;
  transition: transform 1s, -webkit-transform 1s;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  background: #fafafa;
  justify-content: center;
}
.pc-container {
  width: 100vw;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
}
.pc-carousel {
  width: 62.5vw;
  height: 65vh;
  position: relative;
  box-shadow: 0 0.208vw 0.781vw 0.521vw rgb(103 47 123 / 2%);
  border-radius: 0.417vw;
  cursor: pointer;
}
.departInfo {
  width: 100%;
  height: 100%;
}
.left {
  float: left;
  width: 35%;
}
.right {
  float: right;
  width: 63%;
  height: 0;
}
.swiper-img {
  width: 100%;
  height: 50vh;
  border-radius: 10vh;
  background: #fafafa;
}
h3 {
  font-size: 4vh;
  font-weight: 700;
  line-height: 2;
}
h1 {
  text-align: center;
}
p {
  font-size: 3vh;
  line-height: 1.8;
  text-align: left;
}
li {
  list-style-type: none;
  font-family: "Microsoft Yahei", Helvetica, Arial, sans-serif;
  color: #333;
  font-size: 21px;
}
</style>