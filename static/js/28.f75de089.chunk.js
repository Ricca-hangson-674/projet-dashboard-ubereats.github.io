(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[28],{551:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com"}},554:function(e,t,n){"use strict";n(0);var r=n(4),a=n(2),c=function(e){var t=e.variant,n=e.children;return Object(a.jsx)(r.a,{color:t,children:n})};c.defaultProps={variant:"info"},t.a=c},608:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d}));var r=n(552),a=n.n(r),c=n(553),s=n(555),i=n.n(s),o=n(551),u=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r,c,s,u,d,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:null,e.prev=1,n={headers:{"Content-Type":"application/json"}},r="local"===o.a.env?o.a.endpointLocal:o.a.endpointProd,c=t?"".concat(r,"/api/options/").concat(t):"".concat(r,"/api/options"),e.next=7,i.a.get("".concat(c),n);case 7:return s=e.sent,u=s.data,e.abrupt("return",{status:!0,data:u});case 12:return e.prev=12,e.t0=e.catch(1),d=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:d});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,u,d,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=l.length>1&&void 0!==l[1]?l[1]:null,e.prev=1,c={headers:{"Content-Type":"application/json"}},s="local"===o.a.env?o.a.endpointLocal:o.a.endpointProd,u=null,!n){e.next=11;break}return e.next=8,i.a.put("".concat(s,"/api/options/").concat(n),t,c);case 8:u=e.sent,e.next=14;break;case 11:return e.next=13,i.a.post("".concat(s,"/api/options"),t,c);case 13:u=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(r=u)||void 0===r?void 0:r.data});case 17:return e.prev=17,e.t0=e.catch(1),d=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:d});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()},820:function(e,t,n){"use strict";n.r(t);var r=n(28),a=n(552),c=n.n(a),s=n(553),i=n(556),o=n(0),u=n(4),d=n(174),l=n(563),p=n(567),j=n(566),b=n(26),v=n(554),h=n(608),O=n(2),f=j.d().shape({name:j.f().required("name is required"),price:j.c().required("price is required")});t.default=function(){var e,t,n=Object(o.useState)(null),a=Object(i.a)(n,2),j=a[0],m=a[1],x=Object(o.useState)(!1),g=Object(i.a)(x,2),w=g[0],y=g[1],k=Object(o.useState)(!1),S=Object(i.a)(k,2),q=S[0],N=S[1],L=Object(o.useState)(!1),P=Object(i.a)(L,2),A=P[0],C=P[1],F=Object(b.g)(),T=Object(b.i)().id,z=Object(l.e)({resolver:Object(p.a)(f),mode:"onTouched"}),E=z.register,J=z.handleSubmit,R=z.formState,U=R.errors,V=R.isSubmitting,_=R.isValid,B=z.resetField,D=z.setValue;Object(o.useEffect)((function(){if(console.log("Run once, when the component mounts"),T){var e=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.b)(null,T);case 2:(null===(t=e.sent)||void 0===t?void 0:t.status)?(D("name",null===t||void 0===t?void 0:t.data.name),D("price",null===t||void 0===t?void 0:t.data.price)):m(null===t||void 0===t?void 0:t.error);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[T,D]);var G=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a,s,i,o,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=null,s=Object(r.a)(Object(r.a)({},t),{},{optionList:"615f3773e92ecf47502c8568"}),!_){e.next=8;break}return y(!1),N(!1),e.next=7,Object(h.a)(s,T);case 7:a=e.sent;case 8:(null===(n=a)||void 0===n?void 0:n.status)?(B("name"),B("price"),C(null===(i=a)||void 0===i||null===(o=i.data)||void 0===o?void 0:o._id),y(!0)):(N(!0),m(null===(u=a)||void 0===u?void 0:u.error));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)(u.U,{children:[Object(O.jsx)(d.f,{}),q&&Object(O.jsxs)(v.a,{children:[" ",j]}),w&&Object(O.jsxs)(v.a,{children:[" ","Success Ajout ou Edite"]}),Object(O.jsx)(u.o,{xs:12,children:Object(O.jsxs)(u.h,{className:"mb-4",children:[Object(O.jsx)(u.l,{children:Object(O.jsxs)(u.U,{children:[Object(O.jsx)(u.o,{sm:5,children:Object(O.jsx)("strong",{children:"Ajout Option"})}),Object(O.jsx)(u.o,{sm:7,children:Object(O.jsx)(u.g,{className:"float-end me-3",children:Object(O.jsx)(u.f,{color:"outline-secondary",className:"mx-0",onClick:function(){return function(){var e=A?[A]:[];F.push("/ajout-optionList?options=".concat(e))}()},children:"Retour"})})})]})}),Object(O.jsx)(u.i,{children:Object(O.jsxs)(u.x,{className:"row g-3 needs-validation ".concat(_&&"was-validated"),onSubmit:J(G),children:[Object(O.jsxs)(u.o,{md:6,children:[Object(O.jsx)(u.A,{htmlFor:"name",children:"Name"}),Object(O.jsx)(u.z,Object(r.a)({type:"text",id:"name",required:!0},E("name"))),Object(O.jsx)(u.y,{invalid:!0,children:null===(e=U.name)||void 0===e?void 0:e.message})]}),Object(O.jsxs)(u.o,{md:6,children:[Object(O.jsx)(u.A,{htmlFor:"price",children:"Price"}),Object(O.jsx)(u.z,Object(r.a)({type:"number",id:"price",required:!0},E("price"))),Object(O.jsx)(u.y,{invalid:!0,children:null===(t=U.price)||void 0===t?void 0:t.message})]}),Object(O.jsx)(u.o,{xs:12,children:Object(O.jsx)(u.f,{color:"primary",type:"submit",className:V?"disabled":" ",children:"Submit"})})]})})]})})]})}}}]);
//# sourceMappingURL=28.f75de089.chunk.js.map