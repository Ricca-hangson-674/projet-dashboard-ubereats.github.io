(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[26],{552:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var s={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com"}},553:function(e,t,a){"use strict";a(0);var s=a(4),r=a(2),n=function(e){var t=e.variant,a=e.children;return Object(r.jsx)(s.a,{color:t,children:a})};n.defaultProps={variant:"info"},t.a=n},556:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return d})),a.d(t,"d",(function(){return u})),a.d(t,"a",(function(){return p}));var s=a(550),r=a.n(s),n=a(551),c=a(555),i=a.n(c),o=a(552),l=function(){var e=Object(n.a)(r.a.mark((function e(){var t,a,s,n,c,l,d,u,p=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:null,a=p.length>1&&void 0!==p[1]?p[1]:null,e.prev=2,s={headers:{"Content-Type":"application/json"}},n="local"===o.a.env?o.a.endpointLocal:o.a.endpointProd,c=null,c=a?"".concat(n,"/api/users/").concat(a):t?"".concat(n,"/api/users?type=").concat(t):"".concat(n,"/api/users"),e.next=9,i.a.get("".concat(c),s);case 9:return l=e.sent,d=l.data,e.abrupt("return",{status:!0,data:d});case 14:return e.prev=14,e.t0=e.catch(2),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(n.a)(r.a.mark((function e(t){var a,s,n,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={headers:{"Content-Type":"application/json"}},s="local"===o.a.env?o.a.endpointLocal:o.a.endpointProd,e.next=5,i.a.delete("".concat(s,"/api/users/").concat(t),a);case 5:return n=e.sent,c=n.data,e.abrupt("return",{status:!0,data:c});case 10:return e.prev=10,e.t0=e.catch(0),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(n.a)(r.a.mark((function e(t){var a,s,n,c,l,d,u=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=u.length>1&&void 0!==u[1]?u[1]:null,e.prev=1,n={headers:{"Content-Type":"application/json"}},c="local"===o.a.env?o.a.endpointLocal:o.a.endpointProd,l=null,!a){e.next=11;break}return e.next=8,i.a.put("".concat(c,"/api/users/").concat(a),t,n);case 8:l=e.sent,e.next=14;break;case 11:return e.next=13,i.a.post("".concat(c,"/api/users"),t,n);case 13:l=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(s=l)||void 0===s?void 0:s.data});case 17:return e.prev=17,e.t0=e.catch(1),d=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:d});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(n.a)(r.a.mark((function e(t){var a,s,n,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={headers:{"Content-Type":"application/json"}},s="local"===o.a.env?o.a.endpointLocal:o.a.endpointProd,e.next=5,i.a.post("".concat(s,"/api/users/login"),t,a);case 5:return n=e.sent,c=n.data,e.abrupt("return",{status:!0,data:c});case 10:return e.prev=10,e.t0=e.catch(0),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},776:function(e,t,a){"use strict";a.r(t);var s=a(28),r=a(550),n=a.n(r),c=a(551),i=a(554),o=a(0),l=a(4),d=a(20),u=a(539),p=a(543),j=a(52),m=a(562),b=a(569),v=a(567),h=a(553),f=a(556),x=a(2),O=v.d().shape({firstName:v.f().required("firstName is required"),lastName:v.f().required("lastName is required"),email:v.f().email("email must email valid").required("email is required"),password:v.f().required("password are required"),confirmPassword:v.f().oneOf([v.e("password"),null],"Passwords must match")});t.default=function(){var e,t,a,r,v,g,w,N,y,P,k=Object(o.useState)(null),C=Object(i.a)(k,2),q=C[0],S=C[1],J=Object(o.useState)(!1),I=Object(i.a)(J,2),L=I[0],z=I[1],T=Object(o.useState)(!1),R=Object(i.a)(T,2),V=R[0],A=R[1],E=Object(m.e)({resolver:Object(b.a)(O),mode:"onTouched"}),F=E.register,B=E.handleSubmit,D=E.formState,G=D.errors,H=D.isSubmitting,K=D.isValid,M=E.resetField,Q=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,s,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=null,!K){e.next=7;break}return z(!1),A(!1),e.next=6,Object(f.d)(t);case 6:s=e.sent;case 7:(null===(a=s)||void 0===a?void 0:a.status)?(M("firstName"),M("lastName"),M("email"),M("password"),M("confirmPassword"),z(!0)):(A(!0),S(null===(r=s)||void 0===r?void 0:r.error));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:Object(x.jsx)(l.p,{children:Object(x.jsxs)(l.P,{className:"justify-content-center mt-3",children:[Object(x.jsxs)(l.o,{md:9,lg:7,xl:6,children:[V&&Object(x.jsxs)(h.a,{children:[" ",q]}),L&&Object(x.jsxs)(h.a,{children:["Success register",Object(x.jsx)(j.b,{to:"/login",className:"my-2",children:Object(x.jsx)(l.f,{color:"primary",className:"mt-3 my-2",active:!0,tabIndex:-1,children:"Login Now!"})})]})]}),Object(x.jsx)(l.o,{md:9,lg:7,xl:6,children:Object(x.jsx)(l.h,{className:"mx-4",children:Object(x.jsx)(l.i,{className:"p-4",children:Object(x.jsxs)(l.x,{noValidate:!0,onSubmit:B(Q),children:[Object(x.jsx)("h1",{children:"Register"}),Object(x.jsx)("p",{className:"text-medium-emphasis",children:"Create your account"}),Object(x.jsxs)(l.I,{className:"mb-3",children:[Object(x.jsx)(l.J,{children:Object(x.jsx)(d.a,{icon:u.a})}),Object(x.jsx)(l.z,Object(s.a)({invalid:!!(null===(e=G.firstName)||void 0===e?void 0:e.message),placeholder:"firstName",autoComplete:"firstName"},F("firstName"))),Object(x.jsx)(l.y,{invalid:!0,children:null===(t=G.firstName)||void 0===t?void 0:t.message})]}),Object(x.jsxs)(l.I,{className:"mb-3",children:[Object(x.jsx)(l.J,{children:Object(x.jsx)(d.a,{icon:u.a})}),Object(x.jsx)(l.z,Object(s.a)({invalid:!!(null===(a=G.lastName)||void 0===a?void 0:a.message),placeholder:"lastName",autoComplete:"lastName"},F("lastName"))),Object(x.jsx)(l.y,{invalid:!0,children:null===(r=G.lastName)||void 0===r?void 0:r.message})]}),Object(x.jsxs)(l.I,{className:"mb-3",children:[Object(x.jsx)(l.J,{children:"@"}),Object(x.jsx)(l.z,Object(s.a)({invalid:!!(null===(v=G.email)||void 0===v?void 0:v.message),placeholder:"Email",autoComplete:"email"},F("email"))),Object(x.jsx)(l.y,{invalid:!0,children:null===(g=G.email)||void 0===g?void 0:g.message})]}),Object(x.jsxs)(l.I,{className:"mb-3",children:[Object(x.jsx)(l.J,{children:Object(x.jsx)(d.a,{icon:p.a})}),Object(x.jsx)(l.z,Object(s.a)({invalid:!!(null===(w=G.password)||void 0===w?void 0:w.message),type:"password",placeholder:"Password",autoComplete:"new-password"},F("password"))),Object(x.jsx)(l.y,{invalid:!0,children:null===(N=G.password)||void 0===N?void 0:N.message})]}),Object(x.jsxs)(l.I,{className:"mb-4",children:[Object(x.jsx)(l.J,{children:Object(x.jsx)(d.a,{icon:p.a})}),Object(x.jsx)(l.z,Object(s.a)({invalid:!!(null===(y=G.confirmPassword)||void 0===y?void 0:y.message),type:"password",placeholder:"Repeat password",autoComplete:"new-password"},F("confirmPassword"))),Object(x.jsx)(l.y,{invalid:!0,children:null===(P=G.confirmPassword)||void 0===P?void 0:P.message})]}),Object(x.jsx)("div",{className:"d-grid",children:Object(x.jsx)(l.f,{className:H?"disabled":"",color:"success",type:"submit",children:"Create Account"})})]})})})})]})})})}}}]);
//# sourceMappingURL=26.b0918319.chunk.js.map