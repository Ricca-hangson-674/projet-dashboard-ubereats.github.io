(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[19],{552:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com"}},553:function(e,t,n){"use strict";n(0);var r=n(4),a=n(2),s=function(e){var t=e.variant,n=e.children;return Object(a.jsx)(r.a,{color:t,children:n})};s.defaultProps={variant:"info"},t.a=s},556:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return l}));var r=n(550),a=n.n(r),s=n(551),c=n(555),o=n.n(c),u=n(552),i=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r,s,c,i,d,p,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:null,n=l.length>1&&void 0!==l[1]?l[1]:null,e.prev=2,r={headers:{"Content-Type":"application/json"}},s="local"===u.a.env?u.a.endpointLocal:u.a.endpointProd,c=null,c=n?"".concat(s,"/api/users/").concat(n):t?"".concat(s,"/api/users?type=").concat(t):"".concat(s,"/api/users"),e.next=9,o.a.get("".concat(c),r);case 9:return i=e.sent,d=i.data,e.abrupt("return",{status:!0,data:d});case 14:return e.prev=14,e.t0=e.catch(2),p=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:p});case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"}},r="local"===u.a.env?u.a.endpointLocal:u.a.endpointProd,e.next=5,o.a.delete("".concat(r,"/api/users/").concat(t),n);case 5:return s=e.sent,c=s.data,e.abrupt("return",{status:!0,data:c});case 10:return e.prev=10,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:i});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,i,d,p=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=p.length>1&&void 0!==p[1]?p[1]:null,e.prev=1,s={headers:{"Content-Type":"application/json"}},c="local"===u.a.env?u.a.endpointLocal:u.a.endpointProd,i=null,!n){e.next=11;break}return e.next=8,o.a.put("".concat(c,"/api/users/").concat(n),t,s);case 8:i=e.sent,e.next=14;break;case 11:return e.next=13,o.a.post("".concat(c,"/api/users"),t,s);case 13:i=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(r=i)||void 0===r?void 0:r.data});case 17:return e.prev=17,e.t0=e.catch(1),d=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:d});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"}},r="local"===u.a.env?u.a.endpointLocal:u.a.endpointProd,e.next=5,o.a.post("".concat(r,"/api/users/login"),t,n);case 5:return s=e.sent,c=s.data,e.abrupt("return",{status:!0,data:c});case 10:return e.prev=10,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:i});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},579:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p}));var r=n(550),a=n.n(r),s=n(551),c=n(555),o=n.n(c),u=n(552),i=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r,s,c,i,d,p=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:null,e.prev=1,n={headers:{"Content-Type":"application/json"}},r="local"===u.a.env?u.a.endpointLocal:u.a.endpointProd,s=t?"".concat(r,"/api/restaurants/").concat(t):"".concat(r,"/api/restaurants"),e.next=7,o.a.get("".concat(s),n);case 7:return c=e.sent,i=c.data,e.abrupt("return",{status:!0,data:i});case 12:return e.prev=12,e.t0=e.catch(1),d=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:d});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"}},r="local"===u.a.env?u.a.endpointLocal:u.a.endpointProd,e.next=5,o.a.delete("".concat(r,"/api/restaurants/").concat(t),n);case 5:return s=e.sent,c=s.data,e.abrupt("return",{status:!0,data:c});case 10:return e.prev=10,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:i});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,i,d,p=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=p.length>1&&void 0!==p[1]?p[1]:null,e.prev=1,s={headers:{"Content-Type":"application/json"}},c="local"===u.a.env?u.a.endpointLocal:u.a.endpointProd,i=null,!n){e.next=11;break}return e.next=8,o.a.put("".concat(c,"/api/restaurants/").concat(n),t,s);case 8:i=e.sent,e.next=14;break;case 11:return e.next=13,o.a.post("".concat(c,"/api/restaurants"),t,s);case 13:i=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(r=i)||void 0===r?void 0:r.data});case 17:return e.prev=17,e.t0=e.catch(1),d=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:d});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()},791:function(e,t,n){"use strict";n.r(t);var r=n(28),a=n(558),s=n(550),c=n.n(s),o=n(551),u=n(554),i=n(0),d=n(4),p=n(562),l=n(569),j=n(567),v=n(26),b=n(553),h=n(174),f=n(579),m=n(556),x=n(2),O=j.object().shape({name:j.string().required("name is required"),description:j.string().required("description is required"),user:j.string().required("user is required")});t.default=function(){var e,t,n,s=Object(i.useState)(null),j=Object(u.a)(s,2),g=j[0],y=j[1],w=Object(i.useState)(!1),k=Object(u.a)(w,2),P=k[0],S=k[1],C=Object(i.useState)(!1),q=Object(u.a)(C,2),L=q[0],N=q[1],T=Object(i.useState)([]),A=Object(u.a)(T,2),F=A[0],R=A[1],_=Object(i.useState)(!1),z=Object(u.a)(_,2),E=z[0],J=z[1],V=Object(v.g)(),B=Object(v.i)().id,D=Object(p.e)({resolver:Object(l.a)(O),mode:"onTouched"}),G=D.register,H=D.handleSubmit,I=D.formState,K=I.errors,M=I.isSubmitting,Q=I.isValid,U=D.resetField,W=D.setValue;Object(i.useEffect)((function(){function e(){return(e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.c)("commercant");case 2:(null===(t=e.sent)||void 0===t?void 0:t.status)?R(Object(a.a)(null===t||void 0===t?void 0:t.data)):J(null===t||void 0===t?void 0:t.error);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(console.log("Run once, when the component mounts"),function(){e.apply(this,arguments)}(),B){var t=function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.c)(B);case 2:(null===(t=e.sent)||void 0===t?void 0:t.status)?(W("name",null===t||void 0===t?void 0:t.data.name),W("description",null===t||void 0===t?void 0:t.data.description),W("user",null===t||void 0===t?void 0:t.data.user._id)):y(null===t||void 0===t?void 0:t.error);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t()}}),[B,W]);var X=function(){var e=Object(o.a)(c.a.mark((function e(t){var n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=null,!Q){e.next=7;break}return S(!1),N(!1),e.next=6,Object(f.a)(t,B);case 6:r=e.sent;case 7:(null===(n=r)||void 0===n?void 0:n.status)?(U("name"),U("description"),U("user"),S(!0)):(N(!0),y(null===(a=r)||void 0===a?void 0:a.error));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(d.P,{children:[Object(x.jsx)(h.f,{}),L&&Object(x.jsxs)(b.a,{children:[" ",g]}),P&&Object(x.jsxs)(b.a,{children:[" ","Success Ajout ou Edite"]}),Object(x.jsx)(d.o,{xs:12,children:Object(x.jsxs)(d.h,{className:"mb-4",children:[Object(x.jsx)(d.l,{children:Object(x.jsxs)(d.P,{children:[Object(x.jsx)(d.o,{sm:5,children:Object(x.jsx)("strong",{children:"Ajout Restaurant"})}),Object(x.jsx)(d.o,{sm:7,children:Object(x.jsx)(d.g,{className:"float-end me-3",children:Object(x.jsx)(d.f,{color:"outline-secondary",className:"mx-0",onClick:function(){V.push("/restaurants")},children:"Retour"})})})]})}),Object(x.jsx)(d.i,{children:Object(x.jsxs)(d.x,{className:"row g-3 needs-validation ".concat(Q&&"was-validated"),onSubmit:H(X),children:[Object(x.jsxs)(d.o,{md:6,children:[Object(x.jsx)(d.A,{htmlFor:"name",children:"Name"}),Object(x.jsx)(d.z,Object(r.a)({type:"text",id:"name",required:!0},G("name"))),Object(x.jsx)(d.y,{invalid:!0,children:null===(e=K.name)||void 0===e?void 0:e.message})]}),Object(x.jsxs)(d.o,{md:6,children:[Object(x.jsx)(d.A,{htmlFor:"description",children:"Description"}),Object(x.jsx)(d.z,Object(r.a)({type:"text",id:"description",required:!0},G("description"))),Object(x.jsx)(d.y,{invalid:!0,children:null===(t=K.description)||void 0===t?void 0:t.message})]}),Object(x.jsxs)(d.o,{md:6,children:[Object(x.jsx)(d.A,{htmlFor:"user",children:"Commercant"}),E?Object(x.jsxs)(b.a,{children:[" ",E]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(d.B,Object(r.a)(Object(r.a)({id:"user",required:!0},G("user")),{},{children:[Object(x.jsx)("option",{disabled:!0,children:"Choose..."}),F.length&&F.map((function(e){return Object(x.jsxs)("option",{value:e._id,children:[e.firstName," ",e.lastName]},e._id)}))]})),Object(x.jsx)(d.y,{invalid:!0,children:null===(n=K.user)||void 0===n?void 0:n.message})]})]}),Object(x.jsx)(d.o,{xs:12,children:Object(x.jsx)(d.f,{color:"primary",type:"submit",className:M?"disabled":" ",children:"Submit"})})]})})]})})]})}}}]);
//# sourceMappingURL=19.d98dfd13.chunk.js.map