import type { ToastInterface } from "@/types/ToastInterface";
import type { Notification } from "@/types/Notification";
import { ref, type Ref } from "vue";

export default function useToast(): ToastInterface {
  let toasts: Ref<Notification[]> = ref([]);

  const add = (newToast: Notification): void => {
    toasts.value.unshift(newToast);

    let timeout = newToast.timeout ? newToast.timeout : 2000;

    // Delete toast after timeout
    setTimeout(() => {
      let index = toasts.value.indexOf(newToast);
      
      if (index !== -1) {
        toasts.value.splice(index, 1);
      }
    }, timeout);
  };

  return {
    toasts,
    add,
  };
}
