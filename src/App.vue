<template>
  <div id="app">
    <h1>Hello world</h1>
    <img :src="imageUrl" alt="dynamic image" width="200px" height="200px" />
    <button @click="changeImage">Change Image</button>
    <p :class="textClass" :style="textStyle">I am image</p>
  </div>

  <div>
    <input v-model="userName" placeholder="Enter user" />
    <p>Hello, {{ userName }}</p>
  </div>

  <!-- Conditional rendering with v-if and v-else -->
  <div>
    <p v-if="isLoggedIn">Welcome back</p>
    <p v-else>Please login</p>
    <button @click="toggleLogin">{{ isLoggedIn ? "Logout" : "Login" }}</button>
  </div>

  <!-- Rendering list (for loop) -->
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>

  <!-- Computed properties -->
  <p>Message: {{ message }}</p>
  <p>Reversed Message: {{ reversedMessage }}</p>

  <nav>
    <router-link to="/parent">HomePage</router-link>
    <router-link :to="{ name: 'user', params: { id: 1 } }"
      >UserPage</router-link
    >
  </nav>
  <RouterView />
</template>

<script setup>
import { ref, computed } from "vue";

// Reactive references
const imageUrl = ref("https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP");
const textClass = ref("highlight");
const textStyle = ref({ color: "red", fontSize: "20px" });
const userName = ref("");
const isLoggedIn = ref(false);
const items = ref(["orange", "apple", "grapes"]);
const message = ref("Welcome to Vue");

// Computed property to reverse the message
const reversedMessage = computed(() => {
  return message.value.split("").reverse().join(""); // Split into characters, reverse, then join back
});

// Toggle login status
const toggleLogin = () => {
  isLoggedIn.value = !isLoggedIn.value;
};

// Change image URL
const changeImage = () => {
  imageUrl.value = "https://th.bing.com/th/id/OIG2.9O4YqGf98tiYzjKDvg7L";
};
</script>

<style>
nav {
  display: flex;
  gap:1rem;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}
nav a {
  text-decoration: none;  
  position: relative;     
  display: inline-block;  
  color: green;
}

nav a::after {
  content: '';            
  position: absolute;     
  bottom: 0;              
  left: 0;                
  width: 0;               
  height: 2px;            
  background-color: red;  
  transition: width 0.3s ease;  
}

nav a:hover::after {
  width: 100%;   
  background-color: black;        
}

</style>
