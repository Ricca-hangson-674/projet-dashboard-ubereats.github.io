(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[16],{553:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com"}},554:function(e,t,a){"use strict";a(0);var n=a(4),r=a(2),c=function(e){var t=e.variant,a=e.children;return Object(r.jsx)(n.a,{color:t,children:a})};c.defaultProps={variant:"info"},t.a=c},557:function(e,t,a){"use strict";a(0);var n=a(4),r=a(2);t.a=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(n.U,{color:"primary",children:Object(r.jsx)("span",{className:"sr-only",children:"Loading ..."})})})}},601:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return d}));var n=a(551),r=a.n(n),c=a(552),s=a(555),o=a.n(s),i=a(553),u=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n,c,s,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={headers:{"Content-Type":"application/json"}},a="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,n="".concat(a,"/api/dashboard"),e.next=6,o.a.get("".concat(n),t);case 6:return c=e.sent,s=c.data,e.abrupt("return",{status:!0,data:s});case 11:return e.prev=11,e.t0=e.catch(0),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n,c,s,u,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={headers:{"Content-Type":"application/json"}},n="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,c="".concat(n,"/api/dashboard/chiffres-affaires"),e.next=6,o.a.post("".concat(c),t,a);case 6:return s=e.sent,u=s.data,e.abrupt("return",{status:!0,data:u});case 11:return e.prev=11,e.t0=e.catch(0),d=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:d});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},785:function(e,t,a){"use strict";a.r(t);var n=a(566),r=a(558),c=a(551),s=a.n(c),o=a(28),i=a(552),u=a(556),d=a(0),l=a(4),j=a(638),p=a.n(j),b=a(557),h=a(554),f=a(174),O=a(601),v=a(2);t.default=function(){var e=Object(d.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],j=Object(d.useState)(null),x=Object(u.a)(j,2),m=x[0],y=x[1],g=Object(d.useState)(null),D=Object(u.a)(g,2),N=D[0],Y=D[1],C=Object(d.useState)("Day"),E=Object(u.a)(C,2),S=E[0],A=E[1],M=Object(d.useState)("READING"),I=Object(u.a)(M,2),G=I[0],R=I[1];Object(d.useEffect)((function(){function e(){return(e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)();case 2:(null===(t=e.sent)||void 0===t?void 0:t.status)?c(Object(o.a)({},null===t||void 0===t?void 0:t.data)):Y(null===t||void 0===t?void 0:t.error);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("Run once, when the component mounts"),function(){e.apply(this,arguments)}()}),[]),Object(d.useEffect)((function(){var e;console.log("Dependency");var t,c=[],s=[];if("Day"===S)(null===a||void 0===a||null===(t=a.ordersChiffresGroupedByDayStatus)||void 0===t?void 0:t.length)&&(s=Object(r.a)(null===a||void 0===a?void 0:a.ordersChiffresGroupedByDayStatus));else if("Month"===S){var i;(null===a||void 0===a||null===(i=a.ordersChiffresGroupedByMonthWithStatus)||void 0===i?void 0:i.length)&&(s=Object(r.a)(null===a||void 0===a?void 0:a.ordersChiffresGroupedByMonthWithStatus))}else if("Year"===S){var u;(null===a||void 0===a||null===(u=a.ordersChiffresGroupedByYearWithStatus)||void 0===u?void 0:u.length)&&(s=Object(r.a)(null===a||void 0===a?void 0:a.ordersChiffresGroupedByYearWithStatus))}if(null===(e=s)||void 0===e?void 0:e.length){var d,l=Object(n.a)(s);try{for(l.s();!(d=l.n()).done;){var j=d.value;G===j.status&&("Day"===S?c=[].concat(Object(r.a)(c),[Object(o.a)(Object(o.a)({},j),{},{updatedAt:p()(j.updatedAt).format("DD/MM/YYYY")})]):"Month"===S?c=[].concat(Object(r.a)(c),[Object(o.a)(Object(o.a)({},j),{},{updatedAt:p()(j.updatedAt).format("MM/YYYY")})]):"Year"===S&&(c=[].concat(Object(r.a)(c),[Object(o.a)(Object(o.a)({},j),{},{updatedAt:p()(j.updatedAt).format("YYYY")})])))}}catch(b){l.e(b)}finally{l.f()}y(Object(r.a)(c))}}),[G,S,a]);var w=function(e,t){"status"===t?R(e):"type"===t&&A(e)};return null===a?Object(v.jsx)(b.a,{}):N?Object(v.jsxs)(h.a,{children:[" ",N]}):Object(v.jsxs)(l.P,{children:[Object(v.jsx)(f.f,{}),Object(v.jsx)(l.o,{xs:12,children:Object(v.jsxs)(l.h,{className:"mb-4",children:[Object(v.jsx)(l.l,{children:Object(v.jsxs)(l.P,{children:[Object(v.jsx)(l.o,{sm:5,children:Object(v.jsx)("strong",{children:"Listes des Historiques"})}),Object(v.jsxs)(l.o,{sm:7,className:"d-none d-md-block",children:[Object(v.jsx)(l.B,{value:G,"aria-label":"Status",className:"float-end mb-1",onChange:function(e){w(e.target.value,"status")},children:["ORDER_STATUS_UNSPECIFIED","CONFIRMED","PENDING","PENDING_MERCHANT_CONFIRMATION","CANCELED","FAILED","DECLINED_BY_MERCHANT","READING"].map((function(e){return Object(v.jsx)("option",{value:e,children:e},e)}))}),Object(v.jsx)(l.g,{className:"float-end me-3",children:["Day","Month","Year"].map((function(e){return Object(v.jsx)(l.f,{onClick:function(){return w(e,"type")},color:"outline-secondary",className:"mx-0",active:e===S,children:e},e)}))})]})]})}),Object(v.jsx)(l.i,{children:Object(v.jsxs)(l.V,{children:[Object(v.jsx)(l.Y,{children:Object(v.jsxs)(l.ab,{children:[Object(v.jsx)(l.Z,{scope:"col",children:"Total"}),Object(v.jsx)(l.Z,{scope:"col",children:"Status"}),Object(v.jsx)(l.Z,{scope:"col",children:"Date"})]})}),Object(v.jsx)(l.W,{children:m&&m.length>0?m.map((function(e,t){return Object(v.jsxs)(l.ab,{children:[Object(v.jsxs)(l.X,{children:[e.total.toLocaleString("fr-FR")," $"]}),Object(v.jsx)(l.X,{children:e.status}),Object(v.jsx)(l.X,{children:e.updatedAt})]},t)})):Object(v.jsx)("h3",{children:"NO Items"})})]})})]})})]})}}}]);
//# sourceMappingURL=16.650bc317.chunk.js.map