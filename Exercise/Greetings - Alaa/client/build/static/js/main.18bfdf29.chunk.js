(this.webpackJsonpalaa_test3_client=this.webpackJsonpalaa_test3_client||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n.n(a),r=n(14),s=n.n(r);n(21),n(22),n(23);var l=function(){return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.greetingImageSrc,n=e.greetingText;fetch("/add-greeting",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({greetingImageSrc:t,greetingText:n})}).then((function(e){console.log(e)}))},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:" Enter Greeting Image URL:"}),Object(c.jsx)("input",{type:"text",placeholder:"image URL",name:"greetingImageSrc"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:" Enter Greeting Image Text:"}),Object(c.jsx)("input",{type:"text",placeholder:"greeting text",name:"greetingText"})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:" Add Greeting"})})]})},j=n(9),o=n(2);function g(){return Object(c.jsxs)(j.a,{children:[Object(c.jsx)("nav",{className:"all-tabs",children:Object(c.jsxs)("ul",{onClick:function(e){"a"!==e.target.tagName.toLowerCase()&&(e.target=e.target.parentNode),document.querySelectorAll("nav>ul>a").forEach((function(e){return e.classList.remove("active-nav")})),e.target.classList.add("active-nav")},children:[Object(c.jsx)(j.b,{className:"nav active-nav",to:"/",children:Object(c.jsx)("li",{children:"Greeting Form"})}),Object(c.jsx)(j.b,{className:"nav",to:"/page2",children:Object(c.jsx)("li",{children:"Page 2"})})]})}),Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/page2",children:Object(c.jsx)("h1",{children:"page2"})}),Object(c.jsx)(o.a,{path:"/",children:Object(c.jsx)(l,{})})]})]})}var d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),d()}},[[32,1,2]]]);
//# sourceMappingURL=main.18bfdf29.chunk.js.map