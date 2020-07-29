<template lang="pug">
  .v-item
    .v-item__favorite-mark
        img(:src="require('../assets/images/icons/heart.png')")

    //- TODO: Использовать Vuex вместо передачи параметров в роут
    nuxt-link(:to="{ name: 'itemCard', params: { article: article, title: title, clubCost: clubCost, cost: cost, unit: unit }}")
      .v-item__image
        img(:src="require(`../assets/images/items/${image}`)")
      .v-item__title
        span {{ title }}

    .v-item__clubCost
      span клубная: {{ clubCost }} ₽ за {{ unit }}

    .v-item__cost
      span розница: {{ cost }} ₽ за {{ unit }}

    .v-item__article-wrapper
      span Артикул:
      span.article {{ article }}

    .v-item__counter
      button.decrease(type="button" @click="counter = decreaseValue(counter);") -
      input.quantity_value(
        type="number",
        name="quantity",
        v-model="counter",
        min="1",
        step="1"
      )
      button.increase(type="button" @click="counter = increaseValue(counter);") +

    .v-item__shop(@click="addToCart()")
      span.v-item__addToCart В корзину
</template>

<script>
export default {
  name: 'Item',
  props: {
    image: {
      type: String,
      default: () => ''
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
      type: [String, Number],
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
    addToCart() {
      const item = {
        article: this.article,
        title: this.title,
        image: this.image,
        cost: this.cost,
        quantity: this.counter
      }
      this.$store.dispatch('addToCart', item)
    }
  }
}
</script>

<style lang="sass">
.v-item
  background-color: white
  border: 2px solid #cdcdcd
  box-sizing: border-box
  position: relative
  transition: box-shadow .1s ease-out
  margin-right: -2px
  margin-bottom: -2px
  &:hover
    box-shadow: 0px 8px 32px rgba($text, .3)
    z-index: 1100

  &__favorite-mark
    position: absolute
    right: 8px
    top: 8px
    cursor: pointer
    z-index: 1

  &__image
    display: flex
    justify-content: center
    align-items: center
    position: relative
    box-sizing: border-box
    padding: 10px
    margin: 10px
    border-bottom: 1px solid $text
    img
      width: 100%

  &__title
    display: flex
    justify-content: center
    align-items: center
    margin: 0 20px 25px 20px
    & > *
      font-weight: 400
      text-align: center
      font-size: 18px
      letter-spacing: .07em
      color: $text
      line-height: 21px

  &__clubCost, &__cost
    margin: 0px 20px
    display: flex
    justify-content: center
    align-items: center
    height: 20px
    font-weight: 700
    letter-spacing: .07em

  &__clubCost
    margin-top: 4px
    color: $red

  &__article-wrapper
    display: flex
    justify-content: center
    align-items: center
    margin: 10px 28px 0px 28px
    padding: 0px 15px
    font-weight: 400
    letter-spacing: .07em
    height: 25px
    background-color: $yellow
    .article
      display: inline-block
      margin-left: 4px
      font-weight: 700

  &__counter
    display: flex
    justify-content: center
    align-items: center
    margin-top: 15px
    .decrease, .increase
      width: 25px
      background-color: white
      border: 2px solid $yellow
      cursor: pointer
      font-weight: 700
      outline: none
      &:active
        background-color: $yellow
    .decrease
      margin-right: -2px
    .increase
      margin-left: -2px

    .quantity_value
      width: 60px
      background-color: white
      border: 2px solid $yellow
      text-align: center
      cursor: text
      font-weight: 700
      outline: none
      letter-spacing: .07em
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button
        -webkit-appearance: none
        margin: 0
    input[type=number]
      -moz-appearance: textfield

  &__shop
    display: flex
    justify-content: center
    align-items: center
    margin: 15px 75px
    padding: 6px 22px
    font-family: 'Roboto Bold'
    font-size: 16px
    letter-spacing: .07em
    text-transform: uppercase
    background-color: $yellow
    cursor: pointer

  &__addToCart
    font-size: 15px
    font-weight: 700
</style>
