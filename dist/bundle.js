(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(354),r=t.n(o),a=t(314),c=t.n(a)()(r());c.push([n.id,':root{\n    --input-bc: rgb(196, 190, 190);\n}\n\nbody{\n    background-color: rgb(225, 223, 223);\n    margin: 0;\n}\n\n#container{\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 5.5fr;\n}\n\n.sidebar{\n    background-color: rgb(57, 185, 195);\n    height: 100vh;\n    padding: 0 8px;\n}\n\n.sidebar-header{\n    display: flex;\n    height: 10%;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid rgb(35, 154, 163);\n}\n\nbutton.add-project{\n    height: 36px;\n    width: 36px;\n    border-radius: 10px;\n    margin-right: 12px;\n    font-size: 1.5rem;\n    font-weight: 700;\n    padding: 2px 8px;\n}\n\n\n.project-box{\n    display: flex;\n    justify-content: space-between;\n    margin-top: 24px;\n}\n\n.project{\n    cursor: pointer;\n    font-size: 1.15rem;\n    font-weight: 600;\n}\n\n.content{\n    padding: 64px 50px;\n}\n\n.task-box{\n    height: 80px;\n    border-bottom: 1px solid rgb(202, 197, 197);\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: min-content 1fr 40px;\n}\n\n.left-container{\n    display: flex;\n    align-items: center;\n}\n\n.mid-container{\n    display: flex;\n    align-items: center;\n}\n\n.mid-container > *{\n    margin-left: 32px;\n}\n\n.right-container{\n    justify-self: end;\n    align-self: center;\n}\n\n.task-name{\n    font-size: 24px;\n}\n\n.task-date{\n    color: rgb(35, 181, 35);\n    font-size: 16px;\n    font-weight: 700;\n}\n\n.add-task{\n    display: flex;\n    align-items: center;\n    background-color: inherit;\n    gap: 16px;\n    font-size: 22px;\n    color: rgb(96, 95, 95);\n    padding: 0;\n}\n\nspin.add-task{\n    font-size: 3rem;\n    color: rgb(194, 84, 6);\n    margin-bottom: 4px;\n}\n\n.form-grid-container{\n    height: 200px;\n    display: grid;\n    align-items: center;\n}\n\ndialog{\n    background-color: rgb(243, 242, 236);\n    border-radius: 1em;\n    border: 6px solid rgb(246, 181, 61);\n}\n\ndialog button, dialog input{\n    height: 40px;\n    width: 250px;\n    border-radius: 6px;\n    border: 0;\n    font-size: 20px;\n}\n\n#add-task-dialog label,\n#edit-task-dialog label{\n    display: block;\n}\n\n#add-task-dialog input,\n#edit-task-dialog input{\n    margin-bottom: 12px;\n}\n\ndialog input{\n    background-color: var(--input-bc);\n    width: 358px;\n}\n\n.confirm, .cancel{\n    font-weight: 700;\n    color: rgb(200, 199, 199);\n}\n\nbutton.confirm{\n    background-color: rgb(30, 110, 0);\n}\n\nbutton.cancel{\n    background-color: rgb(234, 60, 60);\n}\n\n#add-task-dialog .buttons,\n#edit-task-dialog .buttons{\n    margin-top: 24px;\n}\n\n.form-grid-container p:first-of-type{\n    display: flex;\n    align-items: center;\n    gap: 18px;\n}\n\nselect{\n    width: 250px;\n    height: 40px;\n    border-radius: 6px;\n    border: 0;\n    background-color: var(--input-bc);\n    font-size: 14px;\n    font-weight: 700;\n    text-align: center;\n}\n\nselect option{\n    background-color: white;\n    font-weight: 700;\n}\n\noption[value="low"]{\n    color: blue;\n}\n\noption[value="medium"]{\n    color: orange;\n}\n\noption[value="high"]{\n    color: red;\n}\n\nlabel{\n    font-size: 18px;\n    font-weight: 700;\n}\n\ninput:hover{\n    background-color: rgb(207, 200, 200);\n}\n\nselect:hover{\n    background-color: rgb(207, 200, 200);\n}\n\n.confirm:hover{\n    background-color: rgb(36, 120, 6);\n    color: black;\n}\n\n.cancel:hover{\n    background-color: rgb(251, 67, 67);\n    color: black;\n}\n\nimg{\n    width: 20px;\n    cursor: pointer;\n}\n\ninput[type="checkbox"]{\n    width: 20px;\n    height: 20px;\n}\n\n.priority{\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: inherit;\n}\n\n.low{\n    border: 2px solid blue;\n}\n\n.medium{\n    border: 2px solid orange;\n}\n\n.high{\n    border: 2px solid red;\n}\n\nbutton{\n    cursor: pointer;\n    border: 0;\n}\n\nbutton:focus{\n    outline: none;\n}',"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;IACI,8BAA8B;AAClC;;AAEA;IACI,oCAAoC;IACpC,SAAS;AACb;;AAEA;IACI,aAAa;IACb,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,8BAA8B;IAC9B,mBAAmB;IACnB,0CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;AACpB;;;AAGA;IACI,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,2CAA2C;IAC3C,aAAa;IACb,sBAAsB;IACtB,2CAA2C;AAC/C;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,SAAS;IACT,eAAe;IACf,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,eAAe;AACnB;;AAEA;;IAEI,cAAc;AAClB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,iCAAiC;IACjC,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,SAAS;AACb;;AAEA;IACI,aAAa;AACjB",sourcesContent:[':root{\n    --input-bc: rgb(196, 190, 190);\n}\n\nbody{\n    background-color: rgb(225, 223, 223);\n    margin: 0;\n}\n\n#container{\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 5.5fr;\n}\n\n.sidebar{\n    background-color: rgb(57, 185, 195);\n    height: 100vh;\n    padding: 0 8px;\n}\n\n.sidebar-header{\n    display: flex;\n    height: 10%;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid rgb(35, 154, 163);\n}\n\nbutton.add-project{\n    height: 36px;\n    width: 36px;\n    border-radius: 10px;\n    margin-right: 12px;\n    font-size: 1.5rem;\n    font-weight: 700;\n    padding: 2px 8px;\n}\n\n\n.project-box{\n    display: flex;\n    justify-content: space-between;\n    margin-top: 24px;\n}\n\n.project{\n    cursor: pointer;\n    font-size: 1.15rem;\n    font-weight: 600;\n}\n\n.content{\n    padding: 64px 50px;\n}\n\n.task-box{\n    height: 80px;\n    border-bottom: 1px solid rgb(202, 197, 197);\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: min-content 1fr 40px;\n}\n\n.left-container{\n    display: flex;\n    align-items: center;\n}\n\n.mid-container{\n    display: flex;\n    align-items: center;\n}\n\n.mid-container > *{\n    margin-left: 32px;\n}\n\n.right-container{\n    justify-self: end;\n    align-self: center;\n}\n\n.task-name{\n    font-size: 24px;\n}\n\n.task-date{\n    color: rgb(35, 181, 35);\n    font-size: 16px;\n    font-weight: 700;\n}\n\n.add-task{\n    display: flex;\n    align-items: center;\n    background-color: inherit;\n    gap: 16px;\n    font-size: 22px;\n    color: rgb(96, 95, 95);\n    padding: 0;\n}\n\nspin.add-task{\n    font-size: 3rem;\n    color: rgb(194, 84, 6);\n    margin-bottom: 4px;\n}\n\n.form-grid-container{\n    height: 200px;\n    display: grid;\n    align-items: center;\n}\n\ndialog{\n    background-color: rgb(243, 242, 236);\n    border-radius: 1em;\n    border: 6px solid rgb(246, 181, 61);\n}\n\ndialog button, dialog input{\n    height: 40px;\n    width: 250px;\n    border-radius: 6px;\n    border: 0;\n    font-size: 20px;\n}\n\n#add-task-dialog label,\n#edit-task-dialog label{\n    display: block;\n}\n\n#add-task-dialog input,\n#edit-task-dialog input{\n    margin-bottom: 12px;\n}\n\ndialog input{\n    background-color: var(--input-bc);\n    width: 358px;\n}\n\n.confirm, .cancel{\n    font-weight: 700;\n    color: rgb(200, 199, 199);\n}\n\nbutton.confirm{\n    background-color: rgb(30, 110, 0);\n}\n\nbutton.cancel{\n    background-color: rgb(234, 60, 60);\n}\n\n#add-task-dialog .buttons,\n#edit-task-dialog .buttons{\n    margin-top: 24px;\n}\n\n.form-grid-container p:first-of-type{\n    display: flex;\n    align-items: center;\n    gap: 18px;\n}\n\nselect{\n    width: 250px;\n    height: 40px;\n    border-radius: 6px;\n    border: 0;\n    background-color: var(--input-bc);\n    font-size: 14px;\n    font-weight: 700;\n    text-align: center;\n}\n\nselect option{\n    background-color: white;\n    font-weight: 700;\n}\n\noption[value="low"]{\n    color: blue;\n}\n\noption[value="medium"]{\n    color: orange;\n}\n\noption[value="high"]{\n    color: red;\n}\n\nlabel{\n    font-size: 18px;\n    font-weight: 700;\n}\n\ninput:hover{\n    background-color: rgb(207, 200, 200);\n}\n\nselect:hover{\n    background-color: rgb(207, 200, 200);\n}\n\n.confirm:hover{\n    background-color: rgb(36, 120, 6);\n    color: black;\n}\n\n.cancel:hover{\n    background-color: rgb(251, 67, 67);\n    color: black;\n}\n\nimg{\n    width: 20px;\n    cursor: pointer;\n}\n\ninput[type="checkbox"]{\n    width: 20px;\n    height: 20px;\n}\n\n.priority{\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: inherit;\n}\n\n.low{\n    border: 2px solid blue;\n}\n\n.medium{\n    border: 2px solid orange;\n}\n\n.high{\n    border: 2px solid red;\n}\n\nbutton{\n    cursor: pointer;\n    border: 0;\n}\n\nbutton:focus{\n    outline: none;\n}'],sourceRoot:""}]);const i=c},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var A=this[i][0];null!=A&&(c[A]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);o&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},c=[],i=0;i<n.length;i++){var A=n[i],d=o.base?A[0]+o.base:A[0],s=a[d]||0,l="".concat(d," ").concat(s);a[d]=s+1;var u=t(l),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var m=r(p,o);o.byIndex=i,e.splice(i,0,{identifier:l,updater:m,references:1})}c.push(l)}return c}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var A=o(n,r),d=0;d<a.length;d++){var s=t(a[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=A}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,t.d({},{I:()=>y,S:()=>B});var o=t(72),r=t.n(o),a=t(825),c=t.n(a),i=t(659),A=t.n(i),d=t(56),s=t.n(d),l=t(540),u=t.n(l),p=t(113),m=t.n(p),g=t(365),C={};function f(n,e){const t=document.createElement("div");t.classList.add("project-box");const o=document.createElement("a");return o.classList.add("project"),o.dataset.column=e,o.textContent=n.name,0===e&&(document.querySelector("h1").textContent=n.name),t.appendChild(o),function(n){const e=new Image,t=document.createElement("div");t.classList.add("project-icon-container"),e.classList.add("edit-project"),e.src=y;const o=new Image;o.classList.add("remove-project"),o.src=B,t.append(e,o),n.appendChild(t)}(t),t}function b(n,e){const t=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div");t.classList.add("task-box"),o.classList.add("first-row"),r.classList.add("left-container"),c.classList.add("mid-container"),a.classList.add("right-container"),t.dataset.taskIndex=e;const i=document.createElement("input");i.type="checkbox";const A=document.createElement("div");A.classList.add(n.priority.toLowerCase(),"priority");const d=document.createElement("div");d.classList.add("task-name"),d.textContent=n.name;const s=document.createElement("div");return s.classList.add("task-date"),s.textContent=n.dueDate,r.append(A,i),c.append(d,s),function(n){const e=new Image,t=document.createElement("div");t.classList.add("task-icon-container"),e.classList.add("edit-task"),e.src=y;const o=new Image;o.classList.add("remove-task"),o.src=B,t.append(e,o),n.appendChild(t)}(a),t.append(r,c,a),t}C.styleTagTransform=m(),C.setAttributes=s(),C.insert=A().bind(null,"head"),C.domAPI=c(),C.insertStyleElement=u(),r()(g.A,C),g.A&&g.A.locals&&g.A.locals;const I=[{name:"Your Project's Name",todoItems:[]}];function h(n){return I.find((e=>e.name===n))}function x(n){const e=I.findIndex((e=>e.name===n));if(-1!==e)return e}function k(n){if(console.log(n),-1===n)return"";return I[n].name||void 0}const B=t.p+"b4a7b26be64c05d0f239.svg",y=t.p+"8d317290131028fe10cf.svg";(function(){const n=document.querySelector(".projects");n.textContent="",I.forEach(((e,t)=>{const o=f(e,t);n.appendChild(o)}))})(),document.addEventListener("click",(n=>{const e=n.target;switch(e.className){case"project":!function(n){const e=document.querySelector(".todos");e.textContent="";document.querySelector("h1").textContent=n.textContent,I[n.dataset.column].todoItems.forEach(((n,t)=>{const o=b(n,t);e.appendChild(o)}))}(e);break;case"add-project":document.querySelector("#add-project-dialog").showModal();break;case"edit-project":const o=e.closest(".project-box").querySelector(".project"),r=document.querySelector("#edit-project-dialog");document.querySelector("#edit-project-name").value=o.textContent,r.dataset.projectDialogIndex=o.dataset.column,r.showModal();break;case"remove-project":t=+e.closest(".project-box").querySelector(".project").dataset.column,I.splice(t,1),function(n){document.querySelector(`.project[data-column="${n}"]`).closest(".project-box").remove(),function(n){const e=I[n-1];console.log(e);const t=document.querySelector("h1"),o=k(n-1);t.textContent=o;const r=document.querySelector(".todos");r.textContent="",e&&e.todoItems.forEach(((n,e)=>{const t=b(n,e);r.appendChild(t)})),0===n&&(t.textContent="",document.querySelector(".add-task").remove())}(n)}(t);break;case"add-task":document.querySelector("#add-task-dialog").showModal();break;case"edit-task":const a=document.querySelector("#edit-task-dialog"),c=e.closest(".task-box");!function(n,e){const t=x(n),o=document.querySelector("#edit-task-name"),r=document.querySelector("#edit-task-description"),a=document.querySelector("#edit-task-date"),c=document.querySelector(".edit-task-notes"),i=document.querySelector(".edit-task-priority"),A=I[t].todoItems[e].name,d=I[t].todoItems[e].description,s=I[t].todoItems[e].dueDate,l=I[t].todoItems[e].notes,u=I[t].todoItems[e].priority;o.value=A,r.value=d,a.value=s,c.value=l,i.value=u}(document.querySelector("h1").textContent,c.dataset.taskIndex),a.dataset.taskDialogIndex=c.dataset.taskIndex,a.showModal();break;case"remove-task":const i=e.closest(".task-box");!function(n,e){const t=x(n);-1!==t&&I[t].todoItems.splice(e,1),function(n){document.querySelector(`.task-box[data-task-index="${n}"`).remove()}(e)}(document.querySelector("h1").textContent,+i.dataset.taskIndex);break;case"cancel":case"confirm":const A=e.closest("dialog");A.id.startsWith("add")&&function(n){const e=n.target,t=e.closest("dialog");"add-project-dialog"===t.id?e.classList.contains("confirm")?t.querySelector("form").checkValidity()&&(n.preventDefault(),function(n){if(I.map((n=>n.name)).includes(n))return;let e={name:n,todoItems:[]};I.push(e),function(n){const e=document.querySelector(".projects"),t=I.map((n=>n.name)).indexOf(n.name);0===t&&function(){const n=document.querySelector(".content"),e=document.createElement("button");e.classList.add("add-task");const t=document.createElement("spin");t.classList.add("add-task"),t.textContent="+";const o=document.createElement("div");o.classList.add("add-task"),o.textContent="Add task",e.append(t,o),n.appendChild(e)}();const o=f(n,t);e.appendChild(o)}(e)}(document.querySelector("#add-project-name").value),t.close()):(n.preventDefault(),t.close()):"add-task-dialog"===t.id&&(e.classList.contains("confirm")?t.querySelector("form").checkValidity()&&(n.preventDefault(),function(){const n=document.querySelector("h1").textContent,e=document.querySelector("#add-task-name"),t=document.querySelector("#add-task-description"),o=document.querySelector("#add-task-date"),r=document.querySelector("#add-task-priority"),a=document.querySelector(".add-task-notes");!function(n,e,t,o,r,a){const c=h(n);if(c){let n={name:e,description:t,dueDate:o,priority:r,notes:a,isDone:!1};return c.todoItems.push(n),void function(n,e){const t=document.querySelector(".todos"),o=b(n,e);t.appendChild(o)}(n,c.todoItems.indexOf(n))}console.log("project not found in addTask")}(n,e.value,t.value,o.value,r.value,a.value)}(),t.close()):(n.preventDefault(),t.close())),function(n){const e=n.querySelectorAll("input, textarea"),t=n.querySelector("select");e.forEach((n=>{n.value=""})),t&&(t.value="medium")}(t)}(n),A.id.startsWith("edit")&&function(n,e){const t=n.target,o=e.dataset.projectDialogIndex,r=e.dataset.taskDialogIndex;"edit-project-dialog"===e.id&&t.classList.contains("confirm")?e.querySelector("form").checkValidity()&&(n.preventDefault(),function(n){!function(n,e){I[n].name=e,function(n,e){const t=document.querySelector(`.project[data-column="${n}"]`);(function(n){document.querySelector("h1").textContent=n})(e),t.textContent=e}(n,e)}(n,document.querySelector("#edit-project-name").value)}(+o),e.close()):"edit-task-dialog"===e.id&&t.classList.contains("confirm")&&e.querySelector("form").checkValidity()&&(n.preventDefault(),function(n,e){const t=k(n),o=document.querySelector("#edit-task-name"),r=document.querySelector("#edit-task-description"),a=document.querySelector("#edit-task-date"),c=document.querySelector(".edit-task-notes"),i=document.querySelector(".edit-task-priority");!function(n,e,t,o,r,a,c){const i=h(n);if(i){const n=i.todoItems[e];n.name=t,console.log(n.name),n.description=o,n.dueDate=r,n.priority=a,n.notes=c,function(n,e){console.log(I);const t=document.querySelector(`.task-box[data-task-index="${n}"]`),o=t.querySelector(".task-name"),r=t.querySelector(".task-date"),a=t.querySelector(".priority");console.log(e.name),o.textContent=e.name,r.textContent=e.dueDate,a.classList.replace(a.classList[0],e.priority.toLowerCase())}(e,n)}else console.log("project not found in editTask")}(t,e,o.value,r.value,a.value,i.value,c.value)}(x(document.querySelector("h1").textContent),+r),e.close()),t.classList.contains("cancel")&&(n.preventDefault(),e.close())}(n,A)}var t}))})();
//# sourceMappingURL=bundle.js.map