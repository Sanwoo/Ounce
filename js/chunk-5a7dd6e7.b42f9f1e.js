(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a7dd6e7"],{"093a":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));a("99af");var n=a("f344");a("466f");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Object(n["a"])("video/timeline/recommend?offset=".concat(t))}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Object(n["a"])("comment/video?id=".concat(t,"&limit=").concat(e,"&offset=").concat(a))}},"177c":function(t,e,a){"use strict";var n=a("712c"),i=a.n(n);i.a},"18b4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.detail?a("div",{ref:"contain",staticClass:"video-detail"},[a("BreakHeader",{attrs:{fixed:""}}),a("SingleVideo",{staticClass:"_player",class:{_active:t.flags.popup},attrs:{isControllable:!t.flags.popup,src:t.detail.urlInfo.url},nativeOn:{click:function(e){return t.closePopup(e)}}}),a("transition",{attrs:{"enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},[a("aside",{directives:[{name:"show",rawName:"v-show",value:t.flags.contain&&!t.flags.popup,expression:"flags.contain && !flags.popup"}],staticClass:"_tools"},[a("div",{staticClass:"_tools-avatar",on:{click:t.toCreator}},[a("img",{attrs:{src:t.creator.avatarUrl,alt:""}}),a("span",[t._v("关注")])]),a("ul",{staticClass:"_tools-items"},[a("li",{on:{click:t.praiseHanlder}},[a("i",{staticClass:"fa fa-thumbs-up",class:{"praised-active":t.flags.isPraised}}),t._v(" "+t._s(t.detail.praisedCount)+" ")]),a("li",{on:{click:function(e){t.flags.popup=!0}}},[a("i",{staticClass:"fa fa-commenting"}),t._v(" "+t._s(t.detail.commentCount)+" ")]),a("li",[a("i",{staticClass:"fa fa-share-alt"}),t._v(" "+t._s(t.detail.shareCount)+" ")])])])]),a("footer",{directives:[{name:"show",rawName:"v-show",value:t.flags.contain&&!t.flags.popup,expression:"flags.contain && !flags.popup"}],staticClass:"_creator"},[a("b",{on:{click:t.toCreator}},[t._v("@"+t._s(t.creator.nickname))]),a("p",{staticClass:"paragraph-truncate"},[t._v(t._s(t.detail.title))])]),a("VdPopup",{attrs:{visiable:t.flags.popup,videoId:t.detail.vid},on:{"update:visiable":function(e){return t.$set(t.flags,"popup",e)}}})],1):t._e()},i=[],s=(a("99af"),a("ac1f"),a("5377"),a("5319"),a("53ca")),o=a("6efb"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"video-detail-popup",class:{_active:t.visiable}},[a("div",{staticClass:"_popup-title"},[t._v(" 评论 "),a("span",[t._v("("+t._s(96)+")")])]),t.visiable?a("BotLoadRequest",{staticClass:"_popup-contain",attrs:{offset:"",request:t.moreComment,resword:"comments"},scopedSlots:t._u([{key:"contain",fn:function(e){var n=e.curdata;return[t.hasDefComments?a("div",{staticClass:"_def"},[a("p",[t._v("最新评论")]),a("ul",t._l(n,(function(t,e){return a("CommentlistCard",{key:e,attrs:{info:t}})})),1)]):t._e()]}}],null,!1,817618080)},[t.hasHotComments?a("div",{staticClass:"_hot"},[a("p",[t._v("精彩评论")]),a("ul",t._l(t.comment.hot,(function(t,e){return a("CommentlistCard",{key:e,attrs:{info:t}})})),1)]):t._e()]):t._e()],1)},c=[],l=(a("fb6a"),a("093a")),u=a("78b8"),d={name:"videodetailpopup",components:{CommentlistCard:u["a"]},props:{visiable:{type:Boolean,default:!1},videoId:String},watch:{},data:function(){return{comment:{top:[],def:[],hot:[]}}},computed:{hasDefComments:function(){return this.comment.def.length>0},hasHotComments:function(){return this.comment.hot.length>0},hasTopComments:function(){return this.comment.top.length>0}},mounted:function(){this.mainRequset()},methods:{mainRequset:function(){var t=this;Object(l["b"])(this.videoId).then((function(e){t.initComment(e.data)}))},moreComment:function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return l["b"].apply(void 0,[this.videoId].concat(e))},initComment:function(t){var e=t.comments,a=t.hotComments;t.topComments;this.comment.hot=a.slice(0,5),this.comment.def=e},close:function(){console.log("close"),this.$emit("update:visiable",!1)}}},f=d,p=(a("177c"),a("2877")),m=Object(p["a"])(f,r,c,!1,null,"5b02fa6e",null),v=m.exports,h={name:"videodetail",components:{SingleVideo:o["a"],VdPopup:v},data:function(){return{flags:{contain:!1,isPraised:!1,popup:!1}}},computed:{detail:function(){var t=this.$route.query.detail;return"object"===Object(s["a"])(t)&&t},enterPos:function(){var t=this.$route.query.pos;return"object"===Object(s["a"])(t)&&t},creator:function(){return this.detail.creator}},mounted:function(){var t=this;if(!this.detail)return this.$router.replace("/home");this.anmCounter(),setTimeout((function(e){return t.flags.contain=!0}),500)},methods:{anmCounter:function(){if(this.enterPos){var t=this.$refs.contain;this.anmHandler(t,this.enterPos,t.getBoundingClientRect())}},anmHandler:function(t,e,a){var n=e.x-a.x,i=e.y-a.y,s=[{transform:"translate3d(".concat(n,"px, ").concat(i,"px,0)"),width:"".concat(e.width,"px"),height:"".concat(e.height,"px")},{transform:"translate3d(0,0,0)",width:"".concat(a.width,"px"),height:"".concat(a.height,"px")}],o={duration:400};t.animate(s,o)},praiseHanlder:function(){this.flags.isPraised=!this.flags.isPraised},closePopup:function(){this.flags.popup=!1},toCreator:function(){this.toMainPage("/home/userdetail",this.creator.userId)}}},g=h,_=(a("29a1"),Object(p["a"])(g,n,i,!1,null,"52d37df8",null));e["default"]=_.exports},2191:function(t,e,a){"use strict";var n=a("c2a7"),i=a.n(n);i.a},"29a1":function(t,e,a){"use strict";var n=a("db8a"),i=a.n(n);i.a},"3e83":function(t,e,a){"use strict";var n=a("d2b8"),i=a.n(n);i.a},5377:function(t,e,a){var n=a("83ab"),i=a("9bf2"),s=a("ad6d"),o=a("9f7f").UNSUPPORTED_Y;n&&("g"!=/./g.flags||o)&&i.f(RegExp.prototype,"flags",{configurable:!0,get:s})},"53ca":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("a4d3"),a("e01a"),a("d28b"),a("e260"),a("d3b7"),a("3ca3"),a("ddb0");function n(t){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}},"6efb":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"single-video",on:{click:t.playHandler}},[a("video",{ref:"video",attrs:{src:t.src}}),a("transition",{attrs:{"enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.play.switch&&t.play.load,expression:"!play.switch && play.load"}],staticClass:"_handler van-icon",class:[t.play.switch?"van-icon-pause":"van-icon-play"]})]),t.play.load?t._e():a("van-loading",{staticClass:"_handler"})],1)},i=[],s={name:"singlevideo",props:{src:String,isControllable:{type:Boolean,default:!0}},data:function(){return{play:{switch:!1,load:!1}}},watch:{"play.switch":function(t){var e=this.$refs.video;t?e.play():e.pause(),this.$emit("statusHanlder",t)}},computed:{},mounted:function(){this.addEvents()},beforeDestroy:function(){this.removeEvents()},methods:{playHandler:function(){if(this.isControllable)return this.play.load?void(this.play.switch=!this.play.switch):this.$toast("加载中..")},pause:function(){this.play.switch=!1},addEvents:function(){var t=this.$refs.video;t.addEventListener("canplay",this.canPlayEvent)},removeEvents:function(){var t=this.$refs.video;t.removeEventListener("canplay",this.canPlayEvent)},canPlayEvent:function(){this.play.load=!0}}},o=s,r=(a("2191"),a("2877")),c=Object(r["a"])(o,n,i,!1,null,"3dc35d2f",null);e["a"]=c.exports},"712c":function(t,e,a){},"78b8":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"comment-list-card"},[a("div",{staticClass:"_avatar",on:{click:function(e){return t.toMainPage("/home/userdetail",t.info.user.userId)}}},[t.info.user.avatarUrl?a("img",{directives:[{name:"img-lazyload",rawName:"v-img-lazyload"}],attrs:{src:t.info.user.avatarUrl+t.squareImgSize,alt:""}}):t._e()]),a("div",{staticClass:"_content"},[a("div",{staticClass:"_content-title"},[a("div",[a("p",[t._v(" "+t._s(t.info.user.nickname)+" "),t.isAuthor?a("a",[t._v("作者")]):t._e()]),a("span",[t._v(t._s(t._f("msToDate")(t.info.time)))])]),a("span",[a("a",[t._v(t._s(t._f("numFormat")(t.info.likedCount)))]),a("i",{staticClass:"van-icon van-icon-good-job-o"})])]),a("pre",{staticClass:"_content-text",domProps:{innerHTML:t._s(t.info.content)}})])])},i=[],s=(a("99af"),a("a9e3"),{name:"commentlistcard",props:{info:Object,pageId:{type:[Number,String],default:0}},filters:{msToDate:function(t){var e=new Date(t);return"".concat(e.getFullYear(),"年").concat(e.getMonth()+1,"月").concat(e.getDay(),"日")}},computed:{isAuthor:function(){return this.pageId==this.info.user.userId}},data:function(){return{}},mounted:function(){}}),o=s,r=(a("3e83"),a("2877")),c=Object(r["a"])(o,n,i,!1,null,"32d6ae98",null);e["a"]=c.exports},c2a7:function(t,e,a){},d2b8:function(t,e,a){},db8a:function(t,e,a){}}]);