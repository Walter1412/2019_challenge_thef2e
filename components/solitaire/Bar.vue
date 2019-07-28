<style lang="stylus">
.bar
  height 62px
  display flex
  justify-content space-between

  &__logo
    height 100%

  &__tool
    &-time
      padding 0 10px
      font-size 20px
      color white
  &__score
    &-number
      padding 0 10px
      font-size 20px
      color white
</style>
<template lang="pug">
.bar
  img.bar__logo(src="~assets/images/solitaire/logo.png")
  .bar__tool
    img.bar__tool-more(src="~assets/images/solitaire/more.svg")
    span.bar__tool-time Time 00:00
    img.bar__tool-return(src="~assets/images/solitaire/return.svg")
  .bar__score
    img.bar__score-logo(src="~assets/images/solitaire/bone.svg")
    span.bar__score-number Score:00
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
