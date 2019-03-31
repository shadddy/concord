<template>
  <div class="header ab flex" :class="{isNotIndex:$route.meta.isIndex==false}">
    <div
      class="logo"
      :style="index_icon"
    ></div>
    <ul>
      <li
        v-for="(item,index) in nav"
        :key="index"
        :class="{act:index==$route.meta.dataIndex}"
      >
        <router-link :to="item.url">{{item.name}}</router-link>
      </li>
    </ul>
    <div class="lang flex">
      <span>EN</span>
      <span>CN</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      index_icon:
        "background-image:url(" +
        require("../assets/img/index/index_icon.png") +
        ")",
      nav: [
        {
          name: this.$t("header.nav.nav1"),
          url:{path:'/'}
        },
        {
          name: this.$t("header.nav.nav2"),
          url:{path:'about'}
        },
        {
          name: this.$t("header.nav.nav3"),
          url:{path:'service'}
        },
        {
          name: this.$t("header.nav.nav4"),
          url:{path:'tool'}
        },
        {
          name: this.$t("header.nav.nav5"),
          url:{path:'location'}
        },
        {
          name: this.$t("header.nav.nav6"),
          url:{path:'tpat'}
        }
      ]
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang='less' scoped>
.header {
  width: 100%;
  height: 1.05rem;
  background: -webkit-linear-gradient(
    rgba(0, 0, 0, 0.2),
    transparent
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    rgba(0, 0, 0, 0.2),
    transparent
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    rgba(0, 0, 0, 0.2),
    transparent
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(rgba(0, 0, 0, 0.2), transparent); /* 标准的语法 */
  z-index: 1000;
  .logo {
    width: 2.17rem;
    height: 0.8rem;
    background-position: -5.9rem -3.7rem;
    background-size: 15rem 8rem;
    margin: 0.25rem 0 0 1.33rem;
  }
   ul {
    margin: 0.54rem 0 0 0.11rem;
    li {
      font-size: 0.24rem;
      display: inline-block;
      font-family: "HelveticaExt-Normal";
      margin-left: 0.89rem;
      position: relative;
      a{
        color: white;
        transition: .3s;
        &:hover{
          color: #1a478b !important;
        }
      }
      &.act{
         a{
           color: #1a478b !important;
         }
      }
      &.act:after{
        content: url('../assets/img/act.png');
        width: 0.27rem;
        height: 0.03rem;
        display: block;
        position: absolute;
        bottom: 0.2rem;
        left: 50%;
        transform: translateX(-50%);

      }
    }
  }
  .lang {
    justify-content: space-between;
    margin: 0.57rem 0 0 2.5rem;
    span {
      color: white;
      font-size: 0.18rem;
      font-family: "HelveticaExt-Normal";
      vertical-align: top;
      position: relative;
      &:nth-of-type(2) {
          margin-left:0.3rem;
        &::before {
          content: "";
          background: white;
          width: 2px;
          height: 0.18rem;
          display: block;
          position: absolute;
          left: -0.16rem;
          top: 0.04rem;
        }
      }
    }
  }
  &.isNotIndex{
    position: relative;
    margin-bottom: 0.35rem;
    background: white;
    ul{
      li{
        color:#666666;
        a{
          color:#666666;
        }
      }
    }
    .lang{
      span{
        color:#666666;
        &:nth-of-type(2){
          &::before{
            background: #666666;
          }
        }
      }
    }
  }
}
</style>