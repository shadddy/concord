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
      <!-- Calculator 2010 -->
      <div class="text text-1" v-show="curNav==1">
        <h1>{{$t('tool.nav1.name')}}</h1>
        <p style="color:#000">{{$t('tool.nav1.title')}}</p>
        <p class="icon">{{$t('tool.nav1.title1')}}</p>
        <p>{{$t('tool.nav1.text1')}}</p>
        <p>{{$t('tool.nav1.text2')}}</p>
        <p class="icon">{{$t('tool.nav1.title2')}}</p>
        <p>{{$t('tool.nav1.text3')}}</p>
        <div class="table">
          <ul>
            <li class="title">{{$t('tool.nav1.list1.name')}}</li>
            <li v-for="(item,index) in $t('tool.nav1.list1.list')" :key="index">{{item}}</li>
          </ul>
          <ul>
            <li class="title">{{$t('tool.nav1.list2.name')}}</li>
            <li v-for="(item,index) in $t('tool.nav1.list2.list')" :key="index">{{item}}</li>
          </ul>
          <ul>
            <li class="title">{{$t('tool.nav1.list3.name')}}</li>
            <li v-for="(item,index) in $t('tool.nav1.list3.list')" :key="index">{{item}}</li>
          </ul>
        </div>

        <div class="table2">
          <ul class="first">
            <li class="title"></li>
            <li class="top">{{$t('tool.nav1.sea')}}</li>
            <li class="bottom">{{$t('tool.nav1.air')}}</li>
          </ul>
          <ul>
            <li class="title">{{$t('tool.nav1.list4.name')}}</li>
            <li
              v-for="(item,index) in $t('tool.nav1.list4.list')"
              :class="{blue:index>3}"
              :key="index"
            >{{item}}</li>
          </ul>
          <ul>
            <li class="title">{{$t('tool.nav1.list5.name')}}</li>
            <li
              v-for="(item,index) in $t('tool.nav1.list5.list')"
              :class="{blue:index>3}"
              :key="index"
            >{{item}}</li>
          </ul>
          <ul>
            <li class="title">{{$t('tool.nav1.list6.name')}}</li>
            <li
              v-for="(item,index) in $t('tool.nav1.list6.list')"
              :class="{blue:index>3}"
              :key="index"
            >{{item}}</li>
          </ul>
        </div>
      </div>
      <!-- Incoterms 2010 -->
      <div class="text text-2" v-show="curNav==2">
        <h1>{{$t('tool.nav2.name')}}</h1>
        <div class="table">
          <div class="title">
            <h2>{{$t('tool.nav2.title')}}</h2>
            <h3>{{$t('tool.nav2.subTitle')}}</h3>
          </div>
          <ul class="row_1">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div class="text text-3" v-show="curNav==3">
        <h1>{{$t('tool.nav3.name')}}</h1>
        <p>
          {{$t('tool.nav3.btn1')}}
          <span class="blue">({{$t('tool.nav3.download')}})</span>
        </p>
        <p>
          {{$t('tool.nav3.btn2')}}
          <span class="blue">({{$t('tool.nav3.download')}})</span>
        </p>
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
      curNav: 2
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
      margin: 0.4rem auto 0 auto;
      width: 11rem;
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
      p {
        font-size: 0.2rem;
        margin-bottom: 0.3rem;
        letter-spacing: 1px;
      }
      .icon {
        position: relative;
        padding-left: 0.3rem;
        font-weight: bold;
        &::before {
          content: "";
          background: #2a6ec1;
          display: block;
          width: 0.1rem;
          height: 0.1rem;
          position: absolute;
          top: 0.09rem;
          border-radius: 50%;
          left: 0;
        }
      }
      &.text-1 {
        .table {
          margin-top: 0.8rem;
          width: 10.6rem;
          display: flex;
          display: -webkit-flex;
          ul {
            width: 3.53rem;
            position: relative;
            display: block;
            border: 2px solid #e2e4e8;
            li {
              text-align: center;
              width: 100%;
              display: block;
              height: 0.6rem;
              line-height: 0.6rem;
              font-size: 0.2rem;
              color: #4c4c4c;
              &.title {
                background: #b0cdf1 !important;
                color: #000;
                font-weight: bold;
              }
              &:nth-child(odd) {
                background: #e0ebfa;
              }
            }
          }
        }
      }
      .table2 {
        margin-top: 0.4rem;
        margin-bottom: 3rem;
        width: 10.6rem;
        display: flex;
        display: -webkit-flex;
        .first {
          width: 1.45rem;
          .top {
            height: 2.4rem;
            color: #4c4c4c;
            font-size: 0.2rem;
            font-weight: bold;
            line-height: 2.4rem;
          }
          .bottom {
            height: 4.8rem;
            background: #e0ebfa;
            color: #4c4c4c;
            font-size: 0.2rem;
            font-weight: bold;
            line-height: 4.8rem;
          }
        }
        ul {
          width: 3.05rem;
          position: relative;
          display: block;
          border: 2px solid #e2e4e8;
          li {
            text-align: center;
            width: 100%;
            display: block;
            height: 0.6rem;
            line-height: 0.6rem;
            font-size: 0.2rem;
            color: #4c4c4c;
            &.title {
              background: #b0cdf1 !important;
              color: #000;
              font-weight: bold;
            }
            &.blue {
              background: #e0ebfa;
            }
          }
        }
      }
      &.text-2 {
        table {
          width: 10.6rem;
          margin: 0 auto;
          border: 2px solid #e2e4e8;
          border-radius: 0.08rem;
          text-align: center;
          border-spacing: 0;
          thead {
            border-color: #fff;
            background: #b0cdf1;
            th {
              width: 10.6rem;
              padding: 0.3rem 0 0.3rem 0;
              border-radius: 0.08rem 0.08rem 0 0;
              h2 {
                color: #1a1a1a;
                font-size: 0.36rem;
                font-family: "biminbold";
                margin-bottom: 0.1rem;
              }
              h3 {
                color: #fff;
                font-size: 0.22rem;
                font-family: "biminbold";
              }
            }
          }
          tr {
            border-color: #fff;
          }
          td {
            background: #b0cdf1;
            height: 0.74rem;
            width: 0.82rem;
            border-color: #fff;
          }
        }
        .table {
          width: 10.6rem;
          margin: 0 auto;
          position: relative;
          border: 2px solid #e2e4e8;
          border-radius: 0.08rem;
          text-align: center;
          display: flex;
          display: -webkit-flex;
          flex-wrap: wrap;
          .title {
            background: #b0cdf1;
            width: 10.6rem;
            padding: 0.3rem 0 0.3rem 0;
            border-radius: 0.08rem 0.08rem 0 0;
            h2 {
              color: #1a1a1a;
              font-size: 0.36rem;
              font-family: "biminbold";
              margin-bottom: 0.1rem;
            }
            h3 {
              color: #fff;
              font-size: 0.22rem;
              font-family: "biminbold";
            }
          }
          .row_1 {
            height: 0.75rem;
            width: 100%;
          }
        }
      }
      &.text-3 {
        p {
          padding-left: 0.32rem;
          position: relative;
          &::before {
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
        .blue {
          color: #2a6ec1;
          cursor: pointer;
        }
      }
    }
  }
}
</style>