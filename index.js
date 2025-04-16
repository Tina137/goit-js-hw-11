import{a as u,i as n,S as d}from"./assets/vendor-BBSqv8W6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function f(a){return u.get(`https://pixabay.com/api/?key=49659648-1ebf0f70bcfba68f8c305ff0f&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`).then(function(e){if(e.data.hits.length==0)n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else return e.data.hits}).catch(e=>e)}const l=document.querySelector(".gallery");let h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(a){let e="";a.forEach(r=>{e+=`
    <li>
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" title="" />
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
              <td>${r.likes}</td>
              <td>${r.views}</td>
              <td>${r.comments}</td>
              <td>${r.downloads}</td>
            </tr>
          </tbody>
        </table>
      </a>
    </li>
  `}),l.insertAdjacentHTML("beforeend",e),h.refresh()}const c=document.querySelector("#loader");function m(){c.classList=""}function p(){c.classList="hide"}function g(){l.innerHTML=""}const L=document.querySelector(".form");L.addEventListener("submit",a=>{a.preventDefault(),g();let e=a.target.elements["search-text"];e.value.trim()&&(m(),f(e.value).then(r=>{r.length!=0?y(r):n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(r=>r).finally(()=>{p()}),e.value="")});
//# sourceMappingURL=index.js.map
