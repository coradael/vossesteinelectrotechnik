<template>
  <div class="container">
    <article>
      <heroImage v-bind="heroImageProps" />
        <div class="article-paragraph">
          <h2 class="article-sub-title">Zonne energie</h2>
          <p>
            Wanneer u als particulier of bedrijf overweegt om zonnepanelen – kortweg pv panelen – op uw woning of
            bedrijfspand(en) of woningbouwprojecten te gaan installeren, adviseren wij u daar graag bij. Samen met u
            werken we een plan uit om de zonne-energie installatie te realiseren en staan wij dagelijks voor u klaar
            voor de service en het onderhoud aan het zonne-energiesysteem, zodat deze optimaal rendement biedt en u er
            geen omkijken naar heeft.
            <br><br>
            Vossestein Elektrotechniek is erkend Techniek Nederland (voorheen Uneto VNI) en PV-installateur en met
            jarenlange ervaring en specifieke vakkennis op het gebied van middelgrote en grote zonne-energie
            installaties, dé expert die u zoekt bij uw zonnepanelen installatie.
            <br><br>
            Wij zijn er trots op inmiddels een betrouwbare partner voor vele toonaangevende opdrachtgevers in de
            bouwsector te mogen zijn. Opdrachtgevers die ons steeds weer weten te vinden voor het onderhoud van
            specifieke zonne-energie installatie projecten door heel Nederland.
          </p>
        </div>
        <div class="container">
          <div id="read-more-offer">
            <readMoreArticleComponent v-bind="readMoreArticleProps" />
          </div>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Specialist in het onderhoud van zonnepanelensystemen</h2>
          <p>
            Wij zijn gespecialiseerd in het bieden van service en onderhoud aan zonne-energiesystemen en onze service
            staat garant voor een betrouwbare bewaking, analyse en het onderhoud van uw zonne-energiesysteem. Bij een
            eventuele storingssignalering kunt u rekenen op onze adequate en vakkundige hulp. Ons doel is om uw
            zonne-energiesysteem ongestoord en optimaal te laten werken en eventuele onveilige situaties te voorkomen.
          </p>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Service & Onderhoud zonne-energiesystemen</h2>
          <p>
            Wanneer u een zonnepanelen systeem heeft aangeschaft, wilt u uiteraard ook graag weten of de pv-installatie
            goed werkt, immers met de opgewekte zonne-energie wordt de investering terugverdiend. Door regelmatig een
            zonne-energiesysteem van professioneel onderhoud te voorzien, worden onveilige situaties voorkomen.
            <br><br>
            Tevens geeft het inzicht in het functioneren van de diverse onderdelen van uw pv-installatie, zorgt
            regelmatig onderhoud voor een optimale energieproductie en garandeert het uw aanspraak op fabrieksgarantie
            of een eventuele verzekeringsdekking. Regelmatig onderhoud van uw zonnepanelensysteem is dus essentieel!
          </p>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Zelf uw zonnepanelensysteem onderhouden of uitbesteden?</h2>
          <p>
            Wat doet u zelf om de prestaties van de zonnepanelen in de gaten houden? Hoe voorkomt u storingen aan uw
            systeem? En weet u tijdig dat een of meerdere omvormers van uw systeem zijn uitgevallen en uw zonnepanelen
            niet meer 100% werken? Niet iedereen heeft voldoende kennis en tijd om zijn zonne-energie systeem regelmatig
            te monitoren en adequaat op storingen te reageren. Onze vakbekwame monteurs hebben die kennis en ervaring
            uiteraard wel in huis en staan klaar om u te helpen bij (potentiële) storingen en uw zonnepanelen
            installatie te monitoren.
            <br><br>
            <strong>
              Met ons Service & Onderhoudscontract bent u verzekerd van onze vakkennis en ervaring om het beste
              rendement uit uw zonnepanelensysteem te halen en deze veilig te laten werken.
            </strong>
          </p>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Ons Zonne-energie Service & Onderhoudscontract ontzorgt!</h2>
          <p>
            Wilt u geen omkijken meer hebben naar uw zonne-energiesysteem, altijd vakkundige hulp paraat hebben bij een
            eventuele storing, professionele monitoring van uw zonnepaneleninstallatie op afstand om zo een goede en
            (brand)veilige werking en optimaal rendement van uw systeem te waarborgen?
            <br><br>
            Dan is ons service & onderhoudscontract op maat wellicht iets voor u?
            <br><br>
            Met een service & onderhoudscontract op maat ontzorgt Vossestein Elektrotechniek iedere eigenaar van
            zonne-energiesystemen.
          </p>
        </div>
        <div class="article-paragraph">
          <h2 class="article-sub-title">Wat houdt het zonne-energie service & onderhoudscontract in?</h2>
          <p>
            Wanneer u een service & onderhoudscontract bij ons afsluit kunt u rekenen op onderstaande diensten:
          </p>
      </div>
      <div class="article-paragraph">
          <h2 class="article-sub-title">Bewaking van veiligheid en prestaties van uw zonnepanelensysteem</h2>
          <p>
            Door onze professionele monitoring (op afstand) van uw zonnepanelensysteem, houden wij de prestaties
            nauwlettend in de gaten. Mochten deze wat minder zijn dan verwacht, nemen wij contact met u op om het op te
            lossen en het beste resultaat eruit te halen. Dat geldt ook wanneer uw zonnepanelen door een storing
            plotseling uitvallen. Ook dan kunt u op onze ervaren, snelle storingservice rekenen.
          </p>
          <p>
            <br>
            <strong>Jaarlijks onderhoud op locatie</strong>
            <br><br>
            Naast de monitoring en het oplossen van eventuele tussentijdse storingen, komen wij automatisch jaarlijks
            bij
            u langs om de gewenste onderhoudsinspecties ter plaatse aan uw zonne-energiesysteem uit te voeren.
            <br><br>
            <strong>Klantenservice</strong>
            <br><br>
            Onze klantenservice staat dagelijks voor u klaar om u te woord te staan en eventuele vragen te beantwoorden.
            <br><br>
            Interesse in ons Service & Onderhoudscontract voor uw zonne-energie installatie? Vul onderstaand formulier
            in en wij nemen contact met u op.
            <br><br>
          </p>
          <contactform />
      </div>
    </article>
  </div>
