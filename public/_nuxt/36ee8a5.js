(window.webpackJsonp=window.webpackJsonp||[]).push([[10,7],{240:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{title:{type:String,required:!0},subtitle:{type:String,required:!0}}}),l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("p",{staticClass:"mt-1 text-xl text-gray-600 sm:mt-2"},[t._v("\n    "+t._s(t.subtitle)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},247:function(t,e,n){"use strict";n.r(e);var r=n(7),l=(n(52),{components:{SectionTitle:n(240).default},data:function(){return{postsAreas:[]}},beforeMount:function(){this.getAreas()},methods:{getAreas:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$supabase.from("area").select("*");case 2:n=e.sent,r=n.data,n.error,t.postsAreas=r;case 6:case"end":return e.stop()}}),e)})))()},hrefLink:function(t){return"area/"+t}}}),o=n(10),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"bg-white pb-20 px-8 sm:px-12 lg:pt-10 lg:pb-28 lg:px-16"},[n("section-title",{attrs:{title:"Areas",subtitle:"Some areas"}}),t._v(" "),n("div",{staticClass:"mt-10 flex flex-col gap-8"},t._l(this.postsAreas,(function(area){return n("div",{key:area.id,staticClass:"\n          bg-cover\n          flex\n          items-center\n          justify-center\n          py-16\n          bg-gray-50\n          border border-gray-400\n          shadow-lg\n          rounded-lg\n          relative\n        ",style:{backgroundImage:"url("+area.image_url+")"}},[n("div",{staticClass:"absolute inset-0 bg-indigo-900 opacity-75 rounded-lg"}),t._v(" "),n("div",{staticClass:"z-50 text-center"},[n("a",{staticClass:"hover:underline text-white",attrs:{href:t.hrefLink(area.id)}},[n("h2",{staticClass:"font-bold text-6xl text-white tracking-wider"},[t._v("\n              "+t._s(area.name)+"\n            ")]),t._v(" "),n("p",{staticClass:"font-medium text-2xl text-white"},[t._v("\n              "+t._s(area.description)+"\n            ")])])])])})),0)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitle:n(240).default})}}]);