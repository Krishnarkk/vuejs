npm create vue@latest
npm install
npm run dev

adding dynamic functionality to html
making reactive

# <template></template>

v-bind or :src
v-on:click or @click
ref() for getting referance
computed(()=>{}) for computations like operations on string
v-for= for loop

<li v-for="(item, index) in items" :key="index">{{ item }}</li>

# v-if and v-else -->    
 <p v-if="isLoggedIn">Welcome back</p>
    <p v-else>Please login</p>




v-bind binds dynamic attributes (e.g., src for images).
v-on binds event listeners (e.g., click).
ref() is used for creating reactive references for DOM elements.
computed() calculates derived state (e.g., reversing a string).
v-for is used to loop through arrays or objects.
v-if, v-else, and v-else-if handle conditional rendering.
v-show toggles visibility without removing elements from the DOM.
v-model is used for two-way data binding.
v-bind:class and v-bind:style allow dynamic styling.
v-slot lets you pass content to child components using named slots








# Lifecycle methods
renderer encounters component
(setup composition API) --> composition of events or API
beforeCreate ==> checks component is loaded checking and initialize values  like pending
   options API helps 
created ==> 
onBeforeMount ==> before mounting


