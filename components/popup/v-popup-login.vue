<template lang="pug">
  #v-popup-login
    .v-popup-wrapper(ref="popupWrapper" :style="{ zIndex: zIndex }")
      .v-popup-login
        img.v-popup-login__closeIcon(
          :src="require('../../assets/images/icons/close_mark.svg')"
          title="Закрыть окно"
          alt="Закрыть"
          @click="closePopup")

        .v-popup-login__body(v-if="loginState == 'login'")
          img.v-popup-login__account-icon(:src="require('../../assets/images/icons/person_profile.png')")
          h5.v-popup-login__heading Войти в личный кабинет
          .v-popup-login__form
            .v-popup-login__inputGroup
              input.v-popup-login__input(type="email" placeholder="Электронная почта")
              input.v-popup-login__input(type="password" placeholder="Пароль")
          .v-popup-login__links
            span.v-popup-login__links-item(@click="changeLoginState('remindPassword')") Забыли пароль?
            span.v-popup-login__links-item(@click="changeLoginState('registration')") Регистрация
          .v-popup-login__submit
            span.v-popup-login__submit-item Войти

        .v-popup-login__body--registration(v-if="loginState == 'registration'")
          .login-registration__header
            img(src='~@/assets/images/icons/pencil-writing-on-a-paper-sheet.png')
            .login-registration__heading-wrapper
              h5.login-registration__heading Создать учетную запись
              p.login-registration__description Создав учётную запись на&nbsp;нашем сайте, Вы&nbsp;будете тратить меньше времени на оформление заказа, сможете хранить несколько адресов доставки, отслеживать историю заказов, а&nbsp;также активировать клубную карту
                span.fontBold &nbsp;ЦСК.
          .login-registration__body
            form.login-registration__form
              .login-registration__input-group
                label(for="reg-lastname") Ваша фамилия
                  span.star *
                input#reg-lastname(type="text" placeholder="Иванов" required)
              .login-registration__input-group
                label(for="reg-firstname") Ваше имя
                  span.star *
                input#reg-firstname(type="text" placeholder="Иван" required)
              .login-registration__input-group
                label(for="reg-email") Эл. почта
                  span.star *
                input#reg-email(type="email" placeholder="ivan@example.com" required)
              .login-registration__input-group
                label(for="reg-password") Пароль
                  span.star *
                input#reg-password(type="password" required)
              .login-registration__input-group
                label(for="reg-password-repeat") Повторите пароль
                  span.star *
                input#reg-password-repeat(type="password" required)
              .login-registration__checkbox-group
                input#reg-isAgree(type="checkbox" required)
                label(for="reg-isAgree") Я&nbsp;даю свое
                  span.fontBold &nbsp;согласие на&nbsp;обработку
                  | &nbsp;моих персональных данных.
              .login-registration__checkbox-group
                input#reg-subscribe(type="checkbox")
                label(for="reg-subscribe") Подписаться на новости
              .login-registration__field-is-requared
                span.star *
                | &nbsp;- поля обязательные для заполнения
              .login-registration__submit-wrapper
                button(type="submit").login-registration__submit Зарегистрироваться

            span.login-registration__back(@click="changeLoginState('login')") Назад

        .v-popup-login__body--remind(v-if="loginState == 'remindPassword'")
          h5.login-remind__heading Восстановить пароль:
          p.login-remind__description Для получения инструкций по&nbsp;восстановлению пароля введите электронную почту, указанную при регистрации.
          form.login-remind__form
            .login-remind__input-group
              label(for="remind-email") Эл. почта
                span.star *
              input#remind-email(type="email" placeholder="ivan@example.com" required)
            .login-remind__field-is-requared
              span.star *
              | &nbsp;- поля обязательные для заполнения
            .login-remind__submit-wrapper
              button(type="submit").login-remind__submit Отправить
          span.login-remind__back(@click="changeLoginState('login')") Назад

</template>

<script>
import vPopup from './v-popup.vue'

export default {
  name: 'LoginPopup',
  components: {
    vPopup
  },
  props: {
    zIndex: {
      type: Number,
      default: 8000
    }
  },
  data() {
    return {
      loginState: 'login'
    }
  },
  mounted() {
    const vm = this
    document.addEventListener('click', function(item) {
      if (item.target === vm.$refs.popup_wrapper) {
        vm.closePopup()
      }
    })
  },
  methods: {
    closePopup() {
      this.$emit('close')
    },
    changeLoginState(prop) {
      this.loginState = prop
    }
  }
}
</script>

