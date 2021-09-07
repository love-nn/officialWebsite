<template>
  <div class="aboutus">
    <div class="container">
      <div class="icon-list">
        <div class="icon" v-for="item in iconList" :key="item.id">
          <img :src="item.img" alt="" />
          <p>{{ item.detail1 }}</p>
          <p>{{ item.detail2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconList: [
        {
          id: 1,
          img: require("../../assets/aboutus/1.png"),
          detail1: 2021,
          detail2: "成立时间",
        },
        {
          id: 2,
          img: require("../../assets/aboutus/2.png"),
          detail1: "5+",
          detail2: "获奖数量",
        },
        {
          id: 3,
          img: require("../../assets/aboutus/3.png"),
          detail1: "30+",
          detail2: "工作室累计同学",
        },
        {
          id: 4,
          img: require("../../assets/aboutus/4.png"),
          detail1: "100+",
          detail2: "新媒体关注量",
        },
        {
          id: 5,
          img: require("../../assets/aboutus/5.png"),
          detail1: "1000+",
          detail2: "新媒体阅读量",
        },
        {
          id: 6,
          img: require("../../assets/aboutus/6.png"),
          detail1: "5+",
          detail2: "旗下产品数量",
        },
      ],
    };
  },
};
</script>

<style scoped>
html {
  -webkit-text-size-adjust: 100%;
}
div {
  display: flex;
  flex-wrap: wrap;
}
.aboutus {
  width: 100vw;
  height: 100vh;
  position: fixed;
  transition: -webkit-transform 1s;
  transition: transform 1s;
  transition: transform 1s, -webkit-transform 1s;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}
.container {
  max-width: 52.083vw;
  min-height: 36.458vw;
  margin: 0 auto;
  /* position: relative; */
  width: 100vw;
  /* -webkit-flex-direction: column;
  flex-direction: column; */
  -webkit-align-items: center;
  align-items: center;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
.container,
.container .icon-list {
  /* display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-flex-direction: column;
  flex-direction: column; */
}
.icon-list {
  width: 62.5vw;
  /* position: relative; */
  top: 13vh;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
   align-content: flex-start;
  flex-wrap: wrap;
  /* -webkit-flex-direction: column;
  flex-direction: column; */
  display: -webkit-flex;
  display: flex;
}
.icon {
  width: 18vw;
  height: 20vh;
  margin: 0 0 7vh;
  background-color: #fff;
  box-shadow: 0 0.208vw 0.781vw 0.521vw rgb(103 47 123 / 3%);
  border-radius: 0.417vw;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-align-items: center;
  align-items: center;
  transition: all 1s;
}
.icon:hover {
  color: red;
}
.icon img {
  width: 6.771vw;
  height: 5.208vw;
}
.icon p:nth-child(2) {
  font-style: normal;
  font-weight: 700;
  font-size: 1.302vw;
  line-height: 1.563vw;
}
.icon p:nth-child(3) {
  font-style: normal;
  font-weight: 400;
  font-size: 0.729vw;
  line-height: 2.135vw;
}
.container .icon-list .icon img {
  position: relative;
  top: -1.563vw;
}
.container .icon-list .icon p {
  top: -1.042vw;
  margin: 0;
  position: relative;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>