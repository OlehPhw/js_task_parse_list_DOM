function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}function t(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var e,n,a=document.querySelectorAll("li");(e=t(a)).sort(function(r,t){var e=+r.dataset.salary.replaceAll("$","").replaceAll(",","");return+t.dataset.salary.replaceAll("$","").replaceAll(",","")-e}),n=a[0].parentNode,e.forEach(function(r){return n.appendChild(r)}),t(a).map(function(r){return{name:r.textContent.replaceAll("\n","").replaceAll(" ",""),position:r.dataset.position,salary:r.dataset.salary,age:r.dataset.age}});
//# sourceMappingURL=index.bb789e0c.js.map
