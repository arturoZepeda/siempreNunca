<script setup lang="ts">
const fechaActual = new Date().toISOString().slice(0, 10);
</script>
<template>
  <div>
    <h1>NUNCA</h1>
    <p>¿Qué dijiste que nunca harías?</p>
    <form @submit.prevent="submit" >
    <h2><label for="fecha">Fecha:</label></h2>
        <input type="date" id="fecha" readonly :value="fechaActual">
        <br>
    <h2><label for="descripcion">Descripcion</label></h2>
        <textarea name="descripcion" id="descripcion" cols="30" rows="10" placeholder="Ingresa descipción de lo que dijiste como NUNCa"></textarea>
        <br>
    <h2><label for="motivo">Motivo</label></h2>
        <input type="text" id="motivo" placeholder="Ingresa el motivo por el cual dijiste NUNCA">
        <br>
    <button type="submit">NUNCA</button>
</form>
  </div>
</template>