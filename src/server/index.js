const express = require('express');
const path    = require('path');
const app     = express();

console.log('** Enviorement:', process.env.NODE_ENV, ' ***');

if (process.env.NODE_ENV !== 'production') {
  // Enviorement: development
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack           = require('webpack');
  const webpackConfig     = require(path.join(__dirname, '../../webpack.config.js'));
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  // Enviorement: production
  app.use(express.static('dist/client/'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/client/index.html'));
  });
}

app.listen(3300, () => console.log('\n*** Server listening on port 3300 ***'));
