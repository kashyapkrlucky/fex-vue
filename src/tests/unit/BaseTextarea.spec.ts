import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseTextarea from "@/components/base/BaseTextarea.vue"; // adjust path accordingly

describe("BaseTextarea.vue", () => {
  it("renders label and error text when passed", () => {
    const wrapper = mount(BaseTextarea, {
      props: {
        id: "1",
        modelValue: "",
        label: "Description",
        error: "Required field",
      },
    });

    expect(wrapper.text()).toContain("Description");
    expect(wrapper.text()).toContain("Required field");
  });

  it("emits update:modelValue on input", async () => {
    const wrapper = mount(BaseTextarea, {
      props: {
        id: "1",
        modelValue: "",
      },
    });

    const textarea = wrapper.find("textarea");
    await textarea.setValue("Hello World");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")![0]).toEqual(["Hello World"]);
  });

  it("uses rows prop correctly", () => {
    const wrapper = mount(BaseTextarea, {
      props: {
        id: "1",
        modelValue: "",
        rows: 10,
      },
    });

    const textarea = wrapper.find("textarea");
    expect(textarea.attributes("rows")).toBe("10");
  });

  it("uses default rows if none provided", () => {
    const wrapper = mount(BaseTextarea, {
      props: {
        id: "1",
        modelValue: "",
      },
    });

    const textarea = wrapper.find("textarea");
    expect(textarea.attributes("rows")).toBe("4");
  });

  it("sets placeholder attribute when provided", () => {
    const wrapper = mount(BaseTextarea, {
      props: {
        id: "1",
        modelValue: "",
        placeholder: "Enter text here",
      },
    });

    const textarea = wrapper.find("textarea");
    expect(textarea.attributes("placeholder")).toBe("Enter text here");
  });
});
