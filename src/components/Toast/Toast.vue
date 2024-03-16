<template>
  <div
    v-if="props.state"
    class="w-[300px] h-[40px] bg-zinc-800 rounded-md text-white p-4 flex items-center"
  >
    {{ props.title }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{ state: Boolean; timeout?: Number; title: String }>();
</script>

<style scoped></style>
