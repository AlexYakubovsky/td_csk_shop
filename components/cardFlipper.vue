<template lang="pug">
  .card-flipper
    .card-flipper__container
      .card-flipper__front
        span {{ title }}
        //- span 400 000 товаров
        div
          img(:src="require(`../assets/images/small-catalog/${image}`)")
      .card-flipper__transparent-top
      .card-flipper__back
        ul
          li(v-for="item in subcategories")
            a(:href="item.link") {{ item.subcategory }}
      .card-flipper__transparent-bottom

</template>

<script>
export default {
  name: 'CardFlipper',
  props: {
    title: {
      type: String,
      default: '',
      require: true
    },
    image: {
      type: String,
      default: '',
      require: true
    },
    subcategories: {
      type: Array,
      default: () => [],
      require: true
    }
  }
}
</script>

<style lang="sass">
.card-flipper
  perspective: 1000px

  &:hover &__container
    transform: rotateY(-180deg)
    transition-delay: .15s
  &:hover &__container &__back
    z-index: 1 !important
    transition: z-index 1.5s

  &__container
    position: relative
    transform-style: preserve-3d
    transition: .75s

  &__back, .v-small-catalog__list &__front
    display: flex
    align-items: center
    flex-direction: column
    width: 260px
    height: 270px
    flex: 1 1 auto
    margin: 16px
    background-color: white
    border: 2px solid #CDCDCD
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)

  &__front
    opacity: 1
    backface-visibility: hidden
    // padding: 22px 10px 10px
    padding: 13px
    overflow: hidden
    & > div
      margin-top: 30px
    & > div > img
      width: 190px
      height: auto
    span
      color: #9b9b9b
      font-size: 15px
      font-stretch: normal
      line-height: 2.30
      // letter-spacing: .12px
      text-align: center
      background: #F6F6F6
      border: 2px solid #CDCDCD
      box-sizing: border-box
      width: 112%
      height: 47px
      &:first-child
        color: #202020
        font-size: 18px
        font-weight: 500
        margin-bottom: 7px

  &__transparent-bottom
    position: absolute
    z-index: 1
    left: 18px
    width: 280px
    height: 8px
    border-radius: 8px

  &__transparent-bottom
    bottom: 0
    background-image: linear-gradient(0deg, #fff, hsla(0, 0%, 100%, .5))
    transform: translateZ(-1px)

  &__back
    position: absolute
    z-index: -1 !important
    top: -10px
    left: 0
    overflow: auto
    display: flex
    align-items: flex-start
    height: 97%
    padding: 0px 13px
    transform: rotateY(-180deg) translateZ(1px)
    transition: z-index 1.2s
    backface-visibility: hidden
    &::-webkit-scrollbar
      width: 6px
    &::-webkit-scrollbar-thumb
      background-color: #d8d8d8
      border-radius: 10px
    &::-webkit-scrollbar-track
      border-width: 0
    ul
      list-style: none
      width: 92%
      margin: 20px 0px 20px 20px
      padding: 0 1px 0 0
      li
        &:not(:last-child)
          margin-bottom: 8px
        a
          color: #202020
          font-size: 15px
          font-weight: 400
          font-style: normal
          line-height: 1.53
          text-align: left
          font-stretch: normal
          letter-spacing: .1px
          text-decoration: none
          transition: color .1s ease
          &:hover
            color: $red
</style>
