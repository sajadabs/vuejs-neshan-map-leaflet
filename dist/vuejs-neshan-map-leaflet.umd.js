(function(n,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(n=typeof globalThis<"u"?globalThis:n||self,e(n.NeshanMapLeaflet={},n.Vue))})(this,function(n,e){"use strict";const c="https://static.neshan.org/sdk/leaflet/1.4.0/leaflet.js",i=o=>(()=>{const{onError:r,onLoad:s}=o,t=document.createElement("script");t.src=c,t.onload=()=>{s&&s()},t.onerror=()=>{r&&r()},document.body.appendChild(t)})(),_="",d=(o,a)=>{const r=o.__vccOpts||o;for(const[s,t]of a)r[s]=t;return r},l={width:"600px",height:"450px",margin:0,padding:0,background:"#eee",border:"2px solid #aaa"},p={key:"YOUR_API_KEY",maptype:"dreamy",poi:!0,traffic:!1,center:[35.699739,51.338097],zoom:14},f={props:{options:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},data(){return{bannerStyles:{...l,...this.styles},...p}},mounted(){i({onLoad:()=>{new window.L.Map(this.$refs.mapEl.id,{...p,...this.options})},onError:()=>{console.error("Neshan Maps Error: This page didn't load Neshan Maps correctly")}})}};function u(o,a,r,s,t,L){return e.openBlock(),e.createElementBlock("div",{id:"map",ref:"mapEl",style:e.normalizeStyle(t.bannerStyles)},null,4)}const h=d(f,[["render",u]]),m=e.defineComponent({name:"NeshanMapLeaflet",install(o){o.component("NeshanMapLeaflet",h)}});n.default=m,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
