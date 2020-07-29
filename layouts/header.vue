<template lang="pug">
  #v-header

    vPopup(
      v-if="isPaymentRequestVisible"
      @close="closePopup"
      :popupTitle="'Заявка на бесплатный расчёт'"
      :popupDescription="'Оставьте Ваши данные и коментарии наши менеджеры свяжутся с Вами'"
      :nameLeftIcon="'pencil-writing-on-a-paper-sheet.png'"
      :popupSubmitButtonLabel="'Отправить'"
      :popupWidth="460")
      .popupInputGroup__header-payment-request
        label(for="Payment_Name")
          | Ваше имя
          span.redAsterisk
        input#Payment_Name(type="text" placeholder="Иванов Иван Иванович")
      .popupInputGroup__header-payment-request
        label(for="Payment_Email")
          | Эл. почта
          span.redAsterisk
        input#Payment_Email(type="email" placeholder="ivan@example.com")
      .popupInputGroup__header-payment-request
        label(for="Payment_Phone")
          | Телефон
          span.redAsterisk
        input#Payment_Phone(type="phone" placeholder="+7 (999) 123-45-67")
      .popupInputGroup__header-payment-request
        label(for="Payment_File") Прикрепить файл
        input#Payment_File(type="file")
        span.v-header__clip-container
          img(src="~@/assets/images/icons/clip.png" title="Логотип")
      .popupInputGroup__header-payment-request
        label(for="Payment_Company") Название компании
        input#Payment_Company(type="text")
      .popupInputGroup__header-payment-request
        label(for="Payment_INN") ИНН
        input#Payment_INN(type="text")
      .popupInputGroup__header-payment-request
        label(for="Payment_Comment") Комментарий
        textarea#Payment_Comment(cols="30" rows="5" placeholder="Оставьте свои пожелания здесь")
      .popupInputGroup__header-payment-request
        .popupInputGroup_CheckWrapper
          input#Payment_Agreement(type="checkbox" required)
          label(for="Payment_Agreement")
            | Я даю свое
            span.check_accent &nbsp;согласие на обработку
            | &nbsp;моих персональных данных.

    vPopup(
      v-if="isFeedbackVisible"
      @close="closePopup"
      :popupTitle="'Бесплатный звонок'"
      :popupDescription="'Оставьте Ваши данные и наши менеджеры свяжутся с Вами'"
      :nameLeftIcon="'phone-volume.png'"
      :popupSubmitButtonLabel="'Отправить'")
      .popupInputGroup
        label(for="Payment_Name")
          | Ваше имя
          span.redAsterisk
        input#Payment_Name(type="text" placeholder="Иванов Иван Иванович")
      .popupInputGroup
        label(for="Payment_Email")
          | Эл. почта
          span.redAsterisk
        input#Payment_Email(type="email" placeholder="ivan@example.com")
      .popupInputGroup
        label(for="Payment_Phone")
          | Телефон
          span.redAsterisk
        input#Payment_Phone(type="phone" placeholder="+7 (999) 123-45-67")
      .popupInputGroup
        .popupInputGroup_CheckWrapper
          input#Payment_Agreement(type="checkbox" required)
          label(for="Payment_Agreement")
            | Я даю свое
            span.check_accent &nbsp;согласие на обработку
            | &nbsp;моих персональных данных.

    vPopupLogin(
      v-if="isAccountLoginVisible"
      @close="closePopup")

    .v-header
      nuxt-link.v-header__mainPage(to="/" @click="closeAll()")
        img.v-header__logo(src="~@/assets/images/LOGO_RUS.png" title="Логотип")
        span.v-header__logo-desc Центр строительной комплектации
      .v-header__info
        ul.v-header__info-list
          li.v-header__info-list-item
            span +7 (495) 132-74-00
          li.v-header__info-list-item
            span +7 (495) 134-28-06
          li.v-header__info-list-item#setCity(@click="toggle('setCity')" :class="{'setCityDialog': dropDowns.setCity.open}" )
            span.v-header__info-list-item-title {{ $store.state.currentCity }}
            img.v-header__info-list-item-icon(src="~@/assets/images/icons/arrow-down.svg" title="Стрелочка")
            ul.setCity-dropdown-menu
              li.setCity-dropdown-menu-item(@click="$store.dispatch('setCity', 'Москва и Московская область')")
                span Москва и Московская область
              li.setCity-dropdown-menu-item(@click="$store.dispatch('setCity', 'Санкт-Петербург')")
                span Санкт-Петербург
              li.setCity-dropdown-menu-item(@click="$store.dispatch('setCity', 'Казань')")
                span Казань
              li.setCity-dropdown-menu-item(@click="$store.dispatch('setCity', 'Краснодар')")
                span Краснодар
              li.setCity-dropdown-menu-item(@click="$store.dispatch('setCity', 'Астрахань')")
                span Астрахань
              li.setCity-dropdown-menu-item(@click="$store.dispatch('setCity', 'Симферополь')")
                span Симферополь
              li.setCity-dropdown-menu-item(@click="$store.dispatch('setCity', 'Севастополь')")
                span Севастополь
              li.setCity-dropdown-menu-item(@click="$store.dispatch('setCity', 'Волгоград')")
                span Волгоград

      nav.v-header__nav
        ul.v-header__nav-list
          li.v-header__nav-list-item#PaymentRequest(@click="showPaymentRequest")
            img.v-header__nav-list-item-icon(src="~@/assets/images/icons/letter.png")
            span.v-header__nav-list-item-title Заявка на расчёт

          li.v-header__nav-list-item(@click="closeAll()")
            nuxt-link.v-header__nav-link(to="/about")
              img.v-header__nav-list-item-icon(src="~@/assets/images/icons/about.png")
              span.v-header__nav-list-item-title О нас

          li.v-header__nav-list-item(@click="closeAll()")
            nuxt-link.v-header__nav-link(to="/certificates")
              img.v-header__nav-list-item-icon(src="~@/assets/images/icons/certificate.png")
              span.v-header__nav-list-item-title Сертификаты

          //- li.v-header__nav-list-item#Customers(@click="toggle('customers')" :class="{'customersDropDownOpen': dropDowns.customers.open}")
          //-   img.v-header__nav-list-item-icon(src="~@/assets/images/icons/customer.png")
          //-   span.v-header__nav-list-item-title Покупателям
          //-   ul.customers-dropdown-menu
          //-     nuxt-link(to="/delivery" @click="closeAll()")
          //-       li.customers-dropdown-menu__item
          //-         span Доставка
          //-     nuxt-link(to="/payment" @click="closeAll()")
          //-       li.customers-dropdown-menu__item
          //-         span Оплата

          li.v-header__nav-list-item(@click="closeAll()")
            nuxt-link.v-header__nav-link(to="/payment")
              img.v-header__nav-list-item-icon(src="~@/assets/images/icons/customer.png")
              span.v-header__nav-list-item-title Покупателям

          li.v-header__nav-list-item(@click="closeAll()")
            nuxt-link.v-header__nav-link(to="/delivery")
              img.v-header__nav-list-item-icon(src="~@/assets/images/icons/delivery.png")
              span.v-header__nav-list-item-title Доставка

          //- li.v-header__nav-list-item(@click="closeAll()")
          //-   nuxt-link.v-header__nav-link(to="/wholesalers")
          //-     img.v-header__nav-list-item-icon(src="~@/assets/images/icons/wholesalers.png")
          //-     span.v-header__nav-list-item-title Оптовикам

          //- li.v-header__nav-list-item(@click="closeAll()")
          //-   nuxt-link.v-header__nav-link(to="/articles")
          //-     img.v-header__nav-list-item-icon(src="~@/assets/images/icons/articles.svg")
          //-     span.v-header__nav-list-item-title Статьи

          li.v-header__nav-list-item(@click="closeAll()")
            nuxt-link.v-header__nav-link(to="/contacts")
              img.v-header__nav-list-item-icon(src="~@/assets/images/icons/contact-phone.png")
              span.v-header__nav-list-item-title Контакты

      .v-header__feedback#Feedback(@click="showFeedback")
        span.v-header__feedback-desc Обратная связь

    .v-subheader
      .v-subheader__catalog-content(:class="{'catalogDropDownOpen': dropDowns.catalog.open}")
        .catalog-dropdown-menu
          //- по клику на категорию создаётся объект подкатегории в data()
          .catalog-dropdown-menu-item(
            v-for="item in menuRoutes"
            :key="`${item._id}`"
            @mouseenter="toggleSublistItem(item.subcategoryName)"
            @mouseleave="toggleSublistItem(item.subcategoryName)"
            )

            //- img.dropdown-menu-item-image(:src="require(`../assets/images/icons/${item.icon}`)")
            span.dropdown-menu-item-title {{ item.subcategoryName }}
            img.dropdown-menu-item-arrow(v-if="item.subcategories.length > 1" :src="require('../assets/images/icons/arrow-right-menu.svg')")

            .catalog-dropdown-sublist(v-if="item.subcategories.length > 1")
              vDropdown.vDropdown(
                v-if="dropd[item.subcategoryName].open"
                v-for="subitem in item.subcategories"
                :key="`${item._id}-${subitem.cSlugLink}`")

                .catalog-subdrop
                  span {{ dropdowns[item.subcategoryName].open }}
                  nuxt-link.catalog-subdrop-item(:to="`/category/${subitem.cSlugLink}`" @click.native="closeAll(); setCurrentCategory(subitem.cName)")
                    span {{ subitem.cName }}

            //-
              .catalog-dropdown-sublist
                vDropdown.vDropdown(
                  v-for="subitem in item.subcategories"
                  :key="subitem.article"
                  :class="{ 'catalogSubdropOpen': dropDowns.catalog.categories[item.categoryName].open }")

                  .catalog-subdrop
                    nuxt-link.catalog-subdrop-item(:to="`/category/${subitem.cSlug}`" @click.native="closeAll(); setCurrentCategory(subitem.cName)")
                      span {{ subitem.cName }}


      .v-subheader__catalog#catalog(@click="toggle('catalog')")
        img.v-subheader__catalog-icon(src="~@/assets/images/icons/burger-menu.svg")
        span.v-subheader__catalog-desc Каталог товаров

      form.v-subheader__search
        input.v-subheader__search-input(
          type="text"
          placeholder="Введите наименование товара или артикул")
        button.v-subheader__search-button(type="text" name="search-query")
      .v-subheader__account(@click="showAccountLogin")
        img.v-subheader__account-icon(src="~@/assets/images/icons/personal-account.svg")
        span.v-subheader__account-title Личный кабинет
      .v-subheader__favorites
        img.v-subheader__favorites-icon(src="~@/assets/images/icons/heart-favorite.svg")
        span.v-subheader__favorites-title Избранное
      nuxt-link.v-subheader__cart(to="/cart")
        img.v-subheader__cart-icon(src="~@/assets/images/icons/shop-cart.svg")
        span.v-subheader__cart-title Корзина пуста
