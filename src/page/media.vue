<template>
  <div class="media">
    <my-head></my-head>
    <div class="inner-banner"></div>
    <div class="content">
      <ul>
        <li @click="routerTo(1)">
            <img src="../assets/img/news.jpg" alt="">
            <div>
              <h1>{{$t('media.title1')}}</h1>
              <p>{{$t('media.text1')}}</p>
            </div>
        </li>
        <div class="line"></div>
        <li @click="routerTo(2)">
          <h1>{{$t('media.title2')}}</h1>
          <p>{{$t('media.text2')}}</p>
        </li>
      </ul>
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
  methods: {
    routerTo(val){
      this.$router.push({name:"newsDetail",params:{
        page:val
      }})
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang='less' scoped>
.media {
  overflow: hidden;
  .inner-banner {
    background-position: 0 -36rem;
    transition: 0.3s;
  }
  .footer {
    position: relative;
    padding-top: 0.01rem;
  }
  .content{
    width: 12.82rem;
    margin: 0 auto;
    padding:0.7rem 0 2rem 0;
    ul{
      width: 100%;
      .line {
      background-image: url("../assets/img/service/icon.png");
      background-size: 11.4rem 10rem;
      width: 10.96rem;
      height: 0.02rem;
      background-position: 0 -4.89rem;
      margin: 0.5rem auto;
    }
      li{
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        width: 100%;
        cursor: pointer;
        img{
          width: 4.2rem;
          height: 2.7rem;
        }
        div{
          width:7.8rem;
          position: relative;
          margin-left: 0.5rem;
        }
        h1{
          width: 100%;
          font-size: 0.3rem;
          color: #4c4c4c;
          font-family: 'biminbold';
          margin-bottom: 0.3rem;
        }
        p{
          width: 100%;
          font-size: 0.2rem;
          color: #808080;
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>