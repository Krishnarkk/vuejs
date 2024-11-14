<script>
import { ref } from "vue";
import Child from "./Child.vue";
import CardSlots from "../Slots/CardSlots.vue";

export default {
  name: "Parent",
  components: {
    Child,
    CardSlots
  },
  setup() {
    const message = ref("Hello from Parent");
    const counter = ref(0);
    const incrementCounter = () => {
      return counter.value++;
    };
    return { counter, message, incrementCounter };
  },
};
</script>

<!-- Parent component -->
<template>
  <h1>Parent component</h1>
  <!-- Passing message to the child and listening for 'increment' event -->
  <Child :title="message" @increment="incrementCounter" />
  <p>Counter:{{ counter }}</p>

  <div>
    <h1>Card Slots </h1>
    <CardSlots>
      <p>Main content goes here</p>
      <template #actions>
        <button>Action button</button>
      </template>
    </CardSlots>

  </div>
</template>
