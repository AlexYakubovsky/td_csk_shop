<template lang="pug">
  .v-itemHSmall
    .v-itemHSmall__main-container
      .v-itemHSmall__image-content
        img.v-itemHSmall__favorite(:src="require('../assets/images/icons/heart.png')")
        img.v-itemHSmall__image(:src="require(`../assets/images/items/${image}`)")
        span.v-itemHSmall__article Артикул:&nbsp;
          span.article-value {{ article }}
      .v-itemHSmall__container
        h4.v-itemHSmall__heading {{ title }}
        .v-itemHSmall__body
          .v-itemHSmall__counter
            button.decrease(type="button" @click="counter = decreaseValue(counter);") –
            input.quantity-counter(type="number" name="quantity" v-model="counter" min="1" step="1")
            button.increase(type="button" @click="counter = increaseValue(counter);") +
          .v-itemHSmall__prices
            span.prices__clubcost клубная: {{ clubCost }},00₽ за {{ unit }}
            span.prices__cost розница: {{ cost }},00₽ за {{ unit }}

    .v-itemHSmall__summary-wrapper
      .v-itemHSmall__summary
        h6 Итого
        span {{ counter * cost }},00₽

</template>

<script>
export default {
  name: 'ItemHorizontalSmall',
  props: {
    image: {
      type: String,
      default: '',
      required: true
    },
    article: {
      type: [String, Number],
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    cost: {
      type: Number,
      default: 0
    },
    clubCost: {
      type: Number,
      default: 0
    },
    unit: {
      type: String,
      default: 'шт.'
    }
  },
  data() {
    return {
      counter: 1
    }
  },
  methods: {
    increaseValue(value) {
      let temp = value
      temp += 1
      return temp
    },
    decreaseValue(value) {
      let temp = value
      if (temp > 1) temp -= 1
      return temp
    }
  }
}
</script>

<style lang="sass">
.v-itemHSmall
  &__main-container
    position: relative
    display: flex
    flex-direction: row
    border: 1px solid $gray-4
    padding: 10px
    margin-bottom: 5px
  &__image-content
    display: flex
    flex-direction: column
    align-items: flex-start
  &__favorite
    position: absolute
    width: 14px
    height: auto
    top: 10px
    left: 8px
    cursor: pointer
  &__image
    width: 90px
    height: auto
    margin: 10px 24px 0px 10px

  &__article
    margin-left: 10px
    margin-top: 5px
    font-size: 10px
    letter-spacing: .07em
    line-height: 12px
    .article-value
      font-weight: 700

  &__container
    display: flex
    flex-direction: column

  &__heading
    margin-top: 0px
    margin-bottom: 32px
    padding: 0px 32px
    font-size: 14px
    font-weight: 400
    letter-spacing: .07em
    text-align: center

  &__body
    display: flex
    flex-direction: row

  &__counter
    display: flex
    flex-direction: row
    .quantity-counter
      max-width: 60px
      text-align: center
      font-weight: 700
      border: 2px solid $yellow
      &:active, &:focus
        outline: none
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button
        -webkit-appearance: none
        margin: 0
    input[type=number]
      -moz-appearance: textfield

    .decrease, .increase
      border: 2px solid $yellow
      background-color: $gray-1
      font-weight: 700
      font-size: 18px
      cursor: pointer
      &:active, &:focus
        outline: none
    .decrease
      margin-right: -2px
    .increase
      margin-left: -2px

  &__prices
    font-size: 12px
    font-weight: 700
    letter-spacing: .07em
    margin-left: 16px
    .prices__clubcost, .prices__cost
      display: inline-block
    .prices__clubcost
      color: $red
      margin-bottom: 4px

  &__summary
    background-image: url('../assets/images/items/summary-bg.png')
    background-repeat: no-repeat
    background-size: contain
    display: flex
    flex-direction: column
    width: 170px
    height: 70px
    &-wrapper
      display: flex
      flex-direction: row-reverse
    h6, span
      margin-left: 30px
      font-size: 12px
      font-weight: 700
      letter-spacing: .07em
      line-height: 14px
      color: white
    h6
      margin-top: 17px
      margin-bottom: 2px
    span
      display: inline-block
      padding-left: 1px
</style>
