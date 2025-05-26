// stores/alert.store.ts
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAlertStore = defineStore("alert", () => {
  const alerts = ref<{ id: number; type: string; message: string }[]>([]); // array of { id, type, message }

  const addAlert = (message: string, type = "info", timeout = 3000) => {
    const id = Date.now() + Math.random();
    alerts.value.push({ id, message, type });

    if (timeout > 0) {
      setTimeout(() => {
        removeAlert(id);
      }, timeout);
    }
  };

  const removeAlert = (id: number) => {
    alerts.value = alerts.value.filter((alert) => alert.id !== id);
  };

  return { alerts, addAlert, removeAlert };
});