</template>

<script>
import { mapState } from 'vuex'
import { slugify } from 'transliteration'
import vPopup from '../components/popup/v-popup.vue'
import vPopupLogin from '../components/popup/v-popup-login.vue'
import vDropdown from '../components/dropdown.vue'

export default {
  /**
   * TODO:
   *    # сформировать имена dropdown-меню на основе menuRoutes.
   *      возможное решение через одинаковые свойства computed и watch (https://qna.habr.com/q/563876)
   *      возможно ещё через глубокую копию как в каталоге
   *    # отредактировать динамическую маршрутизацию – нужно для ссылок из выпадающего списка
   *    # отредактировать маршрутизацию для прямого перехода по ссылке, не затрагивая главную страницу
   *    # возможно сгруппировать категории внутри списка товаров, начиная каждый с заголовка (categoryName)
   *    # написать API для получения товаров выбранной категории
   */
  name: 'Header',
  components: {
    vPopup,
    vPopupLogin,
    vDropdown
  },
  data() {
    return {
      isPaymentRequestVisible: false,
      isFeedbackVisible: false,
      isAccountLoginVisible: false,
      dropDowns: {
        customers: { open: false },
        setCity: {
          open: false
        },
        catalog: {
          open: false,
          categories: {} // формируется от ответа сервера
        }
      }
    }
  },
  computed: {
    // ...mapGetters(['GET_MENU_ROUTES', 'GET_MENU_DROPDOWNS']),
    ...mapState(['menuRoutes', 'menuDropdowns']),

    dropd() {
      return JSON.parse(JSON.stringify(this.menuDropdowns))
    }
  },

  watch: {
    dropd() {}
  },

  mounted() {
    // this.$store.dispatch('getCategories')
    this.$store.dispatch('getMenuRoutes').then((res) => {
      for (const route of res) {
        this.dropDowns.catalog.categories[route.subcategoryName] = {
          open: false
        }
      }
    })

    this.$root.$on('paymentPopup', () => {
      this.isPaymentRequestVisible = true
    })
  },
  methods: {
    showPaymentRequest() {
      this.isPaymentRequestVisible = true
    },

    showFeedback() {
      this.isFeedbackVisible = true
    },

    showAccountLogin() {
      this.isAccountLoginVisible = true
    },

    closePopup() {
      this.isPaymentRequestVisible = false
      this.isFeedbackVisible = false
      this.isAccountLoginVisible = false
    },

    toggle(dropDownName) {
      if (dropDownName === 'catalog') {
        for (const item in this.dropDowns.catalog.categories) {
          this.dropDowns.catalog.categories[item].open = false
        }
      }
      this.dropDowns[dropDownName].open = !this.dropDowns[dropDownName].open
    },

    toggleSublistItem(cat) {
      if (this.dropd[cat] !== undefined) {
        for (const item in this.dropd) {
          if (item === cat) continue
          this.dropd[item].open = false
        }
        this.dropd[cat].open = !this.dropd[cat].open
      }
    },

    closeAll() {
      // закрываем все поп-апы
      this.closePopup()
      // закрываем все выпадающие меню
      for (const item in this.dropDowns) {
        this.dropDowns[item].open = false
      }
      // закрываем все выпадающие подменю
      for (const item in this.dropDowns.catalog.categories) {
        this.dropDowns.catalog.categories[item].open = false
      }
    },

    setCurrentCategory(category) {
      this.$store.dispatch('setCurrentCategory', category)
    },

    sl(str) {
      return slugify(str)
    },

    checkDropdown(key) {
      if (this.dropDowns.catalog.categories[key] === undefined) {
        return false
      } else if (this.dropDowns.catalog.categories[key].open === true) {
        return true
      } else {
        console.log('successful')
        return false
      }
    }
  }
}
</script>

