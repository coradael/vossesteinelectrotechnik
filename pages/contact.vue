<template>
  <div class="container">
    <heroImage v-bind="heroImageProps" />
    <div id="contactform">
      <contactform />
    </div>
  </div>
</template>
<script lang="ts" setup>
import contactform from '~/components/contactform/contactform.vue';
import heroImage, { type HeroImageProps } from '~/components/pagedesign/heroImage.vue';

const heroImageProps: HeroImageProps = {
  imagePath: '/images/Vossestein-contact.jpg',
  altText: 'Vossestein contact',
  overlayText: 'Neem vrijblijvend contact met ons op!',
}

useSeoMeta({
  title: 'Contact | Vossestein Elektrotechniek',
  ogSiteName: 'Vossestein Elektrotechniek',
  ogTitle: 'Contact',
  ogDescription: 'Duurzame elektrotechnische oplossingen en installaties',
  ogUrl: 'https://www.vossesteinelektrotechniek.nl/contact',
  ogType: 'article',
  ogImage: 'https://www.vossesteinelektrotechniek.nl/images/Vossestein-contact.jpg',
})

</script>

<style scoped>
  #contactform {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
  }
</style>
