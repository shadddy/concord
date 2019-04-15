<template>
  <div class="service">
    <my-head></my-head>
    <div
      class="inner-banner"
      :style="curbanner"
    ></div>
    <div class="content">
      <ul>
        <li
          v-for="(item,index) in $t('service')"
          :key="index"
          :class="{act:item.id==curNav}"
          @click="change(item.id)"
        >
          <div
            class="icon"
            :style="item.id==curNav?item.act:item.pos"
          ></div>
          <p>{{item.name}}</p>
        </li>
      </ul>
      <div class="line"></div>
      <div class="text">
        <h1>{{curList.title}}</h1>
        <p>{{curList.text}}</p>
        <p v-if="curList.text2">{{curList.text2}}</p>
        <ul>
          <li
            v-for="(item,index) in curList.detail"
            :key="index"
          >
            {{item}}
          </li>
        </ul>
        <p v-if="curList.text3">{{curList.text3}}</p>
        <ul v-show="curList.detail2">
          <li
            v-for="(item,index) in curList.detail2"
            :key="index"
          >
            {{item}}
          </li>
        </ul>
      </div>
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
      curNav: 1,
      banner: [
        "background-position:0 -4.5rem;",
        "background-position:0 -9rem;",
        "background-position:0 -13.5rem;",
        "background-position:0 -18rem;",
        "background-position:0 -22.5rem;"
      ],
      curbanner: null,
      list: [
        {
          title: this.$t("service.nav1.name"),
          text: this.$t("service.nav1.text"),
          detail: this.$t("service.nav1.list")
        },
        {
          title: this.$t("service.nav2.name"),
          text: this.$t("service.nav2.text"),
          detail: this.$t("service.nav2.list")
        },
        {
          title: this.$t("service.nav3.name"),
          text: this.$t("service.nav3.text"),
          detail: this.$t("service.nav3.list")
        },
        {
          title: this.$t("service.nav4.name"),
          text: this.$t("service.nav4.text"),
          detail: this.$t("service.nav4.list")
        },
        {
          title: this.$t("service.nav5.name"),
          text: this.$t("service.nav5.text"),
          text2:this.$t("service.nav5.text2"),
          text3:this.$t("service.nav5.text3"),
          detail:this.$t("service.nav5.list"),
          detail2:this.$t("service.nav5.list2"),
        }
      ],
      curList: {}
    };
  },
  computed: {},
  methods: {
    change(num) {
      this.curNav = num;
      this.curbanner = this.banner[num - 1];
      this.curList=this.list[num-1]
    }
  },
  created() {},
  mounted() {
    this.curNav=this.$route.params.serviceId
    if(this.curNav==undefined){
      this.curNav=1
    }
    // let _curNav=this.$route.params.serviceId
    this.curList = this.list[this.curNav - 1];
    console.log(this.curList)
  }
};
</script>
<style lang='less' scoped>
.service {
  overflow: hidden;
  .inner-banner {
    background-position: 0 -4.5rem;
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
      margin: 0.8rem auto 0 auto;
    }
    .text {
      margin-top: 0.4rem;
      width: 100%;
      padding: 0 0.8rem 2rem 0.8rem;
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
      p{
        color: #4c4c4c;
        font-size: 0.2rem;
        letter-spacing: 1px;
        margin-bottom: 0.6rem;
        line-height: 2;
      }
      ul{
        width: 100%;
        position: relative;
        flex-wrap: wrap;
        display: flex;
        display: -webkit-flex;
        justify-content: flex-start;
        padding: 0 0.9rem;
        li{
            width: 50%;
            font-size: 0.18rem;
            margin-bottom: 0.1rem;
            padding-left: 0.5rem;
            position: relative;
            line-height: 1.8;
            &::before{
               content: "";
               background: #2a6ec1;
               display: block;
               width: 0.1rem;
               height: 0.1rem;
               position: absolute;
               top: 0.1rem;
               border-radius: 50%;
               left: 0;
            }
        }
      }
    }
  }
}
</style>