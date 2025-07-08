<template>
  <div class="container">
    <article>
      <heroImage v-bind="heroImageProps" />
        <div class="article-paragraph">
          <h2 class="article-sub-title">Laadpaal bij u thuis nodig voor uw elektrische auto?</h2>
          <p>
            Heeft u geen zin meer om lang te wachten totdat uw elektrische auto opgeladen is bij een openbaar oplaadpunt
            ? Bent u de hoge openbare oplaadkosten zat?
            <br><br>
            Denk dan eens aan de aanschaf van een eigen oplaadpunt voor thuis.
            <br><br>
            Bij Vossestein Elektrotechniek bieden wij snelle, betrouwbare en betaalbare laadpaal-oplossingen.
            <br><br>
            Ontdek ons gevarieerde aanbod aan laadpalen en kies het oplaadpunt dat het beste bij uw auto en situatie
            past. Onze ervaren monteurs installeren de laadpaal vakkundig en snel bij u thuis.

            <br><br>
            Meer weten? Neem vrijblijvend <NuxtLink to="/contact">contact</NuxtLink> met ons op.
          </p>
        </div>
        <div class="container">
          <div id="read-more-offer">
            <readMoreArticleComponent v-bind="readMoreArticleProps" />
          </div>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Wat zijn de voordelen van een eigen laadpaal thuis?</h2>
          <p>
            <strong>Gemak & efficiënt</strong>
          </p>
          <p>
            Met een eigen laadpaal bent u niet meer afhankelijk van publieke laadpunten. U hoeft niet te wachten tot
            andere auto’s klaar zijn met opladen, of op zoek te gaan naar een openbaar laadstation. Door thuis op te
            laden, vertrekt u altijd met een volgeladen accu van huis. Wanneer uw auto ’s nachts stilstaat, wordt de
            accu opgeladen, zodat u de volgende dag zorgeloos weg kunt rijden.
            <br><br>
          </p>
          <p>
            <strong>Goedkoper</strong>
          </p>
          <p>
            Daarnaast is het thuis opladen van uw auto veel goedkoper dan bij een openbaar oplaadpunt, want u gebruikt
            het stroomtarief van uw eigen energiecontract in plaats van het duurdere openbare oplaadtarief.
            <br><br>
          </p>
          <p>
            <strong>Duurzaam</strong>
          </p>
          <p>
            En heeft u zonnepanelen, dan gebruikt u uw eigen groene energie om de auto op te laden.
          </p>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Gevarieerd aanbod aan laadpaalmerken</h2>
          <p>
            Wij werken met diverse laadpaalmerken waaronder: Alfen S-Line, SOLAR EDGE EV LADER, HUAWEI FUSION CHARGE,
            MAXICHARGER AC WALLBOC, MENNEKES AMTRON, WALLBOX PULSAR en EVBOX ELVI.
          </p>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Welke thuislaadpunt past bij u?</h2>
          <p>
            Welk thuislaadpunt het beste bij u past, hangt af van uw elektrische auto, uw stroomaansluiting en uw
            gebruik.
            <br><br>
            Geen idee welke laadpaal u nodig heeft?
            <br><br>
            Vraag dan vrijblijvend advies aan ons. Wij helpen u graag verder om de juiste keuze te maken voor uw eigen
            oplaadpunt en kunnen deze snel installeren.
          </p>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Wat bieden wij?</h2>
          <p>
          <strong>- Binnen 2 werkdagen een offerte op maat</strong><br>
          <strong>- Persoonlijk advies om de best passende laadpaal te kiezen</strong><br>
          <strong>- Betaalbare en duurzame laadpaaloplossingen</strong><br>
          <strong>- Uw laadpaal wordt binnen 10 werkdagen geïnstalleerd</strong><br>
          <strong>- Ervaren installateurs / monteurs die ontzorgen</strong><br>
          <strong>- Minimaal 2 jaar garantie</strong><br>
          <strong>- Snelle levering & installatie</strong><br>
          </p>
        </div>
    </article>
  </div>
</template>
<script lang="ts" setup>
import heroImage, { type HeroImageProps } from '~/components/pagedesign/heroImage.vue';
import readMoreArticleComponent, { type ReadMoreArticleProps } from '~/components/pagedesign/readMoreArticle.vue';

const heroImageProps: HeroImageProps = {
  imagePath: '/images/Vossestein Buzz-6131.jpg',
  altText: 'Vossestein laadpaal thuis',
  overlayText: 'Laadpaal thuis'
}

const readMoreArticleProps: ReadMoreArticleProps = {
  title: 'Meer weten?',
  articleText: 'Neem contact met ons op.',
  altText: 'Vossestein offerte',
  imagePath: '/images/Vossestein-6089.jpg',
  articlePath: '/contact'
}

useSeoMeta({
  title: 'Laadpaal thuis | Vossestein Elektrotechniek',
  ogSiteName: 'Vossestein Elektrotechniek',
  ogTitle: 'Laadpaal thuis',
  ogDescription: 'Duurzame elektrotechnische oplossingen en installaties',
  ogUrl: 'https://www.vossesteinelektrotechniek.nl/laadpalen',
  ogType: 'article',
  ogImage: 'https://www.vossesteinelektrotechniek.nl/images/Vossestein Buzz-6131.jpg',
})

</script>

