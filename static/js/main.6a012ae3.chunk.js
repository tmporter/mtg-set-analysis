(this["webpackJsonpreason-reward"]=this["webpackJsonpreason-reward"]||[]).push([[0],{181:function(e,n,t){},316:function(e,n,t){},318:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t(0),a=t.n(r),s=t(85),i=t.n(s),o=(t(181),t(73)),u=t(17),l=t(23),j=t(24);function b(){var e=Object(l.a)(["\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  background: rgba(0, 50, 50, 0.2);\n  color: rgba(0, 0, 0, 0.7);\n\n  & > * {\n    margin: 0 1rem;\n  }\n\n  & > a {\n    text-decoration: none;\n    color: rgba(0, 0, 0, 0.6);\n    font-weight: 600;\n\n    &.active {\n      text-decoration: underline;\n    }\n\n    &:hover {\n      color: rgba(0, 0, 0, 0.9);\n    }\n  }\n"]);return b=function(){return e},e}var d=j.a.header(b()),h=t(87),x=t(68),f=t(27),p=t.n(f),O=t(62),g=t(52),v=t(15);function m(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return m=function(){return e},e}function w(){var e=Object(l.a)(["\n  border-radius: 10px;\n  border: 1px solid black;\n  padding: 0.5rem;\n  width: calc(2.5 * 100px);\n  height: calc(3.5 * 100px);\n"]);return w=function(){return e},e}function y(){var e=Object(l.a)(["\n  border-radius: 10px;\n  max-width: calc(2.5 * 100px);\n  max-height: calc(3.5 * 100px);\n  width: auto;\n  height: auto;\n"]);return y=function(){return e},e}var k=j.a.img(y()),C=j.a.div(w()),S=j.a.div(m()),N=function(e){var n=e.image_uris,t=e.name,a=e.oracle_text,s=e.card_faces,i=Object(r.useState)(!1),o=Object(v.a)(i,2),u=o[0],l=o[1],j=null;return j=s?s[u?1:0].image_uris.normal:n.normal,Object(c.jsxs)(S,{children:[j?Object(c.jsx)(k,{className:"Card",src:j}):Object(c.jsxs)(C,{children:[Object(c.jsx)("h4",{children:t}),Object(c.jsx)("p",{children:a})]}),s?u?Object(c.jsx)("button",{type:"button",onClick:function(){return l(!1)},children:"show front"}):Object(c.jsx)("button",{type:"button",onClick:function(){return l(!0)},children:"show back"}):null]})};function _(){var e=Object(l.a)(["\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-bottom: 0px;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n\n  & > ul {\n    list-style-type: none;\n  }\n"]);return _=function(){return e},e}var T=j.a.div(_()),A=function(e){var n=e.cardData,t=e.evaluation,r=e.onChange,a=function(e){r(n.id,e.currentTarget.value)};return Object(c.jsxs)(T,{children:[Object(c.jsx)(N,Object(x.a)({},n)),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("input",{type:"radio",name:"eval-".concat(n.id),value:"reason",checked:"reason"===t,id:"reason-".concat(n.id),onChange:a}),Object(c.jsx)("label",{for:"reason-".concat(n.id),children:"Reason"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("input",{type:"radio",name:"eval-".concat(n.id),value:"reward",checked:"reward"===t,id:"reward-".concat(n.id),onChange:a}),Object(c.jsx)("label",{for:"reward-".concat(n.id),children:"Reward"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("input",{type:"radio",name:"eval-".concat(n.id),value:"rp",checked:"rp"===t,id:"rp-".concat(n.id),onChange:a}),Object(c.jsx)("label",{for:"rp-".concat(n.id),children:"Role-player"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("input",{type:"radio",name:"eval-".concat(n.id),value:"replaceable",checked:"replaceable"===t,id:"replaceable-".concat(n.id),onChange:a}),Object(c.jsx)("label",{for:"replaceable-".concat(n.id),children:"Replaceable"})]})]})]})};function I(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return I=function(){return e},e}var D=j.a.div(I());function E(){var e=Object(l.a)(["\n  width: 100%;\n"]);return E=function(){return e},e}var R=j.a.select(E()),F=function(e){var n=e.set,t=e.onChange,a=Object(r.useState)([]),s=Object(v.a)(a,2),i=s[0],o=s[1];return Object(r.useEffect)((function(){Object(g.a)(p.a.mark((function e(){var n,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,fetch("https://api.scryfall.com/sets");case 4:n=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return");case 11:return e.next=13,n.json();case 13:t=e.sent,o(t.data);case 15:case"end":return e.stop()}}),e,null,[[1,7]])})))()}),[]),Object(c.jsxs)(R,{value:n,onChange:t,children:[Object(c.jsx)("option",{value:"",children:"Select a set..."}),i.map((function(e){return Object(c.jsxs)("option",{value:e.code,children:[e.name," (",e.code.toUpperCase(),")"]})}))]})},L=function(){var e=Object(r.useState)(""),n=Object(v.a)(e,2),t=n[0],a=n[1],s=Object(r.useState)([]),i=Object(v.a)(s,2),o=i[0],u=i[1],l=Object(r.useState)({}),j=Object(v.a)(l,2),b=j[0],d=j[1];Object(r.useEffect)((function(){var e=localStorage.getItem("evaluations");e&&(console.log("Loading evaluations from local storage..."),d(JSON.parse(e)))}),[]),Object(r.useEffect)((function(){console.log(b),localStorage.setItem("evaluations",JSON.stringify(b))}),[b]);var f=function(){var e=Object(g.a)(p.a.mark((function e(n){var t,c,r,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.currentTarget.value){e.next=5;break}return u([]),a(""),e.abrupt("return");case 5:c=[],r="https://api.scryfall.com/cards/search?q=set:".concat(t);case 7:return e.next=10,fetch(r);case 10:return s=e.sent,e.next=13,s.json();case 13:if(i=e.sent,console.log(i),i.data&&(c=[].concat(Object(O.a)(c),Object(O.a)(i.data.filter((function(e){return"card"===e.object}))))),console.log({np:i.next_page}),!i.has_more){e.next=21;break}r=i.next_page,e.next=22;break;case 21:return e.abrupt("break",24);case 22:e.next=7;break;case 24:u(c),a(t);case 26:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(e,n){d(Object(x.a)(Object(x.a)({},b),{},Object(h.a)({},e,n)))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(F,{set:t,onChange:f}),Object(c.jsx)(D,{children:o.sort((function(e,n){return parseInt(e.collector_number)-parseInt(n.collector_number)})).map((function(e){return Object(c.jsx)(A,{cardData:e,evaluation:b[e.id]||null,onChange:m})}))})]})},P=t(323),J=t(168),M=t(169),B=t(92),K=t(74),q=t(171),H=function(e,n){return Math.round((e+Number.EPSILON)*(10^n))/(10^n)},U=function(e){var n,t=e.values,r=void 0===t?[]:t,a=e.maxDecimalPlaces,s=void 0===a?2:a;return Object(c.jsx)("span",{children:H((n=r,n.reduce((function(e,n){return e+n}),0)/n.length),s)})};function z(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  & > label {\n    margin-right: 1rem;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"]);return z=function(){return e},e}var G=j.a.fieldset(z()),Q=function(e){var n=e.onChange,t=Object(r.useState)([]),a=Object(v.a)(t,2),s=a[0],i=a[1],o=function(e,t){var c=e.currentTarget.checked,r=[];t?(r=s.filter((function(e){return e!==t})),c&&r.push(t)):r=c?["common","uncommon","rare","mythic"]:[],i(r),n(r)};return Object(c.jsxs)(G,{children:[Object(c.jsx)("legend",{children:"Rarity"}),Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",checked:4===s.length,onChange:function(e){return o(e,"")}}),Object(c.jsx)("span",{children:"Select all..."})]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",checked:s.includes("common"),onChange:function(e){return o(e,"common")}}),Object(c.jsx)("span",{children:"C"})]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",checked:s.includes("uncommon"),onChange:function(e){return o(e,"uncommon")}}),Object(c.jsx)("span",{children:"U"})]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",checked:s.includes("rare"),onChange:function(e){return o(e,"rare")}}),Object(c.jsx)("span",{children:"R"})]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",checked:s.includes("mythic"),onChange:function(e){return o(e,"mythic")}}),Object(c.jsx)("span",{children:"M"})]})]})};function V(){var e=Object(l.a)(['\n  display: grid;\n  grid-template: "filters content" / 200px auto;\n']);return V=function(){return e},e}var W=j.a.div(V()),X=function(){var e=Object(r.useState)([]),n=Object(v.a)(e,2),t=n[0],a=n[1],s=Object(r.useState)(!1),i=Object(v.a)(s,2),o=i[0],u=i[1],l=Object(r.useState)([]),j=Object(v.a)(l,2),b=j[0],d=j[1],h=t.filter((function(e){return b&&b.length>0?b.includes(e.rarity):e})),x=function(){var e=Object(g.a)(p.a.mark((function e(n){var t,c,r,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.currentTarget.value){e.next=4;break}return a([]),e.abrupt("return");case 4:c=[],r="https://api.scryfall.com/cards/search?q=set:".concat(t),u(!0);case 7:return e.next=10,fetch(r);case 10:return s=e.sent,e.next=13,s.json();case 13:if((i=e.sent).data&&(c=[].concat(Object(O.a)(c),Object(O.a)(i.data.filter((function(e){return"card"===e.object}))))),!i.has_more){e.next=19;break}r=i.next_page,e.next=20;break;case 19:return e.abrupt("break",22);case 20:e.next=7;break;case 22:a(c),u(!1);case 24:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(c.jsxs)(W,{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(F,{onChange:x}),Object(c.jsx)(Q,{onChange:function(e){return d(e)}})]}),o?"Loading...":h.length>0?Object(c.jsxs)("div",{children:[Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Average power:"," ",Object(c.jsx)(U,{values:h.filter((function(e){return!isNaN(e.power)})).map((function(e){return+e.power}))})]}),Object(c.jsxs)("li",{children:["Average toughness:"," ",Object(c.jsx)(U,{values:h.filter((function(e){return!isNaN(e.toughness)})).map((function(e){return+e.toughness}))})]}),Object(c.jsxs)("li",{children:["Average CMC:"," ",Object(c.jsx)(U,{values:h.filter((function(e){return!isNaN(e.cmc)})).map((function(e){return+e.cmc}))})]})]}),Object(c.jsx)("div",{style:{display:"flex",justifyContent:"space-between",textAlign:"center"},children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Power/Toughness breakdown"}),Object(c.jsxs)(P.a,{data:Object.values(h.reduce((function(e,n){var t=[];n.card_faces?t.push(n.card_faces):t.push(n);for(var c=0,r=t;c<r.length;c++){var a=r[c];a.power&&(e[a.power]||(e[a.power]={value:a.power,power:0,toughness:0}),e[a.power].power++),a.toughness&&(e[a.toughness]||(e[a.toughness]={value:a.toughness,power:0,toughness:0}),e[a.toughness].toughness++)}return e}),{})),width:500,height:300,margin:{top:5,right:30,left:20,bottom:5},children:[Object(c.jsx)(J.a,{dataKey:"value"}),Object(c.jsx)(M.a,{}),Object(c.jsx)(B.a,{}),Object(c.jsx)(K.a,{}),Object(c.jsx)(q.a,{dataKey:"power",fill:"#DA4167",label:{fill:"white"}}),Object(c.jsx)(q.a,{dataKey:"toughness",fill:"#083D77",label:{fill:"white"}})]})]})})]}):null]})},Y=(t(316),function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)(d,{children:[Object(c.jsx)(o.b,{exact:!0,to:"/",children:"Home"}),Object(c.jsx)(o.b,{to:"/stats",children:"Statistics"})]}),Object(c.jsx)("div",{style:{padding:"1rem"},children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/",children:"Home"}),Object(c.jsx)(u.a,{path:"/evaluations",children:Object(c.jsx)(L,{})}),Object(c.jsx)(u.a,{path:"/stats",children:Object(c.jsx)(X,{})}),Object(c.jsx)(u.a,{path:"/404",children:"404"})]})})]})}),Z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,325)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),r(e),a(e),s(e)}))},$=document.getElementsByTagName("base")[0].getAttribute("href");i.a.render(Object(c.jsx)(o.a,{basename:$,children:Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(Y,{})})}),document.getElementById("root")),Z()}},[[318,1,2]]]);
//# sourceMappingURL=main.6a012ae3.chunk.js.map