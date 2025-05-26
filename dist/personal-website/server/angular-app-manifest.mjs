
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
    'index.csr.html': {size: 12070, hash: 'dbb0f09fa97ee53d27eb7b9f9252989c3cce72df890094bdf4f43db9a4e3e32f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12197, hash: '90aa9594b5ef0675d3b68ab572b4d42ae71ca4e7666114a5256bac681ae9d781', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 58693, hash: '249b1f6b459ddcac3f8cdd8e5e198445ddc6ff06ad1c98a4d400f3d1c91af7ec', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SDCDEH6E.css': {size: 663, hash: '3eB3LuSeJZU', text: () => import('./assets-chunks/styles-SDCDEH6E_css.mjs').then(m => m.default)}
  },
};
