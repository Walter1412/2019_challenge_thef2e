<style lang="stylus">
.card-register
  width 110px
  height 145px
  border 1px solid lightgray
  border-radius 20px
  position relative

  .card-register__card
    position absolute
    top 0
    left 0
    width 100%
    height 100%
</style>
<template lang="pug">
.card-register(ref="cardRegister")
  .card-register__card
    Card(:cardInfo="fullValue")

</template>

<script>
import Card from '~/components/solitaire/Card.vue'
export default {
  components: {
    Card
  },
  props: {
    value: {
      type: [Number],
      default: () => {
        return {}
      }
    },
    chooseCard: {
      type: [Number],
      default: () => {
        return {}
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
    this.$refs.cardRegister.addEventListener('drop', this.onDrop)
    this.$refs.cardRegister.addEventListener('dragenter', this.cancelDefault)
    this.$refs.cardRegister.addEventListener('dragover', this.cancelDefault)
  },
  methods: {
    onDrop(event) {
      if (this.fullValue !== -1) {
        return false
      }
      this.fullValue = this.chooseCard
      this.$emit('drop', event)
    },
    cancelDefault(event) {
      event.preventDefault()
      event.stopPropagation()
      return false
    }
  }
}
</script>
