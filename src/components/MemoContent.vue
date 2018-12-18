<template>
  <div>
    <article id="content" class="memoContent" v-html="rawHtml">
    </article>
    <!-- <div v-if="loading" class='loading'>
      <img src="http://pajq26wtn.bkt.clouddn.com/lemon.svg" class='lemonBounce'/>
        Loading.....
    </div> -->
    <loading-content v-if="loading"></loading-content>
  </div>
</template>
<script>
import marked from 'marked'
import hljs from 'highlight.js'
import '../css/custom.css'
import { store } from '../store/store'
import axios from 'axios'
import loadingContent from './LoadingContent.vue'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code, true).value
    } else {
      return hljs.highlightAuto(code).value
    }
  }
})

export default {
  store: store,
  name: 'MemoContent',
  components: {
    'loading-content': loadingContent
  },
  data () {
    return {
      rawHtml: '',
      loading: true,
      showImgLayer: false,
      hidden: false,
      zoomIn: false,
      zoomOut: true
    }
  },
  activated () {
    this.$nextTick(() => {
      this.showMemo()
    })
  },
  methods: {
    showMemo: function () {
      let content = this.$store.state.moduleMemo.content
      let title = this.$store.state.moduleMemo.title
      let updateTime = this.$store.state.moduleMemo.updateTime.split('T')[0]
      let num = parseInt(this.$route.path.split('/')[2])
      if (content !== '') {
        if (content.substr(0, 2) === '![') {
          content = content.split('$\r\n')[1]
        }
        this.rawHtml = '<hr></hr><h1>' + title + '</h1>' + '<div class="memoMeta"><span>' + updateTime + '</span></div>' + marked(content || '', {sanitize: true})
        this.loading = false
      } else {
        console.log(num)
        axios.get('https://api.github.com/repos/MichaelMa666/MichaelMa666.github.io/issues/' + num, {headers: {'Authorization': 'token ' + this.$store.state.accessToken}})
          .then((response) => {
            this.loading = false
            content = response.data.body.split('<!--summary-->')[2]
            title = response.data.title
            updateTime = response.data.updated_at.split('T')[0]
            this.rawHtml = '<hr></hr><h1>' + title + '</h1>' + '<div class="memoMeta"><span>' + updateTime + '</span></div>' + marked(content || '', {sanitize: true})
          }, (error) => {
            console.log(error)
            this.$router.push({path: '/error403'})
            this.loading = false
          })
      }
    }
  }
}
</script>
<style lang='less' scoped>
@import '../less/varables.less';
  #content {
    background-color: #fff;
    padding: 0 2em 1em;
    text-align: left;
  }
</style>
