<template>
  <div class="tpat">
    <my-head></my-head>
    <div class="inner-banner"></div>
    <div class="content">
      <h1>{{$t('ctpat.name')}}</h1>
      <p class="title">{{$t('ctpat.title')}}</p>
      <p class="num">{{$t('ctpat.sviNum.name')}}:{{$t('ctpat.sviNum.num')}}</p>
      <img src="../assets/img/ctpat.jpg" alt>
      <div class="line"></div>
      <p class="gray">{{$t('ctpat.title2')}}</p>
      <p v-for="(item,index) in $t('ctpat.list1')" :key="index" class="item">
        {{item}}
      </p>
      <p class="gray">{{$t('ctpat.title3')}}</p>
      <p v-for="(item,index) in $t('ctpat.list2')" :key="index+'aa'" class="item">
        {{item}}
      </p>
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
.tpat {
  overflow: hidden;
  .inner-banner {
    background-position: 0 -31.5rem;
    transition: 0.3s;
  }
  .footer {
    position: relative;
    padding-top: 0.01rem;
  }
  .content {
    width: 12.8rem;
    margin: 0 auto;
    padding-bottom: 2rem;
    h1 {
      color: #333;
      font-family: "biminbold";
      font-size: 0.42rem;
      text-align: center;
      position: relative;
      margin-bottom: 0.6rem;
      &::after {
        content: "";
        background: #2a6ec1;
        width: 2rem;
        height: 0.06rem;
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -0.05rem;
      }
    }
    img {
      width: 4.78rem;
      height: 2.1rem;
      display: block;
      margin: 0 auto;
    }
    .line {
      background-image: url("../assets/img/service/icon.png");
      background-size: 11.4rem 10rem;
      width: 10.96rem;
      height: 0.02rem;
      background-position: 0 -4.89rem;
      margin: 0.4rem auto 0.5rem auto;
    }
    p{
      font-size: 0.2rem;
      color: #4c4c4c;
      line-height: 2;
    }
    .title{
      text-align: center;
      color:#333333;
    }
    .num{
      text-align: center;
      color: #333333;
      font-size: 0.24rem;
      font-family: 'biminbold';
    }
    .gray{
      color: #808080;
      margin-bottom: 0.3rem;
    }
    .item{
      position: relative;
      padding-left: 0.32rem;
      margin-bottom: 0.3rem;
      line-height: 1.5;
      font-weight: bold;
      &::before{
            content: "";
            background: #2a6ec1;
            display: block;
            width: 0.1rem;
            height: 0.1rem;
            position: absolute;
            top: 0.08rem;
            border-radius: 50%;
            left: 0;
        }
    }
  }
}
</style>