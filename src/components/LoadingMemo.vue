/* Facebook式流动遮罩实现方式二：
 * 通过svg的渐进式颜色转换，需要遮罩的部分先用各种图形画出来，然后进行颜色的渐进路径的编写。 */
<template>
  <div id="loadingMemo">
    <svg viewBox="0 0 720 700" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect clip-path="url(#clipPath-26)" x="0" y="0" width="720" height="100%" style="fill: url('#gradient-26');"></rect>
      <defs>
        <clipPath id="clipPath-26">
          <!-- 内容全部覆盖 -->
          <!-- <rect x="50" y="14" width="635" height="220"></rect> -->
          <!-- 内容分开覆盖 -->
          <circle cx="25" cy="38" r="9"/>
          <rect x="65" y="32" width="120" height="30"></rect>
          <rect x="65" y="80" width="100" height="24"></rect>
          <rect x="65" y="120" width="445" height="90"></rect>
          <rect x="520" y="60" width="125" height="150"></rect>
          <!-- 第二部分，高度相差250px -->
          <circle cx="25" cy="278" r="9"/>
          <rect x="65" y="272" width="120" height="30"></rect>
          <rect x="65" y="320" width="100" height="24"></rect>
          <rect x="65" y="360" width="445" height="90"></rect>
          <rect x="520" y="300" width="125" height="150"></rect>

          <circle cx="25" cy="528" r="9"/>
          <rect x="65" y="522" width="120" height="30"></rect>
          <rect x="65" y="570" width="100" height="24"></rect>
          <rect x="65" y="610" width="445" height="90"></rect>
          <rect x="520" y="550" width="125" height="150"></rect>
          <!-- 时间轴 -->
          <rect x="24" y="0" width="2" height="700"></rect>
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
  name: 'LoadingMemo',
  data () {
    return {}
  }
}
</script>
<style scoped>
  #loadingMemo {
    background: #fff;
    padding: 0;
    margin: 0 auto;
    max-width: 60em;
  }
</style>
