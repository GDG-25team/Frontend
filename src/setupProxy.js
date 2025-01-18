const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.REACT_APP_API_URL,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api'
      }
    })
  );

  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://192.168.56.196:8080',
      changeOrigin: true,
    })
  );

  // 필요한 만큼 프록시 추가 가능
}; 