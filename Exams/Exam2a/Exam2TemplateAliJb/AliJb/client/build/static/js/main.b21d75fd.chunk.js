(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{38:function(e,t,n){},40:function(e,t,n){},59:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),o=n.n(r),a=n(30),i=n.n(a),s=(n(38),n(10)),j=n.n(s),u=n(32),l=n(16),b=n(14),d=(n(40),n(11)),h=n(3),p=n(19),O=n.n(p),x=(n(59),n(60),n(71));var f=function(e){var t=e.info;return Object(c.jsxs)(x.a,{style:{width:"18rem"},children:[Object(c.jsx)(x.a.Img,{variant:"top",src:t.img}),Object(c.jsxs)(x.a.Body,{children:[Object(c.jsx)(x.a.Title,{children:t.name}),Object(c.jsxs)(x.a.Text,{children:["author : ",t.author,Object(c.jsx)("br",{}),"year : ",t.year]})]})]})};var m=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),n=t[0],o=t[1],a=Object(r.useState)(!1),i=Object(b.a)(a,2),s=i[0],p=i[1],x=Object(r.useState)(n),m=Object(b.a)(x,2),v=m[0],g=m[1],y=Object(r.useState)(!1),k=Object(b.a)(y,2),S=k[0],w=k[1];Object(r.useEffect)((function(){fetch("/book/get_books").then((function(e){return e.json()})).then((function(e){console.log(e),o(e.books)}))}),[S]);var B=function(){return Math.random().toString(36).substr(2,9)};function E(e){return F.apply(this,arguments)}function F(){return(F=Object(l.a)(j.a.mark((function e(t){var c,r,a,i,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c=t.target.children.name.value,r=t.target.children.author.value,a=t.target.children.year.value,i="https://picsum.photos/200?random=".concat(B()),s={name:c,author:r,year:a,img:i},O.a.post("/book/add_book",{book:s}).then((function(e){console.log(e.data.book),console.log(n),o([].concat(Object(u.a)(n),[e.data.book])),p(!0)}),(function(e){console.log(e),alert("Error :Something went wrong")})),t.target.children.name.value="",t.target.children.author.value="",t.target.children.year.value="";case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return D.apply(this,arguments)}function D(){return(D=Object(l.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=t.target.children.search.value,O.a.post("/book/find_books",{txt:n}).then((function(e){console.log(e.data.books),g(e.data.books)}),(function(e){console.log(e),alert("Error :Something went wrong")})),t.target.children.search.value="";case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(l.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,fetch("/book/delete_book/".concat(t),{method:"DELETE"});case 3:return n=e.sent,console.log(n),w(!S),e.abrupt("return",n.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("form",{onSubmit:E,children:[Object(c.jsx)("input",{type:"text",placeholder:"Add Book Name",name:"name"}),Object(c.jsx)("input",{type:"text",placeholder:"Add Book Author",name:"author"}),Object(c.jsx)("input",{type:"text",placeholder:"Add Book Year",name:"year"}),Object(c.jsx)("input",{type:"submit",placeholder:"su"})]}),!0===s?Object(c.jsx)("div",{children:" Ok "}):null,Object(c.jsx)("div",{children:n.map((function(e,t){return Object(c.jsxs)("div",{children:[Object(c.jsx)(f,{info:e}),Object(c.jsxs)("button",{onClick:function(){!function(e){T.apply(this,arguments)}(e._id)},children:["Delete Me !"," "]})]},t)}))})]})}function C(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("form",{onSubmit:A,children:[Object(c.jsx)("input",{type:"text",placeholder:"Search Book by Name Year Author",name:"search"}),Object(c.jsx)("input",{type:"submit",placeholder:"su"})]}),Object(c.jsx)("div",{children:v.map((function(e,t){return Object(c.jsx)("div",{children:Object(c.jsx)(f,{info:e})},t)}))})]})}return Object(c.jsx)("div",{children:Object(c.jsx)(d.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:"/find",children:"Find"})})]})}),Object(c.jsxs)("div",{children:[Object(c.jsx)(d.b,{to:"/find",children:Object(c.jsx)("button",{type:"button",children:"Find Screen"})}),Object(c.jsx)(d.b,{to:"/",children:Object(c.jsx)("button",{type:"button",children:"Home Screen"})})]}),Object(c.jsxs)(h.c,{children:[Object(c.jsx)(h.a,{path:"/Home",children:Object(c.jsx)(_,{})}),Object(c.jsx)(h.a,{path:"/find",children:Object(c.jsx)(C,{})}),Object(c.jsx)(h.a,{path:"/",children:Object(c.jsx)(_,{})})]})]})})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),v()}},[[69,1,2]]]);
//# sourceMappingURL=main.b21d75fd.chunk.js.map