(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[96],{1209:function(t,e,n){"use strict";n.d(e,"d",function(){return c}),n.d(e,"c",function(){return l}),n.d(e,"m",function(){return d}),n.d(e,"l",function(){return h}),n.d(e,"j",function(){return f}),n.d(e,"k",function(){return m}),n.d(e,"f",function(){return p}),n.d(e,"g",function(){return g}),n.d(e,"n",function(){return v}),n.d(e,"h",function(){return b}),n.d(e,"i",function(){return y}),n.d(e,"o",function(){return $}),n.d(e,"b",function(){return S}),n.d(e,"e",function(){return k}),n.d(e,"a",function(){return D});var i=n(2),r=n(3),a=n(19);var o,s,u,c=Object(i.css)("padding:24px 0;border-bottom:1px solid ",r.u,";"),l=Object(i.css)("overflow-wrap:break-word;white-space:pre-line;a{color:",r.i,";text-decoration:none;&:hover{color:",r.j,";}}"),d=Object(i.css)("padding-top:24px;"),h=Object(i.css)("padding-bottom:8px;margin-bottom:8px;border-bottom:1px solid ",r.u,";&:last-child{margin-bottom:0;}"),f=Object(i.css)("& > br{display:none;}& > p,& > ul,& > ul > li,& > ol,& > ol > li{display:inline;margin-right:2px;}strong,b,i,u{font-weight:normal;text-decoration:none;}"),m=Object(i.css)("height:18px;"),p=Object(i.css)("width:700px;max-height:460px;&,& *{box-sizing:border-box;}@media (min-height:800px){max-height:660px;}}"),g=Object(i.css)("text-align:left;max-height:350px;overflow-y:auto;@media (min-height:800px){max-height:550px;}"),v=Object(i.css)("width:100%;margin-bottom:16px;text-align:left;tr{&:nth-child(odd) > td{background-color:",r.q,";}& > td{padding:11px 12px;color:",r.t,";line-height:",a.lineHeight.lvl2,";font-size:",a.fontSize.lvl2,";&:first-child{border-radius:4px 0 0 4px;}&:last-child{border-radius:0 4px 4px 0;}&:only-child{border-radius:4px;}}}"),b=Object(i.css)("width:700px;max-height:460px;&,& *{box-sizing:border-box;}@media (min-height:800px){max-height:660px;}}"),y=Object(i.css)("text-align:left;max-height:350px;overflow-y:auto;@media (min-height:800px){max-height:550px;}"),$=Object(i.css)("padding:24px 0;border-bottom:1px solid ",r.u,";"),S=Object(i.css)("text-align:left;"),k=Object(i.css)("float:right;"),D=Object(i.default)("div",(u="ex17ta20",(s="target")in(o={target:"ex17ta20"})?Object.defineProperty(o,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[s]=u,o))(function(t){var e=t.row,n=t.containerHeight;return{"& > p":{position:"relative",width:"100%",height:n,maxHeight:n,overflow:"hidden","&:after":{content:'""',position:"absolute",right:"0",bottom:"0",width:"50px",height:t.textHeight,background:"linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 60%)",textAlign:"right"},"@supports ( -webkit-line-clamp: 2)":{height:"auto",textOverflow:"ellipsis",display:"-webkit-box"," -webkit-line-clamp":e," -webkit-box-orient":"vertical","&:after":{display:"none"}}}}})},1446:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),a=n(463),o=n(17),s=n(13),u=n(522),c=n.n(u),l=n(468),d=n(24),h=n(20),f=n(467),m=n(2043),p=n.n(m),g=n(476),v=n(2044),b=n(1209),y=n(2045);function $(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(u){r=!0,a=u}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.default=function(t){var e,n=t.productInfoBasic,u=t.shopId,m=t.isBot,S=$(Object(i.useState)(!1),2),k=S[0],D=S[1],x=$(Object(i.useState)(-1),2),O=x[0],M=x[1],w=Object(i.useContext)(h.a).lang,N=f.B[w],_=c()((null==n?void 0:n.name)||""),j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return t};return t.replace(/(https?:\/\/(((www|m)\.)?tokopedia\.com)((\/[A-Za-z0-9\-\_]+)+)?)(\?(([A-Za-z0-9\-\_]+=([A-Za-z0-9\-\_]+)?)&?)+)?/g,e)}(c()((null==n?void 0:n.description)||""),function(t){return'<a target="_blank" href="'.concat(t,'">').concat(t,"</a>")}),H=(null==n?void 0:n.catalogID)||0,E=(null==n?void 0:n.id)||0,P=Object(s.d)(p.a,{variables:{sid:u},skip:""===u||"0"===u,ssr:!1}),A=P.data,I=P.loading,T=(null==A?void 0:null===(e=A.shopNotesByShopID)||void 0===e?void 0:e.result)||[],L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;t>=0&&o.a.pushObject({event:"clickPDP",eventCategory:"product detail page",eventAction:"click - catatan toko",eventLabel:"".concat(c()(T[t].title)," - ").concat(T[t].link)}),M(t),D(function(t){return!t})};return r.a.createElement(i.Fragment,null,r.a.createElement("div",{className:b.d},r.a.createElement(d.a,{className:"".concat(g.y," ").concat(g.z),tag:2},N.description," ",r.a.createElement("span",{"data-testid":"lblPDPDeskripsiProdukTitle",dangerouslySetInnerHTML:{__html:_}})),r.a.createElement(d.a,{"data-testid":"lblPDPDeskripsiProduk",className:b.c,alternate:!0,body:3,margin:"0",dangerouslySetInnerHTML:{__html:j}})),r.a.createElement(y.a,{forceRender:m,catalogID:H,productID:E}),T.length>0&&!I&&r.a.createElement("div",{className:b.m},r.a.createElement(d.a,{"data-testid":"lblPDPCatatanToko",alternate:!0,tag:6,margin:"0 0 16px",className:g.v},f.Kb[w]),r.a.createElement("ul",null,T.map(function(t,e){return r.a.createElement("li",{"data-testid":"lblPDPListCatatanToko[".concat(e,"]"),key:"shop_notes_".concat(e),className:b.l},r.a.createElement(d.a,{main:!0,bold:!0,body:3,margin:"0 0 4px",dangerouslySetInnerHTML:{__html:c()(t.title)}}),r.a.createElement(b.a,{row:2,containerHeight:"40px",textHeight:"20px"},r.a.createElement(d.a,{alternate:!0,body:3,margin:"0",dangerouslySetInnerHTML:{__html:c()(t.content||"")},className:b.j})),r.a.createElement(d.a,{disabled:!0,body:4,margin:"4px 0 0",className:b.k},t.updateTime?"".concat(Object(a.default)(new Date(1e3*t.updateTime)).format("DD MMM YYYY HH:mm")," WIB"):null,r.a.createElement(l.default,{className:b.e,onClick:function(){return L(e)},"data-testid":"btnPDPCatatanToko[".concat(e,"]")},r.a.createElement("b",null,f.Eb[w]))))})),O>=0&&r.a.createElement(v.a,{handleCloseModal:function(){return L(-1)},shopNotes:T,showModal:k,selectedNoteIndex:O,modalTitle:f.Kb[w]})))}},2043:function(t,e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PDPShopNote"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sid"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shopNotesByShopID"},arguments:[{kind:"Argument",name:{kind:"Name",value:"shopID"},value:{kind:"Variable",name:{kind:"Name",value:"sid"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"result"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"link"},name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updateTime"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"error"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:123}};n.loc.source={body:"query PDPShopNote($sid:String!){shopNotesByShopID(shopID:$sid){result{id title content link:url updateTime}error{message}}}",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function r(t,e){for(var n=0;n<t.definitions.length;n++){var i=t.definitions[n];if(i.name&&i.name.value==e)return i}}n.definitions.forEach(function(t){if(t.name){var e=new Set;!function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){t(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){t(e,n)}),e.definitions&&e.definitions.forEach(function(e){t(e,n)})}(t,e),i[t.name.value]=e}}),t.exports=n,t.exports.PDPShopNote=function(t,e){var n={kind:t.kind,definitions:[r(t,e)]};t.hasOwnProperty("loc")&&(n.loc=t.loc);var a=i[e]||new Set,o=new Set,s=new Set;for(a.forEach(function(t){s.add(t)});s.size>0;){var u=s;s=new Set,u.forEach(function(t){o.has(t)||(o.add(t),(i[t]||new Set).forEach(function(t){s.add(t)}))})}return o.forEach(function(e){var i=r(t,e);i&&n.definitions.push(i)}),n}(n,"PDPShopNote")},2044:function(t,e,n){"use strict";var i=n(0),r=n.n(i),a=n(9);function o(t,e){if(null==t)return{};var n,i,r=s(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function s(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}var u=Object(a.a)({chunkName:function(){return"pdp-modal-notes"},isReady:function(t){return!!n.m[this.resolve(t)]},requireAsync:function(){return n.e(101).then(n.bind(null,1385))},requireSync:function t(e){var i=this.resolve(e);return n(i)},resolve:function t(){return 1385}},{fallback:null,ssr:!1}),c=function(t){var e=t.showModal,n=t.handleCloseModal,i=o(t,["showModal","handleCloseModal"]);return e?r.a.createElement(u,Object.assign({showModal:e,handleCloseModal:n},i)):null};e.a=c},2045:function(t,e,n){"use strict";var i=n(0),r=n.n(i),a=n(9),o=n(1132),s=Object(a.a)({chunkName:function(){return"pdp-specification"},isReady:function(t){return!!n.m[this.resolve(t)]},requireAsync:function(){return n.e(112).then(n.bind(null,1386))},requireSync:function t(e){var i=this.resolve(e);return n(i)},resolve:function t(){return 1386}}),u=function(t){return r.a.createElement(o.a,Object.assign({},t,{LoadableComponent:s,loading:function(){return null}}))};e.a=u},463:function(t,e,n){"use strict";n.r(e);var i="millisecond",r="second",a="minute",o="hour",s="day",u="week",c="month",l="year",d=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,h=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},p={padStart:m,padZoneStr:function(t){var e=Math.abs(t),n=Math.floor(e/60),i=e%60;return(t<=0?"+":"-")+m(n,2,"0")+":"+m(i,2,"0")},monthDiff:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(n,"months"),r=e-i<0,a=t.clone().add(n+(r?-1:1),"months");return Number(-(n+(e-i)/(r?i-a:a-i))||0)},absFloor:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},prettyUnit:function(t){return{M:c,y:l,w:u,d:s,h:o,m:a,s:r,ms:i}[t]||String(t||"").toLowerCase().replace(/s$/,"")},isUndefined:function(t){return void 0===t}},g="en",v={};v[g]=f;var b=function(t){return t instanceof D},y=function(t,e,n){var i;if(!t)return null;if("string"==typeof t)v[t]&&(i=t),e&&(v[t]=e,i=t);else{var r=t.name;v[r]=t,i=r}return n||(g=i),i},$=function(t,e){if(b(t))return t.clone();var n=e?"string"==typeof e?{format:e}:e:{};return n.date=t,new D(n)},S=function(t,e){return $(t,{locale:e.$L})},k=p;k.parseLocale=y,k.isDayjs=b,k.wrapper=S;var D=function(){function t(t){this.parse(t)}var e=t.prototype;return e.parse=function(t){var e,n;this.$d=null===(e=t.date)?new Date(NaN):k.isUndefined(e)?new Date:e instanceof Date?e:"string"==typeof e&&/.*[^Z]$/i.test(e)&&(n=e.match(d))?new Date(n[1],n[2]-1,n[3]||1,n[4]||0,n[5]||0,n[6]||0,n[7]||0):new Date(e),this.init(t)},e.init=function(t){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds(),this.$L=this.$L||y(t.locale,null,!0)||g},e.$utils=function(){return k},e.isValid=function(){return!("Invalid Date"===this.$d.toString())},e.isSame=function(t,e){var n=$(t);return this.startOf(e)<=n&&n<=this.endOf(e)},e.isAfter=function(t,e){return $(t)<this.startOf(e)},e.isBefore=function(t,e){return this.endOf(e)<$(t)},e.year=function(){return this.$y},e.month=function(){return this.$M},e.day=function(){return this.$W},e.date=function(){return this.$D},e.hour=function(){return this.$H},e.minute=function(){return this.$m},e.second=function(){return this.$s},e.millisecond=function(){return this.$ms},e.unix=function(){return Math.floor(this.valueOf()/1e3)},e.valueOf=function(){return this.$d.getTime()},e.startOf=function(t,e){var n=this,i=!!k.isUndefined(e)||e,d=function(t,e){var r=S(new Date(n.$y,e,t),n);return i?r:r.endOf(s)},h=function(t,e){return S(n.toDate()[t].apply(n.toDate(),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)};switch(k.prettyUnit(t)){case l:return i?d(1,0):d(31,11);case c:return i?d(1,this.$M):d(0,this.$M+1);case u:var f=this.$locale().weekStart||0;return d(i?this.$D-(this.$W-f):this.$D+(6-(this.$W-f)),this.$M);case s:case"date":return h("setHours",0);case o:return h("setMinutes",1);case a:return h("setSeconds",2);case r:return h("setMilliseconds",3);default:return this.clone()}},e.endOf=function(t){return this.startOf(t,!1)},e.$set=function(t,e){var n,u=k.prettyUnit(t),d=(n={},n[s]="setDate",n.date="setDate",n[c]="setMonth",n[l]="setFullYear",n[o]="setHours",n[a]="setMinutes",n[r]="setSeconds",n[i]="setMilliseconds",n)[u],h=u===s?this.$D+(e-this.$W):e;return this.$d[d]&&this.$d[d](h),this.init(),this},e.set=function(t,e){return this.clone().$set(t,e)},e.add=function(t,e){var n,i=this;t=Number(t);var d=k.prettyUnit(e),h=function(e,n){var r=i.set("date",1).set(e,n+t);return r.set("date",Math.min(i.$D,r.daysInMonth()))},f=function(e){var n=new Date(i.$d);return n.setDate(n.getDate()+e*t),S(n,i)};if(d===c)return h(c,this.$M);if(d===l)return h(l,this.$y);if(d===s)return f(1);if(d===u)return f(7);var m=(n={},n[a]=6e4,n[o]=36e5,n[r]=1e3,n)[d]||1,p=this.valueOf()+t*m;return S(p,this)},e.subtract=function(t,e){return this.add(-1*t,e)},e.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=k.padZoneStr(this.$d.getTimezoneOffset()),r=this.$locale(),a=r.weekdays,o=r.months,s=function(t,e,n,i){return t&&t[e]||n[e].substr(0,i)},u=function(t){return 0===e.$H?12:k.padStart(e.$H<13?e.$H:e.$H-12,"hh"===t?2:1,"0")},c={YY:String(this.$y).slice(-2),YYYY:String(this.$y),M:String(this.$M+1),MM:k.padStart(this.$M+1,2,"0"),MMM:s(r.monthsShort,this.$M,o,3),MMMM:o[this.$M],D:String(this.$D),DD:k.padStart(this.$D,2,"0"),d:String(this.$W),dd:s(r.weekdaysMin,this.$W,a,2),ddd:s(r.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(this.$H),HH:k.padStart(this.$H,2,"0"),h:u("h"),hh:u("hh"),a:this.$H<12?"am":"pm",A:this.$H<12?"AM":"PM",m:String(this.$m),mm:k.padStart(this.$m,2,"0"),s:String(this.$s),ss:k.padStart(this.$s,2,"0"),SSS:k.padStart(this.$ms,3,"0"),Z:i};return n.replace(h,function(t){return t.indexOf("[")>-1?t.replace(/\[|\]/g,""):c[t]||i.replace(":","")})},e.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},e.diff=function(t,e,n){var i,d=k.prettyUnit(e),h=$(t),f=6e4*(h.utcOffset()-this.utcOffset()),m=this-h,p=k.monthDiff(this,h);return p=(i={},i[l]=p/12,i[c]=p,i.quarter=p/3,i[u]=(m-f)/6048e5,i[s]=(m-f)/864e5,i[o]=m/36e5,i[a]=m/6e4,i[r]=m/1e3,i)[d]||m,n?p:k.absFloor(p)},e.daysInMonth=function(){return this.endOf(c).$D},e.$locale=function(){return v[this.$L]},e.locale=function(t,e){var n=this.clone();return n.$L=y(t,e,!0),n},e.clone=function(){return S(this.toDate(),this)},e.toDate=function(){return new Date(this.$d)},e.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},e.toJSON=function(){return this.toISOString()},e.toISOString=function(){return this.$d.toISOString()},e.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},e.toString=function(){return this.$d.toUTCString()},t}();$.prototype=D.prototype,$.extend=function(t,e){return t(e,D,$),$},$.locale=y,$.isDayjs=b,$.unix=function(t){return $(1e3*t)},$.en=v[g];e.default=$}}]);
//# sourceMappingURL=https://s3.ap-southeast-1.amazonaws.com/sources-maps/tkpd-web/tokopedia-lite/v2/zeus/production/pdp-description.b089a54edd03f55e08276e2e0ddf4efe.js.map