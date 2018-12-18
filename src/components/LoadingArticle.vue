/* Facebook式流动遮罩实现方式一（麻烦死了，有个自动生成工具就好了）：
 * 整块区域都是流动式的，然后通过修剪四周不需要显示的区域，以白色的div加以覆盖，以达到需要遮罩部分为银色流动式效果 */
<template>
  <div id="timeline-item">
    <div class="animated-background">
      <div class="background-masker article-title-top-first"></div>
      <div class="background-masker article-title-left-first"></div>
      <div class="background-masker article-title-right-first"></div>
      <div class="background-masker article-title-bottom-first"></div>
      <div class="background-masker article-title-margin-first"></div>

      <div class="background-masker article-title-top-second"></div>
      <div class="background-masker article-title-left-second"></div>
      <div class="background-masker article-title-right-second"></div>
      <div class="background-masker article-title-bottom-second"></div>
      <div class="background-masker article-title-margin-second"></div>

      <div class="background-masker article-title-top-third"></div>
      <div class="background-masker article-title-left-third"></div>
      <div class="background-masker article-title-right-third"></div>
      <div class="background-masker article-title-bottom-third"></div>
      <div class="background-masker article-title-margin-third"></div>

      <div class="background-masker article-title-top-fourth"></div>
      <div class="background-masker article-title-left-fourth"></div>
      <div class="background-masker article-title-right-fourth"></div>
      <div class="background-masker article-title-bottom-fourth"></div>
      <div class="background-masker article-title-margin-fourth"></div>

      <div class="background-masker article-title-top-fifth"></div>
      <div class="background-masker article-title-left-fifth"></div>
      <div class="background-masker article-title-right-fifth"></div>
      <div class="background-masker article-title-bottom-fifth"></div>
      <div class="background-masker article-title-margin-fifth"></div>

      <div class="background-masker article-title-top-sixth"></div>
      <div class="background-masker article-title-left-sixth"></div>
      <div class="background-masker article-title-right-sixth"></div>
      <div class="background-masker article-title-bottom-sixth"></div>
      <div class="background-masker article-title-margin-sixth"></div>
      <!-- 每增加一行 .animated-background的高度就增加60px-->
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoadingArticle',
  data () {
    return {}
  }
}
</script>
<style scoped>
  #timeline-item {
    background: #fff;
    padding: 0;
    margin: 0 auto;
    max-width: 60em;
  }
  @keyframes placeHolderShimmer{
    0%{
      background-position: -30em 0
    }
    100%{
      background-position: 30em 0
    }
  }

  .animated-background {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 60em 104px;
    height: 406px;
    position: relative;
    list-style-type: none;
  }
  .background-masker {
    background: #fff;
    position: absolute;
  }
  /*first title*/
  .background-masker.article-title-top-first {
    top: 0;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-left-first {
    top: 0.7em ;
    left: 0;
    right: 59em;
    height: 2em;
  }
  .background-masker.article-title-right-first {
    top: 0.7em;
    left: 10em;
    right: 0;
    height: 2em;
  }
  .background-masker.article-title-bottom-first {
    top: 2.7em;
    left: 0;
    right: 0;
    height: 1em;
  }
  .background-masker.article-title-margin-first {
    top: 3.4em;
    left: 0;
    right: 0;
    height: 1em;
    background-color: #f5f5f5;
  }
  /*second title*/
  .background-masker.article-title-top-second {
    top: 4.4em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-left-second {
    top: 5.1em;
    left: 0;
    right: 59em;
    height: 2em;
  }
  .background-masker.article-title-right-second {
    top: 5.1em;
    left: 12em;
    right: 0;
    height: 2em;
  }
  .background-masker.article-title-bottom-second {
    top: 7.1em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-margin-second {
    top: 7.8em;
    left: 0;
    right: 0;
    height: 1em;
    background-color: #f5f5f5;
  }
  /*third title*/
  .background-masker.article-title-top-third {
    top: 8.8em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-left-third {
    top: 9.5em;
    left: 0;
    right: 59em;
    height: 2em;
  }
  .background-masker.article-title-right-third {
    top: 9.5em;
    left: 9em;
    right: 0;
    height: 2em;
  }
  .background-masker.article-title-bottom-third {
    top: 11.5em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-margin-third {
    top: 12.2em;
    left: 0;
    right: 0;
    height: 1em;
    background-color: #f5f5f5;
  }
  /*fourth title*/
  .background-masker.article-title-top-fourth {
    top: 13.2em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-left-fourth {
    top: 13.9em;
    left: 0;
    right: 59em;
    height: 2em;
  }
  .background-masker.article-title-right-fourth {
    top: 13.9em;
    left: 11em;
    right: 0;
    height: 2em;
  }
  .background-masker.article-title-bottom-fourth {
    top: 15.9em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-margin-fourth {
    top: 16.6em;
    left: 0;
    right: 0;
    height: 1em;
    background-color: #f5f5f5;
  }
  /*fifth title*/
  .background-masker.article-title-top-fifth {
    top: 17.6em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-left-fifth {
    top: 18.3em;
    left: 0;
    right: 59em;
    height: 2em;
  }
  .background-masker.article-title-right-fifth {
    top: 18.3em;
    left: 22em;
    right: 0;
    height: 2em;
  }
  .background-masker.article-title-bottom-fifth {
    top: 20.3em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-margin-fifth {
    top: 21.1em;
    left: 0;
    right: 0;
    height: 1em;
    background-color: #f5f5f5;
  }
   /*sixth title*/
  .background-masker.article-title-top-sixth {
    top: 22em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-left-sixth {
    top: 22.7em;
    left: 0;
    right: 59em;
    height: 2em;
  }
  .background-masker.article-title-right-sixth {
    top: 22.7em;
    left: 30em;
    right: 0;
    height: 2em;
  }
  .background-masker.article-title-bottom-sixth {
    top: 24.7em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-margin-sixth {
    top: 25.6em;
    left: 0;
    right: 0;
    height: 1em;
    background-color: #f5f5f5;
  }
</style>
