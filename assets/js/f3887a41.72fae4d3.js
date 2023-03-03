"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[9835],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>b});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},c=Object.keys(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=o.createContext({}),l=function(t){var e=o.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=l(t.components);return o.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,c=t.originalType,i=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),d=l(n),b=r,g=d["".concat(i,".").concat(b)]||d[b]||u[b]||c;return n?o.createElement(g,s(s({ref:e},p),{},{components:n})):o.createElement(g,s({ref:e},p))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=n.length,s=new Array(c);s[0]=d;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=t,a.mdxType="string"==typeof t?t:r,s[1]=a;for(var l=2;l<c;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5345:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const c={sidebar_position:2},s="S3 Connection Settings",a={unversionedId:"products/Object-Storage/s3-connection-settings",id:"products/Object-Storage/s3-connection-settings",title:"S3 Connection Settings",description:"This is a general description of S3 connection settings. In order to use S3 compatible Object Storage tools or the S3 compatible APIs you will need the followig information:",source:"@site/docs/products/Object-Storage/s3-connection-settings.md",sourceDirName:"products/Object-Storage",slug:"/products/Object-Storage/s3-connection-settings",permalink:"/docs/products/Object-Storage/s3-connection-settings",draft:!1,editUrl:"https://github.com/contabo/docs/tree/main/docs/products/Object-Storage/s3-connection-settings.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"productSidebar",previous:{title:"What is S3 compatible Object Storage?",permalink:"/docs/products/Object-Storage/what-is"},next:{title:"Supported Protocols",permalink:"/docs/products/Object-Storage/supported-protocols"}},i={},l=[{value:"Obtaining S3 Credentials",id:"obtaining-s3-credentials",level:2}],p={toc:l};function u(t){let{components:e,...c}=t;return(0,r.kt)("wrapper",(0,o.Z)({},p,c,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"s3-connection-settings"},"S3 Connection Settings"),(0,r.kt)("p",null,"This is a general description of S3 connection settings. In order to use S3 compatible Object Storage tools or the S3 compatible APIs you will need the followig information:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Region"),(0,r.kt)("th",null,"S3 Base URL"),(0,r.kt)("th",null,"Credentials")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"European Union"),(0,r.kt)("td",null,"https://eu2.contabostorage.com"),(0,r.kt)("td",null,"Consists of an access key and secret key. See below on how to obtain them")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Singapore"),(0,r.kt)("td",null,"https://sin1.contabostorage.com"),(0,r.kt)("td",null,"Consists of an access key and secret key. See below on how to obtain them")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"United States"),(0,r.kt)("td",null,"https://usc1.contabostorage.com"),(0,r.kt)("td",null,"Consists of an access key and secret key. See below on how to obtain them"))),(0,r.kt)("h2",{id:"obtaining-s3-credentials"},"Obtaining S3 Credentials"),(0,r.kt)("p",null,"In order to obtain the S3 Credentials please login to ",(0,r.kt)("a",{parentName:"p",href:"https://my.contabo.com/object_storage"},"Contabo Customer Panel")," and the switch to the Object Storage Panel."),(0,r.kt)("p",null,"You can access both credential values or regenerate the secret key. Please refer to the following screenshot:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"S3 Credentials",src:n(5087).Z,width:"1678",height:"936"})))}u.isMDXComponent=!0},5087:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/S3-credentials-6cac2936c93c8feb7776b3e1889d36c9.png"}}]);