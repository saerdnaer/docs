"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[3812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(k,i(i({ref:t},p),{},{components:n})):o.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:8},i="WinSCP",l={unversionedId:"products/Object-Storage/Tools/winscp",id:"products/Object-Storage/Tools/winscp",title:"WinSCP",description:"WinSCP is a free Desktop Application for Windows which allows to manage remote files for a wide variety of protocols including S3 compatible Object Storage.",source:"@site/docs/products/Object-Storage/Tools/winscp.md",sourceDirName:"products/Object-Storage/Tools",slug:"/products/Object-Storage/Tools/winscp",permalink:"/docs/products/Object-Storage/Tools/winscp",draft:!1,editUrl:"https://github.com/contabo/docs/tree/main/docs/products/Object-Storage/Tools/winscp.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"productSidebar",previous:{title:"s3fs-fuse",permalink:"/docs/products/Object-Storage/Tools/s3fs-fuse"},next:{title:"Nextcloud",permalink:"/docs/products/Object-Storage/Tools/nextcloud"}},s={},c=[{value:"Configuration for Contabo&#39;s S3 compatible Object Storage",id:"configuration-for-contabos-s3-compatible-object-storage",level:2},{value:"Example values",id:"example-values",level:3},{value:"Steps",id:"steps",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"winscp"},"WinSCP"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://winscp.net/"},"WinSCP")," is a free Desktop Application for Windows which allows to manage remote files for a wide variety of protocols including S3 compatible Object Storage."),(0,a.kt)("p",null,"Please follow the installation instruction like described on ",(0,a.kt)("a",{parentName:"p",href:"https://winscp.net/eng/download.php"},"WinSCP")),(0,a.kt)("p",null,"All you will need is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"access_key")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"secret_key")),(0,a.kt)("li",{parentName:"ul"},"Contabo's S3 URL")),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"access_key"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"secret_key")," and the S3 URL please check ",(0,a.kt)("a",{parentName:"p",href:"/docs/products/Object-Storage/s3-connection-settings"},"here"),"."),(0,a.kt)("h2",{id:"configuration-for-contabos-s3-compatible-object-storage"},"Configuration for Contabo's S3 compatible Object Storage"),(0,a.kt)("h3",{id:"example-values"},"Example values"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"access_key")," = 82046e8110804a43bf29c1ae426a724d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"secret_key")," = 82e69bd7a52076c527154297a76c2233"),(0,a.kt)("li",{parentName:"ul"},"S3 URL = ",(0,a.kt)("a",{parentName:"li",href:"https://eu2.contabostorage.com"},"https://eu2.contabostorage.com"))),(0,a.kt)("h3",{id:"steps"},"Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new login via ",(0,a.kt)("inlineCode",{parentName:"li"},"Session")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"New Session"),", possibly it shown right away and should look like the following screenshot\n",(0,a.kt)("img",{alt:"settings",src:n(7742).Z,width:"683",height:"422"})),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Amazon S3")," as file protocol"),(0,a.kt)("li",{parentName:"ol"},"Specify settings, see screenshot",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"in field ",(0,a.kt)("inlineCode",{parentName:"li"},"Host name")," put ",(0,a.kt)("inlineCode",{parentName:"li"},"eu2.contabostorage.com")," (depending your Object Storage). NOTE: please make sure to enter without ",(0,a.kt)("inlineCode",{parentName:"li"},"https://")),(0,a.kt)("li",{parentName:"ul"},"in field ",(0,a.kt)("inlineCode",{parentName:"li"},"Access key ID")," put your access_key, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"82046e8110804a43bf29c1ae426a724d")),(0,a.kt)("li",{parentName:"ul"},"in field ",(0,a.kt)("inlineCode",{parentName:"li"},"Secret access Key")," put your secret_key, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"82e69bd7a52076c527154297a76c2233")))),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Advanced")," and choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Advanced"),". The following screen should appear ",(0,a.kt)("img",{alt:"advanced",src:n(1887).Z,width:"562",height:"456"})),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Path")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"URL style")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"OK")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Save")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Login")," and you are done and have access to your Object Storage")))}d.isMDXComponent=!0},1887:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/winscp-advanced-settings-f7be1a0e4a4dfbb9d1cdd50c704f5178.png"},7742:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/winscp-settings-af5db39987c50b5049a9aae5328e177f.png"}}]);