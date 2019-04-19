<template>
  <div class="newsDetail">
    <my-head></my-head>
    <div class="inner-banner" :class="$route.params.page==1?'first':'second'"></div>
    <div class="content" v-show="$route.params.page==1">
      <h1>{{$t('news[0].title')}}</h1>
      <p v-for="(item,index) in $t('news[0].list')" :key="index">{{item}}</p>
    </div>
    <div class="content" v-show="$route.params.page==2">
      <h1>{{$t('news[1].title')}}</h1>
      <p v-for="(item,index) in $t('news[1].list')" :key="index">{{item}}</p>
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
.newsDetail {
  overflow: hidden;
  .footer {
    position: relative;
    padding-top: 0.01rem;
  }
  .first {
    background-position: 0 -40.5rem;
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  .second {
    background-position: 0 -36rem;
  }
  .content {
    width: 12.82rem;
    margin: 0 auto;
    padding-bottom: 2rem;
    h1 {
      width: 9.4rem;
      text-align: center;
      font-size: 0.42rem;
      margin: 0.6rem auto;
      font-family: "biminbold";
      color: #4c4c4c;
      line-height: 1.2;
      position: relative;
      &::after {
        content: "";
        background: #2a6ec1;
        width: 1.1rem;
        height: 0.06rem;
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -0.2rem;
      }
    }
    p {
      font-size: 0.2rem;
      color: #808080;
      margin-bottom: 0.2rem;
      line-height: 1.8;
      letter-spacing: 1px;
    }
  }
}
@media (min-device-width: 375px) and (max-device-width: 812px){
  .newsDetail{
    .content{
      h1{
        font-size: 0.6rem;
        &::after{
          width: 2rem
        }
      }
      p{
        font-size: 0.4rem;
      }

    }
  }
}
</style>