<style lang="sass">
.v-popup-wrapper
  background-color: rgba(0, 0, 0, .46)
  position: fixed
  display: flex
  align-items: center
  justify-content: center
  left: 0
  top: 0
  width: 100vw
  height: 100vh

.v-popup-login
  padding: 10px
  position: fixed
  min-width: 320px
  background: #fff
  border: 10px solid $gray-1

  &__closeIcon
    position: absolute
    right: 8px
    top: 8px
    cursor: pointer

  &__account-icon
    align-self: center

  &__body
    display: flex
    flex-direction: column
    padding-top: 10px
    &--registration
      width: 560px
    &--remind
      width: 454px

  &__heading
    align-self: center
    margin-top: 13px
    margin-bottom: 17px
    font-size: 18px
    line-height: 21px
    text-transform: uppercase
    letter-spacing: .07em
    color: $text

  &__inputGroup
    display: flex
    justify-content: center
    flex-direction: column

  &__input
    background-color: $gray-1
    border: none
    padding: 10px 22px
    margin-bottom: 15px

  &__links
    display: flex
    justify-content: space-between
    &-item
      color: $red
      text-decoration: underline
      cursor: pointer

  &__submit
    display: flex
    justify-content: center

  &__submit-item
    margin-top: 36px
    padding: 8px 74px
    max-width: 200px
    background-color: $yellow
    text-transform: uppercase
    font-size: 15px
    font-weight: 700
    line-height: 18px
    cursor: pointer

.login-registration
  &__header
    display: flex
    align-items: flex-start

  &__heading
    margin-top: 0px
    margin-bottom: 5px
    font-size: 18px
    font-weight: 500
    line-height: 21px
    letter-spacing: .07em
    text-align: center

  &__description
    margin: 0px
    padding-left: 24px
    font-size: 12px
    font-weight: 300
    line-height: 14px
    letter-spacing: .07em

  &__input-group
    display: flex
    justify-content: space-between
    margin-top: 20px
    &:not(:last-child)
      margin-bottom: 20px
    label
      font-size: 16px
      font-weight: 500
      line-height: 19px
      letter-spacing: .07em
    input
      width: 230px
      padding: 5px 10px
      background-color: $gray-6
      border: none
      font-size: 14px
      line-height: 16px
      letter-spacing: .07em
      font-weight: 300

  &__checkbox-group
    display: flex
    align-items: center
    margin-bottom: 8px
    input
      margin-right: 8px
    label
      margin-top: -1px
      font-size: 12px
      font-weight: 300
      line-height: 14px
      letter-spacing: .07em
      cursor: pointer

  &__submit
    padding: 8px 24px
    border: none
    background-color: $yellow
    color: $text
    text-transform: uppercase
    font-weight: 700
    font-size: 15px
    line-height: 18px
    cursor: pointer
    &:active
      background-color: darken($yellow, 3%)
    &:active, &:focus
      outline: none
    &-wrapper
      display: flex
      justify-content: center
      margin-top: 20px
  &__field-is-requared
    font-size: 14px
    letter-spacing: 0.07em

.login-remind
  &__heading
    margin-top: 2px
    margin-bottom: 18px
    text-align: center
    font-size: 18px
    font-weight: 500
    line-height: 21px
    letter-spacing: .07em

  &__description
    font-size: 12px
    font-weight: 300
    line-height: 14px
    letter-spacing: .07em

  &__input-group
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 20px
    input
      width: 315px
      padding: 5px 10px
      border: none
      background-color: $gray-6
      font-size: 14px
      letter-spacing: .07em
      line-height: 16px
    label
      font-size: 16px
      font-weight: 500
      letter-spacing: .07em
      line-height: 19px

  &__submit-wrapper
    display: flex
    justify-content: center

  &__submit
    border: none
    background-color: $yellow
    text-transform: uppercase
    font-weight: 700
    font-size: 15px
    line-height: 18px
    cursor: pointer
    width: 200px
    height: 35px
    &:active
      background-color: darken($yellow, 4%)
  &__field-is-requared
    font-size: 14px
    letter-spacing: 0.07em
    margin: 30px 0 10px

.login-registration__back, .login-remind__back
  display: block
  margin-top: 16px
  text-align: center
  font-weight: 500
  font-size: 14px
  color: $gray-4
  letter-spacing: .07em
  transition: all .1s ease-out
  cursor: pointer
  &:hover
    color: $text
.star
  color: red
  font-weight: 900
.fontBold
  font-weight: 700
</style>
