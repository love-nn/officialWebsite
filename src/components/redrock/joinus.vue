<template>
  <div class="joinus">
    <div class="inner-container flex-between">
      <div class="pc-copywriting">
        <div class="p1">我们正在做的就是以后可以跟</div>
        <div class="p2">别人侃侃而谈的故事</div>
        <div class="p3">Be A BinaryDancer</div>
        <button @click="goBuilding">加入我们</button>
      </div>
      <div class="girl"></div>
    </div>
    <footer class="pc-footer">
      <div class="other-inner-footer">
        <div class="footer_flex_box">
          <div class="binarydance_logo"></div>
          <div class="title_flex_box">
            <div class="footer-title-about-us">
              <!-- <h1>信念是</h1>
        <ul>
          <li>理性:看懂有人的世界 里最基本的运行规律；</li>
          <li>悦纳:学会接受和感恩这个世界；</li>
          <li>进取:看到自己存在的意义，找到不断精进的空间。</li>
        </ul> -->

              <!-- <li>关于我们</li> -->
              <!-- <li>产品介绍</li> -->
              <li>我们的信念是：</li>
              <li>理性:看懂有人的世界 里最基本的运行规律；</li>
              <li>悦纳:学会接受和感恩这个世界；</li>
              <li>进取:看到自己存在的意义，找到不断精进的空间。</li>
            </div>
            <!-- <div class="footer-title-product">
              <p>我们的产品</p>
              <li>开源镜像站</li>
              <li>媒体站</li>
              <li>软件站</li>
            </div> -->
          </div>
          <div class="Qrcodes">
            <div class="QrCode1">
              <p></p>
            </div>
            <div class="QrCode2"></div>
          </div>
        </div>
      </div>
      <div class="inner-footer">
        <div class="footer_content_flex">
          <p>COPYRIGHT © 零一悦动工作室</p>
          <p>地址：河北省保定市莲池区灵玉寺街289号河北农业大学</p>
          <p>E-mail：BinaryDance@163.com</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "joinus",
  data() {
    return {};
  },
  methods: {
    goBuilding: function () {
      this.$router.push("/building");
    },
  },
};
</script>

<style scoped>
.joinus {
  -webkit-animation: fade 1.5s ease;
  animation: fade 1.5s ease;
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
  width: 100vw;
  -webkit-justify-content: center;
  justify-content: center;
  position: relative;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
}
.inner-container {
  width: 62.5vw;
  position: relative;
  -webkit-align-items: center;
  align-items: center;
  top: -10vh;
}
.flex-between {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.pc-copywriting {
  width: 19.792vw;
  height: 15.625vw;
  color: #333;
  font-size: 1.458vw;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  position: relative;
}
.p1 {
  width: 21.875vw;
  text-align: left;
  margin-top: 0;
}
.p1,
.p2 {
  position: relative;
  font-style: normal;
  font-weight: 700;
  line-height: 1.8;
  text-align: left;
  font-size: 1.302vw;
}
.p3 {
  font-family: none;
  position: relative;
  font-style: normal;
  font-weight: 2900;
  font-size: 1.25vw;
  text-align: left;
  line-height: 2.5vw;
  width: 20.833vw;
  margin-top: 2.083vw;
}
button {
  width: 6.25vw;
  height: 2.344vw;
  margin-top: 2.604vw;
  bottom: 0;
  background: #f94141;
  border-radius: 0.313vw;
  font-size: 0.938vw;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  outline: none;
}
.girl {
  width: 20.313vw;
  height: 16.875vw;
  background: url(../../assets/joinus.png);
  background-size: 100% 100%;
}
/* p{
  text-align:center;
} */
.pc-footer {
  width: 100%;
  height: 13.021vw;
  position: absolute;
  bottom: 0;
  font-size: 0.729vw;
  background: #fbfbfb;
}
.pc-footer .other-inner-footer,
.pc-footer .other-inner-footer .footer_flex_box {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  align-items: center;
}
footer {
  display: block;
}
.pc-footer .other-inner-footer {
  width: 100%;
  height: 11.458vw;
  -webkit-justify-content: center;
  justify-content: center;
}
.pc-footer .other-inner-footer .footer_flex_box {
  width: 62.5vw;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.pc-footer .other-inner-footer .binarydance_logo {
  width: 13.281vw;
  height: 1.979vw;
  background-image: url(../../assets/7.png);
  background-size: cover;
}
.pc-footer .other-inner-footer .title_flex_box {
  width: 23vw;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.pc-footer .other-inner-footer .footer-title-about-us li:hover {
  color: #ee3a3a;
}
.pc-footer .other-inner-footer .footer-title-about-us {
  height: 7.813vw;
}
.pc-footer .other-inner-footer .footer-title-about-us p {
  width: 20.646vw;
  font-size: 0.521vw;
  margin-bottom: 1.042vw;
}
li {
  cursor: pointer;
  width: 23.125vw;
  color: #666;
  font-size: 1.017vw;
  line-height: 1.354vw;
  list-style: none;
  transition: all 0.5s linear;
}
.pc-footer .other-inner-footer .Qrcodes {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
}
.pc-footer .other-inner-footer .QrCode1 {
  width: 10.208vw;
  height: 8.208vw;
  background-image: url(../../assets/qcode.png);
  background-size: cover;
}
/* .pc-footer .other-inner-footer .QrCode2 {
  width: 5.208vw;
  height: 5.208vw;
  background-image: url(../../assets/qq.png);
  background-size: cover;
} */
.pc-footer .inner-footer {
  width: 100vw;
  height: 100%;
  margin: 0 auto;
  font-style: normal;
  font-weight: 100;
  font-size: 0.208vw;
  line-height: 0.729vw;
  color: #999;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
}
.joinus,
.pc-footer .inner-footer .footer_content_flex {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
}
.pc-footer .inner-footer .footer_content_flex {
  width: 62.5vw;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>