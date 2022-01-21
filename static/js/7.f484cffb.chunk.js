(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[7],{552:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com"}},553:function(e,t,n){"use strict";n(0);var r=n(4),c=n(2),a=function(e){var t=e.variant,n=e.children;return Object(c.jsx)(r.a,{color:t,children:n})};a.defaultProps={variant:"info"},t.a=a},557:function(e,t,n){"use strict";n(0);var r=n(4),c=n(2);t.a=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(r.U,{color:"primary",children:Object(c.jsx)("span",{className:"sr-only",children:"Loading ..."})})})}},558:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(570);var c=n(563);function a(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},600:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(550),c=n.n(r),a=n(551),s=n(555),o=n.n(s),i=n(552),u=function(){var e=Object(a.a)(c.a.mark((function e(){var t,n,r,a,s,u,l,d,j=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.length>0&&void 0!==j[0]?j[0]:null,n=j.length>1&&void 0!==j[1]?j[1]:null,e.prev=2,r={headers:{"Content-Type":"application/json"}},a="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,s=null,s=t?"".concat(a,"/api/orders/").concat(t):n?"".concat(a,"/api/orders?status=").concat(n):"".concat(a,"/api/orders"),e.next=9,o.a.get("".concat(s),r);case 9:return u=e.sent,l=u.data,e.abrupt("return",{status:!0,data:l});case 14:return e.prev=14,e.t0=e.catch(2),d=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:d});case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}()},784:function(e,t,n){"use strict";n.r(t);var r=n(550),c=n.n(r),a=n(558),s=n(551),o=n(554),i=n(0),u=n(4),l=n(26),d=n(557),j=n(553),b=n(174),p=n(600),h=n(2);t.default=function(){var e=Object(i.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1],O=Object(i.useState)(null),f=Object(o.a)(O,2),m=f[0],x=f[1],v=Object(i.useState)(null),y=Object(o.a)(v,2),g=y[0],N=y[1],w=Object(l.g)();Object(i.useEffect)((function(){function e(){return(e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)();case 2:(null===(t=e.sent)||void 0===t?void 0:t.status)?r(Object(a.a)(null===t||void 0===t?void 0:t.data)):x(null===t||void 0===t?void 0:t.error);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("Run once, when the component mounts"),function(){e.apply(this,arguments)}()}),[]);var k=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)(null,t);case 2:n=e.sent,N(t),n.status&&r(Object(a.a)(null===n||void 0===n?void 0:n.data));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return null===n?Object(h.jsx)(d.a,{}):m?Object(h.jsxs)(j.a,{children:[" ",m]}):Object(h.jsxs)(u.P,{children:[Object(h.jsx)(b.f,{}),Object(h.jsx)(u.o,{xs:12,children:Object(h.jsxs)(u.h,{className:"mb-4",children:[Object(h.jsx)(u.l,{children:Object(h.jsxs)(u.P,{children:[Object(h.jsx)(u.o,{sm:5,children:Object(h.jsx)("strong",{children:"Listes des commandes"})}),Object(h.jsx)(u.o,{sm:7,className:"d-none d-md-block",children:Object(h.jsx)(u.g,{className:"float-end me-3",children:["CONFIRMED","READING","DECLINED_BY_MERCHANT"].map((function(e){return Object(h.jsx)(u.f,{color:"outline-secondary",className:"mx-0",active:e===g,onClick:function(){return k(e)},children:e},e)}))})})]})}),Object(h.jsx)(u.i,{children:Object(h.jsxs)(u.V,{children:[Object(h.jsx)(u.Y,{children:Object(h.jsxs)(u.ab,{children:[Object(h.jsx)(u.Z,{scope:"col",children:"Numero"}),Object(h.jsx)(u.Z,{scope:"col",children:"Email"}),Object(h.jsx)(u.Z,{scope:"col",children:"Status"}),Object(h.jsx)(u.Z,{scope:"col",children:"Date de creation"}),Object(h.jsx)(u.Z,{scope:"col",children:"Actions"})]})}),Object(h.jsx)(u.W,{children:n.length>0?n.map((function(e){return Object(h.jsxs)(u.ab,{children:[Object(h.jsx)(u.X,{children:e.numero}),Object(h.jsx)(u.X,{children:e.email}),Object(h.jsx)(u.X,{children:e.status}),Object(h.jsx)(u.X,{children:e.createdAt}),Object(h.jsx)(u.X,{children:Object(h.jsxs)(u.f,{color:"primary",className:"me-1",onClick:function(){return t=e._id,void w.push("/detail-commande/".concat(t));var t},children:[" ","Voir"," "]})})]},e._id)})):Object(h.jsx)("h3",{children:"NO Items"})})]})})]})})]})}}}]);
//# sourceMappingURL=7.f484cffb.chunk.js.map