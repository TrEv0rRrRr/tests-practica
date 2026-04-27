import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // para usar test, expect sin importar
  },
});
