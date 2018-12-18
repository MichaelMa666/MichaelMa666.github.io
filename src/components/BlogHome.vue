<template>
  <div id="homePage">
    <div id="appHead">
      <div id="appHeadContent">
        <blog-head-nav></blog-head-nav>
      </div>
    </div>

    <div id="appMain">
      <!-- <blog-left-nav></blog-left-nav> -->
      <div id="appContent">
        <transition>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
// import BlogLeftNav from './BlogLeftNav.vue'
import BlogHeadNav from './BlogHeadNav.vue'

export default {
  name: 'BlogHome',
  components: {
    // 'blog-left-nav': BlogLeftNav
    'blog-head-nav': BlogHeadNav
  },
  data () {
    return {
      msg: 'Michael Ma Blog'
    }
  }
}
</script>
<style lang='less' scoped>
  @import '../less/varables.less';
  #appHead{
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    left: 0;
    height: 4.6em;
    padding-left: calc(100vw - 100%);
    background-color: hsla(0, 0%, 100%, 0.8);
  }
  #appHeadContent {
    width: 60em;
    margin: 0 auto;
  }
  ul {
    margin: 0;
    height: 2em;
    font-size: 2em;
    text-align: left;
  }
  #appContent{
    background-color: transparent;
  }
  @media screen and (max-device-width: 600px){
    #appMain {
      width: 100vw;
      margin: 4.6em auto 1em;
    }
  }
  @media screen and (min-device-width: 600px){
    #appMain {
      width: 60em;
      margin: 4.6em auto 1em;
    }
  }
</style>
