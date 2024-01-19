import { reactive } from 'vue';
<script setup lang="ts">
import { reactive, ref } from 'vue';

const fechaActual = new Date().toISOString().slice(0, 10);
const palabraNunca = reactive({
  palabra: 'nunca',
  fecha: fechaActual,
  descripcion: ''
});



const emit =defineEmits(['post-db']);

const enviarPalabra = () => {
  if (Object.values(palabraNunca).some((value) => value === '')) {
    alert('Faltan datos');
    return;
  }
  emit('post-db', palabraNunca);
};
</script>
<template>
  <div>
    <h1>NUNCA</h1>
    <p>¿Qué dijiste que nunca harías?</p>
    <form @submit.prevent="enviarPalabra">
      <h2><label for="fecha">Fecha:</label></h2>
      <input type="date" id="fecha" readonly  v-model="palabraNunca.fecha">
      <br>
      <h2><label for="descripcion">Descripcion</label></h2>
      <textarea name="descripcion" id="descripcion" cols="30" rows="10"
        placeholder="Ingresa descipción de lo que dijiste como NUNCA" v-model="palabraNunca.descripcion"></textarea>
      <br><!-- 
      <h2><label for="emocion">Emociones</label></h2>
      <input type="text" id="emocion" placeholder="Ingresa la emoción mientras lo decias."> -->
      <br>
      <button type="submit">NUNCA</button>
    </form>
  </div>
</template> 