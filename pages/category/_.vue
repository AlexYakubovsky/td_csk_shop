<template lang="pug">
  #v-catalog
    vBreadcrumbs(:breadcrumbs="breadcrumbs")
    h1.v-catalog__heading {{ this.$store.state.productsData.cName }}
    .v-catalog
      .v-catalog__aside
        .v-catalog__categories
          .categories__header
            h4.categories__heading Категории
            img.categories__icon(:src="require('~~/assets/images/icons/shevron-right.svg')" title="Свернуть")
          ul.categories__list(v-for="item in this.$store.state.categories")
            li.categories__list-item(v-for="sub in item.subcategories")
              nuxt-link.categories__list-link(:to="`/category/${sub.cSlug}`")
                span.categories__item-title {{ sub.cName }}
                span.categories__counter {{ sub.products.length }}

          span.categories__additional + 15 категорий

        .v-catalog__filters
          ul.filters__list
            li.filters__list-item(v-for="(value, name) of thatFilters")
              .filters__header
                p.filters__heading {{ name }}
                img.categories__icon(:src="require('~~/assets/images/items/arrow-circle.svg')" title="Свернуть")

              .filters__range(v-if="value.constructor === Object")
                input.range-input(
                  type="number"
                  :min="PRODUCT_PROPERTIES[name].min"
                  :max="PRODUCT_PROPERTIES[name].max"
                  v-model.number="thatFilters[name].min"
                  @change="rangeChanged(name, 'min')"
                  step="1")

                span &nbsp;—&nbsp;

                input.range-input(
                  type="number"
                  :min="PRODUCT_PROPERTIES[name].min"
                  :max="PRODUCT_PROPERTIES[name].max"
                  v-model.number="thatFilters[name].max"
                  @change="rangeChanged(name, 'max')"
                  step="1")

                span.filters__range-unit {{ thatFilters[name].unit }}

              .input-group(
                v-if="value.constructor === Array"
                v-for="item in value"
                :key="value.indexOf(item)"
              )
                  input.input-group__input(
                    type="checkbox"
                    :name="`${sl(item.name)}-${sl(item)}`"
                    :id="`${sl(item.name)}-${sl(item)}`"
                    v-model="item.value"
                  )
                  label.input-group__label(:for="`${sl(item.name)}-${sl(item)}`") {{ item.name }}

          .categories__buttons
            span.categories__buttons-clear(@click="clearFilter") Очистить
            span.categories__buttons-apply(@click="applyFilter") Применить

      .v-catalog__content
        img(:src="require('~~/assets/images/items/banner.png')")

        .v-catalog__queries-wrapper
          .v-catalog__frequently-searching
            h3 Часто ищут:
            span.freq-search-item Медная кровля
            span.freq-search-item Рулонная изоляция
            span.freq-search-item Керамическая черепица
            .freq-list
              span Все запросы
              img(:src="require('~~/assets/images/items/arrow-down.svg')")

          .v-catalog__sorting
            h3 Сортировать по:
            .v-catalog__sorting-wrapper
              span.v-catalog__sorting-wrapper-title убыванию цены
              img(:src="require('~~/assets/images/items/arrow-down-red.svg')")
            .v-catalog__price-list
              img(:src="require('~~/assets/images/items/pricelist.svg')")
              span.v-catalog__price-list-title Скачать прайс-лист
            .v-catalog__partial-showing
              span Показывать по:
              .v-catalog__partial-showing-value
                span 15
                img(:src="require('~~/assets/images/items/arrow-down-red.svg')")
            .v-catalog__showing-type
              img(:src="require('~~/assets/images/items/choose-type-1.svg')")
              img(:src="require('~~/assets/images/items/choose-type-2.svg')")
              img(:src="require('~~/assets/images/items/choose-type-3.svg')")
        .v-catalog__items-wrapper
          .v-catalog__items-list
            vItem(
              v-for="item in $store.state.productsData.products"
              :key="item.article"
              :image="item.image"
              :title="item.title"
              :clubCost="item.clubCost"
              :cost="item.cost"
              :unit="item.unit"
              :article="item.article"
            )
          .v-catalog__items-more
            span.items-more() Показать ещё 15 товаров
            span.items-summary Всего 999 товаров
    vCta
</template>

<script>
import { transliterate as tr, slugify } from 'transliteration'
import { mapActions, mapGetters } from 'vuex'
import vBreadcrumbs from '../../components/breadcrumbs.vue'
import vCta from '../../components/cta.vue'
import vItem from '../../components/Item.vue'

