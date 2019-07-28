<style lang="stylus">
.card
  width 110px
  height 145px
  border 1px solid lightgray
  border-radius 20px

  &[data-type='0']
    &[data-number='0']
      background-image url('~assets/images/solitaire/spades1.png')

    &[data-number='1']
      background-image url('~assets/images/solitaire/spades2.png')

    &[data-number='2']
      background-image url('~assets/images/solitaire/spades3.png')

    &[data-number='3']
      background-image url('~assets/images/solitaire/spades4.png')

    &[data-number='4']
      background-image url('~assets/images/solitaire/spades5.png')

    &[data-number='5']
      background-image url('~assets/images/solitaire/spades6.png')

    &[data-number='6']
      background-image url('~assets/images/solitaire/spades7.png')

    &[data-number='7']
      background-image url('~assets/images/solitaire/spades8.png')

    &[data-number='8']
      background-image url('~assets/images/solitaire/spades9.png')

    &[data-number='9']
      background-image url('~assets/images/solitaire/spades10.png')

    &[data-number='10']
      background-image url('~assets/images/solitaire/spades11.png')

    &[data-number='11']
      background-image url('~assets/images/solitaire/spades12.png')

    &[data-number='12']
      background-image url('~assets/images/solitaire/spades13.png')

  &[data-type='1']
    &[data-number='0']
      background-image url('~assets/images/solitaire/hearts1.png')

    &[data-number='1']
      background-image url('~assets/images/solitaire/hearts2.png')

    &[data-number='2']
      background-image url('~assets/images/solitaire/hearts3.png')

    &[data-number='3']
      background-image url('~assets/images/solitaire/hearts4.png')

    &[data-number='4']
      background-image url('~assets/images/solitaire/hearts5.png')

    &[data-number='5']
      background-image url('~assets/images/solitaire/hearts6.png')

    &[data-number='6']
      background-image url('~assets/images/solitaire/hearts7.png')

    &[data-number='7']
      background-image url('~assets/images/solitaire/hearts8.png')

    &[data-number='8']
      background-image url('~assets/images/solitaire/hearts9.png')

    &[data-number='9']
      background-image url('~assets/images/solitaire/hearts10.png')

    &[data-number='10']
      background-image url('~assets/images/solitaire/hearts11.png')

    &[data-number='11']
      background-image url('~assets/images/solitaire/hearts12.png')

    &[data-number='12']
      background-image url('~assets/images/solitaire/hearts13.png')

  &[data-type='2']
    &[data-number='0']
      background-image url('~assets/images/solitaire/clubs1.png')

    &[data-number='1']
      background-image url('~assets/images/solitaire/clubs2.png')

    &[data-number='2']
      background-image url('~assets/images/solitaire/clubs3.png')

    &[data-number='3']
      background-image url('~assets/images/solitaire/clubs4.png')

    &[data-number='4']
      background-image url('~assets/images/solitaire/clubs5.png')

    &[data-number='5']
      background-image url('~assets/images/solitaire/clubs6.png')

    &[data-number='6']
      background-image url('~assets/images/solitaire/clubs7.png')

    &[data-number='7']
      background-image url('~assets/images/solitaire/clubs8.png')

    &[data-number='8']
      background-image url('~assets/images/solitaire/clubs9.png')

    &[data-number='9']
      background-image url('~assets/images/solitaire/clubs10.png')

    &[data-number='10']
      background-image url('~assets/images/solitaire/clubs11.png')

    &[data-number='11']
      background-image url('~assets/images/solitaire/clubs12.png')

    &[data-number='12']
      background-image url('~assets/images/solitaire/clubs13.png')

  &[data-type='3']
    &[data-number='0']
      background-image url('~assets/images/solitaire/diamonds1.png')

    &[data-number='1']
      background-image url('~assets/images/solitaire/diamonds2.png')

    &[data-number='2']
      background-image url('~assets/images/solitaire/diamonds3.png')

    &[data-number='3']
      background-image url('~assets/images/solitaire/diamonds4.png')

    &[data-number='4']
      background-image url('~assets/images/solitaire/diamonds5.png')

    &[data-number='5']
      background-image url('~assets/images/solitaire/diamonds6.png')

    &[data-number='6']
      background-image url('~assets/images/solitaire/diamonds7.png')

    &[data-number='7']
      background-image url('~assets/images/solitaire/diamonds8.png')

    &[data-number='8']
      background-image url('~assets/images/solitaire/diamonds9.png')

    &[data-number='9']
      background-image url('~assets/images/solitaire/diamonds10.png')

    &[data-number='10']
      background-image url('~assets/images/solitaire/diamonds11.png')

    &[data-number='11']
      background-image url('~assets/images/solitaire/diamonds12.png')

    &[data-number='12']
      background-image url('~assets/images/solitaire/diamonds13.png')
</style>
<template lang="pug">
.card(ref="card" draggable="true" :data-type="Math.floor(cardInfo  / 13)" :data-number="cardInfo % 13")
</template>

<script>
export default {
  props: {
    cardInfo: {
      type: [Number],
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$refs.card.addEventListener('dragstart', event => {
      this.$emit('dragstart', event)
    })
  },
  methods: {}
}
</script>
