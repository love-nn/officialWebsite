<template>
  <div class="info">
      <div class="leftInfo">
          <br>
          <h3>工作室介绍</h3>
          <p class="office_info">工作室旨在通过培训激发学生学习兴趣，提高学生实践能力，丰富学生课余生活，扩大视野，增长经验，提高专业竞争力。同时将具有开发能力的学生集中，向校内、校外缺少技术人员的团队提供帮助。</p>
          <p class="learnMore">了解更多-></p>

      </div>
      <div class="rightInfo">
          <img class="image" src="../../assets/group.png" />
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.info{
    padding: 30px 5%;
    border-bottom: 1px #c5c5c5 solid;
    height:350px;
}
.leftInfo{
    float: left;
    width:50%;
    height: 100%;
    background: #fff;
}
.rightInfo{
    float: right;
    width: 50%;
    height: 100%;
}
.image{
    width: 100%;
    height: 100%;
}
.office_info{
    text-align: left;
    text-indent: 2em;
    font-size: 21px;
}
h3{
    font-size: 36px;
    line-height: 66px;
    font-family: HuakangWawati;
}
.learnMore{
    font-size: 21px;
    line-height:40px;
    text-align: left;
    text-indent: 2em;
}
</style>