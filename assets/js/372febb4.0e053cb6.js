"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[7145],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),v=n,m=u["".concat(l,".").concat(v)]||u[v]||p[v]||o;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:3},i="How can I restart and reinstall my Instance(s)?",s={unversionedId:"products/Private-Network/Tutorial/restart",id:"products/Private-Network/Tutorial/restart",title:"How can I restart and reinstall my Instance(s)?",description:"After adding a server to a private network, the server needs to be reinstalled if it is located on a vhost that does not support private network. Thus, also the ip-address of the server changes and all data will permanently be deleted.",source:"@site/docs/products/Private-Network/Tutorial/restart.md",sourceDirName:"products/Private-Network/Tutorial",slug:"/products/Private-Network/Tutorial/restart",permalink:"/docs/products/Private-Network/Tutorial/restart",draft:!1,editUrl:"https://github.com/contabo/docs/tree/main/docs/products/Private-Network/Tutorial/restart.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"productSidebar",previous:{title:"How can I manage the servers in an existing private network?",permalink:"/docs/products/Private-Network/Tutorial/manageServers"},next:{title:"Missing private IP (CentOS 7)",permalink:"/docs/products/Private-Network/Troubleshooting/centos7"}},l={},c=[{value:"Reinstall my server",id:"reinstall-my-server",level:2},{value:"How can I reinstall my server after adding it to a private network?",id:"how-can-i-reinstall-my-server-after-adding-it-to-a-private-network",level:3},{value:"Restart of Server",id:"restart-of-server",level:2},{value:"How can I restart my server after adding it to a private network.",id:"how-can-i-restart-my-server-after-adding-it-to-a-private-network",level:3}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-can-i-restart-and-reinstall-my-instances"},"How can I restart and reinstall my Instance(s)?"),(0,n.kt)("p",null,"After adding a server to a private network, the server needs to be reinstalled if it is located on a vhost that does not support private network. Thus, also the ip-address of the server changes and all data will permanently be deleted. "),(0,n.kt)("p",null,"If the server is already on a vHost that supports private network a reinstallation is not required but a restart is sufficient. All data and its ip-adress remain. "),(0,n.kt)("h2",{id:"reinstall-my-server"},"Reinstall my server"),(0,n.kt)("p",null,'If your server needs to be reinstalled to complete its addition to a private network, it is represented by the status "requires reinstallation" in the private network detail view for the corresponding server.'),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/products/private-network/tutorial/privateNetworkDetailItem.png",alt:"Private Network Detail One Item With Restart and Reinstallation"})),(0,n.kt)("h3",{id:"how-can-i-reinstall-my-server-after-adding-it-to-a-private-network"},"How can I reinstall my server after adding it to a private network?"),(0,n.kt)("p",null,"The restart can be started by clicking on the corresponding symbol in the quick action (",(0,n.kt)("img",{src:"/img/products/private-network/tutorial/reinstallationIcon.png"}),").\nThen, the reinstallation screen for VPS and VDS appears: "),(0,n.kt)("p",null,"The Customer needs to select an Image (Choice between selection of one various standard images or selection or creation of a custom image), select a password for user admin and / or upload their ssh-key. After reinstallation, this data will be used for connection and authorization to the corresponding server. "),(0,n.kt)("p",null,"Alternatively, the reinstallation process can also be started - as before - via the VPS Control Menu. To do this, however, you must exit the private network menu."),(0,n.kt)("h2",{id:"restart-of-server"},"Restart of Server"),(0,n.kt)("p",null,'If your server needs a restart, it is represented by the status "requires restart" in the private network detail view for the corresponding server.'),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/products/private-network/tutorial/privateNetworkDetailItem2.png",alt:"Private Network Detail One Item With Restart and Reinstallation"})),(0,n.kt)("h3",{id:"how-can-i-restart-my-server-after-adding-it-to-a-private-network"},"How can I restart my server after adding it to a private network."),(0,n.kt)("p",null,"The restart can be started by clicking on the corresponding symbol in the quick action (",(0,n.kt)("img",{src:"/img/products/private-network/tutorial/restartIcon.png"}),") . The user is informed about the progress of the restart via the status."),(0,n.kt)("p",null,"After a successful restart, the server is finally and completely added to the private network."),(0,n.kt)("p",null,"Alternatively, the restart of the server can also be done - as before - via the VPS Control Menu. To do this, however, you must exit the private network menu."))}p.isMDXComponent=!0}}]);