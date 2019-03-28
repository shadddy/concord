<template>
  <div class="privacy">
    <my-head></my-head>
    <div class="inner-banner"></div>
    <div class="content">
        <h1>{{$t('privacy.name')}}</h1>
        <p>{{$t('privacy.text')}}</p>
        <h3>{{$t('privacy.title1')}}</h3>
        <p v-for="(item,index) in $t('privacy.list1')" :key="index">
          {{item}}
        </p>
        <h3>{{$t('privacy.title2')}}</h3>
        <p v-for="(item,index) in $t('privacy.list2')" :key="index">
          {{item}}
        </p>
        <h3>{{$t('privacy.title3')}}</h3>
        <p v-for="(item,index) in $t('privacy.list3')" :key="index">
          {{item}}
        </p>
        <h3>{{$t('privacy.title4')}}</h3>
        <p>{{$t('privacy.list4.text')}}</p>
        <div v-for="(item,index) in $t('privacy.list4.list')" :key="index" class="div">
          <h3>{{item.name}}</h3>
          <p>{{item.text}}</p>
        </div>
        <h3>{{$t('privacy.title5')}}</h3>
        <p v-for="(item,index) in $t('privacy.list5')" :key="index">
          {{item}}
        </p>
        <h3>{{$t('privacy.title6')}}</h3>
        <p v-for="(item,index) in $t('privacy.list6')" :key="index">
          {{item}}
        </p>
        <h3>{{$t('privacy.title7')}}</h3>
        <p v-for="(item,index) in $t('privacy.list7')" :key="index">
          {{item}}
        </p>
        <h3>{{$t('privacy.title8')}}</h3>
        <p v-for="(item,index) in $t('privacy.list8')" :key="index">
          {{item}}
        </p>
        <h3>{{$t('privacy.title9')}}</h3>
        <p v-for="(item,index) in $t('privacy.list9')" :key="index">
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
.privacy {
  overflow: hidden;
  .inner-banner {
    background-position: 0 -49.5rem;
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
    .div{
      h3{
        color: #808080;
        &::before{
            content: "";
            background: #cccccc;
            display: block;
               width: 0.08rem;
               height: 0.08rem;
               position: absolute;
               top: 0.09rem;
               border-radius: 50%;
               left: 0;
        }
      }
      p{
        color:#b2b2b2;
        padding-left: 0.3rem; 
      }
    }
  }
}
</style>