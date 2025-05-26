import { describe, it, expect, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import BaseModal from "@/components/base/BaseModal.vue";
import { nextTick } from "vue";

describe("BaseModal.vue", () => {
  let wrapper: ReturnType<typeof mount>;

  afterEach(() => {
    if (wrapper) wrapper.unmount();
  });

  it("renders modal when modelValue is true", async () => {
    wrapper = mount(BaseModal, {
      props: { modelValue: true },
      slots: { default: "Modal Content" },
      attachTo: document.body, // mount in real DOM
    });

    // The content is teleported to body, so we look there
    expect(document.body.textContent).toContain("Modal Content");
  });

  it("does not render modal when modelValue is false", () => {
    wrapper = mount(BaseModal, {
      props: { modelValue: false },
      attachTo: document.body,
    });

    // Modal content should not be in the document body
    expect(document.body.textContent).not.toContain("Modal Content");
  });

  it("emits update:modelValue=false on backdrop click", async () => {
    wrapper = mount(BaseModal, {
      props: { modelValue: true },
      slots: { default: "Modal Content" },
      attachTo: document.body,
    });

    // find backdrop in document body
    const backdrop = document.querySelector(".fixed.inset-0");
    expect(backdrop).toBeTruthy();

    // simulate click on backdrop
    backdrop?.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    // Wait next tick or flushPromises if needed
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")[0]).toEqual([false]);
  });

  it("emits update:modelValue=false on Escape key press", async () => {
    const wrapper = mount(BaseModal, {
      props: {
        modelValue: true,
      },
      attachTo: document.body,
    });

    const event = new KeyboardEvent("keydown", { key: "Escape" });
    document.dispatchEvent(event);
    await nextTick();

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")![0]).toEqual([false]);
    wrapper.unmount();
  });
});
