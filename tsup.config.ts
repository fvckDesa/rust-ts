import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/index.ts", "src/option/index.ts", "src/result/index.ts"],
  dts: true,
  outDir: "build",
  format: ["esm", "cjs"],
  splitting: false,
  sourcemap: !options.watch,
  clean: true,
  minify: !options.watch,
}));
