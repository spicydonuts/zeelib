'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var stripSubdomain=function(a){return 2<a.split('').filter(function(a){return'.'===a}).length?a.replace(/^[^.]+\./g,''):a};exports.default=stripSubdomain;