<script setup lang="ts">
import { defineProps, watch, reactive } from 'vue';
import Nunca from './components/Nunca.vue';
import Siempre from './components/Siempre.vue';

const verSiempre = reactive({
  mostrar: false
});
const verNunca = reactive({
  mostrar: false
});

const mostrarSiempre = () => {
  verSiempre.mostrar = true;
};
const mostrarNunca = () => {
  verNunca.mostrar = true;
};
const ocultarSiempre = () => {
  verSiempre.mostrar = false;
};
const ocultarNunca = () => {
  verNunca.mostrar = false;
};

</script>

<template>
  
  <header>
   <a @click="mostrarSiempre" >SIEMPRE</a>
    <Siempre v-if="verSiempre.mostrar"/>
  </header>

  <main>
   <a @click="mostrarNunca">NUNCA</a>
    <Nunca v-if="verNunca.mostrar"/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
