<template lang="pug">
  #v-main-map
    .v-main-map
      .v-main-map__heading-wrapper
        h2.v-main-map__heading Мы не стоим на месте, постоянно развиваемся!
        img.v-main-map__heading-icon(src="~@/assets/images/icons/grow.png")
      .v-main-map__container
        //- img.v-main-map__container-content(src="https://via.placeholder.com/1467x607.webp/F4F9E9/bd?text=Yandex+Map")
        yandexMap
</template>

<script>
import yandexMap from '~~/components/yandexMap.vue'

export default {
  name: 'MapContainer',
  components: {
    yandexMap
  }
}
</script>

<style lang="sass">
.v-main-map
  &__heading-wrapper
    padding: 15px 0px
    background-image: url('~@/assets/images/divider.png')
    background-position: 25% 50%
    background-repeat: no-repeat
    transform: matrix(-1, 0, 0, 1, 0, 0)
    display: flex
    flex-direction: row-reverse
    justify-content: center
  &__heading
    margin: 30px 0px
    padding: 16px 0px
    background-position: 25% 50%
    background-repeat: no-repeat
    color: white
    text-align: center
    font-size: 24px
    text-transform: uppercase
    letter-spacing: .07em
    font-weight: 700
    transform: matrix(-1, 0, 0, 1, 0, 0)
    &-icon
      margin-right: 15px
      align-self: center
      transform: matrix(-1, 0, 0, 1, 0, 0)
  &__container
    display: flex
    justify-content: center
    align-items: center
    margin: 0px 206px 30px 206px
    border: 5px solid $gray-5
    &-content
      border: 5px solid $gray-2
</style>
