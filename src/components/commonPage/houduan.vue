<template>
  <div class="houduan">
    <vheader></vheader>
    <div class="houduan_info">
      <ul>
        <h1>后端部</h1>
        <li class="ul_header">部门简介</li>
        <p>你是否想拥有一个自己的网站，是否怀揣着精通一门技术的理想，是否想拥有属于自己的万千用户，加入零一悦动后端部，就能实现你之所想。后端作为软件开发的核心部分，负责网站数据的交互，保存和读取。部门以编程语言的培训和学习为主，增长编程能力的同时，也提高团队合作能力，锻炼逻辑思维能力。同时也会掌握很多高级技术，例如MySql数据库,Linux操作系统，熟练掌握这些技术会对以后的考研和面试以及参加比赛有很大帮助。俗话说：技多不压身。</p>
        <li class="ul_header">部门职能</li>
        <ol>
          <li class="ol_header">对社团网站接口进行必要的调整维护</li>
          <li class="ol_header">对网站和软件数据存储，数据交互，安全进行维护支持</li>
          <li class="ol_header">对网站和软件的安全稳定提供保障</li>
          <li class="ol_header">提供高效的数据处理，数据接受，数据发送</li>
          <li class="ol_header">提供可靠安全的数据存储方式，高效的检索方式</li>
        </ol>
        <li class="ul_header">招新要求</li>
        <ol>
          <li class="ol_header">具有良好的沟通能力，合作能力。</li>
          <li class="ol_header">对逻辑和数学等科目感兴趣</li>
          <li class="ol_header">喜欢学习及尝试新技术,从技术趋势和思路上影响技术团队</li>
          <li class="ol_header">培养学习能力强,适应能力好,具备耐心、细心的品质;</li>
        </ol>
        <li class="ul_header">团队建设</li>
        <p>以学习java后端知识为主，在增长知识的同时通过成员之间的交流结识更多的朋友，增进彼此之间的感情，为未来的工作积累经验，增强团队意识。熟练掌握数据库，服务器等技术的应用和实践，努力提升自身的实力，并增强团队合作能力，为以后的工作打下基础。</p>
        <li class="ul_header">部门资源</li>
        <p>部门有充足的书籍资源，还有专业老师的指导，遇到不明白的问题时，可以查阅书籍或者与学长学姐们一起讨论。</p>
        <li class="ul_header">未来规划</li>
        <p>在以后的网站后台设计的过程中，逐步完善自己的知识体系，不断积累项目经验，同时参加各种项目或者比赛，对未来的面试和考研中都很大帮助。</p>
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
.houduan {
  width: 100%;
}
.houduan_info {
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