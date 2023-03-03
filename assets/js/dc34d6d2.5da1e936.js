"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[204],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(o),u=a,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return o?n.createElement(g,i(i({ref:t},p),{},{components:o})):n.createElement(g,i({ref:t},p))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5665:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=o(7462),a=(o(7294),o(3905));const r={title:"Migrate to Contabo Object Storage",sidebar_position:9},i="Migrate from another storage provider to Contabo Object Storage",l={unversionedId:"products/Object-Storage/HowTo/migrate-to-contabo-object-storage",id:"products/Object-Storage/HowTo/migrate-to-contabo-object-storage",title:"Migrate to Contabo Object Storage",description:"Contabo Object Storage is compatible with the S3 API, which is why migrating from another object storage provider like Amazon S3 or DigitalOcean Spaces is simple and fast using rclone. With rclone, you can manage your data on different cloud storages directly from your command line.",source:"@site/docs/products/Object-Storage/HowTo/migrate-to-contabo-object-storage.md",sourceDirName:"products/Object-Storage/HowTo",slug:"/products/Object-Storage/HowTo/migrate-to-contabo-object-storage",permalink:"/docs/products/Object-Storage/HowTo/migrate-to-contabo-object-storage",draft:!1,editUrl:"https://github.com/contabo/docs/tree/main/docs/products/Object-Storage/HowTo/migrate-to-contabo-object-storage.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Migrate to Contabo Object Storage",sidebar_position:9},sidebar:"productSidebar",previous:{title:"Restricting Users to Buckets",permalink:"/docs/products/Object-Storage/HowTo/restricting-user-bucket"},next:{title:"Control Storage Space",permalink:"/docs/products/Object-Storage/HowTo/control-storage-space"}},c={},s=[{value:"Prepare rclone",id:"prepare-rclone",level:2},{value:"Configure the source storage",id:"configure-the-source-storage",level:3},{value:"Configure Contabo Object Storage",id:"configure-contabo-object-storage",level:3},{value:"Copy the data",id:"copy-the-data",level:2}],p={toc:s};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migrate-from-another-storage-provider-to-contabo-object-storage"},"Migrate from another storage provider to Contabo Object Storage"),(0,a.kt)("p",null,"Contabo Object Storage is compatible with the S3 API, which is why migrating from another object storage provider like Amazon S3 or DigitalOcean Spaces is simple and fast using ",(0,a.kt)("a",{parentName:"p",href:"https://rclone.org/"},"rclone"),". With rclone, you can manage your data on different cloud storages directly from your command line."),(0,a.kt)("p",null,"To get started, make sure you have rclone installed on your system. If you haven't, head over to the ",(0,a.kt)("a",{parentName:"p",href:"https://rclone.org/downloads/"},"rclone installation guide")," and follow the instructions."),(0,a.kt)("p",null,"This example shows you how to migrate from Amazon S3 to Contabo Object Storage, but any other cloud storages ",(0,a.kt)("a",{parentName:"p",href:"https://rclone.org/overview/"},"compatible with rclone")," can be used as well."),(0,a.kt)("h2",{id:"prepare-rclone"},"Prepare rclone"),(0,a.kt)("p",null,"Before you can manage external storages with rclone, they must be added to rclone's configuration. That's where all the required information about the storages is stored."),(0,a.kt)("h3",{id:"configure-the-source-storage"},"Configure the source storage"),(0,a.kt)("p",null,"Start the rclone configuration by running ",(0,a.kt)("inlineCode",{parentName:"p"},"rclone config"),". Then select ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"New remote"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Choose a name for the remote storage, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"aws-s3")),(0,a.kt)("li",{parentName:"ol"},"Select the type of storage you want to add, for Amazon S3 that's ",(0,a.kt)("inlineCode",{parentName:"li"},"Amazon S3 Compliant Storage Providers including AWS, ...")),(0,a.kt)("li",{parentName:"ol"},"Select your S3 provider: ",(0,a.kt)("inlineCode",{parentName:"li"},"Amazon Web Services (AWS) S3")),(0,a.kt)("li",{parentName:"ol"},"Enter your credentials by selecting ",(0,a.kt)("inlineCode",{parentName:"li"},"Enter AWS credentials in the next step")," and type in your ",(0,a.kt)("inlineCode",{parentName:"li"},"access_key_id")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"secret_access_key")," in the upcoming prompts"),(0,a.kt)("li",{parentName:"ol"},"Select the region"),(0,a.kt)("li",{parentName:"ol"},"Specify the endpoint for S3 API. Skip (",(0,a.kt)("inlineCode",{parentName:"li"},"return"),") this step to use the default AWS endpoint for the region specified in the previous step"),(0,a.kt)("li",{parentName:"ol"},"You can skip (",(0,a.kt)("inlineCode",{parentName:"li"},"return"),") the following steps ",(0,a.kt)("inlineCode",{parentName:"li"},"acl"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"server_side_encryption"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"sse_kms_key_id")," because you don't want to create files on your Amazon S3 storage"),(0,a.kt)("li",{parentName:"ol"},"Select your object storage class. If you have a default S3 storage, select ",(0,a.kt)("inlineCode",{parentName:"li"},"Default")," (select ",(0,a.kt)("inlineCode",{parentName:"li"},"Glacier Storage class")," if you have a S3 Glacier storage)"),(0,a.kt)("li",{parentName:"ol"},"If you get prompted to edit the advanced config, select ",(0,a.kt)("inlineCode",{parentName:"li"},"n")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"No")),(0,a.kt)("li",{parentName:"ol"},"Verify the information and confirm with ",(0,a.kt)("inlineCode",{parentName:"li"},"y"))),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/products/object-storage/howto/migrate-to-contabo-object-storage/aws-configuration.png?raw=true",alt:"Finished rclone configuration for AWS S3"})),(0,a.kt)("p",null,"Now the first remote storage is configured, repeat the process for the storage you want to migrate your data to. In this case, ",(0,a.kt)("a",{parentName:"p",href:"https://contabo.com/en/object-storage/"},"Contabo Object Storage"),"."),(0,a.kt)("h3",{id:"configure-contabo-object-storage"},"Configure Contabo Object Storage"),(0,a.kt)("p",null,"Start the rclone configuration again (",(0,a.kt)("inlineCode",{parentName:"p"},"rclone config"),") and create a new remote (select ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," for new)."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Choose a name for the remote storage, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"contabo-storage")),(0,a.kt)("li",{parentName:"ol"},"Because the object storage is combatible with S3, select ",(0,a.kt)("inlineCode",{parentName:"li"},"Amazon S3 Compliant Storage Providers including AWS, ...")),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"Ceph Object Storage")," as your provider"),(0,a.kt)("li",{parentName:"ol"},"Enter your credentials by selecting ",(0,a.kt)("inlineCode",{parentName:"li"},"Enter AWS credentials in the next step")," and type in your ",(0,a.kt)("inlineCode",{parentName:"li"},"access_key_id")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"secret_access_key")," in the upcoming prompts. If you don't have these keys, ",(0,a.kt)("a",{parentName:"li",href:"/docs/products/Object-Storage/HowTo/access_secret_key/"},"generate them first")," in your ",(0,a.kt)("a",{parentName:"li",href:"https://my.contabo.com/object_storage"},"Contabo Customer Panel"),"."),(0,a.kt)("li",{parentName:"ol"},"Skip the region selection by pressing ",(0,a.kt)("inlineCode",{parentName:"li"},"return")),(0,a.kt)("li",{parentName:"ol"},"Specify the S3 API Endpoint which you can find in the ",(0,a.kt)("a",{parentName:"li",href:"https://new.contabo.com/storage/object-storage/buckets"},"Object Storage Overview")," (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"https://eu2.contabostorage.com"),")"),(0,a.kt)("li",{parentName:"ol"},"You can skip (",(0,a.kt)("inlineCode",{parentName:"li"},"return"),") the following steps ",(0,a.kt)("inlineCode",{parentName:"li"},"acl"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"server_side_encryption"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"sse_kms_key_id")),(0,a.kt)("li",{parentName:"ol"},"If you get prompted to edit the advanced config, select ",(0,a.kt)("inlineCode",{parentName:"li"},"n")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"No")),(0,a.kt)("li",{parentName:"ol"},"Verify the information and confirm with ",(0,a.kt)("inlineCode",{parentName:"li"},"y"))),(0,a.kt)("p",null,"For a more detailed guide, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/products/Object-Storage/Tools/rclone"},"rclone with Contabo Object Storage"),"."),(0,a.kt)("p",null,"Both remote storages are now added to the rclone config. To verify that everything works, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"rclone ls")," command to list the objects inside a bucket:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# rclone ls remote-name:bucket-name\nrclone ls aws-s3:bucket-name\n")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/products/object-storage/howto/migrate-to-contabo-object-storage/file-list.png?raw=true",alt:"List of all files in a specific buckets"})),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"lsf")," instead to list both objects and directories."),(0,a.kt)("h2",{id:"copy-the-data"},"Copy the data"),(0,a.kt)("p",null,"With both remote storages added to rclone, copying the data from one to another isn't a big deal anymore. rclone's built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"copy")," command copies all the data inside one bucket to another. Use the following command to copy the data from your Amazon S3 bucket to your new bucket on Contabo Object Storage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# rclone copy [source] [destination]\nrclone copy aws-s3:bucket-name contabo-storage:bucket-name --s3-no-head\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If the destination already has content inside, keep the following in mind:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Existing files on the destination ",(0,a.kt)("strong",{parentName:"li"},"that don't exist on the source")," are ignored and ",(0,a.kt)("strong",{parentName:"li"},"won't be deleted")),(0,a.kt)("li",{parentName:"ul"},"Existing files on the destination ",(0,a.kt)("strong",{parentName:"li"},"that are identical")," to the files on the source ",(0,a.kt)("strong",{parentName:"li"},"will be ignored")),(0,a.kt)("li",{parentName:"ul"},"Existing files on the destination ",(0,a.kt)("strong",{parentName:"li"},"that are not identical")," to the files on the source ",(0,a.kt)("strong",{parentName:"li"},"will be overwritten")))),(0,a.kt)("p",null,"This may take a while depending on the size of the files needing to be copied. Note that rclone downloads the files to your computer before uploading them to the destination."))}d.isMDXComponent=!0}}]);