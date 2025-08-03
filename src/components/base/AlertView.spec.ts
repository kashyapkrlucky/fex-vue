import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import AlertView from "@/components/base/AlertView.vue";
import { useAlertStore } from "@/stores/alert.store";
import { createPinia, setActivePinia } from "pinia";

describe("AlertView Component", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders all alert types with correct classes and icons", async () => {
    const alertStore = useAlertStore();
    alertStore.alerts = [
      { id: 1, type: "success", message: "Success alert" },
      { id: 2, type: "error", message: "Error alert" },
      { id: 3, type: "warning", message: "Warning alert" },
      { id: 4, type: "info", message: "Info alert" },
    ];

    const wrapper = mount(AlertView);

    expect(wrapper.text()).toContain("Success alert");
    expect(wrapper.text()).toContain("Error alert");
    expect(wrapper.text()).toContain("Warning alert");
    expect(wrapper.text()).toContain("Info alert");

    const alerts = wrapper.findAll('div[role="alert"]');

    expect(alerts.length).toBe(4);
  });

  it("removes an alert when clicked", async () => {
    const alertStore = useAlertStore();
    alertStore.alerts = [{ id: 1, type: "info", message: "Dismiss me" }];

    const wrapper = mount(AlertView);
    const alert = wrapper.find("div.cursor-pointer");
    await alert.trigger("click");

    expect(alertStore.alerts.length).toBe(0);
  });
});
