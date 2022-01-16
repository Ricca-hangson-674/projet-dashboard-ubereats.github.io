(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[18],{553:function(e,t,a){"use strict";a(0);var s=a(4),r=a(2),n=function(e){var t=e.variant,a=e.children;return Object(r.jsx)(s.a,{color:t,children:a})};n.defaultProps={variant:"info"},t.a=n},554:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var s={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com"}},555:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return u})),a.d(t,"d",(function(){return d})),a.d(t,"a",(function(){return p}));var s=a(551),r=a.n(s),n=a(552),c=a(560),o=a.n(c),i=a(554),l=function(){var e=Object(n.a)(r.a.mark((function e(){var t,a,s,n,c,l,u,d,p=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:null,a=p.length>1&&void 0!==p[1]?p[1]:null,e.prev=2,s={headers:{"Content-Type":"application/json"}},n="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,c=null,c=a?"".concat(n,"/api/users/").concat(a):t?"".concat(n,"/api/users?type=").concat(t):"".concat(n,"/api/users"),e.next=9,o.a.get("".concat(c),s);case 9:return l=e.sent,u=l.data,e.abrupt("return",{status:!0,data:u});case 14:return e.prev=14,e.t0=e.catch(2),d=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:d});case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(n.a)(r.a.mark((function e(t){var a,s,n,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={headers:{"Content-Type":"application/json"}},s="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,e.next=5,o.a.delete("".concat(s,"/api/users/").concat(t),a);case 5:return n=e.sent,c=n.data,e.abrupt("return",{status:!0,data:c});case 10:return e.prev=10,e.t0=e.catch(0),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(n.a)(r.a.mark((function e(t){var a,s,n,c,l,u,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=d.length>1&&void 0!==d[1]?d[1]:null,e.prev=1,n={headers:{"Content-Type":"application/json"}},c="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,l=null,!a){e.next=11;break}return e.next=8,o.a.put("".concat(c,"/api/users/").concat(a),t,n);case 8:l=e.sent,e.next=14;break;case 11:return e.next=13,o.a.post("".concat(c,"/api/users"),t,n);case 13:l=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(s=l)||void 0===s?void 0:s.data});case 17:return e.prev=17,e.t0=e.catch(1),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(n.a)(r.a.mark((function e(t){var a,s,n,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={headers:{"Content-Type":"application/json"}},s="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,e.next=5,o.a.post("".concat(s,"/api/users/login"),t,a);case 5:return n=e.sent,c=n.data,e.abrupt("return",{status:!0,data:c});case 10:return e.prev=10,e.t0=e.catch(0),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},753:function(e,t,a){"use strict";a.r(t);var s=a(28),r=a(551),n=a.n(r),c=a(552),o=a(175),i=a(0),l=a(4),u=a(19),d=a(540),p=a(544),j=a(57),b=a(568),m=a(587),h=a(586),v=a(553),x=a(555),O=a(2),f=h.a().shape({firstName:h.c().required("firstName is required"),lastName:h.c().required("lastName is required"),email:h.c().email("email must email valid").required("email is required"),password:h.c().required("password are required"),confirmPassword:h.c().oneOf([h.b("password"),null],"Passwords must match")});t.default=function(){var e,t,a,r,h,w=Object(i.useState)(null),g=Object(o.a)(w,2),N=g[0],y=g[1],k=Object(i.useState)(!1),C=Object(o.a)(k,2),P=C[0],S=C[1],q=Object(i.useState)(!1),E=Object(o.a)(q,2),L=E[0],F=E[1],T=Object(i.useState)(!1),J=Object(o.a)(T,2),R=J[0],A=J[1],I=Object(b.d)({resolver:Object(m.a)(f),mode:"onTouched"}),V=I.register,z=I.handleSubmit,B=I.formState,D=B.errors,G=B.isSubmitting,H=B.isSubmitted,K=B.isValid,M=I.resetField;Object(i.useEffect)((function(){console.log("useEffect",G,K),(K||G||H)&&A(!0)}),[K,G,H]);var Q=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,s,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=null,console.log("onSubmit",G,H,K),(K||G||H)&&(A(!0),console.log("condition",R)),!R){e.next=9;break}return S(!1),F(!1),e.next=8,Object(x.d)(t);case 8:s=e.sent;case 9:(null===(a=s)||void 0===a?void 0:a.status)?(M("email"),M("password"),S(!0)):(F(!0),y(null===(r=s)||void 0===r?void 0:r.error));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log("error",D,G,K),Object(O.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:Object(O.jsx)(l.n,{children:Object(O.jsxs)(l.L,{className:"justify-content-center",children:[L&&Object(O.jsxs)(v.a,{children:[" ",N]}),P&&Object(O.jsxs)(v.a,{children:["Success register",Object(O.jsx)(j.b,{to:"/login",children:Object(O.jsx)(l.f,{color:"primary",className:"mt-3",active:!0,tabIndex:-1,children:"Login Now!"})})]}),Object(O.jsx)(l.m,{md:9,lg:7,xl:6,children:Object(O.jsx)(l.h,{className:"mx-4",children:Object(O.jsx)(l.i,{className:"p-4",children:Object(O.jsxs)(l.v,{className:"row g-3 needs-validation ".concat(R&&"was-validated"),onSubmit:z(Q),children:[Object(O.jsx)("h1",{children:"Register"}),Object(O.jsx)("p",{className:"text-medium-emphasis",children:"Create your account"}),Object(O.jsxs)(l.E,{className:"mb-3",children:[Object(O.jsx)(l.F,{children:Object(O.jsx)(u.a,{icon:d.a})}),Object(O.jsx)(l.x,Object(s.a)({placeholder:"firstName",autoComplete:"firstName"},V("firstName"))),Object(O.jsx)(l.w,{invalid:!0,children:null===(e=D.firstName)||void 0===e?void 0:e.message})]}),Object(O.jsxs)(l.E,{className:"mb-3",children:[Object(O.jsx)(l.F,{children:Object(O.jsx)(u.a,{icon:d.a})}),Object(O.jsx)(l.x,Object(s.a)({placeholder:"lastName",autoComplete:"lastName"},V("lastName"))),Object(O.jsx)(l.w,{invalid:!0,children:null===(t=D.lastName)||void 0===t?void 0:t.message})]}),Object(O.jsxs)(l.E,{className:"mb-3",children:[Object(O.jsx)(l.F,{children:"@"}),Object(O.jsx)(l.x,Object(s.a)({placeholder:"Email",autoComplete:"email"},V("email"))),Object(O.jsx)(l.w,{invalid:!0,children:null===(a=D.email)||void 0===a?void 0:a.message})]}),Object(O.jsxs)(l.E,{className:"mb-3",children:[Object(O.jsx)(l.F,{children:Object(O.jsx)(u.a,{icon:p.a})}),Object(O.jsx)(l.x,Object(s.a)({type:"password",placeholder:"Password",autoComplete:"new-password"},V("password"))),Object(O.jsx)(l.w,{invalid:!0,children:null===(r=D.password)||void 0===r?void 0:r.message})]}),Object(O.jsxs)(l.E,{className:"mb-4",children:[Object(O.jsx)(l.F,{children:Object(O.jsx)(u.a,{icon:p.a})}),Object(O.jsx)(l.x,Object(s.a)({type:"password",placeholder:"Repeat password",autoComplete:"new-password"},V("confirmPassword"))),Object(O.jsx)(l.w,{invalid:!0,children:null===(h=D.confirmPassword)||void 0===h?void 0:h.message})]}),Object(O.jsx)("div",{className:"d-grid",children:Object(O.jsx)(l.f,{color:"success",type:"submit",children:"Create Account"})})]})})})})]})})})}}}]);
//# sourceMappingURL=18.a982d657.chunk.js.map