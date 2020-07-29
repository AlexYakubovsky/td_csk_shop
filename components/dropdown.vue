<template lang="pug">
  #v-sublist
    slot
</template>

<script>
export default {
  name: 'SublistDropdown'
}
</script>

<style lang="sass">
.catalog-dropdown-sublist
  position: absolute
  top: 0px
  left: 338px
  background-color: white
  z-index: 1000

.vDropdown
  display: none
  .catalog-subdrop
    display: flex
    flex-direction: column
    margin: 0px
    padding-left: 0px
    list-style: none
    padding: 5px
    &-item
      display: flex
      flex-direction: row
      align-items: center
      min-width: 238px
      min-height: 30px
      padding: 7px 10px 7px 16px
      background-color: $gray-1
      border: 1px solid $gray-5
      font-size: 14px
      font-weight: 500
      letter-spacing: .07em
      color: $text
      cursor: pointer
      &:hover
        background-color: darken($gray-1, 4%)
      &:not(:last-child)
        margin-bottom: 5px

.catalogSubdropOpen
  display: block
  overflow-y: auto
  overflow-x: hidden
</style>