export default {
  name: 'Catalog',
  components: {
    vBreadcrumbs,
    vCta,
    vItem
  },
  data() {
    return {
      thatFilters: {}
    }
  },
  computed: {
    ...mapGetters(['PRODUCT_PROPERTIES', 'PRODUCT_FILTERS']),

    breadcrumbs() {
      return ['Главная', 'Каталог', this.$store.state.productsData.cName]
    }
  },
  mounted() {
    this.getProducts({
      currentCategory: this.$store.state.currentCategory,
      subcategory: this.$route.params.pathMatch
    })
      .then(() => {
        this.setProductsProperties()
      })
      .then(() => {
        this.setProductsFilters()
      })
      .then(() => {
        // глубокая копия
        this.thatFilters = JSON.parse(JSON.stringify(this.PRODUCT_FILTERS))
      })
  },
  methods: {
    ...mapActions([
      'getProducts',
      'setProductsProperties',
      'setProductsFilters',
      'productsFiltering',
      'resetFilters'
    ]),

    sl(value) {
      return slugify(tr(value))
    },

    /**
     * @description Проверка значений фильтра диапазона
     * @param {String} filterName Название диапазона
     * @param {String} filterType Редактируемая граница диапазона (min или max)
     */
    rangeChanged(filterName, filterType) {
      switch (filterType) {
        case 'min':
          if (
            this.thatFilters[filterName].min <
            this.PRODUCT_PROPERTIES[filterName].min
          ) {
            this.thatFilters[filterName].min = this.PRODUCT_PROPERTIES[
              filterName
            ].min
          }
          if (
            this.thatFilters[filterName].min > this.thatFilters[filterName].max
          ) {
            this.thatFilters[filterName].min = this.thatFilters[filterName].max
          }
          break

        case 'max':
          if (
            this.thatFilters[filterName].max >
            this.PRODUCT_PROPERTIES[filterName].max
          ) {
            this.thatFilters[filterName].max = this.PRODUCT_PROPERTIES[
              filterName
            ].max
          }
          if (
            this.thatFilters[filterName].max < this.thatFilters[filterName].min
          ) {
            this.thatFilters[filterName].max = this.thatFilters[filterName].min
          }
          break
      }
    },

    applyFilter() {
      this.$store.commit('SET_PRODUCTS_FILTER_VALUES', this.thatFilters)
      this.productsFiltering({
        currentCategory: this.$store.state.currentCategory,
        subcategory: this.$route.params.pathMatch
      })
    },

    clearFilter() {
      for (const filterItem in this.thatFilters) {
        switch (this.thatFilters[filterItem].constructor) {
          case Object:
            this.thatFilters[filterItem].min = this.PRODUCT_PROPERTIES[
              filterItem
            ].min
            this.thatFilters[filterItem].max = this.PRODUCT_PROPERTIES[
              filterItem
            ].max
            break

          case Array:
            for (const item in this.thatFilters[filterItem]) {
              this.thatFilters[filterItem][item].value = false
            }
            break
        }
      }
      this.$store.commit('SET_PRODUCTS_FILTER_VALUES', this.thatFilters)
      this.getProducts({
        currentCategory: this.$store.state.currentCategory,
        subcategory: this.$route.params.pathMatch
      })
    }
  }
}
</script>

<style lang="sass">
.slider
  width: 200px

.v-catalog
  display: flex
  flex-direction: row
  padding: 0px 45px
  &__heading
    margin-left: 45px

.categories__list, .filters__list
  list-style: none
  padding-left: 0px

.filters__list-item
  cursor: pointer
  &:not(:last-child)
    border-bottom: 1px solid $gray-5
  &:not(:first-child)
    margin-top: 8px

.filters__heading
  font-size: 14px
  font-weight: 700
  line-height: 16px
  letter-spacing: .07em
  text-transform: uppercase

.v-catalog__categories
  margin-bottom: 30px

.v-catalog__categories, .v-catalog__filters
  border: 2px solid $gray-4
  width: 256px
  padding: 15px 20px

.categories__list-item
  margin-bottom: 8px
  .categories__counter
    display: inline-block
    min-width: 32px
    padding: 2px
    text-align: center
    font-size: 14px
    font-weight: 700
    background-color: $yellow

.categories__list-link
  display: flex
  justify-content: space-between
  text-decoration: none

