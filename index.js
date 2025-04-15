import{a as u,i as n,S as d}from"./assets/vendor-BBSqv8W6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();function f(t){return u.get(`https://pixabay.com/api/?key=49659648-1ebf0f70bcfba68f8c305ff0f&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(function(r){if(r.data.hits.length==0)n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else return r.data.hits}).catch(r=>r)}const l=document.querySelector(".gallery");let h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(t){l.insertAdjacentHTML("beforeend",`<li><a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}" title=""/>
    <table>
  <thead>
    <tr class="th">
      <th>Likes</th>
      <th>Views</th>
      <th>Comments</th>
      <th>Downloads</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${t.likes}</td>
      <td>${t.views}</td>
      <td>${t.comments}</td>
      <td>${t.downloads}</td>
    </tr></tbody>
    </a></li>`),h.refresh()}const c=document.querySelector("#loader");function m(){c.classList=""}function p(){c.classList="hide"}function g(){l.innerHTML=""}document.querySelector(".gallery");const L=document.querySelector(".form");L.addEventListener("submit",t=>{t.preventDefault(),g();let r=t.target.elements["search-text"];r.value.trim()&&(m(),f(r.value).then(a=>{for(const i in a)y(a[i])}).catch(()=>{n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{p()}),r.value="")});
//# sourceMappingURL=index.js.map
