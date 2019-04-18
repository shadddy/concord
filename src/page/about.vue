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
import myHead from "@/components/header";
import myFoot from "@/components/footer";
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
.about {
  overflow: hidden;
  width: 100%;
  position: relative;
  height: auto;
  .footer {
    position: relative;
    padding-top: 0.01rem;
  }
}
.inner-banner {
  background-position: 0 0;
}
.content {
  position: relative;
  width: 12.82rem;
  height: auto;
  margin: 0 auto;
  padding: 0.7rem 0.25rem 2rem 0.25rem;
  h1 {
    font-size: 0.42rem;
    color: #4c4c4c;
    font-family: "biminbold";
    text-align: center;
    position: relative;
    margin-bottom: 0.3rem;
    &::after {
      content: "";
      background: #2a6ec1;
      width: 1.1rem;
      height: 0.06rem;
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -0.05rem;
    }
  }
  p {
    font-size: 0.2rem;
    margin-bottom: 0.3rem;
    font-family: 'Helvetica';
    letter-spacing: 1px;
    word-break: break-all;
    line-height: 0.4rem;
  }
  @media (min-device-width: 375px) and (max-device-width: 812px){
    h1{
      font-size: 1rem;
    }
    p{
      font-size: 0.4rem;
      line-height: 0.6rem;
    }
  }
}
</style>