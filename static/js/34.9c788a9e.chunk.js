(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[34],{551:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com"}},554:function(e,t,a){"use strict";a(0);var r=a(4),n=a(2),s=function(e){var t=e.variant,a=e.children;return Object(n.jsx)(r.a,{color:t,children:a})};s.defaultProps={variant:"info"},t.a=s},559:function(e,t,a){"use strict";a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return l})),a.d(t,"d",(function(){return d})),a.d(t,"a",(function(){return p}));var r=a(552),n=a.n(r),s=a(553),c=a(555),i=a.n(c),o=a(551),u=function(){var e=Object(s.a)(n.a.mark((function e(){var t,a,r,s,c,u,l,d,p=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:null,a=p.length>1&&void 0!==p[1]?p[1]:null,e.prev=2,r={headers:{"Content-Type":"application/json"}},s="local"===o.a.env?o.a.endpointLocal:o.a.endpointProd,c=null,c=a?"".concat(s,"/api/users/").concat(a):t?"".concat(s,"/api/users?type=").concat(t):"".concat(s,"/api/users"),e.next=9,i.a.get("".concat(c),r);case 9:return u=e.sent,l=u.data,e.abrupt("return",{status:!0,data:l});case 14:return e.prev=14,e.t0=e.catch(2),d=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:d});case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r,s,c,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={headers:{"Content-Type":"application/json"}},r="local"===o.a.env?o.a.endpointLocal:o.a.endpointProd,e.next=5,i.a.delete("".concat(r,"/api/users/").concat(t),a);case 5:return s=e.sent,c=s.data,e.abrupt("return",{status:!0,data:c});case 10:return e.prev=10,e.t0=e.catch(0),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r,s,c,u,l,d=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=d.length>1&&void 0!==d[1]?d[1]:null,e.prev=1,s={headers:{"Content-Type":"application/json"}},c="local"===o.a.env?o.a.endpointLocal:o.a.endpointProd,u=null,!a){e.next=11;break}return e.next=8,i.a.put("".concat(c,"/api/users/").concat(a),t,s);case 8:u=e.sent,e.next=14;break;case 11:return e.next=13,i.a.post("".concat(c,"/api/users"),t,s);case 13:u=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(r=u)||void 0===r?void 0:r.data});case 17:return e.prev=17,e.t0=e.catch(1),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r,s,c,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={headers:{"Content-Type":"application/json"}},r="local"===o.a.env?o.a.endpointLocal:o.a.endpointProd,e.next=5,i.a.post("".concat(r,"/api/users/login"),t,a);case 5:return s=e.sent,c=s.data,e.abrupt("return",{status:!0,data:c});case 10:return e.prev=10,e.t0=e.catch(0),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},797:function(e,t,a){"use strict";a.r(t);var r=a(27),n=a(552),s=a.n(n),c=a(553),i=a(557),o=a(0),u=a(52),l=a(4),d=a(18),p=a(540),j=a(544),b=a(562),h=a(566),m=a(565),v=a(26),x=a(554),O=a(559),f=a(2),g=m.e().shape({email:m.g().email("email must email valid").required("email is required"),password:m.g().required("password are required")});t.default=function(){var e,t,a,n,m=Object(o.useState)(null),w=Object(i.a)(m,2),y=w[0],N=w[1],k=Object(o.useState)(!1),S=Object(i.a)(k,2),L=S[0],P=S[1],C=Object(o.useState)(!1),q=Object(i.a)(C,2),I=q[0],J=q[1],T=Object(v.g)(),z=Object(b.e)({resolver:Object(h.a)(g),mode:"onTouched"}),E=z.register,F=z.handleSubmit,U=z.formState,V=U.errors,A=U.isSubmitting,R=U.isValid,B=z.resetField,D=function(){var e=Object(c.a)(s.a.mark((function e(t){var a,r,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=null,!R){e.next=7;break}return P(!1),J(!1),e.next=6,Object(O.a)(t);case 6:r=e.sent;case 7:(null===(a=r)||void 0===a?void 0:a.status)?(B("email"),B("password"),P(!0),localStorage.setItem("user",JSON.stringify(null===(n=r)||void 0===n?void 0:n.data)),T.push("/")):(J(!0),N(null===(c=r)||void 0===c?void 0:c.error));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:Object(f.jsxs)(l.p,{children:[I&&Object(f.jsxs)(x.a,{children:[" ",y]}),L&&Object(f.jsxs)(x.a,{children:[" ","Success Ajout ou Edite"]}),Object(f.jsx)(l.U,{className:"justify-content-center",children:Object(f.jsx)(l.o,{md:8,children:Object(f.jsxs)(l.k,{children:[Object(f.jsx)(l.h,{className:"p-4",children:Object(f.jsx)(l.i,{children:Object(f.jsxs)(l.x,{className:"row g-3",noValidate:!0,onSubmit:F(D),children:[Object(f.jsx)("h1",{children:"Login"}),Object(f.jsx)("p",{className:"text-medium-emphasis",children:"Sign In to your account"}),Object(f.jsxs)(l.I,{className:"mb-3",children:[Object(f.jsx)(l.J,{children:Object(f.jsx)(d.a,{icon:p.a})}),Object(f.jsx)(l.z,Object(r.a)({invalid:!!(null===(e=V.email)||void 0===e?void 0:e.message),placeholder:"Email",autoComplete:"email"},E("email"))),Object(f.jsx)(l.y,{invalid:!0,children:null===(t=V.email)||void 0===t?void 0:t.message})]}),Object(f.jsxs)(l.I,{className:"mb-4",children:[Object(f.jsx)(l.J,{children:Object(f.jsx)(d.a,{icon:j.a})}),Object(f.jsx)(l.z,Object(r.a)({invalid:!!(null===(a=V.password)||void 0===a?void 0:a.message),type:"password",placeholder:"Password",autoComplete:"current-password"},E("password"))),Object(f.jsx)(l.y,{invalid:!0,children:null===(n=V.password)||void 0===n?void 0:n.message})]}),Object(f.jsxs)(l.U,{children:[Object(f.jsx)(l.o,{xs:6,children:Object(f.jsx)(l.f,{color:"primary",type:"submit",className:"px-4 ".concat(A?"disabled":" "),children:"Login"})}),Object(f.jsx)(l.o,{xs:6,className:"text-right",children:Object(f.jsx)(l.f,{color:"link",type:"button",className:"px-0",children:"Forgot password?"})})]})]})})}),Object(f.jsx)(l.h,{className:"text-white bg-primary py-5",style:{width:"44%"},children:Object(f.jsx)(l.i,{className:"text-center",children:Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Sign up"}),Object(f.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(f.jsx)(u.b,{to:"/register",children:Object(f.jsx)(l.f,{color:"primary",className:"mt-3",active:!0,tabIndex:-1,children:"Register Now!"})})]})})})]})})})]})})}}}]);
//# sourceMappingURL=34.9c788a9e.chunk.js.map