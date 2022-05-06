const express = require('express');
const { Engine } = require('@nguniversal/common/clover/server');
const { join } = require('path');
const { format } = require('url');

const PORT = 8080;
const DIST = join(__dirname, '../dask-board2');

const app = express();
app.set('views', DIST);

app.get(
  '*.*',
  express.static(DIST, {
    maxAge: '1y',
    fallthrough: false,
  }),
);

// Redirect to default locale
// app.get(/^(\/|\/favicon\.ico)$/, (req, res) => {
//   res.redirect(301, `/en-US${req.originalUrl}`);
// });

const ssr = new Engine();
app.get('*', (req: { protocol: any; path: any; query: any; headers: any; }, res: { send: (arg0: any) => any; }, next: (arg0: any) => any) => {
  ssr
    .render({
      publicPath: DIST,
      url: format({
        protocol: req.protocol,
        host: `localhost:${PORT}`,
        pathname: req.path,
        query: req.query,
      }),
      headers: req.headers,
    })
    .then((html: any) => res.send(html))
    .catch((err: any) => next(err));
});

app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
