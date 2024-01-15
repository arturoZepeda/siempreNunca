<script setup lang="ts">
import { defineProps, watch, reactive } from 'vue';
import Nunca from './components/Nunca.vue';
import Siempre from './components/Siempre.vue';

const ver = reactive({
  mostrarSiempre: false,
  mostrarNunca: false
});

const mostrarSiempre = () => {
  ver.mostrarSiempre = true;
};
const mostrarNunca = () => {
  ver.mostrarNunca = true;
};
const ocultarSiempre = () => {
  ver.mostrarSiempre = false;
};
const ocultarNunca = () => {
  ver.mostrarNunca = false;
};

</script>

<template>
  <!--   <header>

  </header> -->

  <main>
    <h1>¿Qué dijiste?</h1>
    <div class="split left">
      <div class="centered">
        <a @click="mostrarSiempre" v-if="!ver.mostrarSiempre">SIEMPRE</a>
        <Siempre v-if="ver.mostrarSiempre" />
        <a @click="ocultarSiempre" v-if="ver.mostrarSiempre">Ocultar Siempre</a>
      </div>
    </div>
    <div class="split right">
      <div class="centered">
        <a @click="mostrarNunca" v-if="!ver.mostrarNunca">NUNCA</a>
        <Nunca v-if="ver.mostrarNunca" />
        <a @click="ocultarNunca" v-if="ver.mostrarNunca">Ocultar Nunca</a>
      </div>
    </div>
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

.split {
  height: 100%;
  width: 50%;
  position: fixed;
  /* position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px; */
}
/* Control the left side */
.left {
  left: 50%;
  align-self: self-end;
  /*background-color: #111;*/
}

/* Control the right side */
.right {
  right: 50%;
  /*background-color: red;*/
}
</style>
