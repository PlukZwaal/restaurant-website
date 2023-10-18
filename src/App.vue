<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import ContactHeaderComponent from './components/ContactHeaderComponent.vue';
  import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
  <ContactHeaderComponent />
  <HeaderComponent />
  <br>
  <RouterView />
</template>
