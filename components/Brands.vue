<template lang="pug">
  #v-brands
    .v-brands__title
      h2.v-brands__title-text Бренды с которыми мы работаем
      img.v-brands__title-icon(src="~@/assets/images/icons/brands.png")
    .v-brands__container
      .v-brands__container-item
        img(src="~@/assets/images/brands/evraz.png"
        alt="Евраз"
        title="ЕВРАЗ — металлургическая и горнодобывающая компания, входит в число крупнейших производителей стали в мире.")
      .v-brands__container-item
        img(src="~@/assets/images/brands/docke.png"
        alt="ДЁКЕ"
        title="Группа компаний ДЁКЕ производит товары для внешней отделки загородных домов: виниловый сайдинг, полимерные фасадные панели, водосточные системы из ПВХ, чердачные лестницы и гибкую битумную черепицу.")
      .v-brands__container-item
        img(src="~@/assets/images/brands/aemz.png"
        alt="Абинский электрометаллургический завод"
        title="Абинский электрометаллургический завод")
      .v-brands__container-item
        img(src="~@/assets/images/brands/krep-komp.png"
        alt="«КРЕП-КОМП»"
        title="«КРЕП-КОМП» — ведущий поставщик строительного крепежа на территории России.")
      .v-brands__container-item
        img(src="~@/assets/images/brands/katepal.png"
        alt="katepal"
        title="Katepal — лидер среди изготовителей битумной черепицы в Европе, занимает первое место по продажам в России среди импортной гибкой черепицы.")
      .v-brands__container-item
        img(src="~@/assets/images/brands/kerabit.png"
        alt="kerabit"
        title="Kerabit — бренд финских высококачественных битумных кровельных материалов.")
      .v-brands__container-item
        img(src="~@/assets/images/brands/pmz.png"
        alt="Новотроицкий «Ремонтно–механический завод»"
        title="Новотроицкий «Ремонтно–механический завод» — обладает широким спектром металлообрабатывающих станков и оборудования, в том числе современных станков с ЧПУ.")
      .v-brands__container-item
        img(src="~@/assets/images/brands/techno-nicol-shinglas.png"
        alt="")
      .v-brands__container-item
        img(src="~@/assets/images/brands/tegola.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/grand_line.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/ruukki.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/nlmk.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/braas.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/biber.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/green-board.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/hotrock.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/starateli.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/isoroc.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/volma.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/palladium.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/tech-krep.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/unis.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/weber.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/knauf.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/ceresit.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/tula_cher-met.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/makita.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/quick_deck.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/belplita.png" alt="Белплита" title="«Белплита» - одна из ведущих фирм Беларуси по реализации материалов для производства мебели")
      .v-brands__container-item
        img(src="~@/assets/images/brands/aquasystem.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/tamak.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/sh-c-d-p.png" alt="Шекснинский комбинат древесных плит" title="Шекснинский комбинат древесных плит")
      .v-brands__container-item
        img(src="~@/assets/images/brands/gyproc.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/rockwool.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/ursa.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/techno-nicol.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/doohan.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/zubr.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/bosch.png")
      .v-brands__container-item
        img(src="~@/assets/images/brands/fit.png")


</template>

<script>
export default {
  name: 'Brands'
}
</script>

<style lang="sass">
#v-brands
  background-color: $gray-1
  padding: 15px 0px

.v-brands__title
  // transform: matrix(-1, 0, 0, 1, 0, 0)
  background-image: url('~@/assets/images/divider.png')
  background-position: 25% 50%
  background-repeat: no-repeat
  display: flex
  justify-content: center
  &-text
    // transform: matrix(-1, 0, 0, 1, 0, 0)
    padding: 16px 0px
    font-weight: 700
    font-size: 24px
    letter-spacing: .07em
    text-transform: uppercase
    text-align: center
    color: white
  &-icon
    margin-left: 15px
    align-self: center

.v-brands__container
  display: grid
  grid-template-columns: repeat(10, 1fr)
  grid-auto-rows: 160px
  grid-gap: 25px
  margin: 30px 25px
  &-item
    display: flex
    justify-content: center
    align-items: center
    border: 2px solid #ADADAD
    background-color: white
    max-width: 160px
    max-height: 160px
</style>
