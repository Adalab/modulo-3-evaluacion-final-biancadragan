// jest.setup.js
require('@testing-library/jest-dom');

if (typeof TextEncoder === 'undefined') {
  global.TextEncoder = require('util').TextEncoder;
}

  