<style lang="sass">
#PaymentRequest, #Customers
  cursor: pointer
  transition: color .1s ease
  img
    margin-bottom: 3px
  &:hover
    color: $red
#Feedback
  cursor: pointer
  transition: all .15s ease
  &:hover
    box-shadow: 0px 4px 8px rgba($text, .2)
#setCity, #catalog
  cursor: pointer
.popupInputGroup, .popupInputGroup__header-payment-request
  margin-bottom: 20px
  display: flex
  justify-content: space-between
  align-items: center
  & > input, textarea
    border: none
    padding: 5px 10px
    background-color: $gray-1
    font-size: 14px
    font-weight: 300
    color: $text
    width: 70%
    &:active, &:focus
      outline-color: $red
  textarea
    height: 75px
    resize: none

  & > label
    font-size: 16px
    font-weight: 500
    letter-spacing: .07em
    margin-left: 15px
  &_CheckWrapper
    display: flex
    align-items: center
    label
      margin-left: 7px
      font-size: 12px
      font-weight: 300
      letter-spacing: .07em
    input
      width: 15px
      height: 15px
      margin-left: 0
    .check_accent
      font-weight: 700

  .redAsterisk:after
    content: '*'
    font-weight: 500
    color: $red
.popupInputGroup
  &__header-payment-request
    & > input, textarea
      width: 55%
    & > label
      margin-left: 0
