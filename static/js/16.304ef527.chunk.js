(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[16],{553:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com"}},554:function(e,t,n){"use strict";n(0);var r=n(4),a=n(2),s=function(e){var t=e.variant,n=e.children;return Object(a.jsx)(r.a,{color:t,children:n})};s.defaultProps={variant:"info"},t.a=s},557:function(e,t,n){"use strict";n(0);var r=n(4),a=n(2);t.a=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(r.U,{color:"primary",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading ..."})})})}},558:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return d}));var r=n(551),a=n.n(r),s=n(552),c=n(556),o=n.n(c),u=n(553),i=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r,s,c,i,l,p,d=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:null,n=d.length>1&&void 0!==d[1]?d[1]:null,e.prev=2,r={headers:{"Content-Type":"application/json"}},s="local"===u.a.env?u.a.endpointLocal:u.a.endpointProd,c=null,c=n?"".concat(s,"/api/users/").concat(n):t?"".concat(s,"/api/users?type=").concat(t):"".concat(s,"/api/users"),e.next=9,o.a.get("".concat(c),r);case 9:return i=e.sent,l=i.data,e.abrupt("return",{status:!0,data:l});case 14:return e.prev=14,e.t0=e.catch(2),p=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:p});case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"}},r="local"===u.a.env?u.a.endpointLocal:u.a.endpointProd,e.next=5,o.a.delete("".concat(r,"/api/users/").concat(t),n);case 5:return s=e.sent,c=s.data,e.abrupt("return",{status:!0,data:c});case 10:return e.prev=10,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:i});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,i,l,p=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=p.length>1&&void 0!==p[1]?p[1]:null,e.prev=1,s={headers:{"Content-Type":"application/json"}},c="local"===u.a.env?u.a.endpointLocal:u.a.endpointProd,i=null,!n){e.next=11;break}return e.next=8,o.a.put("".concat(c,"/api/users/").concat(n),t,s);case 8:i=e.sent,e.next=14;break;case 11:return e.next=13,o.a.post("".concat(c,"/api/users"),t,s);case 13:i=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(r=i)||void 0===r?void 0:r.data});case 17:return e.prev=17,e.t0=e.catch(1),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"}},r="local"===u.a.env?u.a.endpointLocal:u.a.endpointProd,e.next=5,o.a.post("".concat(r,"/api/users/login"),t,n);case 5:return s=e.sent,c=s.data,e.abrupt("return",{status:!0,data:c});case 10:return e.prev=10,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:i});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},784:function(e,t,n){"use strict";n.r(t);var r=n(551),a=n.n(r),s=n(552),c=n(555),o=n(0),u=n(4),i=n(26),l=n(174),p=n(557),d=n(554),j=n(558),b=n(2);t.default=function(){var e=Object(i.i)().id,t=Object(i.g)(),n=Object(o.useState)(null),r=Object(c.a)(n,2),h=r[0],f=r[1],v=Object(o.useState)(null),x=Object(c.a)(v,2),O=x[0],m=x[1];Object(o.useEffect)((function(){function t(){return(t=Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.c)(null,e);case 2:(null===(n=t.sent)||void 0===n?void 0:n.status)?f(null===n||void 0===n?void 0:n.data):m(null===n||void 0===n?void 0:n.error);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}console.log("Run once, when the component mounts"),function(){t.apply(this,arguments)}()}),[e]);var g=function(){var e=Object(s.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.b)(n);case 2:e.sent.status&&t.push("/clients");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return null===h?Object(b.jsx)(p.a,{}):O?Object(b.jsxs)(d.a,{children:[" ",O]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.f,{}),Object(b.jsx)(u.P,{children:Object(b.jsx)(u.o,{xs:12,children:Object(b.jsxs)(u.h,{className:"mb-4",children:[Object(b.jsx)(u.l,{children:Object(b.jsxs)(u.P,{children:[Object(b.jsx)(u.o,{sm:5,children:Object(b.jsxs)("strong",{children:["Client ",e]})}),Object(b.jsx)(u.o,{sm:7,children:Object(b.jsxs)(u.g,{className:"float-end me-3",children:[Object(b.jsx)(u.f,{color:"outline-secondary",className:"mx-1",onClick:function(){t.push("/clients")},children:"Retour"}),Object(b.jsx)(u.f,{color:"outline-danger",className:"mx-0",onClick:function(){return g(null===h||void 0===h?void 0:h._id)},children:"Suppprimer"})]})})]})}),Object(b.jsx)(u.i,{children:Object(b.jsx)(u.V,{children:Object(b.jsxs)(u.W,{children:[Object(b.jsxs)(u.ab,{children:[Object(b.jsx)(u.X,{children:"firstName"}),Object(b.jsx)(u.X,{children:h.firstName})]}),Object(b.jsxs)(u.ab,{children:[Object(b.jsx)(u.X,{children:"lastName"}),Object(b.jsx)(u.X,{children:h.lastName})]}),Object(b.jsxs)(u.ab,{children:[Object(b.jsx)(u.X,{children:"email"}),Object(b.jsx)(u.X,{children:h.email})]}),Object(b.jsxs)(u.ab,{children:[Object(b.jsx)(u.X,{children:"Creation"}),Object(b.jsx)(u.X,{children:h.createdAt})]})]})})})]})})})]})}}}]);
//# sourceMappingURL=16.304ef527.chunk.js.map