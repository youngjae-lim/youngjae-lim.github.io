/*! For license information please see 73b5b20277614ca7b7a3cae5cf59830929c697e4-8f3a5b94e74ee86cc0fb.js.LICENSE.txt */
(self.webpackChunkyoungjae_lim_github_io=self.webpackChunkyoungjae_lim_github_io||[]).push([[812],{3434:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#181818","images":{"fallback":{"src":"/static/5fc49fb3ba6bfed18aee329fa42b8e9a/ac2d9/profile.jpg","srcSet":"/static/5fc49fb3ba6bfed18aee329fa42b8e9a/ac2d9/profile.jpg 130w,\\n/static/5fc49fb3ba6bfed18aee329fa42b8e9a/345ff/profile.jpg 260w","sizes":"130px"},"sources":[{"srcSet":"/static/5fc49fb3ba6bfed18aee329fa42b8e9a/a819e/profile.webp 130w,\\n/static/5fc49fb3ba6bfed18aee329fa42b8e9a/0fcc6/profile.webp 260w","type":"image/webp","sizes":"130px"}]},"width":130,"height":130}')},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,i){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),i=r(7316);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(7294),u=r(4983).mdx,p=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=i(e,["scope","children"]),l=p(t),f=s.useMemo((function(){if(!r)return null;var e=c({React:s,mdx:u},l),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return s.createElement(f,c({},a))}},2761:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(7294),o=r(9),a=r(652),i=r(2347),l=o.ZP.div.withConfig({displayName:"Title__Wrapper",componentId:"sc-1hsde3i-0"})(["position:relative;text-align:center;margin-bottom:1.25rem;h4{color:var(--clr-white);text-transform:uppercase;font-weight:500;background:var(--);display:inline-block;margin-top:0;margin-bottom:0;padding:0 0.6rem;}.line{position:absolute;top:100%;left:0;width:100%;height:1.5px;background:var(--clr-white);z-index:-1;}"]),c=function(e){var t=e.title;return n.createElement(l,null,n.createElement("h4",null,t),n.createElement("div",{className:"line"}))},s=o.ZP.div.withConfig({displayName:"About__Wrapper",componentId:"gkmq2h-0"})(["text-align:center;p{color:var(--clr-white);}.img{border-radius:50%;margin:0 auto;margin-bottom:1rem;}"]),u=function(){return n.createElement(s,null,n.createElement(c,{title:"about me"}),n.createElement(i.S,{src:"../../assets/profile.jpg",layout:"fixed",width:130,height:130,className:"img",alt:"profile",__imageData:r(3434)}),n.createElement("p",null,"I am a full stack software engineer/data analyst from NYC who is seeking remote/freelancing/full-time opportunities. I am passionate about collecting, processing, exploring, and publishing data and building anything involving modern web technology. When I am not at my computer, I am a photographer as well."),n.createElement(a.Z,{styleClass:"banner-icons"}))},p=r(5444),f=o.ZP.div.withConfig({displayName:"Recent__Wrapper",componentId:"sc-107dsn2-0"})([".post{display:grid;grid-template-columns:75px 1fr;column-gap:1rem;margin-bottom:1rem;}.img{border-radius:var(--radius);}h5{font-size:0.7rem;margin-bottom:0.25rem;letter-spacing:0;line-height:1.2;color:var(--clr-white);}p{font-size:0.6rem;margin-bottom:0;color:var(--clr-grey-5);}.post:hover{h5{color:var(--clr-link-hover);}}"]),d=function(){var e=(0,p.K2)("3827573359").allMdx.nodes;return n.createElement(f,null,n.createElement(c,{title:"recent"}),e.map((function(e){var t=e.frontmatter,r=t.title,o=t.slug,a=t.date,l=t.image;return n.createElement(p.rU,{key:e.id,to:"/posts/"+o,className:"post"},n.createElement(i.G,{image:(0,i.d)(l),alt:r,className:"img"}),n.createElement("div",null,n.createElement("h5",null,r),n.createElement("p",null,a)))})))},m=r(2041),h=o.ZP.div.withConfig({displayName:"BannerTags__Wrapper",componentId:"sc-14bwk7r-0"})([""]),g=function(){return n.createElement(h,null,n.createElement(c,{title:"Tags"}),n.createElement(m.Z,null))},b=function(e){var t=e.isPost;return n.createElement(y,{isPost:t},n.createElement(u,null),n.createElement(d,null),n.createElement(g,null))},y=o.ZP.aside.withConfig({displayName:"Banner__Wrapper",componentId:"xz9m40-0"})(["display:grid;margin-top:",";grid-template-columns:300px;justify-content:center;row-gap:1rem;@media (min-width:576px){&{grid-template-columns:repeat(auto-fit,250px);column-gap:3rem;}}"],(function(e){return e.isPost?"2.5rem":"0rem"}))},2001:function(e,t,r){"use strict";r.d(t,{Z:function(){return R}});var n,o=r(7294),a=r(9),i=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(e){function t(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return i(t,e),t}(Error);function c(e,t){if(!e)throw new l(t)}function s(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],r=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(r))}));return t.length>0?"?"+t.join("&"):""}var u=r(5900),p=r.n(u),f=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),d=function(){return(d=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},m=function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{c(n.next(e))}catch(t){a(t)}}function l(e){try{c(n.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}c((n=n.apply(e,t||[])).next())}))},h=function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(l){a=[6,l],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},g=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},b=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},y=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},v=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function w(e,t,r){var n=t.height,o=t.width,a=g(t,["height","width"]),i=d({height:n,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),l=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(r)var c=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(c),r(l))}catch(e){console.error(e)}}),1e3);return l}var x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r=t.props,n=r.onShareWindowClose,o=r.windowHeight,a=void 0===o?400:o,i=r.windowPosition,l=void 0===i?"windowCenter":i,c=r.windowWidth,s=void 0===c?550:c;w(e,d({height:a,width:s},"windowCenter"===l?y(s,a):v(s,a)),n)},t.handleClick=function(e){return m(t,void 0,void 0,(function(){var t,r,n,o,a,i,l,c,s,u;return h(this,(function(p){switch(p.label){case 0:return t=this.props,r=t.beforeOnClick,n=t.disabled,o=t.networkLink,a=t.onClick,i=t.url,l=t.openShareDialogOnClick,c=t.opts,s=o(i,c),n?[2]:(e.preventDefault(),r?(u=r(),b(u)?[4,u]:[3,2]):[3,2]);case 1:p.sent(),p.label=2;case 2:return l&&this.openShareDialog(s),a&&a(e,s),[2]}}))}))},t}return f(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,n=e.disabled,a=e.disabledStyle,i=e.forwardedRef,l=(e.networkLink,e.networkName),c=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,g(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=p()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},r),m=d(d(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),n&&a);return o.createElement("button",d({},u,{"aria-label":u["aria-label"]||l,className:f,onClick:this.handleClick,ref:i,style:m}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(o.Component),k=function(){return(k=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var O=function(e,t,r,n){function a(a,i){var l=r(a),c=k({},a);return Object.keys(l).forEach((function(e){delete c[e]})),o.createElement(x,k({},n,c,{forwardedRef:i,networkName:e,networkLink:t,opts:r(a)}))}return a.displayName="ShareButton-"+e,(0,o.forwardRef)(a)};var _=O("facebook",(function(e,t){var r=t.quote,n=t.hashtag;return c(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+s({u:e,quote:r,hashtag:n})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),E=function(){return(E=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},j=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function C(e){var t=function(t){var r=t.bgStyle,n=t.borderRadius,a=t.iconFillColor,i=t.round,l=t.size,c=j(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return o.createElement("svg",E({viewBox:"0 0 64 64",width:l,height:l},c),i?o.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:r}):o.createElement("rect",{width:"64",height:"64",rx:n,ry:n,fill:e.color,style:r}),o.createElement("path",{d:e.path,fill:a}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var P=C({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var S=O("linkedin",(function(e,t){var r=t.title,n=t.summary,o=t.source;return c(e,"linkedin.url"),"https://linkedin.com/shareArticle"+s({url:e,mini:"true",title:r,summary:n,source:o})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600}),I=C({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});var N=O("twitter",(function(e,t){var r=t.title,n=t.via,o=t.hashtags,a=void 0===o?[]:o,i=t.related,l=void 0===i?[]:i;return c(e,"twitter.url"),c(Array.isArray(a),"twitter.hashtags is not an array"),c(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+s({url:e,text:r,via:n,hashtags:a.length>0?a.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),z=C({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var M=O("email",(function(e,t){var r=t.subject,n=t.body,o=t.separator;return"mailto:"+s({subject:r,body:n?n+o+e:e})}),(function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(e,t){window.location.href=t}}),W=C({color:"#7f7f7f",networkName:"email",path:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"}),Z=!0,R=function(e){var t=e.url,r=e.title,n=e.description;return o.createElement(D,null,o.createElement(_,{url:t,quote:n},o.createElement(P,{size:32,round:Z})),o.createElement(S,{url:t,title:r,summary:n},o.createElement(I,{size:32,round:Z})),o.createElement(N,{url:t,title:n},o.createElement(z,{size:32,round:Z})),o.createElement(M,{url:t,title:n},o.createElement(W,{size:32,round:Z})))},D=a.ZP.div.withConfig({displayName:"SocialShareButtons__Wrapper",componentId:"sc-48i9u6-0"})(["display:flex;align-items:center;margin-right:10px;transition:all 0.2s ease-out;gap:0.5rem;"])},3841:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(18),o=r(7294),a=r(9);function i(e,t){return o.createElement("ol",null,e.map((function(e){return o.createElement(u,{key:e.url,item:e,activeId:t},o.createElement("a",{href:e.url},e.title),e.items&&i(e.items,t))})))}function l(e){return e.reduce((function(e,t){return t.url&&e.push(t.url.slice(1)),t.items&&e.push.apply(e,(0,n.Z)(l(t.items))),e}),[])}function c(e){var t=e.items,r=function(e){var t=(0,o.useState)(""),r=t[0],n=t[1];return(0,o.useEffect)((function(){var t=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&n(e.target.id)}))}),{rootMargin:"0% 0% -60% 0%"});return e.forEach((function(e){t.observe(document.getElementById(e))})),function(){e.forEach((function(e){var r=document.getElementById(e);null!==r&&t.unobserve(r)}))}}),[e]),r}(l(t));return o.createElement(s,null,o.createElement("details",{open:!0},o.createElement("summary",null,"Table of Contents"),i(t,r)))}var s=a.ZP.article.withConfig({displayName:"TableOfContents__DetailsWrapper",componentId:"sc-1immg2w-0"})(["details{position:sticky;background:var(--toc-bg-light-1);border-radius:5px;box-shadow:rgba(60,64,67,0.3) 0px 1px 2px 0px,rgba(60,64,67,0.15) 0px 2px 6px 2px;padding:1rem 1.5rem 1rem 1rem;margin-top:4rem;margin-bottom:2rem;max-height:calc(100vh - (4rem * 2));min-width:200px;overflow:auto;top:8rem;color:var(--clr-grey-3);font-size:0.8rem;ol{list-style:none;margin:0 0 0.5rem 1rem;border-left:1px red dotted;}> ol{> li{margin-top:1rem;}}* > a{padding:0.3rem;transition:all 200ms ease-in-out;}* > a:hover{color:var(--clr-toc-hover-link);text-decoration:underline;}}@media (max-width:1170px){display:none;}"]),u=a.ZP.li.withConfig({displayName:"TableOfContents__ToCListStyles",componentId:"sc-1immg2w-1"})(["transition:all 200ms ease;& > a{color:",";border-left:",";padding-left:",";text-decoration:",";}"],(function(e){return e.activeId===e.item.url.slice(1)?"var(--clr-toc-hover-link)":"var(--clr-grey-3)"}),(function(e){return e.activeId===e.item.url.slice(1)?"3px solid var(--clr-toc-hover-link)":""}),(function(e){return e.activeId===e.item.url.slice(1)?"3px":""}),(function(e){return e.activeId===e.item.url.slice(1)?"underline":""}))},2041:function(e,t,r){"use strict";var n=r(7294),o=r(5444),a=r(9);t.Z=function(){var e=(0,o.K2)("2325592527").allMdx.group;return n.createElement(i,null,n.createElement(o.rU,{to:"/tags",className:"tag"},"All"),e.map((function(e,t){return n.createElement(o.rU,{key:t,to:"/tags/"+e.fieldValue,className:"tag"},e.fieldValue," (",e.totalCount,")")})))};var i=a.ZP.div.withConfig({displayName:"Tags__Wrapper",componentId:"p64dpx-0"})([".tag{background:var(--clr-tags-bg);color:var(--clr-code-font);padding:0.1rem 0.2rem;border-radius:var(--radius);font-size:80%;overflow-x:auto;text-transform:none;font-family:var(--fira-mono-font);margin-right:5px;font-weight:bold;transition:var(--transition);}a[aria-current='page']{background:var(--clr-tags-selected);color:var(--clr-tags-selected-font);}.tag:hover{background:var(--clr-green-1);color:black;}"])},8625:function(e,t,r){"use strict";var n=r(7294),o=r(5444),a=r(9);t.Z=function(e){var t=e.tags,r=e.isPost;return n.createElement(i,{isPost:r},t.map((function(e,t){return n.createElement(o.rU,{key:t,to:"/tags/"+e,className:"tag"},e)})))};var i=a.ZP.div.withConfig({displayName:"TagsList__Wrapper",componentId:"sc-1ax2mik-0"})(["display:flex;flex-wrap:wrap;justify-content:center;.tag{background:var(--clr-tags-bg);color:var(--clr-code-font);padding:0.1rem 0.2rem;border-radius:var(--radius);font-size:90%;text-transform:none;font-family:var(--fira-mono-font);margin-top:2px;margin-right:5px;margin-bottom:5px;font-weight:bold;transition:var(--transition);}a[aria-current='page']{background:var(--clr-tags-selected);color:var(--clr-tags-selected-font);}.tag:hover{background:var(--clr-green-1);color:black;}@media (min-width:992px){justify-content:",";}"],(function(e){return e.isPost?"center":"left"}))}}]);
//# sourceMappingURL=73b5b20277614ca7b7a3cae5cf59830929c697e4-8f3a5b94e74ee86cc0fb.js.map