<template lang="pug">
  #v-popular-items
    .v-popular-items__heading-wrapper
      h2.v-popular-items__heading Популярные товары
      img.v-main-map__heading-icon(src="~@/assets/images/icons/popular.png")
    .v-popular-items__list
      .v-popular-items__list-item(v-for="item in popularItemsList")
        .v-popular-items__favorite-mark
          img(src="~@/assets/images/icons/heart.png")
        .v-popular-items__image
          img(:src="require('../assets/images/popular-items--' + item.image)")
        .v-popular-items__title
          span {{ item.title }}
        .v-popular-items__clubCost
          span клубная: {{ item.clubCost }} ₽ за {{ item.unit }}
        .v-popular-items__cost
          span розница: {{ item.cost }} ₽ за {{ item.unit }}
        .v-popular-items__article-wrapper
          span Артикул:
          span.article {{ item.article }}
        .v-popular-items__counter
          button.decrease(type="button" @click="item.counter = decreaseValue(item.counter);") -
          input.quantity_value(
            type="number",
            name="quantity",
            v-model="item.counter",
            min="1",
            step="1"
          )
          button.increase(type="button" @click="item.counter = increaseValue(item.counter);") +
        .v-popular-items__shop
          span В корзину
    .v-sales-items__heading-wrapper
      h2.v-sales-items__heading Товары со скидкой
      img.v-sales-items__heading-icon(src="~@/assets/images/icons/sale.png")
    .v-popular-items__list
      .v-popular-items__list-item(v-for="item in popularItemsList")
        .v-popular-items__favorite-mark
          img(src="~@/assets/images/icons/heart.png")
        .v-popular-items__image
          img(:src="require('../assets/images/popular-items--' + item.image)")
        .v-popular-items__title
          span {{ item.title }}
        .v-popular-items__clubCost
          span клубная: {{ item.clubCost }} ₽ за {{ item.unit }}
        .v-popular-items__cost
          span розница: {{ item.cost }} ₽ за {{ item.unit }}
        .v-popular-items__article-wrapper
          span Артикул:
          span.article {{ item.article }}
        .v-popular-items__counter
          button.decrease(type="button" @click="item.counter = decreaseValue(item.counter);") -
          input.quantity_value(
            type="number",
            name="quantity",
            v-model="item.counter",
            min="1",
            step="1"
          )
          button.increase(type="button" @click="item.counter = increaseValue(item.counter);") +
        .v-popular-items__shop
          span В корзину
</template>

<script>
export default {
  name: 'PopularItems',
  props: {
    popularItemsList: {
      type: Array,
      default: () => []
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
      if (temp > 1) {
        temp -= 1
      }
      return temp
    }
  }
}
</script>

<style lang="sass">
.v-popular-items
  &__heading
    padding: 16px 0px
    transform: matrix(-1, 0, 0, 1, 0, 0)
    font-weight: 700
    font-size: 24px
    letter-spacing: .07em
    text-transform: uppercase
    text-align: center
    color: white
    &-icon
      margin-right: 15px
      align-self: center
      transform: matrix(-1, 0, 0, 1, 0, 0)

  &__heading-wrapper
    padding: 15px 0px
    background-image: url('~@/assets/images/divider.png')
    background-position: 25% 50%
    background-repeat: no-repeat
    transform: matrix(-1, 0, 0, 1, 0, 0)
    display: flex
    flex-direction: row-reverse
    justify-content: center

  &__list
    margin: 0px 160px 30px 160px
    display: grid
    grid-gap: 25px
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr

  &__list-item
    background-color: white
    border: 2px solid #cdcdcd
    box-sizing: border-box
    position: relative
    max-width: 300px

  &__favorite-mark
    position: absolute
    right: 0
    margin: 8px
    cursor: pointer
    z-index: 1

  &__image
    display: flex
    justify-content: center
    align-items: center
    position: relative
    box-sizing: border-box
    margin: 10px
    padding: 20px
    border-bottom: 1px solid $text

  &__title
    display: flex
    justify-content: center
    align-items: center
    margin: 0 20px 25px 20px
    padding: 15px 30px
    & > *
      font-weight: 400
      text-align: center
      font-size: 18px
      letter-spacing: .07em
      color: $text
      line-height: 21px

  &__clubCost, &__cost
    margin: 0px 20px
    padding: 0px 15px
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
    font-weight: 700

.v-sales-items
  &__heading-wrapper
    padding: 15px 0px
    background-image: url('~@/assets/images/divider.png')
    background-position: 25% 50%
    background-repeat: no-repeat
    // transform: matrix(-1, 0, 0, 1, 0, 0)
    display: flex
    justify-content: center
  &__heading
    padding: 16px 0px
    // transform: matrix(-1, 0, 0, 1, 0, 0)
    font-weight: 700
    font-size: 24px
    letter-spacing: .07em
    text-transform: uppercase
    text-align: center
    color: white
    &-icon
      margin-left: 15px
      align-self: center
</style>
