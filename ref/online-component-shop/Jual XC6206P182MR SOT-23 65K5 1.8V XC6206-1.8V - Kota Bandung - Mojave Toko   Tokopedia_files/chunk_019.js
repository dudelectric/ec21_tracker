(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[74],{1003:function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"a",function(){return o});var n=function(e){return"number"!=typeof e?null:e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},a=function(e){if("number"!=typeof e)return"0";var t=e.toString().length;return t>3&&t<7?e.toString().replace(/\d{2}$/g,"rb").replace(/(\d?rb$)/g,",$1"):t>6&&t<10?e.toString().replace(/\d{5}$/g,"jt").replace(/(\d?jt$)/g,",$1"):t>9?n(e):e.toString()},o=function(e){if("number"!=typeof e)return"0";var t=e.toString().length;return t>3&&t<7?e.toString().replace(/\d{3}$/g,"Rb"):t>6&&t<10?e.toString().replace(/\d{6}$/g,"Jt"):n(e)}},1409:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(32),c=r(24),i=r(530),l=r.n(i),s=r(283),u=r(1003),d=r(20),p=r(25),m=r(949),b=r(460),f=r(591),g=r(3),h=3,x={"free-ongkir":"Gratis Ongkir",cashback:"Cashback"},y={en:{Applied:"Applied",Close:"Close",SeeAll:"See All",SoldOut:"Sold Out",Use:"Use",Copy:"Copy",Copied:"Copied",VoucherCodeCopied:"Voucher Code Copied",VoucherCode:"Voucher Code:",TnC:"Terms and Conditions",MinPurchase:"Min. Purchase:"},id:{Applied:"Diterapkan",Close:"Tutup",SeeAll:"Lihat Semua",SoldOut:"Habis",Use:"Gunakan",Copy:"Salin",Copied:"Tersalin",VoucherCodeCopied:"Kode Voucher telah tersalin",VoucherCode:"Kode Voucher:",TnC:"Syarat dan Ketentuan",MinPurchase:"Min. Pembelian:"}},v=r(2),O=r(135),j=r(19);var C,w,S,E=Object(v.css)("text-align:left;"),k=Object(v.css)("display:flex;position:relative;flex:0 0 216px;height:70px;margin:8px;filter:drop-shadow(0 1px 3px rgba(0,0,0,0.12));box-sizing:border-box;&:last-child:after{content:'';position:absolute;right:-17px;width:16px;height:70px;}*{box-sizing:border-box;}& > div{background-color:#fff;}"),N=Object(v.css)('position:relative;&:before{left:-2px;content:"";background:radial-gradient(circle,transparent 2px,rgb(255,255,255) 2px) -2px 2px / 5px 8px repeat-y;position:absolute;height:70px;width:3px;}}'),P=Object(v.css)('position:relative;&:before{background:radial-gradient(circle,transparent 2px,#009be8 2px) -1px 1px / 5px 8px repeat-y;content:"";position:absolute;height:70px;width:2px;}}'),V=Object(v.css)("flex:1 1 100px;padding:8px 0 8px 8px;white-space:nowrap;min-width:108px;cursor:pointer;&:hover > *{color:",g.i,";&:last-child{color:",O.c,";}}}"),A=Object(v.css)("text-transform:capitalize;"),T=Object(v.css)("margin-top:0;margin-bottom:2px;color:",O.e,";font-size:18px;font-weight:800;line-height:1.43;overflow:hidden;text-overflow:ellipsis;}"),D=Object(v.css)("margin-top:0;margin-bottom:0;font-size:9px;line-height:1.5;color:",O.c,";}"),I=Object(v.default)("div",(S="e1qur15t0",(w="target")in(C={target:"e1qur15t0"})?Object.defineProperty(C,w,{value:S,enumerable:!0,configurable:!0,writable:!0}):C[w]=S,C))(function(e){var t=e.bgImage;return{flex:"0 0 116px",display:"flex",width:"116px",backgroundImage:"url(".concat(t,")"),backgroundRepeatY:"no-repeat",backgroundSize:"100% 70px"}}),R=Object(v.css)("margin:0;font-size:10px;font-weight:bold;line-height:1.5;text-transform:uppercase;text-align:center;color:#fff;bottom:10px;right:10px;position:absolute;}"),z=Object(v.css)("position:absolute;height:24px;top:10px;right:10px;span{opacity:1;}}"),L=Object(v.css)("color:",g.k,";}"),_=Object(v.css)("width:915px;max-height:460px;&,& *{box-sizing:border-box;}@media (min-height:800px){max-height:660px;}@media (min-height:1000px){max-height:860px;}}"),M=Object(v.css)("border:1px solid ",g.u,";border-radius:8px;overflow:hidden;"),U=Object(v.css)("max-height:170px;padding:24px;color:rgba(49,53,59,0.68);text-align:left;overflow-y:auto;li{line-height:",j.lineHeight.lvl2,";font-size:",j.fontSize.lvl2,";}@media (min-height:800px){max-height:370px;}@media (min-height:1000px){max-height:570px;}"),G=(g.p,j.fontSize.lvl2,Object(v.css)("border:1px solid ",g.u,";border-radius:8px;")),$=Object(v.css)("padding:16px;border-bottom:1px solid ",g.u,";text-transform:capitalize;"),q=Object(v.css)("margin:16px 32px;");function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var K=function(e){var t,r=e.show,i=e.setShow,s=e.banner,u=e.tnc,p=e.voucherType,x=e.voucherValue,v=e.minSpend,O=e.code,j=e.status,C=H(Object(n.useState)(!1),2),w=C[0],S=C[1],k=Object(n.useContext)(d.a).lang,N=y[k];return t=j===h?N.SoldOut:w?N.Copied:N.Copy,a.a.createElement(b.default,{display:r,title:"Detail Voucher",zIndex:1053,onClose:function(){i(!1),S(!1)},className:_,"data-testid":"popupDetailVoucher",id:"modal-merchant-voucher-".concat(O)},a.a.createElement(m.a.Row,null,a.a.createElement(m.a.Col,{span:8},a.a.createElement("div",{className:M},a.a.createElement("div",{"data-testid":"imgPopupDetailVoucher"},a.a.createElement(f.a,{ratio:"3:1",src:s})),a.a.createElement("div",{className:U,"data-testid":"txtPopupDetailVoucherTnc"},a.a.createElement(c.a,{bold:!0,main:!0,body:1,margin:"0 0 16px"},p," ",x),a.a.createElement(c.a,{bold:!0,main:!0,body:3,margin:"0 0 8px"},N.TnC),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:u}})))),a.a.createElement(m.a.Col,{span:4},a.a.createElement("div",{className:G},a.a.createElement(c.a,{bold:!0,main:!0,body:3,margin:"0",className:$,"data-testid":"lblPopupDetailVoucherType"},p," ",x),a.a.createElement(c.a,{main:!0,body:3,margin:"16px 32px",className:E},N.MinPurchase,a.a.createElement("b",{"data-testid":"popupDetailVoucherValue"},v)),a.a.createElement(c.a,{main:!0,body:3,margin:"16px 32px",className:E},N.VoucherCode,a.a.createElement("span",{style:{color:g.i}},a.a.createElement("b",{"data-testid":"popupDetailVoucherCode"},O))),a.a.createElement("div",{className:q},a.a.createElement(o.default,{block:!0,main:!0,filled:!w,ghost:w,small:!0,disabled:j===h,"data-testid":"btnPopupDetailVoucherCopy",onClick:function(){l()(O),S(!0)}},t))))))},B=r(1969),W=r.n(B),F=r(1970),X=r.n(F);function J(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Y={"free-ongkir":W.a,cashback:X.a,discount:X.a},Q=function(e){var t,r,i,p=e.amount,m=e.amountType,b=e.isOwner,f=e.minimumSpend,g=e.voucherType,v=e.voucherCode,O=e.banner,j=e.tnc,C=e.statusId,w=e.copiedVoucherId,S=e.voucherId,E=e.onApplyVoucher,_=e.onShowToaster,M=e.onClickVoucher,U=e.onImpression,G=e.position,$=J(Object(n.useState)(!1),2),q=$[0],H=$[1],B=Object(n.useContext)(d.a).lang,W=2===m?"".concat(p,"%"):"".concat(Object(u.a)(p)),F=Object(u.b)(f).replace(",0",""),X=null==Y?void 0:Y[g],Q=Object(s.a)(function(){return U({name:"merchant voucher",bannerURL:O,code:v,id:S,position:G})},{},!0),Z=function(){E(S,{voucherCode:v,position:G}),_({text:y[B].VoucherCodeCopied,error:!1}),l()(v)};return a.a.createElement("div",{ref:Q,className:k,id:"merchant-voucher-".concat(v),"data-testid":"MerchantVoucher"},a.a.createElement("div",{className:N}),a.a.createElement("div",{className:V,onClick:function(){H(!0),M(S,{voucherCode:v,position:G})}},a.a.createElement(c.a,{body:3,main:!0,margin:"0",className:A,"data-testid":"MerchantVoucherType"},x[g]),a.a.createElement("h2",{className:T,"data-testid":"MerchantVoucherValue"},W),a.a.createElement("p",{className:D},"min. Pembelian ",a.a.createElement("strong",{"data-testid":"MerchantVoucherMinSpend"},F))),a.a.createElement(I,{bgImage:X},!b&&(i={micro:!0,ghost:r=w===S,secondary:r,onClick:Z,className:"".concat(z," ").concat(r&&L),disabled:C===h,"data-testid":"MerchantVoucherCopy"},t=C===h?y[B].SoldOut:r?y[B].Copied:y[B].Copy,a.a.createElement(o.default,i,t)),a.a.createElement("div",{className:R},v)),a.a.createElement("div",{className:P}),a.a.createElement(K,{show:q,setShow:H,banner:O,tnc:j,voucherType:x[g],voucherValue:W,minSpend:F,code:v,status:C}))};Q.defaultProps={amount:0,amountType:0,copiedVoucherId:0,isOwner:!1,minimumSpend:0,onApplyVoucher:function(){},onClickVoucher:function(){},onShowToaster:function(){},position:0,statusId:0,voucherCode:"",voucherId:0,voucherType:"",banner:"",tnc:"",onImpression:p.a};t.default=Q},1969:function(e,t){e.exports="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/3f2b3425.svg"},1970:function(e,t){e.exports="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/c0c8b6b0.svg"},530:function(e,t,r){"use strict";var n=r(541),a="Copy to clipboard: #{key}, Enter";e.exports=function(e,t){var r,o,c,i,l,s,u=!1;t||(t={}),r=t.debug||!1;try{if(c=n(),i=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",document.body.appendChild(s),i.selectNode(s),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){r&&console.error("unable to copy using execCommand: ",d),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData("text",e),u=!0}catch(d){r&&console.error("unable to copy using clipboardData: ",d),r&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:a),window.prompt(o,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),s&&document.body.removeChild(s),c()}return u}},531:function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(t,"a",function(){return n})},541:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},591:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(1),c=r(2),i=r(70);var l=function(e){var t=e.ratio;return[{test:"1:1"===t,value:"100%"},{test:"2:1"===t,value:"50%"},{test:"3:1"===t,value:"33.33%"},{test:"4:1"===t,value:"25%"},{test:"16:1"===t,value:"33.33%"},{test:!0,value:"100%"}].find(function(e){return e.test}).value},s=function(e){var t=e.isLoading,r=e.src;return[{test:t,value:"linear-gradient(65deg, ".concat(i.d,", ").concat(i.a,")")},{test:void 0!==r,value:"url(".concat(r,")")},{test:!0,value:"none"}].find(function(e){return e.test}).value},u=Object(c.default)("picture",{target:"ebt83iu0"})("label:unf-img;width:100%;border-radius:4px;height:",l,";display:flex;background-image:",s,";"),d=Object(c.default)("img",{target:"ebt83iu1"})("display:",function(e){return e.isLoading?"none":""},";width:100%;height:100%;object-fit:cover;border-radius:4px;"),p=function(e){var t=e.ratio,r=e.loading,n=e.className,o=e.src,c=e.alt;return a.a.createElement(u,{ratio:t,isLoading:r,className:n},o&&a.a.createElement(d,{src:o,alt:c,loading:"lazy",isLoading:r}))};p.defaultProps={ratio:"1:1",src:"",alt:""},p.propTypes={className:o.string,loading:o.bool,ratio:o.string,src:o.string,alt:o.string};t.a=p},949:function(e,t,r){"use strict";var n=r(55),a=r(486),o=r(136),c=r(0),i=r.n(c),l=r(51),s=r(454),u=Object(c.createContext)(),d=function(e){var t=e.children,r=e.maxCol,n=e.gutter;return i.a.createElement(u.Provider,{value:{maxCol:r,gutter:n}},t)};d.propTypes={children:l.node.isRequired,gutter:l.number.isRequired,maxCol:l.number.isRequired};var p=d,m=function(e){switch(e){case"baseline":case"stretch":case"center":return e;case"end":case"start":return"flex-".concat(e);default:return console.error("Invalid align value('".concat(e,"') provided.")),null}},b=function(e){switch(e){case"between":case"around":return"space-".concat(e);case"center":return e;case"end":case"start":return"flex-".concat(e);default:return console.error("Invalid justify value('".concat(e,"') provided.")),null}};function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var g=function(e){var t=e.gutter,r=e.outerGutter,n=e.justify,a=e.align;return Object(s.css)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(t){Object(o.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({display:"flex",flexWrap:"wrap",marginLeft:r-t/2,marginRight:r-t/2,boxSizing:"border-box"},n&&{justifyContent:b(n)},{},a&&{alignItems:m(a)}))},h=Object(s.css)({overflowX:"hidden"}),x=function(e){var t=e.children,r=e.align,o=e.gutter,c=e.justify,l=e.maxCol,u=e.outerGutter,d=e.className,m=Object(a.a)(e,["children","align","gutter","justify","maxCol","outerGutter","className"]),b=g({gutter:o,outerGutter:u,justify:c,align:r}),f=function(){return i.a.createElement("div",Object(n.a)({className:Object(s.cx)(b,d)},m),t)};return i.a.createElement(p,{maxCol:l,gutter:o},u?f():i.a.createElement("div",{className:h},f()))},y=x;x.propTypes={align:Object(l.oneOf)(["baseline","stretch","center","end","start"]),children:l.node,className:l.string,gutter:l.number,justify:Object(l.oneOf)(["between","around","center","end","start"]),maxCol:l.number,outerGutter:l.number},x.defaultProps={className:"",gutter:8,outerGutter:0,maxCol:12,justify:null,align:null,children:null};var v=r(82),O=r(531);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach(function(t){Object(o.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var w=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;switch(e){case"auto":return{flex:"0 0 auto",width:"auto",maxWidth:"100%",display:"block"};case 0:return{flexGrow:1,flexBasis:0,maxWidth:"100%",display:"block"};case-1:return{display:"none"};default:var n=e>t?function(e,t,r){return console.error("Col span(".concat(e,") is larger than allowed maxCol(").concat(t,") | scrFrom: ").concat(r)),t}(e,t,r):e;return{flex:"0 0 ".concat(n/t*100,"%"),maxWidth:"".concat(n/t*100,"%"),display:"block"}}},S=function(e){var t=e.gutter,r=e.maxCol,n=e.span,a=e.alignSelf,c=C({paddingLeft:t/2,paddingRight:t/2,boxSizing:"border-box"},a&&{alignSelf:m(a)});return Object(s.css)(C({},c,{},"object"===Object(v.a)(n)?function(e,t){return Object.assign.apply(Object,[{}].concat(Object(O.a)(e.map(function(e){if("number"==typeof e||"string"==typeof e)return w(e,t);var r=e.span,n=void 0===r?0:r,a=e.scrFrom,c=void 0===a?0:a;return c?Object(o.a)({},"@media screen and (min-width: ".concat(c,"px)"),w(n,t,c)):w(n,t,c)}))))}(n,r):w(n,r)))},E=function(e){var t=e.children,r=e.span,o=e.alignSelf,l=e.className,d=Object(a.a)(e,["children","span","alignSelf","className"]),p=Object(c.useContext)(u),m=p.gutter,b=p.maxCol,f=S({gutter:m,maxCol:b,span:r,alignSelf:o});return i.a.createElement("div",Object(n.a)({className:Object(s.cx)(f,l)},d),t)};E.propTypes={alignSelf:Object(l.oneOf)(["baseline","stretch","center","end","start"]),children:l.node,className:l.string,span:Object(l.oneOfType)([l.string,l.number,Object(l.arrayOf)(l.object)])},E.defaultProps={alignSelf:null,children:null,className:"",span:0};var k=E;t.a={Row:y,Col:k}}}]);
//# sourceMappingURL=https://s3.ap-southeast-1.amazonaws.com/sources-maps/tkpd-web/tokopedia-lite/v2/zeus/production/merchant-voucher.080645dfe706af4ddf60b02bc21503f6.js.map