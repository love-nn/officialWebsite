<template>
  <div class="sheji">
    <vheader></vheader>
    <div class="sheji_info">
      <ul>
        <h1>设计部介绍</h1>
        <li class="ul_header">部门简介</li>
        <p>
          设计部是社团最具创造力的部门，集结了一批有梦想、有创意的小伙伴。在这里，同学们可以充分发挥自己的想象力和创造力，用作品传达希冀，引领社团风尚。在每个logo、海报、网页诞生的背后，都有我们辛勤的付出和酷酷的身影。设计部————一个有凝聚力的部门，一个富有创造力的部门。
        </p>
        <li class="ul_header">部门职能</li>
        <p>设计logo、网页设计、海报设计、剪辑视频音乐、制作ppt等。</p>
        <li class="ul_header">加入条件</li>
        <p>
          热爱设计、有耐心、有一定的创造力，最好有一些美术工体，当然零基础的小伙伴也可以加入，我们共同学习。
        </p>
        <li class="ul_header">学习规划</li>
        <ol class="ol_header">
          <li>学习Photoshop软件，用来设计logo、海报等。</li>
          <li>学习Adobe XD软件，用来设计网页。</li>
          <li>学习PowerPoint软件，用来制作精美的ppt。</li>
          <li>学习Premiere软件，用来剪辑视频，音乐等。</li>
        </ol>
        <li class="ul_header">团队建设</li>
        <ol class="ol_header">
          <li>
            在生活方面，为了提高部门人员凝聚力，设计部会在合理的时间进行聚餐等娱乐活动，同学之间可以相互了解，共同学习，这样设计部的人际关系和和谐氛围也会进一步得到加强。
          </li>
          <li>
            在学习方面，本部不仅可以交流与设计有关的技术，还可以交流任何对提升自己有帮助的内容，例如高数、线代等一些工科共同学科，做到全方位共同发展。
          </li>
          <li>
            在思想作风方面，本部秉承01跃动俱乐部的基本理念，所有人员一律平等，不搞特殊化，严厉打击“三分人样未学会，七分官样栩栩如生”的丑恶行为。本部仅是一个纯粹的学习部门，是一个交流技术共同进步的纯净部门。
          </li>
        </ol>
        <li class="ul_header">部门资源</li>
        <p>
          本部有足够的书籍和视频资源，有专业的设计老师进行指导，在某些不懂的问题上，可以查阅书籍和视频，或者与同学、学长或者老师进行交流。
        </p>
        <li class="ul_header">未来规划</li>
        <p>
          在以后的设计工作中，将自己遇到好的素材或者网站保存下来，建立一个属于自己的图库，同时不断积累经验，灵感和创造性思维也会逐渐增多。当具一定实力时，可以参加项目或者比赛，获得的将也会是一辈子的财富。
        </p>
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
.sheji {
  width: 100%;
}
.sheji_info {
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