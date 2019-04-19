<template>
  <div class="faq">
    <my-head></my-head>
    <div class="inner-banner"></div>
    <div class="content">
      <h1>{{$t('faq.name')}}</h1>
      <p v-for="(item,index) in $t('faq.list1')" :key="index">
          {{item}}
      </p>
      <h3>{{$t('faq.title1')}}</h3>
       <p v-for="(item,index) in $t('faq.list2')" :key="index">
          {{item}}
      </p>
      <h3>{{$t('faq.title2')}}</h3>
      <p v-for="(item,index) in $t('faq.list3')" :key="index">
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
.faq {
  overflow: hidden;
  .inner-banner {
    background-position: 0 -54rem;
    transition: 0.3s;
  }
  .footer {
    position: relative;
    padding-top: 0.01rem;
  }
  .content {
    width: 12.82rem;
    margin: 0 auto;
    padding-bottom: 1.7rem;
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
    p{
        font-size: 0.2rem;
        letter-spacing: 0.01rem;
        line-height: 0.35rem;
        color: #808080;
        margin-bottom: 0.3rem;
    }
    h3{
        color: #4c4c4c;
        font-size: 0.2rem;
        margin-bottom: 0.3rem;
        padding-left: 0.3rem; 
        position: relative;
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
@media (min-device-width: 375px) and (max-device-width: 812px){
  .faq{
    .content{
      h1{
        font-size: 0.8rem;
         &::after{
           width: 2rem
         }
      }
      p{
        font-size: 0.4rem;
        line-height: 0.6rem;
      }
    }
  }
}
</style>