(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[20],{1262:function(e,c,t){"use strict";t.r(c);var s=t(555),n=t.n(s),r=t(556),j=t(564),i=t(0),b=t(4),d=t(26),l=t(563),a=t(558),o=t(174),h=t(646),O=t(2);c.default=function(){var e=Object(d.i)().id,c=Object(d.g)(),t=Object(i.useState)(null),s=Object(j.a)(t,2),x=s[0],u=s[1],p=Object(i.useState)(null),f=Object(j.a)(p,2),m=f[0],v=f[1];Object(i.useEffect)((function(){function c(){return(c=Object(r.a)(n.a.mark((function c(){var t;return n.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(h.a)(e);case 2:(null===(t=c.sent)||void 0===t?void 0:t.status)?u(null===t||void 0===t?void 0:t.data):v(null===t||void 0===t?void 0:t.error);case 4:case"end":return c.stop()}}),c)})))).apply(this,arguments)}console.log("Run once, when the component mounts"),function(){c.apply(this,arguments)}()}),[e]);return null===x?Object(O.jsx)(l.a,{}):m?Object(O.jsxs)(a.a,{children:[" ",m]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(o.f,{}),Object(O.jsx)(b.U,{children:Object(O.jsx)(b.o,{xs:12,children:Object(O.jsxs)(b.h,{className:"mb-4",children:[Object(O.jsx)(b.l,{children:Object(O.jsxs)(b.U,{children:[Object(O.jsx)(b.o,{sm:5,children:Object(O.jsxs)("strong",{children:["Commande ",e]})}),Object(O.jsx)(b.o,{sm:7,children:Object(O.jsx)(b.g,{className:"float-end me-3",children:Object(O.jsx)(b.f,{color:"outline-secondary",className:"mx-0",onClick:function(){c.push("/administrateurs")},children:"Retour"})})})]})}),Object(O.jsx)(b.i,{children:Object(O.jsx)(b.ab,{children:Object(O.jsxs)(b.bb,{children:[Object(O.jsxs)(b.fb,{children:[Object(O.jsx)(b.cb,{children:"Numero"}),Object(O.jsx)(b.cb,{children:x.numero})]}),Object(O.jsxs)(b.fb,{children:[Object(O.jsx)(b.cb,{children:"firstName"}),Object(O.jsx)(b.cb,{children:x.firstName})]}),Object(O.jsxs)(b.fb,{children:[Object(O.jsx)(b.cb,{children:"lastName"}),Object(O.jsx)(b.cb,{children:x.lastName})]}),Object(O.jsxs)(b.fb,{children:[Object(O.jsx)(b.cb,{children:"email"}),Object(O.jsx)(b.cb,{children:x.email})]}),Object(O.jsxs)(b.fb,{children:[Object(O.jsx)(b.cb,{children:"Status"}),Object(O.jsx)(b.cb,{children:x.status})]}),Object(O.jsxs)(b.fb,{children:[Object(O.jsx)(b.cb,{children:"Creation"}),Object(O.jsx)(b.cb,{children:x.createdAt})]})]})})})]})})}),Object(O.jsx)(b.U,{children:Object(O.jsx)(b.o,{xs:12,children:Object(O.jsxs)(b.h,{className:"mb-4",children:[Object(O.jsx)(b.l,{children:Object(O.jsx)(b.U,{children:Object(O.jsx)(b.o,{sm:5,children:Object(O.jsx)("strong",{children:"Items"})})})}),Object(O.jsx)(b.i,{children:Object(O.jsxs)(b.ab,{children:[Object(O.jsx)(b.db,{children:Object(O.jsxs)(b.fb,{children:[Object(O.jsx)(b.eb,{scope:"col",children:"Name"}),Object(O.jsx)(b.eb,{scope:"col",children:"Price"}),Object(O.jsx)(b.eb,{scope:"col",children:"Quantity"})]})}),Object(O.jsx)(b.bb,{children:x.items.length>0?x.items.map((function(e){return Object(O.jsxs)(b.fb,{children:[Object(O.jsx)(b.cb,{children:e.name}),Object(O.jsx)(b.cb,{children:e.price}),Object(O.jsx)(b.cb,{children:e.quantity})]},e._id)})):Object(O.jsx)("h3",{children:"NO Items"})})]})})]})})}),Object(O.jsx)(b.U,{children:Object(O.jsx)(b.o,{xs:12,children:Object(O.jsxs)(b.h,{className:"mb-4",children:[Object(O.jsx)(b.l,{children:Object(O.jsx)(b.U,{children:Object(O.jsx)(b.o,{sm:5,children:Object(O.jsx)("strong",{children:"Address"})})})}),Object(O.jsx)(b.i,{children:Object(O.jsx)(b.ab,{children:Object(O.jsxs)(b.bb,{children:[Object(O.jsxs)(b.fb,{children:[Object(O.jsx)(b.cb,{children:"address"}),Object(O.jsx)(b.cb,{children:x.shippingAddress.address})]}),Object(O.jsxs)(b.fb,{children:[Object(O.jsx)(b.cb,{children:"city"}),Object(O.jsx)(b.cb,{children:x.shippingAddress.city})]}),Object(O.jsxs)(b.fb,{children:[Object(O.jsx)(b.cb,{children:"zipCode"}),Object(O.jsx)(b.cb,{children:x.shippingAddress.zipCode})]}),Object(O.jsxs)(b.fb,{children:[Object(O.jsx)(b.cb,{children:"country"}),Object(O.jsx)(b.cb,{children:x.shippingAddress.country})]}),Object(O.jsxs)(b.fb,{children:[Object(O.jsx)(b.cb,{children:"latitude"}),Object(O.jsx)(b.cb,{children:x.shippingAddress.latitude})]}),Object(O.jsxs)(b.fb,{children:[Object(O.jsx)(b.cb,{children:"longitude"}),Object(O.jsx)(b.cb,{children:x.shippingAddress.longitude})]})]})})})]})})})]})}},553:function(e,c,t){"use strict";t.d(c,"a",(function(){return s}));var s={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com",endpointFront:"http://localhost:3232"}},558:function(e,c,t){"use strict";t(0);var s=t(4),n=t(2),r=function(e){var c=e.variant,t=e.children;return Object(n.jsx)(s.a,{color:c,children:t})};r.defaultProps={variant:"info"},c.a=r},563:function(e,c,t){"use strict";t(0);var s=t(4),n=t(2);c.a=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(s.Z,{color:"primary",children:Object(n.jsx)("span",{className:"sr-only",children:"Loading ..."})})})}},646:function(e,c,t){"use strict";t.d(c,"a",(function(){return d}));var s=t(555),n=t.n(s),r=t(556),j=t(562),i=t.n(j),b=t(553),d=function(){var e=Object(r.a)(n.a.mark((function e(){var c,t,s,r,j,d,l,a,o=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>0&&void 0!==o[0]?o[0]:null,t=o.length>1&&void 0!==o[1]?o[1]:null,e.prev=2,s={headers:{"Content-Type":"application/json"}},r="local"===b.a.env?b.a.endpointLocal:b.a.endpointProd,j=null,j=c?"".concat(r,"/api/orders/").concat(c):t?"".concat(r,"/api/orders?status=").concat(t):"".concat(r,"/api/orders"),e.next=9,i.a.get("".concat(j),s);case 9:return d=e.sent,l=d.data,e.abrupt("return",{status:!0,data:l});case 14:return e.prev=14,e.t0=e.catch(2),a=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:a});case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=20.d35a5f44.chunk.js.map