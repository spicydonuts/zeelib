'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _fs=require('fs'),tinyRouter=function(a,b){var c,d;if('/favicon.ico'!==a)try{d='./'+a,console.log('loading '+d),c=(0,_fs.readFileSync)(d),b.write(c),b.end()}catch(a){console.warn('unable to load '+d),b.end()}};exports.default=tinyRouter;