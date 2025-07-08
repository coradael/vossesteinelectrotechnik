<template>
  <div class="container">
    <article>
      <heroImage v-bind="heroImageProps" />
      <div class="article-paragraph">
        <h2 class="article-sub-title">Voor particuliere en zakelijke markt</h2>
        <p>
          Zoekt u een erkend elektricien, een vakbekwame, flexibele en ervaren partner voor het ontwerp en de de
          aanleg van een lichtinstallatie voor een woning, bedrijfsgebouw of compleet woningbouw-nieuwbouwproject? Dan
          bent u aan het juiste adres bij Vossestein Elektrotechniek.
          <br><br>
          Op basis van uw wensen en ideeën en eventueel in overleg met de architect en aannemer, ontwerpen en
          verzorgen we de complete elektrotechnische installatie, uiteraard volgens de NEN1010 normen en andere
          branche gerelateerde, technische voorschriften.
          <br><br>
          U kunt hierbij denken aan: verlichting, brandmeldinstallaties , elektrotechniek en uiteraard de installatie
          en het onderhoud van zonne-energie systemen van uw woning- en of bedrijfsgebouwen.
          <br><br>
          Meer weten over wat Vossestein Elektrotechniek in uw huis of bedrijfspand aan elektrotechnische oplossingen
          kan bieden? Neem vrijblijvend <NuxtLink to="/contact">contact</NuxtLink> met ons op.
        </p>
      </div>
      <div class="container">
        <div id="read-more-offer">
          <readMoreArticleComponent v-bind="readMoreArticleProps" />
        </div>
      </div>
      <div class="article-paragraph">
        <h2 class="article-sub-title">Service & Onderhoud van uw elektrotechnische installatie</h2>
        <p>
          Wilt u er zeker van zijn dat uw elektronische installaties in uw woning of bedrijfspand(en) optimaal werken?
          Regelmatige inspectie en preventief onderhoud door Vossestein Elektrotechniek, zorgt ervoor dat u zich geen
          zorgen hoeft te maken over veiligheid en betrouwbaarheid. Bovendien vergroot regelmatig onderhoud de
          levensduur van uw installaties en geeft het u een stuk comfort.
          <br><br>
          Onze goed opgeleide, vakbekwame monteurs beheren, inspecteren, controleren en onderhouden diverse soorten
          van installaties op het gebied van:
          <br>
          <br> Verlichting
          <br> Laagspanningsinstallaties
          <br> Elektrotechnische installaties
          <br> Zonnepanelen
        </p>
      </div>
    </article>
  </div>
</template>
<script lang="ts" setup>
import heroImage, { type HeroImageProps } from '../components/pagedesign/heroImage.vue';
import readMoreArticleComponent, { type ReadMoreArticleProps } from '../components/pagedesign/readMoreArticle.vue';

const heroImageProps: HeroImageProps = {
  imagePath: '/images/Vossestein-elektro.jpg',
  altText: 'Vossestein Wie wij zijn',
  overlayText: 'Service & Onderhoud van uw elektrotechnische installatie'
}

const readMoreArticleProps: ReadMoreArticleProps = {
  title: 'Meer weten?',
  articleText: 'Neem contact met ons op.',
  altText: 'Vossestein offerte',
  imagePath: '/images/Vossestein-6068.jpg',
  articlePath: '/contact'
}

useSeoMeta({
  title: 'Elektrotechniek | Vossestein Elektrotechniek',
  ogSiteName: 'Vossestein Elektrotechniek',
  ogTitle: 'Elektrotechniek',
  ogDescription: 'Duurzame elektrotechnische oplossingen en installaties',
  ogUrl: 'https://www.vossesteinelektrotechniek.nl/elektrotechniek',
  ogType: 'article',
  ogImage: 'https://www.vossesteinelektrotechniek.nl/images/Vossestein-elektro.jpg',
})

function useSeoMeta(arg0: { title: string; ogSiteName: string; ogTitle: string; ogDescription: string; ogUrl: string; ogType: string; ogImage: string; }) {
  throw new Error('Function not implemented.');
}
</script>

