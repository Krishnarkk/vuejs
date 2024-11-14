<template>
  <p>{{ message }}</p>
  <p>Counter:{{ counter }}</p>
  <button @click="increment">Incremnet Counter</button>
</template>

<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default {
  setup() {
    const message = ref("component is loaded");
    const counter = ref(0);
    const increment = () => {
      console.log(counter);
      return (counter.value += 1);
    };

    //lifecycle of VueJs

    function beforeCreate() {
      console.log(
        "beforeCreate : component instance is being initialized but data is not yet available"
      );
    }
    beforeCreate();

    function created() {
      console.log("created:Component instance created and data is available");
      console.log(`initial message ${message} accesing the reactive data`);
    }
    created();

    onBeforeMount(() => {
      console.log("onbeforemount, component is about to mount");
    });

    onMounted(() => {
      console.log("component has been mounted to dom");
    });

    onBeforeUpdate(() => {
      console.log("component is about to update");
    });

    onUpdated(() => {
      console.log("component has updated");
    });

    onBeforeUnmount(() => {
      console.log("component is about to be unmount");
    });

    onUnmounted(() => {
      console.log("component has been unmounted");
    });
    return { message, counter, increment };
  },
};
</script>
