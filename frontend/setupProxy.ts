import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://eth-goerli.g.alchemy.com",
      changeOrigin: true,
    })
  );
};
