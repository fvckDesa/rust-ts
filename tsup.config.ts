import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
  dts: true,
  outDir: "build",
  format: ["esm", "cjs"],
  splitting: false,
  sourcemap: !options.watch,
  clean: true,
  minify: !options.watch,
}));
