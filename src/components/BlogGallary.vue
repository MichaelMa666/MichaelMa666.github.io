<template>
  <div id="gallary">
    <img class="imgItem" src="http://michaelma-assets.oss-cn-beijing.aliyuncs.com/common/skiing.jpg?x-oss-process=style/gallary">
    <img class="imgItem" src="http://michaelma-assets.oss-cn-beijing.aliyuncs.com/coco/cocoBaby.jpg?x-oss-process=style/gallary">
    <img class="imgItem" src="http://michaelma-assets.oss-cn-beijing.aliyuncs.com/coco/cocoSleep.jpg?x-oss-process=style/gallary">
    <div v-if="loading">
      <img src="http://michaelma-assets.oss-cn-beijing.aliyuncs.com/common/lemon.svg" class='lemonBounce'/>
        Loading.....
    </div>
  </div>
</template>
<script>
import { store } from '../store/store'

export default {
  store: store,
  name: 'BlogGallary',
  data () {
    return {
      msg: 'Michael Gallary',
      loading: false
    }
  },
  created () {
    // console.log(1)
  },
  mounted () {
    // console.log(2)
  },
  activated () {
    const pos = this.$store.state.moduleGallery.positionY
    setTimeout(() => {
      window.scrollTo(0, pos)
    }, 50)
  },
  deactivated () {
    this.$store.state.moduleGallery.positionY = window.scrollY
  },
  methods: {}
}
</script>
<style lang='less' scoped>
@import '../less/varables.less';
@media screen and (min-device-width:1100px) {
  .imgItem {
    width: 20em;
    height: 24em;
    float: left;
    margin: 5em;
  }
}
@media screen and (min-device-width:1000px) and (max-device-width: 1100px){
  .imgItem {
    width: 38vw;
    height: 40vw;
    float: left;
    margin: 4vw;
  }
}
@media screen and (min-device-width:600px) and (max-device-width: 1000px){
  .imgItem {
    width: 40vw;
    height: 50vw;
    float: left;
    margin: 5vw;
  }
}
@media screen and (max-device-width:600px){
  #gallary {
    text-align: center;
  }
  .imgItem {
    width: 80vw;
    height: 24em;
    margin:0 auto;
  }
}
.imgItem {
  transition: transform .5s ease;
  cursor: pointer;
}
.imgItem:hover {
  transform: scale(1.5)
}
</style>
