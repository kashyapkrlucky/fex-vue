import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseCheckbox from "@/components/base/BaseCheckbox.vue"; // adjust path if needed

describe("BaseCheckbox.vue", () => {
  it("renders the label when provided", () => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        modelValue: false,
        label: "Accept Terms",
      },
    });
    expect(wrapper.text()).toContain("Accept Terms");
  });

  it("renders the error message when provided", () => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        modelValue: false,
        error: "This field is required.",
      },
    });
    expect(wrapper.text()).toContain("This field is required.");
    expect(wrapper.find("p.text-red-500").exists()).toBe(true);
  });

  it("binds checked state correctly", async () => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        modelValue: true,
      },
    });
    const input = wrapper.find('input[type="checkbox"]');
    expect((input.element as HTMLInputElement).checked).toBe(true);
  });

  it("emits update:modelValue when checkbox is changed", async () => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        modelValue: false,
      },
    });
    const input = wrapper.find('input[type="checkbox"]');
    await input.setChecked();

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")![0]).toEqual([true]);
  });
});
