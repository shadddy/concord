<template>
  <div class=''></div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
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
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style lang='less' scoped>
body{
    width: 100%;
}
</style>