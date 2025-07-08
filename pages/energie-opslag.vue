<template>
  <div class="container">
    <article>
      <heroImage v-bind="heroImageProps" />
        <div class="article-paragraph">
          <h2 class="article-sub-title">Goedkope, groene energie altijd tot uw beschikking via een accu </h2>
          <p>
            Wilt u altijd beschikken over groene en goedkope energie, ook als de zon niet schijnt, of in de avonduren,
            of bij een vol net?
            <br><br>
            Overweeg dan de aanschaf van een accusysteem, zodat u groene energie kunt opslaan als deze goedkoop is en op
            een later moment weer kunt gebruiken.
            <br><br>
            Bij Vossestein Elektrotechniek werken we met verschillende soorten accusystemen afgestemd op uw persoonlijke
            energiebehoefte.
          </p>
        </div>
        <div class="container">
          <div id="read-more-offer">
            <readMoreArticleComponent v-bind="readMoreArticleProps" />
          </div>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Hoe werkt een accu?</h2>
          <p>
            Met een accu (ook wel thuisbatterij genoemd) kunt u de energie opslaan die is opgewekt door uw zonnepanelen
            en later gebruiken. Vooral bij zuid-geplaatste zonnepanelen is er rond het middaguur een hoge piek in het
            opwekken van energie. Huishoudens kunnen al deze energie vaak niet direct verbruiken. Hierdoor wordt deze
            energie het net op gestuurd waardoor u er zelf niet direct gebruik van maakt. Bij het gebruik van een accu
            wordt deze energie opgeslagen zodat u het later, op momenten dat de panelen niet voldoende energie opwekken,
            zelf kan verbruiken.
            <br><br>
            De koppeling tussen de thuisbatterij en de omvormer van uw zonnepanelen is erg belangrijk. Uiteraard
            verzorgen wij de complete installatie, koppeling en aansluiting wanneer onze deskundige monteurs de
            zonnepanelen en thuisbatterij bij u installeren.
          </p>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Benieuwd naar de accusysteem-mogelijkheden voor uw zonnepaneleninstallatie?
          </h2>
          <p>
            Neem vrijblijvend <NuxtLink to="/contact">contact</NuxtLink> met ons op.
          </p>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Tips bij het aanschaffen van een thuisbatterij:</h2>
          <p>
            <strong>Tip 1:</strong> Voordat u er een aanschaft, moet u goed weten hoeveel stroom u verbruikt.
            Thuisbatterijen verschillen namelijk nogal in prijs. Dat hangt deels af van de capaciteit. Als u weet
            hoeveel u gebruikt, weet u ook hoe groot uw thuisbatterij moet zijn.
            <br><br>
            <strong>Tip 2:</strong> De thuisbatterijen die wij plaatsen zijn modulair, dus mocht u later toch meer nodig
            hebben dan is dat geen probleem.
          </p>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Voordelen van een thuisbatterij:</h2>
          <p>
            <strong>U bent zelfvoorzienend:</strong><br>
            Minder afhankelijk van het stroomnet én wisselende stroomprijzen.<br>
            <strong>Alternatief voor salderen:</strong><br>
            De <strong>salderingsregeling</strong> wordt afgebouwd vanaf 2025. U krijgt steeds minder en uiteindelijk
            helemaal niets meer voor stroom die u aan het net levert. Met de thuisaccu bewaart u de energie om zelf te
            gebruiken.<br>
            <strong>Groene stroom:</strong><br>
            Als u uw eigen energie gebruikt, gebruikt u minder stroom van het net. En uw eigen energie is groen, omdat
            het van uw zonnepanelen komt.
          </p>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">De kosten van een thuisbatterij</h2>
          <p>
          Hoe duur een thuisbatterij is, hangt af van verschillende dingen.<br>
            Er zit bijvoorbeeld veel verschil in kwaliteit. Ook de capaciteit van uw thuisbatterij beïnvloedt de prijs.
            Bovendien is de thuisbatterij een vrij nieuw product en dit is niet gunstig voor de prijs.
            <br><br>
            Tot slot zijn er in Nederland vanuit de overheid nog geen subsidies op de aanschaf van een accu voor
            zonnepanelen.
            Maar misschien kan het in uw situatie wel uit? Dat is natuurlijk het belangrijkst.
            Om die vraag te kunnen beantwoorden zult u moeten gaan meten. Met gebruik van meetspoelen kunt u in een
            energiemanager bijhouden wat uw verbruik is en welk deel hiervan wordt geleverd door de zonnepanelen.
          Wij denken graag met u mee.<br><br> <strong>Neem vrijblijvend <NuxtLink to="/contact">contact</NuxtLink> met ons op.</strong>
          </p>
        </div>
    </article>
  </div>
</template>
<script lang="ts" setup>
import heroImage, { type HeroImageProps } from '~/components/pagedesign/heroImage.vue';
import readMoreArticleComponent, { type ReadMoreArticleProps } from '~/components/pagedesign/readMoreArticle.vue';

const heroImageProps: HeroImageProps = {
  imagePath: '/images/Vossestein-accus.jpeg',
  altText: 'Vossestein energie opslag',
  overlayText: 'Energie opslag'
}

const readMoreArticleProps: ReadMoreArticleProps = {
  title: 'Meer weten?',
  articleText: 'Neem contact met ons op.',
  altText: 'Vossestein offerte',
  imagePath: '/images/Vossestein Buzz-6194.jpg',
  articlePath: '/contact'
}

useSeoMeta({
  title: 'Energie opslag | Vossestein Elektrotechniek',
  ogSiteName: 'Vossestein Elektrotechniek',
  ogTitle: 'Energie opslag',
  ogDescription: 'Duurzame elektrotechnische oplossingen en installaties',
  ogUrl: 'https://www.vossesteinelektrotechniek.nl/energie-opslag',
  ogType: 'article',
  ogImage: 'https://www.vossesteinelektrotechniek.nl/images/Vossestein-accus.jpeg',
})

</script>

