'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var formatMs=function(a){var b=Math.floor,c=3.6e6,d=6e4,e=b(a/c),f=b((a-e*c)/d),g=Math.round((a-e*c-f*d)/1e3);e&&10>f&&(f='0'+f),10>g&&(g='0'+g);var h=f+':'+g;return e&&(h=e+':'+h),h};exports.default=formatMs;