<template lang="pug">
  #v-itemCard
    vBreadcrumbs(:breadcrumbs="breadcrumbs")
    .v-itemcard__container
      h1.v-itemcard__heading {{ $route.params.title }}

    .v-itemcard__subheading
      h3.v-itemcard__article Артикул: {{ $route.params.article }}
      .v-itemcard__consumption(@click="openPopup()")
        img.consumption__icon(:src="require('../assets/images/icons/calculator.svg')")
        h4.consumption__title Рассчитать расход материалов

    .v-itemcard__content
      .v-itemcard__images
        //- img.v-itemcard__main-image(src="https://via.placeholder.com/489x432.png")
        lingallery(
          :iid.sync="currentId"
          :width="600"
          :height="400"
          :accentColor="'#ffe600'"
          :items="galleryImages"
        )
        p.v-itemcard__disclamer Внимание! Цвет, характеристики и&nbsp;комплектация товаров, указанные на&nbsp;сайте, могут отличаться от&nbsp;реальных

      .v-itemcard__info
        .v-itemcard__prices
          .v-itemcard__prices-title Цена за: {{ $route.params.unit }}
          .v-itemcard__prices-values
            .v-itemcard__prices-clubCost клубная:&nbsp;
              span.clubCost-value {{ $route.params.clubCost }} ₽
              | &nbsp;за {{ $route.params.unit }}
            .v-itemcard__prices-cost розница:&nbsp;
              span.cost-value {{ $route.params.cost }} ₽
              | &nbsp;за {{ $route.params.unit }}

        .v-itemcard__modificator
          .v-itemcard__modificator-title МОДИФИКАЦИЯ ТОВАРА:
          .v-itemcard__modificator-list
            .v-itemcard__modificator-list-item
              img(:src="require('../assets/images/popular-items--1.png')")
            .v-itemcard__modificator-list-item
              img(:src="require('../assets/images/popular-items--1.png')")
            .v-itemcard__modificator-list-item
              img(:src="require('../assets/images/popular-items--1.png')")

        .v-itemcard__buttons
          .v-itemcard__counter
            input.v-itemcard__counter-value(
              type="number",
              name="quantity",
              v-model="counter",
              @change="onChange($event)"
              min="1",
              step="1"
            )
            .v-itemcard__counter-controlls
              button.increase(type="button" @click="counter = increaseValue(counter);") +
              button.decrease(type="button" @click="counter = decreaseValue(counter);") –

          .v-itemcard__add-to-cart
            span В корзину
          .v-itemcard__one-click-buy(@click="showOneClickBuyPopup")
            span Купить в 1 клик

        .v-itemcard__info-disclamers
          .v-itemcard__info-disclamer-item
            h6.disclamer-item__title Внимание:&nbsp;
            span.disclamer-item__text минимальный заказ данного товара составляет&nbsp;&mdash; 50&nbsp;м&sup2;
          .v-itemcard__info-disclamer-item
            h6.disclamer-item__title Доставка:&nbsp;
            span.disclamer-item__text товар будет доставлен с&nbsp;центрального склада

        .v-itemcard__summary-align
          .v-itemcard__summary
            .v-itemcard__summary-wrapper
              h6.v-itemcard__summary-title Итого:&nbsp;
              span.v-itemcard__summary-value {{ summary }} ₽

    .v-itemcard__content.bg-gray
      .v-itemcard__description
        ul.v-itemcard__description-nav
          li.description-nav__item(@click="descriptionSwitch = 'specs'" :class="{'active': (descriptionSwitch == 'specs')}")
            span Характеристики
          li.description-nav__item(@click="descriptionSwitch = 'desc'" :class="{'active': (descriptionSwitch == 'desc')}")
            span Описание

    .v-itemcard__content
      ul.v-itemcard__description-speclist(v-if="descriptionSwitch == 'specs'")
        li.speclist-item(v-for="(value, name) in itemProperties")
            span.speclist-item__title {{ name }}
            span.speclist-item__value {{ value }}

      .v-itemcard__description-desc(v-if="descriptionSwitch == 'desc'")
        h4.v-itemcard__description-desc-heading {{ $route.params.title }}
        p.v-itemcard__description-desc-content
          | Металлочерепица &laquo;Modern&raquo; имеет распространенный тип профиля, но&nbsp;за&nbsp;счет уменьшенной высоты ступеньки профиля до&nbsp;14&nbsp;мм, по&nbsp;сравнению с&nbsp;обычной серией
          |&laquo;Classic&raquo; (высота ступеньки 20&nbsp;мм), она имеет реалистичный дизайн близкий к&nbsp;натуральной керамической черепице.
          | Эта металлочерепица в&nbsp;скандинавском стиле станет отличным акцентом Вашего дома.
          | Красивый и&nbsp;гармоничный внешний вид, классика линий позволяют металлочерепице &laquo;Modern&raquo; органично сочетаться как с&nbsp;природным ландшафтом,
          | так и&nbsp;с&nbsp;любым архитектурным стилем самого дома.


    .v-itemcard__content.bg-gray
      .v-itemcard__recommended
        h3.v-itemcard__recommended-heading Рекомендуем также:

    .v-itemcard__content
      .v-itemcard__recommended-list
        vItemHorizontal(
          :image="'item-1.png'"
          :minOrder="1"
          :title="'Металлочерепица ГрандЛайн Modern PE(0,45)'"
          :clubCost="303"
          :cost="305"
          :article="'62966'"
        )
        vItemHorizontal(
          :image="'item-1.png'"
          :minOrder="1"
          :title="'Металлочерепица ГрандЛайн Modern PE(0,45)'"
          :clubCost="303"
          :cost="305"
          :article="'62966'"
        )

    .v-itemcard__content.bg-gray
      h3.v-itemcard__recently-viewed-heading Недавно просмотренные:

    .v-itemcard__content
      .v-itemcard__recently-viewed-list
        vItem(
          v-for="n in recentlyItems"
          :key="n"
          :image="'item-1.png'"
          :title="'Металлочерепица ГрандЛайн Modern PE(0,45)'"
          :clubCost="303"
          :cost="305"
          :unit="'м2'"
          :article="'62966'"
        )
    vCta

    vPopup(
      v-if="isOneClickBuyVisible"
      @openOneClickBuyPopup="showOneClickBuyPopup"
      @close="closeOneClickBuyPopup"
      :popupTitle="'Заказать в один клик'"
      :popupDescription="'Заполните форму для быстрого заказа'"
      :nameLeftIcon="'cursor_default_click.png'"
      :popupWidth="486")
      .v-itemcard__oneclick-container
        .oneclick__form
          .oneclick__input-group
            label(for="oneclick-name") Ваше ФИО
            input#oneclick(type="text" placeholder="Иванов Иван Иванович")
          .oneclick__input-group
            label(for="oneclick-phone") Телефон
            input#oneclick-phone(type="tel" placeholder="+7 (999) 123-45-67")
          .oneclick__input-group
            label(for="oneclick-email") Эл. почта
            input#oneclick-email(type="email" placeholder="ivan@example.com")
          .oneclick__input-group
            label(for="oneclick-comment") Комментарий
            textarea#oneclick-comment(rows="5" placeholder="Здесь вы можете описать свои комментарии к заказу")

          vItemHorizontalSmall(
            :article="62966"
            :image="'item-1.png'"
            :title="'Металлочерепица ГрандЛайн Modern PE (0.45)'"
            :clubCost="303"
            :cost="305")

          .oneclick__input-group--checkbox
            input#oneclick-isAgree(type="checkbox" required)
            label(for="oneclick-isAgree") Я даю свое согласие на обработку моих персональных данных.
          .oneclick__input-group--checkbox
            input#oneclick-news(type="checkbox")
            label(for="oneclick-news") Подписаться на новости
