<template lang="pug">
  #v-about
    .v-about__first-screen
      h1.v-about__first-screen-heading
        | Крупнейший поставщик строительных и отделочных материалов
      img.v-about__first-screen-logo(:src="require('../assets/images/about/logo_298x380.png')")

    .v-about__company
      .v-about__wrapper-left
        h2.v-about__company-heading
          | О компании
        img.v-about__logo-mini(:src="require('../assets/images/about/logo_mini.png')")
      .v-about__advantages-list-wrapper(
        data-aos="slide-left"
        data-aos-once="true"
        data-aos-duration="650"
        data-aos-easing="ease-out"
      )
        ul.v-about__company-advantages-list
          li.v-about__company-advantages-list-item
            span Объём продаж за&nbsp;2019 год 3&nbsp;000&nbsp;000&nbsp;000&nbsp;₽
          li.v-about__company-advantages-list-item
            span Более 500 прямых контрактов с&nbsp;заводами
          li.v-about__company-advantages-list-item
            span Мы&nbsp;работаем 7&nbsp;дней в&nbsp;неделю
          li.v-about__company-advantages-list-item
            span Ассортимент более 60&nbsp;000 товаров

    .v-about__logistics
      .v-about__advantages-list-wrapper(
        data-aos="slide-right"
        data-aos-once="true"
        data-aos-duration="650"
        data-aos-easing="ease-out"
      )
        ul.v-about__logistics-advantages-list
          li.v-about__logistics-advantages-list-item
            span Высокая скорость загрузки
          li.v-about__logistics-advantages-list-item
            span Доставка в&nbsp;выходные дни
          li.v-about__logistics-advantages-list-item
            span Оперативные срочные доставки
          li.v-about__logistics-advantages-list-item
            span Складской комплекс площадью 20&nbsp;000&nbsp;м
              sup 2
      .v-about__wrapper-right
        img.v-about__logo-mini(:src="require('../assets/images/about/logo_mini.png')")
        h2.v-about__logistics-heading
          | Логистика

    .v-about__staff
      .v-about__wrapper-left
        h2.v-about__staff-heading
          | Персонал
        img.v-about__logo-mini(:src="require('../assets/images/about/logo_mini.png')")
      .v-about__advantages-list-wrapper(
        data-aos="slide-left"
        data-aos-once="true"
        data-aos-duration="650"
        data-aos-easing="ease-out"
      )
        ul.v-about__staff-advantages-list
          li.v-about__staff-advantages-list-item
            span 250 сотрудников в&nbsp;штате
          li.v-about__staff-advantages-list-item
            span Современный CALL-центр
          li.v-about__staff-advantages-list-item
            span Более 100 звонков в&nbsp;сутки
          li.v-about__staff-advantages-list-item
            span Миллионы обработанных заявок

    .v-about__service
      .v-about__advantages-list-wrapper(
        data-aos="slide-right"
        data-aos-once="true"
        data-aos-duration="650"
        data-aos-easing="ease-out"
      )
        ul.v-about__logistics-advantages-list
          li.v-about__logistics-advantages-list-item
            span Комплексная поставка на всех этапах строительства
          li.v-about__logistics-advantages-list-item
            span Персональный менеджер
          li.v-about__logistics-advantages-list-item
            span Поставка товара по выбранной матрице
          li.v-about__logistics-advantages-list-item
            span Оплата любым удобным способом
      .v-about__wrapper-right
        img.v-about__logo-mini(:src="require('../assets/images/about/logo_mini.png')")
        h2.v-about__service-heading
          | Сервиc

    vCta
</template>

<script>
import vCta from '../components/cta.vue'

export default {
  name: 'About',
  components: {
    vCta
  }
}
</script>

<style lang="sass">
.v-about
  &__first-screen
    display: flex
    align-items: center
    flex-direction: column
    background-image: url("~@/assets/images/about/header-bg.jpg")
    &-heading
      text-align: center
      color: white
      margin-top: 0
      margin-bottom: 28px
      padding-top: 35px
      text-transform: uppercase
    &-logo
      padding-bottom: 125px

  &__company, &__logistics, &__staff, &__service
    position: relative
    height: 590px
    margin: 36px 116px 78px 116px
    overflow: hidden
    &:last-child
      margin-bottom: 64px
    &-heading
      font-size: 46px
      color: $text
      text-transform: uppercase
      font-weight: 700
      margin-top: 0
      margin-bottom: 0

  &__wrapper-left, &__wrapper-right
    display: inline-flex
    align-items: center
    background-color: $yellow-2

  &__wrapper-left
    margin-top: 240px
    margin-left: 112px
    padding: 28px 28px 28px 120px
    .v-about__company-heading,
    .v-about__staff-heading
      margin-right: 50px

  &__wrapper-right
    position: absolute
    right: 55px
    top: 231px
    padding: 28px 120px 28px 28px
    .v-about__logistics-heading,
    .v-about__service-heading
      margin-left: 50px

  &__company
    background-image: url("~@/assets/images/about/body-bg-1.jpg")
  &__logistics
    background-image: url("~@/assets/images/about/body-bg-2.jpg")
  &__staff
    background-image: url("~@/assets/images/about/body-bg-3.jpg")
  &__service
    background-image: url("~@/assets/images/about/body-bg-4.jpg")

  &__company-advantages-list,
  &__staff-advantages-list,
  &__logistics-advantages-list,
  &__service-advantages-list
    position: absolute
    right: 113px
    bottom: -180px
    &-item
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      width: 438px
      height: 90px
      margin: 18px 0px
      padding: 0px 20px
      background-color: rgba($yellow-2, .7)
      color: $text
      text-align: center
      text-transform: uppercase
      font-weight: 700
      font-size: 20px
      &:nth-child(2),
      &:nth-child(3)
        position: relative
        right: 220px
  &__logistics-advantages-list,
  &__service-advantages-list
    right: 0
    left: 113px
    top: 50px
    &-item
      &:nth-child(2),
      &:nth-child(3)
        position: relative
        left: 220px
</style>
