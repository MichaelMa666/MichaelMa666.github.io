<template>
  <div class="hello">
    <router-link to="/article">
      <img src="http://michaelma-assets.oss-cn-beijing.aliyuncs.com/common/logo.png">
      <h1>{{ title }}</h1>
      <p>{{ msg }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BlogIndex',
  data () {
    return {
      title: '☞ Michael Blog',
      msg: '图床迁移成功！暂时入驻阿里云OSS了。'
    }
  }
}
</script>
<style lang='less' scoped>
  .hello {
    padding-top: 6em;
  }
  p {
    color: mediumvioletred;
  }
</style>
