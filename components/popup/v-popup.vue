<template lang="pug">
  #v-popup(:style="{'width': popupWidth + 'px', 'margin-left': -(popupWidth / 2) + 'px'}")
    .v-popup-wrapper(ref="popupWrapper" :style="{'z-index': zIndex}" @click="closePopup")
    .v-popup(:style="{'z-index': zIndex + 50, 'width': popupWidth + 'px'}")
      .v-popup__header
        img(v-if="nameLeftIcon.length > 0" :src="require(`../../assets/images/icons/${nameLeftIcon}`)")
        .v-popup__header-descWrapper
          span.v-popup__header-title {{ popupTitle }}
          span.v-popup__header-desc {{ popupDescription }}
        img.v-popup__header-closeIcon(
          :src="require('../../assets/images/icons/close_mark.svg')"
          title="Закрыть окно"
          alt="Закрыть"
          @click="closePopup")
      .v-popup__content
        slot
      .v-popup__footer(v-if="popupSubmitButtonLabel || !popupSubmitButtonLabel == 'false'")
        button.popup-submit {{ popupSubmitButtonLabel }}
</template>

<script>
export default {
  name: 'Popup',
  props: {
    /**
     * Заголовок всплывающего окна
     */
    popupTitle: {
      type: String,
      default: ''
    },
    /**
     * Описание под заголовком
     */
    popupDescription: {
      type: String,
      default: ''
    },
    /**
     * Название иконки из папки icons
     */
    nameLeftIcon: {
      type: String,
      default: ''
    },
    /**
     * Подпись кнопки. Передавай false, если кнопка не нужна
     */
    popupSubmitButtonLabel: {
      type: [String, Boolean],
      default: 'Отправить'
    },
    /**
     * Значение z-index.
     * Иногда его нужно кастомизировать, чтобы в вызывающем компоненте
     * всплывающее окно корректно отображалось
     */
    zIndex: {
      type: Number,
      default: 9000
    },
    /**
     * Ширина всплывающего окна
     * Контент бывает разный
     */
    popupWidth: {
      type: Number,
      default: 460
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
    }
  }
}
</script>

<style lang="sass">
#v-popup
  position: absolute
  left: 50%

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

.v-popup
  padding: 6px
  position: fixed
  top: 100px
  background: #fff
  border: 10px solid $gray-1

  &__header
    display: flex
    justify-content: space-between
    align-items: flex-start
    padding: 0px 5px
    &-descWrapper
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      margin: auto
    &-title
      font-size: 18px
      font-weight: 500
      color: $text
      letter-spacing: .07em
    &-desc
      margin-top: 6px
      font-size: 12px
      font-weight: 300
      letter-spacing: .07em
      text-align: center
      max-width: 300px
    &-closeIcon
      margin-top: 5px
      cursor: pointer
    img:first-child
      margin-top: 12px
  &__content
    display: flex
    justify-content: center
    flex-direction: column
    margin-top: 15px
  &__footer
    display: flex
    justify-content: center
  .popup-submit
    margin-top: 20px
    margin-bottom: 5px
    padding: 8px 56px
    color: $text
    background-color: $yellow
    border: none
    text-transform: uppercase
    font-size: 15px
    font-weight: 700
    cursor: pointer
</style>
