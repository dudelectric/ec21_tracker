(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[97],{1414:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(488),u=n(2049),i=n.n(u),c=n(151),d=n(506),l=n(1210),p=n(2158),s=n.n(p),f=Object(l.b)({talk:s.a}),b=Object(l.c)(f),g=n(2),h=n(3),O=Object(g.css)("padding-bottom:24px;border-bottom:1px solid ",h.u,";ul{list-style:none;padding-left:0;}textarea{padding:1rem !important;}");function _(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],o=!0,r=!1,a=void 0;try{for(var u,i=t[Symbol.iterator]();!(o=(u=i.next()).done)&&(n.push(u.value),!e||n.length!==e);o=!0);}catch(c){r=!0,a=c}finally{try{o||null==i.return||i.return()}finally{if(r)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(t){var e,n=t.isLoggedIn,u=t.productInfoBasic,l=t.productShopInfo,p=Object(o.useContext)(c.a).showChatWidget,s=_(Object(o.useContext)(d.a),2)[1],f=Object(o.useRef)(null),g=(null==u?void 0:u.id)||0,h=parseInt(null==l?void 0:null===(e=l.shopCore)||void 0===e?void 0:e.shopID,0)||0;return Object(o.useEffect)(function(){return f.current=window.toggleChatButton,window.toggleChatButton=function(){n?p({page:"pdp",shopId:h}):s({type:"SET_SHOW_LOGIN_POPUP",payload:!0})},function(){window.toggleChatButton=f.current}},[n,s,h,p]),r.a.createElement("div",{className:O},r.a.createElement(a.Provider,{store:b},r.a.createElement(i.a,{productId:g,shopId:h,page:"product-talk"})))};m.defaultProps={productInfoBasic:{},productShopInfo:{}};e.default=Object(o.memo)(m)}}]);
//# sourceMappingURL=https://s3.ap-southeast-1.amazonaws.com/sources-maps/tkpd-web/tokopedia-lite/v2/zeus/production/pdp-discussion.91a7eccb4c79accd1ef25f0a9e16cd41.js.map