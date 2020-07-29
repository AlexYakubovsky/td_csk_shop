<template lang="pug">
  #v-checkout
    vBreadcrumbs(:breadcrumbs="breadcrumbs")
    .v-checkout
      h1.v-checkout__heading(v-if="currentStep == 2") Личные данные
      h1.v-checkout__heading(v-if="currentStep == 3") Способ доставки
      h1.v-checkout__heading(v-if="currentStep == 4") Завершение
      .v-checkout__stepper
        .v-checkout__stepper-item
          nuxt-link(to="/cart")
            span Корзина
        .v-checkout__stepper-item(:class="{ stepperActive: currentStep == 2, stepperDisabled: currentStep < 2 }")
          span Личные данные
        .v-checkout__stepper-item(:class="{ stepperActive: currentStep == 3, stepperDisabled: currentStep < 3 }")
          span Способ доставки
        .v-checkout__stepper-item(:class="{ stepperActive: currentStep == 4, stepperDisabled: currentStep < 4 }")
          span Завершение

      .v-checkout__container(v-if="currentStep == 2")
        .v-checkout__wrapper
          h2.v-checkout__title Тип профиля
          .v-checkout__body
            .v-checkout__header
              input#individual-person(type="radio" name="persons" value="individual" v-model="personType" checked)
              label(for="individual-person") Физическое лицо

              input#legal-person(type="radio" name="persons" value="legal" v-model="personType")
              label(for="legal-person") Юридическое лицо

            form.v-checkout__form.form-idv(v-if="personType == 'individual'")
              .v-checkout__input-group
                label(for="idv-name") Имя
                input#idv-name(type="text" placeholder="Иван" required)

              .v-checkout__input-group
                label(for="idv-lastname") Фамилия
                input#idv-lastname(type="text" placeholder="Иванов" required)

              .v-checkout__input-group
                label(for="idv-phone") Основной телефон
                input#idv-phone(type="phone" placeholder="+7 (___) ___-__-__" required)

              .v-checkout__checkbox-group
                input#isProceed(type="checkbox")
                label(for="isProceed") Я подтверждаю свою дееспособность, согласие на получение информации об оформлении и получении заказа, согласие на обработку персональных данных в соответствии с указанным здесь текстом

              .v-checkout__checkbox-group
                input#isSubscribe(type="checkbox")
                label(for="isSubscribe") Подписаться на новости

            form.v-checkout__form.form-legal(v-if="personType == 'legal'")
              .v-checkout__legal-wrapper
                .v-checkout__input-group
                  label(for="legal-name") Имя
                    span.star &nbsp;*
                  input#legal-name(type="text" placeholder="Иван" required)

                .v-checkout__input-group
                  label(for="legal-lastname") Фамилия
                    span.star &nbsp;*
                  input#legal-name(type="text" placeholder="Иванов" required)

                .v-checkout__input-group
                  label(for="legal-company") Название организации
                    span.star &nbsp;*
                  input#legal-company(type="text" required)

                .v-checkout__input-group
                  label(for="legal-phone") Основной телефон
                    span.star &nbsp;*
                  input#legal-phone(type="phone" placeholder="+7 (___) ___-__-__" required)

                .v-checkout__input-group
                  label(for="legal-okpo") ОКПО
                  input#legal-okpo(type="text")

                .v-checkout__input-group
                  label(for="legal-address") Юридический адрес
                    span.star &nbsp;*
                  input#legal-address(type="text" required)

                .v-checkout__input-group
                  label(for="legal-bik") БИК
                    span.star &nbsp;*
                  input#legal-bik(type="text" required)

              .v-checkout__legal-wrapper
                .v-checkout__input-group
                  label(for="legal-bankname") Наименование банка
                  input#legal-bankname(type="text")

                .v-checkout__input-group
                  label(for="legal-account") Расчетный счет
                  input#legal-account(type="text")

                .v-checkout__input-group
                  label(for="legal-inn") ИНН
                    span.star &nbsp;*
                  input#legal-inn(type="text" required)

                .v-checkout__input-group
                  label(for="legal-kpp") КПП
                  input#legal-kpp(type="text")

                .v-checkout__input-group
                  label(for="legal-director") Генеральный директор
                  input#legal-director(type="text")

                .v-checkout__checkbox-group
                  input#isProceed(type="checkbox")
                  label(for="isProceed") Я подтверждаю свою дееспособность, согласие на получение информации об оформлении и получении заказа, согласие на обработку персональных данных в соответствии с указанным здесь текстом

                .v-checkout__checkbox-group
                  input#isSubscribe(type="checkbox")
                  label(for="isSubscribe") Подписаться на новости

        .v-checkout__wrapper.v-checkout__grid-wrapper
          .v-checkout__payment-type
            h2.v-checkout__title Способ оплаты
            .v-checkout__payment-content
              .v-checkout__payment-type-group
                input#payment__cash(type="radio" name="payment-type" checked)
                label(for="payment__cash") Оплата наличными при получении

              .v-checkout__payment-type-group
                input#payment__card(type="radio" name="payment-type")
                label(for="payment__card") Оплата банковской картой при получении

              .v-checkout__payment-type-group
                input#payment__card-on-site(type="radio" name="payment-type")
                label(for="payment__card-on-site") Оплата банковской картой на сайте

              .v-checkout__payment-type-group
                input#payment__bank-transfer(type="radio" name="payment-type")
                label(for="payment__bank-transfer") Банковский перевод

          .v-checkout__continue(@click="currentStep = 3")
            .v-checkout__continue-wrapper
              img.v-checkout__continue-icon(:src="require('../assets/images/icons/continue-check.svg')")
              span.v-checkout__continue-title Продолжить

      .v-checkout__container(v-if="currentStep == 3")
        .v-checkout__wrapper
          h2.v-checkout__title Заказать доставку:
          .v-checkout__body-delivery
            p.v-checkout__delivery-description Окончательная стоимость данной услуги будет рассчитана специалистом нашей компании при обработке Вашего заказа на основании параметров заказываемого товара и тарифов, опубликованных в разделе "Доставка".

            form.v-checkout__delivery-form.form-delivery
              .v-checkout__delivery-wrapper
                .v-checkout__delivery-form-group
                  label(for="") Населённый пункт
                    span.star &nbsp;*
                  input(type="text")
                .v-checkout__delivery-form-group
                  label(for="") Улица
                    span.star &nbsp;*
                  input(type="text")
                .v-checkout__delivery-form-group
                  label(for="") Дом
                    span.star &nbsp;*
                  input(type="text")
                .v-checkout__delivery-form-group
                  label(for="") Корпус
                  input(type="text")
                .v-checkout__delivery-form-group
                  label(for="") Квартира
                  input(type="text")
                .v-checkout__delivery-field-require
                  span.star &nbsp;*&nbsp;
                  | - поля обязательные для заполнения

              .v-checkout__delivery-wrapper
                .v-checkout__delivery-form-group--textarea
                  label(for="") Дополнительная информация
                  textarea(rows="6" cols="51")

                .v-checkout__delivery-summary
                  span.v-checkout__delivery-summary-title Стоимость доставки:
                  span.v-checkout__delivery-summary-value 1000 ₽

        .v-checkout__wrapper.v-checkout__grid-wrapper
          .v-checkout__body-map
            .v-checkout__yandex-map
              yandexMap(
                v-if="pageReady"
                :coords="[52.403687, 39.715173]"
                style="width: 503px; height: 283px"
                zoom="4"
              )

          .v-checkout__continue
            .v-checkout__continue-wrapper(@click="currentStep = 4")
              img.v-checkout__continue-icon(:src="require('../assets/images/icons/continue-check.svg')")
              span.v-checkout__continue-title Продолжить

      .v-checkout__container(v-if="currentStep == 4")
        .v-checkout__wrapper
          h2.v-checkout__title Ваш заказ получен
          .v-checkout__body-order
            h3.v-checkout__order-heading Спасибо за
              span.star &nbsp;покупку
              | !
            .v-checkout__order-container
              p.v-checkout__order-description Вы&nbsp;получите письмо на&nbsp;ваш адрес электронной почты с&nbsp;подробной информацией о&nbsp;заказе и&nbsp;ссылкой на&nbsp;страницу, на&nbsp;которой можно проверить состав заказа.
              .v-checkout__order-prop
                h4.prop-heading Номер Вашего заказа
                p.prop-value.star 999111555533
              .v-checkout__order-prop
                h4.prop-heading Количество позиций товаров
                p.prop-value.font-bold 6
              .v-checkout__order-prop
                h4.prop-heading Сумма заказа
                p.prop-value.font-bold 19 999.00 ₽
              .v-checkout__order-controlls
                span.v-checkout__order-controlls-print Печать заказа
                nuxt-link.v-checkout__order-controlls-toshop(to="/") Вернуться в магазин

      .v-checkout__wrapper(v-if="currentStep == 4")
        .v-checkout__discount
          h5.v-checkout__discount-heading Товары со скидкой:
          .v-checkout__discount-container
            .v-checkout__discount-item(v-for="n in 6")
              vItem(
                :image="'item-1.png'"
                :title="'Металлочерепица ГрандЛайн Modern PE(0,45)'"
                :clubCost="303"
                :cost="305"
                :unit="'м2'"
                :article="'62966'"
              )

      .v-checkout__wrapper(v-if="currentStep == 4")
        .v-checkout__discount
          h5.v-checkout__discount-heading Выбор покупателей
          .v-checkout__discount-container
            .v-checkout__discount-item(v-for="n in 6")
              vItem(
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
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import vBreadcrumbs from '../components/breadcrumbs'
import vCta from '../components/cta'
import vItem from '../components/Item'

export default {
  name: 'Checkout',
  components: {
    yandexMap,
    ymapMarker,
    vBreadcrumbs,
    vCta,
    vItem
  },
  data() {
    return {
      breadcrumbs: ['Главная', 'Корзина', 'Оформление заказа'],
      personType: 'individual',
      currentStep: 2,
      pageReady: false,
      n: 1
    }
  },
  mounted() {
    this.pageReady = true
  }
}
</script>

<style lang="sass">
.v-checkout
  padding: 0px 45px

  &__heading
    font-size: 24px
    line-height: 28px
    letter-spacing: .07em

  &__stepper
    display: flex
    &-item
      position: relative
      display: inline-block
      flex-grow: 1
      flex-shrink: 0
      padding: 12px
      text-align: center
      line-height: 16px
      font-size: 14px
      border-top: 2px solid $red
      border-bottom: 2px solid $red
      text-transform: uppercase
      letter-spacing: .07em
      background-color: #fff
      a
        text-decoration: none
        color: $text
      &:first-child
        border-top-left-radius: 3px
        border-bottom-left-radius: 3px
        border-left: 2px solid $red
      &:last-child
        border-top-right-radius: 3px
        border-bottom-right-radius: 3px
        border-right: 2px solid $red
        span::before, span::after
          display: none

      span::before
        content: ''
        display: block
        width: 0px
        height: 0px
        border-top: 21px solid transparent
        border-bottom: 21px solid transparent
        border-left: 21px solid $red
        position: absolute
        bottom: 0
        top: 50%
        margin-top: -21px
        left: 100%
        z-index: 2
      span::after
        content: ''
        display: block
        width: 0px
        height: 0px
        border-top: 20px solid transparent
        border-bottom: 20px solid transparent
        border-left: 20px solid white
        position: absolute
        bottom: 0
        top: 50%
        margin-top: -20px
        margin-left: -2px
        left: 100%
        z-index: 2

    .stepperActive
      font-weight: 700
      background-color: white
      cursor: default
      span::after
        border-left-color: white

    .stepperDisabled
      color: $gray-4
      background-color: $gray-6
      text-decoration: none
      cursor: default
      span::after
        border-left-color: $gray-6

  &__body
    background-color: $gray-1
    border: 3px solid $gray-4
    padding: 30px 50px 30px 80px
    min-width: 1024px
    &-delivery
      display: flex
      align-items: center
      flex-direction: column
      background-color: $gray-1
      border: 3px solid $gray-4
      padding: 40px 11px 37px 30px
      max-width: 780px
    &-map
      margin-top: 50px
      margin-left: 20px
      padding: 12px
      background-color: $gray-1
      border: 3px solid $gray-4
    &-order
      display: flex
      flex-direction: column
      align-items: center
      padding: 30px 50px
      background-color: $gray-1
      border: 3px solid $gray-4
      // width: 88.9vw

  &__delivery-form-group--textarea
    label
      font-size: 14px
      letter-spacing: .07em
    textarea
      font-size: 14px
      border: 1px solid $gray-7
      margin-top: 8px
      resize: none

  &__grid-wrapper
    display: grid
    grid-template-columns: 1fr
    grid-template-rows: 70% 30%

  &__title
    font-size: 18px
    font-weight: 700
    letter-spacing: .07em

  &__form
    display: flex
    flex-direction: column
    margin-top: 30px
    & input
      height: 46px
      max-width: 200px
      margin-bottom: 12px
      border: 1px solid $gray-7

  &__input-group
    display: flex
    align-items: center
    justify-content: space-between
    label
      margin-right: 16px
      cursor: pointer
      &:hover ~ input
        border: 1px solid #3d3d3d
        transition: all .1s ease
    input
      font-size: 14px
      font-weight: 700
      letter-spacing: .07em
      text-align: center
      transition: all .1s ease

  &__checkbox-group
    display: flex
    align-items: flex-start
    max-width: 380px
    margin-bottom: 10px
    label
      font-size: 10px
      font-weight: 400
      line-height: 12px
      letter-spacing: .07em
      color: $text
      margin-left: 8px
      cursor: pointer
    input
      height: auto

  &__payment-type
    display: flex
    flex-direction: column
    margin-left: 20px
    &-group
      input
        margin-right: 8px
      label
        cursor: pointer
      &:not(:last-child)
        margin-bottom: 20px

  &__payment-content
    padding: 25px 28px
    border: 3px solid $gray-4
    background-color: $gray-1

  &__container
    display: flex
    flex-direction: row
    margin-bottom: 60px
    margin-top: 18px
    justify-content: space-between

  &__header
    display: flex
    justify-content: center

  &__continue
    display: flex
    align-self: end
    margin-left: 20px
    width: 211px
    height: 40px
    cursor: pointer
    justify-self: end
    &-wrapper
      display: flex
      align-items: center
      background-color: $red
      color: white
    &-title
      padding: 11px 36px
      font-size: 15px
      font-weight: 700
      line-height: 18px
      text-transform: uppercase
    &-icon
      padding: 11px 7px
      border-right: 3px solid white

  &__delivery
    &-description
      font-size: 12px
      line-height: 14px
      letter-spacing: .07em
      margin-bottom: 37px
    &-form-group
      display: flex
      align-items: center
      max-width: 400px
      justify-content: space-between
      &:not(:last-child)
        margin-bottom: 10px
      label
        font-size: 14px
        line-height: 16px
        letter-spacing: .07em
        margin-right: 16px
      input
        height: 16px
        padding: 15px 0px
      input
        border: 1px solid $gray-7
        text-align: center

    &-summary
      margin-top: 15px
      padding: 14px
      background-color: white
      border: 2px solid $yellow
      display: flex
      flex-direction: row
      justify-content: center
      &-title, &-value
        display: inline-block
        font-size: 16px
        font-weight: 700
        line-height: 14px
        text-transform: uppercase
      &-title
        margin-right: 8px
      &-value
        color: $red
    &-field-require
      margin-top: 30px
  &__order
    &-heading
      margin-top: 0px
      margin-bottom: 30px
      font-size: 18px
      font-weight: 700
      letter-spacing: .07em
      line-height: 21px
      text-align: center
      text-transform: uppercase
    &-container
      width: 628px
    &-description
      font-size: 14px
      line-height: 16px
      letter-spacing: .07em
      color: $text
    &-prop
      display: flex
      align-items: center
      justify-content: space-between
      .prop-heading, .prop-value
        letter-spacing: .07em

    &-controlls
      display: flex
      justify-content: space-around
      margin-top: 10px
      &-print, &-toshop
        width: 250px
        display: block
        padding: 14px 0px
        text-align: center
        line-height: 19px
        font-weight: 700
        text-transform: uppercase
        cursor: pointer
      &-print
        border: 2px solid $red
        background-color: $yellow
      &-toshop
        border: 2px solid $yellow
        background-color: white
        color: $text
        text-decoration: none

  &__discount
    padding: 15px
    background-color: $gray-1
    border: 1px solid $gray-4
    margin-bottom: 30px
    &-heading
      margin-top: 0px
      margin-bottom: 20px
      font-size: 18px
      letter-spacing: .07em
      text-transform: uppercase
      color: $text
      text-indent: 15px

    &-container
      display: grid
      grid-template-columns: repeat(6, 1fr)


#individual-person, #legal-person
  margin-right: 6px

#legal-person
  margin-left: 36px

.form-legal
  display: grid
  grid-template-columns: 1fr 1fr
  grid-tempalte-rows: repeat(7, 1fr)
  grid-gap: 168px

.form-delivery
  display: grid
  grid-template-columns: 1fr 1fr
  grid-gap: 24px

.form-idv
  padding: 0px 292px
  justify-content: center

  .v-checkout__checkbox-group:nth-child(4)
    margin-top: 46px

  .v-checkout__checkbox-group
    margin-left: 32px
.font-bold
  font-weight: 700
</style>
