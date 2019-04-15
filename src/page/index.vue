<template>
  <div class="index">
    <transition name="fade">
      <img :src="aniImg" alt="" class="ani" v-show="aniShow">
    </transition>
    <my-dialog :isShow="dialogShow" @close="dialogShow=false"></my-dialog>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- 第一屏 -->
      <swiper-slide >
        <!-- 头部导航 -->
        <my-head></my-head>
        <div class="section part-1">
          <swiper :options="bannerOption" ref="banner">
            <swiper-slide
              v-for="(i,ind) in 3"
              :key="'banner-'+ind"
              :style="{backgroundImage:'url('+require('../assets/img/index/banner_1_'+(ind+1)+'.jpg')+')'}"
            ></swiper-slide>
            
          </swiper>
          <h1 class="ab" style="line-height:1;">{{$t('index.part_1.title')}}</h1>
          <div class="btn-box ab flex">
            <div class="btn" @click="$router.push('quote')">{{$t('index.part_1.btn1')}}</div>
            <div class="btn" @click="$router.push('track')">{{$t('index.part_1.btn2')}}</div>
          </div>
          <ul class="my-pagination" v-show="false">
              <li :class="{act:bannerOption.curPage==0}">
                <img  src="../assets/img/index/banner_1_1.jpg">
              </li>
              <li :class="{act:bannerOption.curPage==1}">
                <img  src="../assets/img/index/banner_1_2.jpg">
              </li>
              <li :class="{act:bannerOption.curPage==2}">
                <img  src="../assets/img/index/banner_1_3.jpg">
              </li>
            </ul>
        </div>
      </swiper-slide>
      <swiper-slide :style="{backgroundImage:'url('+require('../assets/img/index/bg_2.jpg')+')'}">
        <div class="mask part-2 left">
          <div class="content">
            <div class="avatar" :style="icon"></div>
            <div class="text">
              <h1>{{$t('index.part_2.title')}}</h1>
              <p>{{$t('index.part_2.text')}}</p>
              <div class="box">
                <div class="icon before">
                  <div class="pic icon1" :style="icon"></div>
                  <p>{{$t('index.part_2.icon1')}}</p>
                </div>
                <div class="icon">
                  <div class="pic icon2" :style="icon"></div>
                  <p>{{$t('index.part_2.icon2')}}</p>
                </div>
                <div class="more" @click="toService(1)">{{$t('index.part_2.more')}}</div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide :style="{backgroundImage:'url('+require('../assets/img/index/bg_3.jpg')+')'}">
        <div class="mask part-3 right">
          <div class="content">
            <div class="avatar" :style="icon"></div>
            <div class="text">
              <h1>{{$t('index.part_3.title')}}</h1>
              <p>{{$t('index.part_3.text')}}</p>
              <div class="box">
                <div class="icon before">
                  <div class="pic icon3" :style="icon"></div>
                  <p>{{$t('index.part_3.icon1')}}</p>
                </div>
                <div class="icon">
                  <div class="pic icon4" :style="icon"></div>
                  <p>{{$t('index.part_3.icon2')}}</p>
                </div>
                <div class="more" @click="toService(2)">{{$t('index.part_3.more')}}</div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide :style="{backgroundImage:'url('+require('../assets/img/index/bg_4.jpg')+')'}">
        <div class="mask part-4 left">
          <div class="content">
            <div class="avatar" :style="icon"></div>
            <div class="text">
              <h1>{{$t('index.part_4.title')}}</h1>
              <p>{{$t('index.part_4.text')}}</p>
              <div class="box">
                <div class="icon before">
                  <div class="pic icon5" :style="icon"></div>
                  <p>{{$t('index.part_4.icon1')}}</p>
                </div>
                <div class="icon">
                  <div class="pic icon6" :style="icon"></div>
                  <p>{{$t('index.part_4.icon2')}}</p>
                </div>
                <div class="more" @click="toService(3)">{{$t('index.part_4.more')}}</div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide :style="{backgroundImage:'url('+require('../assets/img/index/bg_5.jpg')+')'}">
        <div class="mask part-5 right">
          <div class="content">
            <div class="avatar" :style="icon"></div>
            <div class="text">
              <h1>{{$t('index.part_5.title')}}</h1>
              <p>{{$t('index.part_5.text')}}</p>
              <div class="box">
                <div class="icon before">
                  <div class="pic icon7" :style="icon"></div>
                  <p>{{$t('index.part_5.icon1')}}</p>
                </div>
                <div class="icon">
                  <div class="pic icon8" :style="icon"></div>
                  <p>{{$t('index.part_5.icon2')}}</p>
                </div>
                <div class="more" @click="toService(4)">{{$t('index.part_5.more')}}</div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide :style="{backgroundImage:'url('+require('../assets/img/index/bg_6.jpg')+')'}">
        <div class="mask part-6 left">
          <div class="content">
            <div class="avatar" :style="icon"></div>
            <div class="text">
              <h1>{{$t('index.part_6.title')}}</h1>
              <p>{{$t('index.part_6.text')}}</p>
              <div class="box">
                <div class="icon before">
                  <div class="pic icon9" :style="icon"></div>
                  <p>{{$t('index.part_6.icon1')}}</p>
                </div>
                <div class="icon">
                  <div class="pic icon10" :style="icon"></div>
                  <p>{{$t('index.part_6.icon2')}}</p>
                </div>
                <div class="more" @click="toService(5)">{{$t('index.part_6.more')}}</div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide :style="{backgroundImage:'url('+require('../assets/img/index/bg_7.jpg')+')'}">
        <div class="form">
          <h1>{{$t('index.part_7.title')}}</h1>
          <h3>{{$t('index.part_7.subtitle')}}</h3>
          <div class="left">
            <div class="flex">
              <div class="icon icon1" :style="icon"></div>
              <p>{{$t('index.part_7.province')}}</p>
            </div>
            <div class="flex">
              <div class="icon icon2" :style="icon"></div>
              <p>{{$t('index.part_7.address')}}</p>
            </div>
            <div class="flex">
              <div class="icon icon3" :style="icon"></div>
              <p>{{$t('index.part_7.wechat')}}</p>
            </div>
            <div class="flex">
              <div class="icon icon4" :style="icon"></div>
              <p>{{$t('index.part_7.email')}}</p>
            </div>
          </div>
          <div class="right">
            <input type="text" class="first" :placeholder="$t('index.part_7.form1')" v-model="firstName">
            <input type="text" class="last" :placeholder="$t('index.part_7.form2')" v-model="lastName">
            <input type="text" class="email" :placeholder="$t('index.part_7.form3')" v-model="email">
            <input type="text" class="tel" :placeholder="$t('index.part_7.form4')" v-model="tel">
            <textarea name class="message" :placeholder="$t('index.part_7.form5')" v-model="message"></textarea>
            <div class="submit" @click="submit">{{$t('index.part_7.submit')}}</div>
          </div>
        </div>
        <my-foot></my-foot>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import myHead from "@/components/header";
