<template>
  <div id="about">
    <p id='detail'><span>{{ name }}</span></p>
    <p><font-awesome-icon :icon="['fal', 'envelope-square']" /> <a class='underLine'>{{ mail_2 }}</a></p>
    <p><font-awesome-icon :icon="['fab', 'instagram']" /> <a class='underLine'>{{ instagram }}</a></p>
    <p><font-awesome-icon :icon="['fab', 'github']" /> <a class='underLine'>{{ gitAccount }}</a></p>
    <p>{{ company }}</p>
    <p>{{ position }}</p>
    <!-- <p><font-awesome-icon :icon="['fab', 'weixin']" /> <a class='underLine'>{{ weiChat }}</a></p> -->
    <hr>
  </div>
</template>
<script>
import { store } from '../store/store'
export default {
  store: store,
  name: 'BlogAbout',
  data () {
    return {
      msg: ' ---- ',
      name: 'Michael Ma',
      mail_1: 'maixaobo2015@gmail.com',
      mail_2: 'maixaobo2015@163.com',
      company: '现服役于帝都某国企软开中心',
      position: '痴迷技术热爱前端，无奈任务完成的太快，被委以饮水机管理员，打印机维修员，饭票管理员，考勤统计员等等要职。',
      carrer: '前端攻城狮~汪汪',
      gitAccount: 'https://github.com/MichaelMa666',
      weiChat: 'm458425507',
      instagram: 'https://www.instagram.com/maxiaobo2015/'
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$store.state.moduleAbout.domHeight = document.querySelectorAll('#about')[0].clientHeight
    })
  },
  methods: {
  }
}
</script>
<style lang='less' scoped>
@import '../less/varables.less';
#about {
  text-align: left;
  margin-left: 2em;
}
.underLine {
  text-decoration-line: underline;
  cursor: pointer;
}
@media screen and (max-device-width: 600px){
  #about {
    text-align: left;
    margin:0 auto;
    width: 80vw;
  }
}
#about svg {
  /*color: #42b983;*/
}
#about svg {
  cursor:pointer;
  transition: transform .5s ease;
}
#about svg:hover{
  transform: scale(1.3);
}
#detail {
  position: relative;
  top: 10px;
  font-size: 30px;
}
</style>
