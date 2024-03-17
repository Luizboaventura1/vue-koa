import type { Ref } from "vue";
import type { Notification } from "./Notification";

export interface ToastInterface {
  toasts: Ref<Notification[]>;
  add: (newToast: { title: string; timeout?: number }) => void;
}