(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[11],{550:function(e,t,n){"use strict";n(0);var r=n(4),a=n(2),s=function(e){var t=e.variant,n=e.children;return Object(a.jsx)(r.a,{color:t,children:n})};s.defaultProps={variant:"info"},t.a=s},551:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com"}},552:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return d}));var r=n(548),a=n.n(r),s=n(549),c=n(558),o=n.n(c),u=n(551),i=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r,s,c,i,l,p,d=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:null,n=d.length>1&&void 0!==d[1]?d[1]:null,e.prev=2,r={headers:{"Content-Type":"application/json"}},s="local"===u.a.env?u.a.endpointLocal:u.a.endpointProd,c=null,c=n?"".concat(s,"/api/users/").concat(n):t?"".concat(s,"/api/users?type=").concat(t):"".concat(s,"/api/users"),e.next=9,o.a.get("".concat(c),r);case 9:return i=e.sent,l=i.data,e.abrupt("return",{status:!0,data:l});case 14:return e.prev=14,e.t0=e.catch(2),p=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:p});case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"}},r="local"===u.a.env?u.a.endpointLocal:u.a.endpointProd,e.next=5,o.a.delete("".concat(r,"/api/users/").concat(t),n);case 5:return s=e.sent,c=s.data,e.abrupt("return",{status:!0,data:c});case 10:return e.prev=10,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:i});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,i,l,p=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=p.length>1&&void 0!==p[1]?p[1]:null,e.prev=1,s={headers:{"Content-Type":"application/json"}},c="local"===u.a.env?u.a.endpointLocal:u.a.endpointProd,i=null,!n){e.next=11;break}return e.next=8,o.a.put("".concat(c,"/api/users/").concat(n),t,s);case 8:i=e.sent,e.next=14;break;case 11:return e.next=13,o.a.post("".concat(c,"/api/users"),t,s);case 13:i=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(r=i)||void 0===r?void 0:r.data});case 17:return e.prev=17,e.t0=e.catch(1),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"}},r="local"===u.a.env?u.a.endpointLocal:u.a.endpointProd,e.next=5,o.a.post("".concat(r,"/api/users/login"),t,n);case 5:return s=e.sent,c=s.data,e.abrupt("return",{status:!0,data:c});case 10:return e.prev=10,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:i});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},554:function(e,t,n){"use strict";n(0);var r=n(4),a=n(2);t.a=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(r.Q,{color:"primary",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading ..."})})})}},759:function(e,t,n){"use strict";n.r(t);var r=n(548),a=n.n(r),s=n(549),c=n(553),o=n(0),u=n(4),i=n(26),l=n(174),p=n(554),d=n(550),j=n(552),h=n(2);t.default=function(){var e=Object(i.i)().id,t=Object(i.g)(),n=Object(o.useState)(null),r=Object(c.a)(n,2),b=r[0],f=r[1],v=Object(o.useState)(null),x=Object(c.a)(v,2),O=x[0],m=x[1];Object(o.useEffect)((function(){function t(){return(t=Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.c)(null,e);case 2:(null===(n=t.sent)||void 0===n?void 0:n.status)?f(null===n||void 0===n?void 0:n.data):m(null===n||void 0===n?void 0:n.error);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}console.log("Run once, when the component mounts"),function(){t.apply(this,arguments)}()}),[e]);var g=function(){var e=Object(s.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.b)(n);case 2:e.sent.status&&t.push("/administrateurs");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return null===b?Object(h.jsx)(p.a,{}):O?Object(h.jsxs)(d.a,{children:[" ",O]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(l.f,{}),Object(h.jsx)(u.L,{children:Object(h.jsx)(u.m,{xs:12,children:Object(h.jsxs)(u.h,{className:"mb-4",children:[Object(h.jsx)(u.l,{children:Object(h.jsxs)(u.L,{children:[Object(h.jsx)(u.m,{sm:5,children:Object(h.jsxs)("strong",{children:["Administrateur ",e]})}),Object(h.jsx)(u.m,{sm:7,children:Object(h.jsxs)(u.g,{className:"float-end me-3",children:[Object(h.jsx)(u.f,{color:"outline-secondary",className:"mx-1",onClick:function(){t.push("/administrateurs")},children:"Retour"}),Object(h.jsx)(u.f,{color:"outline-danger",className:"mx-0",onClick:function(){return g(null===b||void 0===b?void 0:b._id)},children:"Suppprimer"})]})})]})}),Object(h.jsx)(u.i,{children:Object(h.jsx)(u.R,{children:Object(h.jsxs)(u.S,{children:[Object(h.jsxs)(u.W,{children:[Object(h.jsx)(u.T,{children:"firstName"}),Object(h.jsx)(u.T,{children:b.firstName})]}),Object(h.jsxs)(u.W,{children:[Object(h.jsx)(u.T,{children:"lastName"}),Object(h.jsx)(u.T,{children:b.lastName})]}),Object(h.jsxs)(u.W,{children:[Object(h.jsx)(u.T,{children:"email"}),Object(h.jsx)(u.T,{children:b.email})]}),Object(h.jsxs)(u.W,{children:[Object(h.jsx)(u.T,{children:"Creation"}),Object(h.jsx)(u.T,{children:b.createdAt})]})]})})})]})})})]})}}}]);
//# sourceMappingURL=11.01577f3f.chunk.js.map