var QnAWidget=function(t){function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var e={};return r.m=t,r.c=e,r.i=function(t){return t},r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="dist",r(r.s=11)}([function(t,r){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDEyIDciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPjU2OTZCRTQyLUI0MzktNEZEMS05MDIyLTkzNTI0RDVDQUZENzwvdGl0bGU+PHBhdGggZD0iTTYgMGwtLjYyNC41MzRMMCA1LjE0MiAxLjI0OCA2LjYgNiAyLjUyNiAxMC43NTIgNi42IDEyIDUuMTQyIDYuNjI0LjUzNHoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="},function(t,r,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function t(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(r,e,n){return e&&t(r.prototype,e),n&&t(r,n),r}}(),u=e(10),s=n(u),a=(e(8),function(){function t(r){var e=this,n=r.token;i(this,t),this.handleError=this.handleError.bind(this),"string"!=typeof n&&this.handleError(new Error("Please provide { token }")),this.loadData(n).then(function(t){var r=t.success,n=t.data;if(!r)throw new Error("call to ask api did not success");n.total&&e.init(n)}).catch(this.handleError)}return o(t,[{key:"getTpl",value:function(){return function(t){var r=t.link,e=t.total;return'<div class="pending-questions">\n                <style>'+s.default.toString()+'</style>\n                <div class="pending-questions__body">\n                    <p class="pending-questions__text">You have '+(e||0)+' questions from customers</p>\n                    <a href="'+r+'" target="_blank" class="pending-questions__button">Answer pending questions</a>\n                </div>\n                <div class="pending-questions__toggler"></div>\n            </div>'}}},{key:"render",value:function(t){var r=document.createElement("div");return r.innerHTML=this.getTpl()(t),r.firstChild}},{key:"loadData",value:function(r){return fetch(t.url+"?token="+r).then(function(t){return t.json()})}},{key:"init",value:function(t){var r=this;this.$root=this.render(t),document.body.appendChild(this.$root),this.bindEvents(),setTimeout(function(){r.addMod("expanded")},200)}},{key:"bindEvents",value:function(){var t=this;this.$root.addEventListener("click",function(r){t.hasMod("expanded")||t.addMod("expanded")}),this.$root.querySelector(".pending-questions__toggler").addEventListener("click",function(r){r.stopPropagation(),t.hasMod("expanded")&&t.removeMod("expanded")})}},{key:"addMod",value:function(t){var r=this.getBlockName()+"_"+t;this.$root.classList.add(r)}},{key:"removeMod",value:function(t){var r=this.getBlockName()+"_"+t;this.$root.classList.remove(r)}},{key:"hasMod",value:function(t){var r=this.getBlockName()+"_"+t;return this.$root.classList.contains(r)}},{key:"handleError",value:function(t){console.log(t)}},{key:"getBlockName",value:function(){return"pending-questions"}}]),t}());a.url="https://alice-pdp371.vtdc.lzd.co/ajax/ask/sellerPendingData/",r.default=a},function(t,r,e){"use strict";function n(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[r-2]?2:"="===t[r-1]?1:0}function i(t){return 3*t.length/4-n(t)}function o(t){var r,e,i,o,u,s,a=t.length;u=n(t),s=new c(3*a/4-u),i=u>0?a-4:a;var f=0;for(r=0,e=0;r<i;r+=4,e+=3)o=h[t.charCodeAt(r)]<<18|h[t.charCodeAt(r+1)]<<12|h[t.charCodeAt(r+2)]<<6|h[t.charCodeAt(r+3)],s[f++]=o>>16&255,s[f++]=o>>8&255,s[f++]=255&o;return 2===u?(o=h[t.charCodeAt(r)]<<2|h[t.charCodeAt(r+1)]>>4,s[f++]=255&o):1===u&&(o=h[t.charCodeAt(r)]<<10|h[t.charCodeAt(r+1)]<<4|h[t.charCodeAt(r+2)]>>2,s[f++]=o>>8&255,s[f++]=255&o),s}function u(t){return f[t>>18&63]+f[t>>12&63]+f[t>>6&63]+f[63&t]}function s(t,r,e){for(var n,i=[],o=r;o<e;o+=3)n=(t[o]<<16)+(t[o+1]<<8)+t[o+2],i.push(u(n));return i.join("")}function a(t){for(var r,e=t.length,n=e%3,i="",o=[],u=16383,a=0,h=e-n;a<h;a+=u)o.push(s(t,a,a+u>h?h:a+u));return 1===n?(r=t[e-1],i+=f[r>>2],i+=f[r<<4&63],i+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],i+=f[r>>10],i+=f[r>>4&63],i+=f[r<<2&63],i+="="),o.push(i),o.join("")}r.byteLength=i,r.toByteArray=o,r.fromByteArray=a;for(var f=[],h=[],c="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,g=l.length;p<g;++p)f[p]=l[p],h[l.charCodeAt(p)]=p;h["-".charCodeAt(0)]=62,h["_".charCodeAt(0)]=63},function(t,r,e){"use strict";(function(t){function n(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}function i(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(t,r){if(i()<r)throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r),t.__proto__=u.prototype):(null===t&&(t=new u(r)),t.length=r),t}function u(t,r,e){if(!(u.TYPED_ARRAY_SUPPORT||this instanceof u))return new u(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return h(this,t)}return s(this,t,r,e)}function s(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?p(t,r,e,n):"string"==typeof r?c(t,r,e):g(t,r)}function a(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function f(t,r,e,n){return a(r),r<=0?o(t,r):void 0!==e?"string"==typeof n?o(t,r).fill(e,n):o(t,r).fill(e):o(t,r)}function h(t,r){if(a(r),t=o(t,r<0?0:0|d(r)),!u.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function c(t,r,e){if("string"==typeof e&&""!==e||(e="utf8"),!u.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|v(r,e);t=o(t,n);var i=t.write(r,e);return i!==n&&(t=t.slice(0,i)),t}function l(t,r){var e=r.length<0?0:0|d(r.length);t=o(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function p(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");return r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n),u.TYPED_ARRAY_SUPPORT?(t=r,t.__proto__=u.prototype):t=l(t,r),t}function g(t,r){if(u.isBuffer(r)){var e=0|d(r.length);return t=o(t,e),0===t.length?t:(r.copy(t,0,0,e),t)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||V(r.length)?o(t,0):l(t,r);if("Buffer"===r.type&&K(r.data))return l(t,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function d(t){if(t>=i())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i().toString(16)+" bytes");return 0|t}function y(t){return+t!=t&&(t=0),u.alloc(+t)}function v(t,r){if(u.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return H(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return J(t).length;default:if(n)return H(t).length;r=(""+r).toLowerCase(),n=!0}}function w(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if(e>>>=0,r>>>=0,e<=r)return"";for(t||(t="utf8");;)switch(t){case"hex":return k(this,r,e);case"utf8":case"utf-8":return U(this,r,e);case"ascii":return M(this,r,e);case"latin1":case"binary":return I(this,r,e);case"base64":return B(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function b(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function _(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=u.from(r,n)),u.isBuffer(r))return 0===r.length?-1:E(t,r,e,n,i);if("number"==typeof r)return r&=255,u.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):E(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function E(t,r,e,n,i){function o(t,r){return 1===u?t[r]:t.readUInt16BE(r*u)}var u=1,s=t.length,a=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;u=2,s/=2,a/=2,e/=2}var f;if(i){var h=-1;for(f=e;f<s;f++)if(o(t,f)===o(r,h===-1?0:f-h)){if(h===-1&&(h=f),f-h+1===a)return h*u}else h!==-1&&(f-=f-h),h=-1}else for(e+a>s&&(e=s-a),f=e;f>=0;f--){for(var c=!0,l=0;l<a;l++)if(o(t,f+l)!==o(r,l)){c=!1;break}if(c)return f}return-1}function m(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var u=0;u<n;++u){var s=parseInt(r.substr(2*u,2),16);if(isNaN(s))return u;t[e+u]=s}return u}function A(t,r,e,n){return Q(H(r,t.length-e),t,e,n)}function R(t,r,e,n){return Q(F(r),t,e,n)}function x(t,r,e,n){return R(t,r,e,n)}function P(t,r,e,n){return Q(J(r),t,e,n)}function T(t,r,e,n){return Q($(r,t.length-e),t,e,n)}function B(t,r,e){return 0===r&&e===t.length?X.fromByteArray(t):X.fromByteArray(t.slice(r,e))}function U(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o=t[i],u=null,s=o>239?4:o>223?3:o>191?2:1;if(i+s<=e){var a,f,h,c;switch(s){case 1:o<128&&(u=o);break;case 2:a=t[i+1],128==(192&a)&&(c=(31&o)<<6|63&a)>127&&(u=c);break;case 3:a=t[i+1],f=t[i+2],128==(192&a)&&128==(192&f)&&(c=(15&o)<<12|(63&a)<<6|63&f)>2047&&(c<55296||c>57343)&&(u=c);break;case 4:a=t[i+1],f=t[i+2],h=t[i+3],128==(192&a)&&128==(192&f)&&128==(192&h)&&(c=(15&o)<<18|(63&a)<<12|(63&f)<<6|63&h)>65535&&c<1114112&&(u=c)}}null===u?(u=65533,s=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),i+=s}return S(n)}function S(t){var r=t.length;if(r<=tt)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=tt));return e}function M(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function I(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function k(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=G(t[o]);return i}function L(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function Y(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function C(t,r,e,n,i,o){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function D(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function O(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function N(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function j(t,r,e,n,i){return i||N(t,r,e,4,3.4028234663852886e38,-3.4028234663852886e38),W.write(t,r,e,n,23,4),e+4}function q(t,r,e,n,i){return i||N(t,r,e,8,1.7976931348623157e308,-1.7976931348623157e308),W.write(t,r,e,n,52,8),e+8}function z(t){if(t=Z(t).replace(rt,""),t.length<2)return"";for(;t.length%4!=0;)t+="=";return t}function Z(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function G(t){return t<16?"0"+t.toString(16):t.toString(16)}function H(t,r){r=r||1/0;for(var e,n=t.length,i=null,o=[],u=0;u<n;++u){if((e=t.charCodeAt(u))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(u+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function F(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}function $(t,r){for(var e,n,i,o=[],u=0;u<t.length&&!((r-=2)<0);++u)e=t.charCodeAt(u),n=e>>8,i=e%256,o.push(i),o.push(n);return o}function J(t){return X.toByteArray(z(t))}function Q(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function V(t){return t!==t}var X=e(2),W=e(5),K=e(6);r.Buffer=u,r.SlowBuffer=y,r.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:n(),r.kMaxLength=i(),u.poolSize=8192,u._augment=function(t){return t.__proto__=u.prototype,t},u.from=function(t,r,e){return s(null,t,r,e)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(t,r,e){return f(null,t,r,e)},u.allocUnsafe=function(t){return h(null,t)},u.allocUnsafeSlow=function(t){return h(null,t)},u.isBuffer=function(t){return!(null==t||!t._isBuffer)},u.compare=function(t,r){if(!u.isBuffer(t)||!u.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,r){if(!K(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=u.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var o=t[e];if(!u.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},u.byteLength=v,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)b(this,r,r+1);return this},u.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)b(this,r,r+3),b(this,r+1,r+2);return this},u.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)b(this,r,r+7),b(this,r+1,r+6),b(this,r+2,r+5),b(this,r+3,r+4);return this},u.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?U(this,0,t):w.apply(this,arguments)},u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},u.prototype.compare=function(t,r,e,n,i){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(r>>>=0,e>>>=0,n>>>=0,i>>>=0,this===t)return 0;for(var o=i-n,s=e-r,a=Math.min(o,s),f=this.slice(n,i),h=t.slice(r,e),c=0;c<a;++c)if(f[c]!==h[c]){o=f[c],s=h[c];break}return o<s?-1:s<o?1:0},u.prototype.includes=function(t,r,e){return this.indexOf(t,r,e)!==-1},u.prototype.indexOf=function(t,r,e){return _(this,t,r,e,!0)},u.prototype.lastIndexOf=function(t,r,e){return _(this,t,r,e,!1)},u.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return m(this,t,r,e);case"utf8":case"utf-8":return A(this,t,r,e);case"ascii":return R(this,t,r,e);case"latin1":case"binary":return x(this,t,r,e);case"base64":return P(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var tt=4096;u.prototype.slice=function(t,r){var e=this.length;t=~~t,r=void 0===r?e:~~r,t<0?(t+=e)<0&&(t=0):t>e&&(t=e),r<0?(r+=e)<0&&(r=0):r>e&&(r=e),r<t&&(r=t);var n;if(u.TYPED_ARRAY_SUPPORT)n=this.subarray(t,r),n.__proto__=u.prototype;else{var i=r-t;n=new u(i,void 0);for(var o=0;o<i;++o)n[o]=this[o+t]}return n},u.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||Y(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},u.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||Y(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},u.prototype.readUInt8=function(t,r){return r||Y(t,1,this.length),this[t]},u.prototype.readUInt16LE=function(t,r){return r||Y(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUInt16BE=function(t,r){return r||Y(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUInt32LE=function(t,r){return r||Y(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUInt32BE=function(t,r){return r||Y(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||Y(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*r)),n},u.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||Y(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},u.prototype.readInt8=function(t,r){return r||Y(t,1,this.length),128&this[t]?(255-this[t]+1)*-1:this[t]},u.prototype.readInt16LE=function(t,r){r||Y(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},u.prototype.readInt16BE=function(t,r){r||Y(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},u.prototype.readInt32LE=function(t,r){return r||Y(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,r){return r||Y(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readFloatLE=function(t,r){return r||Y(t,4,this.length),W.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,r){return r||Y(t,4,this.length),W.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,r){return r||Y(t,8,this.length),W.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,r){return r||Y(t,8,this.length),W.read(this,t,!1,52,8)},u.prototype.writeUIntLE=function(t,r,e,n){if(t=+t,r|=0,e|=0,!n){C(this,t,r,e,Math.pow(2,8*e)-1,0)}var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},u.prototype.writeUIntBE=function(t,r,e,n){if(t=+t,r|=0,e|=0,!n){C(this,t,r,e,Math.pow(2,8*e)-1,0)}var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},u.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||C(this,t,r,1,255,0),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},u.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||C(this,t,r,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):D(this,t,r,!0),r+2},u.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||C(this,t,r,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):D(this,t,r,!1),r+2},u.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||C(this,t,r,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):O(this,t,r,!0),r+4},u.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||C(this,t,r,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):O(this,t,r,!1),r+4},u.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);C(this,t,r,e,i-1,-i)}var o=0,u=1,s=0;for(this[r]=255&t;++o<e&&(u*=256);)t<0&&0===s&&0!==this[r+o-1]&&(s=1),this[r+o]=(t/u>>0)-s&255;return r+e},u.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);C(this,t,r,e,i-1,-i)}var o=e-1,u=1,s=0;for(this[r+o]=255&t;--o>=0&&(u*=256);)t<0&&0===s&&0!==this[r+o+1]&&(s=1),this[r+o]=(t/u>>0)-s&255;return r+e},u.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||C(this,t,r,1,127,-128),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},u.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||C(this,t,r,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):D(this,t,r,!0),r+2},u.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||C(this,t,r,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):D(this,t,r,!1),r+2},u.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||C(this,t,r,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):O(this,t,r,!0),r+4},u.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||C(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),u.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):O(this,t,r,!1),r+4},u.prototype.writeFloatLE=function(t,r,e){return j(this,t,r,!0,e)},u.prototype.writeFloatBE=function(t,r,e){return j(this,t,r,!1,e)},u.prototype.writeDoubleLE=function(t,r,e){return q(this,t,r,!0,e)},u.prototype.writeDoubleBE=function(t,r,e){return q(this,t,r,!1,e)},u.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!u.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},u.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!u.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0);var o;if("number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var s=u.isBuffer(t)?t:H(new u(t,n).toString()),a=s.length;for(o=0;o<e-r;++o)this[o+r]=s[o%a]}return this};var rt=/[^+\/0-9A-Za-z-_]/g}).call(r,e(7))},function(t,r,e){"use strict";(function(r){function e(t,r){var e=t[1]||"",i=t[3];if(!i)return e;if(r){var o=n(i),u=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[e].concat(u).concat([o]).join("\n")}return[e].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+new r(JSON.stringify(t)).toString("base64")+" */"}t.exports=function(t){var r=[];return r.toString=function(){return this.map(function(r){var n=e(r,t);return r[2]?"@media "+r[2]+"{"+n+"}":n}).join("")},r.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var u=t[i];"number"==typeof u[0]&&n[u[0]]||(e&&!u[2]?u[2]=e:e&&(u[2]="("+u[2]+") and ("+e+")"),r.push(u))}},r}}).call(r,e(3).Buffer)},function(t,r,e){"use strict";r.read=function(t,r,e,n,i){var o,u,s=8*i-n-1,a=(1<<s)-1,f=a>>1,h=-7,c=e?i-1:0,l=e?-1:1,p=t[r+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=s;h>0;o=256*o+t[r+c],c+=l,h-=8);for(u=o&(1<<-h)-1,o>>=-h,h+=n;h>0;u=256*u+t[r+c],c+=l,h-=8);if(0===o)o=1-f;else{if(o===a)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),o-=f}return(p?-1:1)*u*Math.pow(2,o-n)},r.write=function(t,r,e,n,i,o){var u,s,a,f=8*o-i-1,h=(1<<f)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,d=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(s=isNaN(r)?1:0,u=h):(u=Math.floor(Math.log(r)/Math.LN2),r*(a=Math.pow(2,-u))<1&&(u--,a*=2),r+=u+c>=1?l/a:l*Math.pow(2,1-c),r*a>=2&&(u++,a/=2),u+c>=h?(s=0,u=h):u+c>=1?(s=(r*a-1)*Math.pow(2,i),u+=c):(s=r*Math.pow(2,c-1)*Math.pow(2,i),u=0));i>=8;t[e+p]=255&s,p+=g,s/=256,i-=8);for(u=u<<i|s,f+=i;f>0;t[e+p]=255&u,p+=g,u/=256,f-=8);t[e+p-g]|=128*d}},function(t,r,e){"use strict";var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,r,e){"use strict";var n,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":i(window))&&(n=window)}t.exports=n},function(t,r,e){"use strict";function n(t){return new Promise(function(r,e){var n=new XMLHttpRequest;n.open("GET",t),n.onload=function(){return 200===n.status?r(n.response):e(Error(n.statusText))},n.onerror=function(t){return e(Error("Network Error: "+t))},n.send()})}Object.defineProperty(r,"__esModule",{value:!0}),r.get=n},function(t,r,e){r=t.exports=e(4)(void 0),r.push([t.i,'.pending-questions{font-size:16px;line-height:20px;transition:all .4s;border-radius:5px;box-shadow:0 2px 10px 0 rgba(0,0,0,.24);font-family:Helvetica;z-index:1000;position:fixed;right:20px;bottom:-81px;border-radius:3px;box-sizing:border-box;cursor:pointer;width:305px}.pending-questions__body{background-color:#fffceb;padding:13px 17px}.pending-questions__text{font-size:14px;font-weight:700;white-space:nowrap;display:flex;align-items:center;margin:0}.pending-questions__text:after{content:"";background:url('+e(0)+') no-repeat 50%;width:12px;height:7px;display:inline-block;margin-left:8px}a.pending-questions__button{display:block;width:100%;font-size:14px;font-weight:700;clear:both;text-align:center;margin:15px 0;padding:13px 21px;box-sizing:border-box;text-transform:uppercase;color:#fff;border-radius:3px;background-color:#ef7026;appearance:none;visibility:hidden}.pending-questions__button:hover{text-decoration:none}.pending-questions__toggler{display:none}.pending-questions__toggler-icon{position:relative}.pending-questions__toggler:before{content:"";background:url('+e(0)+") no-repeat 50%;width:12px;height:7px;display:block;position:relative;transform:rotate(180deg)}.pending-questions_expanded{bottom:0;cursor:default}.pending-questions__body{position:relative;z-index:3}.pending-questions_expanded .pending-questions__button{visibility:visible}.pending-questions_expanded .pending-questions__text:after{content:none}.pending-questions_expanded .pending-questions__toggler{z-index:2;position:absolute;right:15px;width:35px;height:20px;top:-20px;box-shadow:0 2px 10px 0 rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:#fffceb}",""])},function(t,r,e){var n=e(9);t.exports="string"==typeof n?n:n.toString()},function(t,r,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){return new u.default({token:t})}Object.defineProperty(r,"__esModule",{value:!0}),r.init=i;var o=e(1),u=n(o)}]);