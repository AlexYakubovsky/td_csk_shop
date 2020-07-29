<template lang="pug">
  #v-vacancy
    vBreadcrumbs(:breadcrumbs="breadcrumbs")

    .v-vacancy__wrapper
      .v-vacancy__menu
        img.v-vacancy__menu-image(:src="require('../assets/images/vacancy/vacancy-career.png')")
        ul.v-vacancy__menu-list
          li.v-vacancy__menu-list-item(@click="currentTab = 'work'")
            span Почему работа у нас – это лучший выбор?
            img.v-vacancy__menu-list-item-arrow(:src="require('../assets/images/vacancy/arrow-right.svg')")

          li.v-vacancy__menu-list-item(@click="currentTab = 'vacancy'")
            span Вакансии
            img.v-vacancy__menu-list-item-arrow(:src="require('../assets/images/vacancy/arrow-right.svg')")

          li.v-vacancy__menu-list-item(@click="currentTab = 'talents'")
            span Мы всегда в поисках талантов
            img.v-vacancy__menu-list-item-arrow(:src="require('../assets/images/vacancy/arrow-right.svg')")

          li.v-vacancy__menu-list-item(@click="currentTab = 'hrCall'")
            span Задать вопрос HR-специалисту
            img.v-vacancy__menu-list-item-arrow(:src="require('../assets/images/vacancy/arrow-right.svg')")

        .v-vacancy__phone-block
          img.v-vacancy__phone-image(:src="require('../assets/images/icons/phone-volume.png')")
          span.v-vacancy__phone 8 (999) 553-43-89

      div(v-if="currentTab == 'work'")
        .v-vacancy__body
          h2.v-vacancy__body-heading Почему работа у нас – это лучший выбор?
          p.v-vacancy__body-description Для решения поставленных целей и&nbsp;задач компания обладает большой слаженной командой профессионалов, которые прилагают максимум усилий и&nbsp;талантов для дальнейшего развития компании и&nbsp;выхода на&nbsp;новые рынки. Наших сотрудников всегда отличает: уверенность в&nbsp;завтрашнем дне, что актуально для настоящего времени; высокий уровень профессионализма и&nbsp;ответственности за&nbsp;принимаемые решения; и, конечно, стремление к&nbsp;саморазвитию и&nbsp;покорению всевозможных вершин.
          span.v-vacancy__body-subheading Почему работа у нас – это лучший выбор?
          ul.v-vacancy__body-list
            li.v-vacancy__body-list-item
              img.v-vacancy__body-list-image(:src="require('../assets/images/vacancy/checkmark.svg')")
              span Мы&nbsp;открыты для молодых энергичных и&nbsp;желающих построить карьеру в&nbsp;крупной компании;
            li.v-vacancy__body-list-item
              img.v-vacancy__body-list-image(:src="require('../assets/images/vacancy/checkmark.svg')")
              span Стабильность нашей компании позволяет нам строить далеко идущие планы и&nbsp;реализовывать, в&nbsp;короткие сроки, уже существующие;
            li.v-vacancy__body-list-item
              img.v-vacancy__body-list-image(:src="require('../assets/images/vacancy/checkmark.svg')")
              span У&nbsp;нас всегда только официальное трудоустройство с&nbsp;первого дня и&nbsp;своевременная выдача заработной платы;
            li.v-vacancy__body-list-item
              img.v-vacancy__body-list-image(:src="require('../assets/images/vacancy/checkmark.svg')")
              span В&nbsp;нашей компании предоставляется обучение;
            li.v-vacancy__body-list-item
              img.v-vacancy__body-list-image(:src="require('../assets/images/vacancy/checkmark.svg')")
              span Мы&nbsp;будем очень рады видеть в&nbsp;своей команде сотрудников, которые готовы расти развиваться вместе с&nbsp;нами и&nbsp;выводить на&nbsp;самые высокие уровни наш бизнес!

      div(v-if="currentTab == 'vacancy'")
        .v-vacancy__vacancies
          h2.v-vacancy__vacancies-heading Вакансии
          .v-vacancy__vacancies-checkbox-group
            .checkbox-group
              input#All(type="checkbox")
              label(for="All") Все сферы
            .checkbox-group
              input#Sales(type="checkbox")
              label(for="Sales") Продажи
            .checkbox-group
              input#Finances(type="checkbox")
              label(for="Finances") Финансы
            .checkbox-group
              input#Accounting(type="checkbox")
              label(for="Accounting") Бухгалтерия
            .checkbox-group
              input#Marketing(type="checkbox")
              label(for="Marketing") Маркетинг
            .checkbox-group
              input#Logistics(type="checkbox")
              label(for="Logistics") Логистика
            .checkbox-group
              input#Administration(type="checkbox")
              label(for="Administration") Администрация
            .checkbox-group
              input#Management(type="checkbox")
              label(for="Management") Управление персоналом

          .v-vacancy__vacancies-list
            .v-vacancy__vacancies-list-item
              h3.vacancies-heading Менеджер по продажам
              .vacancies-body
                .vacancies-wrapper
                  p.vacancies-description
                    | Наша компания по&nbsp;продаже строительных и&nbsp;отделочных материалов приглашает в&nbsp;свою команду специалиста по&nbsp;тендерным продажам
                  .vacancies-footer
                    span.vacancies-sendResume Отправить резюме
                    .vacancies-address
                      img.vacancies-address-icon(:src="require('../assets/images/vacancy/geotag.svg')")
                      span Московская область, Одинцово, улица Молодежная, 46.
                .vacancies-attributes
                  span.vacancies-attributes-item Обязанности
                  span.vacancies-attributes-item Требования
                  span.vacancies-attributes-item Условия
                .vacancies-type
                  img.vacancies-type-icon(:src="require('../assets/images/vacancy/hot.png')")
                  span Горящая вакансия

            .v-vacancy__vacancies-list-item
              h3.vacancies-heading Менеджер по продажам
              .vacancies-body
                .vacancies-wrapper
                  p.vacancies-description
                    | Наша компания по&nbsp;продаже строительных и&nbsp;отделочных материалов приглашает в&nbsp;свою команду специалиста по&nbsp;тендерным продажам
                  .vacancies-footer
                    span.vacancies-sendResume Отправить резюме
                    .vacancies-address
                      img.vacancies-address-icon(:src="require('../assets/images/vacancy/geotag.svg')")
                      span Московская область, Одинцово, улица Молодежная, 46.
                .vacancies-attributes
                  span.vacancies-attributes-item Обязанности
                  span.vacancies-attributes-item Требования
                  span.vacancies-attributes-item Условия
                .vacancies-type
                  img.vacancies-type-icon(:src="require('../assets/images/vacancy/actual.png')")
                  span Актуальная вакансия

            .v-vacancy__vacancies-list-item
              h3.vacancies-heading Менеджер по продажам
              .vacancies-body
                .vacancies-wrapper
                  p.vacancies-description
                    | Наша компания по&nbsp;продаже строительных и&nbsp;отделочных материалов приглашает в&nbsp;свою команду специалиста по&nbsp;тендерным продажам
                  .vacancies-footer
                    span.vacancies-sendResume Отправить резюме
                    .vacancies-address
                      img.vacancies-address-icon(:src="require('../assets/images/vacancy/geotag.svg')")
                      span Московская область, Одинцово, улица Молодежная, 46.
                .vacancies-attributes
                  span.vacancies-attributes-item Обязанности
                  span.vacancies-attributes-item Требования
                  span.vacancies-attributes-item Условия
                .vacancies-type
                  img.vacancies-type-icon(:src="require('../assets/images/vacancy/actual.png')")
                  span Актуальная вакансия

            .v-vacancy__vacancies-list-item
              h3.vacancies-heading Менеджер по продажам
              .vacancies-body
                .vacancies-wrapper
                  p.vacancies-description
                    | Наша компания по&nbsp;продаже строительных и&nbsp;отделочных материалов приглашает в&nbsp;свою команду специалиста по&nbsp;тендерным продажам
                  .vacancies-footer
                    span.vacancies-sendResume Отправить резюме
                    .vacancies-address
                      img.vacancies-address-icon(:src="require('../assets/images/vacancy/geotag.svg')")
                      span Московская область, Одинцово, улица Молодежная, 46.
                .vacancies-attributes
                  span.vacancies-attributes-item Обязанности
                  span.vacancies-attributes-item Требования
                  span.vacancies-attributes-item Условия
                .vacancies-type
                  img.vacancies-type-icon(:src="require('../assets/images/vacancy/actual.png')")
                  span Актуальная вакансия
            button.v-vacancy__vacancies-list-button(type="submit") Показать еще


      div(v-if="currentTab == 'talents'")
        .v-vacancy__talents
          h2.v-vacancy__talents-heading Мы всегда в поисках талантов
          .v-vacancy__talents-body
            .v-vacancy__talents-wrapper
              p.v-vacancy__talents-description
                | Наша компания рада видеть в&nbsp;своей команде как настоящих профессионалов, так и&nbsp;юные таланты. Очень часто для эффективного осуществления нашей деятельности мы&nbsp;расширяем штат, открывая позиции, которые помогают нашему бизнесу стать сильнее и&nbsp;выгодно выделять нас среди конкурентов.
                | Вы&nbsp;можете отправить Ваше резюме, указав только сферу деятельности.
              span.v-vacancy__talents-resume Отправить резюме
              h5.v-vacancy__talents-subdesc Мы&nbsp;обязательно рассмотрим его и&nbsp;свяжемся с&nbsp;Вами.
            img(:src="require('../assets/images/vacancy/vacancy-talents.jpg')")

      div(v-if="currentTab == 'hrCall'")
        .v-vacancy__hrCall
          h2.v-vacancy__hrCall-heading Вопрос HR-специалисту
          .v-vacancy__hrCall-wrapper
            form.v-vacancy__hrCall-form
              .hrCall-form__input-group
                label(for="hrName") Ваше имя
                input#hrName(type="text" placeholder="Иванов Иван Иванович")

              .hrCall-form__input-group
                label(for="hrEmail") Эл. почта
                input#hrEmail(type="email" placeholder="ivan@example.com")

              .hrCall-form__input-group
                label(for="hrMsg") Ваш вопрос
                textarea#hrMsg(rows="8" cols="30")

              button.hrCall-form__submit(type="submit") Отправить вопрос
            img.v-vacancy__hrCall-image(:src="require('../assets/images/vacancy/vacancy-hr.png')")

    vCta
