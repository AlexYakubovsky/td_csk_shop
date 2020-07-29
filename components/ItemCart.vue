<template lang="pug">
  tr.v-cart__table-item
    td
      .v-cart__table-item-photo
        img.v-cart__table-item-photo-product-img(:src="require(`../assets/images/items/${image}`)")
        img.v-cart__table-add-favorite(
          :src="require('../assets/images/icons/heart.png')"
          title="Добавить товар в избранное")
    td
      .v-cart__table-item-heading
        h4 {{ title }}
    td
      .v-cart__table-item-article
        span {{ article }}
    td
      .v-cart__table-item-cost
        span {{ cost }} ₽
    td
      .v-cart__table-item-counter
        button.counter-decrease(@click="counter = decreaseValue(counter)") –
        input.counter-field(type="number" name="quantity" v-model="counter" min="1" step="1" @change="onChange($event)")
        button.counter-increase(@click="counter = increaseValue(counter)") +
    td
      .v-cart__table-item-summary
        span.summary-value {{ cost * counter }} ₽
        img.v-cart__table-delete(
          :src="require('../assets/images/cart/trash.png')"
          title="Удалить товар из корзины"
          @click="removeItem()")
</template>

<script>
export default {
  name: 'ItemCart',
  props: {
    image: {
      type: String,
      default: () => ''
    },
    title: {
      type: String,
      default: () => ''
    },
    cost: {
      type: Number,
      default: () => 0
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
    onChange(event) {
      ;+event.target.value <= 0
        ? (this.counter = 1)
        : (this.counter = +event.target.value)
    },
    removeItem() {
      this.$store.dispatch('removeItem', this.article)
    }
  }
}
</script>

<style lang="sass">
.v-cart
  &__table-item
    border: 1px solid $gray-4
    text-align: center
    &-photo
      margin: 10px 50px 10px 40px
      max-width: 119px
      position: relative
      &-product-img
         width: 100%
    &-heading
      text-align: left
      max-width: 290px
      font-size: 18px
      font-weight: 700
      letter-spacing: .07em
      line-height: 21px
    &-article
      font-size: 16px
      font-weight: 700
      line-height: 19px
      letter-spacing: .07em
      width: 108px
    &-cost
      font-weight: 700
      letter-spacing: .07em
      line-height: 19px
      // width: 120px
    &-counter
      .counter-field
        width: 113px
        letter-spacing: .07em
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button
          -webkit-appearance: none
          margin: 0

      .counter-field, .counter-decrease, .counter-increase
        text-align: center
        border: 2px solid $yellow
        font-size: 24px
        line-height: 28px
        &:active, &:focus
          outline: none

      .counter-decrease, .counter-increase
        cursor: pointer

      .counter-decrease
        margin-right: -2px

      .counter-increase
        margin-left: -2px

      input[type=number]
        -moz-appearance: textfield

    &-summary
      position: relative
      display: flex
      align-items: center
      // width: 120px
      font-size: 18px
      font-weight: 700
      line-height: 21px
      letter-spacing: .07em
      justify-content: flex-end
      margin-right: 20px

  &__table-delete
    position: absolute
    right: -75px
    cursor: pointer
  &__table-add-favorite
    position: absolute
    cursor: pointer
    right: 130px
    bottom: 90px
</style>
