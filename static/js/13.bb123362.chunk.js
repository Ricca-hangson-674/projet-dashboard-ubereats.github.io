(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[13],{551:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={env:"prod",endpointLocal:"http://127.0.0.1:5059",endpointProd:"https://projet-eats-nrh.herokuapp.com"}},554:function(e,t,n){"use strict";n(0);var r=n(4),a=n(2),s=function(e){var t=e.variant,n=e.children;return Object(a.jsx)(r.a,{color:t,children:n})};s.defaultProps={variant:"info"},t.a=s},557:function(e,t,n){"use strict";n(0);var r=n(4),a=n(2);t.a=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(r.Z,{color:"primary",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading ..."})})})}},580:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return l}));var r=n(552),a=n.n(r),s=n(553),c=n(555),o=n.n(c),i=n(551),u=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r,s,c,u,d,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:null,e.prev=1,n={headers:{"Content-Type":"application/json"}},r="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,s=t?"".concat(r,"/api/restaurants/").concat(t):"".concat(r,"/api/restaurants"),e.next=7,o.a.get("".concat(s),n);case 7:return c=e.sent,u=c.data,e.abrupt("return",{status:!0,data:u});case 12:return e.prev=12,e.t0=e.catch(1),d=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:d});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"}},r="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,e.next=5,o.a.delete("".concat(r,"/api/restaurants/").concat(t),n);case 5:return s=e.sent,c=s.data,e.abrupt("return",{status:!0,data:c});case 10:return e.prev=10,e.t0=e.catch(0),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,u,d,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=l.length>1&&void 0!==l[1]?l[1]:null,e.prev=1,s={headers:{"Content-Type":"application/json"}},c="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,u=null,!n){e.next=11;break}return e.next=8,o.a.put("".concat(c,"/api/restaurants/").concat(n),t,s);case 8:u=e.sent,e.next=14;break;case 11:return e.next=13,o.a.post("".concat(c,"/api/restaurants"),t,s);case 13:u=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(r=u)||void 0===r?void 0:r.data});case 17:return e.prev=17,e.t0=e.catch(1),d=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:d});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()},604:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return l}));var r=n(552),a=n.n(r),s=n(553),c=n(555),o=n.n(c),i=n(551),u=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r,s,c,u,d,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:null,e.prev=1,n={headers:{"Content-Type":"application/json"}},r="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,s=t?"".concat(r,"/api/foods/").concat(t):"".concat(r,"/api/foods"),e.next=7,o.a.get("".concat(s),n);case 7:return c=e.sent,u=c.data,e.abrupt("return",{status:!0,data:u});case 12:return e.prev=12,e.t0=e.catch(1),d=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:d});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"}},r="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,e.next=5,o.a.delete("".concat(r,"/api/foods/").concat(t),n);case 5:return s=e.sent,c=s.data,e.abrupt("return",{status:!0,data:c});case 10:return e.prev=10,e.t0=e.catch(0),u=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:u});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,u,d,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=l.length>1&&void 0!==l[1]?l[1]:null,e.prev=1,s={headers:{"Content-Type":"application/json"}},c="local"===i.a.env?i.a.endpointLocal:i.a.endpointProd,u=null,!n){e.next=11;break}return e.next=8,o.a.put("".concat(c,"/api/foods/").concat(n),t,s);case 8:u=e.sent,e.next=14;break;case 11:return e.next=13,o.a.post("".concat(c,"/api/foods"),t,s);case 13:u=e.sent;case 14:return e.abrupt("return",{status:!0,data:null===(r=u)||void 0===r?void 0:r.data});case 17:return e.prev=17,e.t0=e.catch(1),d=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,e.abrupt("return",{status:!1,error:d});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()},813:function(e,t,n){"use strict";n.r(t);var r=n(552),a=n.n(r),s=n(553),c=n(556),o=n(0),i=n(4),u=n(26),d=n(557),l=n(554),p=n(174),j=n(580),b=n(604),h=n(2);t.default=function(){var e=Object(u.i)().id,t=Object(u.g)(),n=Object(o.useState)(null),r=Object(c.a)(n,2),f=r[0],x=r[1],m=Object(o.useState)(null),v=Object(c.a)(m,2),O=v[0],g=v[1];Object(o.useEffect)((function(){function t(){return(t=Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.c)(e);case 2:(null===(n=t.sent)||void 0===n?void 0:n.status)?x(null===n||void 0===n?void 0:n.data):g(null===n||void 0===n?void 0:n.error);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}console.log("Run once, when the component mounts"),function(){t.apply(this,arguments)}()}),[e]);var w=function(){var e=Object(s.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.b)(n);case 2:e.sent.status&&t.push("/restaurants");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)(n);case 2:e.sent.status&&t.push("/restaurants");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return null===f?Object(h.jsx)(d.a,{}):O?Object(h.jsxs)(l.a,{children:[" ",O]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p.f,{}),Object(h.jsx)(i.U,{children:Object(h.jsx)(i.o,{xs:12,children:Object(h.jsxs)(i.h,{className:"mb-4",children:[Object(h.jsx)(i.l,{children:Object(h.jsxs)(i.U,{children:[Object(h.jsx)(i.o,{sm:5,children:Object(h.jsxs)("strong",{children:["restaurant ",e]})}),Object(h.jsx)(i.o,{sm:7,children:Object(h.jsxs)(i.g,{className:"float-end me-3",children:[Object(h.jsx)(i.f,{color:"outline-secondary",className:"mx-1",onClick:function(){t.push("/restaurants")},children:"Retour"}),Object(h.jsx)(i.f,{color:"outline-danger",className:"mx-0",onClick:function(){return w(null===f||void 0===f?void 0:f._id)},children:"Suppprimer"})]})})]})}),Object(h.jsx)(i.i,{children:Object(h.jsx)(i.ab,{children:Object(h.jsxs)(i.bb,{children:[Object(h.jsxs)(i.fb,{children:[Object(h.jsx)(i.cb,{children:"Name"}),Object(h.jsx)(i.cb,{children:f.name})]}),Object(h.jsxs)(i.fb,{children:[Object(h.jsx)(i.cb,{children:"Description"}),Object(h.jsx)(i.cb,{children:f.description})]}),Object(h.jsxs)(i.fb,{children:[Object(h.jsx)(i.cb,{children:"Commercant"}),Object(h.jsxs)(i.cb,{children:[f.user.firstName," ",f.user.lastName]})]}),Object(h.jsxs)(i.fb,{children:[Object(h.jsx)(i.cb,{children:"Creation"}),Object(h.jsx)(i.cb,{children:f.createdAt})]})]})})})]})})}),null===f||void 0===f?void 0:f.categories.map((function(e){return Object(h.jsxs)("div",{id:e.name,className:"container my-4",children:[Object(h.jsxs)("h2",{children:[" ",e.name," "]}),Object(h.jsx)(i.U,{children:null===e||void 0===e?void 0:e.foods.map((function(e){return Object(h.jsx)(i.o,{md:6,xs:12,className:"my-1",children:Object(h.jsxs)(i.h,{className:"hover",children:[Object(h.jsx)(i.i,{children:Object(h.jsxs)(i.U,{children:[Object(h.jsxs)(i.o,{md:6,children:[Object(h.jsx)(i.n,{children:e.name}),Object(h.jsx)(i.m,{children:e.descrption}),e.priceDrop?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("s",{children:Object(h.jsxs)(i.m,{as:"h5",children:["$",e.price]})}),Object(h.jsxs)(i.m,{as:"h3",children:["$",e.priceDrop]})]}):Object(h.jsxs)(i.m,{as:"h3",children:["$",e.price]}),Object(h.jsx)(i.m,{as:"h3",children:e.isPopular&&"Popular"}),Object(h.jsx)(i.m,{as:"h3",children:e.available&&"Available"})]}),Object(h.jsx)(i.o,{xs:6,children:Object(h.jsx)("img",{alt:"".concat(e.name),src:"img/mcDo_1.PNG",rounded:!0,height:150,width:150})})]})}),Object(h.jsxs)(i.j,{children:[Object(h.jsxs)(i.f,{color:"primary",className:"me-1",onClick:function(){return n=e._id,r=f._id,void t.push("/ajout-food/".concat(n,"?restaurant=").concat(r));var n,r},children:[" ","Editer Items"," "]}),Object(h.jsxs)(i.f,{color:"danger",className:"me-1",onClick:function(){return y(e._id)},children:[" ","Supprimer"," "]})]})]})},e._id)}))})]},e._id)}))]})}}}]);
//# sourceMappingURL=13.bb123362.chunk.js.map