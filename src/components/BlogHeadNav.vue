<template>
  <div id="headNav">
    <ul class='headMenu'>
      <li>
        <router-link to="/article"><i></i>{{ article }}</router-link>
      </li>
      <li>
        <router-link to="/study"><i></i>{{ study }}</router-link>
      </li>
      <li>
        <router-link to="/gallary"><i></i>{{ gallary }}</router-link>
      </li>
      <li>
        <router-link to="/memo"><i></i>{{ memo }}</router-link>
      </li>
      <li>
        <router-link to="/about"><i></i>{{ about }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BlogHeadNav',
  data () {
    return {
      article: 'Article',
      study: 'Study Note',
      gallary: 'Gallary',
      memo: 'Memo',
      about: 'About'
    }
  }
}
</script>
<style lang='less' scoped>
@import '../less/varables.less';
  a{
    line-height: 1;
  }
  a i{
    width:1.2em;
    cursor:pointer;
  }
  .headMenu {
    margin:0;
    text-align: left;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  @media screen and (min-device-width:1024px){
    #headNav{
      position:fixed;
      width: auto;
    }
  }
  @media screen and (max-device-width:1024px){
    #headNav{
      position:fixed;
      width: 100vw;
    }
  }
  .headMenu li {
    position: relative;
    padding: 1.3em 0.5em;
    margin: 0;
  }
  @media screen and (max-device-width: 360px) {
    .headMenu li {
      padding: 1.7em 0.3em;
    }
  }
  @media screen and (min-device-width: 767px) {
    .headMenu li {
      padding: 1.3em 2em;
    }
  }
  .headMenu li::before {
    content: '/';
    color: #42b983;
    position: absolute;
    left: 0;
  }
  .headMenu li:first-child:before {
    display: none;
  }
</style>
