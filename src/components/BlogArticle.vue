<template>
  <div id="articleContent">
    <ul>
      <li class="articleItem" v-for="article in articles" v-bind:key="article.id" v-bind:todo="article" @click="toArticle(article)">
        <a class="articleTitle">{{ article.title }}</a>
      </li>
    </ul>
    <!-- <div v-if="loading" class='loading'>
      <img src="../assets/20180615/lemon.svg" class='lemonBounce'/>
        Loading.....
    </div> -->
    <loading-article v-if="loading">
    </loading-article>
  </div>
</template>
<script>
import { store } from '../store/store'
import axios from 'axios'
import LoadingArticle from './LoadingArticle.vue'

export default {
  store: store,
  name: 'BlogArticle',
  components: {
    'loading-article': LoadingArticle
  },
  data () {
    return {
      articles: [],
      loading: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getArticles()
    })
  },
  methods: {
    getArticles: function () {
      this.loading = true
      axios.get('https://api.github.com/repos/MichaelMa666/MichaelMa666.github.io/issues?labels=article', {header: {'Authorization': 'token ' + this.$store.state.accessToken}})
        .then((response) => {
          this.loading = false
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].labels.length > 0) {
              for (var j = 0; j < response.data[i].labels.length; j++) {
                this.articles.push(response.data[i])
              }
            } else {
              continue
            }
          }
        }, (error) => {
          console.log(error)
          this.$router.push({path: '/error403'})
          this.loading = false
        })
    },
    toArticle: function (obj) {
      this.$router.push({path: '/article/' + obj.number})
      this.$store.state.moduleArticle.num = obj.number
      this.$store.state.moduleArticle.content = obj.body
      this.$store.state.moduleArticle.title = obj.title
      this.$store.state.moduleArticle.updateTime = obj.updated_at
    }
  }
}
</script>
<style lang='less' scoped>
@import '../less/varables.less';
  ul{
    margin:0 auto;
  }
  .articleItem {
    display:flex;
    padding:0.7em 1em;
    margin-bottom:1em;
    background-color:#FFF;
    cursor:pointer;
    transition: all .15s ease-out;
    text-align: left;
  }
  .articleTitle {
    color: #333!important;
  }
</style>
