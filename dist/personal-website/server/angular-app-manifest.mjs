
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
    'index.csr.html': {size: 12064, hash: 'decdde1efc91dca6328217b3927775fc7862dc09e27268113f61e2753b5b0552', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12191, hash: 'de4abeb1ef1fa9a862011c79bcefb935949ff2c8d779c8e8a771288365d48fc5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 58557, hash: 'cd1c725f6bb567252cdc571aa19920b9f5f3d9060e8f3dde6ffa2b7d505cbcfb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SDCDEH6E.css': {size: 663, hash: '3eB3LuSeJZU', text: () => import('./assets-chunks/styles-SDCDEH6E_css.mjs').then(m => m.default)}
  },
};
