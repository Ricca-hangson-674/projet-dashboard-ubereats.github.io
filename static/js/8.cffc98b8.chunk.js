(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[8],{553:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com"}},554:function(e,t,n){"use strict";n(0);var a=n(4),r=n(2),o=function(e){var t=e.variant,n=e.children;return Object(r.jsx)(a.a,{color:t,children:n})};o.defaultProps={variant:"info"},t.a=o},557:function(e,t,n){"use strict";n(0);var a=n(4),r=n(2);t.a=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(a.U,{color:"primary",children:Object(r.jsx)("span",{className:"sr-only",children:"Loading ..."})})})}},604:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));var a=n(551),r=n.n(a),o=n(552),s=n(555),i=n.n(s),c=n(553),u=function(){var e=Object(o.a)(r.a.mark((function e(){var t,n,a,o,s,u,l,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:null,e.prev=1,n={headers:{"Content-Type":"application/json"}},a="local"===c.a.env?c.a.endpointLocal:c.a.endpointProd,o=t?"".concat(a,"/api/foods/").concat(t):"".concat(a,"/api/foods"),e.next=7,i.a.get("".concat(o),n);case 7:return s=e.sent,u=s.data,e.abrupt("return",{status:!0,data:u});case 12:return e.prev=12,e.t0=e.catch(1),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"}},a="local"===c.a.env?c.a.endpointLocal:c.a.endpointProd,e.next=5,i.a.delete("".concat(a,"/api/foods/").concat(t),n);case 5:return o=e.sent,s=o.data,e.abrupt("return",{status:!0,data:s});case 10:return e.prev=10,e.t0=e.catch(0),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,u,l,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=d.length>1&&void 0!==d[1]?d[1]:null,e.prev=1,o={headers:{"Content-Type":"application/json"}},s="local"===c.a.env?c.a.endpointLocal:c.a.endpointProd,u=null,!n){e.next=11;break}return e.next=8,i.a.put("".concat(s,"/api/foods/").concat(n),t,o);case 8:u=e.sent,e.next=14;break;case 11:return e.next=13,i.a.post("".concat(s,"/api/foods"),t,o);case 13:u=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(a=u)||void 0===a?void 0:a.data});case 17:return e.prev=17,e.t0=e.catch(1),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()},605:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var a=n(551),r=n.n(a),o=n(552),s=n(555),i=n.n(s),c=n(553),u=function(){var e=Object(o.a)(r.a.mark((function e(){var t,n,a,o,s,u,l,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:null,e.prev=1,n={headers:{"Content-Type":"application/json"}},a="local"===c.a.env?c.a.endpointLocal:c.a.endpointProd,o=t?"".concat(a,"/api/categories/").concat(t):"".concat(a,"/api/categories"),e.next=7,i.a.get("".concat(o),n);case 7:return s=e.sent,u=s.data,e.abrupt("return",{status:!0,data:u});case 12:return e.prev=12,e.t0=e.catch(1),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,u,l,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=d.length>1&&void 0!==d[1]?d[1]:null,e.prev=1,o={headers:{"Content-Type":"application/json"}},s="local"===c.a.env?c.a.endpointLocal:c.a.endpointProd,u=null,!n){e.next=11;break}return e.next=8,i.a.put("".concat(s,"/api/categories/").concat(n),t,o);case 8:u=e.sent,e.next=14;break;case 11:return e.next=13,i.a.post("".concat(s,"/api/categories"),t,o);case 13:u=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(a=u)||void 0===a?void 0:a.data});case 17:return e.prev=17,e.t0=e.catch(1),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()},606:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var a=n(551),r=n.n(a),o=n(552),s=n(555),i=n.n(s),c=n(553),u=function(){var e=Object(o.a)(r.a.mark((function e(){var t,n,a,o,s,u,l,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:null,e.prev=1,n={headers:{"Content-Type":"application/json"}},a="local"===c.a.env?c.a.endpointLocal:c.a.endpointProd,o=t?"".concat(a,"/api/optionLists/").concat(t):"".concat(a,"/api/optionLists"),e.next=7,i.a.get("".concat(o),n);case 7:return s=e.sent,u=s.data,e.abrupt("return",{status:!0,data:u});case 12:return e.prev=12,e.t0=e.catch(1),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,u,l,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=d.length>1&&void 0!==d[1]?d[1]:null,e.prev=1,o={headers:{"Content-Type":"application/json"}},s="local"===c.a.env?c.a.endpointLocal:c.a.endpointProd,u=null,!n){e.next=11;break}return e.next=8,i.a.put("".concat(s,"/api/optionLists/").concat(n),t,o);case 8:u=e.sent,e.next=14;break;case 11:return e.next=13,i.a.post("".concat(s,"/api/optionLists"),t,o);case 13:u=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(a=u)||void 0===a?void 0:a.data});case 17:return e.prev=17,e.t0=e.catch(1),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()},800:function(e,t,n){"use strict";n.r(t);var a=n(566),r=n(28),o=n(551),s=n.n(o),i=n(558),c=n(552),u=n(556),l=n(0),d=n(4),p=n(641),b=n(174),j=n(563),v=n(571),h=n(569),f=n(26),m=n(52),x=n(554),O=n(557),g=n(604),y=n(606),L=n(605),k=n(2),w=h.d().shape({name:h.f().required("name is required"),description:h.f().required("description is required"),price:h.c().typeError("price must be a `number` type").required("price are required"),category:h.f().required("categorie are required"),optionLists:h.a(),isPopular:h.b(),available:h.b(),promotion:h.b()});t.default=function(){var e,t,n,o,h,P,C,S=Object(l.useState)(null),q=Object(u.a)(S,2),D=q[0],N=q[1],A=Object(l.useState)(!1),F=Object(u.a)(A,2),T=F[0],_=F[1],V=Object(l.useState)(!1),E=Object(u.a)(V,2),z=E[0],B=E[1],R=Object(l.useState)(null),I=Object(u.a)(R,2),J=I[0],U=I[1],M=Object(l.useState)(null),G=Object(u.a)(M,2),H=G[0],K=G[1],Q=Object(f.g)(),W=Object(f.i)().id,X=window.location.hash,Y=new URLSearchParams(X.substring(X.lastIndexOf("?"))),Z=Y.has("restaurant")?Y.get("restaurant"):"restaurant",$=Y.has("category")?Y.get("category"):"category",ee=Y.has("optionLists")?Y.get("optionLists"):[];console.log("params",X.substring(X.lastIndexOf("?")),$,ee,Z);var te=Object(j.e)({resolver:Object(v.a)(w),mode:"onTouched",defaultValues:{priceDrop:0}}),ne=te.register,ae=te.handleSubmit,re=te.formState,oe=re.errors,se=re.isSubmitting,ie=re.isValid,ce=te.resetField,ue=te.setValue,le=te.control;Object(l.useEffect)((function(){function e(){return(e=Object(c.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.b)(null,null);case 2:return t=e.sent,e.next=5,Object(L.b)(null,null);case 5:n=e.sent,(null===t||void 0===t?void 0:t.status)?K(Object(i.a)(t.data.map((function(e){return{value:e._id,label:e.name}})))):N(null===t||void 0===t?void 0:t.error),(null===n||void 0===n?void 0:n.status)?U(Object(i.a)(n.data)):N(null===n||void 0===n?void 0:n.error);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("Run once, when the component mounts "),function(){e.apply(this,arguments)}()}),[]),Object(l.useEffect)((function(){if(console.log("useEffect, Dependency"),W){var e=function(){var e=Object(c.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.c)(W);case 2:t=e.sent,console.log("resp",t),(null===t||void 0===t?void 0:t.status)?(ue("name",null===t||void 0===t?void 0:t.data.name),ue("description",null===t||void 0===t?void 0:t.data.description),ue("price",null===t||void 0===t?void 0:t.data.price),ue("priceDrop",null===t||void 0===t?void 0:t.data.priceDrop),ue("category",null===t||void 0===t?void 0:t.data.category._id),ue("isPopular",null===t||void 0===t?void 0:t.data.isPopular),ue("available",null===t||void 0===t?void 0:t.data.available),ue("promotion",null===t||void 0===t?void 0:t.data.promotion),(null===t||void 0===t?void 0:t.data.optionLists)&&(null===t||void 0===t?void 0:t.data.optionLists.length)&&(n=null===t||void 0===t?void 0:t.data.optionLists.map((function(e){return{value:e._id,label:e.name}})),ue("optionLists",n))):N(null===t||void 0===t?void 0:t.error);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[W,ue]);var de=function(){var e=Object(c.a)(s.a.mark((function e(t){var n,o,i,c,u,l,d,p,b,j;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=null,i=null,(null===t||void 0===t?void 0:t.optionLists)?(null===t||void 0===t||null===(c=t.optionLists)||void 0===c?void 0:c.length)&&(i=Object(r.a)(Object(r.a)({},t),{},{optionLists:t.optionLists.map((function(e){return e.value}))})):(console.log("body",i),i=Object(r.a)({},t)),console.log("onSubmit",t,i),!ie||!i){e.next=10;break}return _(!1),B(!1),e.next=9,Object(g.a)(i,W);case 9:o=e.sent;case 10:if(!(null===(n=o)||void 0===n?void 0:n.status)){e.next=38;break}if(W||(ce("name"),ce("description"),ce("price"),ce("priceDrop"),ce("category"),ce("optionLists"),ce("isPopular"),ce("available"),ce("promotion")),!i.category){e.next=16;break}if(!Z){e.next=16;break}return e.next=16,Object(L.a)({restaurant:Z},i.category);case 16:if(!i.optionLists){e.next=35;break}if(!i.optionLists.length){e.next=35;break}u=Object(a.a)(i.optionLists),e.prev=19,u.s();case 21:if((l=u.n()).done){e.next=27;break}return b=l.value,e.next=25,Object(y.a)({foods:[null===(d=o)||void 0===d||null===(p=d.data)||void 0===p?void 0:p._id]},b);case 25:e.next=21;break;case 27:e.next=32;break;case 29:e.prev=29,e.t0=e.catch(19),u.e(e.t0);case 32:return e.prev=32,u.f(),e.finish(32);case 35:_(!0),e.next=40;break;case 38:B(!0),N(null===(j=o)||void 0===j?void 0:j.error);case 40:case"end":return e.stop()}}),e,null,[[19,29,32,35]])})));return function(t){return e.apply(this,arguments)}}();return null===J||null===H?Object(k.jsx)(O.a,{}):(console.log("errors",oe),Object(k.jsxs)(d.P,{children:[Object(k.jsx)(b.f,{}),z&&Object(k.jsxs)(x.a,{children:[" ",D]}),T&&Object(k.jsxs)(x.a,{children:[" ","Success Ajout ou Edite"]}),Object(k.jsx)(d.o,{xs:12,children:Object(k.jsxs)(d.h,{className:"mb-4",children:[Object(k.jsx)(d.l,{children:Object(k.jsxs)(d.P,{children:[Object(k.jsx)(d.o,{sm:5,children:Object(k.jsx)("strong",{children:"Ajout Food"})}),Object(k.jsx)(d.o,{sm:7,children:Object(k.jsx)(d.g,{className:"float-end me-3",children:Object(k.jsx)(d.f,{color:"outline-secondary",className:"mx-0",onClick:function(){Q.push("/restaurants")},children:"Retour"})})})]})}),Object(k.jsx)(d.i,{children:Object(k.jsxs)(d.x,{noValidate:!0,className:"row g-3",onSubmit:ae(de),children:[Object(k.jsxs)(d.o,{md:6,children:[Object(k.jsx)(d.A,{htmlFor:"name",children:"Name"}),Object(k.jsx)(d.z,Object(r.a)(Object(r.a)({type:"text",id:"name",required:!0},ne("name")),{},{invalid:!!oe.name})),Object(k.jsx)(d.y,{invalid:!0,children:null===(e=oe.name)||void 0===e?void 0:e.message})]}),Object(k.jsxs)(d.o,{md:6,children:[Object(k.jsx)(d.A,{htmlFor:"lastName",children:"Description"}),Object(k.jsx)(d.z,Object(r.a)(Object(r.a)({type:"text",id:"description",required:!0},ne("description")),{},{invalid:!!oe.description})),Object(k.jsx)(d.y,{invalid:!0,children:null===(t=oe.description)||void 0===t?void 0:t.message})]}),Object(k.jsxs)(d.o,{md:6,children:[Object(k.jsx)(d.A,{htmlFor:"price",children:"Price"}),Object(k.jsx)(d.z,Object(r.a)(Object(r.a)({type:"number",id:"price",required:!0},ne("price")),{},{invalid:!!oe.price})),Object(k.jsx)(d.y,{invalid:!0,children:null===(n=oe.price)||void 0===n?void 0:n.message})]}),Object(k.jsxs)(d.o,{md:6,children:[Object(k.jsx)(d.A,{htmlFor:"priceDrop",children:"PriceDrop"}),Object(k.jsx)(d.z,Object(r.a)({type:"number",id:"priceDrop"},ne("priceDrop"))),Object(k.jsx)(d.y,{invalid:!0,children:null===(o=oe.priceDrop)||void 0===o?void 0:o.message})]}),Object(k.jsx)(d.o,{md:3,children:Object(k.jsx)(d.C,Object(r.a)({label:"isPopular",id:"isPopular"},ne("isPopular")))}),Object(k.jsx)(d.o,{md:3,children:Object(k.jsx)(d.C,Object(r.a)({label:"available",id:"available"},ne("available")))}),Object(k.jsx)(d.o,{md:3,children:Object(k.jsx)(d.C,Object(r.a)({label:"promotion",id:"promotion"},ne("promotion")))}),Object(k.jsxs)(d.o,{md:6,children:[Object(k.jsx)(d.A,{htmlFor:"categorie",children:"Categorie"}),Object(k.jsx)(d.B,Object(r.a)(Object(r.a)({"aria-label":"Categorie",id:"categorie",required:!0},ne("category")),{},{invalid:!!oe.category,defaultValue:(null===(h=J[0])||void 0===h?void 0:h._id)&&(null===(P=J[0])||void 0===P?void 0:P._id),children:(null===J||void 0===J?void 0:J.length)&&J.map((function(e){return Object(k.jsx)("option",{value:e._id,children:e.name},e._id)}))})),Object(k.jsx)(d.y,{invalid:!0,children:null===(C=oe.category)||void 0===C?void 0:C.message}),Object(k.jsxs)("small",{className:"form-text text-muted",children:[Object(k.jsx)(m.b,{to:"/ajout-categorie?restaurant=".concat(Z),children:"Ajouter une categorie"})," "]})]}),Object(k.jsxs)(d.o,{md:6,children:[Object(k.jsx)(d.A,{htmlFor:"optionLists",children:"Option Liste"}),Object(k.jsx)(j.a,{control:le,name:"optionLists",render:function(e){var t,n,a=e.field,r=a.onChange,o=a.onBlur,s=a.value,i=a.name;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(p.a,{defaultValue:s,value:s,name:i,onBlur:o,onChange:r,isMulti:!0,options:H}),Object(k.jsxs)("small",{className:"form-text text-muted",children:[Object(k.jsx)(m.b,{to:"/ajout-optionList?foods=".concat("foods","&options=","options"),children:"Ajouter un option Liste"})," "]}),(null===(t=oe.optionLists)||void 0===t?void 0:t.message)&&Object(k.jsx)("div",{style:{display:"block"},className:"invalid-feedback",children:null===(n=oe.optionLists)||void 0===n?void 0:n.message})]})}})]}),Object(k.jsx)(d.o,{xs:12,children:Object(k.jsx)(d.f,{color:"primary",type:"submit",className:se?"disabled":" ",children:"Submit"})})]})})]})})]}))}}}]);
//# sourceMappingURL=8.cffc98b8.chunk.js.map