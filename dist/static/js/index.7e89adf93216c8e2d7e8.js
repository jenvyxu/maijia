webpackJsonp([2],{"035s":function(t,e){},"97Sy":function(t,e){},TFhR:function(t,e,a){"use strict";var s,n=a("bOdI"),i=a.n(n),r=(s={hotLists:"/index/hotLists",banner:"/index/banner",topLists:"/category/topLists",subLists:"/category/subLists",rank:"/category/rank",searchLists:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",cartAdd:"/cart/add"},i()(s,"cartReduce","/cart/reduce"),i()(s,"cartUpdate","/cart/update"),i()(s,"addressLists","/address/list"),i()(s,"addressAdd","/address/add"),i()(s,"addressRemove","/address/remove"),i()(s,"addressUpdate","/address/update"),i()(s,"addressSetDefault","/address/setDefault"),s);for(var c in r)r.hasOwnProperty(c)&&(r[c]="https://mockapi.eolinker.com/GYx5mS96d079826f9913e75ceb3606e774a72480c695c48"+r[c]);e.a=r},U67u:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("97Sy"),n=(a.n(s),a("bCKv")),i=a.n(n),r=a("eChN"),c=(a.n(r),a("035s")),o=(a.n(c),a("7+uW")),d=a("mtWM"),l=a.n(d),u=a("TFhR"),h=a("nq5D"),p=a("gN+L");o.default.use(i.a),new o.default({el:"#app",data:{lists:null,pageNum:1,pageSize:6,loading:!1,allLoaded:!1,bannerLists:null},created:function(){this.getLists(),this.getBanner()},methods:{getLists:function(){var t=this;this.allLoaded||(this.loading=!0,l.a.post(u.a.hotLists,{pageNum:this.pageNum,pageSize:this.pageSize}).then(function(e){var a=e.data.lists;a.length<t.pageSize&&(t.allLoaded=!0),t.lists?t.lists=t.lists.concat(a):t.lists=a,t.loading=!1,t.pageNum++}))},getBanner:function(){var t=this;l.a.get(u.a.banner).then(function(e){t.bannerLists=e.data.lists})}},components:{Foot:h.a,Swipe:p.a}})},eChN:function(t,e){},"gN+L":function(t,e,a){"use strict";var s=a("DNVT"),n=(a("v2ns"),{name:"swipe",props:{lists:{required:!0},name:{}},methods:{createSwipe:function(){new s.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"},autoplay:{delay:4e3},speed:800})}},mounted:function(){var t=this;console.log(this.lists),this.lists?this.createSwipe():this.$watch("lists",function(e,a){t.createSwipe()})}}),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},this._l(this.lists,function(t){return e("div",{staticClass:"swp-page swiper-slide"},[e("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[e("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.image}})])])}),0),this._v(" "),e("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]};var r=a("VU/8")(n,i,!1,function(t){a("zvSg")},null,null);e.a=r.exports},nq5D:function(t,e,a){"use strict";var s=a("mw3O"),n=a.n(s).a.parse(location.search.substr(1)).index,i=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"有赞",icon:"icon-user",href:"member.html"}],r={data:function(){return{navConfig:i,curIndex:parseInt(n)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.navConfig,function(e,s){return a("li",{class:{active:s===t.curIndex},on:{click:function(a){return t.changeNav(e,s)}}},[a("a",[a("i",{class:e.icon}),t._v(" "),a("div",[t._v(t._s(e.name))])])])}),0)])},staticRenderFns:[]};var o=a("VU/8")(r,c,!1,function(t){a("u+Uv")},null,null);e.a=o.exports},"u+Uv":function(t,e){},v2ns:function(t,e){},zvSg:function(t,e){}},["U67u"]);
//# sourceMappingURL=index.7e89adf93216c8e2d7e8.js.map