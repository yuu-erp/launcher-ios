import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  server: {
    open: true,
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@core": path.resolve(__dirname, "src/core"),
      "@core/application": path.resolve(__dirname, "src/core/application"),
      "@core/domain": path.resolve(__dirname, "src/core/domain"),
      "@core/infrastructure": path.resolve(
        __dirname,
        "src/core/infrastructure"
      ),
      "@core/helpers": path.resolve(__dirname, "src/core/helpers"),
      "@core/exceptions": path.resolve(__dirname, "src/core/exceptions"),
    },
  },
});
