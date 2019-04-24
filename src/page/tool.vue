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
            <li><span>{{$t('tool.nav2.row_1[0]')}}</span></li>
            <li><span>{{$t('tool.nav2.row_1[1]')}}</span></li>
            <li><span>{{$t('tool.nav2.row_1[2]')}}</span></li>
          </ul>
          <ul class="row_2">
            <li></li>
            <li v-for="(item,index) in $t('tool.nav2.row_2')" :key="index" class="font14">
              <span>{{item}}</span>
            </li>
          </ul>
          <ul class="row_3">
            <li v-for="(item,index) in $t('tool.nav2.row_3')" :key="index" class="font14">
              <span>{{item}}</span>
            </li>
          </ul>
          <ul v-for="(item,index) in List" :key="index">
            <li v-for="(i,ind) in item" :key="ind" class="font14" :class="{style1:i==0||i==3,style2:i==1,style3:i==2}">
              <span v-show="i==4">
                {{$t('tool.nav2.titles['+index+']')}}
              </span>
              <span v-show="i==0">
                {{$t('tool.nav2.Seller')}}
              </span>
              <span v-show="i==1">
                {{$t('tool.nav2.Buyer')}}
              </span>
              <span v-show="i==2">
                
              </span>
              <span v-show="i==3">
                {{$t('tool.nav2.Buyorsell')}}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="text text-3" v-show="curNav==3">
        <h1>{{$t('tool.nav3.name')}}</h1>
        <p>
          {{$t('tool.nav3.btn1')}}
          <span class="blue"><a href="./static/air shipment instruction form.pdf" target="_blank" download="download">({{$t('tool.nav3.download')}})</a></span>
        </p>
        <p>
          {{$t('tool.nav3.btn2')}}
          <span class="blue"><a href="./static/ocean shipment instruction form.xls" target="_blank">({{$t('tool.nav3.download')}})</a></span>
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
      curNav: 1,
      List:[
        [4,3,0,0,0,0,0,0,0,0,0,0],
        [4,1,0,0,0,0,0,0,0,0,0,0],
        [4,1,0,0,0,0,0,0,0,0,0,0],
        [4,1,0,0,0,0,0,0,0,0,0,0],
        [4,1,1,0,0,0,0,0,0,0,0,0],
        [4,1,1,1,0,0,0,0,0,0,0,0],
        [4,1,1,1,1,0,0,0,0,0,0,0],
        [4,2,2,2,2,2,0,2,0,2,2,2],
        [4,1,1,1,1,1,1,0,0,0,0,0],
        [4,1,1,1,1,1,1,1,1,1,0,0],
        [4,1,1,1,1,1,1,1,1,1,1,0],
      ]
    };
  },
  computed: {
    List(){

    }
  },
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
    // padding-bottom: 2rem;
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
        line-height: 2;
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
        line-height: 2;
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
          top: 0.13rem;
          // top: 50%;
          // transform: translateY(-50%);
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
        margin-bottom: 2rem;
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
        .table {
          width: 10.6rem;
          margin: 0 auto 2rem 0;
          position: relative;
          border: 2px solid #e2e4e8;
          border-radius: 0.08rem;
          text-align: center;
          // display: flex;
          // display: -webkit-flex;
          // flex-wrap: wrap;
          .title {
            background: #b0cdf1;
            width: 100%;
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
          li {
            display: inline-block;
            border-right: 2px solid white;
            background: #b0cdf1;
            width: 0.83rem;
            text-align: center;
            padding: 0px 0.05rem;
            line-height: 1.5;
            span{
              align-items:center;
              display: flex;
              width: 100%;
              height: 100%;
              font-size: 0.18rem;
              text-align: center;
              justify-content:center; 
            }
          }
          ul {
            border-top: 2px solid white;
            height: 0.8rem;
            li:nth-of-type(1) {
              width: 1.45rem;
              font-weight: bold;
            }
            li:last-of-type{
              border-right: none;
            }
          }
          .font14{
            span{
              font-size: 0.14rem;
            }
          }
          .row_1 {
            width: 100%;
            li{
              color: #4c4c4c;
              font-family:Helvetica;
            }
            li {
              &:nth-of-type(1) {
              width: 1.44rem;
              
            }
              &:nth-of-type(2) {
                width: 1.66rem;
                background: #99bfed;
              }
              &:nth-of-type(3) {
                width: 3.31rem;
                background: #99bfed;
              }
              &:nth-of-type(4) {
                width: 4.14rem;
                background: #99bfed;
              }
            }
          }
          .row_2{
            li:not(:first-child){
              background: #bbd4f2;
            }
            li{
              color: #4c4c4c;
              font-family:Helvetica;
              font-weight: bold;
            }
          }
          .row_3{
            li:not(:first-child){
              background: #d4e4f7;
            }
          }
          .style1{
            background: #80b0e8;
            span{
              color: white;
            }
          }
          .style2{
            background: #e3eefc;
          }
          .style3{
            background: #eeeff1;
          }
          
        }
      }
      &.text-3 {
          margin: 0.4rem auto 2rem auto;
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
            top: 0.13rem;
            // top: 50%;
            // transform: translateY(-50%);
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
@media (min-device-width: 375px) and (max-device-width: 812px){
  .tool{
    .content{
      min-height: 16rem;
      ul{
        li{
          p{
            font-size: 0.4rem;
          }
          
        }
      }
      .text{
        h1{
            font-size: 0.8rem;
        }
        p{
          font-size: 0.4rem;
        }
      }
    }
  }
}
</style>