import{a as l,i as c,S as d}from"./assets/vendor-BBSqv8W6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const u=document.querySelector(".gallery");function f(t){u.insertAdjacentHTML("beforeend",`<li><a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}" title=""/>
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
    </a></li>`)}const a=document.querySelector("#loader");function h(){a.classList=""}function y(){a.classList="hide"}function m(t){return l.get(`https://pixabay.com/api/?key=49659648-1ebf0f70bcfba68f8c305ff0f&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(function(r){if(r.data.hits.length==0)c.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else return r.data.hits}).catch(r=>r)}const p=document.querySelector(".gallery"),g=document.querySelector(".form");g.addEventListener("submit",t=>{t.preventDefault(),p.innerHTML="";let r=t.target.elements["search-text"];r.value.trim()&&(h(),m(r.value).then(s=>{let n=new d(".gallery a",{captionsData:"alt",captionDelay:250});for(const e in s)f(s[e]),n.refresh()}).finally(()=>{y()}),r.value="")});
//# sourceMappingURL=index.js.map
