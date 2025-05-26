// stores/loading.store.ts
import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", {
  state: () => ({
    loading: false,
  }),
  actions: {
    show() {
      this.loading = true;
    },
    hide() {
      this.loading = false;
    },
    toggle() {
      this.loading = !this.loading;
    },
  },
});
