<template>
  <div id="leftNav">
    <router-link to="/gallary"><i></i>{{ gallary }}</router-link>
    <router-link to="/article"><i></i>{{ article }}</router-link>
    <router-link to="/about"><i></i>{{ about }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'BlogLeftNav',
  data () {
    return {
      article: 'Article',
      gallary: 'Gallary',
      about: 'About Me'
    }
  }
}
</script>
<style lang='less' scoped>
@import '../less/varables.less';
  a{
    line-height:2.5;
  }
  a i{
    width:1.2em;
    cursor:pointer;
  }
  #leftNav{
    width: 10em;
    position:fixed;
    background-color: blue;
  }
</style>
