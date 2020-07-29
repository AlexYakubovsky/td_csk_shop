<template lang="pug">
  #index
    FirstScreen
    SmallCatalog(
      :smallCatalogListItems="smallCatalogListItems")
    PopularItems(
      :popularItemsList="popularItemsList")
    Advantages
    GetMobileApp
    Brands
    Logistics
    CskClub
    MainMap
</template>

<script>
import FirstScreen from '../components/FirstScreen.vue'
import SmallCatalog from '../components/SmallCatalog.vue'
import PopularItems from '../components/PopularItems.vue'
import Advantages from '../components/Advantages.vue'
import GetMobileApp from '../components/GetMobileApp.vue'
import Brands from '../components/Brands.vue'
import Logistics from '../components/Logistics.vue'
import CskClub from '../components/CskClub.vue'
import MainMap from '../components/MainMap.vue'

export default {
  name: 'IndexPage',
  components: {
    FirstScreen,
    SmallCatalog,
    PopularItems,
    Advantages,
    GetMobileApp,
    Brands,
    Logistics,
    CskClub,
    MainMap
  },
  data() {
    return {
      smallCatalogListItems: [
        {
          id: 1,
          title: 'Все для кровли',
          image: '1.png'
        },
        {
          id: 2,
          title: 'Древестно-плитные материалы',
          image: '2.png'
        },
        {
          id: 3,
          title: 'Теплоизоляция',
          image: '3.png'
        },
        {
          id: 4,
          title: 'Гипсокартонные материалы',
          image: '4.png'
        },
        {
          id: 5,
          title: 'Крепеж',
          image: '5.png'
        },
        {
          id: 6,
          title: 'Общестроительные материалы',
          image: '6.png'
        },
        {
          id: 7,
          title: 'Отделочные материалы',
          image: '7.png'
        },
        {
          id: 8,
          title: 'Металлопрокат',
          image: '8.png'
        },
        {
          id: 9,
          title: 'Геоматериалы',
          image: '9.png'
        },
        {
          id: 10,
          title: 'Электрика и освещение',
          image: '10.png'
        },
        {
          id: 11,
          title: 'Строительные материалы',
          image: '11.png'
        },
        {
          id: 12,
          title: 'Дача и сад',
          image: '12.png'
        }
      ],
      popularItemsList: [
        {
          id: 1,
          image: '1.png',
          title: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
          clubCost: 303,
          cost: 305,
          unit: 'м2',
          article: '62966',
          isMyFavorite: false,
          counter: 1
        },
        {
          id: 2,
          image: '1.png',
          title: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
          clubCost: 303,
          cost: 305,
          unit: 'м2',
          article: '62966',
          isMyFavorite: false,
          counter: 1
        },
        {
          id: 3,
          image: '1.png',
          title: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
          clubCost: 303,
          cost: 305,
          unit: 'м2',
          article: '62966',
          isMyFavorite: false,
          counter: 1
        },
        {
          id: 4,
          image: '1.png',
          title: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
          clubCost: 303,
          cost: 305,
          unit: 'м2',
          article: '62966',
          isMyFavorite: false,
          counter: 1
        },
        {
          id: 5,
          image: '1.png',
          title: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
          clubCost: 303,
          cost: 305,
          unit: 'м2',
          article: '62966',
          isMyFavorite: false,
          counter: 1
        },
        {
          id: 6,
          image: '1.png',
          title: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
          clubCost: 303,
          cost: 305,
          unit: 'м2',
          article: '62966',
          isMyFavorite: false,
          counter: 1
        },
        {
          id: 7,
          image: '1.png',
          title: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
          clubCost: 303,
          cost: 305,
          unit: 'м2',
          article: '62966',
          isMyFavorite: false,
          counter: 1
        },
        {
          id: 8,
          image: '1.png',
          title: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
          clubCost: 303,
          cost: 305,
          unit: 'м2',
          article: '62966',
          isMyFavorite: false,
          counter: 1
        },
        {
          id: 9,
          image: '1.png',
          title: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
          clubCost: 303,
          cost: 305,
          unit: 'м2',
          article: '62966',
          isMyFavorite: false,
          counter: 1
        },
        {
          id: 10,
          image: '1.png',
          title: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
          clubCost: 303,
          cost: 305,
          unit: 'м2',
          article: '62966',
          isMyFavorite: false,
          counter: 1
        }
      ]
    }
  }
}
</script>
<style lang="sass"></style>
