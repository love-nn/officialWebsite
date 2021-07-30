<template>
  <div class="yidong">
    <vheader></vheader>
    <div class="yidong_info">
      <ul>
        <h1>移动端部</h1>
        <li class="ul_header">部门简介</li>
        <p>
          来开发部移动端，你可以写属于自己的APP，比如写一个二手市场APP来帮
          助同学进行二手交易，还可以开发APP参加比赛。
        </p>
        <p>
          加入开发部移动端是你展现自己，锻炼自己的一个机会。来到信息院，你一定
          怀揣着对大学生活的憧憬与期待，对自己喜爱的理想的追求。
        </p>
        <p>
          如果你热爱编程，热爱创作，热爱计算机的世界，却找不到志同道合的朋
          友，来零一悦动开发部移动端，与志同道合的同学，学长学姐，老师相互学习，
          共同进步；
        </p>
        <p>
          如果你对IT学习的方向感到迷茫或者寻求项目无门，来到零一悦动开发部移
          动端，学长学姐带领你找到你所热爱的领域共同学习；
        </p>
        <p>
          如果你怀揣激情与技术却无处施展，来零一悦动开发部移动端，和小伙伴们
          一起做项目，尽情的展示自己才华，实现自我价值。
        </p>
        <li class="ul_header">部门职能</li>
        <p>
          负责社团移动APP应用的开发与维护，主要是实现前端界面设计，以及社团
          项目移动端的开发与维护。同时对接开发部后端接口，完成产品部设计要求。同
          时基于项目不断学习，团队相互学习，互相进步。
        </p>
        <li class="ul_header">部门要求</li>
        <ol>
          <li class="ol_header">有高度的工作责任心和积极地态度。</li>
          <li class="ol_header">
            热爱编程，具有创新精神与进取心，不畏接受新鲜实物。
          </li>
          <li class="ol_header">勇于创新，乐于助人，具有团队意识。</li>
        </ol>
      </ul>
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script>
import vheader from "../homePage/header.vue";
import vfooter from "../homePage/footer.vue";

export default {
  components: { vheader, vfooter },
};
</script>

<style scoped>
.yidong {
  width: 100%;
}
.yidong_info {
  margin: 50px 10%;
}
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