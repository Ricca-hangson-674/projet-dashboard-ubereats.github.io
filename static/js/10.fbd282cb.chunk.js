(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[10],{534:function(e,t,n){"use strict";n(2);var c=n(528),r=n(24);t.a=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(c.O,{color:"primary",children:Object(r.jsx)("span",{className:"sr-only",children:"Loading ..."})})})}},535:function(e,t,n){"use strict";n(2);var c=n(528),r=n(24),s=function(e){var t=e.variant,n=e.children;return Object(r.jsx)(c.a,{color:t,children:n})};s.defaultProps={variant:"info"},t.a=s},536:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com"}},610:function(e,t,n){"use strict";n.r(t);var c=n(532),r=n.n(c),s=n(539),a=n(533),o=n(538),i=n(2),l=n(528),u=n(534),d=n(535),j=n(542),p=n.n(j),h=n(536),b=function(){var e=Object(a.a)(r.a.mark((function e(){var t,n,c,s,a,o,i,l,u=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:null,n=u.length>1&&void 0!==u[1]?u[1]:null,e.prev=2,c={headers:{"Content-Type":"application/json"}},s="local"===h.a.env?h.a.endpointLocal:h.a.endpointProd,a=t?"".concat(s,"/api/orders/").concat(t):"".concat(s,"/api/orders"),a=n?"".concat(s,"/api/orders?status=").concat(n):"".concat(s,"/api/orders"),e.next=9,p.a.get("".concat(a),c);case 9:return o=e.sent,i=o.data,e.abrupt("return",{status:!0,data:i});case 14:return e.prev=14,e.t0=e.catch(2),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),O=n(24);t.default=function(){var e=Object(i.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],j=Object(i.useState)(null),p=Object(o.a)(j,2),h=p[0],x=p[1],m=Object(i.useState)(null),f=Object(o.a)(m,2),v=f[0],g=f[1];Object(i.useEffect)((function(){function e(){return(e=Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:(null===(t=e.sent)||void 0===t?void 0:t.status)?c(Object(s.a)(null===t||void 0===t?void 0:t.data)):x(null===t||void 0===t?void 0:t.error);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("Run once, when the component mounts"),function(){e.apply(this,arguments)}()}),[]);var N=function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(null,t);case 2:n=e.sent,g(t),n.status&&c(Object(s.a)(null===n||void 0===n?void 0:n.data));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return null===n?Object(O.jsx)(u.a,{}):h?Object(O.jsxs)(d.a,{children:[" ",h]}):Object(O.jsx)(l.J,{children:Object(O.jsx)(l.m,{xs:12,children:Object(O.jsxs)(l.h,{className:"mb-4",children:[Object(O.jsx)(l.l,{children:Object(O.jsxs)(l.J,{children:[Object(O.jsx)(l.m,{sm:5,children:Object(O.jsx)("strong",{children:"Listes des commandes"})}),Object(O.jsx)(l.m,{sm:7,className:"d-none d-md-block",children:Object(O.jsx)(l.g,{className:"float-end me-3",children:["CONFIRMED","READING","DECLINED_BY_MERCHANT"].map((function(e){return Object(O.jsx)(l.f,{color:"outline-secondary",className:"mx-0",active:e===v,onClick:function(){return N(e)},children:e},e)}))})})]})}),Object(O.jsx)(l.i,{children:Object(O.jsxs)(l.P,{children:[Object(O.jsx)(l.S,{children:Object(O.jsxs)(l.U,{children:[Object(O.jsx)(l.T,{scope:"col",children:"Numero"}),Object(O.jsx)(l.T,{scope:"col",children:"Email"}),Object(O.jsx)(l.T,{scope:"col",children:"Status"}),Object(O.jsx)(l.T,{scope:"col",children:"Date de creation"}),Object(O.jsx)(l.T,{scope:"col",children:"Actions"})]})}),Object(O.jsx)(l.Q,{children:n.length>0?n.map((function(e){return Object(O.jsxs)(l.U,{children:[Object(O.jsx)(l.R,{children:e.numero}),Object(O.jsx)(l.R,{children:e.email}),Object(O.jsx)(l.R,{children:e.status}),Object(O.jsx)(l.R,{children:e.createdAt}),Object(O.jsxs)(l.R,{children:[Object(O.jsxs)(l.f,{color:"primary",className:"me-1",children:[" ","Voir"," "]}),Object(O.jsxs)(l.f,{color:"secondary",className:"me-1",children:[" ","Editer"," "]}),Object(O.jsxs)(l.f,{color:"danger",children:[" ","Supprimer"," "]})]})]},e._id)})):Object(O.jsx)("h3",{children:"NO Items"})})]})})]})})})}}}]);
//# sourceMappingURL=10.fbd282cb.chunk.js.map