import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TitleWithIcon from "@/components/base/TitleWithIcon.vue";
import { HomeIcon } from "lucide-vue-next";

describe("TitleWithIcon.vue", () => {
  it("renders the title", () => {
    const wrapper = mount(TitleWithIcon, {
      props: {
        title: "Dashboard",
        icon: HomeIcon,
      },
    });

    expect(wrapper.text()).toContain("Dashboard");
  });

  it("renders the passed icon component", () => {
    const wrapper = mount(TitleWithIcon, {
      props: {
        title: "Dashboard",
        icon: HomeIcon,
      },
    });

    const icon = wrapper.findComponent(HomeIcon);
    expect(icon.exists()).toBe(true);
  });
});
