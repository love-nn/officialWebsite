<template>
  <div class="conduct">
    <div class="left_conduct">
      <img src="../../assets/conduct.png" class="conductPic" />
    </div>
    <div class="right_conduct">
        <h3>行为准则</h3>
          <p class="conduct_info">行为准则是零一跃动工作室每个成员必备的优良品质，是规范管理社团必不可缺的要素</p>
          <p class="learnMore">了解更多-></p>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
};
</script>

<style>
.conduct {
  padding: 30px 5%;
  height: 350px;
  width: 100%;
  border-bottom: #c5c5c5 solid 1px;
}
.left_conduct {
  float: left;
  width: 50%;
  height: 100%;
}

.right_conduct {
  float: right;
  width: 50%;
  height: 100%;
}
.conductPic {
  height: 100%;
  width: 100%;
}
.conduct_info{
    text-align: left;
    text-indent: 2em;
    font-size: 21px;
}
h3{
    font-size: 36px;
    line-height: 66px;
}
.learnMore{
    font-size: 21px;
    line-height:40px;
    text-align: left;
    text-indent: 2em;
}
</style>