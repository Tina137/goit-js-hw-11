import{a as u,i as n,S as d}from"./assets/vendor-BBSqv8W6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function f(o){return u.get(`https://pixabay.com/api/?key=49659648-1ebf0f70bcfba68f8c305ff0f&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(function(e){if(e.data.hits.length==0)n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else return e.data.hits}).catch(e=>e)}const l=document.querySelector(".gallery");let h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function m(o){for(const e of o)l.insertAdjacentHTML("beforeend",`<li><a href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}" title=""/>
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
      <td>${e.likes}</td>
      <td>${e.views}</td>
      <td>${e.comments}</td>
      <td>${e.downloads}</td>
    </tr></tbody>
    </a></li>`),h.refresh()}const c=document.querySelector("#loader");function y(){c.classList=""}function g(){c.classList="hide"}function p(){l.innerHTML=""}document.querySelector(".gallery");const L=document.querySelector(".form");L.addEventListener("submit",o=>{o.preventDefault(),p();let e=o.target.elements["search-text"];e.value.trim()&&(y(),f(e.value).then(a=>{m(a)}).catch(()=>{n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{g()}),e.value="")});
//# sourceMappingURL=index.js.map
