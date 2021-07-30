<template>
  <div class="qianduan">
    <vheader></vheader>
    <div class="qianduan_info">
      <ul>
        <h1>前端部</h1>
        <li class="ul_header">部门简介</li>
        <p>
          如果你热爱编程，喜欢创造，欢迎加入web前端部。前端部作为零一跃动工作室的一个重要部门，部门以学习网页制作知识为主，通过大方简洁的页面将网站信息展示给用户，在增长知识的同时通过成员之间的交流结识更多的朋友，为以后参加各类创新设计比赛提供很大帮助。加入我们，给热爱编程的你提供一个更好的平台和一群志同道合的朋友，在社团老师和学长学姐的帮助下，为你未来的发展方向指出一条道路。
        </p>
        <li class="ul_header">部门职责</li>
        <ol>
          <li class="ol_header">使用html并结合Javascript负责产品的前端开发和页面制作。</li>
          <li class="ol_header">
            与产品、后端开发人员保持良好沟通，能快速理解、消化各方需求，并落实为具体的开发工作，能独立完成功能页面的设计与代码编写，配合产品团队完成功能页面的需求调研和分析。
          </li>
          <li class="ol_header">与后端开发团队紧密配合，完成接口对接，确保前后端有效交互。</li>
          <li class="ol_header">对现有前端开发框架进行深入了解，并参与持续改进。</li>
          <li class="ol_header">关注前端技术前沿，及时把新技术转化为业务开发中的生产力。</li>
          <li class="ol_header">完成业务界面交互和独自设计组件开发。</li>
        </ol>
        <li class="ul_header">加入条件</li>
        <ol>
          <li class="ol_header">细心，较真，对UI实现负责认真，不能得过且过。</li>
          <li class="ol_header">有一定的自学能力，喜欢钻研。</li>
          <li class="ol_header">有一定的抗压能力。</li>
        </ol>
        <li class="ul_header">学习规划</li>
        <ol>
          <li class="ol_header">学习html、css、javascript前端三件套，用来实现基础的网页制作。</li>
          <li class="ol_header">学习vue框架，用来实现组件化开发，模块化开发。</li>
          <li class="ol_header">学习node.js、webpack，了解开发中的最新技术。</li>
        </ol>
        <li class="ul_header">团队建设</li>
        <ol>
          <li class="ol_header">生活方面，为了提高部门人员凝聚力，会在合理时间安排聚餐等娱乐活动，增进同学之间的交流，进一步拉近部门成员间的关系。</li>
          <li class="ol_header">学习方面，大家可以随时交流学习前端方面的技术，共享最新的制作成果，在展示与交流中提升自我。</li>
          <li class="ol_header">本部秉承01跃动俱乐部的基本理念，所有人员一律平等，不搞特殊化。本部作为一个技术开发部门，坚持以交流学习创新共享为原则。</li>
        </ol>
        <li class="ul_header">部门资源</li>
        <p>前端部有大量的书籍与视频资源，更有专业的前端老师进行指导，在多种途径上满足大家对应技术学习的需要。</p>
        <li class="ul_header">未来规划</li>
        <p>在未来的开发学习中，不断保持一份学习的初心，在开发设计的过程中不断学习进步，学习他人网页制作的优点，通过自己的灵感与创新，积累一套属于自己的网页开发模板。对将来参加项目或比赛，以及配合团队开发都大有好处。</p>
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
.qianduan {
  width: 100%;
}
.qianduan_info {
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