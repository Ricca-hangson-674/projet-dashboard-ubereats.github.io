(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[18],{551:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com",endpointFront:"http://localhost:3232"}},554:function(e,t,n){"use strict";n(0);var c=n(4),r=n(2),a=function(e){var t=e.variant,n=e.children;return Object(r.jsx)(c.a,{color:t,children:n})};a.defaultProps={variant:"info"},t.a=a},556:function(e,t,n){"use strict";n(0);var c=n(4),r=n(2);t.a=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(c.Z,{color:"primary",children:Object(r.jsx)("span",{className:"sr-only",children:"Loading ..."})})})}},608:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var c=n(552),r=n.n(c),a=n(553),s=n(555),o=n.n(s),i=n(551),l=function(){var e=Object(a.a)(r.a.mark((function e(){var t,n,c,a,s,l,u,d,j=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.length>0&&void 0!==j[0]?j[0]:null,n=j.length>1&&void 0!==j[1]?j[1]:null,e.prev=2,c={headers:{"Content-Type":"application/json"}},a="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,s=n?"".concat(a,"/api/restaurants/").concat(t,"/discoverytable?id=").concat(n):"".concat(a,"/api/restaurants/").concat(t,"/discoverytable"),e.next=8,o.a.get("".concat(s),c);case 8:return l=e.sent,u=l.data,e.abrupt("return",{status:!0,data:u});case 13:return e.prev=13,e.t0=e.catch(2),d=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:d});case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(a.a)(r.a.mark((function e(t,n){var c,a,s,l,u,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=d.length>2&&void 0!==d[2]?d[2]:"post",e.prev=1,a={headers:{"Content-Type":"application/json"}},s="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,l=null,"post"!==c){e.next=11;break}return e.next=8,o.a.post("".concat(s,"/api/restaurants/").concat(t,"/discoverytable"),n,a);case 8:l=e.sent,e.next=15;break;case 11:if("update"!==c){e.next=15;break}return e.next=14,o.a.put("".concat(s,"/api/restaurants/").concat(t,"/discoverytable"),n,a);case 14:l=e.sent;case 15:return console.log("data",l),e.abrupt("return",{status:!0,data:l});case 19:return e.prev=19,e.t0=e.catch(1),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 23:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t,n){return e.apply(this,arguments)}}()},820:function(e,t,n){"use strict";n.r(t);var c=n(552),r=n.n(c),a=n(558),s=n(553),o=n(557),i=n(0),l=n(4),u=n(770),d=n.n(u),j=n(2),b=function(e){var t=e.valueString,n=e.documentId;return Object(j.jsx)("div",{children:Object(j.jsx)(d.a,{id:n,value:t,size:256,bgColor:"#ffffff",fgColor:"#000000",level:"H",includeMargin:!0})})},p=n(551),f=n(26),h=n(556),O=n(554),x=n(174),v=n(608);t.default=function(){var e=Object(i.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(i.useState)(null),d=Object(o.a)(u,2),m=d[0],g=d[1],y=Object(i.useState)(!1),k=Object(o.a)(y,2),C=k[0],w=k[1],N=Object(i.useState)(null),L=Object(o.a)(N,2),S=L[0],P=L[1],R=Object(f.g)(),D=Object(f.i)().idRestaurant;Object(i.useEffect)((function(){function e(){return(e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)(D);case 2:(null===(n=e.sent)||void 0===n?void 0:n.status)?c(Object(a.a)(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.discoverytable)):g(null===n||void 0===n?void 0:n.error);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("Dependency",D),function(){e.apply(this,arguments)}()}),[D]);var E=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.b)(D,{id:t},"update");case 2:e.sent.status&&c((function(e){return e.filter((function(e){return e._id!==t}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(e,t){R.push("/edit-discovery-table/".concat(e,"?d=").concat(t))};return null===n?Object(j.jsx)(h.a,{}):m?Object(j.jsxs)(O.a,{children:[" ",m]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(l.U,{children:[Object(j.jsx)(x.f,{}),Object(j.jsx)(l.o,{xs:12,children:Object(j.jsxs)(l.h,{className:"mb-4",children:[Object(j.jsx)(l.l,{children:Object(j.jsxs)(l.U,{children:[Object(j.jsx)(l.o,{sm:5,children:Object(j.jsx)("strong",{children:"Listes des DisciveryTables"})}),Object(j.jsx)(l.o,{sm:7,children:Object(j.jsxs)(l.g,{className:"float-end me-3",children:[Object(j.jsx)(l.f,{color:"outline-secondary",className:"mx-1",onClick:function(){R.push("/restaurants")},children:"Retour"}),Object(j.jsx)(l.f,{color:"outline-secondary",className:"mx-0",onClick:function(){return F(D,"default")},children:"Ajout"})]})})]})}),Object(j.jsx)(l.i,{children:Object(j.jsxs)(l.ab,{children:[Object(j.jsx)(l.db,{children:Object(j.jsxs)(l.fb,{children:[Object(j.jsx)(l.eb,{scope:"col",children:"Code"}),Object(j.jsx)(l.eb,{scope:"col",children:"Actions"})]})}),Object(j.jsx)(l.bb,{children:n.length>0?n.map((function(e){return Object(j.jsxs)(l.fb,{children:[Object(j.jsx)(l.cb,{children:e.code}),Object(j.jsxs)(l.cb,{children:[Object(j.jsxs)(l.f,{color:"secondary",className:"m-1",onClick:function(){return F(D,e._id)},children:[" ","Editer"," "]}),Object(j.jsxs)(l.f,{color:"danger",className:"m-1",onClick:function(){return E(e._id)},children:[" ","Supprimer"," "]}),Object(j.jsxs)(l.f,{color:"secondary",onClick:function(){return t=e.code,P(t),void w(!0);var t},children:[" ","QR code"," "]})]})]},e._id)})):Object(j.jsx)("h3",{children:"NO Items"})})]})})]})})]}),Object(j.jsxs)(l.K,{size:"lg",visible:C,onClose:function(){return w(!1)},children:[Object(j.jsx)(l.N,{onClose:function(){return w(!1)},children:Object(j.jsxs)(l.O,{children:["QR Code ",S&&S]})}),Object(j.jsx)(l.L,{children:S&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(b,{valueString:"".concat(p.a.endpointProd,"?discovery-table=").concat(S,"&id=").concat(D),documentId:S})})}),Object(j.jsxs)(l.M,{children:[Object(j.jsx)(l.f,{className:"mx-1",color:"secondary",onClick:function(){return function(){var e,t=document.createElement("a");t.download="".concat(S,".png"),t.href=null===(e=document.getElementById(S))||void 0===e?void 0:e.toDataURL(),t.click()}()},children:"Download"}),Object(j.jsx)(l.f,{color:"secondary",onClick:function(){return w(!1)},children:"Close"})]})]})]})}}}]);
//# sourceMappingURL=18.a55b2af1.chunk.js.map