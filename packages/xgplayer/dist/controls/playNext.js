!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.playNext=t():(e.xgplayer=e.xgplayer||{},e.xgplayer.PlayerControls=e.xgplayer.PlayerControls||{},e.xgplayer.PlayerControls.playNext=t())}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}t.default={name:"playNext",method:function(){r.default.method.call(this),o.default.method.call(this)}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"playNext",method:function(){var e=this,t=e.config.playNext;function n(){e.currentVideoIndex+1<t.urlList.length&&(e.currentVideoIndex++,e.video.autoplay=!0,e.src=t.urlList[e.currentVideoIndex],e.emit("playerNext",e.currentVideoIndex+1),e.currentVideoIndex+1===t.urlList.length&&e.emit("urlListEnd"))}e.currentVideoIndex=-1,e.on("playNextBtnClick",n),e.once("destroy",function t(){e.off("playNextBtnClick",n),e.off("destroy",t)})}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=function(e){return e&&e.__esModule?e:{default:e}}(n(5));n(6);t.default={name:"s_playNext",method:function(){var e=this,t=e.config.playNext;if(t&&t.urlList){var n=(0,r.createDom)("xg-playnext",'<xg-icon class="xgplayer-icon">'+o.default+"</xg-icon>",{},"xgplayer-playnext"),i=e.lang.PLAYNEXT_TIPS,a=(0,r.createDom)("xg-tips",'<span class="xgplayer-tip-playnext">'+i+"</span>",{},"xgplayer-tips");n.appendChild(a),e.once("ready",function(){e.controls.appendChild(n)}),["click","touchend"].forEach(function(t){n.addEventListener(t,function(t){t.preventDefault(),t.stopPropagation(),(0,r.addClass)(e.root,"xgplayer-is-enter"),e.emit("playNextBtnClick")})});var s=function(){(0,r.addClass)(e.root,"xgplayer-playnext-inactive")};e.on("urlListEnd",s),e.once("destroy",function t(){e.off("urlListEnd",s),e.off("destroy",t)})}}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.util=void 0,t.createDom=o,t.hasClass=i,t.addClass=a,t.removeClass=s,t.toggleClass=l,t.findDom=u,t.padStart=c,t.format=f,t.event=p,t.typeOf=d,t.deepCopy=g,t.getBgImage=y,t.copyDom=v,t._setInterval=h,t._clearInterval=m,t.createImgBtn=x,t.isWeiXin=b,t.isUc=w,t.computeWatchDur=L,t.offInDestroy=j,t.on=O,t.once=C,t.getBuffered2=I;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(4));function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=document.createElement(e);return o.className=r,o.innerHTML=t,Object.keys(n).forEach(function(t){var r=t,i=n[t];"video"===e||"audio"===e?i&&o.setAttribute(r,i):o.setAttribute(r,i)}),o}function i(e,t){return!!e&&(e.classList?Array.prototype.some.call(e.classList,function(e){return e===t}):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")))}function a(e,t){e&&(e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach(function(t){t&&e.classList.add(t)}):i(e,t)||(e.className+=" "+t))}function s(e,t){e&&(e.classList?t.split(/\s+/g).forEach(function(t){e.classList.remove(t)}):i(e,t)&&t.split(/\s+/g).forEach(function(t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}))}function l(e,t){e&&t.split(/\s+/g).forEach(function(t){i(e,t)?s(e,t):a(e,t)})}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments[1],n=void 0;try{n=e.querySelector(t)}catch(r){0===t.indexOf("#")&&(n=e.getElementById(t.slice(1)))}return n}function c(e,t,n){for(var r=String(n),o=t>>0,i=Math.ceil(o/r.length),a=[],s=String(e);i--;)a.push(r);return a.join("").substring(0,o-s.length)+s}function f(e){if(window.isNaN(e))return"";var t=c(Math.floor(e/3600),2,0),n=c(Math.floor((e-3600*t)/60),2,0),r=c(Math.floor(e-3600*t-60*n),2,0);return("00"===t?[n,r]:[t,n,r]).join(":")}function p(e){if(e.touches){var t=e.touches[0]||e.changedTouches[0];e.clientX=t.clientX||0,e.clientY=t.clientY||0,e.offsetX=t.pageX-t.target.offsetLeft,e.offsetY=t.pageY-t.target.offsetTop}e._target=e.target||e.srcElement}function d(e){return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]}function g(e,t){if("Object"===d(t)&&"Object"===d(e))return Object.keys(t).forEach(function(n){"Object"!==d(t[n])||t[n]instanceof Node?"Array"===d(t[n])?e[n]="Array"===d(e[n])?e[n].concat(t[n]):t[n]:e[n]=t[n]:e[n]?g(e[n],t[n]):e[n]=t[n]}),e}function y(e){var t=(e.currentStyle||window.getComputedStyle(e,null)).backgroundImage;if(!t||"none"===t)return"";var n=document.createElement("a");return n.href=t.replace(/url\("|"\)/g,""),n.href}function v(e){if(e&&1===e.nodeType){var t=document.createElement(e.tagName);return Array.prototype.forEach.call(e.attributes,function(e){t.setAttribute(e.name,e.value)}),e.innerHTML&&(t.innerHTML=e.innerHTML),t}return""}function h(e,t,n,r){e._interval[t]||(e._interval[t]=setInterval(n.bind(e),r))}function m(e,t){clearInterval(e._interval[t]),e._interval[t]=null}function x(e,t,n,r){var i=o("xg-"+e,"",{},"xgplayer-"+e+"-img");if(i.style.backgroundImage='url("'+t+'")',n&&r){var a=void 0,s=void 0,l=void 0;["px","rem","em","pt","dp","vw","vh","vm","%"].every(function(e){return!(n.indexOf(e)>-1&&r.indexOf(e)>-1)||(a=Number(n.slice(0,n.indexOf(e)).trim()),s=Number(r.slice(0,r.indexOf(e)).trim()),l=e,!1)}),i.style.width=""+a+l,i.style.height=""+s+l,i.style.backgroundSize=""+a+l+" "+s+l,i.style.margin="start"===e?"-"+s/2+l+" auto auto -"+a/2+l:"auto 5px auto 5px"}return i}function b(){return window.navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1}function w(){return window.navigator.userAgent.toLowerCase().indexOf("ucbrowser")>-1}function L(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],n=0;n<e.length;n++)if(!(!e[n].end||e[n].begin<0||e[n].end<0||e[n].end<e[n].begin))if(t.length<1)t.push({begin:e[n].begin,end:e[n].end});else for(var r=0;r<t.length;r++){var o=e[n].begin,i=e[n].end;if(i<t[r].begin){t.splice(r,0,{begin:o,end:i});break}if(!(o>t[r].end)){var a=t[r].begin,s=t[r].end;t[r].begin=Math.min(o,a),t[r].end=Math.max(i,s);break}if(r>t.length-2){t.push({begin:o,end:i});break}}for(var l=0,u=0;u<t.length;u++)l+=t[u].end-t[u].begin;return l}function j(e,t,n,r){e.once(r,function o(){e.off(t,n),e.off(r,o)})}function O(e,t,n,r){if(r)e.on(t,n),j(e,t,n,r);else{e.on(t,function r(o){n(o),e.off(t,r)})}}function C(e,t,n,r){if(r)e.once(t,n),j(e,t,n,r);else{e.once(t,function r(o){n(o),e.off(t,r)})}}function I(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,n=[],o=0;o<e.length;o++)n.push({start:e.start(o)<.5?0:e.start(o),end:e.end(o)});n.sort(function(e,t){var n=e.start-t.start;return n||t.end-e.end});var i=[];if(t)for(var a=0;a<n.length;a++){var s=i.length;if(s){var l=i[s-1].end;n[a].start-l<t?n[a].end>l&&(i[s-1].end=n[a].end):i.push(n[a])}else i.push(n[a])}else i=n;return new r.default(i)}t.util={createDom:o,hasClass:i,addClass:a,removeClass:s,toggleClass:l,findDom:u,padStart:c,format:f,event:p,typeOf:d,deepCopy:g,getBgImage:y,copyDom:v,setInterval:h,clearInterval:m,createImgBtn:x,isWeiXin:b,isUc:w,computeWatchDur:L,offInDestroy:j,on:O,once:C,getBuffered2:I}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bufferedList=t}return r(e,[{key:"start",value:function(e){return this.bufferedList[e].start}},{key:"end",value:function(e){return this.bufferedList[e].end}},{key:"length",get:function(){return this.bufferedList.length}}]),e}();t.default=o,e.exports=t.default},function(e,t,n){"use strict";n.r(t),t.default='<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="scale(0.038 0.028)" d="M800 380v768h-128v-352l-320 320v-704l320 320v-352z"></path>\n</svg>\n'},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(9)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(8)(!1)).push([e.i,".xgplayer-skin-default .xgplayer-playnext{position:relative;-webkit-order:1;-moz-box-ordinal-group:2;order:1;display:block;cursor:pointer;top:-2px}.xgplayer-skin-default .xgplayer-playnext .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-playnext .xgplayer-tips .xgplayer-tip-playnext{display:block}.xgplayer-skin-default .xgplayer-playnext:hover{opacity:.85}.xgplayer-skin-default .xgplayer-playnext:hover .xgplayer-tips{display:block}.xgplayer-lang-is-en .xgplayer-playnext .xgplayer-tips{margin-left:-25px}.xgplayer-lang-is-jp .xgplayer-playnext .xgplayer-tips{margin-left:-38px}.xgplayer-skin-default.xgplayer-playnext-inactive .xgplayer-playnext{display:none}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,s=0,l=[],u=n(10);function c(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(v(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(v(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function f(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function g(e){var t=document.createElement("style");return e.attrs.type="text/css",y(t,e.attrs),p(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var l=s++;n=a||(a=g(t)),r=m.bind(null,n,l,!1),o=m.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",y(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return c(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}e&&c(f(e,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete r[s.id]}}}};var h=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function m(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=h(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});