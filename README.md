## 📚 Vue Koa v0.5.0

### How to use?

```js	
<template>
  <div>
    <Toast :toast />
    <button @click="toast.add({ title: 'My toast', timeout: 2000 })">
      Add Toast
    </button>
  </div>
</template>

<script setup lang="ts">
import useToast from "./composables/useToast";
import Toast from "./components/Toast/Toast.vue";

const toast = useToast();
</script>

```

You can add as many toasts as you want just by using:
```js
toast.add({
  title: 'Your title',
  timeout: 3000 // default is 2000
})
```
Use the `toast-style` prop to change the style of the toast
```js
  <Toast
    toast-style="flex items-center w-[300px] h-[55px] bg-primary-color border border-zinc-600 mb-1 shadow rounded-md text-text-primary-color p-4 overflow-hidden truncate"
    :toast="toast"
  />
```
Compatible with tailwindcss only
