<template>
  <div class="career">
    <my-head></my-head>
    <div class="inner-banner"></div>
    <div class="content">
      <h1>{{$t('career.title')}}</h1>
      <p
        v-for="(item,index) in $t('career.list')"
        :key="index"
      >
        {{item}}
      </p>
      <div class="line"></div>
      <div class="form">
        <div class="box name">
          <p>{{$t('career.name')}}<span class="blue">(*)</span></p>
          <input type="text" v-model="name">
        </div>
        <div class="box email">
          <p>{{$t('career.email')}}<span class="blue">(*)</span></p>
          <input type="email" v-model="email">
        </div>
        <div>
          <p>{{$t('career.message')}}<span class="blue">({{$t('career.notice')}})</span></p>
          <textarea name="" id="" cols="30" rows="10" v-model="message"></textarea>
        </div>
        <div class="btn" @click="send()">
            {{$t('career.send')}}
        </div>
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
      name:'',
      email:'',
      message:''
    };
  },
  computed: {},
  methods: {
    send(){
      if(this.name==""){
        this.$Message.warning('Name is required')
        return
      }else if(this.email==""){
        this.$Message.warning('E-amil is required')
        return
      }else if(this.message==""){
        this.$Message.warning('Message is required')
        return
      }
      this.$Message.success("Your info has been sent")
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang='less' scoped>
.career {
  overflow: hidden;
  .inner-banner {
    background-position: 0 -45rem;
    transition: 0.3s;
  }
  .footer {
    position: relative;
    padding-top: 0.01rem;
  }
  .content {
    width: 12.82rem;
    margin: 0 auto;
    padding-bottom: 2.3rem;
    h1 {
      margin-top: 0.4rem;
      color: #333;
      font-family: "biminbold";
      font-size: 0.42rem;
      text-align: center;
      position: relative;
      color: #4c4c4c;
      margin-bottom: 0.6rem;
      &::after {
        content: "";
        background: #2a6ec1;
        width: 1.1rem;
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
      letter-spacing: 0.01rem;
      line-height: 0.35rem;
      color: #808080;
      margin-bottom: 0.3rem;
    }
    .line {
      background-image: url("../assets/img/service/icon.png");
      background-size: 11.4rem 10rem;
      width: 10.96rem;
      height: 0.02rem;
      background-position: 0 -4.89rem;
      margin: 0.8rem auto 0 auto;
    }
    .form{
      width: 12rem;
      margin: 0.45rem auto;
      display: flex;
      display: -webkit-flex;
      flex-wrap: wrap;
      justify-content: space-between;
      p{
        margin-bottom: 0.1rem;
      }
      .box{
        width: 5.6rem;
        input{
          width: 5.6rem;
          height: 0.6rem;
          border-radius: 0.05rem;
          border: 1px solid #cacaca;
          outline: none;
          font-size: 0.2rem;
          text-indent: 0.2rem;
          margin-bottom: 0.2rem;
        }
        p{
          font-size: 0.2rem;
          margin-bottom: 0.1rem;
        }
      }
      textarea{
        width: 11.96rem;
        height: 2rem;  
        border-radius: 0.05rem;
        outline: none;
        border: 1px solid #cacaca;
        text-indent: 0.2rem;
        font-size: 0.2rem;
      }
      .blue{
        color:#2a6ec1;
      }
      .btn{
        width: 100%;
        height: 0.6rem;
        background: #5497dd;
        border-radius: 0.1rem;
        margin-top: 0.35rem;
        line-height: 0.6rem;
        text-align: center;
        color: white;
        font-size: 0.2rem;
        cursor: pointer;
        transition: .3s;
        &:hover{
          font-size: 0.24rem;
        }
      }
    }
  }
}
</style>