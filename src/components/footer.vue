<template>
  <div class="footer">
      <div class="content">
          <ul>
              <li v-for="(item,index) in list" :key="index">
                  <router-link :to="item.url">{{item.name}}</router-link>
              </li>
          </ul>
          <p>{{$t('footer.copyright')}}</p>
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        
    };
  },
  computed: {
      list(){
          return [
            {
                name:this.$t("footer.nav1"),
                url:{path:'media'}
            },
            {
                name:this.$t("footer.nav2"),
                url:{path:'career'}
            },
            {
                name:this.$t("footer.nav3"),
                url:{path:'privacy'}
            },
            {
                name:this.$t("footer.nav4"),
                url:{path:'faq'}
            }
        ]
      }
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang='less' scoped>
.footer{
    width: 100%;
    height: 1.26rem;
    background: black;
    position: absolute;
    bottom: 0;
    .content{
        ul{
            margin:0.32rem auto 0.3rem auto;
            width: 9.4rem;
            li{
                
                display: inline-block;
                font-size: 0.18rem;
                width: 2.35rem;
                text-align: center;
                border-right: 1px solid #e5e5e5;
                &:nth-of-type(4){
                    border-right:none;
                }
                a{
                    color: #e5e5e5;
                }
            }
        }
        p{
            color:#b2b2b2;
            text-align: center;
            font-size: 0.18rem;
        }
    }
}
@media (min-device-width: 375px) and (max-device-width: 812px){
    .footer{
        height: 2.6rem;

        .content{
            ul{
                width: 14rem;
                li{
                    font-size: 0.4rem;
                    width: 3.2rem;
                }
            }
            p{
                font-size: 0.32rem;
            }
        }
    }
}
</style>