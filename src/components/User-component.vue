<template>
  <div>
    <h1>User Component</h1>
    <p>User Id:{{ id }}</p>
  </div>
</template>

<script setup>
defineProps({
  id: Number,
});
</script>
