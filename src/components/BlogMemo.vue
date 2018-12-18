<template>
  <div id="memoContent" class="memoBg">
    <ul>
      <li class="memoItem" v-for="memo in memos" v-bind:key="memo.id" v-bind:todo="memo">
        <div class="timeLine">
          <span class="dot"></span>
          <div class="itemWrapper" @click="toMemo(memo)">
            <div class="timeArea">
              <a class="memoTime">{{ memo.created_at.split('T')[0] }}</a>
            </div>
            <div class="outlineArea">
              <p class="memoTitle">{{ memo.title }}</p>
              <p class="memoSummary">{{ memo.summary }}</p>
            </div>
            <img class="thumbnail" :src="memo.thumbnail_url">
          </div>
        </div>
      </li>
    </ul>
    <!-- <div v-if="loading" class='loading'>
      <img src="../assets/20180615/lemon.svg" class='lemonBounce'/>
        Loading.....
    </div> -->
    <loading-memo v-if="loading">
    </loading-memo>
  </div>
</template>
<script>
import { store } from '../store/store'
import axios from 'axios'
import LoadingMemo from './LoadingMemo.vue'

export default {
  store: store,
  name: 'BlogMemo',
  components: {
    'loading-memo': LoadingMemo
  },
  data () {
    return {
      memos: [],
      items: [
      ],
      loading: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getMemos()
    })
  },
  methods: {
    getMemos: function () {
      this.loading = true
      axios.get('https://api.github.com/repos/MichaelMa666/MichaelMa666.github.io/issues?labels=memo', {headers: {'Authorization': 'token ' + this.$store.state.accessToken}})
        .then((response) => {
          this.loading = false
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].labels.length > 0) {
              for (var j = 0; j < response.data[i].labels.length; j++) {
                /* 先匹配<!--thumbnail-->thumbnail markdown url<!--thumbnail-->中间的url，再处理markdown格式的url */
                response.data[i]['thumbnail_url'] = response.data[i].body.match(/<!--thumbnail-->\r\n(.*)\r\n<!--thumbnail-->/)[1].match(/\((.*)\)/)[1]
                response.data[i]['summary'] = response.data[i].body.match(/<!--summary-->\r\n(.*)\r\n<!--summary-->/)[1]
                this.memos.push(response.data[i])
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
    toMemo: function (obj) {
      this.$router.push({path: '/memo/' + obj.number})
      this.$store.state.moduleMemo.num = obj.number
      this.$store.state.moduleMemo.content = obj.body.split('<!--summary-->\r\n')[2]
      this.$store.state.moduleMemo.title = obj.title
      this.$store.state.moduleMemo.updateTime = obj.updated_at
    }
  }
}
</script>
<style lang='less' scoped>
@import '../less/varables.less';
  .memoBg {
    /*background-image: url(/static/img/memobg.be2afa0.png);*/
  }
  ul{
    margin:0 auto;
  }
  .memoItem {
    margin:0;
    display:flex;
    padding:0 2em;
    background-color: #fff;
    transition: all .15s ease-out;
    text-align: left;
  }
  .memoItem .timeLine {
    border-left: 2px solid @theme-color;
    padding: 1em 2em;
    width: 100%;
    position: relative;
  }
  .memoItem .dot {
    background: @theme-color;
    border-radius: 50%;
    display: block;
    height: 22px;
    left: -12px;
    position: absolute;
    top: 12%;
    width: 22px;
  }
  .memoTitle {
    color: #333;
    font-size: 20px;
    font-weight: bold;
  }
  .memoItem .itemWrapper:after {
    content: " ";
    position: absolute;
    top: 12%;
    left: 8px;
    margin-left: 4px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent #f5f5f5 transparent transparent;
  }
  .memoItem .itemWrapper {
    cursor:pointer;
    border-radius: 5px;
    width: 97%;
    background-color: #f5f5f5;
    padding: 10px 20px;
    border-bottom: 8px solid @theme-color;
  }
  .thumbnail{
    width: 20%;
    height: 200px;
    border-radius: 6px;
    border:2px solid @theme-color;
  }
  .timeArea{
  }
  .memoTime{
    color: @theme-color;
    font-size: 26px;
    font-weight: bold;
  }
  .outlineArea{
    display: inline-block;
    width: 75%;
    vertical-align: top;
  }
</style>
