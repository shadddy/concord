<template>
  <div class="footer">
      <div class="content">
          <ul>
              <li v-for="(item,index) in list" :key="index">
                  {{item.name}}
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
        list:[
            {
                name:this.$t("footer.nav1"),
                url:{}
            },
            {
                name:this.$t("footer.nav2"),
                url:{}
            },
            {
                name:this.$t("footer.nav3"),
                url:{}
            },
            {
                name:this.$t("footer.nav4"),
                url:{}
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
                color: #e5e5e5;
                display: inline-block;
                font-size: 0.18rem;
                width: 2.35rem;
                text-align: center;
                border-right: 1px solid #e5e5e5;
                &:nth-of-type(4){
                    border-right:none;
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
</style>