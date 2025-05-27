
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12064, hash: 'bc64dc4f78184825502d76f289fa3e3f31054843aaf837c2559113dc2a75f3d7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12191, hash: '519afc901de7ec43fb5b6de6a14b4b2c9bf0a9dd0d461e5e86c5c8531fef9ad7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 58687, hash: 'a538faa6f68425565daccdc20cbca2b499032aa1b9fec0497acece1d3154742b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SDCDEH6E.css': {size: 663, hash: '3eB3LuSeJZU', text: () => import('./assets-chunks/styles-SDCDEH6E_css.mjs').then(m => m.default)}
  },
};
