<template>
  <div class="container">
    <article>
      <heroImage v-bind="heroImageProps" />
        <div class="article-paragraph">
          <h2 class="article-sub-title">Zoekt u een zakelijke laadpaal voor bij uw bedrijf</h2>
          <p>
            Er zijn steeds meer elektrische auto’s op de weg. Logisch dus dat uw medewerkers en gasten ook steeds vaker
            in een elektrische auto naar uw kantoor komen.
            <br><br>
            Dan is het wel zo praktisch en servicegericht dat deze elektrische auto’s aan een eigen zakelijk oplaadpunt
            opgeladen kunnen worden.
            <br><br>
            Bovendien vereist de nieuwste wet- en regelgeving dat een bedrijf met een parkeerterrein met 10
            parkeerplekken, minimaal 1 oplaadpunt nodig heeft. Dit wordt in de toekomst zelfs verhoogd naar 1 oplaadpunt
            per 5 parkeerplekken.
          </p>
        </div>
      <div id="read-more-offer">
        <readMoreArticleComponent v-bind="readMoreArticleProps" />
      </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Voldoet uw bedrijf al aan deze regels?</h2>
          <p>
            Bij Vossestein denken wij graag met u mee. Bij ons bent u aan het juiste adres voor de aanschaf én
            installatie van een of meerdere zakelijke oplaadpalen.
            <br><br>
            Ontdek ons aanbod aan zakelijke oplaadpunten van Alfen Pro-line en kies de uitvoering die het beste bij uw
            wensen en situatie past.
            <br><br>
            Onze ervaren en professionele installateurs / monteurs installeren de laadpaal vakkundig en snel bij uw
            bedrijf.
            <br><br>
            Benieuwd naar de mogelijkheden?
            <br><br>
            <strong>
              <NuxtLink to="/contact">Vraag een gratis offerte aan voor een zakelijk laadpaal</NuxtLink>
            </strong>
          </p>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">De voordelen van op het werk laden van auto's</h2>
          <p>
          <strong>Conform wet-en regelgeving:</strong><br> Met een zakelijk oplaadpunt bij uw bedrijf voldoet u aan de
            nieuwste wet- en regelgeving<br>
          <strong>Praktisch & servicegericht:</strong><br> Bezoekers kunnen de laadpaal gebruiken als ze langskomen.<br>
          <strong>Kostenbesparend:</strong><br> Medewerkers laden hun auto goedkoper op dan bij een publieke laadplek<br>
          </p>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">De laadpalen die wij bij uw bedrijf plaatsen</h2>
          <p>
            Voor zakelijke oplaadpunten gebruiken wij de palen van <strong>Alfen Pro-line</strong>. Deze laadpalen zijn
            verkrijgbaar in
            een enkele én een dubbele uitvoering.
          </p>
          <br><br>
          <p>
          Verder bent u met een Alfen-laadpunt zeker van:<br><br>
            <strong>Laden met een hoog vermogen</strong><br>
            <strong>Dynamisch laden met meerdere laders op 1 parkeerplaats</strong><br>
            <strong>Europese degestrongjkheid</strong><br>
            <strong>Goede ondersteuning bij problemen (24/7)</strong><br>
            <strong>Zakelijk verrekening</strong>
          </p>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Welke zakelijke laadpaal heeft u nodig?</h2>
          <p>
            Uiteraard kunnen wij u adviseren over de aanschaf van de juiste zakelijke laadpaal / laadpalen en deze
            vakkundig en snel bij uw bedrijf installeren. Zo voldoet u aan de wet- en regelgeving én biedt u uw
            medewerkers en gasten het gemak van snel en goedkoop laden op uw parkeerterrein.
            <br><br>
            <strong>
              <NuxtLink to="/contact">Meer weten? Neem vrijblijvend contact met ons op.</NuxtLink>
            </strong>
          </p>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">De regelgeving voor laadpunten op het werk</h2>
          <p>
            <i>Wist u dat uw bedrijf minstens 1 laadpaal moet hebben, als u 10 parkeerplekken bij uw bedrijfspand
              heeft?</i>
            <br><br>
            Sinds 2020 zijn er regels voor het minimale aantal laadpunten bij nieuwe kantoren.
            <br><br>
            Als er 10 parkeerplekken bij uw bedrijf zijn, moet u minstens 1 laadpaal hebben.
            <br>
            In de toekomst moet dat zelfs 1 laadpaal per 5 parkeerplekken worden.
            <br><br>
            Daarom is het bij nieuwe of gerenoveerde kantoren verplicht om daar alvast klaar voor te zijn. Zo moet het
            leidingwerk voor de laadpalen alvast aangelegd worden bij 1 op de 5 parkeervakken.
            <br><br>
            Laat u persoonlijk door ons adviseren, welke zakelijke laadpaaloplossing het beste bij uw bedrijf en uw
            wensen past.
          </p>
        </div>
    </article>
  </div>
</template>
<script lang="ts" setup>
import heroImage, { type HeroImageProps } from '~/components/pagedesign/heroImage.vue';
import readMoreArticleComponent, { type ReadMoreArticleProps } from '~/components/pagedesign/readMoreArticle.vue';

const heroImageProps: HeroImageProps = {
  imagePath: '/images/Vossestein Buzz-6138.jpg',
  altText: 'Vossestein laadpaal voor bedrijven',
  overlayText: 'Laadpaal voor bedrijven',
}

const readMoreArticleProps: ReadMoreArticleProps = {
  title: 'Meer weten?',
  articleText: 'Neem contact met ons op.',
  altText: 'Vossestein offerte',
  imagePath: '/images/Vossestein Buzz-6138.jpg',
  articlePath: '/contact'
}

useSeoMeta({
  title: 'Laadpaal voor bedrijven | Vossestein Elektrotechniek',
  ogSiteName: 'Vossestein Elektrotechniek',
  ogTitle: 'Laadpaal voor bedrijven',
  ogDescription: 'Duurzame elektrotechnische oplossingen en installaties',
  ogUrl: 'https://www.vossesteinelektrotechniek.nl/laadpaal-voor-bedrijven',
  ogType: 'article',
  ogImage: 'https://www.vossesteinelektrotechniek.nl/images/Vossestein Buzz-6138.jpg',
})

</script>

