(this["webpackJsonpprojet-uber-eats-dashboard"]=this["webpackJsonpprojet-uber-eats-dashboard"]||[]).push([[4],{174:function(e,a,n){"use strict";n.d(a,"a",(function(){return Q})),n.d(a,"b",(function(){return q})),n.d(a,"c",(function(){return w})),n.d(a,"d",(function(){return ae})),n.d(a,"e",(function(){return be})),n.d(a,"f",(function(){return pe}));var t=n(27),c=n(0),o=n.n(c),s=n(26),i=o.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(7),n.e(17)]).then(n.bind(null,796))})),r=o.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(12)]).then(n.bind(null,797))})),l=o.a.lazy((function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,798))})),m=o.a.lazy((function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,799))})),h=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(31)]).then(n.bind(null,800))})),j=o.a.lazy((function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,801))})),u=o.a.lazy((function(){return Promise.all([n.e(0),n.e(23)]).then(n.bind(null,802))})),d=o.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(19)]).then(n.bind(null,803))})),b=o.a.lazy((function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,804))})),p=o.a.lazy((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,805))})),O=o.a.lazy((function(){return Promise.all([n.e(0),n.e(24)]).then(n.bind(null,806))})),f=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(32)]).then(n.bind(null,807))})),x=o.a.lazy((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,808))})),g=o.a.lazy((function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,809))})),v=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(26)]).then(n.bind(null,810))})),V=o.a.lazy((function(){return Promise.all([n.e(0),n.e(8),n.e(18)]).then(n.bind(null,820))})),y=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(28)]).then(n.bind(null,811))})),A=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(27)]).then(n.bind(null,812))})),N=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(9)]).then(n.bind(null,813))})),Z=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(25)]).then(n.bind(null,814))})),P=o.a.lazy((function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,815))})),M=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(29)]).then(n.bind(null,816))})),z=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:i},{path:"/historiques",name:"Historiques",component:r},{path:"/paiements",name:"Paiements",component:o.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(21)]).then(n.bind(null,817))}))},{path:"/ajout-paiement",name:"AjoutPaiement",component:o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(30)]).then(n.bind(null,818))}))},{path:"/administrateurs",name:"Administrateurs",component:l},{path:"/detail-admin/:id",name:"DetailAdministrateur",component:m},{path:"/ajout-admin/:id?",name:"AjoutAdministrateur",component:h},{path:"/clients",name:"Clients",component:j},{path:"/detail-client/:id",name:"DetailClient",component:u},{path:"/commandes",name:"Commandes",component:d},{path:"/detail-commande/:id",name:"DetailCommande",component:b},{path:"/restaurants",name:"Restaurants",component:x},{path:"/detail-restaurant/:id",name:"DetailRestaurant",component:g},{path:"/ajout-restaurant/:id?",name:"AjoutRestaurant",component:v},{path:"/discovery-table/:idRestaurant",name:"Discoverytable",component:V},{path:"/edit-discovery-table/:idRestaurant",name:"AjoutDiscoverytable",component:y},{path:"/commercants",name:"Commercants",component:p},{path:"/detail-commercant/:id",name:"DetailCommercant",component:O},{path:"/ajout-commercant/:id?",name:"AjoutCommercant",component:f},{path:"/ajout-categorie/:id?",name:"AjoutCategorie",component:A},{path:"/ajout-food/:id?",name:"AjoutFood",component:N},{path:"/ajout-optionList/:id?",name:"AjoutOptionList",component:Z},{path:"/option-list/:id?",name:"DetailOptionList",component:P},{path:"/ajout-option/:id?",name:"AjoutOption",component:M}],C=n(4),H=n(2),L=function(){var e=Object(s.h)().pathname,a=function(e,a){return a.find((function(a){return a.path===e||a.path.substr(0,a.path.lastIndexOf("/"))===e.substr(0,e.lastIndexOf("/"))})).name},n=function(e){var n=[];return e.split("/").reduce((function(e,t,c,o){var s="".concat(e,"/").concat(t);return n.push({pathname:s,name:a(s,z),active:c+1===o.length}),s})),n}(e);return Object(H.jsxs)(C.d,{className:"m-0 ms-2",children:[Object(H.jsx)(C.e,{href:"/",children:"Home"}),n.map((function(e,a){return Object(c.createElement)(C.e,Object(t.a)(Object(t.a)({},e.active?{active:!0}:{href:e.pathname}),{},{key:a}),e.name)}))]})},Q=o.a.memo(L),S=function(){return Object(H.jsx)(C.p,{lg:!0,children:Object(H.jsx)(c.Suspense,{fallback:Object(H.jsx)(C.Z,{color:"primary"}),children:Object(H.jsxs)(s.d,{children:[z.map((function(e,a){return e.component&&Object(H.jsx)(s.b,{path:e.path,exact:e.exact,name:e.name,render:function(a){return Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(e.component,Object(t.a)({},a))})}},a)})),Object(H.jsx)(s.a,{from:"/",to:"/dashboard"})]})})})},q=o.a.memo(S),k=function(){return Object(H.jsxs)(C.w,{children:[Object(H.jsxs)("div",{children:[Object(H.jsx)("a",{href:"https://coreui.io",target:"_blank",rel:"noopener noreferrer",children:"CoreUI"}),Object(H.jsx)("span",{className:"ms-1",children:"\xa9 2021 creativeLabs."})]}),Object(H.jsxs)("div",{className:"ms-auto",children:[Object(H.jsx)("span",{className:"me-1",children:"Powered by"}),Object(H.jsx)("a",{href:"https://coreui.io/react",target:"_blank",rel:"noopener noreferrer",children:"CoreUI for React"})]})]})},w=o.a.memo(k),R=n(52),D=n(62),F=n(18),I=n(545),E=n(536),U=n(546),T=n(537),G=n(538),J=n(539),B=n(540),W=n(541),_=n(542),X=n(543),Y=n(544),K=n.p+"static/media/8.35ee8919.jpg",$=function(){var e=Object(s.g)();return Object(H.jsxs)(C.q,{variant:"nav-item",children:[Object(H.jsx)(C.v,{placement:"bottom-end",className:"py-0",caret:!1,children:Object(H.jsx)(C.b,{src:K,size:"md"})}),Object(H.jsxs)(C.u,{className:"pt-0",placement:"bottom-end",children:[Object(H.jsx)(C.s,{className:"bg-light fw-semibold py-2",children:"Account"}),Object(H.jsxs)(C.t,{href:"#",children:[Object(H.jsx)(F.a,{icon:E.a,className:"me-2"}),"Updates",Object(H.jsx)(C.c,{color:"info",className:"ms-2",children:"42"})]}),Object(H.jsxs)(C.t,{href:"#",children:[Object(H.jsx)(F.a,{icon:T.a,className:"me-2"}),"Messages",Object(H.jsx)(C.c,{color:"success",className:"ms-2",children:"42"})]}),Object(H.jsxs)(C.t,{href:"#",children:[Object(H.jsx)(F.a,{icon:G.a,className:"me-2"}),"Tasks",Object(H.jsx)(C.c,{color:"danger",className:"ms-2",children:"42"})]}),Object(H.jsxs)(C.t,{href:"#",children:[Object(H.jsx)(F.a,{icon:J.a,className:"me-2"}),"Comments",Object(H.jsx)(C.c,{color:"warning",className:"ms-2",children:"42"})]}),Object(H.jsx)(C.s,{className:"bg-light fw-semibold py-2",children:"Settings"}),Object(H.jsxs)(C.t,{href:"#",children:[Object(H.jsx)(F.a,{icon:B.a,className:"me-2"}),"Profile"]}),Object(H.jsxs)(C.t,{href:"#",children:[Object(H.jsx)(F.a,{icon:W.a,className:"me-2"}),"Settings"]}),Object(H.jsxs)(C.t,{href:"#",children:[Object(H.jsx)(F.a,{icon:_.a,className:"me-2"}),"Payments",Object(H.jsx)(C.c,{color:"secondary",className:"ms-2",children:"42"})]}),Object(H.jsxs)(C.t,{href:"#",children:[Object(H.jsx)(F.a,{icon:X.a,className:"me-2"}),"Projects",Object(H.jsx)(C.c,{color:"primary",className:"ms-2",children:"42"})]}),Object(H.jsx)(C.r,{}),Object(H.jsxs)(C.t,{href:"#",onClick:function(a){a.preventDefault(),localStorage.removeItem("user"),e.push("/login")},children:[Object(H.jsx)(F.a,{icon:Y.a,className:"me-2"}),"Lock Account"]})]})]})},ee=["608 134",'\n  <title>coreui react pro</title>\n  <g>\n    <g style="fill:#00a1ff">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n    <g style="fill:#3c4b64">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n'],ae=function(){var e=Object(D.b)(),a=Object(D.c)((function(e){return e.sidebarShow}));return Object(H.jsxs)(C.D,{position:"sticky",className:"mb-4",children:[Object(H.jsxs)(C.p,{fluid:!0,children:[Object(H.jsx)(C.H,{className:"ps-1",onClick:function(){return e({type:"set",sidebarShow:!a})},children:Object(H.jsx)(F.a,{icon:I.a,size:"lg"})}),Object(H.jsx)(C.E,{className:"mx-auto d-md-none",to:"/",children:Object(H.jsx)(F.a,{icon:ee,height:48,alt:"Logo"})}),Object(H.jsxs)(C.G,{className:"d-none d-md-flex me-auto",children:[Object(H.jsx)(C.Q,{children:Object(H.jsx)(C.R,{to:"/dashboard",component:R.c,activeClassName:"active",children:"Dashboard"})}),Object(H.jsx)(C.Q,{children:Object(H.jsx)(C.R,{href:"#",children:"Users"})}),Object(H.jsx)(C.Q,{children:Object(H.jsx)(C.R,{href:"#",children:"Settings"})})]}),Object(H.jsxs)(C.G,{children:[Object(H.jsx)(C.Q,{children:Object(H.jsx)(C.R,{href:"#",children:Object(H.jsx)(F.a,{icon:E.a,size:"lg"})})}),Object(H.jsx)(C.Q,{children:Object(H.jsx)(C.R,{href:"#",children:Object(H.jsx)(F.a,{icon:U.a,size:"lg"})})}),Object(H.jsx)(C.Q,{children:Object(H.jsx)(C.R,{href:"#",children:Object(H.jsx)(F.a,{icon:T.a,size:"lg"})})})]}),Object(H.jsx)(C.G,{className:"ms-3",children:Object(H.jsx)($,{})})]}),Object(H.jsx)(C.F,{}),Object(H.jsx)(C.p,{fluid:!0,children:Object(H.jsx)(Q,{})})]})},ne=n(107),te=["component","name","badge","icon"],ce=["component","name","icon","to"],oe=function(e){var a=e.items,n=Object(s.h)(),i=function(e,a,n){return Object(H.jsxs)(H.Fragment,{children:[a&&a,e&&e,n&&Object(H.jsx)(C.c,{color:n.color,className:"ms-auto",children:n.text})]})},r=function(e,a){var n=e.component,o=e.name,s=e.badge,r=e.icon,l=Object(ne.a)(e,te),m=n;return Object(c.createElement)(m,Object(t.a)(Object(t.a)({},l.to&&!l.items&&{component:R.c,activeClassName:"active"}),{},{key:a},l),i(o,r,s))},l=function e(a,c){var o,s=a.component,l=a.name,m=a.icon,h=a.to,j=Object(ne.a)(a,ce),u=s;return Object(H.jsx)(u,Object(t.a)(Object(t.a)({idx:String(c),toggler:i(l,m),visible:n.pathname.startsWith(h)},j),{},{children:null===(o=a.items)||void 0===o?void 0:o.map((function(a,n){return a.items?e(a,n):r(a,n)}))}),c)};return Object(H.jsx)(o.a.Fragment,{children:a&&a.map((function(e,a){return e.items?l(e,a):r(e,a)}))})},se=["608 134",'\n  <title>coreui react pro logo</title>\n  <g>\n    <g style="fill:#80d0ff;">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n\n    <g style="fill:#fff;">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n'],ie=["160 160",'\n  <title>coreui logo</title>\n  <g>\n    <g style="fill:#fff;">\n      <path d="M125,47.091,86,24.5743a12,12,0,0,0-12,0L35,47.091a12.0336,12.0336,0,0,0-6,10.3923v45.0334a12.0335,12.0335,0,0,0,6,10.3923l39,22.5166a11.9993,11.9993,0,0,0,12,0l39-22.5166a12.0335,12.0335,0,0,0,6-10.3923V57.4833A12.0336,12.0336,0,0,0,125,47.091Zm-2,55.4257a4,4,0,0,1-2,3.464L82,128.4974a4,4,0,0,1-4,0L39,105.9807a4,4,0,0,1-2-3.464V57.4833a4,4,0,0,1,2-3.4641L78,31.5025a4,4,0,0,1,4,0l39,22.5167a4,4,0,0,1,2,3.4641Z"/>\n      <path d="M103.0216,93.0379h-2.866a4,4,0,0,0-1.9246.4935L80.95,103.0167,61,91.4981V68.5206L80.95,57.002l17.2894,9.455a4,4,0,0,0,1.9192.4905h2.8632a2,2,0,0,0,2-2V62.2357a2,2,0,0,0-1.04-1.7547L84.793,49.9854a8.0391,8.0391,0,0,0-7.8428.09L57,61.5929A8.0243,8.0243,0,0,0,53,68.5216v22.976a8,8,0,0,0,4,6.9283l19.95,11.5185a8.0422,8.0422,0,0,0,7.8433.0879l19.19-10.5311a2,2,0,0,0,1.0378-1.7534v-2.71A2,2,0,0,0,103.0216,93.0379Z"/>\n    </g>\n  </g>\n'],re=n(405),le=(n(529),n(547)),me=n(548),he=n(549),je=n(550),ue=[{component:C.Q,name:"Dashboard",to:"/dashboard",icon:Object(H.jsx)(F.a,{icon:le.a,customClassName:"nav-icon"})},{component:C.Q,name:"Historiques",to:"/historiques",icon:Object(H.jsx)(F.a,{icon:le.a,customClassName:"nav-icon"})},{component:C.Q,name:"Commandes",to:"/commandes",icon:Object(H.jsx)(F.a,{icon:me.a,customClassName:"nav-icon"})},{component:C.Q,name:"Restaurants",to:"/restaurants",icon:Object(H.jsx)(F.a,{icon:B.a,customClassName:"nav-icon"})},{component:C.Q,name:"Commercants",to:"/commercants",icon:Object(H.jsx)(F.a,{icon:B.a,customClassName:"nav-icon"})},{component:C.Q,name:"Clients",to:"/clients",icon:Object(H.jsx)(F.a,{icon:B.a,customClassName:"nav-icon"})},{component:C.Q,name:"Administrateurs",to:"/administrateurs",icon:Object(H.jsx)(F.a,{icon:B.a,customClassName:"nav-icon"})},{component:C.Q,name:"Paiements",to:"/paiements",icon:Object(H.jsx)(F.a,{icon:he.a,customClassName:"nav-icon"})},{component:C.S,name:"Extras"},{component:C.P,name:"Pages",icon:Object(H.jsx)(F.a,{icon:je.a,customClassName:"nav-icon"}),items:[{component:C.Q,name:"Login",to:"/login"},{component:C.Q,name:"Register",to:"/register"},{component:C.Q,name:"Error 404",to:"/404"},{component:C.Q,name:"Error 500",to:"/500"}]}],de=function(){var e=Object(D.b)(),a=Object(D.c)((function(e){return e.sidebarUnfoldable})),n=Object(D.c)((function(e){return e.sidebarShow}));return Object(H.jsxs)(C.V,{position:"fixed",unfoldable:a,visible:n,onVisibleChange:function(a){e({type:"set",sidebarShow:a})},children:[Object(H.jsxs)(C.W,{className:"d-none d-md-flex",to:"/",children:[Object(H.jsx)(F.a,{className:"sidebar-brand-full",icon:se,height:35}),Object(H.jsx)(F.a,{className:"sidebar-brand-narrow",icon:ie,height:35})]}),Object(H.jsx)(C.X,{children:Object(H.jsx)(re.a,{children:Object(H.jsx)(oe,{items:ue})})}),Object(H.jsx)(C.Y,{className:"d-none d-lg-flex",onClick:function(){return e({type:"set",sidebarUnfoldable:!a})}})]})},be=o.a.memo(de),pe=function(){var e=Object(s.g)();return Object(c.useEffect)((function(){console.log("Authentification","Run once, when the component mounts",localStorage.getItem("user"),JSON.parse(localStorage.getItem("user"))),localStorage.getItem("user")||(console.log("Authentification","condition"),e.push("/login"))}),[e]),Object(H.jsx)(H.Fragment,{children:Object(H.jsx)("p",{className:"d-none",children:"AUTH"})})}},522:function(e,a,n){},534:function(e,a,n){},535:function(e,a,n){"use strict";n.r(a);n(177),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(203),n(143),n(204),n(205),n(206),n(208),n(209),n(212),n(213),n(81),n(216),n(217),n(219),n(220),n(147),n(221),n(222),n(223),n(226),n(227),n(228),n(229),n(230),n(231),n(150),n(232),n(114),n(234),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(257),n(258),n(259),n(260),n(261),n(262),n(264),n(265),n(156),n(268),n(269),n(270),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(157),n(289),n(290),n(158),n(291),n(297),n(298),n(299),n(300),n(301),n(302),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(123),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(125),n(163),n(321),n(324),n(325),n(326),n(164),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(362),n(363),n(364),n(365),n(366),n(367),n(368),n(369),n(370),n(371),n(372),n(373),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(381),n(382),n(383),n(384),n(385),n(105),n(387),n(422),n(428),n(429),n(430),n(431),n(432),n(434),n(435),n(436),n(437),n(438),n(439),n(440),n(441),n(443),n(444),n(445),n(446),n(447),n(448),n(449),n(450),n(451),n(452),n(453),n(454),n(455),n(456),n(457),n(458),n(459),n(460),n(461),n(462),n(463),n(464),n(465),n(466),n(467),n(469),n(471),n(472),n(473),n(474),n(475),n(477),n(478),n(479),n(480),n(481),n(482),n(483),n(484),n(485),n(486),n(487),n(488),n(489),n(490),n(491),n(492),n(493),n(494),n(495),n(496),n(497),n(498),n(499),n(500),n(501),n(502),n(504),n(506),n(507),n(508),n(509),n(510),n(511),n(512),n(513),n(514),n(515),n(391),n(167),n(394),n(395),n(396),n(398),n(168);var t=n(0),c=n.n(t),o=n(33),s=n.n(o),i=n(27),r=n(52),l=n(26),m=(n(522),n(174)),h=n(2),j=Object(h.jsx)("div",{className:"pt-3 text-center",children:Object(h.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),u=c.a.lazy((function(){return n.e(37).then(n.bind(null,791))})),d=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(33)]).then(n.bind(null,792))})),b=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(34)]).then(n.bind(null,793))})),p=c.a.lazy((function(){return n.e(35).then(n.bind(null,794))})),O=c.a.lazy((function(){return n.e(36).then(n.bind(null,795))})),f=function(){return Object(h.jsxs)(r.a,{children:[Object(h.jsx)(m.f,{}),Object(h.jsx)(c.a.Suspense,{fallback:j,children:Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{exact:!0,path:"/login",name:"Login Page",render:function(e){return Object(h.jsx)(d,Object(i.a)({},e))}}),Object(h.jsx)(l.b,{exact:!0,path:"/register",name:"Register Page",render:function(e){return Object(h.jsx)(b,Object(i.a)({},e))}}),Object(h.jsx)(l.b,{exact:!0,path:"/404",name:"Page 404",render:function(e){return Object(h.jsx)(p,Object(i.a)({},e))}}),Object(h.jsx)(l.b,{exact:!0,path:"/500",name:"Page 500",render:function(e){return Object(h.jsx)(O,Object(i.a)({},e))}}),Object(h.jsx)(l.b,{path:"/",name:"Home",render:function(e){return Object(h.jsx)(u,Object(i.a)({},e))}})]})})]})},x=function(e){e&&e instanceof Function&&n.e(39).then(n.bind(null,819)).then((function(a){var n=a.getCLS,t=a.getFID,c=a.getFCP,o=a.getLCP,s=a.getTTFB;n(e),t(e),c(e),o(e),s(e)}))},g=n(62),v=n(107),V=n(406),y=["type"],A={sidebarShow:!0},N=Object(V.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0,n=a.type,t=Object(v.a)(a,y);return"set"===n?Object(i.a)(Object(i.a)({},e),t):e})),Z=N;n(530),n(534);s.a.render(Object(h.jsx)(g.a,{store:Z,children:Object(h.jsx)(f,{})}),document.getElementById("root")),x()}},[[535,5,6]]]);
//# sourceMappingURL=main.dcd266a4.chunk.js.map