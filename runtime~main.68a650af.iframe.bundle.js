(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({26:"perseus-src-widgets-__stories__-cs-program-stories",241:"perseus-src-components-__stories__-math-output-stories",246:"perseus-editor-src-widgets-label-image-__stories__-question-markers-stories",274:"math-input-src-components-keypad-navigation-pad-stories",336:"perseus-editor-src-diffs-__stories__-tags-diff-stories",501:"perseus-src-components-__stories__-sortable-stories",542:"perseus-src-components-__stories__-input-with-examples-stories",717:"perseus-editor-src-widgets-__stories__-explanation-editor-stories",721:"perseus-editor-src-components-__stories__-blur-input-stories",749:"perseus-src-widgets-__stories__-explanation-stories",820:"perseus-src-components-__stories__-icon-stories",891:"math-input-src-full-mobile-input-stories",1048:"perseus-src-components-__stories__-tooltip-stories",1094:"perseus-src-components-__stories__-text-input-stories",1341:"perseus-src-widgets-__stories__-label-image-stories",1364:"perseus-src-components-__stories__-info-tip-stories",1501:"math-input-src-components-keypad-keypad-mathquill-stories",1578:"perseus-editor-src-widgets-label-image-__stories__-answer-choices-stories",1612:"perseus-src-widgets-label-image-__stories__-answer-choices-stories",1666:"perseus-src-widgets-radio-__stories__-choice-stories",1780:"perseus-src-components-__stories__-tex-stories",1781:"perseus-src-components-__stories__-button-group-stories",1928:"perseus-src-widgets-__stories__-random-widgets-stories",1973:"perseus-src-widgets-__stories__-numeric-input-stories",1992:"perseus-src-widgets-radio-__stories__-base-radio-stories",2040:"perseus-src-widgets-__stories__-dropdown-stories",2086:"perseus-editor-src-widgets-__stories__-dropdown-editor-stories",2116:"perseus-src-widgets-__stories__-passage-stories",2258:"perseus-src-widgets-__stories__-graded-group-stories",2260:"perseus-src-__stories__-article-renderer-stories",2323:"perseus-src-components-__stories__-fixed-to-responsive-stories",2394:"perseus-editor-src-components-__stories__-section-control-button-stories",2484:"perseus-src-widgets-__stories__-interaction-stories",2499:"perseus-src-widgets-radio-__stories__-focus-ring-stories",2526:"perseus-src-components-__stories__-inline-icon-stories",2593:"perseus-src-components-__stories__-graph-stories",2675:"perseus-src-widgets-__stories__-sorter-stories",2737:"perseus-editor-src-widgets-label-image-__stories__-behavior-stories",2795:"perseus-src-widgets-__stories__-transformer-stories",2867:"perseus-editor-src-widgets-__stories__-numeric-input-editor-stories",2943:"perseus-src-widgets-label-image-__stories__-answer-pill-stories",3041:"perseus-src-components-__stories__-zoomable-tex-stories",3230:"perseus-src-components-__stories__-lint-stories",3327:"perseus-src-widgets-__stories__-expression-stories",3332:"perseus-src-__stories__-server-item-renderer-stories",3343:"perseus-src-components-__stories__-stub-tag-editor-stories",3422:"perseus-editor-src-widgets-label-image-__stories__-marker-stories",3471:"perseus-editor-src-__stories__-tex-error-view-stories",3519:"perseus-src-components-visibility-observer-__stories__-visibility-observer-stories",3533:"perseus-src-widgets-__stories__-radio-stories",3603:"perseus-editor-src-widgets-__stories__-expression-editor-stories",3632:"perseus-editor-src-__stories__-editor-stories",3679:"perseus-src-widgets-__stories__-plotter-stories",3765:"perseus-src-widgets-__stories__-orderer-stories",3783:"perseus-src-__stories__-hints-renderer-stories",3861:"perseus-src-components-__stories__-prop-check-box-stories",3907:"perseus-editor-src-widgets-__stories__-label-image-editor-stories",3988:"perseus-editor-src-diffs-__stories__-structured-item-diff-stories",4112:"perseus-src-components-__stories__-image-loader-stories",4206:"perseus-src-multi-items-__stories__-multi-renderer-stories",4306:"perseus-src-widgets-radio-__stories__-choice-none-above-stories",4324:"perseus-src-widgets-__stories__-image-stories",4683:"perseus-editor-src-__stories__-item-editor-stories",4709:"perseus-editor-src-widgets-__stories__-radio-editor-stories",4787:"perseus-src-components-__stories__-zoomable-stories",4877:"perseus-src-components-__stories__-multi-button-group-stories",5102:"math-input-src-full-keypad-stories",5223:"perseus-src-components-__stories__-range-input-stories",5758:"perseus-src-widgets-__stories__-input-number-stories",6244:"perseus-src-widgets-__stories__-matrix-stories",6272:"perseus-src-widgets-__stories__-group-stories",6327:"perseus-src-widgets-radio-__stories__-choice-icon-stories",6516:"perseus-src-widgets-__stories__-number-line-stories",6590:"perseus-src-widgets-__stories__-graded-group-set-stories",6641:"perseus-src-components-__stories__-hud-stories",6650:"perseus-src-components-__stories__-number-input-stories",6682:"perseus-src-widgets-__stories__-passage-ref-stories",7231:"perseus-src-widgets-__stories__-unit-stories",7683:"perseus-src-widgets-radio-__stories__-option-status-stories",7741:"perseus-src-widgets-__stories__-categorizer-stories",8094:"perseus-src-components-__stories__-svg-image-stories",8107:"perseus-src-widgets-__stories__-matcher-stories",8134:"perseus-src-widgets-__stories__-interactive-graph-stories",8241:"perseus-src-widgets-label-image-__stories__-marker-stories",8284:"perseus-src-components-__stories__-simple-keypad-input-stories",8286:"math-input-src-components-keypad-keypad-button-stories",8440:"perseus-src-widgets-__stories__-iframe-stories",8677:"perseus-src-widgets-__stories__-video-transcript-link-stories",8715:"perseus-editor-src-diffs-__stories__-text-diff-stories",8821:"perseus-src-components-__stories__-graphie-stories",8858:"perseus-src-components-__stories__-text-list-editor-stories",8905:"perseus-src-widgets-__stories__-definition-stories",9008:"math-input-src-components-tabbar-tabbar-stories",9037:"perseus-src-components-__stories__-math-input-stories",9273:"perseus-editor-src-widgets-label-image-__stories__-select-image-stories",9381:"perseus-src-widgets-__stories__-grapher-stories",9504:"perseus-src-widgets-__stories__-video-stories",9576:"math-input-src-components-keypad-keypad-pages-keypad-pages-stories"}[chunkId]||chunkId)+"."+{26:"1e4ee8c9",241:"327f8354",246:"1f94db05",274:"04da2f1b",336:"b75ca947",501:"56bcb73b",542:"149f5555",717:"5bc74cfb",721:"4e4abd7e",749:"be03e356",820:"cb2ba782",891:"55e49165",1048:"937a07b3",1094:"9f97a139",1341:"9060354a",1364:"aaf2a129",1501:"5c6509e7",1578:"df9e95f1",1612:"abadfe77",1660:"a0efe9ec",1666:"fb83512a",1729:"80584726",1780:"46850a1f",1781:"e0cf4254",1928:"5d295df1",1973:"981dd1fd",1984:"7f6f3bf8",1992:"3cae9cd9",2040:"82a7b61e",2086:"07b3fa04",2116:"e18838b3",2258:"503edec5",2260:"dab74704",2323:"ce3ee300",2350:"74ac55d3",2394:"538fb997",2484:"2ceddeb1",2499:"439e4545",2526:"90335817",2593:"c99116fe",2675:"071e54b4",2737:"145d6694",2795:"227e1184",2867:"5e8f5afe",2943:"a7283094",3041:"5b116053",3105:"22b60a06",3163:"ae1926f5",3230:"88ffbd55",3327:"a23ffc33",3332:"27313307",3343:"8a63c3d9",3422:"8e850890",3426:"4c808ca3",3471:"b9521feb",3519:"a89e29d5",3533:"63746c78",3603:"80dad8f0",3632:"19835dcb",3679:"35472fea",3728:"fee7904d",3765:"f70176b9",3783:"385b4080",3834:"29fdab14",3861:"833fefd3",3907:"f620f746",3988:"c7d2f530",4112:"0cb152c8",4206:"4cafd359",4306:"c7e35783",4324:"16b5ff79",4448:"6d5d7dc0",4683:"327cda83",4709:"8dd0b31b",4787:"5e2d21d6",4877:"1890f7fc",5102:"28b635e9",5171:"cbab005a",5223:"710aaab2",5758:"7d3f4822",6223:"1f3944f6",6244:"6891eadb",6272:"a0274e65",6327:"9da24b43",6516:"25cff6bb",6590:"65c01ef2",6641:"0a3e6d50",6650:"8a7187a5",6682:"6ffe9a10",7231:"ef8b4e8a",7683:"3402988d",7741:"ade8f28f",8094:"bb52094a",8107:"bda7d189",8134:"3b1aeaca",8241:"aea12fb4",8284:"1fb1ece7",8286:"67eefb3f",8437:"b7d03262",8440:"6efa5701",8677:"504c05fb",8715:"423da2e3",8821:"20da92c1",8858:"1785f6be",8899:"4ed797a8",8905:"7534518a",9008:"d705478e",9037:"3ece4189",9273:"a6816ff9",9296:"96aa0abe",9381:"82408ba4",9504:"19806bdd",9576:"430600b9"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="perseus:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","perseus:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkperseus=self.webpackChunkperseus||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();