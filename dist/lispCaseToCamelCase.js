"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var lispCaseToCamelCase=function(a){return a.toLowerCase().replace(/-[a-z]/g,function(a){return a.slice(1).toUpperCase()})};exports.default=lispCaseToCamelCase;