</template>

<script>
import vBreadcrumbs from '../components/breadcrumbs.vue'
import vCta from '../components/cta.vue'

export default {
  name: 'Vacancy',
  components: {
    vBreadcrumbs,
    vCta
  },
  data() {
    return {
      breadcrumbs: ['Главная', 'Вакансии'],
      currentTab: 'work'
    }
  }
}
</script>

<style lang="sass">
.v-vacancy__wrapper
  display: flex
  padding: 50px 125px

.v-vacancy__menu,
.v-vacancy__body,
.v-vacancy__vacancies,
.v-vacancy__talents,
.v-vacancy__hrCall
  background-color: $gray-1
  border: 5px solid $gray-4

.v-vacancy__menu
  padding: 19px 0px 31px 0px
  &-image
    margin-left: 62px
    margin-bottom: 14px
  &-list
    list-style: none
    padding-left: 0
    margin-bottom: 30px
    &-item
      display: flex
      align-items: center
      justify-content: space-between
      background-color: white
      padding: 14px 0px 14px 34px
      width: 480px
      font-size: 18px
      font-weight: 700
      line-height: 21px
      cursor: pointer
      transition: background-color .05s ease
      &:not(:last-child)
        margin-bottom: 5px
      &:hover
        background-color: darken(white, 7%)
      &-arrow
        margin-right: 19px

  .v-vacancy__phone
    color: $red
    font-size: 26px
    font-weight: 900
    line-height: 30px
    &-block
      display: flex
      align-items: center
      margin-left: 70px
    &-image
      margin-right: 40px

