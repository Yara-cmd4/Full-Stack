(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,c,t){},31:function(e,c,t){},32:function(e,c,t){},41:function(e,c,t){"use strict";t.r(c);var s=t(2),n=t(1),j=t.n(n),i=t(23),r=t.n(i),b=(t(31),t(14)),l=(t(17),t(32),t(18),t(24));var a=function(e){return Object(s.jsxs)("div",{className:"App-header",children:[Object(s.jsx)("div",{className:"right",children:Object(s.jsx)("a",{href:"/",style:{color:"white",fontSize:"30px"},children:Object(s.jsx)(l.a,{})})}),Object(s.jsxs)("span",{className:"span1",children:[" ",e.bank," "]}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"pp",children:Object(s.jsx)("img",{src:e.img,alt:"oknesset-logo"})}),Object(s.jsxs)("span",{className:"span2",children:[" ",e.name]})]})},d=t(9),O=t(13);var o=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"grid-container",children:[Object(s.jsxs)("div",{style:{fontSize:"40px"},children:[Object(s.jsx)("br",{}),Object(s.jsx)("h1",{children:e.disApprovePer}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"\u05e0\u05d2\u05d3"})]}),Object(s.jsxs)("div",{style:{fontSize:"90px"},children:[Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"lineb"})]}),Object(s.jsxs)("div",{style:{fontSize:"40px"},children:[Object(s.jsx)("br",{}),Object(s.jsx)("h1",{children:e.ApprovePer}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"\u05d1\u05e2\u05d3"})]})]}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"pp",children:Object(s.jsx)("h3",{style:{color:"#324483"},children:"\u05de\u05d4 \u05d4\u05d1\u05d7\u05d9\u05e8\u05d4 \u05e9\u05dc\u05da?"})}),Object(s.jsxs)("div",{className:"grid-container  ",children:[Object(s.jsxs)("div",{name:"name",children:[Object(s.jsx)(O.a,{className:"divlike",style:{color:"#324483",cursor:"pointer"}}),Object(s.jsx)("h2",{children:"\u05d0\u05e0\u05d9 \u05e0\u05d2\u05d3"})]}),Object(s.jsx)("div",{}),Object(s.jsxs)("div",{children:[Object(s.jsx)(O.b,{className:"divlike",style:{color:"#324483",cursor:"pointer"}}),Object(s.jsx)("h2",{children:"\u05d0\u05e0\u05d9 \u05d1\u05e2\u05d3"})]})]})]})},x=t(12),h=t(5);var p=function(e){var c=Object(n.useState)([]),t=Object(b.a)(c,2),j=t[0],i=t[1];function r(e){return Object(s.jsx)("div",{children:j.map((function(e,c){return Object(s.jsx)(o,{disApprovePer:e.disApprovePer,ApprovePer:e.ApprovePer},c)}))})}function l(){return Object(s.jsx)("div",{})}function a(){return Object(s.jsx)("div",{})}return Object(n.useEffect)((function(){fetch("vots/get-vots").then((function(e){return e.json()})).then((function(e){console.log(e),i(e.vots)}))}),[]),Object(s.jsxs)(x.a,{children:[Object(s.jsxs)("div",{className:"grid-container",children:[Object(s.jsx)("div",{children:Object(s.jsx)(d.a,{children:Object(s.jsx)(d.a.Item,{children:Object(s.jsx)(x.b,{to:"/Details",children:Object(s.jsx)(d.a.Link,{eventKey:"link1",disabled:!0,children:"\u05e1\u05d9\u05db\u05d5\u05dd \u05e4\u05e8\u05d8\u05d9\u05dd"})})})})}),Object(s.jsx)("div",{children:Object(s.jsx)(d.a,{children:Object(s.jsx)(d.a.Item,{children:Object(s.jsx)(x.b,{to:"/Moreinfo",children:Object(s.jsx)(d.a.Link,{eventKey:"link2",disabled:!0,children:"\u05e2\u05d5\u05d3 \u05de\u05d9\u05d3\u05e2"})})})})}),Object(s.jsx)("div",{children:Object(s.jsx)(d.a,{children:Object(s.jsx)(d.a.Item,{children:Object(s.jsx)(x.b,{to:"/",children:Object(s.jsx)(d.a.Link,{style:{color:"#324483"},href:"/",children:"\u05e0\u05ea\u05d5\u05e0\u05d9 \u05d4\u05e6\u05d1\u05e2\u05d4"})})})})})]}),Object(s.jsxs)(h.c,{children:[Object(s.jsx)(h.a,{path:"/Details",children:Object(s.jsx)(a,{})}),Object(s.jsx)(h.a,{path:"/MoreInfo",children:Object(s.jsx)(l,{})}),Object(s.jsx)(h.a,{path:"/",children:Object(s.jsx)(r,{})})]})]})};var v=function(){var e=Object(n.useState)([]),c=Object(b.a)(e,2),t=c[0],j=c[1];return Object(n.useEffect)((function(){fetch("vots/get-vots").then((function(e){return e.json()})).then((function(e){console.log(e),j(e.vots)}))}),[]),Object(s.jsx)("div",{className:"mainApp",children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("header",{children:t.map((function(e,c){return Object(s.jsx)(a,{bank:e.bank,img:e.img,name:e.name},c)}))}),Object(s.jsx)(p,{})]})})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,j=c.getLCP,i=c.getTTFB;t(e),s(e),n(e),j(e),i(e)}))};r.a.render(Object(s.jsx)(j.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),u()}},[[41,1,2]]]);
//# sourceMappingURL=main.62313e78.chunk.js.map