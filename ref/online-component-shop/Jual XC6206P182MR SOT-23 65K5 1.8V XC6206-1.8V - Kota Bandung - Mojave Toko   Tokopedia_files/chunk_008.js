(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[112],{1386:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),l=t(13),c=t(468),r=t(460),o=t(24),d=t(20),u=t(522),m=t.n(u),s=t(476),f=t(1305),v=t(2236),k=t.n(v),g=t(472),S=t(1209),p=t(467);function E(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],a=!0,i=!1,l=void 0;try{for(var c,r=e[Symbol.iterator]();!(a=(c=r.next()).done)&&(t.push(c.value),!n||t.length!==n);a=!0);}catch(o){i=!0,l=o}finally{try{a||null==r.return||r.return()}finally{if(i)throw l}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=Object(a.memo)(function(e){var n,t,u=e.catalogID,v=e.productID,b=E(Object(a.useState)(!1),2),y=b[0],N=b[1],h=Object(a.useContext)(d.a).lang,D=Object(l.d)(k.a,{ssr:!1,variables:{catalogID:u.toString()}}),_=D.data,O=D.loading,w=D.error,I=(null==_?void 0:null===(n=_.ProductCatalogQuery)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.catalog)||{},F=(null==I?void 0:I.name)||"",j=(null==I?void 0:I.url)||"",A=(null==I?void 0:I.specification)||[],C=Object(a.useMemo)(function(){return Object(f.b)(A)},[A]);return O||w||A.length<1?null:i.a.createElement("div",{className:S.o},i.a.createElement(o.a,{alternate:!0,tag:6,margin:"0 0 16px",className:s.v},p.Ob[h]),i.a.createElement("table",{className:S.n},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{colSpan:2},i.a.createElement("b",null,p.w[h])),i.a.createElement("td",null,i.a.createElement("a",{href:j,target:"__blank",onClick:function(){Object(g.c)({productID:v,catalogID:u,catalogName:F})}},F))),i.a.createElement("tr",null,i.a.createElement("td",{colSpan:3},"\xa0")),C.slice(0,8).map(function(e,n){return i.a.createElement("tr",{key:"spec-".concat(n)},e.map(function(e,t){return i.a.createElement("td",{key:"spec-".concat(n,"-value-").concat(t),dangerouslySetInnerHTML:{__html:m()(e)}})}))}))),i.a.createElement(c.default,{onClick:function(){N(!0),Object(g.W)({productID:v,catalogID:u,catalogName:F})}},i.a.createElement("b",null,p.Eb[h])),i.a.createElement(r.default,{display:y,onClose:function(){return N(!1)},title:p.Pb[h],zIndex:1053,className:S.h},i.a.createElement("div",{className:S.i},i.a.createElement("table",{className:S.n},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{colSpan:2},p.w[h]),i.a.createElement("td",null,i.a.createElement("a",{href:j,target:"__blank",onClick:function(){Object(g.d)({productID:v,catalogID:u,catalogName:F})}},F))),i.a.createElement("tr",null,i.a.createElement("td",{colSpan:3},"\xa0")),C.map(function(e,n){return i.a.createElement("tr",{key:"modal-spec-".concat(n)},e.map(function(e,t){return i.a.createElement("td",{key:"modal-spec-".concat(n,"-value-").concat(t),dangerouslySetInnerHTML:{__html:m()(e)}})}))}))))))})},2236:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getSpecification"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"catalogID"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ProductCatalogQuery"},arguments:[{kind:"Argument",name:{kind:"Name",value:"catalog_id"},value:{kind:"Variable",name:{kind:"Name",value:"catalogID"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"header"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"process_time"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalog"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"specification"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"row"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"key"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}]}}]}}]}}]}}],loc:{start:0,end:172}};t.loc.source={body:"query getSpecification($catalogID:String){ProductCatalogQuery(catalog_id:$catalogID){header{process_time status}data{catalog{name url specification{name row{key value}}}}}}",name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function i(e,n){for(var t=0;t<e.definitions.length;t++){var a=e.definitions[t];if(a.name&&a.name.value==n)return a}}t.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var a=n.type;"NamedType"===a.kind&&t.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,t)}),n.definitions&&n.definitions.forEach(function(n){e(n,t)})}(e,n),a[e.name.value]=n}}),e.exports=t,e.exports.getSpecification=function(e,n){var t={kind:e.kind,definitions:[i(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var l=a[n]||new Set,c=new Set,r=new Set;for(l.forEach(function(e){r.add(e)});r.size>0;){var o=r;r=new Set,o.forEach(function(e){c.has(e)||(c.add(e),(a[e]||new Set).forEach(function(e){r.add(e)}))})}return c.forEach(function(n){var a=i(e,n);a&&t.definitions.push(a)}),t}(t,"getSpecification")}}]);
//# sourceMappingURL=https://s3.ap-southeast-1.amazonaws.com/sources-maps/tkpd-web/tokopedia-lite/v2/zeus/production/pdp-specification.1cd595d63ec9e72967fe5e254a35a728.js.map