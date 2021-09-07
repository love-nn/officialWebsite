<template>
  <div class="member">
    <div class="pc-page">
      <div class="pc-container">
        <div class="pc-carousel">
          <div class="pc-card">
            <div class="left">
              <div class="pc-row pc-year">
                <div class="pc-line"></div>
                2021
              </div>
              <div
                class="pc-row pc-member"
                v-for="item in prizeList2021"
                :key="item.id"
              >
                <div class="pc-name">{{ item.name }}</div>
                <div class="pc-place">{{ item.prize }}</div>
              </div>
            </div>
            <div class="right">
              <div class="pc-row pc-year">
                <div class="pc-line"></div>
                2020
              </div>
              <div
                class="pc-row pc-member"
                v-for="item in prizeList2020"
                :key="item.id"
              >
                <div class="pc-name">{{ item.name }}</div>
                <div class="pc-place">{{ item.prize }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "member",
  data() {
    return {
      prizeList2021: [
        {
          id: 1,
          name: "张瑞丰",
          prize: "第十四届中国计算机设计大赛全国总决赛一等奖",
        },
        {
          id: 2,
          name: "李岩松",
          prize: "第六届中国高校计算机大赛团体程序设计天梯赛国家三等奖",
        },
        {
          id: 3,
          name: "张瑞丰",
          prize: "蓝桥杯全国软件和信息技术专业人才大赛省级一等奖",
        },
        { id: 4, name: "熊泽昌", prize: "第五届河北省程序设计竞赛三等奖" },
      ],
      prizeList2020: [
        {
          id: 1,
          name: "李岩松",
          prize: "第五届中国高校计算机大赛团体程序设计天梯赛国家三等奖",
        },
        {
          id: 2,
          name: "张瑞丰",
          prize: "挑战杯全国大学生系列科学技术竞赛省级一等奖",
        },
        { id: 3, name: "李岩松", prize: "第四届河北省程序设计竞赛二等奖" },
      ],
    };
  },
};
</script>

<style scoped>
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
  height: 60vh;
  position: relative;
  box-shadow: 0 0.208vw 0.781vw 0.521vw rgb(103 47 123 / 2%);
  border-radius: 0.417vw;
    background-color: #fff;
}
.left {
  float: left;
  display: block;
  width: 480px;
  outline: none;
}
.right {
  float: left;
  display: block;
  width: 480px;
  outline: none;
}

.pc-row {
  width: 100%;
  height: 1.953vw;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}
.pc-year {
  font-family: hin;
  color: rgb(49, 96, 204);
  font-size: 1.042vw;
  margin-top: 1.042vw;
  margin-bottom: 1.042vw;
}
.pc-line {
  position: relative;
  -webkit-transform: translateX(-0.521vw);
  transform: translateX(-0.521vw);
  height: 2.083vw;
  width: 2.083vw;
  background-image: url(../../assets/member1.png);
  background-size: cover;
}
.pc-member {
  -webkit-justify-content: space-between;
  justify-content: space-between;
  color: #666;
  font-size: 0.781vw;
}

.pc-card {
  width: 26vw;
  height: 40vh;
  position: relative;
  left: 2vw;
}
</style>