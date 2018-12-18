<template>
  <div id="app">
    <router-link to="/home"></router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
  @import './less/varables.less';
  html{
    box-sizing: border-box;
  }
  body{
    padding: 0;
    margin: 0;
    line-height: 2;
    font-size: @font-size-base;
    margin-left: calc(100vw - 100%);
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    background-color: #f5f5f5;
    word-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: @main-color;
    padding:0px;
    margin:0px;
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
    border:hidden;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
  }
  a {
    color: @a-tag-color;
    text-decoration: none;
  }
  .lemonBounce{
    background-color: transparent;
    animation: lemonBounce 1s infinite;
    width: 164px;
    height: 150px;
    vertical-align: middle;
    margin: 0 10px 0 -10px;
    display: inline-block;
  }
  @keyframes lemonBounce{
    0%, 90% {
      animation-timing-function: linear;
    }
    10% {
      animation-timing-function: cubic-bezier(0,.4,.6,1);
      -webkit-transform: translate(0%,5%) scaleY(1.1);
      transform: translate(0%,5%) scaleY(1.1);
    }
    50% {
      animation-timing-function: cubic-bezier(.4,0,1,.6);
      -webkit-transform: translate(0%,-37%) scaleY(1.1);
      transform: translate(0%,-37%) scaleY(1.1);
    }
    0%, 100% {
      -webkit-transform: translate(0%,30%) scaleY(.5);
      transform: translate(0%,30%) scaleY(.5);
    }
    90% {
      -webkit-transform: translate(0%,5%) scaleY(1.1);
      transform: translate(0%,5%) scaleY(1.1);
    }
  }
  /*.loading {
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: hsla(120, 50%, 80%, .9);
    position: fixed;
    left: 0;
    top: 4.5em;
    line-height: 60em;
  }*/
  .emptyLi {
    display: none;
  }
</style>
