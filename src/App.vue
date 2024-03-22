<template>
  <div
    class="w-screen h-screen bg-secondary-color flex justify-center items-center"
  >
    <button
      class="text-zinc-900 font-bold rounded-md px-9 py-3 bg-emerald-600 hover:bg-emerald-500 transition-colors duration-300"
      @click="toast.add({ title: 'My toast notification', timeout: 2000 })"
    >
      Show
    </button>
  </div>
  <Toast :toast="toast" />
</template>

<script setup lang="ts">
import useToast from "./composables/useToast";
import Toast from "./components/Notification/Toast.vue";

const toast = useToast();
</script>
