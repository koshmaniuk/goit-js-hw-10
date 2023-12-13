import{a}from"./assets/vendor-a61d8330.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();a.defaults.headers.common["x-api-key"]="live_sqb8Cv5y2YS9Hf2WEqoZ7KDBAEFJ7Xw9Xi8579d7Bims2AvGILCcxRFdBYsTGXic";function p(){return a.get("https://api.thecatapi.com/v1/breeds").then(e=>e).catch(e=>{throw new Error(e)})}function f(e){const r=e.target.value;return a.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${r}`).then(o=>o).catch(o=>{throw new Error(o)})}const u=document.querySelector(".breed-select"),l=document.querySelector(".loader"),s=document.querySelector(".error"),i=document.querySelector(".cat-info");s.style.display="none";p().then(e=>{e.status===200&&(l.style.display="none",s.style.display="none",u.insertAdjacentHTML("beforeend",y(e.data)))}).catch(e=>{s.style.display="block",console.log("Error:",e)});function y(e){return e.map(({id:r,name:o})=>`
    <option value="${r}">${o}</option>
    `).join("")}function m(e){e.preventDefault(),l.style.display="block",s.style.display="none",i.innerHTML="",f(e).then(r=>{s.style.display="none",l.style.display="none";const o=r.data[0].breeds[0];i.style.display="flex",i.style.gap="20px",i.style.padding="20px 0",i.innerHTML=`<img src="${r.data[0].url}" alt="${o.name}" width='500' >
                <div>
                <h1>${o.name}</h1>
                <p>${o.description}</p>
                <p><span style="font-weight: bold;">Temperament:</span> ${o.temperament}</p>
                </div>`}).catch(r=>{s.style.display="block",console.log("Error:",r)})}u.addEventListener("change",m);
//# sourceMappingURL=commonHelpers.js.map