(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[21],{1275:function(e,t,n){"use strict";n.r(t);var r=n(555),a=n.n(r),c=n(565),s=n(556),o=n(564),i=n(0),u=n(4),l=n(174),p=n(26),d=n(563),j=n(558),b=n(677),h=n(626),f=n.n(h),x=n(2);t.default=function(){var e=Object(i.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1],h=Object(i.useState)(null),O=Object(o.a)(h,2),m=O[0],v=O[1],g=Object(p.g)();Object(i.useEffect)((function(){function e(){return(e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)();case 2:(null===(t=e.sent)||void 0===t?void 0:t.status)?r(Object(c.a)(null===t||void 0===t?void 0:t.data)):v(null===t||void 0===t?void 0:t.error);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("Run once, when the component mounts"),function(){e.apply(this,arguments)}()}),[]);var k=function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)(t);case 2:e.sent.status&&r((function(e){return e.filter((function(e){return e._id!==t}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return null===n?Object(x.jsx)(d.a,{}):m?Object(x.jsxs)(j.a,{children:[" ",m]}):Object(x.jsxs)(u.U,{children:[Object(x.jsx)(l.f,{}),Object(x.jsx)(u.o,{xs:12,children:Object(x.jsxs)(u.h,{className:"mb-4",children:[Object(x.jsx)(u.l,{children:Object(x.jsxs)(u.U,{children:[Object(x.jsx)(u.o,{sm:5,children:Object(x.jsx)("strong",{children:"Listes des Paiements"})}),Object(x.jsx)(u.o,{sm:7,children:Object(x.jsx)(u.g,{className:"float-end me-3",children:Object(x.jsx)(u.f,{color:"outline-secondary",className:"mx-0",onClick:function(){g.push("/ajout-paiement")},children:"Ajout"})})})]})}),Object(x.jsx)(u.i,{children:Object(x.jsxs)(u.ab,{children:[Object(x.jsx)(u.db,{children:Object(x.jsxs)(u.fb,{children:[Object(x.jsx)(u.eb,{scope:"col",children:"Name"}),Object(x.jsx)(u.eb,{scope:"col",children:"iban"}),Object(x.jsx)(u.eb,{scope:"col",children:"montant"}),Object(x.jsx)(u.eb,{scope:"col",children:"date"}),Object(x.jsx)(u.eb,{scope:"col",children:"Actions"})]})}),Object(x.jsx)(u.bb,{children:n.length>0?n.map((function(e){return Object(x.jsxs)(u.fb,{children:[Object(x.jsx)(u.cb,{children:e.name}),Object(x.jsx)(u.cb,{children:e.iban}),Object(x.jsx)(u.cb,{children:e.montant}),Object(x.jsx)(u.cb,{children:f()(e.datePaiement).local().format("DD/MM/YYYY HH:mm")}),Object(x.jsx)(u.cb,{}),Object(x.jsxs)(u.cb,{children:[Object(x.jsxs)(u.f,{color:"secondary",className:"me-1",onClick:function(){return t=e._id,void g.push("/ajout-paiement/".concat(t));var t},children:[" ","Editer"," "]}),Object(x.jsxs)(u.f,{color:"danger",onClick:function(){return k(e._id)},children:[" ","Supprimer"," "]})]})]},e._id)})):Object(x.jsx)("h3",{children:"NO Items"})})]})})]})})]})}},553:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com",endpointFront:"http://localhost:3232"}},558:function(e,t,n){"use strict";n(0);var r=n(4),a=n(2),c=function(e){var t=e.variant,n=e.children;return Object(a.jsx)(r.a,{color:t,children:n})};c.defaultProps={variant:"info"},t.a=c},563:function(e,t,n){"use strict";n(0);var r=n(4),a=n(2);t.a=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(r.Z,{color:"primary",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading ..."})})})}},677:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return p}));var r=n(555),a=n.n(r),c=n(556),s=n(562),o=n.n(s),i=n(553),u=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r,c,s,u,l,p=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:null,e.prev=1,n={headers:{"Content-Type":"application/json"}},r="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,c=t?"".concat(r,"/api/paiements/").concat(t):"".concat(r,"/api/paiements"),e.next=7,o.a.get("".concat(c),n);case 7:return s=e.sent,u=s.data,e.abrupt("return",{status:!0,data:u});case 12:return e.prev=12,e.t0=e.catch(1),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"}},r="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,e.next=5,o.a.delete("".concat(r,"/api/paiements/").concat(t),n);case 5:return c=e.sent,s=c.data,e.abrupt("return",{status:!0,data:s});case 10:return e.prev=10,e.t0=e.catch(0),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,u,l,p=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=p.length>1&&void 0!==p[1]?p[1]:null,e.prev=1,c={headers:{"Content-Type":"application/json"}},s="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,u=null,!n){e.next=11;break}return e.next=8,o.a.put("".concat(s,"/api/paiements/").concat(n),t,c);case 8:u=e.sent,e.next=14;break;case 11:return e.next=13,o.a.post("".concat(s,"/api/paiements"),t,c);case 13:u=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(r=u)||void 0===r?void 0:r.data});case 17:return e.prev=17,e.t0=e.catch(1),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:l});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=21.cf6b03f7.chunk.js.map