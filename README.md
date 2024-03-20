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