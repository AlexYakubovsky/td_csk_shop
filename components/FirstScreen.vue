<template lang="pug">
  #v-first-screen
    .v-first-screen
      Carousel(
        :data="sliderItems")
      SpecialOffers(
        :specialOffers="specialOffers")
</template>

<script>
import Carousel from './Carousel.vue'
import SpecialOffers from './SpecialOffers.vue'

export default {
  name: 'FirstScreen',
  components: {
    Carousel,
    SpecialOffers
  },
  data() {
    return {
      sliderItems: [
        {
          id: 1,
          img: '1.png',
          slogan: 'Прекрасный внешний вид и защита вашего дома',
          theme: 'Кровля'
        },
        {
          id: 2,
          img: '2.png',
          slogan: 'Монтаж перегородок и перекрытий: быстро, легко и надежно',
          theme: 'Гипсокартон'
        },
        {
          id: 3,
          img: '3.png',
          slogan: 'Обшивка стен, настил полов, строительство помещений',
          theme: 'ДСП, ОСБ, ГСП, МДФ'
        },
        {
          id: 4,
          img: '4.png',
          slogan: 'Асбестоцементные изделия, гидроизоляция, кирпич',
          theme: 'Стройматериалы'
        }
      ],
      specialOffers: [
        {
          id: 1,
          type: 'Скидка',
          description: 'Акция Knauf: «Открывай Россию вместе с KNAUF»',
          image: 'offer-1.png'
        },
        {
          id: 2,
          type: 'Акция',
          description: '-6% на OSB при покупке кровли!',
          image: 'offer-2.png'
        },
        {
          id: 3,
          type: 'Акция',
          description: 'На теплоизоляционные плиты',
          image: 'offer-3.png'
        },
        {
          id: 4,
          type: 'Акция',
          description: 'На черепицу ШИНГЛАС',
          image: 'offer-4.png'
        }
      ]
    }
  }
}
</script>

<style lang="sass">
.v-first-screen
  padding-top: 30px
  padding-bottom: 34px
  background-color: $gray-2
</style>
