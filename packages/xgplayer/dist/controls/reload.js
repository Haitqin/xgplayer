!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.reload=t():(e.xgplayer=e.xgplayer||{},e.xgplayer.PlayerControls=e.xgplayer.PlayerControls||{},e.xgplayer.PlayerControls.reload=t())}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.util=void 0,t.createDom=o,t.hasClass=a,t.addClass=i,t.removeClass=l,t.toggleClass=s,t.findDom=u,t.padStart=c,t.format=f,t.event=d,t.typeOf=p,t.deepCopy=g,t.getBgImage=h,t.copyDom=v,t._setInterval=y,t._clearInterval=m,t.createImgBtn=b,t.isWeiXin=x,t.isUc=w,t.computeWatchDur=O,t.offInDestroy=j,t.on=L,t.once=C,t.getBuffered2=k;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(3));function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=document.createElement(e);return o.className=r,o.innerHTML=t,Object.keys(n).forEach(function(t){var r=t,a=n[t];"video"===e||"audio"===e?a&&o.setAttribute(r,a):o.setAttribute(r,a)}),o}function a(e,t){return!!e&&(e.classList?Array.prototype.some.call(e.classList,function(e){return e===t}):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")))}function i(e,t){e&&(e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach(function(t){t&&e.classList.add(t)}):a(e,t)||(e.className+=" "+t))}function l(e,t){e&&(e.classList?t.split(/\s+/g).forEach(function(t){e.classList.remove(t)}):a(e,t)&&t.split(/\s+/g).forEach(function(t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}))}function s(e,t){e&&t.split(/\s+/g).forEach(function(t){a(e,t)?l(e,t):i(e,t)})}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments[1],n=void 0;try{n=e.querySelector(t)}catch(r){0===t.indexOf("#")&&(n=e.getElementById(t.slice(1)))}return n}function c(e,t,n){for(var r=String(n),o=t>>0,a=Math.ceil(o/r.length),i=[],l=String(e);a--;)i.push(r);return i.join("").substring(0,o-l.length)+l}function f(e){if(window.isNaN(e))return"";var t=c(Math.floor(e/3600),2,0),n=c(Math.floor((e-3600*t)/60),2,0),r=c(Math.floor(e-3600*t-60*n),2,0);return("00"===t?[n,r]:[t,n,r]).join(":")}function d(e){if(e.touches){var t=e.touches[0]||e.changedTouches[0];e.clientX=t.clientX||0,e.clientY=t.clientY||0,e.offsetX=t.pageX-t.target.offsetLeft,e.offsetY=t.pageY-t.target.offsetTop}e._target=e.target||e.srcElement}function p(e){return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]}function g(e,t){if("Object"===p(t)&&"Object"===p(e))return Object.keys(t).forEach(function(n){"Object"!==p(t[n])||t[n]instanceof Node?"Array"===p(t[n])?e[n]="Array"===p(e[n])?e[n].concat(t[n]):t[n]:e[n]=t[n]:e[n]?g(e[n],t[n]):e[n]=t[n]}),e}function h(e){var t=(e.currentStyle||window.getComputedStyle(e,null)).backgroundImage;if(!t||"none"===t)return"";var n=document.createElement("a");return n.href=t.replace(/url\("|"\)/g,""),n.href}function v(e){if(e&&1===e.nodeType){var t=document.createElement(e.tagName);return Array.prototype.forEach.call(e.attributes,function(e){t.setAttribute(e.name,e.value)}),e.innerHTML&&(t.innerHTML=e.innerHTML),t}return""}function y(e,t,n,r){e._interval[t]||(e._interval[t]=setInterval(n.bind(e),r))}function m(e,t){clearInterval(e._interval[t]),e._interval[t]=null}function b(e,t,n,r){var a=o("xg-"+e,"",{},"xgplayer-"+e+"-img");if(a.style.backgroundImage='url("'+t+'")',n&&r){var i=void 0,l=void 0,s=void 0;["px","rem","em","pt","dp","vw","vh","vm","%"].every(function(e){return!(n.indexOf(e)>-1&&r.indexOf(e)>-1)||(i=Number(n.slice(0,n.indexOf(e)).trim()),l=Number(r.slice(0,r.indexOf(e)).trim()),s=e,!1)}),a.style.width=""+i+s,a.style.height=""+l+s,a.style.backgroundSize=""+i+s+" "+l+s,a.style.margin="start"===e?"-"+l/2+s+" auto auto -"+i/2+s:"auto 5px auto 5px"}return a}function x(){return window.navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1}function w(){return window.navigator.userAgent.toLowerCase().indexOf("ucbrowser")>-1}function O(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],n=0;n<e.length;n++)if(!(!e[n].end||e[n].begin<0||e[n].end<0||e[n].end<e[n].begin))if(t.length<1)t.push({begin:e[n].begin,end:e[n].end});else for(var r=0;r<t.length;r++){var o=e[n].begin,a=e[n].end;if(a<t[r].begin){t.splice(r,0,{begin:o,end:a});break}if(!(o>t[r].end)){var i=t[r].begin,l=t[r].end;t[r].begin=Math.min(o,i),t[r].end=Math.max(a,l);break}if(r>t.length-2){t.push({begin:o,end:a});break}}for(var s=0,u=0;u<t.length;u++)s+=t[u].end-t[u].begin;return s}function j(e,t,n,r){e.once(r,function o(){e.off(t,n),e.off(r,o)})}function L(e,t,n,r){if(r)e.on(t,n),j(e,t,n,r);else{e.on(t,function r(o){n(o),e.off(t,r)})}}function C(e,t,n,r){if(r)e.once(t,n),j(e,t,n,r);else{e.once(t,function r(o){n(o),e.off(t,r)})}}function k(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,n=[],o=0;o<e.length;o++)n.push({start:e.start(o)<.5?0:e.start(o),end:e.end(o)});n.sort(function(e,t){var n=e.start-t.start;return n||t.end-e.end});var a=[];if(t)for(var i=0;i<n.length;i++){var l=a.length;if(l){var s=a[l-1].end;n[i].start-s<t?n[i].end>s&&(a[l-1].end=n[i].end):a.push(n[i])}else a.push(n[i])}else a=n;return new r.default(a)}t.util={createDom:o,hasClass:a,addClass:i,removeClass:l,toggleClass:s,findDom:u,padStart:c,format:f,event:d,typeOf:p,deepCopy:g,getBgImage:h,copyDom:v,setInterval:y,clearInterval:m,createImgBtn:b,isWeiXin:x,isUc:w,computeWatchDur:O,offInDestroy:j,on:L,once:C,getBuffered2:k}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(2)),o=a(n(4));function a(e){return e&&e.__esModule?e:{default:e}}t.default={name:"reload",method:function(){r.default.method.call(this),o.default.method.call(this)}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default={name:"reload",method:function(){var e=this;function t(){(0,r.removeClass)(e.root,"xgplayer-is-error"),e.src=e.config.url}e.config.reload&&(e.on("reloadBtnClick",t),e.once("destroy",function n(){e.off("reloadBtnClick",t),e.off("destroy",n)}))}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bufferedList=t}return r(e,[{key:"start",value:function(e){return this.bufferedList[e].start}},{key:"end",value:function(e){return this.bufferedList[e].end}},{key:"length",get:function(){return this.bufferedList.length}}]),e}();t.default=o,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n(5));n(6);t.default={name:"s_reload",method:function(){var e=this;if(e.config.reload){var t=(0,r.createDom)("xg-reload",'<xg-icon class="xgplayer-icon">'+o.default+"</xg-icon>",{},"xgplayer-reload"),n=e.lang.RELOAD_TIPS,a=(0,r.createDom)("xg-tips",'<span class="xgplayer-tip-reload">'+n+"</span>",{},"xgplayer-tips");t.appendChild(a),e.once("ready",function(){e.controls.appendChild(t)}),["click","touchend"].forEach(function(n){t.addEventListener(n,function(t){t.preventDefault(),t.stopPropagation(),e.emit("reloadBtnClick")})})}}},e.exports=t.default},function(e,t,n){"use strict";n.r(t),t.default='<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">\n    <path fill="#FFF" fill-opacity="1" fill-rule="nonzero" d="M18.17 19.988a7.182 7.182 0 0 1-4.256 1.318 7.806 7.806 0 0 1-.595-.03c-.08-.008-.16-.021-.242-.031a8.004 8.004 0 0 1-.458-.071c-.094-.018-.185-.042-.276-.063a7.743 7.743 0 0 1-.439-.113c-.068-.022-.136-.047-.205-.07a7.03 7.03 0 0 1-.492-.181c-.037-.015-.072-.032-.108-.049a7.295 7.295 0 0 1-.554-.269l-.025-.012a7.347 7.347 0 0 1-2.111-1.753c-.03-.036-.057-.074-.086-.11a7.305 7.305 0 0 1-1.594-4.557h1.686a.123.123 0 0 0 .108-.064.119.119 0 0 0-.006-.125L5.684 9.532a.123.123 0 0 0-.103-.056.123.123 0 0 0-.102.056l-2.834 4.276a.121.121 0 0 0-.005.125c.022.04.064.064.107.064h1.687c0 2.025.627 3.902 1.693 5.454.013.021.022.044.037.066.11.159.233.305.352.455.043.057.085.116.13.171.175.213.36.413.55.61.02.018.036.038.054.055a9.447 9.447 0 0 0 2.91 1.996c.058.026.115.054.175.079.202.084.41.158.619.228.098.034.196.069.296.1.183.054.37.1.558.145.125.029.249.06.376.085.052.01.102.027.155.035.177.032.355.05.533.071.064.007.128.018.19.026.32.03.639.052.956.052a9.46 9.46 0 0 0 5.47-1.746 1.16 1.16 0 0 0 .282-1.608 1.143 1.143 0 0 0-1.6-.283zm5.397-5.991a9.604 9.604 0 0 0-1.685-5.441c-.016-.027-.026-.054-.043-.078-.132-.19-.276-.366-.419-.543-.017-.022-.032-.044-.05-.065a9.467 9.467 0 0 0-3.571-2.7l-.114-.051a11.2 11.2 0 0 0-.673-.248c-.082-.027-.163-.057-.247-.082a9.188 9.188 0 0 0-.6-.156c-.113-.026-.224-.055-.337-.077-.057-.011-.109-.028-.164-.037-.151-.027-.304-.039-.455-.058-.104-.013-.208-.03-.313-.04a10.05 10.05 0 0 0-.759-.039c-.045 0-.09-.007-.136-.007l-.025.003a9.45 9.45 0 0 0-5.46 1.737 1.16 1.16 0 0 0-.284 1.608c.363.523 1.08.65 1.6.284a7.182 7.182 0 0 1 4.222-1.32c.217.002.429.013.639.033.065.007.129.017.193.025.173.021.344.046.513.08.075.014.149.033.221.05.166.037.331.077.494.127l.152.051c.185.061.366.127.545.201l.054.025a7.308 7.308 0 0 1 2.741 2.067l.013.018a7.302 7.302 0 0 1 1.652 4.633h-1.686a.123.123 0 0 0-.108.064.12.12 0 0 0 .006.124l2.834 4.277c.022.033.06.054.103.054.042 0 .08-.021.102-.054l2.833-4.277a.12.12 0 0 0 .005-.124.123.123 0 0 0-.108-.064h-1.685z"/>\n</svg>\n'},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(9)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(8)(!1)).push([e.i,".xgplayer-skin-default .xgplayer-reload{position:relative;-webkit-order:1;-moz-box-ordinal-group:2;order:1;display:block;width:40px;height:40px;cursor:pointer}.xgplayer-skin-default .xgplayer-reload .xgplayer-icon{margin-top:7px;width:26px}.xgplayer-skin-default .xgplayer-reload .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-reload .xgplayer-tips{margin-left:-22px}.xgplayer-skin-default .xgplayer-reload .xgplayer-tips .xgplayer-tip-reload{display:block}.xgplayer-skin-default .xgplayer-reload:hover{opacity:.85}.xgplayer-skin-default .xgplayer-reload:hover .xgplayer-tips{display:block}.xgplayer-lang-is-en .xgplayer-reload .xgplayer-tips{margin-left:-26px}.xgplayer-lang-is-jp .xgplayer-reload .xgplayer-tips{margin-left:-38px}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),a=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),i=null,l=0,s=[],u=n(10);function c(e,t){for(var n=0;n<e.length;n++){var o=e[n],a=r[o.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(v(o.parts[i],t))}else{var l=[];for(i=0;i<o.parts.length;i++)l.push(v(o.parts[i],t));r[o.id]={id:o.id,refs:1,parts:l}}}}function f(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],l={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}function d(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),s.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=s.indexOf(e);t>=0&&s.splice(t,1)}function g(e){var t=document.createElement("style");return e.attrs.type="text/css",h(t,e.attrs),d(e,t),t}function h(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var s=l++;n=i||(i=g(t)),r=m.bind(null,n,s,!1),o=m.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",h(t,e.attrs),d(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(i),l&&URL.revokeObjectURL(l)}.bind(null,n,t),o=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){p(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return c(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var i=n[a];(l=r[i.id]).refs--,o.push(l)}e&&c(f(e,t),t);for(a=0;a<o.length;a++){var l;if(0===(l=o[a]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete r[l.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function m(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});