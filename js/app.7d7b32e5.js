(function(a){function t(t){for(var s,o,c=t[0],i=t[1],l=t[2],f=0,b=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(a[s]=i[s]);d&&d(t);while(b.length)b.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var a,t=0;t<n.length;t++){for(var e=n[t],s=!0,c=1;c<e.length;c++){var i=e[c];0!==r[i]&&(s=!1)}s&&(n.splice(t--,1),a=o(o.s=e[0]))}return a}var s={},r={app:0},n=[];function o(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=a,o.c=s,o.d=function(a,t,e){o.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},o.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,t){if(1&t&&(a=o(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var s in a)o.d(e,s,function(t){return a[t]}.bind(null,s));return e},o.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return o.d(t,"a",t),t},o.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=i;n.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"0fd5":function(a,t,e){var s={"./af":"8206","./af.js":"8206","./ar":"cdac","./ar-dz":"7f26","./ar-dz.js":"7f26","./ar-kw":"8e88","./ar-kw.js":"8e88","./ar-ly":"cd65","./ar-ly.js":"cd65","./ar-ma":"e8d6","./ar-ma.js":"e8d6","./ar-sa":"a284","./ar-sa.js":"a284","./ar-tn":"64f7","./ar-tn.js":"64f7","./ar.js":"cdac","./az":"b139","./az.js":"b139","./be":"98e2","./be.js":"98e2","./bg":"a1a5","./bg.js":"a1a5","./bm":"4d0d","./bm.js":"4d0d","./bn":"e8ae","./bn-bd":"5dd8","./bn-bd.js":"5dd8","./bn.js":"e8ae","./bo":"bcf2","./bo.js":"bcf2","./br":"69f1","./br.js":"69f1","./bs":"24d1","./bs.js":"24d1","./ca":"3507","./ca.js":"3507","./cs":"d15f","./cs.js":"d15f","./cv":"7bfe","./cv.js":"7bfe","./cy":"1d35","./cy.js":"1d35","./da":"a019","./da.js":"a019","./de":"0cfa","./de-at":"edea","./de-at.js":"edea","./de-ch":"9aae","./de-ch.js":"9aae","./de.js":"0cfa","./dv":"1722","./dv.js":"1722","./el":"5390","./el.js":"5390","./en-au":"dad9","./en-au.js":"dad9","./en-ca":"6f13","./en-ca.js":"6f13","./en-gb":"6267","./en-gb.js":"6267","./en-ie":"80b1","./en-ie.js":"80b1","./en-il":"ad38","./en-il.js":"ad38","./en-in":"eb60","./en-in.js":"eb60","./en-nz":"39db","./en-nz.js":"39db","./en-sg":"c30d","./en-sg.js":"c30d","./eo":"1a30","./eo.js":"1a30","./es":"48a3","./es-do":"f306","./es-do.js":"f306","./es-mx":"56d9","./es-mx.js":"56d9","./es-us":"60bf","./es-us.js":"60bf","./es.js":"48a3","./et":"f891","./et.js":"f891","./eu":"a403","./eu.js":"a403","./fa":"ce14","./fa.js":"ce14","./fi":"fc14","./fi.js":"fc14","./fil":"f46e","./fil.js":"f46e","./fo":"2bf2","./fo.js":"2bf2","./fr":"c1e8","./fr-ca":"50a2","./fr-ca.js":"50a2","./fr-ch":"b087","./fr-ch.js":"b087","./fr.js":"c1e8","./fy":"4665","./fy.js":"4665","./ga":"b396","./ga.js":"b396","./gd":"056c","./gd.js":"056c","./gl":"efde","./gl.js":"efde","./gom-deva":"12ea","./gom-deva.js":"12ea","./gom-latn":"8e2c","./gom-latn.js":"8e2c","./gu":"533d","./gu.js":"533d","./he":"7520","./he.js":"7520","./hi":"d2f3","./hi.js":"d2f3","./hr":"7e79","./hr.js":"7e79","./hu":"148f","./hu.js":"148f","./hy-am":"6711","./hy-am.js":"6711","./id":"2b10","./id.js":"2b10","./is":"1feb","./is.js":"1feb","./it":"1b21","./it-ch":"8d2c","./it-ch.js":"8d2c","./it.js":"1b21","./ja":"926e","./ja.js":"926e","./jv":"5a78","./jv.js":"5a78","./ka":"5975","./ka.js":"5975","./kk":"cc93","./kk.js":"cc93","./km":"66e1","./km.js":"66e1","./kn":"5421","./kn.js":"5421","./ko":"1297","./ko.js":"1297","./ku":"16f8","./ku.js":"16f8","./ky":"3df9","./ky.js":"3df9","./lb":"c124","./lb.js":"c124","./lo":"20a5","./lo.js":"20a5","./lt":"c14a","./lt.js":"c14a","./lv":"c553","./lv.js":"c553","./me":"ae25","./me.js":"ae25","./mi":"6f56","./mi.js":"6f56","./mk":"c8fc","./mk.js":"c8fc","./ml":"752d","./ml.js":"752d","./mn":"f09e","./mn.js":"f09e","./mr":"0a56","./mr.js":"0a56","./ms":"55b6","./ms-my":"a9e9","./ms-my.js":"a9e9","./ms.js":"55b6","./mt":"624b","./mt.js":"624b","./my":"e256","./my.js":"e256","./nb":"e1d5","./nb.js":"e1d5","./ne":"761a","./ne.js":"761a","./nl":"a0f2","./nl-be":"5cb2","./nl-be.js":"5cb2","./nl.js":"a0f2","./nn":"4fda","./nn.js":"4fda","./oc-lnc":"ec3d","./oc-lnc.js":"ec3d","./pa-in":"2f2f","./pa-in.js":"2f2f","./pl":"317f","./pl.js":"317f","./pt":"5553","./pt-br":"a9ab","./pt-br.js":"a9ab","./pt.js":"5553","./ro":"db12","./ro.js":"db12","./ru":"7aa4","./ru.js":"7aa4","./sd":"e87b","./sd.js":"e87b","./se":"a296","./se.js":"a296","./si":"51ec","./si.js":"51ec","./sk":"608b","./sk.js":"608b","./sl":"b367","./sl.js":"b367","./sq":"f68f","./sq.js":"f68f","./sr":"0991","./sr-cyrl":"c577","./sr-cyrl.js":"c577","./sr.js":"0991","./ss":"cf76","./ss.js":"cf76","./sv":"0153","./sv.js":"0153","./sw":"cb6f","./sw.js":"cb6f","./ta":"8bfa","./ta.js":"8bfa","./te":"668b","./te.js":"668b","./tet":"eae7","./tet.js":"eae7","./tg":"70b1","./tg.js":"70b1","./th":"7180","./th.js":"7180","./tk":"4912","./tk.js":"4912","./tl-ph":"f8bb","./tl-ph.js":"f8bb","./tlh":"b026","./tlh.js":"b026","./tr":"371d","./tr.js":"371d","./tzl":"c744","./tzl.js":"c744","./tzm":"787a","./tzm-latn":"71e0","./tzm-latn.js":"71e0","./tzm.js":"787a","./ug-cn":"6b5c","./ug-cn.js":"6b5c","./uk":"8c0c","./uk.js":"8c0c","./ur":"519e","./ur.js":"519e","./uz":"7982","./uz-latn":"3137","./uz-latn.js":"3137","./uz.js":"7982","./vi":"ae22","./vi.js":"ae22","./x-pseudo":"1129","./x-pseudo.js":"1129","./yo":"b4bf","./yo.js":"b4bf","./zh-cn":"fdc4","./zh-cn.js":"fdc4","./zh-hk":"747d","./zh-hk.js":"747d","./zh-mo":"fe39","./zh-mo.js":"fe39","./zh-tw":"d3e0","./zh-tw.js":"d3e0"};function r(a){var t=n(a);return e(t)}function n(a){if(!e.o(s,a)){var t=new Error("Cannot find module '"+a+"'");throw t.code="MODULE_NOT_FOUND",t}return s[a]}r.keys=function(){return Object.keys(s)},r.resolve=n,a.exports=r,r.id="0fd5"},"56d7":function(a,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-app",{staticClass:"grey lighten-4"},[e("Navbar",{on:{refresh:a.refreshPage}}),e("v-main",[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("router-view")],1)])])])],1)},n=[],o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("nav",[e("v-app-bar",{staticClass:"blue lighten-4 black--text",attrs:{app:""}},[e("v-spacer"),e("v-toolbar-title",[e("h3",{staticClass:"font-weight-regular text-decoration-underline",attrs:{id:"headTitle"}},[a._v(" FALL-DETECTION RESULTS ")])]),e("v-spacer")],1)],1)},c=[],i={methods:{refresh:function(){this.$emit("refresh")}}},l=i,d=e("2877"),f=e("6544"),b=e.n(f),u=e("40dc"),h=e("2fa4"),p=e("2a7f"),j=Object(d["a"])(l,o,c,!1,null,null,null),v=j.exports;b()(j,{VAppBar:u["a"],VSpacer:h["a"],VToolbarTitle:p["a"]});var m={name:"App",components:{Navbar:v},methods:{refreshPage:function(){window.location.reload()}}},g=m,y=(e("5c0b"),e("7496")),k=e("f6c4"),C=Object(d["a"])(g,r,n,!1,null,null,null),A=C.exports;b()(C,{VApp:y["a"],VMain:k["a"]});var _=e("9483");Object(_["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(a){console.error("Error during service worker registration:",a)}});var w,x,z,q,D=e("8c4f"),O=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"home"},[e("div",{staticClass:"updateText"},[e("h5",[a._v(a._s(a.time))]),e("v-btn",{staticClass:"btn",attrs:{color:"secondary",fab:"","x-small":"",dark:""},on:{click:a.updateCharts}},[e("v-icon",[a._v("mdi-update")])],1)],1),e("v-card",{staticClass:"toolbarPage black--text"},[e("v-tabs",{staticStyle:{"margin-bottom":"15px"},attrs:{"background-color":"light-blue lighten-4",centered:"","icons-and-text":""},model:{value:a.tabs,callback:function(t){a.tabs=t},expression:"tabs"}},[e("v-tabs-slider"),e("v-tab",{attrs:{href:"#tab1"}},[a._v(" Bar Chart "),e("v-icon",[a._v("mdi-chart-bar")])],1),e("v-tab",{attrs:{href:"#tab2"}},[a._v(" Pie Chart "),e("v-icon",[a._v("mdi-chart-pie")])],1),e("v-tab",{attrs:{href:"#tab3"}},[a._v(" Table Chart "),e("v-icon",[a._v("mdi-table")])],1)],1)],1),e("v-tabs-items",{model:{value:a.tabs,callback:function(t){a.tabs=t},expression:"tabs"}},[e("v-tab-item",{attrs:{value:"tab1"}},[e("div",[e("h3",{staticClass:"title"},[a._v("Bar Chart")]),e("bar-chart",{attrs:{info:a.data,update:a.update}})],1)]),e("v-tab-item",{attrs:{value:"tab2"},on:{click:a.updateCharts}},[e("div",[e("h3",{staticClass:"title"},[a._v("Pie Chart")]),e("pie-chart",{attrs:{info:a.data,update:a.update}})],1)]),e("v-tab-item",{attrs:{value:"tab3"},on:{click:a.updateCharts}},[e("div",[e("h3",{staticClass:"title"},[a._v("Table Chart")]),e("table-chart",{attrs:{info:a.data,update:a.update}})],1)])],1)],1)},T=[],S=(e("4160"),e("159b"),e("92ea")),P={extends:S["a"],props:["info","update"],watch:{update:function(){1==this.update[this.update.length-1]&&(this.sync(),this.renderChart(this.chartData,this.options))}},data:function(){return{color1:"rgba(75, 192, 192, 0.2)",color2:"rgba(75, 192, 192, 1)",chartData:{labels:null,datasets:[{label:"Number Frequency",borderWidth:1,backgroundColor:[],borderColor:[],pointBorderColor:"#2554FF",data:null}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!0}}],xAxes:[{gridLines:{display:!1}}]},legend:{display:!0},responsive:!0,maintainAspectRatio:!1}}},methods:{sync:function(){this.chartData.datasets[0].backgroundColor=[],this.chartData.datasets[0].borderColor=[];for(var a=0;a<this.info.size;a++)this.chartData.datasets[0].backgroundColor.push(this.color1),this.chartData.datasets[0].borderColor.push(this.color2);this.chartData.labels=this.info.labels,this.chartData.datasets[0].data=this.info.freqArray}},mounted:function(){this.sync(),this.renderChart(this.chartData,this.options)}},V=P,F=Object(d["a"])(V,w,x,!1,null,null,null),M=F.exports,E={extends:S["b"],props:["info","update"],watch:{update:function(){1==this.update[this.update.length-1]&&(this.sync(),this.renderChart(this.chartData,this.options))}},data:function(){return{colors1:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)"],colors2:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)"],chartData:{labels:null,datasets:[{borderWidth:1,borderColor:[],backgroundColor:[],data:null}]},options:{legend:{display:!0},responsive:!0,maintainAspectRatio:!1}}},methods:{sync:function(){this.chartData.datasets[0].backgroundColor=[],this.chartData.datasets[0].borderColor=[];for(var a=0;a<this.info.size;a++){var t=a%4;this.chartData.datasets[0].backgroundColor.push(this.colors1[t]),this.chartData.datasets[0].borderColor.push(this.colors2[t])}this.chartData.labels=this.info.labels,this.chartData.datasets[0].data=this.info.freqArray}},mounted:function(){this.sync(),this.renderChart(this.chartData,this.options)}},N=E,I=Object(d["a"])(N,z,q,!1,null,null,null),B=I.exports,L=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-simple-table",{attrs:{dense:"","fixed-header":""},scopedSlots:a._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-center"},[a._v("Num")]),e("th",{staticClass:"text-center"},[a._v("Freq.")]),e("th",{staticClass:"text-center"},[a._v("Ac.Freq.")]),e("th",{staticClass:"text-center"},[a._v("Prob.")]),e("th",{staticClass:"text-center"},[a._v("Ac.Prob")])])]),e("tbody",a._l(a.tabledata,(function(t){return e("tr",{key:t.name},[e("td",[a._v(a._s(t.number))]),e("td",[a._v(a._s(t.freq))]),e("td",[a._v(a._s(t.freqac))]),e("td",[a._v(a._s(t.prob))]),e("td",[a._v(a._s(t.probac))])])})),0)]},proxy:!0}])})},H=[],J={props:["info","update"],watch:{update:function(){1==this.update[this.update.length-1]&&this.sync()}},data:function(){return{tabledata:[]}},methods:{sync:function(){this.tabledata=[];for(var a=0;a<this.info.size;a++){var t={number:this.info.labels[a],freq:this.info.freqArray[a],freqac:this.info.freqacArray[a],prob:this.info.probArray[a],probac:this.info.probacArray[a]};this.tabledata.push(t)}}},mounted:function(){this.sync()}},$=J,U=(e("f953"),e("1f4f")),R=Object(d["a"])($,L,H,!1,null,null,null),K=R.exports;b()(R,{VSimpleTable:U["a"]});var W=e("260b"),Y=(e("66ce"),{apiKey:"AIzaSyC7ngsEHdQb_ythi-lTtooSaYST4JidfW4",authDomain:"falldetection-bee2b.firebaseapp.com",databaseURL:"https://falldetection-bee2b.firebaseio.com",projectId:"falldetection-bee2b",storageBucket:"falldetection-bee2b.appspot.com",messagingSenderId:"534305138098",appId:"1:534305138098:web:4d64b351f7b362dcc830ab",measurementId:"G-HK9H83CKTZ"});W["a"].initializeApp(Y);var Z=W["a"].database(),G={name:"Home",components:{BarChart:M,PieChart:B,TableChart:K},data:function(){return{time:null,tabs:null,update:[],data:{size:null,labels:[],freqArray:[],freqacArray:[],probArray:[],probacArray:[]}}},watch:{tabs:function(){this.updateCharts()}},methods:{updateCharts:function(){console.log(22);var a=Date.now(),t=new Date(a),e=["January","February","March","April","May","June","July","August","September","October","November","December"],s=t.getDate()+" "+e[t.getMonth()]+" "+t.getFullYear()+" - "+t.getHours()+":"+(t.getMinutes()<10?"0":"")+t.getMinutes()+":"+(t.getSeconds()<10?"0":"")+t.getSeconds();this.time="Updated on: "+s,this.callFirebase()},callFirebase:function(){var a=this,t=[];this.data.labels=[],this.data.freqArray=[],this.data.freqacArray=[],this.data.probArray=[],this.data.probacArray=[],Z.ref("/").once("value",(function(e){e.forEach((function(a){t.push(a.val())}));for(var s=5;s<=40;s++)a.data.labels.push(s);for(var r=0;r<a.data.labels.length;r++)a.data.freqArray[r]=0;for(var n=0;n<t.length;n++)a.data.freqArray[t[n]-5]++;a.data.freqacArray[0]=a.data.freqArray[0];for(var o=1;o<a.data.labels.length;o++)a.data.freqacArray[o]=a.data.freqacArray[o-1]+a.data.freqArray[o];for(var c=0;c<a.data.labels.length;c++)a.data.probArray[c]=Math.round(a.data.freqArray[c]/a.data.freqacArray[a.data.labels.length-1]*1e6)/1e6;a.data.probacArray[0]=a.data.probArray[0];for(var i=1;i<a.data.labels.length;i++)a.data.probacArray[i]=Math.round(1e6*(a.data.probacArray[i-1]+a.data.probArray[i]))/1e6;a.data.size=a.data.labels.length,a.update.push(!0)}))}},created:function(){this.updateCharts()}},Q=G,X=e("8336"),aa=e("b0af"),ta=e("132d"),ea=e("71a3"),sa=e("c671"),ra=e("fe57"),na=e("aac8"),oa=e("9a96"),ca=Object(d["a"])(Q,O,T,!1,null,null,null),ia=ca.exports;b()(ca,{VBtn:X["a"],VCard:aa["a"],VIcon:ta["a"],VTab:ea["a"],VTabItem:sa["a"],VTabs:ra["a"],VTabsItems:na["a"],VTabsSlider:oa["a"]}),s["a"].use(D["a"]);var la=[{path:"/",name:"Home",component:ia}],da=new D["a"]({mode:"history",base:"/",routes:la}),fa=da,ba=e("f309");s["a"].use(ba["a"]);var ua=new ba["a"]({});s["a"].config.productionTip=!1,new s["a"]({router:fa,vuetify:ua,render:function(a){return a(A)}}).$mount("#app")},"5c0b":function(a,t,e){"use strict";e("9c0c")},"893e":function(a,t,e){},"9c0c":function(a,t,e){},f953:function(a,t,e){"use strict";e("893e")}});
//# sourceMappingURL=app.7d7b32e5.js.map