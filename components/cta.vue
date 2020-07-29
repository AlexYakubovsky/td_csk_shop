<template lang="pug">
  .v-cta
    img.v-cta__image(:src="require('../assets/images/icons/check-clipart-right-sign.png')")
    span.v-cta__description Не нашли что искали?
    form.v-cta__form
      h5.v-cta__form-heading Оставьте заявку:
      .v-cta__form-input-wrapper
        input.v-cta__form-input(type="text" placeholder="Имя")
        input.v-cta__form-input(type="text" placeholder="Телефон")
      button.v-cta__form-submit(type="submit") Позвонить мне!
    ul.v-cta__advantages
      li.v-cta__advantages-item
        span Найдем&nbsp;&ndash; #[span.v-cta__advantages-item-accent быстро.]
      li.v-cta__advantages-item
        span Договоримся&nbsp;&ndash; #[span.v-cta__advantages-item-accent выгодно.]
      li.v-cta__advantages-item
        span Поставим&nbsp;&ndash; #[span.v-cta__advantages-item-accent в срок!]
</template>

<style lang="sass" scoped>
$padding-top: 21px
$padding-right: 30px
$padding-bottom: $padding-top
$padding-left: 116px

.v-cta
  display: inline-flex
  align-items: center
  padding: $padding-top $padding-right $padding-bottom $padding-left
  background-color: $gray-3
  &__image
    margin-right: 8.854vw

  &__description
    display: inline-block
    margin-right: 4.6875vw
    font-size: 24px
    font-weight: 400
    letter-spacing: .07em


  &__form
    display: flex
    align-items: center
    &-heading
      font-size: 18px
      font-weight: 700
      letter-spacing: .07em
      color: $text
      margin-right: 2.6041667vw
    &-input-wrapper
      display: flex
      flex-direction: column
      margin-right: 2.6041667vw
    &-input
      padding: 10px 22px
      border: 1px solid $gray-4
      font-size: 14px
      &:first-child
        margin-bottom: 5px
      &:active, &:focus
        outline-color: $red
    &-submit
      padding: 10px 40px
      border: none
      background-color: $red
      font-size: 16px
      font-weight: 700
      color: white
      text-transform: uppercase
      cursor: pointer
      transition: all .15s ease
      &:hover
        background-color: darken($red, 7%)
        box-shadow: 0px 6px 8px rgba($text, .1)

  &__advantages
    list-style: none
    padding-left: 0
    margin-left: 5.2vw
    &-item
      text-align: right
      font-size: 24px
      letter-spacing: .07em
      &:not(:last-child)
        margin-bottom: 5px
      &-accent
        color: $red
        font-weight: 700
</style>
