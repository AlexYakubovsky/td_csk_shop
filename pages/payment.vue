<template lang="pug">
  #v-payment
    vBreadcrumbs(:breadcrumbs="breadcrumbs")
    .v-payment__main
      h2.v-payment__main-heading Способы оплаты
      .v-payment__grid-wrapper
        .v-payment__legals
          .v-payment__content
            h3.v-payment__content-heading Для юридических лиц
              img.v-payment__content-heading-tooltip(
                :src="require('../assets/images/icons/tooltip.svg')"
                v-tooltip.right-start="{content: 'При получении товара обязательно наличие оригинала доверенности и&nbsp;паспорта лица, указанного в&nbsp;доверенности', offset: 8}")
            .v-payment__legals-types
              .v-payment__legals-types-wrapper
                h4.v-payment__legals-heading Безналичная оплата по выставленному счёту
                h4.v-payment__legals-heading Оплата наличными
                ul.v-payment__legals-list
                  li.v-payment__legals-list-item
                    span В центральном офисе
                  li.v-payment__legals-list-item
                    span На складе
                  li.v-payment__legals-list-item
                    span При доставке

          .v-payment__image
            img(:src="require('../assets/images/payment/legals.png')")

        .v-payment__individuals
          .v-payment__content
            h3.v-payment__content-heading Для физических лиц
              img.v-payment__content-heading-tooltip(
                :src="require('../assets/images/icons/tooltip.svg')"
                v-tooltip.right-start="{content: 'В&nbsp;случае заказа товара с&nbsp;индивидуально заданными характеристиками (например, колеровка краски, нарезка линолеума и&nbsp;др.) требуется его предварительная оплата', offset: 8}")
            .v-payment__individuals-types
              .v-payment__individuals-types-wrapper
                h4.v-payment__individuals-heading Оплата наличными
                ul.v-payment__individuals-list
                  li.v-payment__individuals-list-item
                    span В центральном офисе
                  li.v-payment__individuals-list-item
                    span На складе
                  li.v-payment__individuals-list-item
                    span При доставке
                h4.v-payment__individuals-heading Оплата банковской картой
                ul.v-payment__individuals-list
                  li.v-payment__individuals-list-item
                    span Оплата онлайн банковской картой
                  li.v-payment__individuals-list-item
                    span В центральном офисе
                  li.v-payment__individuals-list-item
                    span На складе
                  li.v-payment__individuals-list-item
                    span При доставке
                h4.v-payment__individuals-heading
                  | Безналичная оплата по выставленному счету через банк, либо через личный кабинет вашего интернет банка
          .v-payment__image
            img(:src="require('../assets/images/payment/individuals.png')")

    vCta
</template>

<script>
import vBreadcrumbs from '../components/breadcrumbs.vue'
import vCta from '../components/cta.vue'

export default {
  name: 'Payment',
  components: {
    vBreadcrumbs,
    vCta
  },
  data() {
    return {
      breadcrumbs: ['Главная', 'Оплата']
    }
  }
}
</script>

<style lang="sass">
@import "~@/assets/sass/tooltip"

.v-payment__main
  padding: 0px 45px
  &-heading
    margin-bottom: 30px
    font-size: 24px
    font-weight: 700
    letter-spacing: .07em
.v-payment__grid-wrapper
  display: grid
  grid-template-columns: 1fr 1fr
  grid-template-rows: 1fr
  grid-template-areas: ". ."
  grid-column-gap: 30px
  margin-bottom: 30px
.v-payment__legals,
.v-payment__individuals
  display: flex
  justify-content: space-between
  align-items: flex-start
  border: 1px solid $gray-4
  background-color: $gray-1

.v-payment
  &__content-heading
    display: flex
    margin-top: 25px
    margin-left: 84px
    font-size: 24px
    font-weight: 700
    letter-spacing: .07em
    text-transform: uppercase
    &-tooltip
      margin-left: 4px
      margin-top: -5px
      cursor: help
      height: 15px
  &__image
    margin: 40px 20px 40px 0px
  &__legals-types-wrapper
    margin-left: 65px
  &__legals-heading
    text-align: center
    max-width: 248px
    margin-bottom: 0px
    margin-top: 0px
    font-size: 16px
    font-weight: 700
    text-transform: uppercase
    letter-spacing: .07em
    &:first-child
      margin-top: 68px
      margin-bottom: 44px
    &:nth-child(2)
      margin-bottom: 15px
  &__legals-list, &__individuals-list
    margin-top: 0px
    padding-left: 32px
    list-style: none
    &-item
      font-size: 14px
      font-weight: 300
      letter-spacing: .07em
      color: $text
      &:not(:last-child)
        margin-bottom: 7px

  &__individuals
    &-types-wrapper
      padding-left: 63px
    &-heading
      max-width: 450px
      font-size: 16px
      font-weight: 700
      text-transform: uppercase
      margin-bottom: 8px
</style>
