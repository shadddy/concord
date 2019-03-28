<template>
  <div class="location">
    <my-head></my-head>
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
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang='less' scoped>
.location{
  overflow: hidden;
  .footer {
    position: relative;
    padding-top: 0.01rem;
  }
}
</style>