<template lang="pug">
  #v-special-offers
    .special-offers__wrapper
      .special-offers__item(v-for="item in specialOffers")
        .special-offers__type {{ item.type }}
        img.special-offers__image(:src="require('../assets/images/special-offers/' + item.image)")
        .special-offers__description {{ item.description }}
</template>

<script>
export default {
  name: 'SpecialOffers',
  props: {
    specialOffers: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass">
#v-special-offers
  display: inline-block
  width: calc(50% - 20px)
  height: 590px
  float: right

.special-offers
  &__wrapper
    display: grid
    height: 100%
    overflow: hidden
    grid-template-rows: 1fr 1fr
    grid-template-columns: 1fr 1fr
    grid-gap: 20px
    margin-right: 30px
  &__item
    overflow: hidden
  &__image
    position: relative
    top: -32px
    z-index: 1
    width: 100%
  &__type
    display: flex
    align-items: center
    justify-content: center
    position: relative
    height: 30px
    width: 125px
    background-color: $yellow
    transform: rotate(-45deg)
    top: 17px
    right: 30px
    font-weight: 700
    letter-spacing: .07em
    font-size: 16px
    z-index: 2
  &__description
    display: inline-block
    align-items: center
    position: relative
    top: -100px
    width: 100%
    background-color: $red
    font-weight: 700
    padding: 12px 0px
    letter-spacing: .07em
    text-align: center
    color: white
    font-size: 14px
    z-index: 3
</style>
