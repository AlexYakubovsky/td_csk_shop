<template lang="pug">
  #yandexMapContainer
    yandex-map(
      v-if="pageReady"
      :coords="coords.startup"
      style="width: 100%; height: 600px"
      zoom="4"
    )
      ymap-marker(
        markerId="1",
        marker-type="placemark"
        :coords="coords.SanktPeterburg"
        :icon="markerIcon"
        :balloon-template="BalloonTemplate({ heading: 'Санкт-Петербург, ООО&nbsp;Торговый&nbsp;дом&nbsp;«ЦСК»', phone: '8 (981) 812-94-57', email: 'info@td-csk.ru', address: 'Пушкинский район, поселок Шушары, Московское шоссе, 703-й км', schedule: `ежедневно с 8:00 до 19:00`, smallText: '(Предварительно свяжитесь с менеджером для оформления пропуска)'})"
      )
      ymap-marker(
        markerId="2",
        marker-type="placemark"
        :coords="coords.Astrahan"
        :icon="markerIcon"
        :balloon-template="BalloonTemplate({ heading: 'Астрахань, ООО&nbsp;Торговый&nbsp;дом&nbsp;«ЦСК»', phone: '8 (8512) 44-25-15<br>8 (916) 810-41-22', email: 'info@td-csk.ru', address: 'ул. Рождественского 5', schedule: `ежедневно с 8:00 до 19:00` })"
      )
      ymap-marker(
        markerId="3",
        marker-type="placemark"
        :coords="coords.Simferopol"
        :icon="markerIcon"
        :balloon-template="BalloonTemplate({ heading: 'Симферополь, ООО&nbsp;Торговый&nbsp;дом&nbsp;«ЦСК»', phone: '+7 (800) 555-25-97', email: 'info@td-csk.ru', address: 'Московское шоссе 11км', schedule: `ежедневно с 8:00 до 19:00`, smallText: '(Предварительно свяжитесь с менеджером для оформления пропуска)'})"
      )
      ymap-marker(
        markerId="4",
        marker-type="placemark"
        :coords="coords.Minsk"
        :icon="markerIcon"
        :balloon-template="BalloonTemplate({ heading: 'Республика Беларусь, Минск, ООО&nbsp;«Центр&nbsp;Строительной&nbsp;Комплектации»', phone: '+375 (17) 399-53-06', email: 'cskby@mail.ru', address: 'ул. Стрелковая, 14', schedule: `<span class='template__accent'>Пн-Пт:</span> c 9:00 до 18:00<br><span class='template__accent'>Сб:</span> с 10:00 до 15:00` })"
      )
      ymap-marker(
        markerId="5",
        marker-type="placemark"
        :coords="coords.Krasnodar"
        :icon="markerIcon"
        :balloon-template="BalloonTemplate({ heading: 'Краснодар, ООО&nbsp;Торговый&nbsp;дом&nbsp;«ЦСК»', phone: '8 (800) 555-25-97,<br>8 (918) 969-04-04,<br>8 (918) 212-05-05', email: 'info@td-csk.ru', address: 'ст. Новотитановская, ул. Крайняя 16А', schedule: `ежедневно с 8:00 до 19:00`, smallText: '(Предварительно свяжитесь с менеджером для оформления пропуска)'})"
      )
      ymap-marker(
        markerId="6",
        marker-type="placemark"
        :coords="coords.Odintsovo"
        :icon="markerIcon"
        :balloon-template="BalloonTemplate({ heading: 'Москва, ООО&nbsp;Торговый&nbsp;дом&nbsp;«ЦСК»', phone: '+7 (495) 132-74-00', email: 'info@td-csk.ru', address: 'Московская область, Одинцово, ул. Молодежная, 46', schedule: `ежедневно с 8:00 до 19:00`, smallText: '(Предварительно свяжитесь с менеджером для оформления пропуска)'})"
      )
      ymap-marker(
        markerId="7",
        marker-type="placemark"
        :coords="coords.RostovNaDonu"
        :icon="markerIcon"
        :balloon-template="BalloonTemplate({ heading: 'Ростов-на-Дону, ООО&nbsp;Торговый&nbsp;дом&nbsp;«ЦСК»', phone: '+7 (918) 628-11-44<br>+7 (918) 628-11-33', email: 'info@td-csk.ru', address: 'Голубиный переулок&nbsp;8. Проезд через КПП (ул. Мадояна 316)', schedule: `<span class='template__accent'>Пн-Пт:</span> c 9:00 до 18:00<br><span class='template__accent'>Сб:</span> с 10:00 до 13:00`})"
      )
      ymap-marker(
        markerId="8",
        marker-type="placemark"
        :coords="coords.Volgograd"
        :icon="markerIcon"
        :balloon-template="BalloonTemplate({ heading: 'Волгоград, ООО&nbsp;Торговый&nbsp;дом&nbsp;«ЦСК»', phone: '+7 (917) 647-27-06', email: 'info@td-csk.ru', address: 'ул.&nbsp;Историческая 187&nbsp;Б', schedule: `<span class='template__accent'>Пн-Пт:</span> c 9:00 до 19:00`})"
      )
      ymap-marker(
        markerId="9",
        marker-type="placemark"
        :coords="coords.Kazan"
        :icon="markerIcon"
        :balloon-template="BalloonTemplate({ heading: 'Казань, ООО&nbsp;Торговый&nbsp;дом&nbsp;«ЦСК»', phone: '+7 (999) 553-42-72', email: 'info@td-csk.ru', address: 'ул.&nbsp;Восстания, 100, корп.&nbsp;31', schedule: `<span class='template__accent'>Пн-Пт:</span> c 9:00 до 18:00`})"
      )
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  name: 'YandexMapContainer',
  components: {
    yandexMap,
    ymapMarker
  },
  data() {
    return {
      coords: {
        SanktPeterburg: [59.763955, 30.468285],
        Astrahan: [46.317783, 48.047498],
        Simferopol: [45.02489, 34.04738],
        Minsk: [53.889062, 27.593506],
        Krasnodar: [45.253682, 39.002227],
        Odintsovo: [55.677194, 37.271101],
        RostovNaDonu: [47.246876, 39.631793],
        Volgograd: [48.769824, 44.466544],
        Kazan: [55.833203, 49.038313],
        startup: [52.403687, 39.715173]
      },
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: '/client-icons/map-marker.png',
        imageSize: [48, 62],
        imageOffset: [0, 0]
      },
      pageReady: false
    }
  },
  mounted() {
    this.pageReady = true
  },
  methods: {
    BalloonTemplate(obj) {
      obj.smallText = obj.smallText ? obj.smallText : '' // если пояснения не передали, значит там пустая строка
      return `
        <div>
          <h2 class="balloonTemplate__heading">${obj.heading}</h2>
          <div class="balloonTemplate__Info">
            <img src="https://via.placeholder.com/170x270.png/09f/fff" title="Изображение подробной карты">
            <div class="balloonTemplate__Info-wrapper">
              <div class="balloonTemplate__Info-item">
                <h6 class="balloonTemplate__Info-item-heading">Телефон</h6>
                <span class="balloonTemplate__Info-item-content">${obj.phone}</span>
              </div>
              <div class="balloonTemplate__Info-item">
                <h6 class="balloonTemplate__Info-item-heading">Email</h6>
                <span class="balloonTemplate__Info-item-content">${obj.email}</span>
              </div>
              <div class="balloonTemplate__Info-item">
                <h6 class="balloonTemplate__Info-item-heading">Адрес офиса</h6>
                <span class="balloonTemplate__Info-item-content">${obj.address}</span>
              </div>
              <div class="balloonTemplate__Info-item">
                <h6 class="balloonTemplate__Info-item-heading">График работы</h6>
                <span class="balloonTemplate__Info-item-content">${obj.schedule}</span>
              </div>
            </div>
          </div>
          <span class="balloonTemplate__footer">${obj.smallText}</span>
        </div>
      `
    }
  }
}
</script>

<style lang="sass">
#yandexMapContainer
  width: 100%
  height: 600px
.balloonTemplate
  &__heading
    font-size: 14px
    font-weight: 800
    text-transform: uppercase
    text-align: center
    letter-spacing: .07em
    color: $text
  &__Info
    display: flex
    &-item
      margin-left: 12px
      &:not(:last-child)
        margin-bottom: 15px
      &-heading
        margin-top: 0px
        margin-bottom: 0px
        font-size: 12px
        font-weight: 700
        letter-spacing: .07em
        color: $text
      &-content
        font-size: 12px
        font-weight: 500
        letter-spacing: .07em
        color: $red
  &__footer
    display: block
    text-align: center
    margin-top: 8px
    font-size: 10px
    font-weigth: 300
    letter-spacing: .07em
    color: $text
    line-height: 12px

.template__accent
  color: $text
  font-weight: 700
</style>