.categories__item-title, .categories__additional
  font-size: 14px
  line-height: 16px
  letter-spacing: .07em

.categories__item-title
  text-decoration: underline
  color: $text

.filters__header
  display: flex
  align-items: center
  justify-content: space-between
  margin-top: 16px
  margin-bottom: 8px
  .filters__heading
    margin: 0px

.filters__range
  margin-bottom: 10px
  .range-input
    padding: 4px 4px
    text-align: center
    font-size: 14px
    border: 1px solid #505050
    border-radius: 3px
    width: 64px
    -moz-appearance: textfield
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button
      -webkit-appearance: none
      margin: 0

  &-unit
    display: inline-block
    margin-left: 6px
    font-size: 14px
    letter-spacing: .1ex

.categories__header
  display: flex
  justify-content: space-between
  align-items: center
  padding-bottom: 8px
  border-bottom: 1px solid $gray-4
  .categories__heading
    margin-top: 0px
    margin-bottom: 0px
    text-transform: uppercase
    font-size: 14px
    line-height: 16px
    letter-spacing: .07em
    font-weight: 700
    padding-bottom: 2px

.categories__buttons
  display: flex
  flex-direction: column
  align-items: center
  .categories__buttons-clear,
  .categories__buttons-apply
    border: 2px solid $red
    width: 100%
    text-align: center
    padding: 10px 0px
    color: $red
    background-color: white
    font-weight: 700
    font-size: 15px
    line-height: 18px
    text-transform: uppercase
    cursor: pointer
    &:hover
      background-color: $red
      color: white
  .categories__buttons-apply
    margin-top: 15px

.v-catalog__content
  margin-left: 30px

.v-catalog__queries-wrapper
  margin-top: 35px
  border: 2px solid $gray-4

.v-catalog__frequently-searching
  display: inline-flex
  align-items: center
  flex-direction: row
  padding: 20px 40px
  h3
    margin: 0px
    letter-spacing: .07em
    font-size: 18px
    line-height: 21px
    text-transform: uppercase
    color: $text
  .freq-search-item
    padding: 5px 23px
    background-color: $yellow
    text-transform: uppercase
    text-decoration: underline
    letter-spacing: .07em
    font-weight: 700
    font-size: 18px
    margin-left: 30px

.freq-list
  margin-left: 268px
  display: flex
  flex-direction: row
  align-items: center
  img
    margin-left: 7px
  span
    font-size: 15px
    letter-spacing: .07em
    line-height: 19px

.v-catalog__sorting
  display: inline-flex
  align-items: center
  flex-direction: row
  border-top: 1px solid $gray-5
  padding-left: 40px
  h3
    margin: 0px
    letter-spacing: .07em
    font-size: 18px
    line-height: 21px
    text-transform: uppercase
    color: $text
    margin-right: 8px

.v-catalog__sorting-wrapper
  display: flex
  align-items: center
  margin-right: 54px
  &-title
    font-size: 18px
    letter-spacing: .07em
    line-height: 21px
    text-decoration: underline
    color: $red
  img
    margin-left: 11px

.v-catalog__price-list
  display: flex
  align-items: center
  margin-right: 458px
  &-title
    font-size: 14px
    color: $red
  img
    margin-right: 7px

.v-catalog__partial-showing
  display: flex
  align-items: center
  margin-right: 37px

.v-catalog__partial-showing-value
  margin-left: 8px
  color: $red
  font-size: 18px
  letter-spacing: .07em
  line-height: 21px
  text-decoration: underline
  img
    margin-left: 7px

.v-catalog__showing-type
  height: 70px
  img
    border-left: 1px solid $gray-5

.v-catalog__items-wrapper
  margin-top: 35px
  .v-catalog__items-more
    background-color: $gray-3
    display: flex
    align-items: center
    flex-direction: column
    padding: 25px
    margin-bottom: 48px
    .items-more, .items-summary
      display: inline-block
    .items-more
      font-size: 18px
      font-weight: 700
      letter-spacing: .07em
      text-decoration: underline
      color: $red
      cursor: pointer
      margin-bottom: 10px
    .items-summary
      font-weight: 700
      letter-spacing: .07em
      color: $text

.v-catalog__items-list
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr

.input-group
  display: flex
  align-items: flex-start
  margin-bottom: 8px
  &__input
    width: 14px
    height: 14px
    cursor: pointer
  &__label
    display: inline-block
    font-size: 14px
    padding-left: 6px
    cursor: pointer
</style>
