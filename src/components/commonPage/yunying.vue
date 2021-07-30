<template>
  <div class="yunying">
    <vheader></vheader>
    <div class="yunying_info">
      <ul>
        <h1>运营部</h1>
        <li class="ul_header">部门简介</li>
        <p>
          运营部是一个综合职能部门。运营部主要负责运营自媒体平台，筹备活动，整理档案，人员管理，协调各部门正常运作。运营部是社团的心脏，来到这里，你们会学到更多关于自媒体运营的文案创作，视觉设计知识，提高自己的组织协调能力、表达能力，数据分析能力，还可以交一些志同道合的朋友，扩大在学校的交际面。
        </p>
        <li class="ul_header">部门宗旨</li>
        <p>部门本着提高大家学习以及各方面能力的宗旨，希望大家来到社团后，能学习到东西，提高自己的能力，并且丰富自己的大学生活。来到01悦动社团中我们最主要的任务就是学习，在这里不会有让人心烦的破事，只会有学不完的知识，相信大家在这里，只要跟着学长的步伐，一定会收获一个全新的自己。运营部，期待大家的到来。</p>
        <li class="ul_header">部门职能</li>
        <ol>
          <li class="ol_header">撰写公众号新闻，运营微信、QQ、微博等平台。</li>
          <li class="ol_header">
            为社团创造一个有利开展活动的条件，负责布置、安排、监督社团各部门的活动。
          </li>
          <li class="ol_header">负责作好活动资料存档工作以及展示社团风采。</li>
          <li class="ol_header">负责定期审核、考评社团人员的工作成果。</li>
          <li class="ol_header">
            健全本社团组织机构包括广纳人才、选聘干部和协调各部门之间的关系。
          </li>
          <li class="ol_header">
            负责宣传活动，比如社团需要组织活动的广告宣传工作，或者社团最近动向，最新新闻，策划前期宣传布置。
          </li>
        </ol>
        <li class="ul_header">部门要求</li>
        <ol>
          <li class="ol_header">
            加入的小伙伴们首先真正喜欢运营部的工作，并且想要提升自己的能力哦！
          </li>
          <li class="ol_header">要有团队沟通能力和学习能力。</li>
          <li class="ol_header">
            要听从社团老师和学长的指挥，服从部门的安排。
          </li>
        </ol>
        <li class="ul_header">部门分组</li>
        <p>
          根据部门职能，部门需要进行分组管理。每个部门需要完成不同的任务。具体分为:
        </p>
        <p>
          宣传组：负责自媒体平台的运营，主要是定期发布文章并且负责联系社团中其他部门，记录部门及社团内人员的信息，以及记录社团其他部门的情况。
        </p>
        <p>
          组织组：负责筹备部门以及社团活动，定期检查部门人员的学习以及工作情况。
        </p>
        <li class="ul_header">学习规划</li>
        <ol>
          <p>进入大学，最重要的能力就是自主学习能力，所以我们会注重对同学们的学习能力的培养。</p>
          <li class="ol_header">学习自媒体运营相关内容</li>
          <li class="ol_header">学习word,excel基础知识</li>
          <li class="ol_header">学习使用秀米编辑器</li>
          <li class="ol_header">选择一个其他部门，学习其他部门的知识</li>
        </ol>
        <li class="ul_header">学习计划</li>
        <ol>
          <li class="ol_header">部长制定学习计划，组长负责传达给组员，并监督组员学习。</li>
          <li class="ol_header">进行部门内人员培训，主要由组长培训，培训内容为word，excel等office基础知识。具体培训方式可由组长自行决定。</li>
          <li class="ol_header">学习本部门知识的同时，可以选择一个其他部门，跟着所选部门进行学习。</li>
        </ol>
        <li class="ul_header">部门资源</li>
        <p>大家可以在社团网站的学习资源部分下载学习，也可以把自己认为不错的学习资源上传到网站中。</p>
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
.yunying {
  width: 100%;
}
.yunying_info {
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