</template>

<script>
import vBreadcrumbs from '../components/breadcrumbs'
import vCta from '../components/cta'
import vItemHorizontal from '../components/itemHorizontal'
import vItem from '../components/Item'
import vPopup from '../components/popup/v-popup'
import vItemHorizontalSmall from '../components/itemHorizontalSmall'

export default {
  name: 'ItemCard',
  components: {
    vBreadcrumbs,
    vCta,
    vItemHorizontal,
    vItemHorizontalSmall,
    vItem,
    vPopup
  },
  data() {
    return {
      isOneClickBuyVisible: false,
      breadcrumbs: [
        'Главная',
        'Все для кровли',
        'Металлочерепица',
        this.$route.params.title
      ],
      counter: 1,
      recentlyItems: 4,
      currentId: null,
      galleryImages: [
        {
          id: 'id1',
          src: 'https://picsum.photos/600/400/?image=11',
          thumbnail: 'https://picsum.photos/64/64/?image=11'
        },
        {
          id: 'id2',
          src: 'https://picsum.photos/600/400/?image=12',
          thumbnail: 'https://picsum.photos/64/64/?image=12'
        },
        {
          id: 'id3',
          src: 'https://picsum.photos/600/400/?image=13',
          thumbnail: 'https://picsum.photos/64/64/?image=13'
        }
      ],
      descriptionSwitch: 'specs',
      itemProperties: {
        'Вес брутто': '4.5 кг',
        Бренд: 'Grand Line',
        Коллекция: 'Classic',
        Тип: 'Металлочерепица',
        Покрытие: 'Полиэстер',
        Профиль: 'Монтерей',
        'Количество цинка': '100-180 г/м2',
        'Толщина покрытия': '25 мкм',
        'Высота волны': '23 мм',
        'Высота ступени': '21 мм',
        'Шаг волны': '350 мм',
        'Максимальная длина': '6500 мм',
        'Минимальная длина': '500 мм',
        'Ширина общая': '1180 мм',
        'Ширина полезная': '1100 мм',
        Толщина: '0.5 мм',
        Резка: 'Да',
        'Шаг реза кратный': '10 мм',
        Цвет: 'Красный',
        Оттенок: 'RAL 3003',
        'Окрас сторон': 'Односторонний',
        'Страна производства': 'Россия'
      }
    }
  },
  computed: {
    summary() {
      const sum = this.$route.params.cost * this.counter
      return sum.toFixed(2)
    }
  },
  mounted() {
    this.$root.$on('openOneClickBuyPopup', () => {
      this.showOneClickBuyPopup()
    })
  },
  methods: {
    increaseValue(value) {
      let temp = value
      temp += 1
      return temp
    },
    decreaseValue(value) {
      let temp = value
      if (temp > 1) temp -= 1
      return temp
    },
    onChange(event) {
      ;+event.target.value <= 0
        ? (this.counter = 1)
        : (this.counter = +event.target.value)
    },
    openPopup() {
      this.$root.$emit('paymentPopup')
    },
    showOneClickBuyPopup() {
      this.isOneClickBuyVisible = true
    },
    closeOneClickBuyPopup() {
      this.isOneClickBuyVisible = false
    }
  }
}
</script>

