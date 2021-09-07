<template>
  <div class="home">
    <vheader></vheader>
    <carousel></carousel>
    <transition name="el-zoom-in-center" appear>
      <voffice></voffice>
    </transition>
    <transition name="el-zoom-in-bottom" appear>
      <depart></depart>
    </transition>
    <transition name="el-fade-in-linear" appear>
      <project></project>
    </transition>
    <vfooter></vfooter>
  </div>
</template>

<script>
import vheader from "./header.vue";
import carousel from "./carousel.vue";
import voffice from "./office.vue";
import vfooter from "./footer.vue";
import depart from "./departInfo.vue";
import project from "./projectInfo.vue";
export default {
  components: { vheader, carousel, voffice, vfooter, project, depart },
  data() {
    return {

    };
  },
  created() {
    window.onscroll = function () {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop =  document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight =  document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      //console.log("可视区的高度" + windowHeight +"\n" +"滚动条的总高度" + scrollHeight +"距离头顶的高度" +scrollTop);
      //滚动条到底部的条件
      if (scrollTop > 0) {
        //写后台加载数据的函数
        console.log("加载office");
        console.log(this.isShow_office);
        // this.isShow_office = true;
        // console.log(this.isShow_office);
      } 
      
    };
  },
};
</script>
 
<style>
.el-zoom-in-center-enter-active {
  transition: 2s;
}
.el-fade-in-linear-enter-active {
  transition: 2s;
}
.el-zoom-in-bottom-enter-active {
  transition: 2s;
}
</style>