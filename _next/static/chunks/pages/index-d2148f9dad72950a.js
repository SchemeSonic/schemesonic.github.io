(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6840)}])},8187:function(t,e){"use strict";e.Z={src:"/_next/static/media/avatar.42514627.png",height:460,width:460,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AM7X0p+pno6KdnFrXYaCcHBrVklDNRwdFQDD0MqbopdoXEwAAAAuMipvZ1NTPjEqFhcA7PHrmpuSIAAAQSkgLwQAPzsqQUc5MjElAOnr6JecklE2J4FSRnFIOw0ZEks5KjtLKADk6OeSkYltITt1WldfQkRgRUZPPDIYJhMA4uDclpGEjV5abz03YCMfbVRHdG9cbWZTANbSyKmikoZ8azoAADkaDHBsXnp1Y2tnUwCuqZ+mmIx8VT85IRU6FAB6c2aFemh2aFNVrko7b9eyAgAAAABJRU5ErkJggg=="}},8154:function(t,e){"use strict";e.Z={src:"/_next/static/media/music.8240ac6e.gif",height:536,width:500}},3114:function(t,e){"use strict";e.Z={src:"/_next/static/media/sword.87d1f6dd.png",height:48,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEX///+y//8A6P8AudNdgGAdeG0HXFAEV0wEV0sAAAAJYFQAAAARxN0CVEkArMo+UkMARzUMHgAAu9MAQTUCVUoAutNXVksTaV8uvtQvxNkswdaAVkoOcF4ReGk3yd03xtspwtgnnKQvaFs4RTT7AAAAHnRSTlMAAAAAAAAAAAAAAQEDAwcJDBsgMkZga5ulrLPW1+03etwxAAAARElEQVR42gVABxaAEAD9LZvIFq37H7IHpqVaTDwgKJ+n+kSQ4NZ2V4Mt93K1aQHHeMs6K9h0ju64hP8ScqAau7d8I4L9icgD3d8KnnAAAAAASUVORK5CYII="}},6840:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return $}});var r=n(5893),a=n(7294),i=n(9008);const s="http://www.w3.org/2000/svg";class o{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function c(t,e,n,r,a){return{type:"path",ops:g(t,e,n,r,a)}}function l(t,e,n){const r=(t||[]).length;if(r>2){const a=[];for(let e=0;e<r-1;e++)a.push(...g(t[e][0],t[e][1],t[e+1][0],t[e+1][1],n));return e&&a.push(...g(t[r-1][0],t[r-1][1],t[0][0],t[0][1],n)),{type:"path",ops:a}}return 2===r?c(t[0][0],t[0][1],t[1][0],t[1][1],n):{type:"path",ops:[]}}function h(t,e,n,r,a){return function(t,e){return l(t,!0,e)}([[t,e],[t+n,e],[t+n,e+r],[t,e+r]],a)}function u(t,e,n,r,a){return function(t,e,n,r){const[a,i]=v(r.increment,t,e,r.rx,r.ry,1,r.increment*d(.1,d(.4,1,n),n),n);let s=b(a,null,n);if(!n.disableMultiStroke){const[a]=v(r.increment,t,e,r.rx,r.ry,1.5,0,n),i=b(a,null,n);s=s.concat(i)}return{estimatedPoints:i,opset:{type:"path",ops:s}}}(t,e,a,function(t,e,n){const r=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(t/2,2)+Math.pow(e/2,2))/2)),a=Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*r),i=2*Math.PI/a;let s=Math.abs(t/2),o=Math.abs(e/2);const c=1-n.curveFitting;return s+=m(s*c,n),o+=m(o*c,n),{increment:i,rx:s,ry:o}}(n,r,a)).opset}function p(t){return t.randomizer||(t.randomizer=new o(t.seed||0)),t.randomizer.next()}function d(t,e,n,r=1){return n.roughness*r*(p(n)*(e-t)+t)}function m(t,e,n=1){return d(-t,t,e,n)}function g(t,e,n,r,a,i=!1){const s=i?a.disableMultiStrokeFill:a.disableMultiStroke,o=f(t,e,n,r,a,!0,!1);if(s)return o;const c=f(t,e,n,r,a,!0,!0);return o.concat(c)}function f(t,e,n,r,a,i,s){const o=Math.pow(t-n,2)+Math.pow(e-r,2),c=Math.sqrt(o);let l=1;l=c<200?1:c>500?.4:-.0016668*c+1.233334;let h=a.maxRandomnessOffset||0;h*h*100>o&&(h=c/10);const u=h/2,d=.2+.2*p(a);let g=a.bowing*a.maxRandomnessOffset*(r-e)/200,f=a.bowing*a.maxRandomnessOffset*(t-n)/200;g=m(g,a,l),f=m(f,a,l);const b=[],v=()=>m(u,a,l),y=()=>m(h,a,l);return i&&(s?b.push({op:"move",data:[t+v(),e+v()]}):b.push({op:"move",data:[t+m(h,a,l),e+m(h,a,l)]})),s?b.push({op:"bcurveTo",data:[g+t+(n-t)*d+v(),f+e+(r-e)*d+v(),g+t+2*(n-t)*d+v(),f+e+2*(r-e)*d+v(),n+v(),r+v()]}):b.push({op:"bcurveTo",data:[g+t+(n-t)*d+y(),f+e+(r-e)*d+y(),g+t+2*(n-t)*d+y(),f+e+2*(r-e)*d+y(),n+y(),r+y()]}),b}function b(t,e,n){const r=t.length,a=[];if(r>3){const i=[],s=1-n.curveTightness;a.push({op:"move",data:[t[1][0],t[1][1]]});for(let e=1;e+2<r;e++){const n=t[e];i[0]=[n[0],n[1]],i[1]=[n[0]+(s*t[e+1][0]-s*t[e-1][0])/6,n[1]+(s*t[e+1][1]-s*t[e-1][1])/6],i[2]=[t[e+1][0]+(s*t[e][0]-s*t[e+2][0])/6,t[e+1][1]+(s*t[e][1]-s*t[e+2][1])/6],i[3]=[t[e+1][0],t[e+1][1]],a.push({op:"bcurveTo",data:[i[1][0],i[1][1],i[2][0],i[2][1],i[3][0],i[3][1]]})}if(e&&2===e.length){const t=n.maxRandomnessOffset;a.push({op:"lineTo",data:[e[0]+m(t,n),e[1]+m(t,n)]})}}else 3===r?(a.push({op:"move",data:[t[1][0],t[1][1]]}),a.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===r&&a.push(...g(t[0][0],t[0][1],t[1][0],t[1][1],n));return a}function v(t,e,n,r,a,i,s,o){const c=[],l=[],h=m(.5,o)-Math.PI/2;l.push([m(i,o)+e+.9*r*Math.cos(h-t),m(i,o)+n+.9*a*Math.sin(h-t)]);for(let u=h;u<2*Math.PI+h-.01;u+=t){const t=[m(i,o)+e+r*Math.cos(u),m(i,o)+n+a*Math.sin(u)];c.push(t),l.push(t)}return l.push([m(i,o)+e+r*Math.cos(h+2*Math.PI+.5*s),m(i,o)+n+a*Math.sin(h+2*Math.PI+.5*s)]),l.push([m(i,o)+e+.98*r*Math.cos(h+s),m(i,o)+n+.98*a*Math.sin(h+s)]),l.push([m(i,o)+e+.9*r*Math.cos(h+.5*s),m(i,o)+n+.9*a*Math.sin(h+.5*s)]),[l,c]}function y(t,e){return{maxRandomnessOffset:2,roughness:"highlight"===t?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,combineNestedSvgPaths:!1,disableMultiStroke:"double"!==t,disableMultiStrokeFill:!1,seed:e}}function w(t,e,n,r,a,i){const o=[];let p=n.strokeWidth||2;const d=function(t){const e=t.padding;if(e||0===e){if("number"==typeof e)return[e,e,e,e];if(Array.isArray(e)){const t=e;if(t.length)switch(t.length){case 4:return[...t];case 1:return[t[0],t[0],t[0],t[0]];case 2:return[...t,...t];case 3:return[...t,t[1]];default:return[t[0],t[1],t[2],t[3]]}}}return[5,5,5,5]}(n),m=void 0===n.animate||!!n.animate,g=n.iterations||2,f=y("single",i);switch(n.type){case"underline":{const t=e.y+e.h+d[2];for(let n=0;n<g;n++)n%2?o.push(c(e.x+e.w,t,e.x,t,f)):o.push(c(e.x,t,e.x+e.w,t,f));break}case"strike-through":{const t=e.y+e.h/2;for(let n=0;n<g;n++)n%2?o.push(c(e.x+e.w,t,e.x,t,f)):o.push(c(e.x,t,e.x+e.w,t,f));break}case"box":{const t=e.x-d[3],n=e.y-d[0],r=e.w+(d[1]+d[3]),a=e.h+(d[0]+d[2]);for(let e=0;e<g;e++)o.push(h(t,n,r,a,f));break}case"bracket":{const t=Array.isArray(n.brackets)?n.brackets:n.brackets?[n.brackets]:["right"],r=e.x-2*d[3],a=e.x+e.w+2*d[1],i=e.y-2*d[0],s=e.y+e.h+2*d[2];for(const n of t){let t;switch(n){case"bottom":t=[[r,e.y+e.h],[r,s],[a,s],[a,e.y+e.h]];break;case"top":t=[[r,e.y],[r,i],[a,i],[a,e.y]];break;case"left":t=[[e.x,i],[r,i],[r,s],[e.x,s]];break;case"right":t=[[e.x+e.w,i],[a,i],[a,s],[e.x+e.w,s]]}t&&o.push(l(t,!1,f))}break}case"crossed-off":{const t=e.x,n=e.y,r=t+e.w,a=n+e.h;for(let e=0;e<g;e++)e%2?o.push(c(r,a,t,n,f)):o.push(c(t,n,r,a,f));for(let e=0;e<g;e++)e%2?o.push(c(t,a,r,n,f)):o.push(c(r,n,t,a,f));break}case"circle":{const t=y("double",i),n=e.w+(d[1]+d[3]),r=e.h+(d[0]+d[2]),a=e.x-d[3]+n/2,s=e.y-d[0]+r/2,c=Math.floor(g/2),l=g-2*c;for(let e=0;e<c;e++)o.push(u(a,s,n,r,t));for(let e=0;e<l;e++)o.push(u(a,s,n,r,f));break}case"highlight":{const t=y("highlight",i);p=.95*e.h;const n=e.y+e.h/2;for(let r=0;r<g;r++)r%2?o.push(c(e.x+e.w,n,e.x,n,t)):o.push(c(e.x,n,e.x+e.w,n,t));break}}if(o.length){const e=function(t){const e=[];for(const n of t){let t="";for(const r of n.ops){const n=r.data;switch(r.op){case"move":t.trim()&&e.push(t.trim()),t=`M${n[0]} ${n[1]} `;break;case"bcurveTo":t+=`C${n[0]} ${n[1]}, ${n[2]} ${n[3]}, ${n[4]} ${n[5]} `;break;case"lineTo":t+=`L${n[0]} ${n[1]} `}}t.trim()&&e.push(t.trim())}return e}(o),i=[],c=[];let l=0;const h=(t,e,n)=>t.setAttribute(e,n);for(const r of e){const e=document.createElementNS(s,"path");if(h(e,"d",r),h(e,"fill","none"),h(e,"stroke",n.color||"currentColor"),h(e,"stroke-width",""+p),m){const t=e.getTotalLength();i.push(t),l+=t}t.appendChild(e),c.push(e)}if(m){let t=0;for(let e=0;e<c.length;e++){const n=c[e],s=i[e],o=l?a*(s/l):0,h=r+t,u=n.style;u.strokeDashoffset=""+s,u.strokeDasharray=""+s,u.animation=`rough-notation-dash ${o}ms ease-out ${h}ms forwards`,t+=o}}}}class x{constructor(t,e){this._state="unattached",this._resizing=!1,this._seed=Math.floor(Math.random()*2**31),this._lastSizes=[],this._animationDelay=0,this._resizeListener=()=>{this._resizing||(this._resizing=!0,setTimeout((()=>{this._resizing=!1,"showing"===this._state&&this.haveRectsChanged()&&this.show()}),400))},this._e=t,this._config=JSON.parse(JSON.stringify(e)),this.attach()}get animate(){return this._config.animate}set animate(t){this._config.animate=t}get animationDuration(){return this._config.animationDuration}set animationDuration(t){this._config.animationDuration=t}get iterations(){return this._config.iterations}set iterations(t){this._config.iterations=t}get color(){return this._config.color}set color(t){this._config.color!==t&&(this._config.color=t,this.refresh())}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(t){this._config.strokeWidth!==t&&(this._config.strokeWidth=t,this.refresh())}get padding(){return this._config.padding}set padding(t){this._config.padding!==t&&(this._config.padding=t,this.refresh())}attach(){if("unattached"===this._state&&this._e.parentElement){!function(){if(!window.__rno_kf_s){const t=window.__rno_kf_s=document.createElement("style");t.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(t)}}();const t=this._svg=document.createElementNS(s,"svg");t.setAttribute("class","rough-annotation");const e=t.style;e.position="absolute",e.top="0",e.left="0",e.overflow="visible",e.pointerEvents="none",e.width="100px",e.height="100px";const n="highlight"===this._config.type;if(this._e.insertAdjacentElement(n?"beforebegin":"afterend",t),this._state="not-showing",n){const t=window.getComputedStyle(this._e).position;(!t||"static"===t)&&(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver((t=>{for(const e of t)e.contentRect&&this._resizeListener()}))),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){const t=this.rects();if(t.length!==this._lastSizes.length)return!0;for(let e=0;e<t.length;e++)if(!this.isSameRect(t[e],this._lastSizes[e]))return!0}return!1}isSameRect(t,e){const n=(t,e)=>Math.round(t)===Math.round(e);return n(t.x,e.x)&&n(t.y,e.y)&&n(t.w,e.w)&&n(t.h,e.h)}isShowing(){return"not-showing"!==this._state}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then((()=>{this.isShowing()&&this.show(),delete this.pendingRefresh})))}show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&this.render(this._svg,!1)}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}render(t,e){let n=this._config;e&&(n=JSON.parse(JSON.stringify(this._config)),n.animate=!1);const r=this.rects();let a=0;r.forEach((t=>a+=t.w));const i=n.animationDuration||800;let s=0;for(let o=0;o<r.length;o++){const e=i*(r[o].w/a);w(t,r[o],n,s+this._animationDelay,e,this._seed),s+=e}this._lastSizes=r,this._state="showing"}rects(){const t=[];if(this._svg)if(this._config.multiline){const e=this._e.getClientRects();for(let n=0;n<e.length;n++)t.push(this.svgRect(this._svg,e[n]))}else t.push(this.svgRect(this._svg,this._e.getBoundingClientRect()));return t}svgRect(t,e){const n=t.getBoundingClientRect(),r=e;return{x:(r.x||r.left)-(n.x||n.left),y:(r.y||r.top)-(n.y||n.top),w:r.width,h:r.height}}}var j=function(){return(j=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};var O=(0,a.createContext)(null),A=(0,a.createContext)(null);var _=function(t){var e=t.animate,n=void 0===e||e,r=t.animationDelay,i=void 0===r?0:r,s=t.animationDuration,o=void 0===s?800:s,c=t.brackets,l=t.children,h=t.color,u=t.customElement,p=void 0===u?"span":u,d=t.getAnnotationObject,m=t.iterations,g=void 0===m?2:m,f=t.multiline,b=void 0!==f&&f,v=t.order,y=t.padding,w=void 0===y?5:y,_=t.show,N=void 0!==_&&_,k=t.strokeWidth,M=void 0===k?1:k,S=t.type,E=void 0===S?"underline":S,P=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}(t,["animate","animationDelay","animationDuration","brackets","children","color","customElement","getAnnotationObject","iterations","multiline","order","padding","show","strokeWidth","type"]),R=(0,a.useRef)(null),T=(0,a.useRef)(),D=(0,a.useRef)({playing:!1,timeout:null}),C=(0,a.useRef)({animate:n,animationDuration:o,brackets:c,color:h,getAnnotationObject:d,iterations:g,multiline:b,padding:w,strokeWidth:M,type:E});return function(t,e){var n=(0,a.useContext)(O),r=(0,a.useContext)(A),i=(0,a.useRef)({annotation:t,context:n,dispatch:r,order:e});(0,a.useEffect)((function(){var t=i.current,e=t.annotation,n=t.context,r=t.dispatch,a=t.order;n&&r&&r({type:"ADD",payload:{annotation:e,order:a}})}),[])}(T,"string"===typeof v?parseInt(v):v),(0,a.useEffect)((function(){var t=C.current,e=t.getAnnotationObject;return T.current=function(t,e){return new x(t,e)}(R.current,t),e&&e(T.current),function(){var t,e;null===(e=null===(t=T.current)||void 0===t?void 0:t.remove)||void 0===e||e.call(t)}}),[]),(0,a.useEffect)((function(){var t,e;N?D.current.timeout||(D.current.timeout=window.setTimeout((function(){var t,e;D.current.playing=!0,null===(e=null===(t=T.current)||void 0===t?void 0:t.show)||void 0===e||e.call(t),window.setTimeout((function(){D.current.playing=!1,D.current.timeout=null}),o)}),i)):(null===(e=null===(t=T.current)||void 0===t?void 0:t.hide)||void 0===e||e.call(t),D.current.playing=!1,D.current.timeout&&(clearTimeout(D.current.timeout),D.current.timeout=null))}),[T,N,i,D,o]),(0,a.useEffect)((function(){T.current&&(T.current.animate=n,T.current.animationDuration=o,T.current.color=h,T.current.strokeWidth=M,T.current.padding=w)}),[T,n,o,h,M,w]),a.createElement(p,j({ref:R},P),l)},N=n(425),k=n(1766),M=n(2593),S=n.n(M),E=new k.Howl({src:[n(8115)]}),P=new k.Howl({src:[n(7116)]}),R=function(){var t=(0,a.useState)(!1),e=t[0],n=t[1],i=(0,N.F)(),s=i.setTheme,o=i.resolvedTheme,c=(0,r.jsx)("svg",{className:"h-5 w-5 rounded-full text-gray-".concat("light"===o?600:400," ").concat(S().rippleAnimation),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}),l=(0,r.jsx)("svg",{className:"h-5 w-5 rounded-full text-gray-".concat("dark"===o?300:400," ").concat(S().rippleAnimation),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})});return(0,a.useEffect)((function(){return n(!0)}),[]),e?(0,r.jsx)("div",{id:"theme-toggle",children:(0,r.jsxs)("div",{className:"flex",children:[c,(0,r.jsx)("div",{className:"w-12 h-5 flex items-center rounded-full mx-1 px-1 cursor-pointer ".concat("light"===o?"bg-gray-300":"bg-gray-700"),onClick:function(){"light"===o?(s("dark"),E.stop(),P.play()):(s("light"),E.play(),P.stop())},children:(0,r.jsx)("div",{className:"w-4 h-4 rounded-full shadow-md transform transition duration-300 ease ".concat("dark"===o?"translate-x-6 bg-purple-400":"bg-yellow-200")})}),l]})}):null},T=function(){var t=(0,a.useState)(!1),e=t[0],n=t[1],i=(0,a.useState)(!1),s=i[0],o=i[1];return(0,a.useEffect)((function(){setTimeout((function(){return n(!0)}),500),setTimeout((function(){return o(!0)}),1500)}),[]),(0,r.jsxs)("div",{className:"flex flex-row-reverse items-center relative px-4 py-4 mb-3 border-b border-opacity-100 dark:border-opacity-30",children:[(0,r.jsxs)("span",{className:"absolute left-4",children:[(0,r.jsx)(_,{type:"highlight",iterations:20,animationDuration:1e4,show:e,color:"#f44336",children:"Scheme"}),(0,r.jsx)("span",{className:"inline-block duration-1000 transition-width ".concat(e?"w-0":"w-40")}),(0,r.jsx)(_,{type:"highlight",iterations:20,animationDuration:1e4,show:s,color:"#fff176",children:(0,r.jsx)("span",{className:"dark:text-black",children:"Sonic"})})]}),(0,r.jsx)(R,{}),[{title:"home",path:"/"},{title:"about",path:"/about"}].reverse().map((function(t){return(0,r.jsx)("a",{className:"mr-4",href:t.path,children:t.title},t.path)}))]})};function D(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var C=function(t){var e=t.meta,n=t.children;return e=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){D(t,e,n[e])}))}return t}({},{title:"SchemeSonic",desc:"Portfolio"},e),(0,r.jsxs)("div",{className:"w-screen h-screen overflow-x-hidden font-press-start",children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:e.title}),(0,r.jsx)("meta",{name:"description",content:e.desc}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("div",{className:"container mx-auto pb-8 px-4",children:[(0,r.jsx)(T,{}),(0,r.jsx)("div",{id:"main-content",children:n})]})]})};function z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){z(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function L(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var B=a.createContext({}),V=function(t){var e=a.useContext(B),n=e;return t&&(n="function"===typeof t?t(e):I(I({},e),t)),n},W={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},J=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,o=L(t,["components","mdxType","originalType","parentName"]),c=V(n),l=r,h=c["".concat(s,".").concat(l)]||c[l]||W[l]||i;return n?a.createElement(h,I(I({ref:e},o),{},{components:n})):a.createElement(h,I({ref:e},o))}));function U(t,e){var n=arguments,r=e&&e.mdxType;if("string"===typeof t||r){var i=n.length,s=new Array(i);s[0]=J;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"===typeof t?t:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}function H(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}J.displayName="MDXCreateElement";var Z=function(){return U("div",{className:"my-5 mb-5 flex items-center text-lg"},U("img",{alt:"projects",src:n(3114).Z.src,width:32,height:32}),U("span",{className:"ml-2"},"Projects"))},K={ProjectTitle:Z};function Q(t){var e=t.components,n=H(t,["components"]);return U("wrapper",Object.assign({},K,n,{components:e,mdxType:"MDXLayout"}),U(Z,{mdxType:"ProjectTitle"}),U("div",{className:"overflow-x-auto"},U("table",null,U("thead",{parentName:"table"},U("tr",{parentName:"thead"},U("th",Object.assign({parentName:"tr"},{align:null})),U("th",Object.assign({parentName:"tr"},{align:null}),"date"),U("th",Object.assign({parentName:"tr"},{align:null}),"name"),U("th",Object.assign({parentName:"tr"},{align:null}),"description"),U("th",Object.assign({parentName:"tr"},{align:null}),"tags"),U("th",Object.assign({parentName:"tr"},{align:null}),"repo"),U("th",Object.assign({parentName:"tr"},{align:null}),"site"))),U("tbody",{parentName:"table"},U("tr",{parentName:"tbody"},U("td",Object.assign({parentName:"tr"},{align:null}),"\ud83d\udee0\ufe0f"),U("td",Object.assign({parentName:"tr"},{align:null}),"Jan, 2022"),U("td",Object.assign({parentName:"tr"},{align:null}),"react-npm-starter"),U("td",Object.assign({parentName:"tr"},{align:null}),"NPM package starter for react libs using Typescript and Rollup"),U("td",Object.assign({parentName:"tr"},{align:null}),"react, npm, starter"),U("td",Object.assign({parentName:"tr"},{align:null}),U("a",Object.assign({parentName:"td"},{href:"https://github.com/SchemeSonic/react-npm-starter"}),"link")),U("td",Object.assign({parentName:"tr"},{align:null}),U("a",Object.assign({parentName:"td"},{href:"https://github.com/SchemeSonic/react-npm-starter"}),"link"))),U("tr",{parentName:"tbody"},U("td",Object.assign({parentName:"tr"},{align:null}),"#\ufe0f\u20e3"),U("td",Object.assign({parentName:"tr"},{align:null}),"Jan, 2022"),U("td",Object.assign({parentName:"tr"},{align:null}),"react-matix-table"),U("td",Object.assign({parentName:"tr"},{align:null}),"Simple matrix table for react"),U("td",Object.assign({parentName:"tr"},{align:null}),"react, npm"),U("td",Object.assign({parentName:"tr"},{align:null}),U("a",Object.assign({parentName:"td"},{href:"https://github.com/Paraboly/react-matrix-table"}),"link")),U("td",Object.assign({parentName:"tr"},{align:null}),U("a",Object.assign({parentName:"td"},{href:"https://www.npmjs.com/package/@paraboly/react-matrix-table"}),"link"))),U("tr",{parentName:"tbody"},U("td",Object.assign({parentName:"tr"},{align:null}),"\u2139\ufe0f"),U("td",Object.assign({parentName:"tr"},{align:null}),"Nov, 2021"),U("td",Object.assign({parentName:"tr"},{align:null}),"schemesonic.com"),U("td",Object.assign({parentName:"tr"},{align:null}),"Personal website"),U("td",Object.assign({parentName:"tr"},{align:null}),"Next.js, tailwind"),U("td",Object.assign({parentName:"tr"},{align:null}),U("a",Object.assign({parentName:"td"},{href:"https://github.com/SchemeSonic/schemesonic.github.io"}),"link")),U("td",Object.assign({parentName:"tr"},{align:null}),U("a",Object.assign({parentName:"td"},{href:"https://www.schemesonic.com"}),"link"))),U("tr",{parentName:"tbody"},U("td",Object.assign({parentName:"tr"},{align:null}),"\ud83d\udcc8"),U("td",Object.assign({parentName:"tr"},{align:null}),"Dec, 2021"),U("td",Object.assign({parentName:"tr"},{align:null}),"react-apexcharts-dynamic-config"),U("td",Object.assign({parentName:"tr"},{align:null}),"Apexcharts dynamic configuration component"),U("td",Object.assign({parentName:"tr"},{align:null}),"react, apexcharts, npm"),U("td",Object.assign({parentName:"tr"},{align:null}),U("a",Object.assign({parentName:"td"},{href:"https://github.com/Paraboly/react-apexcharts-dynamic-config"}),"link")),U("td",Object.assign({parentName:"tr"},{align:null}),U("a",Object.assign({parentName:"td"},{href:"https://react-apexcharts-dynamic-config.netlify.app/"}),"link"))),U("tr",{parentName:"tbody"},U("td",Object.assign({parentName:"tr"},{align:null}),"\ud83d\udccd"),U("td",Object.assign({parentName:"tr"},{align:null}),"Dec, 2020"),U("td",Object.assign({parentName:"tr"},{align:null}),"react-osm-geocoding"),U("td",Object.assign({parentName:"tr"},{align:null}),"Find address locations via OSM Nominatim"),U("td",Object.assign({parentName:"tr"},{align:null}),"react, osm, npm"),U("td",Object.assign({parentName:"tr"},{align:null}),U("a",Object.assign({parentName:"td"},{href:"https://github.com/Paraboly/react-osm-geocoding"}),"link")),U("td",Object.assign({parentName:"tr"},{align:null}),U("a",Object.assign({parentName:"td"},{href:"https://www.npmjs.com/package/@paraboly/react-osm-geocoding"}),"link"))),U("tr",{parentName:"tbody"},U("td",Object.assign({parentName:"tr"},{align:null}),"\ud83d\udccc"),U("td",Object.assign({parentName:"tr"},{align:null}),"Jul, 2020"),U("td",Object.assign({parentName:"tr"},{align:null}),"pwc-leaflet-entity-selector"),U("td",Object.assign({parentName:"tr"},{align:null}),"Get entities within the drawn boundary. Web component written in StencilJS for Leaflet"),U("td",Object.assign({parentName:"tr"},{align:null}),"web component, stencil, leaflet"),U("td",Object.assign({parentName:"tr"},{align:null}),U("a",Object.assign({parentName:"td"},{href:"https://github.com/Paraboly/pwc-leaflet-entity-selector"}),"link")),U("td",Object.assign({parentName:"tr"},{align:null}),U("a",Object.assign({parentName:"td"},{href:"https://paraboly.github.io/pwc-leaflet-entity-selector/"}),"link")))))))}Q.isMDXComponent=!0;var X=function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"my-5 mb-5 flex items-center text-lg",children:[(0,r.jsx)("img",{alt:"music",src:n(8154).Z.src,width:32,height:32}),(0,r.jsx)("span",{className:"ml-2",children:"Music"})]}),(0,r.jsxs)("div",{className:"sm:flex",children:[(0,r.jsx)("div",{className:"flex-1 mt-2 sm:pr-2 sm:mt-0",children:(0,r.jsx)("iframe",{src:"https://open.spotify.com/embed/playlist/3p2yljyJXmyP6yXjuJmFWm?utm_source=generator",width:"100%",height:"240",frameBorder:"0",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"})}),(0,r.jsx)("div",{className:"flex-1 mt-2 sm:pl-2 sm:mt-0",children:(0,r.jsx)("iframe",{src:"https://open.spotify.com/embed/playlist/5EnVxCi6wKLhVOPiKd1a98?utm_source=generator",width:"100%",height:"240",frameBorder:"0",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"})})]}),(0,r.jsxs)("div",{className:"sm:flex mt-4",children:[(0,r.jsx)("div",{className:"flex-1 mt-2 sm:pr-2 sm:mt-0",children:(0,r.jsx)("iframe",{src:"https://open.spotify.com/embed/playlist/0UvCTiw4zn2m8dhxCGINtP?utm_source=generator",width:"100%",height:"240",frameBorder:"0",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"})}),(0,r.jsx)("div",{className:"flex-1 mt-2 sm:pl-2 sm:mt-0",children:(0,r.jsx)("iframe",{src:"https://open.spotify.com/embed/playlist/5VJ0uFrlyU54SJhTErGFOr?utm_source=generator",width:"100%",height:"240",frameBorder:"0",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"})})]})]})},q=n(4705),G=n.n(q),$=function(){var t=function(){return(0,r.jsxs)("div",{className:"text-center ".concat(G().avatarWrapper),children:[(0,r.jsxs)("div",{className:G().mouth,children:[(0,r.jsx)("div",{className:G().leftFang}),(0,r.jsx)("div",{className:G().leftBlood}),(0,r.jsx)("div",{className:G().rightFang}),(0,r.jsx)("div",{className:G().rightBlood})]}),(0,r.jsx)("img",{className:"rounded-full",alt:"avatar",src:n(8187).Z.src,width:256,height:256})]})};return(0,r.jsxs)(C,{children:[(0,r.jsx)(t,{}),(0,r.jsx)("div",{className:G().projects,children:(0,r.jsx)(Q,{})}),(0,r.jsx)(X,{})]})}},2593:function(t){t.exports={rippleAnimation:"ThemeToggle_rippleAnimation__1aH8W",ripple:"ThemeToggle_ripple__3RPJr"}},4705:function(t){t.exports={avatarWrapper:"index_avatarWrapper__24j1Y",mouth:"index_mouth__77m_0",leftFang:"index_leftFang__1Ick2",rightFang:"index_rightFang__3Zlxw",leftBlood:"index_leftBlood__-ccqv",rightBlood:"index_rightBlood__2zv1-",projects:"index_projects__2iIB4"}},8115:function(t,e,n){"use strict";t.exports=n.p+"static/chunks/public/sounds/rooster.3ddf738e088f1169.mp3"},7116:function(t,e,n){"use strict";t.exports=n.p+"static/chunks/public/sounds/zombie.555252c24a3b6c66.mp3"}},function(t){t.O(0,[774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);