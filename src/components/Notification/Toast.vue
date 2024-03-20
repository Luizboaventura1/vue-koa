<template>
  <div class="absolute right-3 top-3 overflow-hidden">
    <TransitionGroup name="list" tag="ul" class="grid gap-y-1 p-1">
      <li
        v-for="(toast, index) in props.toast.toastList.value"
        :key="index"
        class="w-[300px] h-full min-h-[50px] relative bg-primary-color border border-zinc-600 shadow rounded-md text-text-primary-color p-4 flex items-center overflow-hidden"
        :class="props.toastStyle"
      >
        {{ toast.title }}

        <div class="absolute bottom-0 left-0 w-full h-[3px]">
          <div
            class="bar h-full"
            :style="{
              animationDuration: `${toast.timeout ? toast.timeout : 2000}ms`,
            }"
          ></div>
        </div>
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
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

.bar {
  animation-name: bar;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  background-color: #39b883;
  width: 0;
}

@keyframes bar {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}
</style>
