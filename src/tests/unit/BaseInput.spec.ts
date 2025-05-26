import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseInput from "@/components/base/BaseInput.vue"; // Adjust the path as needed

describe("BaseInput.vue", () => {
  it("renders label when provided", () => {
    const wrapper = mount(BaseInput, {
      props: {
        id: "email",
        modelValue: "",
        label: "Email",
      },
    });
    expect(wrapper.text()).toContain("Email");
  });

  it("shows placeholder when provided", () => {
    const wrapper = mount(BaseInput, {
      props: {
        id: "username",
        modelValue: "",
        placeholder: "Enter username",
      },
    });
    const input = wrapper.find("input");
    expect(input.attributes("placeholder")).toBe("Enter username");
  });

  it("renders the error message when provided", () => {
    const wrapper = mount(BaseInput, {
      props: {
        id: "name",
        modelValue: "",
        error: "This field is required.",
      },
    });
    expect(wrapper.text()).toContain("This field is required.");
    expect(wrapper.find("p.text-red-500").exists()).toBe(true);
  });

  it("binds modelValue correctly", () => {
    const wrapper = mount(BaseInput, {
      props: {
        id: "phone",
        modelValue: "1234567890",
      },
    });
    const input = wrapper.find("input");
    expect((input.element as HTMLInputElement).value).toBe("1234567890");
  });

  it("emits update:modelValue on input", async () => {
    const wrapper = mount(BaseInput, {
      props: {
        id: "username",
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    await input.setValue("lucky");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")![0]).toEqual(["lucky"]);
  });
});
