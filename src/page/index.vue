<template>
  <div class='index'>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item,index) in 7" :key="index" :style="{backgroundImage:'url('+require('../assets/img/index/bg_'+(index+1)+'.jpg')+')'}">
        <my-head></my-head>
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
      swiperOption:{
        autoplay:3000,
        speed:1000,
        direction:'vertical',
        mousewheel:true,
        pagination:{
          el:'.swiper-pagination',
          clickable:true
        }
      }
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
      background-position: center
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
