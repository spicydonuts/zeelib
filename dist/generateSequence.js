'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var generateSequence=function(a,b){return Array(a).fill().map(function(c,d){return'function'==typeof b?b(a,d):b})};exports.default=generateSequence;