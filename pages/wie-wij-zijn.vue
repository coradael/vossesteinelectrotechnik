<template>
  <div class="container">
    <article>
      <heroImage v-bind="heroImageProps" />
        <div class="article-paragraph">
          <h2 class="article-sub-title">Wie wij zijn</h2>
          <p>Vossestein Elektrotechniek is al ruim 8 jaar actief als erkend
            <strong>elektrotechnisch installateur</strong> in de regio Utrecht, maar ook daar buiten. Opgericht door
            <strong>Remco Vossestein</strong> en inmiddels bijgestaan door zijn compagnon <strong>Frank
              Vossestein</strong>.
            <br><br>
            Vanuit het Groene Hart biedt Vossestein Elektrotechniek zeer professionele <strong>elektrotechnische
              diensten</strong> aan <strong>particulieren, bedrijven en instellingen</strong> en is
            <strong>specialist</strong> in het <strong>elektrotechnische onderhoud</strong> van diverse middelgrote en
            grote
            <strong>zonne-energiesystemen</strong> door heel Nederland.
          </p>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Elektrotechnische projecten woningbouw en bedrijven</h2>
          <p>Tevens zijn wij <strong>dé elektrotechnische partner</strong> van
            diverse
            aannemersbedrijven en opdrachtgevers in de <strong>bouw</strong>.
            <br><br>
            Onze vakkundige monteurs <strong>ontwerpen en verzorgen</strong> uiteenlopende elektrotechnische oplossingen
            en
            werkzaamheden bij diverse <strong>(woning)bouwprojecten</strong>.
            <br><br>
            Denk hierbij aan de <strong>aanleg</strong> van <strong>complete elektriciteitsinstallaties</strong> tijdens
            de
            bouw of renovatie van bijvoorbeeld een woonwijk, appartementencomplex, bedrijventerrein of woonhuis.
          </p>
        </div>
        <div class="container">
          <div id="read-more-offer">
            <readMoreArticleComponent v-bind="readMoreArticleProps" />
          </div>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Service & onderhoud zonnepanelen installaties</h2>
          <p>Zo bieden wij service en onderhoud aan bij installaties van
            zonne-energiesystemen op zowel de particuliere woningmarkt als bij grootschalige woningbouwprojecten</p>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Hecht en ervaren team</h2>
          <p>De medewerkers van Vossestein Elektrotechniek zijn zeer goed opgeleid
            volgens de laatste technische eisen en voorschriften van de Techniek Nederland branche vereniging en
            servicegericht. Onze mensen zijn enthousiaste en bevlogen elektrotechnische installateurs die flexibel en
            breed
            inzetbaar zijn, maar ook specialistisch werk, op bijvoorbeeld zonne-energie installatiegebied, kunnen
            verlenen.
          </p>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Onze werkwijze</h2>
          <p>Voor kleine elektrotechnische werkzaamheden kunt u direct een prijs
            opvragen, voor grotere opdrachten maken wij een complete offerte op maat voor u, nadat onze specialisten het
            werk persoonlijk hebben opgenomen bij u thuis of bij uw bedrijf.
            <br><br>
            Neem contact met ons op voor meer informatie of een vrijblijvende offerte.
          </p>
        </div>
    </article>
  </div>
</template>
<script lang="ts" setup>
import heroImage, { type HeroImageProps } from '~/components/pagedesign/heroImage.vue';
import readMoreArticleComponent, { type ReadMoreArticleProps } from '~/components/pagedesign/readMoreArticle.vue';

const heroImageProps: HeroImageProps = {
  imagePath: '/images/Vossestein-about-us.jpeg',
  altText: 'Vossestein Wie wij zijn',
  overlayText: 'Elektrotechnische diensten aan particulieren, bedrijven en instellingen'
}

const readMoreArticleProps: ReadMoreArticleProps = {
  title: 'Vragen of een vrijblijvende offerte?',
  articleText: '',
  altText: 'Vossestein offerte',
  imagePath: '/images/Vossestein-6068.jpg',
  articlePath: '/contact'
}

useSeoMeta({
  title: 'Wie wij zijn | Vossestein Elektrotechniek',
  ogSiteName: 'Vossestein Elektrotechniek',
  ogTitle: 'Wie wij zijn',
  ogDescription: 'Duurzame elektrotechnische oplossingen en installaties',
  ogUrl: 'https://www.vossesteinelektrotechniek.nl/wie-wij-zijn',
  ogType: 'article',
  ogImage: 'https://www.vossesteinelektrotechniek.nl/images/Vossestein-about-us.jpeg',
})

</script>

