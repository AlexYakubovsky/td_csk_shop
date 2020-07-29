<template lang="pug">
  #v-cart
    vBreadcrumbs(:breadcrumbs="breadcrumbs")
    .v-cart
      h1.v-cart__heading Корзина

      .v-cart__content
        .v-cart__table
          .v-cart__table-buttons
            .table-button__add
              img.table-button__add-icon(:src="require('../assets/images/cart/add.svg')")
              span Добавить товар по артикулу
            .table-button__clear(@click="clearCart")
              img.table-button__clear-icon(:src="require('../assets/images/cart/clear.svg')")
              span Очистить корзину

          .v-cart__table-wrapper
            table.v-cart__table-content
              thead.v-cart__table-head
                tr
                  td
                    span Фото
                  td
                    span Наименование
                  td
                    span Артикул
                  td
                    span Цена
                  td
                    span Количество
                  td
                    span Итого
              tbody.v-cart__table-body
                vItemCart(
                  v-for="item in this.$store.state.cart"
                  :key="item.article"
                  :image="item.image"
                  :title="item.title"
                  :cost="item.cost"
                  :article="item.article"
                  )

      .v-cart__payment-wrapper
        .v-cart__summary-wrapper
          .v-cart__summary
            h6.v-cart__summary-heading Итого
            span.v-cart__summary-value {{ cartSummary }} ₽

          .v-cart__proceed-buttons
            .v-cart__credit-container
              .v-cart__credit
                span Купить в кредит
                span.v-cart__credit-note * Примечание
            nuxt-link(to="/checkout" prefetch)
              .v-cart__buy
                span Оформить заказ

        .v-cart__cardtypes
          .v-cart__cardtypes-heading Мы принимаем к оплате:
          .v-cart__cardtypes-images
            img(:src="require('../assets/images/cart/cardtypes.jpg')")

      .v-cart__mayneed
        .v-cart__mayneed-heading Товары, которые могут вам пригодиться:
        .v-cart__mayneed-list
          .v-cart__mayneed-item(v-for="n in 6")
            vItem(
                :key="n"
                :image="'item-1.png'"
                :title="'Металлочерепица ГрандЛайн Modern PE(0,45)'"
                :clubCost="303"
                :cost="305"
                :unit="'м2'"
                :article="'62966'"
              )

    vCta
</template>

<script>
import vBreadcrumbs from '../components/breadcrumbs'
import vCta from '../components/cta'
import vItem from '../components/Item'
import vItemCart from '../components/ItemCart'

export default {
  name: 'Cart',
  components: {
    vBreadcrumbs,
    vCta,
    vItem,
    vItemCart
  },
  data() {
    return {
      breadcrumbs: ['Главная', 'Корзина'],
      n: 1
    }
  },
  computed: {
    cartSummary() {
      let sum = 0
      this.$store.state.cart.forEach((item, i, arr) => {
        sum += item.cost * item.quantity
      })
      return sum
    }
  },
  methods: {
    clearCart() {
      this.$store.dispatch('clearCart')
    }
  }
}
</script>

<style lang="sass">
.v-cart
  padding: 0px 45px

  &__content
    max-width: 1200px
    margin: auto
  &__heading
    font-size: 24px
    font-weight: 700
    letter-spacing: .07em

  &__table-wrapper
    display: flex

  &__table-buttons
    display: flex
    flex-direction: row
    margin-bottom: 14px
    .table-button__add, .table-button__clear
      display: inline-flex
      align-items: center
      border: 1px solid $gray-4
      font-size: 14px
      letter-spacing: .07em
      text-decoration: underline
      cursor: pointer
      &-icon
        margin-right: 7px

    .table-button__add
      margin-right: 40px
      padding: 5px 10px 5px 5px
      color: $red

    .table-button__clear
      padding: 5px 7px 5px 5px
      color: $gray-4

  &__table-content
    border-collapse: collapse
    width: 100%

  &__table-head
    text-align: center
    border: 2px solid $yellow
    background-color: $gray-1
    margin-bottom: 30px
    tr td
      padding: 9px 0px
      text-transform: uppercase
      font-size: 14px
      font-weight: 700
      letter-spacing: .07em
      &:last-child
        text-align: right
        padding-right: 37px
        width: 158px
      &:nth-child(1)
        width: 240px
      &:nth-child(2)
        width: 335px
      &:nth-child(3)
        width: 110px
      &:nth-child(4)
        width: 147px
      &:nth-child(5)
        width: 220px

  &__table-body
    &:before
      content: '@'
      display: block
      line-height: 29px
      text-indent: -99999px

  &__info
    margin-left: 78px

    &-heading
      margin: 0px
      padding: 9px
      border: 2px solid $yellow
      background-color: $gray-1
      text-transform: uppercase
      font-size: 14px
      font-weight: 700
      letter-spacing: .07em
      text-align: center
      width: 500px

    &-content
      padding: 44px 24px
      border: 1px solid $gray-4
      background-color: $gray-1
      margin-top: 30px

    &-subheading
      font-size: 18px
      font-weight: 700
      letter-spacing: .07em
      text-transform: uppercase

    &-list
      list-style: none
      padding-left: 0px
      margin-top: 45px

    &-item:not(:last-child)
      margin-bottom: 30px

    &-item-title
      font-size: 16px
      font-weight: 400
      line-height: 19px
      letter-spacing: .07em

    &-item-value
      font-size: 16px
      font-weight: 700
      line-height: 19px
      letter-spacing: .07em
      color: $red

  &__payment-wrapper
    display: flex
    justify-content: space-between
    max-width: 1200px
    margin: auto

  &__summary-wrapper
    display: flex
    align-items: flex-end
    flex-direction: column
    margin-top: 10px
    order: 1

  &__summary
    padding: 28px 144px 28px 26px
    background-image: url('../assets/images/cart/summary-bg.png')
    background-repeat: no-repeat
    width: 100px
    text-align: center
    &-heading, &-value
      font-size: 18px
      line-height: 21px
      margin: 0px
      text-align: center
      letter-spacing: .07em
      color: white
      font-weight: 700

  &__proceed-buttons
    display: flex
    flex-direction: row

  &__credit, &__buy
    margin-top: 18px
    display: inline-block
    text-transform: uppercase
    font-size: 18px
    line-height: 21px
    padding: 20px 30px
    font-weight: 700
    cursor: pointer

  &__credit
    background-color: white
    border: 2px solid $yellow
    margin-right: 46px
    &-container
      position: relative
    &-note
      position: absolute
      left: 0px
      top: 85px
      color: red
      font-size: 12px
      font-weight: 300
      font-style: normal
      line-height: 14px
      text-transform: capitalize
  &__buy
    background-color: $red
    color: white
    margin-right: 55px

  &__cardtypes
    margin-top: 72px
    display: flex
    flex-direction: column
    order: 0
    &-heading
      font-size: 14px
      font-weight: 700
      line-height: 16px
      margin-bottom: 10px

  &__mayneed
    margin-top: 92px
    background-color: $gray-1
    border: 1px solid $gray-4
    padding: 15px 30px
    margin-bottom: 30px
    &-heading
      font-size: 18px
      line-height: 21px
      font-weight: 700
      text-transform: uppercase
      letter-spacing: .07em
      margin-bottom: 20px
    &-list
      display: grid
      grid-template-columns: repeat(6, 1fr)
</style>
