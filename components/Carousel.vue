<template lang="pug">
  .v-carousel
    Agile(
      :autoplay="true",
      :autoplaySpeed="4000",
      :infinite="true",
      :navButtons="false",
      :speed="500",
      :timing="ease")
      .slide(v-for="item in data")
        img.slide__image(:src="require('../assets/images/carousel-images/' + item.img)")
        span.slide__slogan {{ item.slogan }}
        .theme-block
          img.theme-block__image(:src="require('../assets/images/logo-gray.png')")
          span.theme-block__title {{ item.theme }}
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  name: 'Carousel',
  components: {
    Agile: VueAgile
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass">
.v-carousel
  display: inline-block
  margin-left: 30px
  max-width: 922px
  max-height: 590px
  overflow: hidden
.agile__dots
  position: relative
  bottom: 170px
.agile__dot
  width: 40px
  margin: 0px 18px
  button
    width: 40px
    border: 6px solid white
    background-color: white
.agile__dot--current
  button
    border: 6px solid black
    background-color: black
.slide__image
  position: relative
  height: 590px
  width: 100%

.slide__slogan
  display: inline-block
  position: relative
  bottom: 560px
  width: 100%
  font-weight: 700
  font-size: 24px
  text-transform: uppercase
  padding-top: 4px
  padding-bottom: 4px
  text-align: center
  background-color: $red
  color: white

.theme-block
  display: flex
  align-items: center
  position: relative
  bottom: 200px
  background-color: rgba(239, 239, 239, .7)
  &__image
    margin: 10px 14px 10px 26px
  &__title
    font-weight: 700
    font-size: 75px
    text-transform: uppercase
    color: $text
</style>