.v-vacancy__body,
.v-vacancy__talents,
.v-vacancy__hrCall
  margin-left: 66px
  padding: 35px 33px 47px 53px
  min-height: 445px

.v-vacancy__vacancies
  margin-left: 66px
  padding: 35px 90px 11px 40px
  min-height: 445px

.v-vacancy__body
  &-heading
    margin-top: 0px
    margin-bottom: 10px
    font-size: 18px
    line-height: 21px
    font-weight: 700
    text-align: center
  &-subheading
    display: block
    text-align: center
  &-description
    line-height: 19px
    margin-bottom: 10px
  &-list
    list-style: none
    padding: 0 70px
    &-item
      display: flex
      align-items: flex-start
      margin-bottom: 20px
      line-height: 19px
    &-image
      margin-right: 15px

.v-vacancy__talents
  &-heading
    margin-top: 0px
    margin-bottom: 25px
    font-size: 18px
    font-weight: 700
    text-align: center
    color: $text
  &-body
    display: flex
    align-items: center
    flex-direction: row
  &-wrapper
    padding: 0px 55px 20px 0px
  &-description
    font-size: 16px
    line-height: 19px
  &-resume
    display: inline-block
    padding: 4px 12px
    text-decoration: underline
    letter-spacing: .07em
    background-color: $yellow-2
    font-size: 14px
    font-weight: 500
    color: $text
  &-subdesc
    font-size: 14px
    font-weight: 700
    line-height: 16px
    letter-spacing: .07em

