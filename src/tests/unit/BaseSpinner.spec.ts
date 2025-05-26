import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";
import BaseSpinner from "@/components/base/BaseSpinner.vue";
import { useLoadingStore } from "@/stores/loading.store";

describe("BaseSpinner.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("does not render spinner when loading is false", () => {
    const loadingStore = useLoadingStore();
    loadingStore.loading = false;

    const wrapper = mount(BaseSpinner);

    expect(wrapper.html()).toBe("<!--v-if-->");
  });

  it("renders spinner when loading is true", () => {
    const loadingStore = useLoadingStore();
    loadingStore.loading = true;

    const wrapper = mount(BaseSpinner);

    // The spinner container div
    const spinnerDiv = wrapper.find("div.w-12.h-12");
    expect(spinnerDiv.exists()).toBe(true);
  });
});
