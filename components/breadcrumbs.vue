<template lang="pug">
  ul.v-breadcrumbs
    li.v-breadcrumbs__item(v-for="item in breadcrumbs")
      span {{ item }}
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass">
.v-breadcrumbs
  padding: 9px 45px
  background-color: $gray-1
  &__item
    list-style: none
    display: inline-flex
    font-size: 14px
    letter-spacing: .07em
    line-height: 16px
    &:not(:last-child)
      color: $red
      font-weight: 700
      &:after
        content: '→'
        margin: 0px 4px
</style>
