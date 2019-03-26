<template>
  <div class="service">
    <my-head></my-head>
    <div class="inner-banner"></div>
    <div class="content">
      <ul>
        <li v-for="(item,index) in $t('service')" :key="index" :class="{act:item.id==curNav}" @click="curNav=item.id">
          <div class="icon" :style="item.id==curNav?item.act:item.pos"></div>
          <p>{{item.name}}</p>
        </li>
      </ul>
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
    return {
      curNav:1,
      list:[

      ]
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
  }
};
</script>
<style lang='less' scoped>
.service{
  .inner-banner{
    background-position: 0 -4.5rem;
  }
  .footer {
    position: relative;
    padding-top: 0.01rem;
  }
  .content{
    width: 12.92rem;
    margin: 0 auto;
    padding-top: 0.6rem;
    ul{
      display: flex;
      display: -webkit-flex;
      justify-content: space-around;
      li{
        width: 2.28rem;
        cursor: pointer;
        .icon{
          width: 2.28rem;
          height: 2.33rem;
          background-image: url('../assets/img/service/icon.png');
          background-size:11.4rem 6rem;
          margin-bottom: 0.2rem;
        }
        p{
          text-align: center;
          font-size: 0.28rem;
          font-family: 'biminbold';
          width: 2rem;
          margin:0 auto;
          line-height: 0.35rem;
        }
        &.act{
          p{
            color: #2a6ec1;
          }
        }
      }
    }
    .line{
      background-image: url('../assets/img/service/icon.png');
      background-size:11.4rem 6rem;
      width: 10.96rem;
      height: 0.2rem;
      background-position: 0 -4.89rem;
      margin: 0.8rem auto 0 auto;

    }
  }
}
</style>