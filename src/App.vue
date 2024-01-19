<script setup lang="ts">
import { defineProps, watch, reactive } from 'vue';
import Nunca from './components/Nunca.vue';
import Siempre from './components/Siempre.vue';
import useDB from './composables/useDB';

const { data, error, postDB, getDB} = useDB();

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

const obteberDatos = () => {
  getDB();
};

</script>

<template>
  <header>
    <h1>¿Qué dijiste?</h1>
  </header>

  <main>
    <!-- <div class="split left"> -->
      <div class="centered full-withradius border">
        <a @click="mostrarSiempre" v-if="!ver.mostrarSiempre">SIEMPRE</a>
        <Siempre v-if="ver.mostrarSiempre"  @post-db="postDB"/>
        <a @click="ocultarSiempre" v-if="ver.mostrarSiempre">Ocultar Siempre</a>
      </div>
    <!-- </div>
    <div class="split right"> -->
      <div class="centered full-withradius border">
        <a @click="mostrarNunca" v-if="!ver.mostrarNunca">NUNCA</a>
        <Nunca v-if="ver.mostrarNunca" @post-db="postDB"/>
        <a @click="ocultarNunca" v-if="ver.mostrarNunca">Ocultar Nunca</a>
      </div>
    <!-- </div> -->
  </main>
  <footer><a @click="obteberDatos">mostrar resultados</a></footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}
.border {
	font-size: 1.6rem;
	display: grid;
	place-items: center;
	min-height: 200px;
	border: 8px solid;
	padding: 1rem;
}

.full-withradius {
	position: relative;
	background: #181818;

	/*The background extends to the outside edge of the padding. No background is drawn beneath the border.*/
	background-clip: padding-box;

	border: solid 8px transparent;
	border-radius: 0.8rem;

	&:before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		margin: -8px; /* same as border width */
		border-radius: inherit; /* inherit container box's radius */
		background: linear-gradient(to left, turquoise, greenyellow);
	}
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
