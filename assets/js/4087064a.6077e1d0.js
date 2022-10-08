"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[66607],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=i.createContext({}),c=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=o,f=h["".concat(r,".").concat(p)]||h[p]||d[p]||a;return n?i.createElement(f,l(l({ref:t},u),{},{components:n})):i.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},61456:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return r},metadata:function(){return c},assets:function(){return u},toc:function(){return d},default:function(){return p}});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],s={slug:"How to synchronize tens of billions of data based on SeaTunnel's ClickHouse",title:"How to synchronize tens of billions of data based on SeaTunnel's ClickHouse",tags:["Meetup"]},r="How to synchronize tens of billions of data based on SeaTunnel's ClickHouse",c={permalink:"/blog/How to synchronize tens of billions of data based on SeaTunnel's ClickHouse",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2022-05-10-ClickHouse.md",source:"@site/blog/2022-05-10-ClickHouse.md",title:"How to synchronize tens of billions of data based on SeaTunnel's ClickHouse",description:"Author | Fan Jia, Apache SeaTunnel(Incubating) Contributor",date:"2022-05-10T00:00:00.000Z",formattedDate:"May 10, 2022",tags:[{label:"Meetup",permalink:"/blog/tags/meetup"}],readingTime:7.035,truncated:!1,authors:[],frontMatter:{slug:"How to synchronize tens of billions of data based on SeaTunnel's ClickHouse",title:"How to synchronize tens of billions of data based on SeaTunnel's ClickHouse",tags:["Meetup"]},prevItem:{title:"How dose Apache SeaTunnel refactor the API to decouple with the computing engine",permalink:"/blog/How dose Apache SeaTunnel refactor the API to decouple with the computing engine"},nextItem:{title:"SeaTunnel Application and Refactoring at Kidswant",permalink:"/blog/SeaTunnel Application and Refactoring at Kidswant"}},u={authorsImageUrls:[]},d=[{value:"01 Status of ClickHouse Sink",id:"01-status-of-clickhouse-sink",level:2},{value:"02 Scenarios that ClickHouse Sink isn&#39;t good at",id:"02-scenarios-that-clickhouse-sink-isnt-good-at",level:2},{value:"03 ClickHouse File core technologies",id:"03-clickhouse-file-core-technologies",level:2},{value:"04 Core technical points",id:"04-core-technical-points",level:2},{value:"05 Plugin implementation analysis",id:"05-plugin-implementation-analysis",level:2},{value:"06 Comparison of plug-in capabilities",id:"06-comparison-of-plug-in-capabilities",level:2},{value:"07 Follow-up plans",id:"07-follow-up-plans",level:2}],h={toc:d};function p(e){var t=e.components,s=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(72888).Z,width:"1920",height:"1275"})),(0,a.kt)("p",null,"Author | Fan Jia, Apache SeaTunnel(Incubating) Contributor\nEditor | Test Engineer Feng Xiulan"),(0,a.kt)("p",null,"For importing billions of batches of data, the traditional JDBC approach does not perform as well as it should in some massive data synchronization scenarios. To write data faster, Apache SeaTunnel (Incubating) has just released version 2.1.1 to provide support for ClickhouseFile-Connector to implement Bulk load data writing."),(0,a.kt)("p",null,"Bulk load means synchronizing large amounts of data to the target DB. SeaTunnel currently supports data synchronization to ClickHouse."),(0,a.kt)("p",null,'At the Apache SeaTunnel (Incubating) April Meetup, Apache SeaTunnel (Incubating) contributor Fan Jia shared the topic of "ClickHouse bulk load implementation based on SeaTunnel", explaining in detail the implementation principle and process of ClickHouseFile for efficient processing of large amounts of data.'),(0,a.kt)("p",null,"Thanks to the test engineer Feng Xiulan for the article arrangement!"),(0,a.kt)("p",null,"This presentation contains seven parts."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"State of ClickHouse Sink"),(0,a.kt)("li",{parentName:"ul"},"Scenarios that ClickHouse Sink isn't good at "),(0,a.kt)("li",{parentName:"ul"},"Introduction to the ClickHouseFile plugin"),(0,a.kt)("li",{parentName:"ul"},"ClickHouseFile core technologies"),(0,a.kt)("li",{parentName:"ul"},"Analysis of ClickHouseFile plugin implementation"),(0,a.kt)("li",{parentName:"ul"},"Comparison of plug-in capabilities"),(0,a.kt)("li",{parentName:"ul"},"Post-optimization directions")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(14305).Z,width:"1171",height:"1171"})),(0,a.kt)("p",null,"Fan Jia,  Apache SeaTunnel (Incubating) contributor, Senior Enginee of WhaleOps."),(0,a.kt)("h2",{id:"01-status-of-clickhouse-sink"},"01 Status of ClickHouse Sink"),(0,a.kt)("p",null,"At present, the process of synchronizing data from SeaTunnel to ClickHouse is as follows: as long as the data source is supported by SeaTunnel, the data can be extracted, converted (or not), and written directly to the ClickHouse sink connector, and then written to the ClickHouse server via JDBC. "),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(43975).Z,width:"1139",height:"585"})),(0,a.kt)("p",null,"However, there are some problems with writing to the ClickHouse server via traditional JDBC."),(0,a.kt)("p",null,"Firstly, the tool used now is the driver provided by ClickHouse and implemented via HTTP, however, HTTP is not very efficient to implement in certain scenarios. The second is the huge amount of data, if there is duplicate data or a large amount of data written at once, it needs to generate the corresponding insert statement and send it via HTTP to the ClickHouse server-side by the traditional method, where it is parsed and executed item by item or in batches, which does not allow data compression."),(0,a.kt)("p",null,"Finally, there is the problem we often encounter, i.e. too much data may lead to an OOM on the SeaTunnel side or a server-side hang due to too much data being written to the server-side too often."),(0,a.kt)("p",null,"So we thought, is there a faster way to send than HTTP? If data pre-processing or data compression could be done on the SeaTunnel side, then the network bandwidth pressure would be reduced and the transmission rate would be increased."),(0,a.kt)("h2",{id:"02-scenarios-that-clickhouse-sink-isnt-good-at"},"02 Scenarios that ClickHouse Sink isn't good at"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If the HTTP transfer protocol is used, HTTP may not be able to handle it when the volume of data is too large and the batch is sending requests in micro-batches."),(0,a.kt)("li",{parentName:"ol"},"Too many INSERT requests may put too much pressure on the server. The bandwidth can handle a large number of requests, but the server-side is not always able to carry them. The online server not only needs data inserts but more importantly, the query data can be used by other business teams. If the server cluster goes down due to too much-inserted data, it is more than worth the cost.")),(0,a.kt)("h2",{id:"03-clickhouse-file-core-technologies"},"03 ClickHouse File core technologies"),(0,a.kt)("p",null,"In response to these scenarios that ClickHouse is not good at, we wondered is there a way to do data compression right on the Spark side, without increasing the resource load on the Server when writing data, and with the ability to write large amounts of data quickly? So we developed the ClickHouseFile plugin to solve the problem."),(0,a.kt)("p",null,"The key technology of the ClickHouseFile plugin is ClickHouse -local. ClickHouse-local mode allows users to perform fast processing of local files without having to deploy and configure a ClickHouse Server. C lickHouse-local uses the same core as ClickHouse Server, so it supports most features as well as the same format and table engine."),(0,a.kt)("p",null,"These two features mean that users can work directly with local files without having to do the processing on the ClickHouse Server side. Because it is the same format, the data generated by the operations we perform on the remote or SeaTunnel side is seamlessly compatible with the server-side and can be written to using ClickHouse local. ClickHouse local is the core technology for the implementation of ClickHouseFile, which allows for implementing the ClickHouse file connector."),(0,a.kt)("p",null,"ClickHouse local core is used in the following ways."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(34771).Z,width:"1112",height:"262"})),(0,a.kt)("p",null,"First line: pass the data to the test_table table of the ClickHouse-local program via the Linux pipeline."),(0,a.kt)("p",null,"Lines two to five: create a result_table for receiving data."),(0,a.kt)("p",null,"The sixth line: pass data from test_table to the result_table."),(0,a.kt)("p",null,"Line 7: Define the disk path for data processing."),(0,a.kt)("p",null,"By calling the Clickhouse-local component, the Apache SeaTunnel (Incubating) is used to generate the data files and compress the data. By communicating with the Server, the generated data is sent directly to the different nodes of Clickhouse and the data files are then made available to the nodes for the query."),(0,a.kt)("p",null,"Comparison of the original and current implementations."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(97245).Z,width:"1272",height:"576"})),(0,a.kt)("p",null,"Originally, the data, including the insert statements was sent by Spark to the server, and the server did the SQL parsing, generated and compressed the table data files, generated the corresponding files, and created the corresponding indexes. If we use ClickHouse local technology, the data file generation, file compression and index creation are done by SeaTunnel, and the final output is a file or folder for the server-side, which is synchronized to the server and the server can queries the data without additional operations."),(0,a.kt)("h2",{id:"04-core-technical-points"},"04 Core technical points"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(30476).Z,width:"1164",height:"435"})),(0,a.kt)("p",null,"The above process makes data synchronization more efficient, thanks to three optimizations we have made to it."),(0,a.kt)("p",null,"Firstly, the data is transferred from the pipeline to the ClickHouseFile by the division, which imposes limitations in terms of length and memory. For this reason, we write the data received by the ClickHouse connector, i.e. the sink side, to a temporary file via MMAP technology, and then the ClickHouse local reads the data from the temporary file to generate our target local file, in order to achieve the effect of incremental data reading and solve the OM problem."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(74700).Z,width:"1206",height:"565"})),(0,a.kt)("p",null,"Secondly, it supports sharding. If only one file or folder is generated in a cluster, the file is distributed to only one node, which will greatly reduce the performance of the query. Therefore, we carry out slicing support. Users can set the key for slicing in the configuration folder, and the algorithm will divide the data into multiple log files and write them to different cluster nodes, significantly improving the read performance."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(34131).Z,width:"1043",height:"558"})),(0,a.kt)("p",null,"The third key optimization is file transfer. Currently, SeaTunnel supports two file transfer methods, one is SCP, which is characterized by security, versatility, and no additional configuration; the other is RSYNC, which is somewhat fast and efficient and supports breakpoint resume, but requires additional configuration, users can choose between the way suits their needs."),(0,a.kt)("h2",{id:"05-plugin-implementation-analysis"},"05 Plugin implementation analysis"),(0,a.kt)("p",null,"In summary, the general implementation process of ClickHouseFile is as follows."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(68196).Z,width:"533",height:"635"})),(0,a.kt)("p",null,"1.caching data to the ClickHouse sink side.\n2.calling ClickHouse-local to generate the file.\n3.sending the data to the ClickHouse server.\n4.Execution of the ATTACH command."),(0,a.kt)("p",null,"With the above four steps, the generated data reaches a queryable state."),(0,a.kt)("h2",{id:"06-comparison-of-plug-in-capabilities"},"06 Comparison of plug-in capabilities"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(27965).Z,width:"1071",height:"485"})),(0,a.kt)("p",null,"(a) In terms of data transfer, ClickHouseFile is more suitable for massive amounts of data, with the advantage that no additional configuration is required and it is highly versatile, while ClickHouseFile is more complex to configure and currently supports fewer engines."),(0,a.kt)("p",null,"In terms of environmental complexity, ClickHouse is more suitable for complex environments and can be run directly without additional configuration."),(0,a.kt)("p",null,"In terms of versatility, ClickHouse, due to being an officially supported JDBC diver by SeaTunnel, basically supports all engines for data writing, while ClickHouseFile supports relatively few engines."),(0,a.kt)("p",null,"In terms of server pressure, ClickHouseFile's advantage shows when it comes to massive data transfers that don't put too much pressure on the server."),(0,a.kt)("p",null,"However, the two are not in competition and the choice needs to be based on the usage scenario."),(0,a.kt)("h2",{id:"07-follow-up-plans"},"07 Follow-up plans"),(0,a.kt)("p",null,"Although SeaTunnel currently supports the ClickHouseFile plugin, there are still many defects that need to be optimized, mainly including"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rsync support."),(0,a.kt)("li",{parentName:"ul"},"Exactly-Once support."),(0,a.kt)("li",{parentName:"ul"},"Zero Copy support for transferring data files."),(0,a.kt)("li",{parentName:"ul"},"More Engine support.")),(0,a.kt)("p",null,"Anyone interested in the above issues is welcome to contribute to the follow-up plans, or tell me your ideas!"))}p.isMDXComponent=!0},14305:function(e,t,n){t.Z=n.p+"assets/images/0-1-56defefcc273a6e21b09dd483bf95914.png"},72888:function(e,t,n){t.Z=n.p+"assets/images/0-c3f068094d4f0308d7100502a6162925.jpg"},43975:function(e,t,n){t.Z=n.p+"assets/images/1-76284c6612152506e0111e0f0d25d0f5.png"},34771:function(e,t,n){t.Z=n.p+"assets/images/2-2367f70ae655c30a94a2ec65e67a6b26.png"},97245:function(e,t,n){t.Z=n.p+"assets/images/3-6204c709b48243f88914bfd492dc67f2.png"},30476:function(e,t,n){t.Z=n.p+"assets/images/4-d47e1da865afa7ea4de50b2d6e4b6ac1.png"},74700:function(e,t,n){t.Z=n.p+"assets/images/5-9f00635b1727843f705cd5a28632e2e4.png"},34131:function(e,t,n){t.Z=n.p+"assets/images/6-35b30550d6a18fbea49856083aa85094.png"},68196:function(e,t,n){t.Z=n.p+"assets/images/7-1be978da30a55fe0289c683f2ae61aac.png"},27965:function(e,t,n){t.Z=n.p+"assets/images/8-261e7ba686f3fadf5d7c1445e9be5b66.png"}}]);