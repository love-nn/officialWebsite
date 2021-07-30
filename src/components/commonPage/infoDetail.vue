<template>
  <div class="infoDetail">
    <h1>社团介绍</h1>
  </div>
</template>

<script>
import vheader from "../homePage/header.vue";
import vfooter from "../homePage/footer.vue";

export default {
  components: { vheader, vfooter },
};
</script>

<style>

h1 {
  font-weight: normal;
  text-align: center;
  color: #494949;
  font-size: 36px;
  line-height: 50px;
  padding: 0 10px;
}
p {
  color: #494949;
  font: 16px/2 "Microsoft Yahei", arial, sans-serif;
  font-size: 16px !important;
  text-indent: 2em !important;
  line-height: 32px !important;
  text-align: left;
}
ol {
  list-style-position: inside;
}
.ul_header {
  color: #494949;
  text-align: left;
  line-height: 36px;
  font-size: 20px;
  font-family: "Microsoft Yahei";
}
.ol_header {
  text-indent: 2em;
  text-align: left;
  list-style-type: decimal;
}
</style>