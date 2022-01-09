const path = require(`path`);
const { ESLINT_MODES } = require("@craco/craco");

module.exports = {
  eslint: {
    mode: ESLINT_MODES.file,
  },
  webpack: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@actions": path.resolve(__dirname, "./src/store/actions"),
      '@namespaces': path.resolve(__dirname, "./src/core/namespaces"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
    },
  },
};