import myFoot from "@/components/footer";
import myDialog from "@/components/dialog";
export default {
  components: {
    swiper,
    swiperSlide,
    myHead,
    myFoot,
    myDialog
  },
  data() {
    return {
      timer: null, //序列帧计时器
      count: 12,
      imgs:[],
      aniShow:true,
      aniImg:"../static/img/logo_012.jpg",
      dialogShow:false,
      icon: {
        backgroundImage:
          "url(" + require("../assets/img/index/index_icon.png") + ")"
      },
      firstName:'',
      lastName:'',
      email:'',
      tel:'',
      message:'',
      //翻页配置
      swiperOption: {
        autoplay: 3000,
        speed: 1000,
        direction: "vertical",
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      //banner配置
      bannerOption: {
        autoplay: 3000,
        speed: 1000,
        mousewheel: true,
        loop:true,
        pagination: {
          el: ".swiper-pagination-2",
          clickable: true
        },
        curPage:0
      }
    };
  },
  //监听属性 类似于data概念
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    bannerSwiper(){
       return this.$refs.banner.swiper;
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //预加载序列帧图片
    preload() {
      for (var i = 13; i < 118; i++) {
        if (i < 100) {
          this.imgs.push("../static/img/logo_0" + i + ".jpg");
        } else {
          this.imgs.push("../static/img/logo_" + i + ".jpg");
        }
      }
      for (let img of this.imgs) {
        let image = new Image();
        image.src = img;
        image.onload = () => {
          this.count++;
          if(this.count==117){
            this.ani()
          }
        };
      }
    },
    //执行序列帧动画
    ani(){
      let _count=0
      this.timer=setInterval(()=>{
        this.aniImg=this.imgs[_count]
        _count++
        if(_count==105){
          clearInterval(this.timer)
          this.aniShow=false
          
        }
      },50)
      sessionStorage.setItem('firstLog',true)
    },
    submit(){
      if(this.firstName==''){
        this.$Message.warning('FirstName is required')
        return
      }else if(this.lastName==''){
        this.$Message.warning('LastName is required')
        return
      }else if(this.email==''){
        this.$Message.warning('E-mail is required')
        return
      }else if(this.tel==''){
        this.$Message.warning('Telephone is required')
        return
      }else if(this.message==''){
        this.$Message.warning('Message is required')
        return
      }
      this.dialogShow=true
    },
    toService(num){
      this.$router.push({name:'service',params:{serviceId:num}});
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let isFirst=sessionStorage.getItem('firstLog')
    if(isFirst){
      this.aniShow=false
      return
    }else{
       this.preload()
    }
    
    
  }
};
</script>
<style lang='less' scoped>
.index {
  width: 100%;
  height: 100%;
  position: relative;
  .ani{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10000;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    .swiper-slide {
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: 100% 100%;
      .section {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        
      }
      .part-1 {
        h1 {
          left: 50%;
          transform: translateX(-50%);
          // top: 4.35rem;
          top: 39%;
          // top: 0;
          z-index: 1;
          font-family: "bauhs93";
          color: white;
          font-size: 0.82rem;
          font-weight: 500;
          text-shadow: 0px 10px 12px #333333;
          white-space: nowrap;
        }
        .btn-box {
          width: 5.8rem;
          height: 0.7rem;
          z-index: 1;
          justify-content: space-between;
          left: 50%;
          transform: translateX(-50%);
          top: 51%;
          .btn {
            width: 2.6rem;
            height: 0.7rem;
            background: rgba(255, 255, 255, 0.7);
            text-align: center;
            color: #5b5b5b;
            font-size: 0.26rem;
            line-height: 0.7rem;
            font-weight: 600;
            border-radius: 0.35rem;
            cursor: pointer;
          }
        }
      }
      .mask {
        width: 100%;
        height: 4rem;
        background: rgba(0, 0, 0, 0.3);
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0 3.2rem;
        .content {
          width: 12.8rem;
          margin: 0 auto;
          position: relative;
        }
        .avatar {
          width: 3.7rem;
          height: 3.7rem;
          background-size: 15rem 8rem;
          position: absolute;
          top: -1.65rem;
        }
        .text {
          width: 8rem;
          height: 100%;
          position: absolute;

          top: 0;
          padding-top: 0.39rem;
          h1 {
            font-size: 0.38rem;
            color: white;
            font-family: "biminbold";
            text-align: right;
            position: relative;
            line-height: 1.5;
            &::after {
              content: "";
              background: #2a6ec1;
              width: 1.9rem;
              height: 0.04rem;
              display: block;
              position: absolute;
              right: 0;
              bottom: -0.06rem;
            }
          }
          & > p {
            font-size: 0.2rem;
            color: white;
            font-family: Helvetica;
            margin-top: 0.15rem;
            font-family: 'HelveticaExt';
            line-height: 1.5;
          }
          .box {
            margin-top: 0.64rem;
            width: 100%;
            display: flex;
            display: -webkit-flex;
            padding-left: 1.6rem;
            position: relative;
            .icon {
              position: relative;
              margin-right: 0.6rem;
              // width: 0.94rem;
              &.before::before {
                content: "";
                background: white;
                width: 1px;
                height: 0.52rem;
                display: block;
                position: absolute;
                right: -0.22rem;
                top: 0.11rem;
              }
              .pic {
                width: 0.44rem;
                height: 0.44rem;
                background-size: 15rem 8rem;
                margin: 0 auto;
                &.icon1 {
                  background-position: -3.7rem -3.7rem;
                }
                &.icon2 {
                  background-position: -3.7rem -4.14rem;
                }
              }
              p {
                color: white;
                font-size: 0.2rem;
                margin-top: 0.1rem;
                text-align: center;
                font-family: 'HelveticaExt';
                font-weight: bold;
              }
            }
            .more {
              color: white;
              font-size: 0.2rem;
              border: 0.02rem solid #2a6ec1;
              border-radius: 0.08rem;
              width: 1.68rem;
              height: 0.44rem;
              text-align: center;
              line-height: 0.4rem;
              position: absolute;
              right: 0;
              top: 0.16rem;
              font-family: 'HelveticaExt';
              cursor: pointer;
              transition: .3s;
              &:hover{
                background: #2a6ec1;
              }
            }
          }
        }
        &.part-2 {
          .avatar {
            background-position: 0 0;
          }
        }
        &.part-3 {
          .avatar {
            background-position: -3.7rem 0;
          }
          .icon3 {
            background-position: -4.14rem -3.7rem;
          }
          .icon4 {
            background-position: -4.14rem -4.14rem;
          }
        }
        &.part-4 {
          .avatar {
            background-position: -7.39rem 0;
          }
          .icon5 {
            background-position: -4.58rem -4.14rem;
          }
          .icon6 {
            background-position: -4.58rem -3.7rem;
          }
        }
        &.part-5 {
          .avatar {
            background-position: -11.09rem 0;
          }
          .icon7 {
            background-position: -5.02rem -3.7rem;
          }
          .icon8 {
            background-position: -5.02rem -4.14rem;
          }
        }
        &.part-6 {
          .avatar {
            background-position: -0rem -3.7rem;
          }
          .icon9 {
            background-position: -5.46rem -3.7rem;
          }
          .icon10 {
            background-position: -5.46rem -4.14rem;
          }
        }
        &.left {
          .avatar {
            left: 0;
          }
          .text {
            right: 0;
          }
        }
        &.right {
          .avatar {
            right: 0;
          }
          .text {
            left: 0;
            h1 {
              text-align: left;
              &::after {
                left: 0;
              }
            }
          }
          .box {
            padding-left: 2.93rem;
            .more {
              left: 0;
            }
          }
        }
      }
      .form {
        width: 12.8rem;
        height: 7rem;
        background: rgba(0, 0, 0, 0.3);
        margin: 0.8rem auto;
        padding: 0.4rem 0.6rem;
        position: relative;
        h1 {
          color: white;
          text-align: center;
          font-size: 0.5rem;
          font-family: "bauhs93";
          color: white;
          font-weight: 500;
          text-shadow: 0px 7px 10px #333333;
        }
        h3 {
          color: white;
          font-size: 0.24rem;
          text-align: center;
          font-weight: 500;
          margin-top: 0.2rem;
        }
        .left {
          padding-top: 0.5rem;
          width: 50%;
          display: inline-block;
          .flex {
            margin-bottom: 0.3rem;
          }
          .icon {
            background-size: 15rem 8rem;
            width: 0.86rem;
            height: 0.86rem;
          }
          .icon1 {
            background-position: -3.7rem -4.58rem;
          }
          .icon2 {
            background-position: -4.57rem -4.58rem;
          }
          .icon3 {
            background-position: -3.7rem -5.45rem;
          }
          .icon4 {
            background-position: -4.57rem -5.45rem;
          }
          p {
            color: white;
            font-size: 0.2rem;
            line-height: 0.86rem;
            margin-left: 0.55rem;
            // font-family: 'HelveticaExt';
            letter-spacing: 0.01rem;
          }
        }
        .right {
          padding-top: 0.4rem;
          vertical-align: top;
          width: 49%;
          display: inline-block;
          input,
          textarea {
            display: block;
            background: transparent;
            border: 1px solid #e1dad9;
            margin-bottom: 0.2rem;
            border-radius: 0.05rem;
            outline: none;
            color: #b2b2b2;
            text-indent: 0.1rem;
            font-family: 'HelveticaExt';
            font-size: 0.2rem;
          }
          textarea{
            padding-top: 0.1rem;
          }
          input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{
            color: #b2b2b2;
          }
          .first,
          .last {
            width: 2.38rem;
            height: 0.44rem;
          }
          .email,
          .tel {
            width: 5.2rem;
            height: 0.44rem;
          }
          .message {
            width: 5.2rem;
            height: 1.31rem;
          }
          .submit {
            color: white;
            font-size: 0.2rem;
            width: 1.68rem;
            height: 0.44rem;
            border: 0.02rem solid #2a6ec1;
            border-radius: 0.08rem;
            text-align: center;
            line-height: 0.44rem;
            margin: 0.3rem auto;
            transition: .3s;
            font-family: 'HelveticaExt';
            cursor: pointer;
            &:hover{
              background: #2a6ec1;
            }
          }
        }
      }
    }
  }
  .my-pagination{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0.5rem;
    z-index: 1000;
    li{
      display: inline-block;
      position: relative;
      width: 0.5rem;
      height: 0.5rem;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 50%;
      transition: .3s;
      img{
        width: 0.46rem;
        height: 0.46rem;
        border-radius: 50%;
        margin: 0.02rem;
      }
      &.act{
        transform: scale(1.2)
      }
    }
  }
}

</style>
<style lang="less">
.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
}
.swiper-pagination-bullet-active {
  background: #ffffff;
}

</style>
