const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://pl-recipes.herokuapp.com',
            changeOrigin: true,
        })
    );
};
