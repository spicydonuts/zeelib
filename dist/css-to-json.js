'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var cssToJson=function(a){return a.replace(/(\w*:)/g,'$1"').replace(/[;]/g,'";').replace(/(\'{2,})/g,'"').replace(/;/g,',').replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:/g,'"$2": ').replace(/,\s*\}/,'}').trim()};exports.default=cssToJson;