(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[9],{550:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com"}},551:function(e,t,n){"use strict";n(0);var r=n(4),a=n(2),s=function(e){var t=e.variant,n=e.children;return Object(a.jsx)(r.a,{color:t,children:n})};s.defaultProps={variant:"info"},t.a=s},552:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return d}));var r=n(548),a=n.n(r),s=n(549),c=n(556),o=n.n(c),u=n(550),i=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r,s,c,i,l,p,d=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:null,n=d.length>1&&void 0!==d[1]?d[1]:null,e.prev=2,r={headers:{"Content-Type":"application/json"}},s="local"===u.a.env?u.a.endpointLocal:u.a.endpointProd,c=null,c=n?"".concat(s,"/api/users/").concat(n):t?"".concat(s,"/api/users?type=").concat(t):"".concat(s,"/api/users"),e.next=9,o.a.get("".concat(c),r);case 9:return i=e.sent,l=i.data,e.abrupt("return",{status:!0,data:l});case 14:return e.prev=14,e.t0=e.catch(2),p=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:p});case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"}},r="local"===u.a.env?u.a.endpointLocal:u.a.endpointProd,e.next=5,o.a.delete("".concat(r,"/api/users/").concat(t),n);case 5:return s=e.sent,c=s.data,e.abrupt("return",{status:!0,data:c});case 10:return e.prev=10,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:i});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,i,l,p=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=p.length>1&&void 0!==p[1]?p[1]:null,e.prev=1,s={headers:{"Content-Type":"application/json"}},c="local"===u.a.env?u.a.endpointLocal:u.a.endpointProd,i=null,!n){e.next=11;break}return e.next=8,o.a.put("".concat(c,"/api/users/").concat(n),t,s);case 8:i=e.sent,e.next=14;break;case 11:return e.next=13,o.a.post("".concat(c,"/api/users"),t,s);case 13:i=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(r=i)||void 0===r?void 0:r.data});case 17:return e.prev=17,e.t0=e.catch(1),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"}},r="local"===u.a.env?u.a.endpointLocal:u.a.endpointProd,e.next=5,o.a.post("".concat(r,"/api/users/login"),t,n);case 5:return s=e.sent,c=s.data,e.abrupt("return",{status:!0,data:c});case 10:return e.prev=10,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:i});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},554:function(e,t,n){"use strict";n(0);var r=n(4),a=n(2);t.a=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(r.R,{color:"primary",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading ..."})})})}},555:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(561);var a=n(560);function s(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},762:function(e,t,n){"use strict";n.r(t);var r=n(548),a=n.n(r),s=n(555),c=n(549),o=n(553),u=n(0),i=n(4),l=n(174),p=n(26),d=n(554),j=n(551),b=n(552),f=n(2);t.default=function(){var e=Object(u.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1],h=Object(u.useState)(null),v=Object(o.a)(h,2),O=v[0],m=v[1],x=Object(p.g)();Object(u.useEffect)((function(){function e(){return(e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)("client");case 2:(null===(t=e.sent)||void 0===t?void 0:t.status)?r(Object(s.a)(null===t||void 0===t?void 0:t.data)):m(null===t||void 0===t?void 0:t.error);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("Run once, when the component mounts"),function(){e.apply(this,arguments)}()}),[]);var g=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)(t);case 2:e.sent.status&&r((function(e){return e.filter((function(e){return e._id!==t}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return null===n?Object(f.jsx)(d.a,{}):O?Object(f.jsxs)(j.a,{children:[" ",O]}):Object(f.jsxs)(i.M,{children:[Object(f.jsx)(l.f,{}),Object(f.jsx)(i.m,{xs:12,children:Object(f.jsxs)(i.h,{className:"mb-4",children:[Object(f.jsx)(i.l,{children:Object(f.jsx)("strong",{children:"Listes des Clients"})}),Object(f.jsx)(i.i,{children:Object(f.jsxs)(i.S,{children:[Object(f.jsx)(i.V,{children:Object(f.jsxs)(i.X,{children:[Object(f.jsx)(i.W,{scope:"col",children:"FirstName"}),Object(f.jsx)(i.W,{scope:"col",children:"LastName"}),Object(f.jsx)(i.W,{scope:"col",children:"Email"}),Object(f.jsx)(i.W,{scope:"col",children:"Actions"})]})}),Object(f.jsx)(i.T,{children:n.length>0?n.map((function(e){return Object(f.jsxs)(i.X,{children:[Object(f.jsx)(i.U,{children:e.firstName}),Object(f.jsx)(i.U,{children:e.lastName}),Object(f.jsx)(i.U,{children:e.email}),Object(f.jsxs)(i.U,{children:[Object(f.jsxs)(i.f,{color:"primary",className:"me-1",onClick:function(){return t=e._id,void x.push("/detail-client/".concat(t));var t},children:[" ","Voir"," "]}),Object(f.jsxs)(i.f,{color:"danger",onClick:function(){return g(e._id)},children:[" ","Supprimer"," "]})]})]},e._id)})):Object(f.jsx)("h3",{children:"NO Items"})})]})})]})})]})}}}]);
//# sourceMappingURL=9.975ba370.chunk.js.map