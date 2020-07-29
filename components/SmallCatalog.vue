<template lang="pug">
  #v-small-catalog
    .v-small-catalog__heading-wrapper
      h2.v-small-catalog__heading Каталог строительных материалов
      img.v-small-catalog__heading-icon(src="~@/assets/images/icons/catalog.png")
    .v-small-catalog__list
      vCardFlipper(
        :title="catalogue['Все для кровли'].title"
        :image="catalogue['Все для кровли'].image"
        :subcategories="catalogue['Все для кровли'].subcategories"
      )
      vCardFlipper(
        :title="catalogue['Древестно-плитные материалы'].title"
        :image="catalogue['Древестно-плитные материалы'].image"
        :subcategories="catalogue['Древестно-плитные материалы'].subcategories"
      )
      vCardFlipper(
        :title="catalogue['Теплозвукоизоляция'].title"
        :image="catalogue['Теплозвукоизоляция'].image"
        :subcategories="catalogue['Теплозвукоизоляция'].subcategories"
      )
      vCardFlipper(
        :title="catalogue['Все для кровли'].title"
        :image="catalogue['Все для кровли'].image"
        :subcategories="catalogue['Все для кровли'].subcategories"
      )
      vCardFlipper(
        :title="catalogue['Древестно-плитные материалы'].title"
        :image="catalogue['Древестно-плитные материалы'].image"
        :subcategories="catalogue['Древестно-плитные материалы'].subcategories"
      )
      vCardFlipper(
        :title="catalogue['Теплозвукоизоляция'].title"
        :image="catalogue['Теплозвукоизоляция'].image"
        :subcategories="catalogue['Теплозвукоизоляция'].subcategories"
      )
      vCardFlipper(
        :title="catalogue['Все для кровли'].title"
        :image="catalogue['Все для кровли'].image"
        :subcategories="catalogue['Все для кровли'].subcategories"
      )
      vCardFlipper(
        :title="catalogue['Древестно-плитные материалы'].title"
        :image="catalogue['Древестно-плитные материалы'].image"
        :subcategories="catalogue['Древестно-плитные материалы'].subcategories"
      )
      vCardFlipper(
        :title="catalogue['Теплозвукоизоляция'].title"
        :image="catalogue['Теплозвукоизоляция'].image"
        :subcategories="catalogue['Теплозвукоизоляция'].subcategories"
      )
      vCardFlipper(
        :title="catalogue['Все для кровли'].title"
        :image="catalogue['Все для кровли'].image"
        :subcategories="catalogue['Все для кровли'].subcategories"
      )
      vCardFlipper(
        :title="catalogue['Древестно-плитные материалы'].title"
        :image="catalogue['Древестно-плитные материалы'].image"
        :subcategories="catalogue['Древестно-плитные материалы'].subcategories"
      )
      vCardFlipper(
        :title="catalogue['Теплозвукоизоляция'].title"
        :image="catalogue['Теплозвукоизоляция'].image"
        :subcategories="catalogue['Теплозвукоизоляция'].subcategories"
      )
</template>

<script>
import vCardFlipper from './cardFlipper'

