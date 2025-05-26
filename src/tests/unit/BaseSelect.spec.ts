import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseSelect from "@/components/base/BaseSelect.vue"; // adjust path

describe("BaseSelect.vue", () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
  ];

  it("renders label and placeholder", () => {
    const wrapper = mount(BaseSelect, {
      props: {
        label: "Test Label",
        options,
        placeholder: "Select an option",
        modelValue: "",
      },
    });

    expect(wrapper.text()).toContain("Test Label");
    expect(wrapper.find("option").text()).toBe("Select an option");
  });

  it("renders all options", () => {
    const wrapper = mount(BaseSelect, {
      props: { options, modelValue: "" },
    });
    const opts = wrapper.findAll("option");
    // includes placeholder + 2 options = 3
    expect(opts.length).toBe(2); // if no placeholder
  });

  it("emits update:modelValue on change", async () => {
    const wrapper = mount(BaseSelect, {
      props: { options, modelValue: "" },
    });
    const select = wrapper.find("select");
    await select.setValue("2");
    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")[0]).toEqual(["2"]);
  });

  it("shows error message", () => {
    const wrapper = mount(BaseSelect, {
      props: { options, modelValue: "", error: "Required" },
    });
    expect(wrapper.text()).toContain("Required");
  });
});
