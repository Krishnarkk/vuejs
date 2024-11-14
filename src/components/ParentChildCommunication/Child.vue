<script>
export default {
  props: ['title'],
};
</script>

<!-- Child component -->
<template>
  <h1>Child component</h1>
  <h3>Title:{{ title }}</h3>
  <!-- Emitting 'increment' event when the button is clicked -->
  <button @click="$emit('increment')">Increment</button>
</template>
