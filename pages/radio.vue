<style lang="stylus">
.radio-wrapper {
  display: flex;
}

.radio-zone {
  width: calc(100% - 80px);
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  .album {
    width: 462px;
    height: calc(100% - 100px);
    background-image: url('~assets/images/audio/astist_photo.png');
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 31px 62px 31px 31px;
  }

  .radio {
    width: calc(100% - 462px);
    height: calc(100% - 100px);
    background-color: #000000;
  }

  .tool {
    width: 100%;
    height: 100px;
  }
}

.navegation {
  width: 80px;
  height: 100%;
  background-color: #4B3434;
}
</style>
<template lang="pug">
.radio-wrapper
  .radio-zone
    .album
      .artist
        .title Artist
        .name ED SHEERAN
      .fellower
        .number 252,134
        .title FOLLOWERS
        button FOLLOWing
        button PLAY
    .radio
    .tool
  .navegation
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
