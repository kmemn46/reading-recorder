(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,s=1;s<o.length;s++){var c=o[s];0!==r[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},a=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/reading-recorder/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"12be":function(t,e,o){"use strict";o("919a")},4034:function(t,e,o){"use strict";o("838c")},"49a1":function(t,e,o){"use strict";o("8afc")},5244:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("d3b7");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-app-bar",{attrs:{color:"blue lighten-2",dense:"",dark:"",app:""}},[o("v-toolbar-title",[t._v("My Books ～読んだ本リスト～")]),o("v-spacer"),o("v-btn",{attrs:{icon:"",text:"",to:"/"}},[o("v-icon",[t._v("mdi-home")])],1),o("v-btn",{attrs:{icon:"",text:"",to:"/search"}},[o("v-icon",[t._v("mdi-magnify")])],1)],1),o("v-main",[o("router-view")],1),o("v-footer",{attrs:{color:"blue lighten-2",dark:"",app:""}},[t._v(" ©2021 usuge-engineer ")])],1)},a=[],i={name:"app"},s=i,c=(o("034f"),o("2877")),l=o("6544"),u=o.n(l),f=o("7496"),d=o("40dc"),m=o("8336"),b=o("553a"),v=o("132d"),p=o("f6c4"),h=o("2fa4"),k=o("2a7f"),g=Object(c["a"])(s,r,a,!1,null,null,null),y=g.exports;u()(g,{VApp:f["a"],VAppBar:d["a"],VBtn:m["a"],VFooter:b["a"],VIcon:v["a"],VMain:p["a"],VSpacer:h["a"],VToolbarTitle:k["a"]});var _=o("8c4f"),x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"search"}},[o("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-text-field",{attrs:{label:"Search Words",type:"text",rules:t.searchRules,required:""},scopedSlots:t._u([{key:"append-outer",fn:function(){return[o("v-btn",{attrs:{color:"primary"},on:{click:t.onclick}},[t._v("検索")])]},proxy:!0}]),model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)],1)],1)],1),o("v-overlay",{attrs:{value:t.overlay}},[o("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),o("hr"),t._l(t.books,(function(t,e){return o("BookInfo",{key:t.isbn,attrs:{linkable:!0,book:t,index:e+1}})}))],2)},O=[],w=o("b85c"),j=(o("a15b"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"clearfix",class:{linkable:t.linkable},on:{click:t.onclick}},[o("div",{staticClass:"image"},[o("img",{attrs:{src:t.book.image}})]),o("div",{staticClass:"details"},[o("ul",[t.index?o("li",[t._v(t._s(t.index)+".")]):t._e(),o("li",[t._v(t._s(t.book.title)+" ("+t._s(t.book.price)+"円)")]),o("li",[t._v(t._s(t.book.author))]),o("li",[t._v(t._s(t.book.publisher))]),o("li",[t._v(t._s(t.book.published))])])])])}),V=[],B=o("5530"),I=(o("a9e3"),o("2f62")),C="updateCurrent",$="updateBook",S="deleteBook",R=3,P={name:"book-info",props:{index:{type:Number},linkable:{type:Boolean,default:!1},book:{type:Object}},methods:Object(B["a"])(Object(B["a"])({},Object(I["b"])([C])),{},{onclick:function(){this.linkable&&(this[C](this.book),this.$router.push("/form"))}})},T=P,D=(o("49a1"),Object(c["a"])(T,j,V,!1,null,"9dd750f0",null)),E=D.exports,M={name:"book-search",components:{BookInfo:E},data:function(){return{valid:!1,overlay:!1,keyword:"vue.js",books:[],searchRules:[function(t){return!!t||"Search Wordは必須入力です。"}]}},methods:{onclick:function(){var t=this;this.$refs.form.validate()&&(this.overlay=!0,this.$http("https://www.googleapis.com/books/v1/volumes?q="+this.keyword).then((function(t){return t.json()})).then((function(e){t.books=[];var o,n=Object(w["a"])(e.items);try{for(n.s();!(o=n.n()).done;){var r=o.value,a=r.volumeInfo.authors,i=r.saleInfo.listPrice,s=r.volumeInfo.imageLinks;t.books.push({id:r.id,title:r.volumeInfo.title,author:a?a.join(","):"",price:i?i.amount:"-",publisher:r.volumeInfo.publisher,published:r.volumeInfo.publishedDate,image:s?s.smallThumbnail:""})}}catch(c){n.e(c)}finally{n.f()}t.overlay=!1})))}}},z=M,F=(o("cf62"),o("62ad")),L=o("a523"),A=o("4bd4"),q=o("a797"),J=o("490a"),N=o("0fd9"),W=o("8654"),H=Object(c["a"])(z,x,O,!1,null,"d5aa4666",null),G=H.exports;u()(H,{VBtn:m["a"],VCol:F["a"],VContainer:L["a"],VForm:A["a"],VOverlay:q["a"],VProgressCircular:J["a"],VRow:N["a"],VTextField:W["a"]});var K=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("br"),o("BookInfo",{attrs:{book:t.book}}),o("hr"),o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-rating",{attrs:{"background-color":"orange lighten-3",color:"orange"},model:{value:t.form.rating,callback:function(e){t.$set(t.form,"rating",e)},expression:"form.rating"}})],1),o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{label:"読了日","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.form.read,callback:function(e){t.$set(t.form,"read",e)},expression:"form.read"}},"v-text-field",r,!1),n))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[o("v-date-picker",{on:{input:function(e){t.menu2=!1}},model:{value:t.form.read,callback:function(e){t.$set(t.form,"read",e)},expression:"form.read"}})],1)],1),o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-textarea",{staticClass:"mx-2",attrs:{label:"感想",rows:"3",rules:t.memoRules,required:""},model:{value:t.form.memo,callback:function(e){t.$set(t.form,"memo",e)},expression:"form.memo"}})],1)],1),o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-btn",{attrs:{color:"primary"},on:{click:t.onsubmit}},[t._v("登録")])],1)],1)],1)],1)},Q=[],U={name:"book-form",components:{BookInfo:E},data:function(){return{valid:!0,book:{},form:{read:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),rating:3,memo:""},memoRules:[function(t){return!!t||"感想は必須入力です。"}],menu2:!1}},computed:Object(I["c"])(["current","getBookById"]),created:function(){this.current||this.$router.push("/"),this.book=Object.assign({},this.current)},mounted:function(){var t=this.getBookById(this.book.id);t&&(this.form.rating=t.rating,this.form.read=t.read,this.form.memo=t.memo)},methods:Object(B["a"])(Object(B["a"])({},Object(I["b"])([C,$])),{},{onsubmit:function(){this.$refs.form.validate()&&(this[$](Object.assign({},this.book,this.form)),this[C](null),this.form.read=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),this.form.memo="",this.form.rating=3,this.$router.push("/"))}})},X=U,Y=(o("4034"),o("2e4b")),Z=o("e449"),tt=o("1d4d"),et=o("a844"),ot=Object(c["a"])(X,K,Q,!1,null,"1dc1b963",null),nt=ot.exports;u()(ot,{VBtn:m["a"],VCol:F["a"],VContainer:L["a"],VDatePicker:Y["a"],VForm:A["a"],VMenu:Z["a"],VRating:tt["a"],VRow:N["a"],VTextField:W["a"],VTextarea:et["a"]});var rt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"list"},[o("v-alert",{attrs:{outlined:"",type:"info",prominent:"",border:"left",dense:"",dismissible:""}},[t._v(" "+t._s(t.bookCount)+"件の読書情報が記録されています。 ")]),t._l(t.books,(function(t,e){return o("ReviewInfo",{key:t.id,attrs:{linkable:!0,book:t,index:e+1}})})),t.show?o("div",{staticClass:"text-center"},[o("v-pagination",{attrs:{circle:"",length:t.length},on:{input:t.onchange},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e()],2)},at=[],it=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"ma-2",class:{linkable:t.linkable},attrs:{elevation:"6"}},[o("v-list-item",{attrs:{"three-line":""}},[o("v-list-item-avatar",{attrs:{tile:"",left:"",size:"80"}},[o("img",{attrs:{src:t.book.image}})]),o("v-list-item-content",[o("div",{staticClass:"text-overline mb-4"},[o("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[o("v-rating",{attrs:{value:t.book.rating,color:"amber",dense:"",readonly:"",size:"20"}}),o("div",{staticClass:"grey--text ms-4"},[t._v(" "+t._s(t.book.read)+" ")])],1)],1),o("v-list-item-title",{staticClass:"text-h5 mb-1"},[t._v(" "+t._s(t.book.title)+" ")]),o("v-list-item-subtitle",[t._v(t._s(t.book.memo))])],1)],1),o("v-card-actions",[o("v-btn",{attrs:{outlined:"",rounded:"",text:"",color:"cyan"},on:{click:t.onclickEdit}},[o("v-icon",[t._v("mdi-pencil")])],1),o("v-btn",{attrs:{outlined:"",rounded:"",text:"",color:"primary"},on:{click:t.onclickDel}},[o("v-icon",[t._v("mdi-delete")])],1)],1)],1)},st=[],ct={name:"review-info",props:{index:{type:Number},linkable:{type:Boolean,default:!1},book:{type:Object}},methods:Object(B["a"])(Object(B["a"])({},Object(I["b"])([C,S])),{},{onclickEdit:function(){this.linkable&&(this[C](this.book),this.$router.push("/form"))},onclickDel:function(){this[S](this.book),this.$router.go({path:this.$router.currentRoute.path,force:!0})}})},lt=ct,ut=(o("12be"),o("b0af")),ft=o("99d9"),dt=o("da13"),mt=o("8270"),bt=o("5d23"),vt=Object(c["a"])(lt,it,st,!1,null,"6badb895",null),pt=vt.exports;u()(vt,{VBtn:m["a"],VCard:ut["a"],VCardActions:ft["a"],VIcon:v["a"],VListItem:dt["a"],VListItemAvatar:mt["a"],VListItemContent:bt["a"],VListItemSubtitle:bt["b"],VListItemTitle:bt["c"],VRating:tt["a"],VRow:N["a"]});var ht={name:"home",data:function(){return{page:1,length:0,show:!1,books:[]}},components:{ReviewInfo:pt},computed:Object(I["c"])(["bookCount","getRangeByPage"]),methods:{onchange:function(t){this.books=this.getRangeByPage(t)}},mounted:function(){this.books=this.getRangeByPage(1),this.length=Math.ceil(this.bookCount/R),this.length>1&&(this.show=!0)}},kt=ht,gt=o("0798"),yt=o("891e"),_t=Object(c["a"])(kt,rt,at,!1,null,null,null),xt=_t.exports;u()(_t,{VAlert:gt["a"],VPagination:yt["a"]}),n["a"].use(_["a"]);var Ot,wt,jt=[{path:"/",name:"Home",component:xt},{path:"/search",name:"Search",component:G},{path:"/form",name:"Form",component:nt},{path:"*",redirect:"/"}],Vt=new _["a"]({mode:"history",base:"/reading-recorder/",routes:jt}),Bt=Vt,It=o("ade3"),Ct=(o("fb6a"),o("7db0"),o("a434"),o("0e44"));n["a"].use(I["a"]);var $t=new I["a"].Store({strict:!0,state:{books:[],current:null},getters:{bookCount:function(t){return t.books.length},allBooks:function(t){return t.books},getRangeByPage:function(t){return function(e){return t.books.slice((e-1)*R,(e-1)*R+R)}},getBookById:function(t){return function(e){return t.books.find((function(t){return t.id===e}))}},current:function(t){return t.current}},mutations:(Ot={},Object(It["a"])(Ot,C,(function(t,e){t.current=e})),Object(It["a"])(Ot,$,(function(t,e){var o=this.getters.getBookById(e.id);o?Object.assign(o,e):t.books.push(e)})),Object(It["a"])(Ot,S,(function(t,e){var o=this.getters.getBookById(e.id);console.log(o),o&&t.books.splice(o,1)})),Ot),actions:(wt={},Object(It["a"])(wt,C,(function(t,e){var o=t.commit;o(C,e)})),Object(It["a"])(wt,$,(function(t,e){var o=t.commit;o($,e)})),Object(It["a"])(wt,S,(function(t,e){var o=t.commit;o(S,e)})),wt),plugins:[Object(Ct["a"])({key:"reading-recorder",storage:localStorage})],modules:{}}),St=o("f309");n["a"].use(St["a"]);var Rt=new St["a"]({});n["a"].config.productionTip=!1,n["a"].prototype.$http=function(t,e){return fetch(t,e)},new n["a"]({router:Bt,store:$t,vuetify:Rt,render:function(t){return t(y)}}).$mount("#app")},"838c":function(t,e,o){},"85ec":function(t,e,o){},"8afc":function(t,e,o){},"919a":function(t,e,o){},cf62:function(t,e,o){"use strict";o("5244")}});
//# sourceMappingURL=app.13ecbd08.js.map