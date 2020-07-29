<template lang="pug">
  .v-itemHorizontal__container
    .v-itemHorizontal__image
      img(:src="require(`../assets/images/items/${image}`)")

    .v-itemHorizontal__title
      h3.v-itemHorizontal__heading {{ title }}
      span.v-itemHorizontal__disclamer Минимальный заказ&nbsp;
      span.v-itemHorizontal__disclamer-value {{ minOrder }}{{ unit }}

    .v-itemHorizontal__prices
      .v-itemHorizontal__clubCost
        span.v-itemHorizontal__clubCost-title Клубная:&nbsp;
          span.v-itemHorizontal__clubCost-value {{ clubCost }},00 ₽&nbsp;
          | за {{ unit }}
      .v-itemHorizontal__cost
        span.v-itemHorizontal__cost-title Розница:&nbsp;
          span.v-itemHorizontal__cost-value {{ cost }},00 ₽&nbsp;
          | за {{ unit }}

    .v-itemHorizontal__shopping
      .v-itemHorizontal__article
        span Артикул:&nbsp;
        span.article-value {{ article }}

      .v-itemHorizontal__counter
        .v-itemHorizontal__counter-wrapper
          button.decrease(type="button" @click="counter = decreaseValue(counter);") –
          input.v-itemHorizontal__quantity(
            type="number",
            name="quantity",
            v-model="counter",
            min="1",
            step="1"
          )
          button.increase(type="button" @click="counter = increaseValue(counter);") +

        .v-itemHorizontal__add-to-cart
          img(:src="require('../assets/images/icons/cart.svg')")

      .v-itemHorizontal__one-click-buy(@click="openOneClickBuyPopup")
        img.one-click-buy__icon(:src="require('../assets/images/icons/cursor.svg')")
        span.one-click-buy__title Заказать в 1 клик
    .v-itemHorizontal__favorite
      img(:src="require('../assets/images/icons/heart-big.png')")

</template>

<script>
export default {
  name: 'ItemHorizontal',
  props: {
    image: {
      type: String,
      default: () => 'item-1.png'
    },
    minOrder: {
      type: Number,
      default: () => 1
    },
    title: {
      type: String,
      default: () => ''
    },
    clubCost: {
      type: Number,
      default: () => 0
    },
    cost: {
      type: Number,
      default: () => 0
    },
    unit: {
      type: String,
      default: () => 'шт.'
    },
    article: {
      type: String,
      default: () => ''
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
    },
    openOneClickBuyPopup() {
      this.$root.$emit('openOneClickBuyPopup')
    }
  }
}
</script>

<style lang="sass">
.v-itemHorizontal
  &__container
    display: flex
    flex-direction: row
    align-items: center
    // justify-content: space-between
    width: 1406px
    padding: 0px 62px 0px 41px
    border: 1px solid $gray-4
    &:not(:first-child)
      margin-top: -1px

  &__title
    margin-left: 37px
    max-width: 450px

  &__heading
    font-size: 24px
    font-weight: 700
    line-height: 28px
    letter-spacing: .07em
    color: $text

  &__disclamer, &__disclamer-value
    font-size: 24px
    font-weight: 700
    line-height: 28px
    letter-spacing: .07em

  &__disclamer
    color: $gray-4

  &__disclamer-value
    color: $text

  &__prices
    margin-left: 22px

  &__clubCost
    margin-bottom: 10px

  &__clubCost-title, &__cost-title
    font-size: 20px
    line-height: 30px
    letter-spacing: .07em
    text-transform: lowercase

  &__clubCost-title
    color: $red

  &__cost-title
    color: $text

  &__clubCost-value, &__cost-value
    font-size: 26px
    font-weight: 700

  &__shopping
    margin-left: 30px

  &__article
    display: block
    background-color: $gray-3
    padding: 8px 0px
    font-size: 16px
    line-height: 19px
    letter-spacing: .07em
    text-align: center
    margin-bottom: 10px
    .article-value
      font-weight: 700

  &__quantity
    width: 126px
    text-align: center
    padding: 4px 0px
    border: 2px solid $yellow
    font-size: 24px
    line-height: 28px
    letter-spacing: .07em
    &:active, &:focus
      outline: none
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button
      -webkit-appearance: none
      margin: 0
  input[type=number]
    -moz-appearance: textfield

  &__counter
    display: flex
    flex-direction: row
    .increase, .decrease
      width: 40px
      height: 40px
      border: 2px solid $yellow
      background-color: $gray-3
      font-size: 24px
      font-weight: 700
      cursor: pointer
      &:active, &:focus
        outline: none
    .increase
      margin-left: -2px
    .decrease
      margin-right: -2px
    &-wrapper
      margin-bottom: 10px

  &__add-to-cart
    margin-left: 9px

  &__one-click-buy
    display: flex
    align-items: center
    justify-content: center
    border: 1px dashed $red
    padding: 8px 0px 8px 0px
    cursor: pointer
    .one-click-buy
      &__icon
        margin-right: 6px
      &__title
        letter-spacing: .07em
        color: $text
  &__favorite
    img
      position: relative
      left: 75px
      bottom: 80px
</style>
