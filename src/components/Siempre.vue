<script setup lang="ts">
const fechaActual = new Date().toISOString().slice(0, 10);
</script>
<template>
  <div>
    <h1>Siempre</h1>
    <p>¿Qué dijiste que siempre harías?</p>
    <form @submit.prevent="submit" >
    <h2><label for="fecha">Fecha:</label></h2>
        <input type="date" id="fecha" readonly :value="fechaActual">
        <br>
    <h2><label for="descripcion">Descripcion</label></h2>
        <textarea name="descripcion" id="descripcion" cols="30" rows="10" placeholder="Ingresa descipción de lo que dijiste como SIEMPRE"></textarea>
        <br>
    <h2><label for="emocion">Emociones</label></h2>
      <input type="text" id="emocion" placeholder="Ingresa la emoción mientras lo decias.">
        <br>
    <button type="submit">Siempre</button>
</form>
  </div>
</template>