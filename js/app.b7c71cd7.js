(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({WorldCovidInfo:"WorldCovidInfo"}[e]||e)+"."+{WorldCovidInfo:"8b705035"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={WorldCovidInfo:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({WorldCovidInfo:"WorldCovidInfo"}[e]||e)+"."+{WorldCovidInfo:"4f4cd32c"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/appCovid/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"0402":function(e,t,n){},"3cf4":function(e,t,n){"use strict";var r=n("e502"),o=n.n(r);o.a},"4c61":function(e,t,n){"use strict";var r=n("0402"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("COLOMBIA")]),n("router-link",{attrs:{to:"/worldCovidInfo"}},[e._v("WORLD REPORT")])],1),n("router-view")],1)},a=[],i=(n("034f"),n("2877")),s={},c=Object(i["a"])(s,o,a,!1,null,null,null),l=c.exports,u=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("InfoCovidColombia",{attrs:{msg:"Encuentra toda la información detallada acerca del covid 19"}}),n("NewsCovidCol")],1)},f=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h3",[e._v(e._s(e.msg))]),n("iframe",{staticStyle:{border:"0",padding:"0",margin:"0"},attrs:{src:"https://www.datos.gov.co/dataset/Estado-de-Casos-de-Coronavirus-COVID-19-en-Colombi/6c4c-msrp/embed?width=800&height=600"}}),e._m(0),n("br"),n("iframe",{staticStyle:{border:"0",padding:"0",margin:"0"},attrs:{src:"https://www.datos.gov.co/dataset/Datos-Abiertos-del-Coronavirus-COVID-19-por-ciudad/hvyw-6ti5/embed?width=800&heigth=600"}})])},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h4",[e._v(" La siguiente información corresponde a los casos registrados "),n("br"),e._v("en las diferentes ciudades ")])}],h={name:"ColombiaInfo",data:function(){return{cityData:null,cities:[]}},props:{msg:String}},m=h,g=(n("4c61"),Object(i["a"])(m,p,v,!1,null,"766c5f41",null)),b=g.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"news"},[n("h2",[e._v("Ultimas noticias")]),e._l(e.news,(function(t){return n("div",{key:t.id},[n("div",{staticClass:"card-news"},[n("div",{staticClass:"cards-header"},[n("h5",{staticClass:"cards-title"},[e._v(e._s(t.title))])]),n("div",{staticClass:"news-headline"},[n("p",{staticClass:"card-text"},[e._v(e._s(t.description))]),n("span",[e._v("Fuente: "+e._s(t.author))])])])])}))],2)},w=[],y=n("bc3a"),_=n.n(y),O={name:"news",data:function(){return{news:null,errored:!1}},mounted:function(){var e=this,t="https://newsapi.org/v2/top-headlines?country=co&apiKey=a874c559807c4187834fc8d9549464b6";_.a.get(t).then((function(t){return e.news=t.data.articles})).catch((function(t){console.log(t),e.errored=!0}))}},I=O,E=(n("3cf4"),Object(i["a"])(I,C,w,!1,null,"52ce6508",null)),j=E.exports,S={name:"Home",components:{InfoCovidColombia:b,NewsCovidCol:j}},x=S,k=Object(i["a"])(x,d,f,!1,null,null,null),P=k.exports;r["a"].use(u["a"]);var W=[{path:"/",name:"Home",component:P},{path:"/worldCovidInfo",name:"WorldCovidInfo",component:function(){return n.e("WorldCovidInfo").then(n.bind(null,"3e78"))}}],T=new u["a"]({routes:W}),A=T,L=n("2f62");r["a"].use(L["a"]);var D=new L["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:A,store:D,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){},e502:function(e,t,n){}});
//# sourceMappingURL=app.b7c71cd7.js.map