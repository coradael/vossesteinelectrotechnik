<template>
  <div id="default-layout">
    <navbar />
    <img id="background-image" src="/images/vossestein_beeldmerkgekanteld.svg"
      alt="Achtergrond afbeelding - logo vossestein">
    <div id="content-wrapper">
      <slot />
    </div>
    <footerComponent />
  </div>
  <div id="mobile-layout">
    <navbarMobile />
    <slot />
    <footerMobileComponent />
  </div>
</template>
<script setup lang="ts">
import navbar from '~/components/layout/navbar.vue';
import footerComponent from '~/components/layout/footer.vue';
import navbarMobile from '~/components/layout/navbar-mobile.vue';
import footerMobileComponent from '~/components/layout/footer.vue';
</script>

<style scope>
#background-image {
  position: absolute;
  top: 17vh;
  right: -19vw;
  width: 1200px;
  opacity: 0.1;
}

#content-wrapper {
  position: relative;
}

#default-layout {
  display: block;
}
#mobile-layout {
  display: none;
}

@media (max-width: 1280px) {
  #background-image {
    display: none;
  }
  #default-layout {
    display: none;
  }
  #mobile-layout {
    display: block;
  }
}
</style>
