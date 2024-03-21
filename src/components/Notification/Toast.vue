<template>
  <div class="absolute right-0 top-0 h-full p-3">
    <TransitionGroup name="list" tag="ul" class="p-1 toasts h-full overflow-hidden">
      <li
        v-for="(toast, index) in props.toast.toastList.value"
        :key="index"
        class="w-[300px] h-[55px] bg-primary-color border border-zinc-600 mb-1 shadow rounded-md text-text-primary-color p-4 flex items-center overflow-hidden"
        :class="props.toastStyle"
      >
        {{ toast.title }}
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import type { ToastInterface } from "@/types/ToastInterface";

const props = defineProps<{ toast: ToastInterface; toastStyle?: string }>();
</script>

<style scoped>
.list-enter-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
