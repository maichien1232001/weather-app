(()=>{"use strict";!function(){const e=document.getElementById("root"),t=document.createElement("header"),n=document.createElement("div"),d=document.createElement("h1"),a=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div"),r=document.createElement("input"),l=document.createElement("button"),s=document.createElement("div"),u=document.createElement("h2"),m=document.createElement("h2"),o=document.createElement("h2"),p=document.createElement("h2"),h=document.createElement("h2");e.appendChild(t),t.appendChild(n),n.classList.add("header"),n.appendChild(d),d.innerHTML="Weather App",e.appendChild(a),a.classList.add("content"),a.appendChild(c),c.classList.add("search"),c.appendChild(i),i.classList.add("input"),i.appendChild(r),r.classList.add("input-text"),r.type="text",r.placeholder="Nhập địa chỉ cần tìm",i.appendChild(l),l.classList.add("btn-search"),l.innerHTML="Search",a.appendChild(s),s.classList.add("content-main"),s.appendChild(u),u.classList.add("city"),s.appendChild(m),m.classList.add("temprature"),s.appendChild(o),o.classList.add("temprature-feel"),s.appendChild(p),p.classList.add("humidity"),s.appendChild(h),h.classList.add("wind")}();const e=document.querySelector(".city"),t=document.querySelector(".temprature"),n=document.querySelector(".temprature-feel"),d=document.querySelector(".humidity"),a=document.querySelector(".wind"),c=async function(e){const t=`http://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=d8ea9b3d407e1bbf6d725cdc8c19e412`;try{const n=await fetch(t,{mode:"cors"});if(!n.ok)throw new Error(`City ${e} not found`);const d=function(e){const{name:t,main:{temp:n,feels_like:d,humidity:a},wind:{speed:c}}=e;return{cityName:t,temperature:n,feelsLike:d,humidity:a,windSpeed:c}}(await n.json());return d}catch(e){return alert(e),null}},i=function(c){c&&(e.innerHTML=`${c.cityName}`,t.innerHTML=`${c.temperature} °C`,n.innerHTML=`Nhiệt độ: ${c.feelsLike} °C`,d.innerHTML=`Độ ẩm: ${c.humidity} %`,a.innerHTML=`Gió: ${c.windSpeed} km/h`)},r=document.querySelector(".btn-search"),l=document.querySelector(".input-text"),s=async()=>{if(""===l.value)return;const e=await c(l.value);i(e),document.querySelector(".content-main").style.display="flex "};r.addEventListener("click",s),l.addEventListener("keypress",(function(e){"Enter"===e.key&&(e.preventDefault(),s())}))})();