(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[15],{551:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com",endpointFront:"http://localhost:3232"}},554:function(e,t,n){"use strict";n(0);var r=n(4),a=n(2),c=function(e){var t=e.variant,n=e.children;return Object(a.jsx)(r.a,{color:t,children:n})};c.defaultProps={variant:"info"},t.a=c},556:function(e,t,n){"use strict";n(0);var r=n(4),a=n(2);t.a=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(r.Z,{color:"primary",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading ..."})})})}},558:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(572);var a=n(564);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},559:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return p}));var r=n(552),a=n.n(r),c=n(553),s=n(555),o=n.n(s),i=n(551),u=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r,c,s,u,l,d,p=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:null,n=p.length>1&&void 0!==p[1]?p[1]:null,e.prev=2,r={headers:{"Content-Type":"application/json"}},c="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,s=null,s=n?"".concat(c,"/api/users/").concat(n):t?"".concat(c,"/api/users?type=").concat(t):"".concat(c,"/api/users"),e.next=9,o.a.get("".concat(s),r);case 9:return u=e.sent,l=u.data,e.abrupt("return",{status:!0,data:l});case 14:return e.prev=14,e.t0=e.catch(2),d=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:d});case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"}},r="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,e.next=5,o.a.delete("".concat(r,"/api/users/").concat(t),n);case 5:return c=e.sent,s=c.data,e.abrupt("return",{status:!0,data:s});case 10:return e.prev=10,e.t0=e.catch(0),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,u,l,d=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=d.length>1&&void 0!==d[1]?d[1]:null,e.prev=1,c={headers:{"Content-Type":"application/json"}},s="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,u=null,!n){e.next=11;break}return e.next=8,o.a.put("".concat(s,"/api/users/").concat(n),t,c);case 8:u=e.sent,e.next=14;break;case 11:return e.next=13,o.a.post("".concat(s,"/api/users"),t,c);case 13:u=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(r=u)||void 0===r?void 0:r.data});case 17:return e.prev=17,e.t0=e.catch(1),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"}},r="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,e.next=5,o.a.post("".concat(r,"/api/users/login"),t,n);case 5:return c=e.sent,s=c.data,e.abrupt("return",{status:!0,data:s});case 10:return e.prev=10,e.t0=e.catch(0),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},798:function(e,t,n){"use strict";n.r(t);var r=n(552),a=n.n(r),c=n(558),s=n(553),o=n(557),i=n(0),u=n(4),l=n(174),d=n(26),p=n(556),j=n(554),b=n(559),h=n(2);t.default=function(){var e=Object(i.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1],f=Object(i.useState)(null),m=Object(o.a)(f,2),v=m[0],O=m[1],x=Object(d.g)();Object(i.useEffect)((function(){function e(){return(e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)("admin");case 2:(null===(t=e.sent)||void 0===t?void 0:t.status)?r(Object(c.a)(null===t||void 0===t?void 0:t.data)):O(null===t||void 0===t?void 0:t.error);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("Run once, when the component mounts"),function(){e.apply(this,arguments)}()}),[]);var y=function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)(t);case 2:e.sent.status&&r((function(e){return e.filter((function(e){return e._id!==t}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return null===n?Object(h.jsx)(p.a,{}):v?Object(h.jsxs)(j.a,{children:[" ",v]}):Object(h.jsxs)(u.U,{children:[Object(h.jsx)(l.f,{}),Object(h.jsx)(u.o,{xs:12,children:Object(h.jsxs)(u.h,{className:"mb-4",children:[Object(h.jsx)(u.l,{children:Object(h.jsxs)(u.U,{children:[Object(h.jsx)(u.o,{sm:5,children:Object(h.jsx)("strong",{children:"Listes des Administrateurs"})}),Object(h.jsx)(u.o,{sm:7,children:Object(h.jsx)(u.g,{className:"float-end me-3",children:Object(h.jsx)(u.f,{color:"outline-secondary",className:"mx-0",onClick:function(){x.push("/ajout-admin")},children:"Ajout"})})})]})}),Object(h.jsx)(u.i,{children:Object(h.jsxs)(u.ab,{children:[Object(h.jsx)(u.db,{children:Object(h.jsxs)(u.fb,{children:[Object(h.jsx)(u.eb,{scope:"col",children:"FirstName"}),Object(h.jsx)(u.eb,{scope:"col",children:"LastName"}),Object(h.jsx)(u.eb,{scope:"col",children:"Email"}),Object(h.jsx)(u.eb,{scope:"col",children:"Actions"})]})}),Object(h.jsx)(u.bb,{children:n.length>0?n.map((function(e){return Object(h.jsxs)(u.fb,{children:[Object(h.jsx)(u.cb,{children:e.firstName}),Object(h.jsx)(u.cb,{children:e.lastName}),Object(h.jsx)(u.cb,{children:e.email}),Object(h.jsxs)(u.cb,{children:[Object(h.jsxs)(u.f,{color:"primary",className:"me-1",onClick:function(){return t=e._id,void x.push("/detail-admin/".concat(t));var t},children:[" ","Voir"," "]}),Object(h.jsxs)(u.f,{color:"secondary",className:"me-1",onClick:function(){return t=e._id,void x.push("/ajout-admin/".concat(t));var t},children:[" ","Editer"," "]}),Object(h.jsxs)(u.f,{color:"danger",onClick:function(){return y(e._id)},children:[" ","Supprimer"," "]})]})]},e._id)})):Object(h.jsx)(u.fb,{children:Object(h.jsx)(u.cb,{colSpan:"4",children:"NO Items"})})})]})})]})})]})}}}]);
//# sourceMappingURL=15.6926f0c6.chunk.js.map