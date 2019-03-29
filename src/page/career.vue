<template>
  <div class="career">
    <my-head></my-head>
    <div class="inner-banner"></div>
    <div class="content">
      <h1>{{$t('career.title')}}</h1>
      <p
        v-for="(item,index) in $t('career.list')"
        :key="index"
      >
        {{item}}
      </p>
      <div class="line"></div>
      
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
.career {
  .inner-banner {
    background-position: 0 -45rem;
    transition: 0.3s;
  }
  .footer {
    position: relative;
    padding-top: 0.01rem;
  }
  .content {
    width: 12.82rem;
    margin: 0 auto;
    padding-bottom: 2.3rem;
    h1 {
      margin-top: 0.4rem;
      color: #333;
      font-family: "biminbold";
      font-size: 0.42rem;
      text-align: center;
      position: relative;
      color: #4c4c4c;
      margin-bottom: 0.6rem;
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
      letter-spacing: 0.01rem;
      line-height: 0.35rem;
      color: #808080;
      margin-bottom: 0.3rem;
    }
    .line {
      background-image: url("../assets/img/service/icon.png");
      background-size: 11.4rem 10rem;
      width: 10.96rem;
      height: 0.02rem;
      background-position: 0 -4.89rem;
      margin: 0.8rem auto 0 auto;
    }
  }
}
</style>