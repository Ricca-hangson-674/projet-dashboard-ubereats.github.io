(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[14],{553:function(e,t,n){"use strict";n(0);var r=n(4),a=n(2),c=function(e){var t=e.variant,n=e.children;return Object(a.jsx)(r.a,{color:t,children:n})};c.defaultProps={variant:"info"},t.a=c},554:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={env:"local",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com"}},556:function(e,t,n){"use strict";n(0);var r=n(4),a=n(2);t.a=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(r.Q,{color:"primary",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading ..."})})})}},557:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(132);var a=n(177);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},770:function(e,t,n){"use strict";n.r(t);var r=n(551),a=n.n(r),c=n(557),s=n(552),o=n(175),i=n(0),u=n(4),l=n(556),d=n(553),j=n(176),p=n(560),b=n.n(p),h=n(554),f=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r,c,s,o,i,u=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:null,e.prev=1,n={headers:{"Content-Type":"application/json"}},r="local"===h.a.env?h.a.endpointLocal:h.a.endpointProd,c=t?"".concat(r,"/api/restaurants/").concat(t):"".concat(r,"/api/restaurants"),e.next=7,b.a.get("".concat(c),n);case 7:return s=e.sent,o=s.data,e.abrupt("return",{status:!0,data:o});case 12:return e.prev=12,e.t0=e.catch(1),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:i});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,c,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"}},r="local"===h.a.env?h.a.endpointLocal:h.a.endpointProd,e.next=5,b.a.delete("".concat(r,"/api/restaurants/").concat(t),n);case 5:return c=e.sent,s=c.data,e.abrupt("return",{status:!0,data:s});case 10:return e.prev=10,e.t0=e.catch(0),o=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:o});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),x=n(2);t.default=function(){var e=Object(i.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1],p=Object(i.useState)(null),b=Object(o.a)(p,2),h=b[0],m=b[1];Object(i.useEffect)((function(){function e(){return(e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:(null===(t=e.sent)||void 0===t?void 0:t.status)?r(Object(c.a)(null===t||void 0===t?void 0:t.data)):m(null===t||void 0===t?void 0:t.error);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("Run once, when the component mounts"),function(){e.apply(this,arguments)}()}),[]);var v=function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:e.sent.status&&r((function(e){return e.filter((function(e){return e._id!==t}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return null===n?Object(x.jsx)(l.a,{}):h?Object(x.jsxs)(d.a,{children:[" ",h]}):Object(x.jsxs)(u.L,{children:[Object(x.jsx)(j.f,{}),Object(x.jsx)(u.m,{xs:12,children:Object(x.jsxs)(u.h,{className:"mb-4",children:[Object(x.jsx)(u.l,{children:Object(x.jsx)("strong",{children:"Listes des Clients"})}),Object(x.jsx)(u.i,{children:Object(x.jsxs)(u.R,{children:[Object(x.jsx)(u.U,{children:Object(x.jsxs)(u.W,{children:[Object(x.jsx)(u.V,{scope:"col",children:"Name"}),Object(x.jsx)(u.V,{scope:"col",children:"Address"}),Object(x.jsx)(u.V,{scope:"col",children:"status"}),Object(x.jsx)(u.V,{scope:"col",children:"Commercant"}),Object(x.jsx)(u.V,{scope:"col",children:"Actions"})]})}),Object(x.jsx)(u.S,{children:n.length>0?n.map((function(e){return Object(x.jsxs)(u.W,{children:[Object(x.jsx)(u.T,{children:e.name}),Object(x.jsx)(u.T,{children:e.address}),Object(x.jsx)(u.T,{children:e.status}),Object(x.jsxs)(u.T,{children:[e.user.firstName," ",e.user.lastName]}),Object(x.jsxs)(u.T,{children:[Object(x.jsxs)(u.f,{color:"primary",className:"me-1",children:[" ","Voir"," "]}),Object(x.jsxs)(u.f,{color:"secondary",className:"me-1",children:[" ","Editer"," "]}),Object(x.jsxs)(u.f,{color:"danger",onClick:function(){return v(e._id)},children:[" ","Supprimer"," "]})]})]},e._id)})):Object(x.jsx)("h3",{children:"NO Items"})})]})})]})})]})}}}]);
//# sourceMappingURL=14.628f0cde.chunk.js.map