</template>
<script lang="ts" setup>
import heroImage, { type HeroImageProps } from '../components/pagedesign/heroImage.vue';
import readMoreArticleComponent, { type ReadMoreArticleProps } from '../components/pagedesign/readMoreArticle.vue';
import contactform from '../components/contactform/contactform.vue';

const heroImageProps: HeroImageProps = {
  imagePath: '/images/zonne-energie-article.png',
  altText: 'Vossestein zonne energie',
  overlayText: 'Zonne-energie service & onderhoud',
}

const readMoreArticleProps: ReadMoreArticleProps = {
  title: 'Meer weten?',
  articleText: 'Neem contact met ons op.',
  altText: 'Vossestein offerte',
  imagePath: '/images/Vossestein-zonnepark.jpeg',
  articlePath: '/contact'
}

useSeoMeta({
  title: 'Zonne energie | Vossestein Elektrotechniek',
  ogSiteName: 'Vossestein Elektrotechniek',
  ogTitle: 'Zonne energie',
  ogDescription: 'Duurzame elektrotechnische oplossingen en installaties',
  ogUrl: 'https://www.vossesteinelektrotechniek.nl/zonne-energie',
  ogType: 'article',
  ogImage: 'https://www.vossesteinelektrotechniek.nl/images/zonne-energie-article.png',
})

function useSeoMeta(arg0: { title: string; ogSiteName: string; ogTitle: string; ogDescription: string; ogUrl: string; ogType: string; ogImage: string; }) {
  throw new Error('Function not implemented.');
}
</script>

