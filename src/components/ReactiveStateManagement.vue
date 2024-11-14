<script setup>
import { ref, reactive } from "vue";
const count = ref(0);
const profile = reactive({
  name: "John",
  age: 20,
});
const increment = () => {
  return count.value++;
};
const updateAge = (newAge) => {
  return (profile.age = newAge);
}; //even we dont use updateAge value updates becoz of reactive and observables
</script>
<template>
  <h1>Reactive State Management</h1>
  <p>Name:{{ profile.name }}</p>
  <p>Count:{{ count }}</p>
  <button @click="increment">Incremnet</button>
  <div>
    <h2>User Profile</h2>
    <p>Name: {{ profile.name }}</p>
    <p>Age: {{ profile.age }}</p>
    <h3>Update Age</h3>
    <input type="number" v-model="profile.age" placeholder="enter age" />
    <input type="text" v-model="profile.name" placeholder="enter  name" />
  </div>
</template>

<style scoped>
h2,
h3 {
  margin-top: 20px;
}
button {
  margin-top: 10px;
}
input {
  display: block;
  margin: 5px 0;
}
</style>
