import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import UserMenu from "@/components/base/UserMenu.vue";
import { createTestingPinia } from "@pinia/testing";
import { useUserStore } from "@/stores/user.store";
import { createRouter, createMemoryHistory } from "vue-router";
import { nextTick, h } from "vue";

describe("UserMenu.vue", () => {
  let router: ReturnType<typeof createRouter>;

  beforeEach(() => {
    router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: "/sign-in",
          name: "SignIn",
          component: { render: () => h("div") },
        },
      ],
    });
  });

  it("toggles dropdown on avatar click", async () => {
    const wrapper = mount(UserMenu, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              user: {
                user: { name: "Lucky Kumar", avatar: "" },
              },
            },
          }),
          router,
        ],
      },
    });

    const avatar = wrapper.findComponent({ name: "UserAvatar" });
    await avatar.trigger("click");
    await nextTick();

    expect(wrapper.html()).toContain("Settings");
  });

  it("closes dropdown when clicked outside", async () => {
    const wrapper = mount(UserMenu, {
      attachTo: document.body,
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              user: {
                user: { name: "Lucky Kumar", avatar: "" },
              },
            },
          }),
          router,
        ],
      },
    });

    await wrapper.findComponent({ name: "UserAvatar" }).trigger("click");
    await nextTick();
    expect(wrapper.html()).toContain("Settings");

    // Simulate clicking outside
    document.body.click();
    await nextTick();

    expect(wrapper.html()).not.toContain("Settings");
  });

  it("logs out and navigates on logout click", async () => {
    const wrapper = mount(UserMenu, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              user: {
                user: { name: "Lucky Kumar", avatar: "" },
              },
            },
          }),
          router,
        ],
      },
    });

    const userStore = useUserStore();
    await wrapper.findComponent({ name: "UserAvatar" }).trigger("click");
    await nextTick();

    const logoutBtn = wrapper.find("button");
    await logoutBtn.trigger("click");

    expect(userStore.logout).toHaveBeenCalled();
    expect(router.currentRoute.value.fullPath).toBe("/");
  });
});
