<template>
  <div class="tool">
    <my-head></my-head>
    <div class="inner-banner"></div>
    <div class="content">
      <ul>
        <li
          v-for="(item,index) in $t('tool')"
          :key="index"
          :class="{act:item.id==curNav}"
          @click="change(item.id)"
        >
          <div class="icon" :style="item.id==curNav?item.act:item.pos"></div>
          <p>{{item.name}}</p>
        </li>
      </ul>
      <div class="line"></div>
      <!-- <transition name="fade"> -->
        <div class="text" v-show="curNav==1">
          <h1>{{$t('tool.nav1.name')}}</h1>
        </div>
      <!-- </transition> -->
      <!-- <transition name="fade"> -->
        <div class="text" v-show="curNav==2">
          <h1>{{$t('tool.nav2.name')}}</h1>
        </div>
      <!-- </transition> -->
      <!-- <transition name="fade"> -->
        <div class="text" v-show="curNav==3">
          <h1>{{$t('tool.nav3.name')}}</h1>
        </div>
      <!-- </transition> -->
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
      curNav: 1
    };
  },
  computed: {},
  methods: {
    change(num) {
      this.curNav = num;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang='less' scoped>
.tool {
  overflow: hidden;
  .inner-banner {
    background-position: 0 -27rem;
    transition: 0.3s;
  }
  .footer {
    position: relative;
    padding-top: 0.01rem;
  }
  .content {
    width: 12.92rem;
    margin: 0 auto;
    padding-top: 0.6rem;
    position: relative;
    ul {
      display: flex;
      display: -webkit-flex;
      justify-content: space-around;
      li {
        width: 2.28rem;
        cursor: pointer;
        .icon {
          width: 2.28rem;
          height: 2.33rem;
          background-image: url("../assets/img/service/icon.png");
          background-size: 11.4rem 10rem;
          margin-bottom: 0.2rem;
        }
        p {
          text-align: center;
          font-size: 0.28rem;
          font-family: "biminbold";
          width: 2rem;
          margin: 0 auto;
          line-height: 0.35rem;
        }
        &.act {
          p {
            color: #2a6ec1;
          }
        }
      }
    }
    .line {
      background-image: url("../assets/img/service/icon.png");
      background-size: 11.4rem 10rem;
      width: 10.96rem;
      height: 0.02rem;
      background-position: 0 -4.89rem;
      margin: 0.8rem auto 0.4rem auto;
    }
    .text {
      // position: absolute;
      // top: 4rem;
      margin-top: 0.4rem;
      display: inline-block;
      width: 100%;
      transition: 0.3s;
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
    }
  }
}
</style>