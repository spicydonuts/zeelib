"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var levenshteinDistance=function(c,a){var b=Math.min;if(0===c.length)return a.length;if(0===a.length)return c.length;var d,e,f,g,h,i;for(c.length>a.length&&(d=c,c=a,a=d),i=Array(c.length+1),e=0;e<=c.length;e++)i[e]=e;for(e=1;e<=a.length;e++){for(g=e,f=1;f<=c.length;f++)h=a[e-1]===c[f-1]?i[f-1]:b(i[f-1]+1,b(g+1,i[f]+1)),i[f-1]=g,g=h;i[c.length]=g}return i[c.length]};exports.default=levenshteinDistance;