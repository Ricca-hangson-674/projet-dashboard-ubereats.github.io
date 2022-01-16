(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[10],{553:function(e,c,t){"use strict";t(0);var s=t(4),n=t(2),r=function(e){var c=e.variant,t=e.children;return Object(n.jsx)(s.a,{color:c,children:t})};r.defaultProps={variant:"info"},c.a=r},554:function(e,c,t){"use strict";t.d(c,"a",(function(){return s}));var s={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com"}},556:function(e,c,t){"use strict";t(0);var s=t(4),n=t(2);c.a=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(s.Q,{color:"primary",children:Object(n.jsx)("span",{className:"sr-only",children:"Loading ..."})})})}},596:function(e,c,t){"use strict";t.d(c,"a",(function(){return l}));var s=t(551),n=t.n(s),r=t(552),j=t(560),i=t.n(j),d=t(554),l=function(){var e=Object(r.a)(n.a.mark((function e(){var c,t,s,r,j,l,a,h,o=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>0&&void 0!==o[0]?o[0]:null,t=o.length>1&&void 0!==o[1]?o[1]:null,e.prev=2,s={headers:{"Content-Type":"application/json"}},r="local"===d.a.env?d.a.endpointLocal:d.a.endpointProd,j=null,j=c?"".concat(r,"/api/orders/").concat(c):t?"".concat(r,"/api/orders?status=").concat(t):"".concat(r,"/api/orders"),e.next=9,i.a.get("".concat(j),s);case 9:return l=e.sent,a=l.data,e.abrupt("return",{status:!0,data:a});case 14:return e.prev=14,e.t0=e.catch(2),h=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:h});case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}()},764:function(e,c,t){"use strict";t.r(c);var s=t(551),n=t.n(s),r=t(552),j=t(175),i=t(0),d=t(4),l=t(26),a=t(556),h=t(553),o=t(176),b=t(596),O=t(2);c.default=function(){var e=Object(l.i)().id,c=Object(l.g)(),t=Object(i.useState)(null),s=Object(j.a)(t,2),x=s[0],u=s[1],p=Object(i.useState)(null),m=Object(j.a)(p,2),f=m[0],T=m[1];Object(i.useEffect)((function(){function c(){return(c=Object(r.a)(n.a.mark((function c(){var t;return n.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.a)(e);case 2:(null===(t=c.sent)||void 0===t?void 0:t.status)?u(null===t||void 0===t?void 0:t.data):T(null===t||void 0===t?void 0:t.error);case 4:case"end":return c.stop()}}),c)})))).apply(this,arguments)}console.log("Run once, when the component mounts"),function(){c.apply(this,arguments)}()}),[e]);return null===x?Object(O.jsx)(a.a,{}):f?Object(O.jsxs)(h.a,{children:[" ",f]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(o.f,{}),Object(O.jsx)(d.L,{children:Object(O.jsx)(d.m,{xs:12,children:Object(O.jsxs)(d.h,{className:"mb-4",children:[Object(O.jsx)(d.l,{children:Object(O.jsxs)(d.L,{children:[Object(O.jsx)(d.m,{sm:5,children:Object(O.jsxs)("strong",{children:["Commande ",e]})}),Object(O.jsx)(d.m,{sm:7,children:Object(O.jsx)(d.g,{className:"float-end me-3",children:Object(O.jsx)(d.f,{color:"outline-secondary",className:"mx-0",onClick:function(){c.push("/administrateurs")},children:"Retour"})})})]})}),Object(O.jsx)(d.i,{children:Object(O.jsx)(d.R,{children:Object(O.jsxs)(d.S,{children:[Object(O.jsxs)(d.W,{children:[Object(O.jsx)(d.T,{children:"Numero"}),Object(O.jsx)(d.T,{children:x.numero})]}),Object(O.jsxs)(d.W,{children:[Object(O.jsx)(d.T,{children:"firstName"}),Object(O.jsx)(d.T,{children:x.firstName})]}),Object(O.jsxs)(d.W,{children:[Object(O.jsx)(d.T,{children:"lastName"}),Object(O.jsx)(d.T,{children:x.lastName})]}),Object(O.jsxs)(d.W,{children:[Object(O.jsx)(d.T,{children:"email"}),Object(O.jsx)(d.T,{children:x.email})]}),Object(O.jsxs)(d.W,{children:[Object(O.jsx)(d.T,{children:"Status"}),Object(O.jsx)(d.T,{children:x.status})]}),Object(O.jsxs)(d.W,{children:[Object(O.jsx)(d.T,{children:"Creation"}),Object(O.jsx)(d.T,{children:x.createdAt})]})]})})})]})})}),Object(O.jsx)(d.L,{children:Object(O.jsx)(d.m,{xs:12,children:Object(O.jsxs)(d.h,{className:"mb-4",children:[Object(O.jsx)(d.l,{children:Object(O.jsx)(d.L,{children:Object(O.jsx)(d.m,{sm:5,children:Object(O.jsx)("strong",{children:"Items"})})})}),Object(O.jsx)(d.i,{children:Object(O.jsxs)(d.R,{children:[Object(O.jsx)(d.U,{children:Object(O.jsxs)(d.W,{children:[Object(O.jsx)(d.V,{scope:"col",children:"Name"}),Object(O.jsx)(d.V,{scope:"col",children:"Price"}),Object(O.jsx)(d.V,{scope:"col",children:"Quantity"})]})}),Object(O.jsx)(d.S,{children:x.items.length>0?x.items.map((function(e){return Object(O.jsxs)(d.W,{children:[Object(O.jsx)(d.T,{children:e.name}),Object(O.jsx)(d.T,{children:e.price}),Object(O.jsx)(d.T,{children:e.quantity})]},e._id)})):Object(O.jsx)("h3",{children:"NO Items"})})]})})]})})}),Object(O.jsx)(d.L,{children:Object(O.jsx)(d.m,{xs:12,children:Object(O.jsxs)(d.h,{className:"mb-4",children:[Object(O.jsx)(d.l,{children:Object(O.jsx)(d.L,{children:Object(O.jsx)(d.m,{sm:5,children:Object(O.jsx)("strong",{children:"Address"})})})}),Object(O.jsx)(d.i,{children:Object(O.jsx)(d.R,{children:Object(O.jsxs)(d.S,{children:[Object(O.jsxs)(d.W,{children:[Object(O.jsx)(d.T,{children:"address"}),Object(O.jsx)(d.T,{children:x.shippingAddress.address})]}),Object(O.jsxs)(d.W,{children:[Object(O.jsx)(d.T,{children:"city"}),Object(O.jsx)(d.T,{children:x.shippingAddress.city})]}),Object(O.jsxs)(d.W,{children:[Object(O.jsx)(d.T,{children:"zipCode"}),Object(O.jsx)(d.T,{children:x.shippingAddress.zipCode})]}),Object(O.jsxs)(d.W,{children:[Object(O.jsx)(d.T,{children:"country"}),Object(O.jsx)(d.T,{children:x.shippingAddress.country})]}),Object(O.jsxs)(d.W,{children:[Object(O.jsx)(d.T,{children:"latitude"}),Object(O.jsx)(d.T,{children:x.shippingAddress.latitude})]}),Object(O.jsxs)(d.W,{children:[Object(O.jsx)(d.T,{children:"longitude"}),Object(O.jsx)(d.T,{children:x.shippingAddress.longitude})]})]})})})]})})})]})}}}]);
//# sourceMappingURL=10.7f118cf9.chunk.js.map