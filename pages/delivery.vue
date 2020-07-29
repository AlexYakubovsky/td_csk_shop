<template lang="pug">
  #v-delivery
    vBreadcrumbs(:breadcrumbs="breadcrumbs")
    .v-delivery__content
      h1.v-delivery__heading Доставка
      p.v-delivery__description
        | Рассчитайте стоимость доставки Вашего товара с&nbsp;помощью
        span.v-delivery__accent
          |&nbsp;калькулятора доставки.&nbsp;
        | Стоимость доставки
        span.v-delivery__accent
          |&nbsp;зависит от веса&nbsp;
        | заказа и
        span.v-delivery__accent
          |  зоны
        |  доставки.
        br
        span.v-delivery__accent
          |  Расчет стоимости приблизительный,
        |  финальная стоимость и&nbsp;тип доставки будут расчитаны при размещении и&nbsp;подтверждении заказа.
    .v-delivery__map
      img(src="https://via.placeholder.com/1889x805/F4F9E9/bd?text=Yandex+Map")
    .v-delivery__content
      ul.v-delivery__conditions
        li.v-delivery__conditions-item
          span &mdash;&nbsp;Если весогабаритные характеристики груза составляют более&nbsp;75% от&nbsp;максимального для данного типа автомобиля, то&nbsp;в&nbsp;связи с&nbsp;особенностями упаковки, а&nbsp;также во&nbsp;избежание рисков порчи товара, возможна замена на&nbsp;более вместительный автомобиль;
        li.v-delivery__conditions-item
          span &mdash;&nbsp;Доставка товаров осуществляется ежедневно;
        li.v-delivery__conditions-item
          span &mdash;&nbsp;Возможность доставки в&nbsp;день оформления заказа, уточняйте у&nbsp;Вашего менеджера;
        li.v-delivery__conditions-item
          span &mdash;&nbsp;Доставка осуществляется до&nbsp;подъезда покупателя. Разгрузка товара производится силами покупателя, если не&nbsp;заказана услуга &laquo;Разгрузка и&nbsp;подъем на&nbsp;этаж&raquo;;
        li.v-delivery__conditions-item
          span &mdash;&nbsp;При доставке до&nbsp;подъезда просьба обеспечить беспрепятственный подъезд к&nbsp;месту разгрузки. В&nbsp;ином случае доставка будет осуществлена максимально близко к&nbsp;месту планируемой выгрузки без нарушения ПДД и&nbsp;вероятности повреждения автомобиля;
        li.v-delivery__conditions-item
          span &mdash;&nbsp;При наличии услуги &laquo;Разгрузка и&nbsp;подъем на&nbsp;этаж&raquo;, оплата и&nbsp;оформление документов происходит на&nbsp;месте конечной выгрузки, при отсутствии данной услуги, товар передается клиенту на&nbsp;месте подачи автомобиля, без осуществления водителем погрузочно-разгрузочных работ.
    .v-delivery__content
      .v-delivery__grid-wrapper

        .v-delivery__pickup
          .v-delivery__pickup-description
            h2.v-delivery__content-heading Самовывоз заказа
            p Забрать заказ вы&nbsp;можете на&nbsp;складе в&nbsp;Москве:
            p.v-delivery__content-address &mdash;&nbsp;поселение Мосрентген, Логистический центр Славянский Мир
            p Уточнить время работы и&nbsp;узнать телефоны нашего склада можно в&nbsp;разделе Контакты
            h2.v-delivery__content-heading Доставка по&nbsp;России
            p Для отправки транспортной компанией необходимо отправить Вашему менеджеру доверенность и&nbsp;поручение на&nbsp;отправку Вашего заказа выбранной Вами транспортной компанией.
            ul.v-delivery__pickup-description-list
              li.v-delivery__pickup-description-list-item
                span &mdash;&nbsp;Доверенность физического лица транспортной компании на&nbsp;перевозку груза
              li.v-delivery__pickup-description-list-item
                span &mdash;&nbsp;Доверенность физического лица транспортной компании на&nbsp;перевозку груза (ОБРАЗЕЦ)
              li.v-delivery__pickup-description-list-item
                span &mdash;&nbsp;Письмо-поручение на&nbsp;доставку
              li.v-delivery__pickup-description-list-item
                span &mdash;&nbsp;Письмо-поручение на&nbsp;доставку (ОБРАЗЕЦ)

          .v-delivery__pickup-table
            h2.v-delivery__content-heading Стоимость услуги &laquo;Разгрузка и&nbsp;подъем на&nbsp;этаж&raquo; рассчитывается согласно таблице:
            table
              thead
                tr
                  th Общая масса груза, кг
                  th До 300 кг
                  th 301 – 1000 кг
                  th 1001 – 3000 кг
                  th Более 3000 кг
              tbody
                tr
                  td Стоимость разгрузки (пронос до&nbsp;25-ти метров, подъем на&nbsp;лифте) рублей за&nbsp;1кг.
                  td 2.16
                  td 2.16
                  td 2.16
                  td 2.16
                tr
                  td Стоимость подъёма без лифта, рублей за&nbsp;этаж
                  td 2.16
                  td 2.16
                  td 2.16
                  td 2.16
                tr
                  td Перенос с&nbsp;места разгрузки (за&nbsp;каждые 25&nbsp;метров)
                  td 2.16
                  td 2.16
                  td 2.16
                  td 2.16

        .v-delivery__pickup-conditions
          h2.v-delivery__content-heading Стоимость разгрузки и&nbsp;подъема на&nbsp;этаж
          ul.v-delivery__pickup-conditions-list
            li.v-delivery__pickup-conditions-list-item
              span Услуга &laquo;Разгрузка и&nbsp;подъем на&nbsp;этаж&raquo; предоставляется только в&nbsp;качестве сопутствующей при оформлении услуги &laquo;Доставка&raquo; и&nbsp;оказывается в&nbsp;Москве и&nbsp;Московской области.
            li.v-delivery__pickup-conditions-list-item
              span Стандартное время оказания услуги &laquo;Разгрузка и&nbsp;подъем&raquo;:
                span.v-delivery__accent  с&nbsp;9:00 до&nbsp;20:00
            li.v-delivery__pickup-conditions-list-item
              span Минимальная стоимость оказания услуги составляет 800&nbsp;рублей. Минимальная стоимость оказания услуги при подъеме на&nbsp;этаж крупногабаритных товаров составляет 1600&nbsp;рублей.
            li.v-delivery__pickup-conditions-list-item
              span Ночная разгрузка осуществляется
                span.v-delivery__accent  с&nbsp;20-00 и&nbsp;до&nbsp;8-00.
              |  Наценка за&nbsp;ночную разгрузку составляет&nbsp;+50% к&nbsp;цене разгрузки. Минимальная стоимость ночной разгрузки составляет 2000&nbsp;рублей.
            li.v-delivery__pickup-conditions-list-item
              span При доставке за&nbsp;МКАД наценка к&nbsp;цене разгрузки составляет&nbsp;+25%, за&nbsp;исключением адресов, расположенных ближе 1&nbsp;км от&nbsp;станций метро.
            li.v-delivery__pickup-conditions-list-item
              span.v-delivery__accent Стоимость подъёма на&nbsp;этаж крупногабаритных товаров:
              ul
                li
                  span Гипсокартон&nbsp;/ Фанера&nbsp;/ Листовые материалы&nbsp;&mdash; 50&nbsp;руб.&nbsp;/ лист&nbsp;/ этаж
                li
                  span Профиль&nbsp;/ Рейки&nbsp;/ Брус&nbsp;&mdash; 25&nbsp;руб.&nbsp;/ шт&nbsp;/ этаж
                li
                  span Утеплитель&nbsp;&mdash; 25&nbsp;руб.&nbsp;/ упаковка&nbsp;/ этаж
                li
                  span Линолеум&nbsp;/ Геотекстиль и&nbsp;т.д. &mdash;&nbsp;цена из&nbsp;таблицы./кг/этаж
            li.v-delivery__pickup-conditions-list-item
              span.v-delivery__accent Ограничения
              ul
                li
                  span Вес каждого разгружаемого и&nbsp;переносимого места (изделия) составляет не&nbsp;более 80&nbsp;кг.
                li
                  span Объем каждого разгружаемого и&nbsp;переносимого места составляет не&nbsp;более 1,5&nbsp;м
                    sup 3
                li
                  span Сумма длин трех сторон (длина, ширина, высота) каждого разгружаемого и&nbsp;переносимого места составляет не&nbsp;более 3&nbsp;м.
            li.v-delivery__pickup-conditions-list-item
              span Услуга &laquo;Разгрузка и&nbsp;подъем на&nbsp;этаж&raquo; осуществляется с&nbsp;заносом в&nbsp;помещение/квартиру, без дальнейшего разноса товара внутри помещения.
            li.v-delivery__pickup-conditions-list-item
              span Расценки в&nbsp;таблице не&nbsp;являются окончательными. Окончательная стоимость устанавливается после получения и&nbsp;обработки заявки с&nbsp;учетом всех весогабаритных характеристик и&nbsp;особенностей доставки и&nbsp;разгрузки конкретного типа товара.
            li.v-delivery__pickup-conditions-list-item
              span В&nbsp;случае превышения ограничений возможность оказания и&nbsp;стоимость услуги разгрузки и&nbsp;подъёма на&nbsp;этаж рассматривается индивидуально специалистами по&nbsp;транспортной логистике компании ЦСК.

    vCta
