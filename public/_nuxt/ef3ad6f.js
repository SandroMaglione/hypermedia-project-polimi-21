(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3],{202:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{title:{type:String,required:!0},subtitle:{type:String,required:!0}}}),l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("p",{staticClass:"mt-1 text-xl text-gray-600 sm:mt-2"},[t._v("\n    "+t._s(t.subtitle)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},209:function(t,e,n){"use strict";n.r(e);var r=n(7),l=(n(44),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$supabase,e.next=3,n.from("area").select();case 3:return r=e.sent,l=r.data,e.abrupt("return",{postsAreas:l});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{postsAreas:[]}},head:function(){return{title:"Areas",meta:[{hid:"description",name:"description",content:"My custom description"}]}},methods:{hrefLink:function(t){return"area/"+t}}}),c=n(10),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"bg-white pb-20 px-8 sm:px-12 lg:pt-10 lg:pb-28 lg:px-16"},[n("base-section-title",{attrs:{title:"Areas",subtitle:"Some areas"}}),t._v(" "),n("div",{staticClass:"mt-10 flex flex-col gap-8"},t._l(this.postsAreas,(function(area){return n("div",{key:area.id,staticClass:"\n          bg-cover\n          flex\n          items-center\n          justify-center\n          py-16\n          bg-gray-50\n          border border-gray-400\n          shadow-lg\n          rounded-lg\n          relative\n        ",style:{backgroundImage:"url("+area.image_url+")"}},[n("div",{staticClass:"absolute inset-0 bg-indigo-900 opacity-75 rounded-lg"}),t._v(" "),n("div",{staticClass:"z-50 text-center"},[n("a",{staticClass:"hover:underline text-white",attrs:{href:t.hrefLink(area.id)}},[n("h2",{staticClass:"font-bold text-6xl text-white tracking-wider"},[t._v("\n              "+t._s(area.name)+"\n            ")]),t._v(" "),n("p",{staticClass:"font-medium text-2xl text-white"},[t._v("\n              "+t._s(area.description)+"\n            ")])])])])})),0)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseSectionTitle:n(202).default})}}]);