<style lang="sass">
.v-itemcard
  &__container
    padding: 0px 45px

  &__heading
    margin: 14px 0px
    font-size: 24px
    font-weight: 700
    line-height: 28px
    letter-spacing: .07em

  &__subheading
    display: flex
    justify-content: space-between
    align-items: center
    background-color: $gray-1
    padding: 0px 45px
    margin-bottom: 50px

  &__article
    font-size: 18px
    line-height: 21px
    font-weight: 700
    color: $text

  &__consumption
    display: flex
    align-items: center
    flex-direction: row
    border-left: 1px solid $text
    padding-left: 40px
    cursor: pointer
    .consumption__title
      margin-left: 20px
      color: $red
      text-decoration: underline
      font-size: 16px
      font-weight: 400
      line-height: 19px

  &__content
    display: flex
    flex-direction: row
    padding: 0px 200px
    margin-bottom: 30px

  &__main-image
    margin-left: 75px

  &__info
    margin-left: 11.56vw

  &__prices
    display: flex
    flex-direction: row
    align-items: center
    border: 1px solid $gray-4
    &-title
      display: inline-block
      width: 344px
      padding: 56px 0px
      background-color: $gray-1
      text-align: center
      font-size: 24px
      font-weight: 700
      line-height: 28px
      letter-spacing: .07em
      border-right: 1px solid $gray-4

    &-values
      display: flex
      flex-direction: column

    &-clubCost, &-cost
      display: inline-block
      width: 286px
      padding: 20px 20px 20px 30px
      background-color: $gray-1
      font-size: 16px
      font-weight: 700
      line-height: 19px
      letter-spacing: .07em

    &-clubCost
      color: $red
      border-bottom: 1px solid $gray-4

  &__buttons
    display: flex
    align-items: center
    justify-content: space-between
    margin-top: 20px

  &__disclamers
    margin-top: 30px

  &__counter
    display: flex
    &-value
      width: 99px
      height: 66px
      border: 1px solid $yellow
      border-radius: 0px
      font-size: 24px
      letter-spacing: .07em
      text-align: center
      &:active, &:hover
        outline: none
      &::-moz-focus-inner
        border: 0
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button
        -webkit-appearance: none
        margin: 0
    input[type=number]
      -moz-appearance: textfield

    &-controlls
      display: flex
      flex-direction: column
      .decrease, .increase
        width: 35px
        height: 35px
        border: 1px solid $yellow
        border-radius: 0px
        font-size: 28px
        cursor: pointer
        &:active, &:focus
          outline: none
        &::-moz-focus-inner
          border: 0

  &__one-click-buy, &__add-to-cart
    min-width: 226px
    text-transform: uppercase
    text-align: center
    font-size: 18px
    font-weight: 700
    padding: 24px 0px
    cursor: pointer

  &__add-to-cart
    color: white
    background-color: $red
    border: 2px solid $yellow

  &__one-click-buy
    color: $text
    background-color: $yellow
    border: 2px solid $red

  &__info-disclamers
    margin-top: 30px

  &__info-disclamer-item
    display: flex
    flex-direction: row
    align-items: flex-end
    &:first-child
      margin-bottom: 5px
    .disclamer-item__title
      margin: 0px
      font-size: 16px
      font-weight: 700
      line-height: 19px
      letter-spacing: .07em
      color: $red
    .disclamer-item__text
      color: $text
      letter-spacing: .07em

  &__summary
    background-image: url('~@/assets/images/items/summary-bg.png')
    background-repeat: no-repeat
    padding: 45px 162px 44px 48px
    margin-top: 10px
    &-align
      display: flex
      justify-content: center
    &-wrapper
      width: 200px
    &-value
      display: block
    &-title, &-value
      font-size: 24px
      font-weight: 700
      line-height: 28px
      letter-spacing: .07em
      text-align: center
      color: white
    &-title
      margin: 0px

  &__disclamer
    $d-padding: 15px
    padding: $d-padding
    letter-spacing: .07em
    font-size: 16px
    font-weight: 400
    color: $text
    border: 2px dashed $yellow
    width: 598px - 2 * $d-padding + 2px
    margin-top: 15px
    margin-bottom: 0px

  &__description-nav
    padding-left: 0px
    margin: 0px
    display: flex
    flex-direction: row
    list-style: none

    .description-nav__item
      padding: 25px 80px
      text-transform: uppercase
      letter-spacing: .07em
      font-size: 18px
      font-weight: 700
      cursor: pointer
    .active
      background-color: white
      border: 1px solid $yellow

  &__description-speclist
    padding-left: 0px
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-column-gap: 74px
    .speclist-item
      display: flex
      justify-content: space-between
      width: 376px
      padding: 18px 39px 18px 34px
      border: 2px solid $yellow
      margin-bottom: 20px
      font-size: 20px
      font-weight: 400
      line-height: 23px
      letter-spacing: .07em

  &__description-desc
    &-content
      font-size: 16px
      line-height: 19px
      letter-spacing: .07em
      font-weight: 400
      color: $text

    &-heading
      margin-top: 0px
      font-size: 20px
      font-weight: 700
      line-height: 23px
      letter-spacing: .07em
      color: $text

  &__recommended-heading, &__recently-viewed-heading
    margin: 0px
    padding: 24px 55px
    font-size: 18px
    font-weight: 700
    line-height: 21px
    letter-spacing: .07em
    text-transform: uppercase
    background-color: white
    border: 1px solid $yellow

  &__recently-viewed-list
    display: grid
    grid-template-columns: repeat(5, 1fr)

  &__oneclick-container
    padding: 0px 15px
    .oneclick__input-group
      display: flex
      justify-content: space-between
      margin-bottom: 20px
      input, textarea
        background-color: $gray-1
        border: none
        padding: 5px 10px
        width: 230px
        font-size: 14px
        font-weight: 300
        letter-spacing: .07em
      textarea
        resize: none
    .oneclick__input-group--checkbox
      display: flex
      align-items: center
      &:not(:last-child)
        margin-bottom: 6px
      input
        margin-right: 8px
      label
        font-size: 12px
        font-weight: 300
        letter-spacing: .07em
  &__modificator
    margin-top: 15px
    &-title
      color: red
      font-size: 16px
      font-weight: 700
      line-height: 19px
      margin-bottom: 15px
    &-list
      display: flex
      justify-content: start
      &-item
        width: 100px
        height: 90px
        border: 1px solid #BBBBBB
        margin-right: 30px
        img
          object-fit: cover
          width: 100%
          height: 100%

.clubCost-value, .cost-value
  font-size: 26px
  font-weight: 700
  line-height: 30px
  letter-spacing: .07em

.bg-gray
  background-color: $gray-3
</style>