</template>

<script>
import vBreadcrumbs from '../components/breadcrumbs.vue'
import vCta from '../components/cta.vue'

export default {
  name: 'Delivery',
  components: {
    vBreadcrumbs,
    vCta
  },
  data() {
    return {
      breadcrumbs: ['Главная', 'Доставка']
    }
  }
}
</script>

<style lang="sass">
.v-delivery__content
  padding: 0px 45px
  .v-delivery__description
    margin-bottom: 15px
    margin-top: 0px
    font-size: 18px
    letter-spacing: .07em
  .v-delivery__accent
    font-weight: 700
  &-address
    text-indent: 24px
.v-delivery__map
  border: 7px solid $gray-3
.v-delivery__conditions
  list-style: none
  margin-top: 30px
  padding: 30px 30px 35px 30px
  background-color: $gray-1
  border: 2px solid $gray-5
  &-item
    font-size: 16px
    font-weight: 500
    letter-spacing: .07em
    color: $text
    line-height: 19px
.v-delivery__grid-wrapper
  display: grid
  grid-template-columns: 1fr 1fr
  grid-template-rows: 1fr
  grid-template-areas: ". ."
  grid-column-gap: 30px
  margin-bottom: 30px

.v-delivery__pickup-description,
.v-delivery__pickup-table,
.v-delivery__pickup-conditions
  border: 2px solid $gray-5
  padding: 10px 30px

.v-delivery__content-heading
  margin-top: 0px
  margin-bottom: 7px
  text-align: center
  font-size: 18px
  font-weight: 700
  line-height: 21px
  color: $text

.v-delivery__pickup-description
  &-list
    list-style: none
  &-list-item
    color: $red

.v-delivery__pickup-table
  margin-top: 18px
  table
    margin-bottom: 14px
    border-collapse: collapse
    border: 1px solid $red
    background-color: $gray-6
    width: 840px
    th
      font-size: 14px
      font-weight: 700
      letter-spacing: .07em
      &:first-child
        text-align: left
        padding: 15px 0px 15px 20px
    td
      border: 1px solid $red
      font-size: 14px
      font-weight: 700
      letter-spacing: .07em
      color: $text
      &:nth-child(1)
        padding: 15px 20px
        max-width: 330px
      &:nth-child(n+2)
        text-align: center
.v-delivery__pickup-conditions
  padding: 20px 30px 18px 30px
  &-list-item
    line-height: 19px
    margin-bottom: 4px
</style>
