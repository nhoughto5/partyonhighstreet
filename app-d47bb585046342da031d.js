webpackJsonp([0xd2a57dc1d883],{138:function(e,n){"use strict";function t(e,n,t){var o=r.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function o(e,n,t){return r.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=t,n.apiRunnerAsync=o;var r=[]},380:function(e,n,t){"use strict";n.components={"component---src-templates-post-js":t(506),"component---src-pages-404-js":t(502),"component---src-pages-about-jsx":t(503),"component---src-pages-index-js":t(504),"component---src-pages-videos-jsx":t(505)},n.json={"layout-index.json":t(507),"second-post.json":t(513),"first-post.json":t(511),"404.json":t(508),"about.json":t(510),"index.json":t(512),"videos.json":t(514),"404-html.json":t(509)},n.layouts={"layout---index":t(501)}},381:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(1),c=o(s),l=t(13),f=o(l),p=t(230),d=o(p),h=t(106),m=o(h),g=t(138),v=t(841),y=o(v),R=function(e){var n=e.children;return c.default.createElement("div",null,n())},x=function(e){function n(t){r(this,n);var o=a(this,e.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);if(t)this.setState({location:e.location,pageResources:t});else{var o=e.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){n.setState({location:o,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;m.default.on("onPostLoadPageResources",function(n){d.default.getPage(e.state.location.pathname)&&n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||(!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path)||(0,y.default)(this,e,n)))))},n.prototype.render=function(){var e=(0,g.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:R,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(c.default.Component);x.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},n.default=x,e.exports=n.default},106:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(529),a=o(r),u=(0,a.default)();e.exports=u},382:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(128),a=t(231),u=o(a),i={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,n);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var s=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return s=e,i[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return s=e,i[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return s=e,i[a]=e,!0}return!1}),s}}},383:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(172),a=o(r),u=t(138),i=(0,u.apiRunner)("replaceHistory"),s=i[0],c=s||(0,a.default)();e.exports=c},509:function(e,n,t){t(21),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(520)})})}},508:function(e,n,t){t(21),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(521)})})}},510:function(e,n,t){t(21),e.exports=function(e){return t.e(0xf927f8900006,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(522)})})}},511:function(e,n,t){t(21),e.exports=function(e){return t.e(98749194253172,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(523)})})}},512:function(e,n,t){t(21),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(524)})})}},507:function(e,n,t){t(21),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(176)})})}},513:function(e,n,t){t(21),e.exports=function(e){return t.e(26807536709107,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(525)})})}},514:function(e,n,t){t(21),e.exports=function(e){return t.e(0xdc9335751175,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(526)})})}},501:function(e,n,t){t(21),e.exports=function(e){return t.e(79611799117203,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(384)})})}},230:function(e,n,t){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var r=t(1),a=(o(r),t(382)),u=o(a),i=t(106),s=o(i),c=t(231),l=o(c),f=void 0,p={},d={},h={},m={},g={},v=[],y=[],R={},x="",_=[],P={},j=function(e){return e&&e.default||e},w=void 0,b=!0,C=[],N={},k={},E=5;w=t(385)({getNextQueuedResources:function(){return _.slice(-1)[0]},createResourceDownload:function(e){S(e,function(){_=_.filter(function(n){return n!==e}),w.onResourcedFinished(e)})}}),s.default.on("onPreLoadPageResources",function(e){w.onPreLoadPageResources(e)}),s.default.on("onPostLoadPageResources",function(e){w.onPostLoadPageResources(e)});var O=function(e,n){return P[e]>P[n]?1:P[e]<P[n]?-1:0},L=function(e,n){return R[e]>R[n]?1:R[e]<R[n]?-1:0},S=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(m[n])e.nextTick(function(){t(null,m[n])});else{var o=void 0;o="component---"===n.slice(0,12)?d.components[n]:"layout---"===n.slice(0,9)?d.layouts[n]:d.json[n],o(function(e,o){m[n]=o,C.push({resource:n,succeeded:!e}),k[n]||(k[n]=e),C=C.slice(-E),t(e,o)})}},A=function(n,t){g[n]?e.nextTick(function(){t(null,g[n])}):k[n]?e.nextTick(function(){t(k[n])}):S(n,function(e,o){if(e)t(e);else{var r=j(o());g[n]=r,t(e,r)}})},D=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var n=C.find(function(e){return e.succeeded});return!!n},T=function(e,n){console.log(n),N[e]||(N[e]=n),D()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},M=1,U={empty:function(){y=[],R={},P={},_=[],v=[],x=""},addPagesArray:function(e){v=e,x="/reponame",f=(0,u.default)(e,x)},addDevRequires:function(e){p=e},addProdRequires:function(e){d=e},dequeue:function(){return y.pop()},enqueue:function(e){var n=(0,l.default)(e,x);if(!v.some(function(e){return e.path===n}))return!1;var t=1/M;M+=1,R[n]?R[n]+=1:R[n]=1,U.has(n)||y.unshift(n),y.sort(L);var o=f(n);return o.jsonName&&(P[o.jsonName]?P[o.jsonName]+=1+t:P[o.jsonName]=1+t,_.indexOf(o.jsonName)!==-1||m[o.jsonName]||_.unshift(o.jsonName)),o.componentChunkName&&(P[o.componentChunkName]?P[o.componentChunkName]+=1+t:P[o.componentChunkName]=1+t,_.indexOf(o.componentChunkName)!==-1||m[o.jsonName]||_.unshift(o.componentChunkName)),_.sort(O),w.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:_,resourcesCount:P}},getPages:function(){return{pathArray:y,pathCount:R}},getPage:function(e){return f(e)},has:function(e){return y.some(function(n){return n===e})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};b&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),b=!1;if(N[n])return T(n,'Previously detected load failure for "'+n+'"'),t();var o=f(n);if(!o)return T(n,"A page wasn't found for \""+n+'"'),t();if(n=o.path,h[n])return e.nextTick(function(){t(h[n]),s.default.emit("onPostLoadPageResources",{page:o,pageResources:h[n]})}),h[n];s.default.emit("onPreLoadPageResources",{path:n});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){h[n]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};t(e),s.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return A(o.componentChunkName,function(e,n){e&&T(o.path,"Loading the component for "+o.path+" failed"),r=n,i()}),A(o.jsonName,function(e,n){e&&T(o.path,"Loading the JSON for "+o.path+" failed"),a=n,i()}),void(o.layoutComponentChunkName&&A(o.layout,function(e,n){e&&T(o.path,"Loading the Layout for "+o.path+" failed"),u=n,i()}))},peek:function(e){return y.slice(-1)[0]},length:function(){return y.length},indexOf:function(e){return y.length-y.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:U.getResourcesForPathname};n.default=U}).call(n,t(45))},527:function(e,n){e.exports=[{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"second-post.json",path:"/second-post"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"first-post.json",path:"/first-post"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-videos-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"videos.json",path:"/videos/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404-html.json",path:"/404.html"}]},385:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],a=function(){var e=n();e&&(r.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t(138),u=t(1),i=o(u),s=t(314),c=o(s),l=t(128),f=t(518),p=t(488),d=o(p),h=t(174),m=t(383),g=o(m),v=t(106),y=o(v),R=t(527),x=o(R),_=t(528),P=o(_),j=t(381),w=o(j),b=t(380),C=o(b),N=t(230),k=o(N);t(414),window.___history=g.default,window.___emitter=y.default,k.default.addPagesArray(x.default),k.default.addProdRequires(C.default),window.asyncRequires=C.default,window.___loader=k.default,window.matchPath=l.matchPath;var E=P.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),O=function(e){var n=E[e];return null!=n&&(g.default.replace(n.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&s!==!1||(window.___history=e,s=!0,e.listen(function(e,n){O(e.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})},0)}))}function n(e,n){var t=n.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(386);var o=function(e){function n(e){e.page.path===k.default.getPage(o).path&&(y.default.off("onPostLoadPageResources",n),clearTimeout(u),window.___history.push(t))}var t=(0,h.createLocation)(e,null,null,g.default.location),o=t.pathname,r=E[o];r&&(o=r.toPath);var a=window.location;if(a.pathname!==t.pathname||a.search!==t.search||a.hash!==t.hash){var u=setTimeout(function(){y.default.off("onPostLoadPageResources",n),y.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);k.default.getResourcesForPathname(o)?(clearTimeout(u),window.___history.push(t)):y.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var s=!1,p=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],m=function(e){var n=e.children;return i.default.createElement(l.Router,{history:g.default},n)},v=(0,l.withRouter)(w.default);k.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(p?p:m,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(v,{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return k.default.getPage(o.location.pathname)?(0,u.createElement)(w.default,r({page:!0},o)):(0,u.createElement)(w.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},528:function(e,n){e.exports=[]},386:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(106),a=o(r),u="/";u="/reponame/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},231:function(e,n){"use strict";n.__esModule=!0,n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,n.length)===n?e.slice(n.length):e},e.exports=n.default},488:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},21:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,s=!0,c=function(e){u&&(u(t,e),u=null)};return!a&&n&&n[o]?void c(!0):(r(o,function(){i||(i=!0,s?setTimeout(function(){c()}):c())}),void(i||(s=!1,e(function(){i||(i=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),c(!0))}))))}}o()},529:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).slice().map(function(e){e(t)}),(e["*"]||[]).slice().map(function(e){e(n,t)})}}}e.exports=t},841:function(e,n){"use strict";function t(e,n){for(var t in e)if(!(t in n))return!0;for(var o in n)if(e[o]!==n[o])return!0;return!1}n.__esModule=!0,n.default=function(e,n,o){return t(e.props,n)||t(e.state,o)},e.exports=n.default},502:function(e,n,t){t(21),e.exports=function(e){return t.e(0x9427c64ab85d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(400)})})}},503:function(e,n,t){t(21),e.exports=function(e){return t.e(0x83323ebd9d39,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(401)})})}},504:function(e,n,t){t(21),e.exports=function(e){return t.e(35783957827783,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(402)})})}},505:function(e,n,t){t(21),e.exports=function(e){return t.e(0xbff341f5ef4e,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(403)})})}},506:function(e,n,t){t(21),e.exports=function(e){return t.e(0xb1abc741118f,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(404)})})}}});
//# sourceMappingURL=app-d47bb585046342da031d.js.map