.v-vacancy__hrCall
  &-heading
    margin-top: 0px
    margin-bottom: 42px
    font-size: 18px
    font-weight: 700
    text-align: center
  &-wrapper
    display: flex
    flex-direction: row
    align-items: flex-start
    padding-left: 85px
  &-form
    margin-right: 153px
    width: 482px
  &-image
    margin-right: 96px

.hrCall-form__input-group
  display: flex
  justify-content: space-between
  &:not(:last-child)
    margin-bottom: 20px
  & > label
    font-size: 16px
    font-weight: 500
    line-height: 19px
    letter-spacing: .07em
  & > input, & > textarea
    min-width: 335px
    border: 2px solid $gray-4
    padding: 5px 7px
    &:active, &:focus
      outline: 2px solid $red
  & > textarea
    resize: none
  & > input
    height: 26px

.hrCall-form__submit
  border: none
  background-color: $yellow
  padding: 10px 35px
  margin-left: 130px
  font-size: 15px
  font-weight: 700
  text-transform: uppercase
  cursor: pointer

.v-vacancy__vacancies
  width: 52vw
  &-heading
    margin-top: 0px
    margin-bottom: 11px
    font-size: 18px
    font-weight: 700
    line-height: 21px
    text-align: center
  &-checkbox-group
    display: flex
    flex-direction: row
    .checkbox-group
      display: flex
      align-items: center
      margin-right: 20px
      & > label
        margin-left: 7px
        font-size: 12px
        font-weight: 300
        letter-spacing: .07em
        cursor: pointer
      & > input
        width: 15px
        height: 15px

.v-vacancy__vacancies-list
  margin-top: 20px
  &-item:not(:last-child)
    margin-bottom: calc(7px + 10px)
  &-button
    padding: 10px 40px
    border: none
    background-color: #ff2c06
    font-size: 16px
    font-weight: 700
    color: white
    text-transform: uppercase
    cursor: pointer
    transition: all .15s ease
    margin: 0 auto
    justify-items: center
    display: flex
    &:hover
      background-color: #e12200
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1)
.vacancies
  &-heading
    font-size: 16px
    font-weight: 700
    margin-top: 10px
    margin-bottom: 0
    line-height: 19px
    text-decoration: underline

  &-body
    display: flex
    flex-direction: row

  &-footer
    display: flex
    flex-direction: row
    align-items: center

  &-address
    display: flex
    align-items: center

  &-description
    margin-top: 5px
    margin-bottom: 2px
    font-size: 12px
    line-height: 14px
    color: $text
    padding-right: 40px

  &-sendResume
    display: inline-block
    padding: 2px 4px
    background-color: $yellow-2
    font-size: 10px
    font-weight: 500
    letter-spacing: .07em
    text-decoration: underline

  &-address
    margin-left: 20px
    font-size: 10px
    font-weight: 500
    letter-spacing: .07em
    color: $red
    &-icon
      margin-right: 6px

  &-attributes
    display: flex
    flex-direction: row
    &-item
      display: inline-block
      padding: 13px 0px
      width: 114px
      max-height: 20px
      border: 1px solid $gray-4
      background-color: white
      font-size: 16px
      font-weight: 700
      color: $text
      text-align: center
      cursor: pointer
      &:not(:last-child)
        margin-right: 10px

  &-type
    display: flex
    flex-direction: column
    width: 92px
    align-items: center
    text-align: center
    margin-left: 17px
    margin-top: -12px
    font-size: 11px
    font-weight: 700
    line-height: 12px
    color: $text
    &-icon
      margin-bottom: 6px
</style>
