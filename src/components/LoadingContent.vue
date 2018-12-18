/* Facebook式流动遮罩实现方式二：
 * 通过svg的渐进式颜色转换，需要遮罩的部分先用各种图形画出来，然后进行颜色的渐进路径的编写。 */
<template>
  <div id="loadingContent">
    <svg viewBox="0 0 720 800" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect clip-path="url(#clipPath-26)" x="0" y="0" width="720" height="100%" style="fill: url('#gradient-26');"></rect>
      <defs>
        <clipPath id="clipPath-26">
          <rect x="300" y="32" width="130" height="30"></rect>
          <rect x="320" y="84" width="90" height="16"></rect>
          <rect x="0" y="120" width="80" height="30"></rect>
          <rect x="50" y="170" width="650" height="16"></rect>
          <rect x="20" y="198" width="680" height="16"></rect>
          <rect x="20" y="226" width="680" height="16"></rect>
          <rect x="20" y="254" width="280" height="16"></rect>
          <rect x="0" y="304" width="80" height="30"></rect>
          <rect x="50" y="356" width="650" height="16"></rect>
          <rect x="20" y="384" width="680" height="16"></rect>
          <rect x="20" y="412" width="680" height="16"></rect>
          <rect x="20" y="440" width="280" height="16"></rect>
          <rect x="20" y="468" rx="5" ry="5"  width="680" height="80"></rect>
          <rect x="0" y="582" width="80" height="30"></rect>
          <rect x="50" y="634" width="650" height="16"></rect>
          <rect x="20" y="662" width="680" height="16"></rect>
          <rect x="20" y="690" width="680" height="16"></rect>
          <rect x="20" y="718" width="280" height="16"></rect>
          <rect x="0" y="768" width="80" height="30"></rect>
          <rect x="50" y="820" width="650" height="16"></rect>
          <rect x="20" y="848" width="680" height="16"></rect>
          <rect x="20" y="976" width="680" height="16"></rect>
          <rect x="20" y="1004" width="280" height="16"></rect>
        </clipPath>
        <linearGradient id="gradient-26">
          <stop offset="-1.50049" stop-color="#f0f0f0">
            <animate attributeName="offset" values="-2; 1" dur="2s" repeatCount="indefinite"></animate>
          </stop>
          <stop offset="-1.00049" stop-color="#e0e0e0">
            <animate attributeName="offset" values="-1.5; 1.5" dur="2s" repeatCount="indefinite"></animate>
          </stop>
          <stop offset="-0.500492" stop-color="#f0f0f0">
            <animate attributeName="offset" values="-1; 2" dur="2s" repeatCount="indefinite"></animate>
          </stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'LoadingContent',
  data () {
    return {}
  }
}
</script>
<style scoped>
  #loadingContent {
    background: #fff;
    padding: 0;
    margin: 0 auto;
    max-width: 60em;
  }
</style>
