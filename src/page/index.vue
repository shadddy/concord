<template>
  <div class='index'>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item,index) in 7" :key="index" :style="{backgroundImage:'url('+require('../assets/img/index/bg_'+(index+1)+'.jpg')+')'}">
        <!-- 头部导航 -->
        <my-head v-show="index==0"></my-head>
        <!-- 第一屏 -->
        <div class="section part-1" v-show="index==0">
          <swiper :options="bannerOption" ref="banner">
            <swiper-slide v-for="(i,ind) in 3" :key="'banner-'+ind" :style="{backgroundImage:'url('+require('../assets/img/index/bg_'+(index+1)+'.jpg')+')'}">

            </swiper-slide>
          </swiper>
          <h1 class="ab">{{$t('index.part_1.title')}}</h1>
          <div class="btn-box ab flex">
            <div class="btn">{{$t('index.part_1.btn1')}}</div>
            <div class="btn">{{$t('index.part_1.btn2')}}</div>
          </div>
        </div>
        <div v-for="(item,index) in detailList" :class="'section part-'+item.page">

        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import myHead from '@/components/header'
export default {
  components: {
    swiper,
    swiperSlide,
    myHead
  },
  data() {
    return {
      //翻页配置
      swiperOption:{
        autoplay:3000,
        speed:1000,
        direction:'vertical',
        mousewheel:true,
        pagination:{
          el:'.swiper-pagination',
          clickable:true
        }
      },
      //banner配置
      bannerOption:{
        autoplay:3000,
        speed:1000,
        mousewheel:true,
        pagination:{
          el:'.swiper-pagination',
          clickable:true
        }
      },
      detailList:[
        {
          page:1
        },
        {
          page:2,
          title:'2222'
        },
        {
          page:3,
          title:'3333'
        },
        {
          page:4,
          title:'4444'
        },
        {
          page:5,
          title:'5555'
        },
        {
          page:6,
          title:'6666'
        },
        {
          page:7
        }
      ]

    };
  },
  //监听属性 类似于data概念
  computed: {
    swiper() {
        return this.$refs.mySwiper.swiper
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
  }
};
</script>
<style lang='less' scoped>
.index{
  width:100%;
  height: 100%;
  position: relative;
  .swiper-container{
    width: 100%;
    height: 100%;
    .swiper-slide{
      width: 100%;
      height: 100%;
      background-position: center;
      .section{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
      }
      .part-1{
        h1{
          left: 50%;
          transform: translateX(-50%);
          top: 4.35rem;
          z-index: 1;
          font-family: 'bauhs93';
          color: white;
          font-size: 0.82rem;
          font-weight: 500;
          text-shadow:0px 10px 12px #333333;
          white-space: nowrap;
        }
        .btn-box{
          width: 5.8rem;
          height: 0.7rem;
          z-index: 1;
          justify-content: space-between;
          left: 50%;
          transform: translateX(-50%);
          top: 6rem;
          .btn{
            width: 2.6rem;
            height: 0.7rem;
            background: rgba(255,255,255,0.7);
            text-align: center;
            color:#5b5b5b;
            font-size: 0.26rem;
            line-height: 0.7rem;
            font-weight: 600;
            border-radius: 0.35rem;
            cursor: pointer;
          }
        }
      }
    }
  }
  
}
</style>
<style lang="less">
.swiper-pagination-bullet{
    width: 12px;
    height: 12px;
}
.swiper-pagination-bullet-active{
  background:#ffffff;
}
</style>
