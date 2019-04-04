<template>
  <div class='dialog' v-show="isShow">
    <div class="content">
      <p>{{$t('dialog.text[0]')}}<span class="blue"> {{$t('dialog.email')}} </span>{{$t('dialog.text[1]')}}</p>
      <div class="line"></div>
      <span class="blue ok" @click="close">{{$t('dialog.ok')}}</span>
    </div>

  </div>
</template>

<script>
export default {
  components: {},
  props:{
    isShow:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    close(){
      this.$emit('close',false)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
.dialog {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
   z-index: 1000;
  .content {
    width: 650px;
    height: 270px;
    background: white;
    box-shadow: 0px 20px 50px 15px rgba(0, 0, 0, 0.15);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 42px 40px;
    .line {
      background-image: url("../assets/img/dialog.png");
      background-size: 100% 100%;
      width: 100%;
      height: 0.02rem;
      margin-top: 40px;
    }
    p{
      font-family: 'HelveticaExt';
      font-size: 20px;
      color: #333333;
      word-break: break-all;
      line-height: 40px;
      span{
        display: inline;
      }

    }
    .ok{
      font-size: 20px;
      display: block;
      margin: 40px auto 0 auto;
      text-align: center;
      cursor: pointer;
    }
  }
  .blue{
    color: #3f6fb7;
  }
}
</style>