<style lang="stylus">
.tomato-wrapper {
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 81, 0, 1);
  overflow: hidden;
  position: relative;
}

.tomato-container {
  width: 1280px;
  height: 1280px;
  margin-top: calc((-1280px / 3));
  margin-left: calc((-1280px / 4));
  border-radius: 50%;
  background: rgba(255, 255, 255, 1);
}

.tomato {
  position: absolute;
  padding: 10px;
  top: 0;
  left: 0;
  width: 600px
  height: 600px

  img {
    width: 20px;
  }
}
</style>
<template lang="pug">
.tomato-wrapper
  .tomato-container
  .tomato
    img(src="~/assets/images/icons/tomato.svg")
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
