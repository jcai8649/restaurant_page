!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r={setHome:()=>{const e=document.getElementById("content"),t=document.createElement("section");t.setAttribute("id","home-sec");const n=document.createElement("div");n.setAttribute("class","main"),t.appendChild(n);const r=document.createElement("h3");r.setAttribute("class","headline"),r.innerText="Traditionally Crafted.",n.appendChild(r);const a=document.createElement("div"),c=document.createElement("button");c.setAttribute("class","menuBtn"),c.innerText="View our menu",a.appendChild(c),n.appendChild(a),e.appendChild(t)},setActive:()=>{document.getElementById("Home").classList.add("active")}};var a={setMenu:()=>{const e=document.getElementById("content"),t=document.createElement("section");t.setAttribute("id","menu-sec");const n=document.createElement("div");n.setAttribute("class","main"),n.classList.add("menu-card"),t.appendChild(n);const r=document.createElement("h2");r.innerText="Menu";const a=document.createElement("grid");a.setAttribute("class","grid"),n.appendChild(r),n.appendChild(a);const c={Drinks:["Matcha Milk Tea","Oolong Milk Tea","Jasmine Milk Tea","Strawberry Smoothie"],Snacks:["Matcha Egg Puff","Popcorn Chicken","Fried Tofu","Cream Toast"],"Ice Cream":["Matcha","Chocolate","Vanilla","StrawBerry"]};for(let e in c){const t=document.createElement("h4");t.innerText=e;const n=document.createElement("ul");for(let t of c[e]){const e=document.createElement("li");e.innerText=t,n.appendChild(e)}a.appendChild(t),a.appendChild(n)}e.appendChild(t)}};({setHeader:()=>{const e=document.getElementById("content");let t=document.createElement("header"),n=document.createElement("nav"),r=document.createElement("span");r.setAttribute("id","logo"),r.innerText="Matcha Café";let a=document.createElement("ul");a.setAttribute("class","navlist");let c=["Home","Menu","Contact"];for(let e of c){let t=document.createElement("li");t.setAttribute("id",""+e);let n=document.createElement("a");n.innerText=""+e,t.appendChild(n),a.appendChild(t)}n.appendChild(r),n.appendChild(a),t.appendChild(n),e.appendChild(t)}}).setHeader(),r.setHome(),r.setActive(),a.setMenu()}]);