!function(e){var t={};function n(c){if(t[c])return t[c].exports;var a=t[c]={i:c,l:!1,exports:{}};return e[c].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(c,a,function(t){return e[t]}.bind(null,a));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var c={setHome:()=>{const e=document.getElementById("content"),t=document.createElement("section");t.setAttribute("id","home-sec");const n=document.createElement("div");n.setAttribute("class","main"),t.appendChild(n);const c=document.createElement("h3");c.setAttribute("class","headline"),c.innerText="Traditionally Crafted.",n.appendChild(c);const a=document.createElement("div"),d=document.createElement("button");d.setAttribute("class","menuBtn"),d.innerText="View our menu",a.appendChild(d),n.appendChild(a),e.appendChild(t)},setActive:()=>{document.getElementById("Home").classList.add("active")}};var a={setMenu:()=>{const e=document.getElementById("content"),t=document.createElement("section");t.setAttribute("id","menu-sec");const n=document.createElement("div");n.setAttribute("class","main"),n.classList.add("menu-card"),t.appendChild(n);const c=document.createElement("h2");c.innerText="Menu";const a=document.createElement("grid");a.setAttribute("class","grid"),n.appendChild(c),n.appendChild(a);const d={Drinks:["Matcha Milk Tea","Oolong Milk Tea","Jasmine Milk Tea","Strawberry Smoothie"],Snacks:["Matcha Egg Puff","Popcorn Chicken","Fried Tofu","Cream Toast"],"Ice Cream":["Matcha","Chocolate","Vanilla","StrawBerry"]};for(let e in d){const t=document.createElement("h4");t.innerText=e;const n=document.createElement("ul");for(let t of d[e]){const e=document.createElement("li");e.innerText=t,n.appendChild(e)}a.appendChild(t),a.appendChild(n)}e.appendChild(t)},setActive:()=>{document.getElementById("Menu").classList.add("active")}};var d={setContact:()=>{const e=document.getElementById("content"),t=document.createElement("section");t.setAttribute("id","contact-sec");const n=document.createElement("div");n.setAttribute("class","main"),n.classList.add("contact-card"),t.appendChild(n);const c=document.createElement("h3");c.innerText="Give us feedback";const a=document.createElement("form");n.appendChild(c),n.appendChild(a);const d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("id","name"),d.setAttribute("placeholder","name"),d.setAttribute("name","name"),d.setAttribute("required","");const r=document.createElement("br");a.appendChild(d),a.appendChild(r);const i=document.createElement("input");i.setAttribute("type","email"),i.setAttribute("id","email"),i.setAttribute("placeholder","email"),i.setAttribute("name","email"),i.setAttribute("required","");const o=document.createElement("br");a.appendChild(i),a.appendChild(o);const l=document.createElement("textarea");l.setAttribute("id","message"),l.setAttribute("name","message"),l.setAttribute("placeholder","message"),l.setAttribute("cols","17"),l.setAttribute("rows","13"),l.setAttribute("required","");const s=document.createElement("br");a.appendChild(l),a.appendChild(s);const u=document.createElement("div");u.setAttribute("class","btnDiv");const m=document.createElement("button");m.setAttribute("class","sendBtn"),m.innerText="Send",u.appendChild(m),a.appendChild(u),e.appendChild(t)},setActive:()=>{document.getElementById("Contact").classList.add("active")}};({setHeader:()=>{const e=document.getElementById("content");let t=document.createElement("header"),n=document.createElement("nav"),c=document.createElement("span");c.setAttribute("id","logo"),c.innerText="Matcha Café";let a=document.createElement("ul");a.setAttribute("class","navlist");let d=["Home","Menu","Contact"];for(let e of d){let t=document.createElement("li");t.setAttribute("id",""+e);let n=document.createElement("a");n.innerText=""+e,t.appendChild(n),a.appendChild(t)}n.appendChild(c),n.appendChild(a),t.appendChild(n),e.appendChild(t)}}).setHeader(),c.setHome(),c.setActive(),a.setMenu(),d.setContact()}]);