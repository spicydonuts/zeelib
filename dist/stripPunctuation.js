'use strict';Object.defineProperty(exports,'__esModule',{value:true});var stripPunctuation=function stripPunctuation(str){return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').replace(/\s{2,}/g,' ')};exports.default=stripPunctuation;