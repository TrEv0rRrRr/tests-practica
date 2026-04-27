import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true, // para usar test, expect sin importar
    setupFiles: "./setupTest.ts",
  },
});
