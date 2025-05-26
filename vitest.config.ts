// import { fileURLToPath } from "node:url";
import { mergeConfig, defineConfig } from "vitest/config"; // configDefaults
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      // environment: "jsdom",
      // exclude: [...configDefaults.exclude, "e2e/**"],
      // root: fileURLToPath(new URL("./", import.meta.url)),
      globals: true,
      environment: "jsdom",
      coverage: {
        provider: "v8", // or 'c8'
        reporter: ["text", "json", "html"], // coverage output formats
        all: true, // include files with no tests too
        include: ["src/**/*.{ts,vue}"],
        exclude: ["**/*.d.ts", "src/main.ts", "src/router/**", "src/stores/**"], // tune as needed
      },
    },
  })
);
