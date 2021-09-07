<template>
  <div class="office">
    <div class="office_child">
      <div class="officel greencolor">
        <h1>我们是</h1>
        <h3>零一悦动工作室</h3>
      </div>
      <div class="officer whitecolor">
        <p></p>
      </div>
    </div>
    <div class="office_child">
      <div class="officel whitecolor"></div>
      <div class="officer greencolor">
        <h1>致力于</h1>
        <p>
          通过培训激发学生学习兴趣，提高学生实践能力，丰富学生课余生活，扩大视野，增长经验，提高专业竞争力。同时将具有开发能力的学生集中，向校内、校外缺少技术人员的团队提供帮助。
        </p>
      </div>
    </div>
    <div class="office_child">
      <div class="officel greencolor">
        <h1>信念是</h1>
        <ul>
          <li>理性:看懂有人的世界 里最基本的运行规律；</li>
          <li>悦纳:学会接受和感恩这个世界；</li>
          <li>进取:看到自己存在的意义，找到不断精进的空间。</li>
        </ul>
      </div>
      <div class="officer whitecolor"></div>
    </div>
  </div>
</template>

<script>
import { getProject } from "../../api/api.js";
export default {
  created() {
    this.getPro();
  },
  data() {
    return {
      projectList: [],
    };
  },
  methods: {
    getPro: async function () {
      let resp = await getProject();
      this.projectList = resp.data.body;
      console.log(this.projectList);
    },
  },
};
</script>

<style scoped>
.office {
  height: 600px;
  width: 100%;
  padding: 30px 5%;
}
.office_child {
  height: 200px;
  width: 100%;
}
.greencolor {
  background-color: #28a998;
  color: #fcfdfe;
}
.whitecolor {
  background-color: #fcfdfe;
  color: #28a998;
}
.officel {
  height: 100%;
  width: 50%;
  float: left;
  padding-left: 1.5%;
  padding-right: 1.5%;
}
.officer {
  height: 100%;
  width: 50%;
  float: right;
  padding-left: 1.5%;
  padding-right: 1.5%;
}
h3 {
  font-size: 50px;
  font-weight: 700;
  line-height: 2;
}
h1 {
  text-align: center;

  line-height: 2;
}
p {
  font-size: 22px;
  line-height: 1.8;
  text-align: left;
  text-indent: 2em;
}
li {
  list-style-type: none;
  font-size: 22px;
  line-height: 1.8;
  text-align: center;
  text-indent: 2em;
}

</style>