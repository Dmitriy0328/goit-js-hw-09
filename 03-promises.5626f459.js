function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n);var i=n("7Y9D8");function l(t,r){new Promise(((e,o)=>{const n=Math.random()>.3;setTimeout((()=>{n?e({position:t,delay:r}):o({position:t,delay:r})}),r)})).then((({position:t,delay:r})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${r}ms`)})).catch((({position:t,delay:r})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${r}ms`)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(t){t.preventDefault();const r=t.currentTarget.delay.valueAsNumber,o=t.currentTarget.step.valueAsNumber,n=t.currentTarget.amount.valueAsNumber;if(r<0||o<0||n<=0)return void e(i).Notify.failure("Please enter valid data");for(let e=1;e<=n;e+=1)l(e,r+(e-1)*o)}));
//# sourceMappingURL=03-promises.5626f459.js.map