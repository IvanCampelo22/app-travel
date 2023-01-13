// import '@inrupt/jest-jsdom-polyfills';

/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */

// TextEncoder / TextDecoder APIs are used by Jose, but are not provided by
// jsdom, all node versions supported provide these via the util module
if (
  typeof globalThis.TextEncoder === 'undefined' ||
  typeof globalThis.TextDecoder === 'undefined'
) {
  const utils = require('util');
  globalThis.TextEncoder = utils.TextEncoder;
  globalThis.TextDecoder = utils.TextDecoder;
}

// // Node.js doesn't support Blob or File, so we're polyfilling those with
// // https://github.com/web-std/io
// if (typeof globalThis.Blob === 'undefined') {
//   const stdBlob = require('@web-std/blob');
//   globalThis.Blob = stdBlob.Blob;
// }

// if (typeof globalThis.File === 'undefined') {
//   const stdFile = require('@web-std/file');
//   globalThis.File = stdFile.File;
// }

export {};
