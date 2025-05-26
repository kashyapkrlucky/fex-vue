import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseButton from "@/components/base/BaseButton.vue";

describe("BaseButton.vue", () => {
  it("renders default slot content", () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: "Click me",
      },
    });
    expect(wrapper.text()).toBe("Click me");
  });

  it("applies the correct type attribute", () => {
    const wrapper = mount(BaseButton, {
      props: { type: "submit" },
    });
    expect(wrapper.attributes("type")).toBe("submit");
  });

  it('defaults to type="button"', () => {
    const wrapper = mount(BaseButton);
    expect(wrapper.attributes("type")).toBe("button");
  });

  it("applies primary variant class", () => {
    const wrapper = mount(BaseButton, {
      props: { variant: "primary" },
    });
    expect(wrapper.classes()).toContain("bg-primary");
  });

  it("applies secondary variant class", () => {
    const wrapper = mount(BaseButton, {
      props: { variant: "secondary" },
    });
    expect(wrapper.classes()).toContain("bg-gray-200");
  });

  it("applies danger variant class", () => {
    const wrapper = mount(BaseButton, {
      props: { variant: "danger" },
    });
    expect(wrapper.classes()).toContain("bg-red-500");
  });

  it("is disabled when disabled=true", () => {
    const wrapper = mount(BaseButton, {
      props: { disabled: true },
    });
    expect(wrapper.attributes("disabled")).toBeDefined();
    expect(wrapper.classes()).toContain("opacity-50");
    expect(wrapper.classes()).toContain("cursor-not-allowed");
  });
});
