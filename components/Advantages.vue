<template lang="pug">
  #v-advantages
    .v-advantages__heading-wrapper
      h2.v-advantages__title ПОЧЕМУ ТОРГОВЫЙ ДОМ «ЦСК»
      img.v-main-map__heading-icon(src="~@/assets/images/icons/why.png")
    ul.v-advantages__list
      li.v-advantages__list-item
        img.v-advantages__list-image(src="~@/assets/images/icons/adv-goods.svg")
        p.v-advantages__list-desc
          | Большой ассортимент
          span.v-advantages__accent
            | товаров
      li.v-advantages__list-item
        img.v-advantages__list-image(src="~@/assets/images/icons/adv-sales.svg")
        .v-advantages__list-desc
          | Лучшие
          span.v-advantages__accent
            | Цены
          | на&nbsp;рынке
      li.v-advantages__list-item
        img.v-advantages__list-image(src="~@/assets/images/icons/adv-clubcard.svg")
        .v-advantages__list-desc
          | Клубные
          span.v-advantages__accent
            | карты
          | для&nbsp;покупателей
      li.v-advantages__list-item
        img.v-advantages__list-image(src="~@/assets/images/icons/adv-logistics.svg")
        .v-advantages__list-desc
          | Развитая
          span.v-advantages__accent
            | логистика
      li.v-advantages__list-item
        img.v-advantages__list-image(src="~@/assets/images/icons/adv-moneypiggy.svg")
        .v-advantages__list-desc
          | Бонусные
          span.v-advantages__accent
            | рубли

</template>

<script>
export default {
  name: 'Advantages'
}
</script>

<style lang="sass">
.v-advantages
  &__heading-wrapper
    padding: 15px 0px
    background-image: url('~@/assets/images/divider.png')
    background-position: 25% 50%
    background-repeat: no-repeat
    transform: matrix(-1, 0, 0, 1, 0, 0)
    display: flex
    flex-direction: row-reverse
    justify-content: center
  &__title
    background-position: 50% 50%
    background-repeat: no-repeat
    padding: 16px 0px
    font-weight: 700
    font-size: 24px
    text-align: center
    letter-spacing: .07em
    color: white
    transform: matrix(-1, 0, 0, 1, 0, 0)
    &-icon
      margin-right: 15px
      align-self: center
      transform: matrix(-1, 0, 0, 1, 0, 0)
  &__list
    display: flex
    margin: 30px 160px
    &-item
      display: flex
      align-items: center
    &-desc
      display:
      margin-left: 30px
      margin-right: 57px
      font-weight: 400
      font-size: 22px
      letter-spacing: .07em
      text-align: center
  &__accent
    display: inline-block
    margin: 0px 6px
    font-weight: 700
    font-size: 22px
    color: $red
    letter-spacing: .07em
    text-transform: uppercase
</style>
