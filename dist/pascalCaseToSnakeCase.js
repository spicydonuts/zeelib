'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var pascalCaseToSnakeCase=function(a){return a.charAt(0).toLowerCase()+'_'+a.slice(1).replace(/[A-Z]/g,function(a){return'_'+a.toLowerCase()}).toLowerCase()};exports.default=pascalCaseToSnakeCase;