(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[9],{553:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com"}},554:function(e,t,n){"use strict";n(0);var a=n(4),r=n(2),o=function(e){var t=e.variant,n=e.children;return Object(r.jsx)(a.a,{color:t,children:n})};o.defaultProps={variant:"info"},t.a=o},557:function(e,t,n){"use strict";n(0);var a=n(4),r=n(2);t.a=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(a.Z,{color:"primary",children:Object(r.jsx)("span",{className:"sr-only",children:"Loading ..."})})})}},604:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d}));var a=n(551),r=n.n(a),o=n(552),s=n(555),i=n.n(s),c=n(553),l=function(){var e=Object(o.a)(r.a.mark((function e(){var t,n,a,o,s,l,u,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:null,e.prev=1,n={headers:{"Content-Type":"application/json"}},a="local"===c.a.env?c.a.endpointLocal:c.a.endpointProd,o=t?"".concat(a,"/api/foods/").concat(t):"".concat(a,"/api/foods"),e.next=7,i.a.get("".concat(o),n);case 7:return s=e.sent,l=s.data,e.abrupt("return",{status:!0,data:l});case 12:return e.prev=12,e.t0=e.catch(1),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"}},a="local"===c.a.env?c.a.endpointLocal:c.a.endpointProd,e.next=5,i.a.delete("".concat(a,"/api/foods/").concat(t),n);case 5:return o=e.sent,s=o.data,e.abrupt("return",{status:!0,data:s});case 10:return e.prev=10,e.t0=e.catch(0),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,l,u,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=d.length>1&&void 0!==d[1]?d[1]:null,e.prev=1,o={headers:{"Content-Type":"application/json"}},s="local"===c.a.env?c.a.endpointLocal:c.a.endpointProd,l=null,!n){e.next=11;break}return e.next=8,i.a.put("".concat(s,"/api/foods/").concat(n),t,o);case 8:l=e.sent,e.next=14;break;case 11:return e.next=13,i.a.post("".concat(s,"/api/foods"),t,o);case 13:l=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(a=l)||void 0===a?void 0:a.data});case 17:return e.prev=17,e.t0=e.catch(1),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()},605:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var a=n(551),r=n.n(a),o=n(552),s=n(555),i=n.n(s),c=n(553),l=function(){var e=Object(o.a)(r.a.mark((function e(){var t,n,a,o,s,l,u,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:null,e.prev=1,n={headers:{"Content-Type":"application/json"}},a="local"===c.a.env?c.a.endpointLocal:c.a.endpointProd,o=t?"".concat(a,"/api/categories/").concat(t):"".concat(a,"/api/categories"),e.next=7,i.a.get("".concat(o),n);case 7:return s=e.sent,l=s.data,e.abrupt("return",{status:!0,data:l});case 12:return e.prev=12,e.t0=e.catch(1),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,l,u,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=d.length>1&&void 0!==d[1]?d[1]:null,e.prev=1,o={headers:{"Content-Type":"application/json"}},s="local"===c.a.env?c.a.endpointLocal:c.a.endpointProd,l=null,!n){e.next=11;break}return e.next=8,i.a.put("".concat(s,"/api/categories/").concat(n),t,o);case 8:l=e.sent,e.next=14;break;case 11:return e.next=13,i.a.post("".concat(s,"/api/categories"),t,o);case 13:l=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(a=l)||void 0===a?void 0:a.data});case 17:return e.prev=17,e.t0=e.catch(1),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()},606:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var a=n(551),r=n.n(a),o=n(552),s=n(555),i=n.n(s),c=n(553),l=function(){var e=Object(o.a)(r.a.mark((function e(){var t,n,a,o,s,l,u,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:null,e.prev=1,n={headers:{"Content-Type":"application/json"}},a="local"===c.a.env?c.a.endpointLocal:c.a.endpointProd,o=t?"".concat(a,"/api/optionLists/").concat(t):"".concat(a,"/api/optionLists"),e.next=7,i.a.get("".concat(o),n);case 7:return s=e.sent,l=s.data,e.abrupt("return",{status:!0,data:l});case 12:return e.prev=12,e.t0=e.catch(1),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,l,u,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=d.length>1&&void 0!==d[1]?d[1]:null,e.prev=1,o={headers:{"Content-Type":"application/json"}},s="local"===c.a.env?c.a.endpointLocal:c.a.endpointProd,l=null,!n){e.next=11;break}return e.next=8,i.a.put("".concat(s,"/api/optionLists/").concat(n),t,o);case 8:l=e.sent,e.next=14;break;case 11:return e.next=13,i.a.post("".concat(s,"/api/optionLists"),t,o);case 13:l=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(a=l)||void 0===a?void 0:a.data});case 17:return e.prev=17,e.t0=e.catch(1),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()},803:function(e,t,n){"use strict";n.r(t);var a=n(566),r=n(28),o=n(558),s=n(551),i=n.n(s),c=n(552),l=n(556),u=n(0),d=n(4),p=n(643),j=n(639),b=(n(640),n(174)),v=n(563),h=n(571),f=n(569),m=n(26),O=n(52),x=n(554),g=n(557),y=n(604),L=n(606),k=n(605),w=n(2),C=f.d().shape({name:f.f().required("name is required"),description:f.f().required("description is required"),price:f.c().typeError("price must be a `number` type").required("price are required"),category:f.f().required("categorie are required"),optionLists:f.a(),isPopular:f.b(),available:f.b(),promotion:f.b()});t.default=function(){var e,t,n,s,f,P,S,N=Object(u.useState)(null),A=Object(l.a)(N,2),D=A[0],F=A[1],q=Object(u.useState)(!1),R=Object(l.a)(q,2),T=R[0],_=R[1],U=Object(u.useState)(!1),V=Object(l.a)(U,2),z=V[0],B=V[1],E=Object(u.useState)(null),H=Object(l.a)(E,2),I=H[0],M=H[1],J=Object(u.useState)(null),K=Object(l.a)(J,2),W=K[0],Z=K[1],G=Object(u.useState)(!1),Q=Object(l.a)(G,2),X=Q[0],Y=Q[1],$=Object(u.useRef)(null),ee=Object(u.useState)(""),te=Object(l.a)(ee,2),ne=(te[0],te[1]),ae=Object(u.useState)(null),re=Object(l.a)(ae,2),oe=re[0],se=re[1],ie=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.preventDefault(),t.dataTransfer?n=t.dataTransfer.files:t.target&&(n=t.target.files),a=new FileReader){e.next=6;break}return e.abrupt("return");case 6:a.onload=function(){var e;se(null===(e=a.result)||void 0===e?void 0:e.toString()),t.target.value=null,Y(!0)},a.readAsDataURL(n[0]),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),ce=Object(m.g)(),le=Object(m.i)().id,ue=window.location.hash,de=new URLSearchParams(ue.substring(ue.lastIndexOf("?"))),pe=de.has("restaurant")?de.get("restaurant"):"restaurant",je=de.has("category")?de.get("category"):"category",be=de.has("optionLists")?de.get("optionLists"):[];console.log("params",ue.substring(ue.lastIndexOf("?")),je,be,pe);var ve=Object(v.e)({resolver:Object(h.a)(C),mode:"onTouched",defaultValues:{priceDrop:0}}),he=ve.register,fe=ve.handleSubmit,me=ve.formState,Oe=me.errors,xe=me.isSubmitting,ge=me.isValid,ye=ve.resetField,Le=ve.setValue,ke=ve.control;Object(u.useEffect)((function(){function e(){return(e=Object(c.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.b)(null,null);case 2:return t=e.sent,e.next=5,Object(k.b)(null,null);case 5:n=e.sent,(null===t||void 0===t?void 0:t.status)?Z(Object(o.a)(t.data.map((function(e){return{value:e._id,label:e.name}})))):F(null===t||void 0===t?void 0:t.error),(null===n||void 0===n?void 0:n.status)?M(Object(o.a)(n.data)):F(null===n||void 0===n?void 0:n.error);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("Run once, when the component mounts "),function(){e.apply(this,arguments)}()}),[]),Object(u.useEffect)((function(){if(console.log("useEffect, Dependency"),le){var e=function(){var e=Object(c.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.c)(le);case 2:t=e.sent,console.log("resp",t),(null===t||void 0===t?void 0:t.status)?(Le("name",null===t||void 0===t?void 0:t.data.name),Le("description",null===t||void 0===t?void 0:t.data.description),Le("price",null===t||void 0===t?void 0:t.data.price),Le("priceDrop",null===t||void 0===t?void 0:t.data.priceDrop),Le("category",null===t||void 0===t?void 0:t.data.category._id),Le("isPopular",null===t||void 0===t?void 0:t.data.isPopular),Le("available",null===t||void 0===t?void 0:t.data.available),Le("promotion",null===t||void 0===t?void 0:t.data.promotion),(null===t||void 0===t?void 0:t.data.optionLists)&&(null===t||void 0===t?void 0:t.data.optionLists.length)&&(n=null===t||void 0===t?void 0:t.data.optionLists.map((function(e){return{value:e._id,label:e.name}})),Le("optionLists",n))):F(null===t||void 0===t?void 0:t.error);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[le,Le]);var we=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,o,s,c,l,u,d,p,j,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=null,s=null,(null===t||void 0===t?void 0:t.optionLists)?(null===t||void 0===t||null===(c=t.optionLists)||void 0===c?void 0:c.length)&&(s=Object(r.a)(Object(r.a)({},t),{},{optionLists:t.optionLists.map((function(e){return e.value}))})):(console.log("body",s),s=Object(r.a)({},t)),console.log("onSubmit",t,s),!ge||!s){e.next=10;break}return _(!1),B(!1),e.next=9,Object(y.a)(s,le);case 9:o=e.sent;case 10:if(!(null===(n=o)||void 0===n?void 0:n.status)){e.next=38;break}if(le||(ye("name"),ye("description"),ye("price"),ye("priceDrop"),ye("category"),ye("optionLists"),ye("isPopular"),ye("available"),ye("promotion")),!s.category){e.next=16;break}if(!pe){e.next=16;break}return e.next=16,Object(k.a)({restaurant:pe},s.category);case 16:if(!s.optionLists){e.next=35;break}if(!s.optionLists.length){e.next=35;break}l=Object(a.a)(s.optionLists),e.prev=19,l.s();case 21:if((u=l.n()).done){e.next=27;break}return j=u.value,e.next=25,Object(L.a)({foods:[null===(d=o)||void 0===d||null===(p=d.data)||void 0===p?void 0:p._id]},j);case 25:e.next=21;break;case 27:e.next=32;break;case 29:e.prev=29,e.t0=e.catch(19),l.e(e.t0);case 32:return e.prev=32,l.f(),e.finish(32);case 35:_(!0),e.next=40;break;case 38:B(!0),F(null===(b=o)||void 0===b?void 0:b.error);case 40:case"end":return e.stop()}}),e,null,[[19,29,32,35]])})));return function(t){return e.apply(this,arguments)}}();return null===I||null===W?Object(w.jsx)(g.a,{}):(console.log("errors",Oe),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(d.U,{children:[Object(w.jsx)(b.f,{}),z&&Object(w.jsxs)(x.a,{children:[" ",D]}),T&&Object(w.jsxs)(x.a,{children:[" ","Success Ajout ou Edite"]}),Object(w.jsx)(d.o,{xs:12,children:Object(w.jsxs)(d.h,{className:"mb-4",children:[Object(w.jsx)(d.l,{children:Object(w.jsxs)(d.U,{children:[Object(w.jsx)(d.o,{sm:5,children:Object(w.jsx)("strong",{children:"Ajout Food"})}),Object(w.jsx)(d.o,{sm:7,children:Object(w.jsxs)(d.g,{className:"float-end me-3",children:[Object(w.jsx)(d.f,{color:"outline-secondary",className:"mx-0",onClick:function(){ce.push("/restaurants")},children:"Retour"}),Object(w.jsx)("label",{className:"btn btn-outline-primary mx-1",htmlFor:"imageNRH",children:"Ajout image"}),Object(w.jsx)("input",{id:"imageNRH",style:{display:"none"},type:"file",onChange:ie})]})})]})}),Object(w.jsx)(d.i,{children:Object(w.jsxs)(d.x,{noValidate:!0,className:"row g-3",onSubmit:fe(we),children:[Object(w.jsxs)(d.o,{md:6,children:[Object(w.jsx)(d.A,{htmlFor:"name",children:"Name"}),Object(w.jsx)(d.z,Object(r.a)(Object(r.a)({type:"text",id:"name",required:!0},he("name")),{},{invalid:!!Oe.name})),Object(w.jsx)(d.y,{invalid:!0,children:null===(e=Oe.name)||void 0===e?void 0:e.message})]}),Object(w.jsxs)(d.o,{md:6,children:[Object(w.jsx)(d.A,{htmlFor:"lastName",children:"Description"}),Object(w.jsx)(d.z,Object(r.a)(Object(r.a)({type:"text",id:"description",required:!0},he("description")),{},{invalid:!!Oe.description})),Object(w.jsx)(d.y,{invalid:!0,children:null===(t=Oe.description)||void 0===t?void 0:t.message})]}),Object(w.jsxs)(d.o,{md:6,children:[Object(w.jsx)(d.A,{htmlFor:"price",children:"Price"}),Object(w.jsx)(d.z,Object(r.a)(Object(r.a)({type:"number",id:"price",required:!0},he("price")),{},{invalid:!!Oe.price})),Object(w.jsx)(d.y,{invalid:!0,children:null===(n=Oe.price)||void 0===n?void 0:n.message})]}),Object(w.jsxs)(d.o,{md:6,children:[Object(w.jsx)(d.A,{htmlFor:"priceDrop",children:"PriceDrop"}),Object(w.jsx)(d.z,Object(r.a)({type:"number",id:"priceDrop"},he("priceDrop"))),Object(w.jsx)(d.y,{invalid:!0,children:null===(s=Oe.priceDrop)||void 0===s?void 0:s.message})]}),Object(w.jsx)(d.o,{md:3,children:Object(w.jsx)(d.C,Object(r.a)({label:"isPopular",id:"isPopular"},he("isPopular")))}),Object(w.jsx)(d.o,{md:3,children:Object(w.jsx)(d.C,Object(r.a)({label:"available",id:"available"},he("available")))}),Object(w.jsx)(d.o,{md:3,children:Object(w.jsx)(d.C,Object(r.a)({label:"promotion",id:"promotion"},he("promotion")))}),Object(w.jsxs)(d.o,{md:6,children:[Object(w.jsx)(d.A,{htmlFor:"categorie",children:"Categorie"}),Object(w.jsx)(d.B,Object(r.a)(Object(r.a)({"aria-label":"Categorie",id:"categorie",required:!0},he("category")),{},{invalid:!!Oe.category,defaultValue:(null===(f=I[0])||void 0===f?void 0:f._id)&&(null===(P=I[0])||void 0===P?void 0:P._id),children:(null===I||void 0===I?void 0:I.length)&&I.map((function(e){return Object(w.jsx)("option",{value:e._id,children:e.name},e._id)}))})),Object(w.jsx)(d.y,{invalid:!0,children:null===(S=Oe.category)||void 0===S?void 0:S.message}),Object(w.jsxs)("small",{className:"form-text text-muted",children:[Object(w.jsx)(O.b,{to:"/ajout-categorie?restaurant=".concat(pe),children:"Ajouter une categorie"})," "]})]}),Object(w.jsxs)(d.o,{md:6,children:[Object(w.jsx)(d.A,{htmlFor:"optionLists",children:"Option Liste"}),Object(w.jsx)(v.a,{control:ke,name:"optionLists",render:function(e){var t,n,a=e.field,r=a.onChange,o=a.onBlur,s=a.value,i=a.name;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(p.a,{defaultValue:s,value:s,name:i,onBlur:o,onChange:r,isMulti:!0,options:W}),Object(w.jsxs)("small",{className:"form-text text-muted",children:[Object(w.jsx)(O.b,{to:"/ajout-optionList?foods=".concat("foods","&options=","options"),children:"Ajouter un option Liste"})," "]}),(null===(t=Oe.optionLists)||void 0===t?void 0:t.message)&&Object(w.jsx)("div",{style:{display:"block"},className:"invalid-feedback",children:null===(n=Oe.optionLists)||void 0===n?void 0:n.message})]})}})]}),Object(w.jsx)(d.o,{xs:12,children:Object(w.jsx)(d.f,{color:"primary",type:"submit",className:xe?"disabled":" ",children:"Submit"})})]})})]})})]}),Object(w.jsxs)(d.K,{size:"lg",visible:X,onClose:function(){return Y(!1)},children:[Object(w.jsx)(d.N,{onClose:function(){return Y(!1)},children:Object(w.jsx)(d.O,{children:"Upload Image"})}),Object(w.jsx)(d.L,{children:Object(w.jsx)(j.a,{src:oe,style:{height:500,width:"732px"},initialAspectRatio:16/9,guides:!1,crop:function(){var e=null===$||void 0===$?void 0:$.current,t=null===e||void 0===e?void 0:e.cropper;ne(t.getCroppedCanvas().toDataURL())},ref:$,viewMode:1,minCropBoxHeight:10,minCropBoxWidth:10,responsive:!0,autoCropArea:1,aspectRatio:4/3,checkOrientation:!1})}),Object(w.jsxs)(d.M,{children:[Object(w.jsx)(d.f,{color:"secondary",onClick:function(){return Y(!1)},children:"Close"}),Object(w.jsx)(d.f,{color:"primary",children:"Save changes"})]})]})]}))}}}]);
//# sourceMappingURL=9.54788ba0.chunk.js.map