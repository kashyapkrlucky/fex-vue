import axiosInstance from "@/lib/axios";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { useUserStore } from "@/stores/user.store";

// Mock useUserStore globally
vi.mock("@/stores/user.store", () => ({
  useUserStore: vi.fn(),
}));

const mockLogout = vi.fn();

beforeEach(() => {
  // Reset mocks
  vi.resetAllMocks();
  localStorage.clear();

  // Set up fake user store
  (useUserStore as unknown as vi.Mock).mockReturnValue({
    logout: mockLogout,
  });

  // Prevent real navigation
  delete (window as any).location;
  (window as any).location = { href: "" };
});

describe("Axios Interceptors", () => {
  it("adds Authorization header when token exists", async () => {
    localStorage.setItem("token", "test-token");

    // Mock adapter to intercept config
    const response = await axiosInstance.get("/test", {
      adapter: (config) =>
        Promise.resolve({
          data: {},
          status: 200,
          statusText: "OK",
          headers: {},
          config,
        }),
    });

    expect(response.config.headers.Authorization).toBe("Bearer test-token");
  });

  it("calls logout and redirects on 401 (non-sign-in)", async () => {
    const mockError = {
      config: { url: "/api/protected" },
      response: { status: 401 },
    };

    try {
      await axiosInstance.interceptors.response.handlers[0].rejected(mockError);
    } catch (e) {
      // Expected rejection
    }

    expect(mockLogout).toHaveBeenCalled();
    expect(window.location.href).toBe("/sign-in");
  });

  it("does not logout on 401 from /user/sign-in", async () => {
    const mockError = {
      config: { url: "/user/sign-in" },
      response: { status: 401 },
    };

    try {
      await axiosInstance.interceptors.response.handlers[0].rejected(mockError);
    } catch (e) {
      // Expected rejection
    }

    expect(mockLogout).not.toHaveBeenCalled();
    expect(window.location.href).not.toBe("/sign-in");
  });
});
