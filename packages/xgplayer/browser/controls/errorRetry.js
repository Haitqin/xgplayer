window.PlayerControls=window.PlayerControls||{},window.PlayerControls.errorRetry=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(t(1));r.default={name:"errorRetry",method:function(){n.default.method.call(this)}},e.exports=r.default},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(t(2));var o={maxCount:3,backupUrl:"",isFetch:!0,fetchTimeout:100};r.default={name:"errorretry",method:function(){var e=this,r=this;if(r.config.errorConfig&&!(r.src.indexOf("blob:")>-1)){var t={},a=r.config.errorConfig;for(var u in o)void 0===a[u]?t[u]=o[u]:t[u]=a[u];r.retryData={count:0,errfTimer:null,isFetchReturn:!1,currentTime:0};var i=r._onError;r._onError=function(o){var a=e.retryData.count;if(a>t.maxCount)t.isFetch?function(e,r,t){var n=function(r,t){e.retryData.isFetchReturn||(e.retryData.isFetchReturn=!0,r(t))};return new Promise(function(o,a){try{var u=new window.XMLHttpRequest;u.open("get",r),u.onload=function(){n(o,{status:u.status,statusText:u.statusText,xhr:u})},u.onerror=function(){n(o,{status:u.status,statusText:u.statusText||"The network environment is disconnected or the address is invalid",xhr:u})},u.onabort=function(){},e.retryData.errfTimer=window.setTimeout(function(){var r=e.retryData.errfTimer;window.clearTimeout(r),e.retryData.errfTimer=null,n(o,{status:-1,statusText:"request timeout"})},t),u.send()}catch(r){e.retryData.isFetchReturn=!0,n(o,{status:-2,statusText:"request error"})}})}(e,e.currentSrc,t.fetchTimeout).then(function(r){e.emit("error",new n.default({type:"network",currentTime:e.currentTime,duration:e.duration||0,networkState:e.networkState,readyState:e.readyState,currentSrc:e.currentSrc,src:e.src,ended:e.ended,httpCode:r.status,httpMsg:r.statusText,errd:{line:101,msg:e.error,handle:"plugin errorRetry"},errorCode:e.video&&e.video.error.code,mediaError:e.video&&e.video.error})),i.call(e,r)}):i.call(e,o);else{0===a&&(e.retryData.currentTime=e.currentTime,e.once("canplay",function(){this.currentTime=this.retryData.currentTime,this.play(),this.retryData.retryCode=0,this.retryData.isFetchReturn=!1,this.retryData.currentTime=0}.bind(e)));var u="";u=t.count<2?t.backupUrl?t.backupUrl:r.currentSrc:t.backupUrl&&a>1?t.backupUrl:r.currentSrc,e.retryData.count++,e.src=u}}}}},e.exports=r.default},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(3);var o={network:{code:1,msg:"视频下载错误",remark:"只要视频下载错误就使用此类型，无论是video本身的超时还是xhr的分段请求超时或者资源不存在"},mse:{code:2,msg:"流追加错误",remark:"追加流的时候如果类型不对、无法被正确解码则会触发此类错误"},parse:{code:3,msg:"解析错误",remark:"mp4、hls、flv我们都是使用js进行格式解析，如果解析失败则会触发此类错误"},format:{code:4,msg:"格式错误",remark:"如果浏览器不支持的格式导致播放错误"},decoder:{code:5,msg:"解码错误",remark:"浏览器解码异常会抛出此类型错误"},runtime:{code:6,msg:"语法错误",remark:"播放器语法错误"},timeout:{code:7,msg:"播放超时",remark:"播放过程中无法正常请求下一个分段导致播放中断"},other:{code:8,msg:"其他错误",remark:"不可知的错误或被忽略的错误类型"}};r.default=function e(r,t,a,u,i,c,s,d){var l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:{line:"",handle:"",msg:"",version:""},f=arguments[9],m=arguments[10];!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e);var y={};if(arguments.length>1)y.playerVersion=n.version,y.errorType=r,y.domain=document.domain,y.duration=a,y.currentTime=t,y.networkState=u,y.readyState=i,y.currentSrc=s,y.src=c,y.ended=d,y.errd=l,y.ex=(o[r]||{}).msg,y.errorCode=f,y.mediaError=m;else{var p=arguments[0];Object.keys(p).map(function(e){y[e]=p[e]}),y.ex=(p.type&&o[p.type]||{}).msg}return y},e.exports=r.default},function(e){e.exports={version:"2.19.1"}}]);