'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var normalizeText=function(a){var b=a.toLowerCase().match(/[a-z0-9]([a-z0-9.]*[a-z0-9])?/ig);return b?b.join(' '):''};exports.default=normalizeText;