<template>
  <div class="container">
    <article>
      <heroImage v-bind="heroImageProps" />
      <div class="article-paragraph">
        <p>Vossestein Elektrotechniek is de specialist op het gebied van service en
          onderhoud van
          zonne-energiesystemen voor zowel de zakelijke als de particuliere markt. Daarnaast verzorgen wij uiteenlopende
          elektrotechnische oplossingen en installaties voor zakelijke en particuliere klanten.</p>
      </div>
      <h2 class="article-sub-title">Specialisaties</h2>
    </article>
  </div>
  <article>
    <div class="container-overflow-right">
      <div class="images-section">
        <swiperComponent :slides="swiperSlides" />
      </div>
    </div>
    <div class="container">
      <div class="solar-power-sub-title">
        <h2 class="article-dark-sub-title">Zonne-energie van overdag opslaan in een thuisbatterij?</h2>
      </div>
      <div id="read-more-energy-storage">
        <defaultButton to="/energie-opslag" text="Lees meer" />
      </div>
      <div id="read-more-solar-power">
        <readMoreArticleComponent v-bind="readMoreArticleProps" />
      </div>
    </div>
    <div class="partners-part">
    <!--   <partnersBanner /> -->
    </div>
  </article>
</template>
<script lang="ts" setup>
import heroImage, { type HeroImageProps } from '~/components/pagedesign/heroImage.vue';
import swiperComponent, { type SwiperSlideProps } from '~/components/swiper/swiperComponent.vue';
import defaultButton from '~/components/ui/defaultButton.vue';
import readMoreArticleComponent, { type ReadMoreArticleProps } from '~/components/pagedesign/readMoreArticle.vue';
import partnersBanner from '~/components/pagedesign/partnersBanner.vue';

const heroImageProps: HeroImageProps = {
  imagePath: '/images/Vossestein Buzz-6193.jpg',
  altText: 'Vossestein Buzz',
  overlayText: 'Duurzame elektrotechnische oplossingen en installaties',
  objectPosition: '13rem 65%'
}

const swiperSlides: SwiperSlideProps[] = [
  {
    icon: 'elektra',
    title: 'Elektrotechnische installaties',
    imagePath: '/images/Vossestein-6100.jpg'
  },
  {
    icon: 'zon',
    title: 'Zonne-energiesystemen',
    imagePath: '/images/Vossestein-zonnepark.jpeg'
  },
  {
    icon: 'batterij',
    title: 'Energie opslag en laadpalen',
    imagePath: '/images/Vossestein-accus.jpeg'
  },
  {
    icon: 'service',
    title: 'Kwaliteit en service',
    imagePath: '/images/Vossestein-monteurs.jpeg'
  }
]

const readMoreArticleProps: ReadMoreArticleProps = {
  title: 'Zonne-energie',
  articleText: 'Wanneer u als particulier of bedrijf overweegt om zonnepanelen – kortweg pv panelen – op uw woning of bedrijfspand(en) of woningbouwprojecten te gaan installeren, adviseren wij u daar graag bij. Samen met u werken we een plan uit om de zonne-energie installatie te realiseren en staan wij dagelijks voor u klaar voor de service en het onderhoud aan het zonne-energiesysteem, zodat deze optimaal rendement biedt en u er geen omkijken naar heeft.',
  altText: 'Vossestein zonneveldprojecten',
  imagePath: '/images/zonne-energie-article.png',
  articlePath: '/zonne-energie'
}

useSeoMeta({
  title: 'Vossestein Elektrotechniek | Duurzame elektrotechnische oplossingen en installaties',
  ogSiteName: 'Vossestein Elektrotechniek',
  ogTitle: 'Home',
  ogDescription: 'Duurzame elektrotechnische oplossingen en installaties',
  ogUrl: 'https://www.vossesteinelektrotechniek.nl/',
  ogType: 'article',
  ogImage: 'https://www.vossesteinelektrotechniek.nl/images/Vossestein Buzz-6193.jpg',
})

</script>

<style scoped>
.article-sub-title {
  margin-bottom: 30px;
}

.article-dark-sub-title {
  margin-top: 160px;
  margin-bottom: 32px;
  text-align: center;
  max-width: 900px;
}

.solar-power-sub-title {
  display: flex;
  justify-content: center;
  width: 100%;
}

.partners-part {
  margin-top: 160px;
}

#read-more-energy-storage {
  width: 100%;
  display: flex;
  justify-content: center;
}

#read-more-solar-power {
  margin-top: 160px;
}

@media (max-width: 1280px) {
  .article-dark-sub-title {
    margin-top: 60px;
    margin-bottom: 30px;
    text-align: center;
    max-width: 900px;
  }

  #read-more-solar-power {
    margin-top: 60px;
  }
}

</style>
