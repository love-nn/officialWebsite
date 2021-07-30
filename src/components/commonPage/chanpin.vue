<template>
  <div class="chanpin">
    <vheader></vheader>
    <div class="chanpin_info">
      <ul>
        <h1>产品部</h1>
        <li class="ul_header">部门简介</li>
        <p>产品部是社团中很关键的一个部门，在产品开发流程中写产品报告占很大比例，从一定程度来说，没有产品报告就没有产品。在产品部的学习过程中，你可以学会如何攥写各种产品报告，在未来对攥写毕业论文、参加比赛时编写的项目计划书有很大的帮助。</p>
        <li class="ul_header">部门职能</li>
        <p>市场调研和用户研究、编写规格说明书、项目计划书、用户手册、产品总结报告等文档，项目计划的制定、跟踪以及进度通报，助力运营部，协助其完成一些宣传工作。</p>
        <li class="ul_header">加入条件</li>
        <p>首先具备出色的沟通协调、良好的团队协作能力。其次最好能够熟练使用office。</p>
        <li class="ul_header">学习计划</li>
        <ol>
          <li class="ol_header">学会需求分析，用来对用户对待开发软件提出的“要求”或“需要”进行分析与整理。</li>
          <li class="ol_header">学习Vision等一系列画图工具以便写文档使用。</li>
          <li class="ol_header">学习各类文档的作用、格式以及写法，用来日后产品开发中使用。</li>
        </ol>
        <li class="ul_header">团队建设</li>
        <ol>
          <li class="ol_header">在生活方面，为了提高部门人员凝聚力，产品部将在合理的时间进行聚餐等娱乐活动，同学之间可以相互了解、相互熟悉。</li>
          <li class="ol_header">在学习方面，为了提高部门的综合能力，让部门成员充分理解部门职能。在学习一段时间后会进行简单的综合练习，从而在成员心中树立成就感。部门成员之间也可以相互分享学习资源。</li>
          <li class="ol_header">在思想作风方面，秉承零一悦动工作室的基本理念，所有人员一律平等，不搞特殊化，组长、部长等能自己解决的事情决不去麻烦部门成员。本部是一个交流技术共同进步的学习部门。</li>
        </ol>
        <li class="ul_header">部门资源</li>
        <p>本部有足够的图书和视频等资源，有专业老师进行指导，平常会分享一些好的文章来开阔眼界。对于有疑惑的问题，可以与同学。学长以及老师进行沟通。</p>
        <li class="ul_header">未来计划</li>
        <p>在今后会将自己遇见好的文档、流程图等模板或者网站保存下来，和部门内写文档时遇到的问题以及解决办法建成本部门资料库，逐渐开阔视野，打开思维，增长实力。在今后可以与其他部门的成员组成团队来参加比赛或接手项目。</p>
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
.chanpin {
  width: 100%;
}
.chanpin_info {
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