<template>
  <div class="header">
    <!-- 配色是#FFFFB9 -->
    <!-- 主色是#28A998-->
    <img src="../../assets/whiteLogo.png" class="headerLogo" @click="goHome" />
    <!-- <div class="headerBar">
      关于我们
    </div>
    <div class="headerBar">
      导师介绍
    </div>
    <div class="headerBar">
      部门介绍
    </div>
    <div class="headerBar">
      社团资源
    </div> -->
    <div class="headerBar2">
      <el-menu
        background-color="#28A998"
        text-color="#fff"
        :default-active="activeIndex"
        class="headerBar2"
        mode="horizontal"
        @select="handleSelect"
        active-text-color="#FFFFB9"
      >
        <el-menu-item index="1" @click="goBuilding">社团资源</el-menu-item>
        <el-submenu index="2">
          <template slot="title">部门介绍</template>
          <el-menu-item index="2-1" @click="goYunying">运营部</el-menu-item>
          <el-menu-item index="2-2" @click="goSheji">设计部</el-menu-item>
          <el-menu-item index="2-3" @click="goChanpin">产品部</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">开发部</template>
            <el-menu-item index="2-4-1" @click="goQianduan"
              >前端部</el-menu-item
            >
            <el-menu-item index="2-4-2" @click="goHouduan">后端部</el-menu-item>
            <el-menu-item index="2-4-3" @click="goYidong"
              >移动端部</el-menu-item
            >
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" @click="goTeacher">导师介绍</el-menu-item>
        <el-menu-item index="4" @click="goHome">关于我们</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      activeIndex: this.$store.activeIndex,
      isShow: 1,
    };
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goHome() {
      this.$router.push("/home").catch((err) => err);
    },
    goQianduan() {
      this.activeIndex = 2;
      this.$router.push("/qianduan").catch((err) => err);
    },
    goHouduan() {
      this.$router.push("/houduan").catch((err) => err);
    },
    goYidong() {
      this.$router.push("/yidong").catch((err) => err);
    },
    goChanpin() {
      this.$router.push("/chanpin").catch((err) => err);
    },
    goYunying() {
      this.$router.push("/yunying").catch((err) => err);
    },
    goSheji() {
      this.$router.push("/sheji").catch((err) => err);
    },
    goTeacher() {
      this.$router.push("/teacher").catch((err) => err);
    },
    goBuilding() {
      this.$router.push("/building").catch((err) => err);
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 80px;
  background-color: #28a998;
  margin-top: 0;
}
.headerLogo {
  width: 300px;
  height: 70px;
  padding-left: 10px;
  padding-top: 5px;
  float: left;
}
.headerBar {
  float: right;
  height: 100%;
  width: 100px;
  color: white;
  padding-top: 32px;
  margin-right: 50px;
  font-family: "Microsoft Yahei";
  font-size: 24px;
}
.headerBar2 {
  float: right;
  margin-top: 5px;
  width: 500px;
  color: white;
  font-family: "Microsoft Yahei";
  font-size: 24px;
  background-color: #28a998;
}

.el-menu--horizontal {
  border: none;
  color: white !important;
}
</style>