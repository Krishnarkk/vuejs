<script>
import { useCounterStore } from "@/stores/Counter";
import { storeToRefs } from "pinia";
//storeToRefs --> making store to reactive
export default {
  setup() {
    //accesing state
    const counter = useCounterStore();
    //destructuring reactive properties for easier access
    const { count, doubleCount, tripleCount, theme, toggle } =
      storeToRefs(counter);

    return { counter, count, doubleCount, tripleCount, toggle, theme };
  },
};
</script>

<template>
  <div>
    <p>Count:{{ counter.count }}</p>
    <p>Double Count :{{ counter.doubleCount }}</p>
    <p>Triple Count :{{ counter.tripleCount }}</p>
    <button @click="counter.increment">Increment</button>
    <button @click="counter.decrement">Decrement</button>
  </div>
</template>
