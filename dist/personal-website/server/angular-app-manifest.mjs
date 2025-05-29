
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
    'index.csr.html': {size: 12369, hash: '4e6ef0ca59d65ce228764245285fce5c98d9c33cd475c4ea5eb28b8510bc0d7c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12496, hash: 'b87a1aab7d25c951b44d0d4502d417513b97587551895e4bb6b7b1a5424e0553', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 58859, hash: '1736ae255f3851fdadf85246d263f69b8980ca9a2a952020269f92a844975a28', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SDCDEH6E.css': {size: 663, hash: '3eB3LuSeJZU', text: () => import('./assets-chunks/styles-SDCDEH6E_css.mjs').then(m => m.default)}
  },
};
