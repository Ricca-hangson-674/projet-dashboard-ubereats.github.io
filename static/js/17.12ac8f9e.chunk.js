(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[17],{550:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com"}},551:function(e,t,a){"use strict";a(0);var r=a(4),n=a(2),s=function(e){var t=e.variant,a=e.children;return Object(n.jsx)(r.a,{color:t,children:a})};s.defaultProps={variant:"info"},t.a=s},552:function(e,t,a){"use strict";a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return d})),a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return p}));var r=a(548),n=a.n(r),s=a(549),c=a(556),i=a.n(c),o=a(550),u=function(){var e=Object(s.a)(n.a.mark((function e(){var t,a,r,s,c,u,d,l,p=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:null,a=p.length>1&&void 0!==p[1]?p[1]:null,e.prev=2,r={headers:{"Content-Type":"application/json"}},s="local"===o.a.env?o.a.endpointLocal:o.a.endpointProd,c=null,c=a?"".concat(s,"/api/users/").concat(a):t?"".concat(s,"/api/users?type=").concat(t):"".concat(s,"/api/users"),e.next=9,i.a.get("".concat(c),r);case 9:return u=e.sent,d=u.data,e.abrupt("return",{status:!0,data:d});case 14:return e.prev=14,e.t0=e.catch(2),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r,s,c,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={headers:{"Content-Type":"application/json"}},r="local"===o.a.env?o.a.endpointLocal:o.a.endpointProd,e.next=5,i.a.delete("".concat(r,"/api/users/").concat(t),a);case 5:return s=e.sent,c=s.data,e.abrupt("return",{status:!0,data:c});case 10:return e.prev=10,e.t0=e.catch(0),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r,s,c,u,d,l=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=l.length>1&&void 0!==l[1]?l[1]:null,e.prev=1,s={headers:{"Content-Type":"application/json"}},c="local"===o.a.env?o.a.endpointLocal:o.a.endpointProd,u=null,!a){e.next=11;break}return e.next=8,i.a.put("".concat(c,"/api/users/").concat(a),t,s);case 8:u=e.sent,e.next=14;break;case 11:return e.next=13,i.a.post("".concat(c,"/api/users"),t,s);case 13:u=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(r=u)||void 0===r?void 0:r.data});case 17:return e.prev=17,e.t0=e.catch(1),d=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:d});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r,s,c,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={headers:{"Content-Type":"application/json"}},r="local"===o.a.env?o.a.endpointLocal:o.a.endpointProd,e.next=5,i.a.post("".concat(r,"/api/users/login"),t,a);case 5:return s=e.sent,c=s.data,e.abrupt("return",{status:!0,data:c});case 10:return e.prev=10,e.t0=e.catch(0),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},761:function(e,t,a){"use strict";a.r(t);var r=a(28),n=a(548),s=a.n(n),c=a(549),i=a(553),o=a(0),u=a(4),d=a(174),l=a(567),p=a(577),j=a(576),m=a(26),b=a(551),v=a(552),h=a(2),f=j.a().shape({firstName:j.c().required("firstName is required"),lastName:j.c().required("lastName is required"),email:j.c().email("email must email valid").required("email is required"),password:j.c().required("password are required")});t.default=function(){var e,t,a,n,j=Object(o.useState)(null),x=Object(i.a)(j,2),O=x[0],w=x[1],g=Object(o.useState)(!1),N=Object(i.a)(g,2),y=N[0],k=N[1],q=Object(o.useState)(!1),S=Object(i.a)(q,2),P=S[0],C=S[1],F=Object(m.g)(),L=Object(m.i)().id,T=Object(l.d)({resolver:Object(p.a)(f),mode:"onTouched"}),A=T.register,E=T.handleSubmit,J=T.formState,M=J.errors,R=J.isSubmitting,V=J.isValid,z=T.resetField,B=T.setValue;Object(o.useEffect)((function(){if(console.log("Run once, when the component mounts"),L){var e=function(){var e=Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.c)(null,L);case 2:(null===(t=e.sent)||void 0===t?void 0:t.status)?(B("firstName",null===t||void 0===t?void 0:t.data.firstName),B("lastName",null===t||void 0===t?void 0:t.data.lastName),B("email",null===t||void 0===t?void 0:t.data.email),B("password","")):w(null===t||void 0===t?void 0:t.error);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[L,B]);var D=function(){var e=Object(c.a)(s.a.mark((function e(t){var a,n,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=null,c=Object(r.a)(Object(r.a)({},t),{},{role:"admin"}),!V){e.next=8;break}return k(!1),C(!1),e.next=7,Object(v.d)(c,L);case 7:n=e.sent;case 8:(null===(a=n)||void 0===a?void 0:a.status)?(z("firstName"),z("lastName"),z("email"),z("password"),k(!0)):(C(!0),w(null===(i=n)||void 0===i?void 0:i.error));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(u.M,{children:[Object(h.jsx)(d.f,{}),P&&Object(h.jsxs)(b.a,{children:[" ",O]}),y&&Object(h.jsxs)(b.a,{children:[" ","Success Ajout ou Edite"]}),Object(h.jsx)(u.m,{xs:12,children:Object(h.jsxs)(u.h,{className:"mb-4",children:[Object(h.jsx)(u.l,{children:Object(h.jsxs)(u.M,{children:[Object(h.jsx)(u.m,{sm:5,children:Object(h.jsx)("strong",{children:"Ajout Administrateur"})}),Object(h.jsx)(u.m,{sm:7,children:Object(h.jsx)(u.g,{className:"float-end me-3",children:Object(h.jsx)(u.f,{color:"outline-secondary",className:"mx-0",onClick:function(){F.push("/administrateurs")},children:"Retour"})})})]})}),Object(h.jsx)(u.i,{children:Object(h.jsxs)(u.v,{className:"row g-3 needs-validation ".concat(V&&"was-validated"),onSubmit:E(D),children:[Object(h.jsxs)(u.m,{md:6,children:[Object(h.jsx)(u.y,{htmlFor:"firstName",children:"firstName"}),Object(h.jsx)(u.x,Object(r.a)({type:"text",id:"firstName",required:!0},A("firstName"))),Object(h.jsx)(u.w,{invalid:!0,children:null===(e=M.firstName)||void 0===e?void 0:e.message})]}),Object(h.jsxs)(u.m,{md:6,children:[Object(h.jsx)(u.y,{htmlFor:"lastName",children:"lastName"}),Object(h.jsx)(u.x,Object(r.a)({type:"text",id:"lastName",required:!0},A("lastName"))),Object(h.jsx)(u.w,{invalid:!0,children:null===(t=M.lastName)||void 0===t?void 0:t.message})]}),Object(h.jsxs)(u.m,{md:6,children:[Object(h.jsx)(u.y,{htmlFor:"email",children:"email"}),Object(h.jsx)(u.x,Object(r.a)({type:"email",id:"email",required:!0},A("email"))),Object(h.jsx)(u.w,{invalid:!0,children:null===(a=M.email)||void 0===a?void 0:a.message})]}),Object(h.jsxs)(u.m,{md:6,children:[Object(h.jsx)(u.y,{htmlFor:"password",children:"paswword"}),Object(h.jsx)(u.x,Object(r.a)({type:"text",id:"password",required:!0},A("password"))),Object(h.jsx)(u.w,{invalid:!0,children:null===(n=M.paswword)||void 0===n?void 0:n.message})]}),Object(h.jsx)(u.m,{xs:12,children:Object(h.jsx)(u.f,{color:"primary",type:"submit",className:R?"disabled":" ",children:"Submit"})})]})})]})})]})}}}]);
//# sourceMappingURL=17.12ac8f9e.chunk.js.map