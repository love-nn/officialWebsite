<template>
<transition  name="hello" appear>
  <div v-show="isShow">
    <button @click="isShow = !isShow">显示/隐藏</button>
    
      <h1 >你好啊</h1>

  </div>
      </transition>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
div {
  background-color: pink;
  transition: 0.5s linear;
}
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}
</style>