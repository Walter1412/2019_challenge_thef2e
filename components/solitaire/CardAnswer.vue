<style lang="stylus">
.card-answer
  width 110px
  height 145px
  border 1px solid lightgray
  border-radius 20px
  position relative
  background-size 48px 48px
  background-position center center
  background-repeat no-repeat

  &[data-background-type='0']
    background-image url('~assets/images/solitaire/spades.png')

  &[data-background-type='1']
    background-image url('~assets/images/solitaire/hearts.png')

  &[data-background-type='2']
    background-image url('~assets/images/solitaire/clubs.png')

  &[data-background-type='3']
    background-image url('~assets/images/solitaire/diamonds.png')

  .card-answer__card
    position absolute
    top 0
    left 0
    width 100%
    height 100%
</style>
<template lang="pug">
.card-answer(ref="cardAnswer" :data-background-type="backgroundType")
  .card-answer__card

</template>

<script>
export default {
  components: {},
  props: {
    value: {
      type: [Array],
      default: () => {
        return {}
      }
    },
    backgroundType: {
      type: [String],
      default: () => {
        return ''
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    fullValue: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.$refs.cardAnswer.addEventListener('drop', this.onDrop)
    this.$refs.cardAnswer.addEventListener('dragenter', this.cancelDefault)
    this.$refs.cardAnswer.addEventListener('dragover', this.cancelDefault)
  },
  methods: {
    onDrop(event) {},
    cancelDefault(event) {
      event.preventDefault()
      event.stopPropagation()
      return false
    }
  }
}
</script>
