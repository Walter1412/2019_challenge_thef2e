<style lang="stylus">
.solitaire-wrapper
  background-size contain
  background-position center center
  background-image url('~assets/images/solitaire/background.png')
  font-family 'Press Start 2P'

.solitaire-container
  padding 40px 0

.solitaire
  width 100%
  height calc(100% - 62px)
  text-align center

.register
  width 100%
  display flex
  justify-content space-between

.helper-list
  display flex
  justify-content space-between
  padding-bottom 10px

  &-zone
    display flex
    justify-content space-between
    width 50%

    &:nth-child(1)
      padding-right 80px

    &:nth-child(2)
      padding-left 80px

.pocker-list
  display flex
  justify-content space-between
  padding-bottom 10px
  height calc(100% - 207px)

  &-zone
    width 50%

    &:nth-child(1)
      padding-right 80px

    &:nth-child(2)
      padding-left 80px

.pocker-item
  position relative
  display inline-block
  width calc((100% / 4))
  height 100%

  for num in (1 .. 30)
    $top = num * 45

    :nth-child({num})
      position absolute
      top $top px
      left 0
</style>
<template lang="pug">
.solitaire-wrapper
  .solitaire-container
    .solitaire
      Bar
      .helper-list
        .helper-list-zone
          .helper-item
            CardRegister(v-model="registerList[0]" :chooseCard="chooseCard" @drop="deleteCard")
          .helper-item
            CardRegister(v-model="registerList[1]" :chooseCard="chooseCard" @drop="deleteCard")
          .helper-item
            CardRegister(v-model="registerList[2]" :chooseCard="chooseCard" @drop="deleteCard")
          .helper-item
            CardRegister(v-model="registerList[3]" :chooseCard="chooseCard" @drop="deleteCard")
        .helper-list-zone
          .helper-item
            CardAnswer(v-model="answerList[0]" backgroundType="0")
          .helper-item
            CardAnswer(v-model="answerList[1]" backgroundType="1")
          .helper-item
            CardAnswer(v-model="answerList[2]" backgroundType="2")
          .helper-item
            CardAnswer(v-model="answerList[3]" backgroundType="3")
      .pocker-list
        .pocker-list-zone
          .pocker-item
            template(v-for="item in cards[0]")
              Card(:cardInfo="item" @dragstart="dragStart")
          .pocker-item
            template(v-for="item in cards[1]")
              Card(:cardInfo="item" @dragstart="dragStart")
          .pocker-item
            template(v-for="item in cards[2]")
              Card(:cardInfo="item" @dragstart="dragStart")
          .pocker-item
            template(v-for="item in cards[3]")
              Card(:cardInfo="item" @dragstart="dragStart")
        .pocker-list-zone
          .pocker-item
            template(v-for="item in cards[4]")
              Card(:cardInfo="item" @dragstart="dragStart")
          .pocker-item
            template(v-for="item in cards[5]")
              Card(:cardInfo="item" @dragstart="dragStart")
          .pocker-item
            template(v-for="item in cards[6]")
              Card(:cardInfo="item" @dragstart="dragStart")
          .pocker-item
            template(v-for="item in cards[7]")
              Card(:cardInfo="item" @dragstart="dragStart")
</template>
<script>
import Bar from '~/components/solitaire/Bar.vue'
import Card from '~/components/solitaire/Card.vue'
import CardRegister from '~/components/solitaire/CardRegister.vue'
import CardAnswer from '~/components/solitaire/CardAnswer.vue'
export default {
  components: {
    Bar,
    Card,
    CardRegister,
    CardAnswer
  },
  props: {},
  data() {
    return {
      registerList: [-1, -1, -1, -1],
      answerList: [[], [], [], []],
      chooseCard: -1,
      cards: [[], [], [], [], [], [], [], []]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.shuffle()
    },
    shuffle() {
      const sArray = []
      for (let index = 0; index < 52; index++) {
        sArray.push(index)
      }
      let i = sArray.length
      let j = 0
      let temp = ''

      while (i--) {
        j = Math.floor(Math.random() * (i + 1))

        // swap randomly chosen element with current element
        temp = sArray[i]
        sArray[i] = sArray[j]
        sArray[j] = temp
      }
      this.cards[0] = sArray.slice(0, 7)
      this.cards[1] = sArray.slice(7, 14)
      this.cards[2] = sArray.slice(14, 21)
      this.cards[3] = sArray.slice(21, 28)
      this.cards[4] = sArray.slice(28, 34)
      this.cards[5] = sArray.slice(34, 40)
      this.cards[6] = sArray.slice(40, 46)
      this.cards[7] = sArray.slice(46, 52)
      this.$forceUpdate()
    },
    dragStart(event) {
      const { type, number } = event.toElement.dataset
      this.chooseCard = parseInt(type) * 13 + parseInt(number)
    },
    deleteCard(event) {
      for (let i = 0; i < this.cards.length; i++) {
        const element = this.cards[i]
        for (let j = 0; j < element.length; j++) {
          if (element[j] === this.chooseCard) {
            element.splice(j, 1)
          }
        }
      }
    }
  }
}
</script>
