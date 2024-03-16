<template>
  <header class="w-screen h-screen flex justify-center items-center">
    <Toast :state="state" :title="title" />
    <button
      @click="toggle"
      class="text-lg bg-blue-600 m-3 rounded-md p-2 text-white"
    >
      Toggle
    </button>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Toast from "./components/Toast/Toast.vue";

let state = ref<boolean>(false);
let title = ref<string>("Error!");
const toggle = () => (state.value = !state.value);

const test = () => {
  const show = (msg: string): void => {
    console.log(msg);
  }

  return {
    show
  }
}

const test1 = test()
test1.show('opa')
</script>

<style scoped></style>
