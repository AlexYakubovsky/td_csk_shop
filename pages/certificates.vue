<template lang="pug">
  #v-certificates
    vBreadcrumbs(:breadcrumbs="breadcrumbs")
    h1.v-certificates__heading Сертификаты
    .v-certificates__container
      .v-certificates__container-item(v-for="i in 21")
        img.v-certificates__container-item-image(:src="require(`../assets/images/certificates/image ${i}.jpg`)")
    vCTA
</template>

<script>
import vBreadcrumbs from '../components/breadcrumbs.vue'
import vCTA from '../components/cta.vue'

export default {
  name: 'Certificates',
  components: {
    vBreadcrumbs,
    vCTA
  },
  data() {
    return {
      breadcrumbs: ['Главная', 'Сертификаты']
    }
  }
}
</script>

<style lang="sass">
.v-certificates__heading
  margin: 15px 0px 15px 45px
  font-size: 24px
  color: $text
  letter-spacing: .07em

.v-certificates__container
  display: grid
  grid-template-columns: repeat(7, 1fr)
  column-gap: 15px
  row-gap: 16px
  padding: 0px 45px
  margin-bottom: 30px
  @media (max-width: 1600px)
    columns: 4
  @media (max-width: 1200px)
    columns: 3
  @media (max-width: 900px)
    columns: 2
  @media (max-width: 640px)
    columns: 1
  &-item
    display: block
    border: 3px solid $red
    &-image
      width: 100%
      page-break-inside: avoid
      break-inside: avoid-column
</style>
