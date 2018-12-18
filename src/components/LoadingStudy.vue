/* Facebook式流动遮罩实现方式一：
 * 整块区域都是流动式的，然后通过修剪四周不需要显示的区域，以白色的div加以覆盖，以达到需要遮罩部分为银色流动式效果 */
<template>
  <div id="timeline-item">
    <div class="animated-background">

      <div class="background-masker article-title-top-thirteenth"></div>
      <div class="background-masker article-title-left-thirteenth"></div>
      <div class="background-masker article-title-right-thirteenth"></div>
      <div class="background-masker article-title-bottom-thirteenth"></div>
      <div class="background-masker article-title-margin-thirteenth"></div>

      <div class="background-masker article-title-top-twelfth"></div>
      <div class="background-masker article-title-left-twelfth"></div>
      <div class="background-masker article-title-right-twelfth"></div>
      <div class="background-masker article-title-bottom-twelfth"></div>
      <div class="background-masker article-title-margin-twelfth"></div>

      <div class="background-masker article-title-top-eleventh"></div>
      <div class="background-masker article-title-left-eleventh"></div>
      <div class="background-masker article-title-right-eleventh"></div>
      <div class="background-masker article-title-bottom-eleventh"></div>
      <div class="background-masker article-title-margin-eleventh"></div>

      <div class="background-masker article-title-top-tenth"></div>
      <div class="background-masker article-title-left-tenth"></div>
      <div class="background-masker article-title-right-tenth"></div>
      <div class="background-masker article-title-bottom-tenth"></div>
      <div class="background-masker article-title-margin-tenth"></div>

      <div class="background-masker article-title-top-ninth"></div>
      <div class="background-masker article-title-left-ninth"></div>
      <div class="background-masker article-title-right-ninth"></div>
      <div class="background-masker article-title-bottom-ninth"></div>
      <div class="background-masker article-title-margin-ninth"></div>

      <div class="background-masker article-title-top-eighth"></div>
      <div class="background-masker article-title-left-eighth"></div>
      <div class="background-masker article-title-right-eighth"></div>
      <div class="background-masker article-title-bottom-eighth"></div>
      <div class="background-masker article-title-margin-eighth"></div>

      <div class="background-masker article-title-top-seventh"></div>
      <div class="background-masker article-title-left-seventh"></div>
      <div class="background-masker article-title-right-seventh"></div>
      <div class="background-masker article-title-bottom-seventh"></div>
      <div class="background-masker article-title-margin-seventh"></div>

      <div class="background-masker article-title-top-sixth"></div>
      <div class="background-masker article-title-left-sixth"></div>
      <div class="background-masker article-title-right-sixth"></div>
      <div class="background-masker article-title-bottom-sixth"></div>
      <div class="background-masker article-title-margin-sixth"></div>

      <div class="background-masker article-title-top-fifth"></div>
      <div class="background-masker article-title-left-fifth"></div>
      <div class="background-masker article-title-right-fifth"></div>
      <div class="background-masker article-title-bottom-fifth"></div>
      <div class="background-masker article-title-margin-fifth"></div>

      <div class="background-masker article-title-top-fourth"></div>
      <div class="background-masker article-title-left-fourth"></div>
      <div class="background-masker article-title-right-fourth"></div>
      <div class="background-masker article-title-bottom-fourth"></div>
      <div class="background-masker article-title-margin-fourth"></div>

      <div class="background-masker article-title-top-third"></div>
      <div class="background-masker article-title-left-third"></div>
      <div class="background-masker article-title-right-third"></div>
      <div class="background-masker article-title-bottom-third"></div>
      <div class="background-masker article-title-margin-third"></div>

      <div class="background-masker article-title-top-second"></div>
      <div class="background-masker article-title-left-second"></div>
      <div class="background-masker article-title-right-second"></div>
      <div class="background-masker article-title-bottom-second"></div>
      <div class="background-masker article-title-margin-second"></div>

      <div class="background-masker article-title-top-first"></div>
      <div class="background-masker article-title-left-first"></div>
      <div class="background-masker article-title-right-first"></div>
      <div class="background-masker article-title-bottom-first"></div>
      <div class="background-masker article-title-margin-first"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoadingStudy',
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
    height: 828px;
    position: relative;
    list-style-type: none;
  }
  .background-masker {
    background: #fff;
    position: absolute;
  }
  /*first title*/
  .background-masker.article-title-top-twelfth {
    top: 0;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-left-twelfth {
    top: 0.7em ;
    left: 0;
    right: 59em;
    height: 2em;
  }
  .background-masker.article-title-right-twelfth {
    top: 0.7em;
    left: 3em;
    right: 0;
    height: 2em;
  }
  .background-masker.article-title-bottom-twelfth {
    top: 2.7em;
    left: 0;
    right: 0;
    height: 1em;
  }
  .background-masker.article-title-margin-twelfth {
    top: 3.4em;
    left: 0;
    right: 0;
    height: 1em;
    background-color: #f5f5f5;
  }
  /*second title*/
  .background-masker.article-title-top-eleventh {
    top: 4.4em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-left-eleventh {
    top: 5.1em;
    left: 0;
    right: 59em;
    height: 2em;
  }
  .background-masker.article-title-right-eleventh {
    top: 5.1em;
    left: 7em;
    right: 0;
    height: 2em;
  }
  .background-masker.article-title-bottom-eleventh {
    top: 7.1em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-margin-eleventh {
    top: 7.8em;
    left: 0;
    right: 0;
    height: 1em;
    background-color: #f5f5f5;
  }

  .background-masker.article-title-top-tenth {
    top: 8.8em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  /*tenth title*/
  .background-masker.article-title-left-tenth {
    top: 9.5em;
    left: 0;
    right: 59em;
    height: 2em;
  }
  .background-masker.article-title-right-tenth {
    top: 9.5em;
    left: 9em;
    right: 0;
    height: 2em;
  }
  .background-masker.article-title-bottom-tenth {
    top: 11.5em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-margin-tenth {
    top: 12.2em;
    left: 0;
    right: 0;
    height: 1em;
    background-color: #f5f5f5;
  }
  /*fourth title*/
  .background-masker.article-title-top-ninth {
    top: 13.2em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-left-ninth {
    top: 13.9em;
    left: 0;
    right: 59em;
    height: 2em;
  }
  .background-masker.article-title-right-ninth {
    top: 13.9em;
    left: 3em;
    right: 0;
    height: 2em;
  }
  .background-masker.article-title-bottom-ninth {
    top: 15.9em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-margin-ninth {
    top: 16.6em;
    left: 0;
    right: 0;
    height: 1em;
    background-color: #f5f5f5;
  }
  /*fifth title*/
  .background-masker.article-title-top-eighth {
    top: 17.6em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-left-eighth {
    top: 18.3em;
    left: 0;
    right: 59em;
    height: 2em;
  }
  .background-masker.article-title-right-eighth {
    top: 18.3em;
    left: 3em;
    right: 0;
    height: 2em;
  }
  .background-masker.article-title-bottom-eighth {
    top: 20.3em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-margin-eighth {
    top: 21em;
    left: 0;
    right: 0;
    height: 1em;
    background-color: #f5f5f5;
  }
  /*sixth title*/
  .background-masker.article-title-top-seventh {
    top: 22em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-left-seventh {
    top: 22.7em;
    left: 0;
    right: 59em;
    height: 2em;
  }
  .background-masker.article-title-right-seventh {
    top: 22.7em;
    left: 3em;
    right: 0;
    height: 2em;
  }
  .background-masker.article-title-bottom-seventh {
    top: 24.7em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-margin-seventh {
    top: 25.4em;
    left: 0;
    right: 0;
    height: 1em;
    background-color: #f5f5f5;
  }
  /*seventh title*/
  .background-masker.article-title-top-sixth {
    top: 26.4em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-left-sixth {
    top: 27.1em;
    left: 0;
    right: 59em;
    height: 2em;
  }
  .background-masker.article-title-right-sixth {
    top: 27.1em;
    left: 5em;
    right: 0;
    height: 2em;
  }
  .background-masker.article-title-bottom-sixth {
    top: 29.1em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-margin-sixth {
    top: 29.8em;
    left: 0;
    right: 0;
    height: 1em;
    background-color: #f5f5f5;
  }
  /*eighth title*/
  .background-masker.article-title-top-fifth {
    top: 30.8em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-left-fifth {
    top: 31.5em;
    left: 0;
    right: 59em;
    height: 2em;
  }
  .background-masker.article-title-right-fifth {
    top: 31.5em;
    left: 6em;
    right: 0;
    height: 2em;
  }
  .background-masker.article-title-bottom-fifth {
    top: 33.5em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-margin-fifth {
    top: 34.2em;
    left: 0;
    right: 0;
    height: 1em;
    background-color: #f5f5f5;
  }
  /*fourth title*/
  .background-masker.article-title-top-fourth {
    top: 35.2em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-left-fourth {
    top: 35.9em;
    left: 0;
    right: 59em;
    height: 2em;
  }
  .background-masker.article-title-right-fourth {
    top: 35.9em;
    left: 7em;
    right: 0;
    height: 2em;
  }
  .background-masker.article-title-bottom-fourth {
    top: 37.9em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-margin-fourth {
    top: 38.6em;
    left: 0;
    right: 0;
    height: 1em;
    background-color: #f5f5f5;
  }
  /*third title*/
  .background-masker.article-title-top-third {
    top: 39.6em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-left-third {
    top: 40.3em;
    left: 0;
    right: 59em;
    height: 2em;
  }
  .background-masker.article-title-right-third {
    top: 40.3em;
    left: 3em;
    right: 0;
    height: 2em;
  }
  .background-masker.article-title-bottom-third {
    top: 42.3em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-margin-third {
    top: 43em;
    left: 0;
    right: 0;
    height: 1em;
    background-color: #f5f5f5;
  }
  /*second title*/
  .background-masker.article-title-top-second {
    top: 44em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-left-second {
    top: 44.7em;
    left: 0;
    right: 59em;
    height: 2em;
  }
  .background-masker.article-title-right-second {
    top: 44.7em;
    left: 5em;
    right: 0;
    height: 2em;
  }
  .background-masker.article-title-bottom-second {
    top: 46.7em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-margin-second {
    top: 47.4em;
    left: 0;
    right: 0;
    height: 1em;
    background-color: #f5f5f5;
  }
  /*twelfth title*/
  .background-masker.article-title-top-first {
    top: 48.4em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-left-first {
    top: 49.1em;
    left: 0;
    right: 59em;
    height: 2em;
  }
  .background-masker.article-title-right-first {
    top: 49.1em;
    left: 10em;
    right: 0;
    height: 2em;
  }
  .background-masker.article-title-bottom-first {
    top: 51.1em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-margin-first {
    top: 51.8em;
    left: 0;
    right: 0;
    height: 1em;
    background-color: #f5f5f5;
  }
  /*thirteenth title*/
  .background-masker.article-title-top-thirteenth {
    top: 52.8em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-left-thirteenth {
    top: 53.5em;
    left: 0;
    right: 59em;
    height: 2em;
  }
  .background-masker.article-title-right-thirteenth {
    top: 53.5em;
    left: 3em;
    right: 0;
    height: 2em;
  }
  .background-masker.article-title-bottom-thirteenth {
    top: 55.5em;
    left: 0;
    right: 0;
    height: 0.7em;
  }
  .background-masker.article-title-margin-thirteenth {
    top: 56.2em;
    left: 0;
    right: 0;
    height: 1em;
    background-color: #f5f5f5;
  }
</style>
