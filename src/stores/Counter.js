import { defineStore } from "pinia";

//state is function which return a initial state
export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
    theme: false,
  }),
  //computed properties for stores   (derived state changes here )
  getters: {
    doubleCount: (state) => state.count * 2,
    tripleCount: (state) => state.count * 3,
  },

  //actions are methods that can modify state or side effects (initial state or direct state modifies here)
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    toggle() {
      this.theme = !this.theme;
    },
  },
});
