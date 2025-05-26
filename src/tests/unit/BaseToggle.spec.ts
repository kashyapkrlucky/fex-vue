import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseToggle from "@/components/base/BaseToggle.vue"; // adjust path

describe("BaseToggle.vue", () => {
  it("renders label when passed", () => {
    const wrapper = mount(BaseToggle, {
      props: {
        modelValue: false,
        label: "Enable feature",
      },
    });

    expect(wrapper.text()).toContain("Enable feature");
  });

  it("emits update:modelValue with toggled value when clicked", async () => {
    const wrapper = mount(BaseToggle, {
      props: { modelValue: false },
    });

    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")![0]).toEqual([true]);

    // Click again toggles back
    await wrapper.setProps({ modelValue: true });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("update:modelValue")![1]).toEqual([false]);
  });

  it("button has correct classes based on modelValue", async () => {
    const wrapper = mount(BaseToggle, { props: { modelValue: false } });

    expect(wrapper.find("button").classes()).toContain("bg-gray-300");

    await wrapper.setProps({ modelValue: true });

    expect(wrapper.find("button").classes()).toContain("bg-primary");
  });
});
