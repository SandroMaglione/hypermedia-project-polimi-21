(window.webpackJsonp=window.webpackJsonp||[]).push([[15,3],{202:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{title:{type:String,required:!0},subtitle:{type:String,required:!0}}}),c=r(10),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),r("p",{staticClass:"mt-1 text-xl text-gray-600 sm:mt-2"},[t._v("\n    "+t._s(t.subtitle)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},211:function(t,e,r){"use strict";r.r(e);var n=r(7),c=(r(34),r(58),r(59),r(37),r(44),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$supabase,e.next=3,r.from("product").select();case 3:return n=e.sent,c=n.data,e.abrupt("return",{postsProducts:c});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{postsProducts:[],searchText:""}},head:function(){return{title:"Products",meta:[{hid:"description",name:"description",content:"My custom description"}]}},computed:{searchProduct:function(){var t=this;return this.postsProducts.filter((function(e){return""===t.searchText||e.name.toLowerCase().includes(t.searchText.toLowerCase())}))}},methods:{updateSearch:function(t){this.searchText=t.target.value},hrefLink:function(t){return"product/"+t}}}),l=r(10),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"bg-white pb-20 px-8 sm:px-12 lg:pt-10 lg:pb-28 lg:px-16"},[r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"flex-1"},[r("base-section-title",{attrs:{title:"Products",subtitle:"Some products"}})],1),t._v(" "),r("div",{staticClass:"flex-none"},[r("input",{staticClass:"px-5 py-1.5 border border-gray-200 tracking-wide",attrs:{id:"search",type:"text",name:"search",placeholder:"Search by name"},domProps:{value:t.searchText},on:{input:t.updateSearch}})])]),t._v(" "),r("div",{staticClass:"mt-10 flex gap-8 flex-col"},t._l(this.searchProduct,(function(e){return r("div",{key:e.id,staticClass:"\n          flex\n          justify-center\n          bg-indigo-900\n          border border-gray-400\n          rounded-lg\n          shadow-lg\n        "},[r("div",{staticClass:"flex-1 h-72"},[r("img",{staticClass:"h-72 w-full object-cover",attrs:{src:e.image_url,alt:e.image_url}})]),t._v(" "),r("div",{staticClass:"flex-1 p-10"},[r("a",{attrs:{href:t.hrefLink(e.id)}},[r("h2",{staticClass:"font-black text-5xl text-white"},[t._v(t._s(e.name))]),t._v(" "),r("p",{staticClass:"font-medium text-2xl text-white"},[t._v("\n              "+t._s(e.description)+"\n            ")])])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseSectionTitle:r(202).default})}}]);