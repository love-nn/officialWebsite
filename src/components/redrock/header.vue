<template>
  <div class="sidebar">
    <div class="inner_sidebar">
      <div class="sidebar_flex_box">
        <div class="binarydance_logo"></div>
        <div class="title_flex_box">
          <div class="text_box" v-for="item in linklist" :key="item.id">
            <div class="link">{{ item.name }}</div>
          </div>
          <!-- <div class="text_box">
            <div class="link">产品架构</div>
          </div>
          <div class="text_box">
            <div class="link">组织架构</div>
          </div>
          <div class="text_box">
            <div class="link">成员去向</div>
          </div>
          <div class="text_box">
            <div class="link">加入我们</div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linklist: [
        { id: "2", name: "组织架构" },
        { id: "3", name: "荣誉栏" },
        { id: "4", name: "加入我们" },
      ],
    };
  },
};
</script>

<style scoped>
div {
  display: block;
}
.sidebar {
  position: fixed;
  width: 100vw;
  height: 3.594vw;
  background-color: #fff;
  color: #333;
  font-size: 0.781vw;
  z-index: 999;
}
.inner_sidebar {
  width: 100%;
  height: 3.594vw;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}
.sidebar_flex_box {
  width: 62.5vw;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  align-items: center;
}
.binarydance_logo {
  width: 8.5vw;
  height: 1.302vw;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  background: url(../../assets/7.png);
  background-size: 100% 100%;
  cursor: pointer;
  transition: all 0.3s;
}
.title_flex_box {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: center;
  justify-content: center;
}
.text_box {
  width: 3.125vw;
  margin-left: 3vw;
  padding: 0.365vw 0;
  border-bottom: 0 solid hsla(0, 0%, 100%, 0);
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.833vw;
}
.link {
  width: 3.646vw;
  font-size: 0.833vw;
}
</style>