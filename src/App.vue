<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    var deviceWidth;
    setHtmlFontSize();
    if (window.addEventListener) {
      window.addEventListener(
        "resize",
        function() {
          setHtmlFontSize();
        },
        false
      );
    }
    function setHtmlFontSize() {
      // 1920是设计稿的宽度，当大于1920时采用1920宽度，比例也是除以19.2
      deviceWidth =
        document.documentElement.clientWidth > 1920
          ? 1920
          : document.documentElement.clientWidth;
      document.getElementsByTagName("html")[0].style.cssText =
        "font-size:" + deviceWidth / 19.2 + "px !important";
    }
  }
}
</script>

<style lang='less'>
body,html{
  width: 100%;
  position: relative;
  margin: 0px;
  padding: 0px;
}
</style>