.v-header
  display: flex
  justify-content: flex-start
  align-items: center
  height: 96px
  background-color: white
  &__mainPage
    display: flex
    align-items: center
    text-decoration: none
  &__logo
    margin: 6px 4px 6px 30px
  &__logo-desc
    max-width: 83px
    font-weight: 700
    font-size: 10px
    text-transform: uppercase
    color: $text
  &__info
    &-list
      margin-left: 55px
      width: 256px
    &-list-item
      list-style: none
      margin-bottom: 5px
      font-weight: 700
      font-size: 16px
      line-height: 19px
      &-icon
        margin-left: 4px
  &__nav
    display: flex
    align-items: center
    margin-left: 130px
    &-link
      display: flex
      align-items: center
      text-decoration: none
      color: $text
      transition: color .1s ease
      &:hover
        color: $red
    &-list
      padding-left: 0
    &-list-item
      list-style: none
      display: inline-flex
      align-items: center
      &:not(:last-child)
        margin-right: 40px
      &-title
        display: inline-block
        font-weight: 400
        margin-left: 8px
        font-weight: 500
  &__feedback
    background-color: $red
    padding: 10px 42px
    margin-left: 85px
    &-desc
      font-weight: 900
      font-size: 16px
      color: white
      text-transform: uppercase
  &__clip-container
    position: absolute
    img
      position: relative
      left: 420px
      top: 2px
