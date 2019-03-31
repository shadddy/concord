<template>
  <div class="quote">
    <my-head></my-head>
    <div class="inner-banner"></div>
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
.quote {
  overflow: hidden;
  .inner-banner {
    background-position: 0 -58.5rem;
  }
}
</style>