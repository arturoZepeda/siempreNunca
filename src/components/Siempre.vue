<script setup lang="ts">
import { reactive, ref } from 'vue';

const fechaActual = new Date().toISOString().slice(0, 10);
const palabraSiempre = reactive({
  palabra: 'siempre',
  fecha: fechaActual,
  descripcion: ''
});

const emit = defineEmits(['post-db']);

const enviarPalabra = () => {
  if (Object.values(palabraSiempre).some((value) => value === '')) {
    alert('Faltan datos');
    return;
  }
  emit('post-db', palabraSiempre);
};
</script>
<template>
  <div>
    <h1>Siempre</h1>
    <p>¿Qué dijiste que siempre harías?</p>
    <form @submit.prevent="enviarPalabra" >
    <h2><label for="fecha">Fecha:</label></h2>
        <input type="date" id="fecha" readonly v-model="palabraSiempre.fecha">
        <br>
    <h2><label for="descripcion">Descripcion</label></h2>
        <textarea name="descripcion" id="descripcion" cols="30" rows="10" v-model="palabraSiempre.descripcion" placeholder="Ingresa descipción de lo que dijiste como SIEMPRE"></textarea>
        <br>
    <!-- <h2><label for="emocion">Emociones</label></h2>
      <input type="text" id="emocion" placeholder="Ingresa la emoción mientras lo decias."> -->
        <br>
    <button type="submit">Siempre</button>
</form>
  </div>
</template>