export default {
  name: 'SmallCatalog',
  components: {
    vCardFlipper
  },
  props: {
    smallCatalogListItems: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      catalogue: {
        'Все для кровли': {
          title: 'Все для кровли',
          image: 'small-catalog--1.png',
          subcategories: [
            {
              subcategory: 'Гибкая черепица',
              link: 'catalog'
            },
            {
              subcategory: 'Металлочерепица',
              link: '#'
            },
            {
              subcategory: 'Керамическая черепица',
              link: '#'
            },
            {
              subcategory: 'Изоляционные пленки',
              link: '#'
            },
            {
              subcategory: 'Рулонная изоляция',
              link: '#'
            },
            {
              subcategory: 'Водосточные системы',
              link: '#'
            },
            {
              subcategory: 'Вентиляция кровли',
              link: '#'
            },
            {
              subcategory: 'Композитная кровля',
              link: '#'
            },
            {
              subcategory: 'Медная кровля',
              link: '#'
            },
            {
              subcategory: 'Мансардные окна',
              link: '#'
            },
            {
              subcategory: 'Ондулин',
              link: '#'
            },
            {
              subcategory: 'Профнастил',
              link: '#'
            },
            {
              subcategory: 'Сайдинг',
              link: '#'
            },
            {
              subcategory: 'Фальцевая кровля',
              link: '#'
            },
            {
              subcategory: 'Фасадные панели',
              link: '#'
            },
            {
              subcategory: 'Цементно-песчаная черепица',
              link: '#'
            },
            {
              subcategory: 'Чердачные лестницы',
              link: '#'
            },
            {
              subcategory: 'Шифер волновой',
              link: '#'
            },
            {
              subcategory: 'Шифер плоский',
              link: '#'
            },
            {
              subcategory: 'Элементы безопасности',
              link: '#'
            }
          ]
        },
        'Древестно-плитные материалы': {
          title: 'Древестно-плитные материалы',
          image: 'small-catalog--2.png',
          subcategories: [
            {
              subcategory: 'OSB',
              link: '#'
            },
            {
              subcategory: 'Плиты МДВП БЕЛЛПЛИТ',
              link: '#'
            },
            {
              subcategory: 'ЦСП ТАМАК',
              link: '#'
            },
            {
              subcategory: 'ДСП',
              link: '#'
            },
            {
              subcategory: 'ВДСПШ',
              link: '#'
            },
            {
              subcategory: 'GREENBOARD',
              link: '#'
            },
            {
              subcategory: 'Фанера',
              link: '#'
            },
            {
              subcategory: 'ГСП',
              link: '#'
            },
            {
              subcategory: 'ДВП',
              link: '#'
            },
            {
              subcategory: 'Двутавровые балки',
              link: '#'
            },
            {
              subcategory: 'ЛВЛ Брус',
              link: '#'
            },
            {
              subcategory: 'ЛДСП',
              link: '#'
            },
            {
              subcategory: 'МДВП',
              link: '#'
            },
            {
              subcategory: 'МДФ',
              link: '#'
            },
            {
              subcategory: 'СИП ПАНЕЛИ',
              link: '#'
            },
            {
              subcategory: 'СМЛ',
              link: '#'
            },
            {
              subcategory: 'Элемент пола на основе ГСП',
              link: '#'
            },
            {
              subcategory: 'Шифер волновой',
              link: '#'
            }
          ]
        },
        Теплозвукоизоляция: {
          title: 'Теплозвукоизоляция',
          image: 'small-catalog--3.png',
          subcategories: [
            {
              subcategory: 'Базальтовый-минеральный утеплитель',
              link: '#'
            },
            {
              subcategory: 'Льняной утеплитель',
              link: '#'
            },
            {
              subcategory: 'Эковата',
              link: '#'
            },
            {
              subcategory: 'GREEN PLANET',
              link: '#'
            },
            {
              subcategory: 'Вспененный полиэтилен',
              link: '#'
            },
            {
              subcategory: 'Пенополистирол (пенопласт)',
              link: '#'
            },
            {
              subcategory: 'Шелтерэкострой',
              link: '#'
            }
          ]
        }
      }
    }
  }
}
</script>

<style lang="sass">
#v-small-catalog
  background-color: $gray-1

.v-small-catalog
  &__heading-wrapper
    background-image: url('~@/assets/images/divider.png')
    background-position: 25% 50%
    background-repeat: no-repeat
    // transform: matrix(-1, 0, 0, 1, 0, 0)
    display: flex
    justify-content: center
  &__heading
    padding: 16px 0px
    background-image: url('~@/assets/images/divider.png')
    background-position: 0% 50%
    background-repeat: no-repeat
    font-weight: 700
    font-size: 24px
    text-transform: uppercase
    letter-spacing: .07em
    text-align: center
    color: white
    &-icon
      margin-left: 15px
      align-self: center
  &__list
    display: flex
    flex-wrap: wrap
    align-content: flex-start
    justify-content: center
    padding: 15px
</style>
