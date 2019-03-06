<template>
  <div class="header">
      <ul>
          <li v-for="(item,index) in nav" :key="index">
              {{item.name}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        nav:[{
            name:this.$t('header.nav.nav1')
        },{
            name:this.$t('header.nav.nav2')
        },{
            name:this.$t('header.nav.nav3')
        },{
            name:this.$t('header.nav.nav4')
        },{
            name:this.$t('header.nav.nav5')
        }]
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang='less' scoped>
</style>