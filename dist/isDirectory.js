'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _fs=require('fs'),isDirectory=function(a){try{return(0,_fs.statSync)(a).isDirectory()}catch(a){return!1}};exports.default=isDirectory;