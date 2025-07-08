<template>
  <div class="container">
    <article>
      <heroImage v-bind="heroImageProps" />
        <div class="article-paragraph">
          <h2 class="article-sub-title">Werken bij Vossestein Elektrotechniek</h2>
          <p>
            Ben je op zoek naar een uitdagende baan met ruimte voor zelfstandig & flexible werken en heb je affiniteit
            met duurzame en vooral zonne-energie installaties? Dan zit je goed bij Vossestein Elektrotechniek! Wij zijn
            ter versterking van ons team op zoek naar enthousiaste, zelfstandige elektro monteurs .
            <br><br>
            Met een jong en enthousiast team van vakbekwame medewerkers werken wij iedere dag met veel plezier aan
            diverse toonaangevende elektrotechnische en duurzame projecten op zonne-energie gebied door heel Nederland.
            <br><br>
            Kwaliteit, klantgerichtheid, flexibiliteit, zelfstandigheid en humor zijn kenmerkend voor onze werkwijze.
          </p>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Wij zijn op zoek naar enthousiaste monteurs!</h2>
          <p>
            Vossestein Elektrotechniek groeit erg snel en heeft de ambitie om nog verder te groeien en dé service
            partner op het gebied van zonne –energie installaties te worden.
            <br><br>
            Om deze groei te realiseren zijn wij op zoek naar nieuwe, deskundige collega monteurs!
          </p>
        </div>
        <div class="container">
          <div id="read-more-offer">
            <readMoreArticleComponent v-bind="readMoreArticleProps" />
          </div>
        </div>
        <div class="article-paragraph">
          <div class="double-list">
            <div>
            <h2 class="article-sub-title">Jij bent</h2>
            <ul>
              <li>Zelfstandig</li>
              <li>Kwaliteitsgericht</li>
              <li>Creatief</li>
              <li>Service gericht</li>
              <li>Betrokken</li>
              <li>Leergierig</li>
              <li>Een aanpakker</li>
              <li>Iemand die goed kan plannen en zijn afspraken nakomt</li>
            </ul>
          </div>
          <div>
            <h2 class="article-sub-title">Jij hebt</h2>
            <ul>
              <li>Zelfstandig</li>
              <li>Kwaliteitsgericht</li>
              <li>Creatief</li>
              <li>Service gericht</li>
              <li>Betrokken</li>
              <li>Leergierig</li>
              <li>Een aanpakker</li>
            </ul>
          </div>
          </div>
        </div>
        <div class="article-paragraph">
          <img src="/images/Vossestein-werken-bij.png" alt="Vossestein werken bij" />
      </div>
    </article>
  </div>
</template>
<script lang="ts" setup>
import heroImage, { type HeroImageProps } from '~/components/pagedesign/heroImage.vue';
import readMoreArticleComponent, { type ReadMoreArticleProps } from '~/components/pagedesign/readMoreArticle.vue';

const heroImageProps: HeroImageProps = {
  imagePath: '/images/vossestein-werken-bij.jpg',
  altText: 'Vossestein werken bij',
  overlayText: 'Werken bij Vossestein Elektrotechniek',
}

const readMoreArticleProps: ReadMoreArticleProps = {
  title: 'Interesse?',
  articleText: 'Neem contact met ons op.',
  altText: 'Vossestein offerte',
  imagePath: '/images/Vossestein Buzz-6152.jpg',
  articlePath: '/contact'
}

useSeoMeta({
  title: 'Werken bij | Vossestein Elektrotechniek',
  ogSiteName: 'Vossestein Elektrotechniek',
  ogTitle: 'Werken bij',
  ogDescription: 'Duurzame elektrotechnische oplossingen en installaties',
  ogUrl: 'https://www.vossesteinelektrotechniek.nl/werken-bij',
  ogType: 'article',
  ogImage: 'https://www.vossesteinelektrotechniek.nl/images/vossestein-werken-bij.jpg',
})

</script>
<style scoped>
.double-list {
  display: flex;
  max-width: 100%;
  width: 952px;
  justify-content: space-evenly;

}
.double-list div {
  width: 30%;
}

.double-list h2 {
  width: auto;
}

</style>
