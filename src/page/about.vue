<template>
  <div class="about">
      <my-head></my-head>
      <div class="inner-banner"></div>
      <div class="content">
        <h1>{{$t('about.title1')}}</h1>
        <p>{{$t('about.text1')}}</p>
        <h1>{{$t('about.title2')}}</h1>
        <p>{{$t('about.text2[0]')}}</p>
        <p>{{$t('about.text2[1]')}}</p>
      </div>
      <my-foot></my-foot>
  </div>
</template>

<script>
import myHead from '@/components/header'
import myFoot from '@/components/footer'
export default {
  components: {
    myHead,
    myFoot
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang='less' scoped>
.inner-banner{
  background-position: 0 0;
}
.content{
  width: 12.82rem;
  margin: 0 auto;
  h1{
    font-size: 0.42rem;
    color:#4c4c4c;
    font-family: 'biminbold';
    text-align: center;
  }
}
</style>