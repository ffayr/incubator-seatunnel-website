"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[5677],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=s(n),k=r,c=u["".concat(p,".").concat(k)]||u[k]||m[k]||i;return n?a.createElement(c,l(l({ref:e},d),{},{components:n})):a.createElement(c,l({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2987:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},p="Hdfs",s={unversionedId:"spark/configuration/sink-plugins/Hdfs",id:"spark/configuration/sink-plugins/Hdfs",title:"Hdfs",description:"Sink plugin : Hdfs [Spark]",source:"@site/docs/spark/configuration/sink-plugins/Hdfs.md",sourceDirName:"spark/configuration/sink-plugins",slug:"/spark/configuration/sink-plugins/Hdfs",permalink:"/zh-CN/docs/spark/configuration/sink-plugins/Hdfs",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/spark/configuration/sink-plugins/Hdfs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hbase",permalink:"/zh-CN/docs/spark/configuration/sink-plugins/Hbase"},next:{title:"Hive",permalink:"/zh-CN/docs/spark/configuration/sink-plugins/Hive"}},d=[{value:"Description",id:"description",children:[],level:2},{value:"Options",id:"options",children:[{value:"options object",id:"options-object",children:[],level:3},{value:"partition_by array",id:"partition_by-array",children:[],level:3},{value:"path string",id:"path-string",children:[],level:3},{value:"path_time_format string",id:"path_time_format-string",children:[],level:3},{value:"save_mode string",id:"save_mode-string",children:[],level:3},{value:"serializer string",id:"serializer-string",children:[],level:3},{value:"common options string",id:"common-options-string",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2}],m={toc:d};function u(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hdfs"},"Hdfs"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Sink plugin : Hdfs ","[Spark]")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Export data to HDFS"),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"options"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"partition_by"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path_time_format"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"yyyyMMddHHmmss")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"save_mode"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"error")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"serializer"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"json")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"options-object"},"options ","[object]"),(0,i.kt)("p",null,"Custom parameters"),(0,i.kt)("h3",{id:"partition_by-array"},"partition_by ","[array]"),(0,i.kt)("p",null,"Partition data based on selected fields"),(0,i.kt)("h3",{id:"path-string"},"path ","[string]"),(0,i.kt)("p",null,"Output file path, starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"hdfs://")),(0,i.kt)("h3",{id:"path_time_format-string"},"path_time_format ","[string]"),(0,i.kt)("p",null,"When the format in the ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," parameter is ",(0,i.kt)("inlineCode",{parentName:"p"},"xxxx-${now}")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"path_time_format")," can specify the time format of the path, and the default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," . The commonly used time formats are listed as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"y"),(0,i.kt)("td",{parentName:"tr",align:null},"Year")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"M"),(0,i.kt)("td",{parentName:"tr",align:null},"Month")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"d"),(0,i.kt)("td",{parentName:"tr",align:null},"Day of month")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"H"),(0,i.kt)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m"),(0,i.kt)("td",{parentName:"tr",align:null},"Minute in hour")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"s"),(0,i.kt)("td",{parentName:"tr",align:null},"Second in minute")))),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/i18n/format/simpleDateFormat.html"},"Java SimpleDateFormat")," for detailed time format syntax."),(0,i.kt)("h3",{id:"save_mode-string"},"save_mode ","[string]"),(0,i.kt)("p",null,"Storage mode, currently supports ",(0,i.kt)("inlineCode",{parentName:"p"},"overwrite")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"append")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"ignore")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," . For the specific meaning of each mode, see ",(0,i.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/sql-programming-guide.html#save-modes"},"save-modes")),(0,i.kt)("h3",{id:"serializer-string"},"serializer ","[string]"),(0,i.kt)("p",null,"Serialization method, currently supports ",(0,i.kt)("inlineCode",{parentName:"p"},"csv")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"parquet")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"orc")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"text")),(0,i.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,i.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/spark/configuration/sink-plugins/sink-plugin"},"Sink Plugin")," for details"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'hdfs {\n    path = "hdfs:///var/logs-${now}"\n    serializer = "json"\n    path_time_format = "yyyy.MM.dd"\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Generate HDFS files on a daily basis, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"logs-2021.12.15"))))}u.isMDXComponent=!0}}]);