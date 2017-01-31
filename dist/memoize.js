"use strict";Object.defineProperty(exports,"__esModule",{value:true});var memoize=function memoize(fn){var results=new Map;return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}var key=args.toString();if(!results.get(key)){results.set(key,fn.apply(undefined,args))}return results.get(key)}};exports.default=memoize;