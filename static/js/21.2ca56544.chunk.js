(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[21],{553:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com"}},554:function(e,t,n){"use strict";n(0);var a=n(4),r=n(2),s=function(e){var t=e.variant,n=e.children;return Object(r.jsx)(a.a,{color:t,children:n})};s.defaultProps={variant:"info"},t.a=s},606:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var a=n(551),r=n.n(a),s=n(552),o=n(555),c=n.n(o),i=n(553),u=function(){var e=Object(s.a)(r.a.mark((function e(){var t,n,a,s,o,u,l,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:null,e.prev=1,n={headers:{"Content-Type":"application/json"}},a="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,s=t?"".concat(a,"/api/optionLists/").concat(t):"".concat(a,"/api/optionLists"),e.next=7,c.a.get("".concat(s),n);case 7:return o=e.sent,u=o.data,e.abrupt("return",{status:!0,data:u});case 12:return e.prev=12,e.t0=e.catch(1),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a,s,o,u,l,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=d.length>1&&void 0!==d[1]?d[1]:null,e.prev=1,s={headers:{"Content-Type":"application/json"}},o="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,u=null,!n){e.next=11;break}return e.next=8,c.a.put("".concat(o,"/api/optionLists/").concat(n),t,s);case 8:u=e.sent,e.next=14;break;case 11:return e.next=13,c.a.post("".concat(o,"/api/optionLists"),t,s);case 13:u=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(a=u)||void 0===a?void 0:a.data});case 17:return e.prev=17,e.t0=e.catch(1),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()},607:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var a=n(551),r=n.n(a),s=n(552),o=n(555),c=n.n(o),i=n(553),u=function(){var e=Object(s.a)(r.a.mark((function e(){var t,n,a,s,o,u,l,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:null,e.prev=1,n={headers:{"Content-Type":"application/json"}},a="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,s=t?"".concat(a,"/api/options/").concat(t):"".concat(a,"/api/options"),e.next=7,c.a.get("".concat(s),n);case 7:return o=e.sent,u=o.data,e.abrupt("return",{status:!0,data:u});case 12:return e.prev=12,e.t0=e.catch(1),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a,s,o,u,l,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=d.length>1&&void 0!==d[1]?d[1]:null,e.prev=1,s={headers:{"Content-Type":"application/json"}},o="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,u=null,!n){e.next=11;break}return e.next=8,c.a.put("".concat(o,"/api/options/").concat(n),t,s);case 8:u=e.sent,e.next=14;break;case 11:return e.next=13,c.a.post("".concat(o,"/api/options"),t,s);case 13:u=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(a=u)||void 0===a?void 0:a.data});case 17:return e.prev=17,e.t0=e.catch(1),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()},801:function(e,t,n){"use strict";n.r(t);var a=n(566),r=n(28),s=n(551),o=n.n(s),c=n(558),i=n(552),u=n(556),l=n(0),d=n(4),p=n(641),j=n(174),b=n(563),v=n(571),h=n(569),f=n(26),m=n(52),O=n(554),x=n(606),g=n(607),y=n(2),k=h.d().shape({name:h.f().required("name is required"),description:h.f().required("description is required"),type:h.f().required("type are required"),options:h.a().required("options are required"),foods:h.a()});t.default=function(){var e,t,n,s=Object(l.useState)(null),h=Object(u.a)(s,2),w=h[0],L=h[1],S=Object(l.useState)(!1),q=Object(u.a)(S,2),N=q[0],P=q[1],A=Object(l.useState)(!1),C=Object(u.a)(A,2),T=C[0],F=C[1],E=Object(l.useState)([]),V=Object(u.a)(E,2),B=V[0],R=V[1],_=Object(f.g)(),z=Object(f.i)().id,I=window.location.hash,J=new URLSearchParams(I.substring(I.lastIndexOf("?"))),D=J.has("foods")?J.get("foods"):[],M=J.has("options")?J.get("options"):[];console.log("params",I.substring(I.lastIndexOf("?")),D,M);var U=Object(b.e)({resolver:Object(v.a)(k),mode:"onTouched"}),G=U.register,H=U.handleSubmit,K=U.formState,Q=K.errors,W=K.isSubmitting,X=K.isValid,Y=U.resetField,Z=U.setValue,$=U.control;Object(l.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.b)(null,null);case 2:(null===(t=e.sent)||void 0===t?void 0:t.status)?R(Object(c.a)(t.data.map((function(e){return{value:e._id,label:e.name}})))):L(null===t||void 0===t?void 0:t.error);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("Run once, when the component mounts "),function(){e.apply(this,arguments)}()}),[]),Object(l.useEffect)((function(){if(console.log("useEffect dependency id, setValue"),z){var e=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.b)(null,z);case 2:(null===(t=e.sent)||void 0===t?void 0:t.status)?(Z("name",null===t||void 0===t?void 0:t.data.name),Z("description",null===t||void 0===t?void 0:t.data.description),Z("type",null===t||void 0===t?void 0:t.data.type),Z("options",null===t||void 0===t?void 0:t.data.options),Z("foods",null===t||void 0===t?void 0:t.data.foods)):L(null===t||void 0===t?void 0:t.error);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[z,Z]);var ee=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,s,c,i,u,l,d,p,j,b,v,h,f;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=null,c=Object(r.a)(Object(r.a)({},t),{},{options:t.options.map((function(e){return e.value}))}),!X){e.next=29;break}return P(!1),F(!1),e.next=7,Object(x.a)(c,z);case 7:if(s=e.sent,!(null===(i=s)||void 0===i||null===(u=i.data)||void 0===u?void 0:u._id)){e.next=29;break}l=t.options.map((function(e){return e.value})),d=Object(a.a)(l),e.prev=11,d.s();case 13:if((p=d.n()).done){e.next=21;break}return v=p.value,e.next=17,Object(g.a)({optionList:null===(j=s)||void 0===j||null===(b=j.data)||void 0===b?void 0:b._id},v);case 17:h=e.sent,console.log("retour",h);case 19:e.next=13;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(11),d.e(e.t0);case 26:return e.prev=26,d.f(),e.finish(26);case 29:(null===(n=s)||void 0===n?void 0:n.status)?(Y("name"),Y("description"),Y("type"),Y("options"),Y("foods"),P(!0)):(F(!0),L(null===(f=s)||void 0===f?void 0:f.error));case 30:case"end":return e.stop()}}),e,null,[[11,23,26,29]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)(d.P,{children:[Object(y.jsx)(j.f,{}),T&&Object(y.jsxs)(O.a,{children:[" ",w]}),N&&Object(y.jsxs)(O.a,{children:[" ","Success Ajout ou Edite"]}),Object(y.jsx)(d.o,{xs:12,children:Object(y.jsxs)(d.h,{className:"mb-4",children:[Object(y.jsx)(d.l,{children:Object(y.jsxs)(d.P,{children:[Object(y.jsx)(d.o,{sm:5,children:Object(y.jsx)("strong",{children:"Ajout OptionList"})}),Object(y.jsx)(d.o,{sm:7,children:Object(y.jsx)(d.g,{className:"float-end me-3",children:Object(y.jsx)(d.f,{color:"outline-secondary",className:"mx-0",onClick:function(){_.push("/ajout-food")},children:"Retour"})})})]})}),Object(y.jsx)(d.i,{children:Object(y.jsxs)(d.x,{className:"row g-3 needs-validation ".concat(X&&"was-validated"),onSubmit:H(ee),children:[Object(y.jsxs)(d.o,{md:6,children:[Object(y.jsx)(d.A,{htmlFor:"name",children:"Name"}),Object(y.jsx)(d.z,Object(r.a)({type:"text",id:"name",required:!0},G("name"))),Object(y.jsx)(d.y,{invalid:!0,children:null===(e=Q.name)||void 0===e?void 0:e.message})]}),Object(y.jsxs)(d.o,{md:6,children:[Object(y.jsx)(d.A,{htmlFor:"lastName",children:"Description"}),Object(y.jsx)(d.z,Object(r.a)({type:"text",id:"description",required:!0},G("description"))),Object(y.jsx)(d.y,{invalid:!0,children:null===(t=Q.description)||void 0===t?void 0:t.message})]}),Object(y.jsxs)(d.o,{md:6,children:[Object(y.jsx)(d.A,{htmlFor:"type",children:"Type"}),Object(y.jsxs)(d.B,Object(r.a)(Object(r.a)({"aria-label":"Type",id:"type",required:!0},G("type")),{},{children:[Object(y.jsx)("option",{children:"..."}),Object(y.jsx)("option",{value:"multiple",children:"multiple"}),Object(y.jsx)("option",{value:"single",children:"single"})]})),Object(y.jsx)(d.y,{invalid:!0,children:null===(n=Q.type)||void 0===n?void 0:n.message})]}),Object(y.jsxs)(d.o,{md:6,children:[Object(y.jsx)(d.A,{htmlFor:"Options",children:"Options"}),Object(y.jsx)(b.a,{control:$,name:"options",render:function(e){var t,n=e.field,a=n.onChange,r=n.onBlur,s=n.value,o=n.name,c=e.fieldState.error;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(p.a,{defaultValue:s,value:s,name:o,onBlur:r,onChange:a,isMulti:!0,options:B}),Object(y.jsxs)("small",{className:"form-text text-muted",children:[Object(y.jsx)(m.b,{to:"/ajout-option",children:"Ajouter une option"})," "]}),c&&Object.keys(c).length&&Object(y.jsx)("div",{style:{display:"block"},className:"invalid-feedback",children:null===(t=Q.options)||void 0===t?void 0:t.message})]})}})]}),Object(y.jsx)(d.o,{xs:12,children:Object(y.jsx)(d.f,{color:"primary",type:"submit",className:W?"disabled":" ",children:"Submit"})})]})})]})})]})}}}]);
//# sourceMappingURL=21.2ca56544.chunk.js.map