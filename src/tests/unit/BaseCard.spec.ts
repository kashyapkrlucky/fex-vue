import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseCard from "@/components/base/BaseCard.vue"; // adjust path if needed

describe("BaseCard.vue", () => {
  it("renders slot content", () => {
    const wrapper = mount(BaseCard, {
      slots: {
        default: "<p>Hello</p>",
      },
    });
    expect(wrapper.html()).toContain("<p>Hello</p>");
  });

  it("applies default classes including padding and shadow", () => {
    const wrapper = mount(BaseCard);
    const classes = wrapper.classes();
    expect(classes).toContain("p-4");
    expect(classes).toContain("shadow-sm");
    expect(classes).toContain("rounded-xl");
    expect(classes).toContain("bg-white");
  });

  it("does not apply padding when noPadding is true", () => {
    const wrapper = mount(BaseCard, {
      props: { noPadding: true },
    });
    expect(wrapper.classes()).not.toContain("p-4");
  });

  it("does not apply shadow when noShadow is true", () => {
    const wrapper = mount(BaseCard, {
      props: { noShadow: true },
    });
    expect(wrapper.classes()).not.toContain("shadow-sm");
  });

  it("removes both padding and shadow with both props", () => {
    const wrapper = mount(BaseCard, {
      props: { noPadding: true, noShadow: true },
    });
    const classes = wrapper.classes();
    expect(classes).not.toContain("p-4");
    expect(classes).not.toContain("shadow-sm");
  });
});
