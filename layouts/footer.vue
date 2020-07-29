<template lang="pug">
  #v-footer
    //- .v-footer__masonry-wrapper
    //-   .v-footer__masonry-wrapper-grid(v-for="(group, name, index) in seoLinks")
    //-     .v-footer__masonry-wrapper-grid__item
    //-       h5.v-footer__heading {{ name }}
    //-       ul.v-footer__list
    //-         li.v-footer__list-item(v-for="item in group")
    //-           a(href="#") {{ item }}

    .v-footer__nav
      ul.v-footer__nav-list
        //- li.v-footer__nav-list-item
        //-   nuxt-link.v-footer__link(to="/about")
        //-     img.v-footer__nav-list-item-icon(src="~@/assets/images/icons/about_40x40.svg")
        //-     span.v-footer__nav-list-item-title О компании
        li.v-footer__nav-list-item
          nuxt-link.v-footer__link(to="/vacancy")
            img.v-footer__nav-list-item-icon(src="~@/assets/images/icons/user_40x40.png")
            span.v-footer__nav-list-item-title Вакансии
        li.v-footer__nav-list-item
          nuxt-link.v-footer__link(to="/certificates")
            img.v-footer__nav-list-item-icon(src="~@/assets/images/icons/certificate_40x40.png")
            span.v-footer__nav-list-item-title Сертификаты
        li.v-footer__nav-list-item
          nuxt-link.v-footer__link(to="/delivery")
            img.v-footer__nav-list-item-icon(src="~@/assets/images/icons/truck_40x37.png")
            span.v-footer__nav-list-item-title Доставка
        li.v-footer__nav-list-item
          nuxt-link.v-footer__link(to="/payment")
            img.v-footer__nav-list-item-icon(src="~@/assets/images/icons/wallet_40x40.svg")
            span.v-footer__nav-list-item-title Оплата

    .v-footer__contacts
      .v-footer__phones
        p Есть вопросы? Звоните!
          span.contacts__phone
            | +7 (495) 132-74-00
          | или
          span.contacts__phone
            | +7 (495) 134-28-06
          | круглосуточно

      .v-footer__messengers
        p Или пишите!
        img(src="~@/assets/images/icons/footer-whatsapp.svg")
        img(src="~@/assets/images/icons/footer-viber.svg")

    .v-footer__information
      .v-footer__information-socials
        img.v-footer__information-socials-item(src="~@/assets/images/icons/vk.png" title="vk")
        img.v-footer__information-socials-item(src="~@/assets/images/icons/facebook.png" title="facebook")
        img.v-footer__information-socials-item(src="~@/assets/images/icons/instagram.png" title="instagram")

      ul.v-footer__information-list
        li.v-footer__information-list-item
          p.copyright &copy;&nbsp;2010&nbsp;&mdash; 2020&nbsp;ООО &laquo;Торговый Дом ЦСК&raquo; интернет-магазин строительных материалов.
        li.v-footer__information-list-item
          p Политика конфиденциальности
        li.v-footer__information-list-item
          p Условия пользования
        li.v-footer__information-list-item
          p.copyright Design by ArakelovGroup. Все права защищены
</template>

<script>
export default {
  name: 'Footer',
  props: {
    seoLinks: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="sass">
#v-footer
  background-color: $gray-2

.v-footer__masonry-wrapper
  padding: 50px 53px 0px 110px
  columns: 6
  column-gap: 16px
  @media (max-width: 1600px)
    columns: 4
  @media (max-width: 1200px)
    columns: 3
  @media (max-width: 900px)
    columns: 2
  @media (max-width: 640px)
    columns: 1
  &-grid
    display: block
    margin-bottom: 32px
    &__item
      width: 100%
      page-break-inside: avoid
      break-inside: avoid-column

.v-footer
  &__heading
    margin-bottom: 10px
    margin-top: 0px
    text-transform: uppercase
    color: $red
    font-weight: 700
    letter-spacing: .07em
    font-size: 16px

  &__list
    list-style: none
    padding-left: 0
    margin: 0
    page-break-inside: avoid
    break-inside: avoid-column
    break-after: avoid-column

  &__list-item
    page-break-inside: avoid
    break-inside: avoid
    &:not(:first-child)
      margin-top: 5px
    a
      font-weight: 400
      font-size: 14px
      letter-spacing: .07em
      text-decoration: none
      color: $text
      &:hover
        text-decoration: underline

  &__link
    text-decoration: none
    color: $text
    transition: all .1s ease
    &:hover
      color: $red

  &__nav-list
    list-style: none
    display: flex
    justify-content: center
    margin: 30px 160px 0px 160px
    padding-left: 0
    padding-top: 30px
    padding-bottom: 30px
    // border-top: 1px solid $text
    &-item
      display: flex
      align-items: center
      &:not(:first-child)
        margin-left: 30px
      &-icon
        margin-right: 15px
      &-title
        text-transform: uppercase
        font-weight: 700
        font-size: 18px
        letter-spacing: .07em
        vertical-align: 12px

  &__contacts
    display: flex
    justify-content: space-between
    padding: 18px 160px
    background-color: white
  &__phones, &__messengers
    display: flex
    align-items: center
    p
      font-weight: 700
      font-size: 18px
      letter-spacing: .07em
      color: $text
  &__messengers > *:not(:last-child)
    margin-right: 30px
.contacts__phone
  color: $red
  font-size: 24px
  line-height: 28px
  letter-spacing: .07em
  font-weight: 700
  margin: 0px 8px
.v-footer__information
  &-socials
    display: flex
    justify-content: center
    margin-top: 35px
    &-item:not(:first-child)
      margin-left: 38px

  &-list
    list-style: none
    padding-left: 0
    margin-top: 35px
    display: flex
    align-items: center
    flex-direction: column
    margin-bottom: -15px
    &-item p
      font-size: 18px
      letter-spacing: .07em
      margin-top: 0px
      margin-bottom: 15px
      color: $text
    &-item p.copyright
      font-weight: 700
</style>
