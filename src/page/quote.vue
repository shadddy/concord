<template>
  <div class="quote">
    <my-head></my-head>
    <my-dialog></my-dialog>
    <div class="inner-banner"></div>
    <div class="content">
      <h1>{{$t('quote.name1')}}</h1>
      <h3>{{$t('quote.name2')}}</h3>
      <p style="text-align:center;">{{$t('quote.text')}}</p>
      <div class="line"></div>
      <ul>
        <li class="business">
          <p>{{$t('quote.business')}}</p>
          <input type="text">
        </li>
        <li class="title">
          <p>{{$t('quote.title')}}</p>
          <input type="text">
        </li>
        <li>
          <p>{{$t('quote.name')}}<span class="blue">(*)</span></p>
          <input type="text">
        </li>
        <li>
          <p>{{$t('quote.company')}}<span class="blue">(*)</span></p>
          <input type="text">
        </li>
        <li>
          <p>{{$t('quote.phone')}}<span class="blue">(*)</span></p>
          <input type="text">
        </li>
        <li>
          <p>{{$t('quote.email')}}<span class="blue">(*)</span></p>
          <input type="text">
        </li>
        <li>
          <p>{{$t('quote.city')}}<span class="blue">(*)</span></p>
          <input type="text">
        </li>
        <li>
          <p>{{$t('quote.subject')}}<span class="blue">(*)</span></p>
          <input type="text">
        </li>
        <li class="message">
          <p>{{$t('quote.message')}}</p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </li>
      </ul>
      <div class="btn">
        {{$t('quote.send')}}
      </div>
    </div>
    <my-foot></my-foot>
  </div>
</template>

<script>
import myHead from "@/components/header";
import myFoot from "@/components/footer";
import myDialog from "@/components/dialog"
export default {
  components: {
    myHead,
    myFoot,
    myDialog
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang='less' scoped>
.quote {
  overflow: hidden;
  .inner-banner {
    background-position: 0 -58.5rem;
  }
  .footer {
    position: relative;
    padding-top: 0.01rem;
  }
  .content {
    width: 12rem;
    margin: 0 auto;
    h1 {
      color: #333;
      font-family: "biminbold";
      font-size: 0.42rem;
      text-align: center;
      position: relative;
      margin-bottom: 0.6rem;
      margin-top: 0.6rem;
      line-height: 1.5;
      &::after {
        content: "";
        background: #2a6ec1;
        width: 2rem;
        height: 0.06rem;
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -0.1rem;
      }
    }
    h3 {
      color: #333333;
      font-size: 0.24rem;
      text-align: center;
      font-family: "HelveticaExt";
      margin-bottom: 0.24rem;
    }
    p {
      font-family: "HelveticaExt";
      color: #333333;
      font-size: 0.2rem;
    }
    .line {
      background-image: url("../assets/img/service/icon.png");
      background-size: 11.4rem 10rem;
      width: 10.96rem;
      height: 0.02rem;
      background-position: 0 -4.89rem;
      margin: 0.4rem auto 0.4rem auto;
    }
    ul {
      width: 100%;
      display: flex;
      display: -webkit-flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 5.6rem;
        position: relative;
        p{
          margin-bottom: 0.16rem;
        }
        input {
          border-radius: 0.05rem;
          border: 1px solid #cacaca;
          outline: none;
          font-size: 0.2rem;
          text-indent: 0.2rem;
          margin-bottom: 0.2rem;
          width: 100%;
          height: 0.6rem;

        }
        textarea{
          width: 100%;
          height: 2rem;
          border-radius: 0.05rem;
          border: 1px solid #cacaca;
          outline: none;
          font-size: 0.2rem;
          text-indent: 0.2rem;
          padding-top: 0.1rem;
        }
        &.business,&.title,&.message{
          width: 100%;
        }
        .blue{
           color:#2a6ec1;
           margin-left: 0.05rem;
        }
      }
    }
    .btn{
        width: 100%;
        height: 0.6rem;
        background: #5497dd;
        border-radius: 0.1rem;
        margin-top: 0.35rem;
        margin-bottom: 2rem;
        font-family: "HelveticaExt";
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
</style>