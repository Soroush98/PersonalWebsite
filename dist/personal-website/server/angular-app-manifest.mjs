
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
    'index.csr.html': {size: 12301, hash: '504c367528e57a6dfb22f2d5ba05eb720fc48340805fa2a6bd7907a86f7fc393', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12428, hash: 'fce9c0983af555e0d4aee557f38db46b8e3d77a251a27c55983a6a170a047e18', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 57288, hash: '99e32c8bd9a303262428eae084d6ac48de3325e1b1daa4109d29d543e7e8ee79', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SDCDEH6E.css': {size: 663, hash: '3eB3LuSeJZU', text: () => import('./assets-chunks/styles-SDCDEH6E_css.mjs').then(m => m.default)}
  },
};
