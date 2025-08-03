import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import UserAvatar from "@/components/base/UserAvatar.vue";

describe("UserAvatar.vue", () => {
  const baseUser = {
    _id: "1",
    name: "Lucky",
    avatar: "",
    email: "",
  };

  it("renders avatar image if user.avatar is present", () => {
    const wrapper = mount(UserAvatar, {
      props: {
        _id: "1",
        user: {
          ...baseUser,
          avatar: "https://example.com/avatar.png",
        },
        size: "lg",
      },
    });

    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe("https://example.com/avatar.png");
  });

  it("renders first letter of name if avatar is missing", () => {
    const wrapper = mount(UserAvatar, {
      props: {
        user: {
          _id: "1",
          name: "Lucky",
          avatar: "",
          email: "",
        },
        size: "md",
      },
    });

    const span = wrapper.find("span");
    expect(span.exists()).toBe(true);
    expect(span.text()).toBe("L");
  });

  it("applies correct size class", () => {
    const wrapper = mount(UserAvatar, {
      props: {
        user: baseUser,
        size: "xl",
      },
    });

    expect(wrapper.classes()).toContain("w-12");
    expect(wrapper.classes()).toContain("h-12");
  });

  it("renders nothing if user or user.name is missing", () => {
    const wrapper = mount(UserAvatar, {
      props: {
        user: null,
      },
    });

    expect(wrapper.html()).toBe("<!--v-if-->");
  });
});
