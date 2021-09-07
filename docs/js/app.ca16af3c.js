(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],f=0,m=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(m.length)m.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,s=1;s<o.length;s++){var c=o[s];0!==r[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={app:0},a=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/reading-recorder/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"0adf":function(e,t,o){"use strict";o("67f8")},"0c36":function(e,t,o){},"1ec8":function(e,t,o){"use strict";o("0c36")},4034:function(e,t,o){"use strict";o("838c")},5244:function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("d3b7");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-app-bar",{attrs:{color:"blue lighten-2",dense:"",dark:"",app:""}},[o("v-toolbar-title",[e._v("My Books ～読んだ本リスト～")]),o("v-spacer"),o("v-btn",{attrs:{icon:"",text:"",to:"/"}},[o("v-icon",[e._v("mdi-home")])],1),o("v-btn",{attrs:{icon:"",text:"",to:"/search"}},[o("v-icon",[e._v("mdi-magnify")])],1)],1),o("v-main",[o("router-view")],1),o("v-footer",{attrs:{color:"blue lighten-2",dark:"",app:""}},[e._v(" ©2021 usuge-engineer ")])],1)},a=[],i={name:"app"},s=i,c=(o("034f"),o("2877")),l=o("6544"),u=o.n(l),f=o("7496"),m=o("40dc"),d=o("8336"),b=o("553a"),v=o("132d"),p=o("f6c4"),h=o("2fa4"),k=o("2a7f"),g=Object(c["a"])(s,r,a,!1,null,null,null),y=g.exports;u()(g,{VApp:f["a"],VAppBar:m["a"],VBtn:d["a"],VFooter:b["a"],VIcon:v["a"],VMain:p["a"],VSpacer:h["a"],VToolbarTitle:k["a"]});var _=o("8c4f"),O=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"search"}},[o("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-text-field",{attrs:{label:"Search Words",type:"text",rules:e.searchRules,required:""},scopedSlots:e._u([{key:"append-outer",fn:function(){return[o("v-btn",{attrs:{color:"primary"},on:{click:e.onclick}},[e._v("検索")])]},proxy:!0}]),model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)],1)],1)],1),o("v-overlay",{attrs:{value:e.overlay}},[o("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),o("hr"),e._l(e.books,(function(e,t){return o("BookInfo",{key:e.isbn,attrs:{linkable:!0,book:e,index:t+1}})}))],2)},w=[],x=o("b85c"),j=(o("a15b"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"clearfix",class:{linkable:e.linkable},on:{click:e.onclick}},[o("div",{staticClass:"image"},[o("img",{attrs:{src:e.book.image}})]),o("div",{staticClass:"details"},[o("ul",[e.index?o("li",[e._v(e._s(e.index)+".")]):e._e(),o("li",[e._v(e._s(e.book.title)+" ("+e._s(e.book.price)+"円)")]),o("li",[e._v(e._s(e.book.author))]),o("li",[e._v(e._s(e.book.publisher))]),o("li",[e._v(e._s(e.book.published))])])])])}),V=[],B=o("5530"),I=(o("a9e3"),o("2f62")),C="updateCurrent",$="updateBook",S=3,P={name:"book-info",props:{index:{type:Number},linkable:{type:Boolean,default:!1},book:{type:Object}},methods:Object(B["a"])(Object(B["a"])({},Object(I["b"])([C])),{},{onclick:function(){this.linkable&&(this[C](this.book),this.$router.push("/form"))}})},R=P,T=(o("1ec8"),Object(c["a"])(R,j,V,!1,null,"60b198e0",null)),D=T.exports,M={name:"book-search",components:{BookInfo:D},data:function(){return{valid:!1,overlay:!1,keyword:"vue.js",books:[],searchRules:[function(e){return!!e||"Search Wordは必須入力です。"}]}},methods:{onclick:function(){var e=this;this.$refs.form.validate()&&(this.overlay=!0,this.$http("https://www.googleapis.com/books/v1/volumes?q="+this.keyword).then((function(e){return e.json()})).then((function(t){e.books=[];var o,n=Object(x["a"])(t.items);try{for(n.s();!(o=n.n()).done;){var r=o.value,a=r.volumeInfo.authors,i=r.saleInfo.listPrice,s=r.volumeInfo.imageLinks;e.books.push({id:r.id,title:r.volumeInfo.title,author:a?a.join(","):"",price:i?i.amount:"-",publisher:r.volumeInfo.publisher,published:r.volumeInfo.publishedDate,image:s?s.smallThumbnail:""})}}catch(c){n.e(c)}finally{n.f()}e.overlay=!1})))}}},z=M,E=(o("cf62"),o("62ad")),F=o("a523"),L=o("4bd4"),A=o("a797"),q=o("490a"),J=o("0fd9"),N=o("8654"),W=Object(c["a"])(z,O,w,!1,null,"d5aa4666",null),H=W.exports;u()(W,{VBtn:d["a"],VCol:E["a"],VContainer:F["a"],VForm:L["a"],VOverlay:A["a"],VProgressCircular:q["a"],VRow:J["a"],VTextField:N["a"]});var G=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[o("br"),o("BookInfo",{attrs:{book:e.book}}),o("hr"),o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-rating",{attrs:{"background-color":"orange lighten-3",color:"orange"},model:{value:e.form.rating,callback:function(t){e.$set(e.form,"rating",t)},expression:"form.rating"}})],1),o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-text-field",e._g(e._b({attrs:{label:"読了日","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.form.read,callback:function(t){e.$set(e.form,"read",t)},expression:"form.read"}},"v-text-field",r,!1),n))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[o("v-date-picker",{on:{input:function(t){e.menu2=!1}},model:{value:e.form.read,callback:function(t){e.$set(e.form,"read",t)},expression:"form.read"}})],1)],1),o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-textarea",{staticClass:"mx-2",attrs:{label:"感想",rows:"3",rules:e.memoRules,required:""},model:{value:e.form.memo,callback:function(t){e.$set(e.form,"memo",t)},expression:"form.memo"}})],1)],1),o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-btn",{attrs:{color:"primary"},on:{click:e.onsubmit}},[e._v("登録")])],1)],1)],1)],1)},K=[],Q={name:"book-form",components:{BookInfo:D},data:function(){return{valid:!0,book:{},form:{read:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),rating:3,memo:""},memoRules:[function(e){return!!e||"感想は必須入力です。"}],menu2:!1}},computed:Object(I["c"])(["current","getBookById"]),created:function(){this.current||this.$router.push("/"),this.book=Object.assign({},this.current)},mounted:function(){var e=this.getBookById(this.book.id);e&&(this.form.rating=e.rating,this.form.read=e.read,this.form.memo=e.memo)},methods:Object(B["a"])(Object(B["a"])({},Object(I["b"])([C,$])),{},{onsubmit:function(){this.$refs.form.validate()&&(this[$](Object.assign({},this.book,this.form)),this[C](null),this.form.read=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),this.form.memo="",this.form.rating=3,this.$router.push("/"))}})},U=Q,X=(o("4034"),o("2e4b")),Y=o("e449"),Z=o("1d4d"),ee=o("a844"),te=Object(c["a"])(U,G,K,!1,null,"1dc1b963",null),oe=te.exports;u()(te,{VBtn:d["a"],VCol:E["a"],VContainer:F["a"],VDatePicker:X["a"],VForm:L["a"],VMenu:Y["a"],VRating:Z["a"],VRow:J["a"],VTextField:N["a"],VTextarea:ee["a"]});var ne=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"list"},[o("v-alert",{attrs:{outlined:"",type:"info",prominent:"",border:"left",dense:"",dismissible:""}},[e._v(" "+e._s(e.bookCount)+"件の読書情報が記録されています。 ")]),e._l(e.books,(function(e,t){return o("ReviewInfo",{key:e.id,attrs:{linkable:!0,book:e,index:t+1}})})),e.show?o("div",{staticClass:"text-center"},[o("v-pagination",{attrs:{circle:"",length:e.length},on:{input:e.onchange},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1):e._e()],2)},re=[],ae=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-card",{staticClass:"ma-2",class:{linkable:e.linkable},attrs:{elevation:"6"},on:{click:e.onclick}},[o("v-list-item",{attrs:{"two-line":""}},[o("v-list-item-avatar",{attrs:{tile:"",left:"",size:"100"}},[o("img",{attrs:{src:e.book.image}})]),o("v-list-item-content",[o("v-list-item-title",{staticClass:"headline mb-1"},[e._v(" "+e._s(e.book.title)+" ")]),o("v-list-item-subtitle",[e._v(e._s(e.book.memo))])],1)],1)],1)},ie=[],se={name:"review-info",props:{index:{type:Number},linkable:{type:Boolean,default:!1},book:{type:Object}},methods:Object(B["a"])(Object(B["a"])({},Object(I["b"])([C])),{},{onclick:function(){this.linkable&&(this[C](this.book),this.$router.push("/form"))}})},ce=se,le=(o("0adf"),o("b0af")),ue=o("da13"),fe=o("8270"),me=o("5d23"),de=Object(c["a"])(ce,ae,ie,!1,null,"36f7c777",null),be=de.exports;u()(de,{VCard:le["a"],VListItem:ue["a"],VListItemAvatar:fe["a"],VListItemContent:me["a"],VListItemSubtitle:me["b"],VListItemTitle:me["c"]});var ve={name:"home",data:function(){return{page:1,length:0,show:!1,books:[]}},components:{ReviewInfo:be},computed:Object(I["c"])(["bookCount","getRangeByPage"]),methods:{onchange:function(e){this.books=this.getRangeByPage(e)}},mounted:function(){this.books=this.getRangeByPage(1),this.length=Math.ceil(this.bookCount/S),this.length>1&&(this.show=!0)}},pe=ve,he=o("0798"),ke=o("891e"),ge=Object(c["a"])(pe,ne,re,!1,null,null,null),ye=ge.exports;u()(ge,{VAlert:he["a"],VPagination:ke["a"]}),n["a"].use(_["a"]);var _e,Oe,we=[{path:"/",name:"Home",component:ye},{path:"/search",name:"Search",component:H},{path:"/form",name:"Form",component:oe},{path:"*",redirect:"/"}],xe=new _["a"]({mode:"history",base:"/reading-recorder/",routes:we}),je=xe,Ve=o("ade3"),Be=(o("fb6a"),o("7db0"),o("0e44"));n["a"].use(I["a"]);var Ie=new I["a"].Store({strict:!0,state:{books:[],current:null},getters:{bookCount:function(e){return e.books.length},allBooks:function(e){return e.books},getRangeByPage:function(e){return function(t){return e.books.slice((t-1)*S,(t-1)*S+S)}},getBookById:function(e){return function(t){return e.books.find((function(e){return e.id===t}))}},current:function(e){return e.current}},mutations:(_e={},Object(Ve["a"])(_e,C,(function(e,t){e.current=t})),Object(Ve["a"])(_e,$,(function(e,t){var o=this.getters.getBookById(t.id);o?Object.assign(o,t):e.books.push(t)})),_e),actions:(Oe={},Object(Ve["a"])(Oe,C,(function(e,t){var o=e.commit;o(C,t)})),Object(Ve["a"])(Oe,$,(function(e,t){var o=e.commit;o($,t)})),Oe),plugins:[Object(Be["a"])({key:"reading-recorder",storage:localStorage})],modules:{}}),Ce=o("f309");n["a"].use(Ce["a"]);var $e=new Ce["a"]({});n["a"].config.productionTip=!1,n["a"].prototype.$http=function(e,t){return fetch(e,t)},new n["a"]({router:je,store:Ie,vuetify:$e,render:function(e){return e(y)}}).$mount("#app")},"67f8":function(e,t,o){},"838c":function(e,t,o){},"85ec":function(e,t,o){},cf62:function(e,t,o){"use strict";o("5244")}});
//# sourceMappingURL=app.ca16af3c.js.map