.v-subheader
  display: flex
  align-items: center
  padding: 25px 0px
  background-color: $gray-1
  border-bottom: 2px solid #EFEFEF
  &__catalog
    display: flex
    align-items: center
    margin-left: 98px
    &-icon
      margin-right: 8px
      padding: 10px 7.5px
    &-desc
      display: inline-block
      margin-bottom: -4px
      font-weight: 700
      font-size: 18px
      color: $text
  &__search
    margin-left: 80px
    max-width: 748px
    position: relative
    &-input
      border: 1px solid white
      padding: 13px 20px
      width: 35vw
      font-weight: 400
      outline-color: $red

    &-button
      display: inline-block
      width: 30px
      height: 30px
      position: absolute
      right: 16px
      top: 8px
      background: transparent url('~@/assets/images/icons/search.svg') no-repeat 50% 50%
      border: none
      cursor: pointer
      transition: all .15s ease
  &__account, &__favorites
    display: flex
    flew-direction: row
    &-title
      display: inline-block
      margin-left: 15px
      font-weight: 700
      font-size: 16px
  &__account
    margin-left: 6.927vw
    cursor: pointer
  &__favorites
    margin-left: 81px
  &__cart
    $px: 15px
    display: flex
    align-items: center
    padding: 10px $px
    background-color: white
    margin-left: 73px
    width: 220px - (2 * $px)
    text-decoration: none
    &-title
      margin-left: 10px
      font-weight: 400
      font-size: 14px
      line-height: 16px
      color: $text

// Dropdowns
.customers-dropdown-menu, .setCity-dropdown-menu, .catalog-dropdown-menu
  display: none
  position: absolute
  list-style: none
  padding-left: 0px
  top: 64px
  z-index: 5000
  background-color: white
  padding: 5px
  box-shadow: 0px 2px 8px rgba($text, .1)

.catalog-dropdown-menu
  left: 100px
  height: 640px
  overflow: auto
  padding-right: 4px
  &::-webkit-scrollbar
    width: 6px
  &::-webkit-scrollbar-thumb
    background-color: $gray-5
    border-radius: 10px

.setCity-dropdown-menu
  top: 86px

.customersDropDownOpen .customers-dropdown-menu
  display: block
  & > a
    text-decoration: none
  .customers-dropdown-menu__item
    display: flex
    align-items: center
    justify-content: center
    width: 143px
    height: 20px
    margin-bottom: 5px
    border: 2px solid #dadada
    background-color: $gray-1
    color: $text
    font-size: 14px
    font-weight: 500
    letter-spacing: .07em

.setCityDialog .setCity-dropdown-menu
  display: flex
  flex-direction: column
  .setCity-dropdown-menu-item
    display: inline-block
    padding: 15px 8px
    min-width: 210px
    text-align: center
    letter-spacing: .07em
    font-size: 14px
    font-weight: 500
    line-height: 16px
    background-color: $gray-1
    border: 1px solid $gray-5
    transition: background-color .05s ease
    cursor: pointer
    &:hover
      background-color: darken($gray-1, 4%)
    &:not(:last-child)
      margin-bottom: 5px

.catalogDropDownOpen .catalog-dropdown-menu
  display: flex
  flex-direction: column
  top: 170px
  .catalog-dropdown-menu-item
    display: flex
    flex-direction: row
    align-items: center
    padding: 7px 10px 7px 16px
    background-color: $gray-1
    border: 1px solid $gray-5
    cursor: pointer
    &:hover
      background-color: darken($gray-1, 4%)
    &:not(:last-child)
      margin-bottom: 5px
    .dropdown-menu-item
      &-image
        margin-right: 14px
      &-title
        width: 238px
        margin-right: 10px
        font-size: 14px
        font-weight: 500
        line-height: 16px
        letter-spacing: .07em
  .selectedCategory,
    background-color: darken($gray-1, 10%)
</style>
