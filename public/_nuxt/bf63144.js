(window.webpackJsonp=window.webpackJsonp||[]).push([[12,2,7],{240:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{title:{type:String,required:!0},subtitle:{type:String,required:!0}}}),l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("p",{staticClass:"mt-1 text-xl text-gray-600 sm:mt-2"},[t._v("\n    "+t._s(t.subtitle)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},241:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{section:{type:String,required:!0},link1:{type:String,required:!0},link2:{type:String,required:!0}}}),l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex gap-10 items-center"},[n("div",{staticClass:"flex-1"},[n("span",{staticClass:"font-bold tracking-widest text-xl font-gray-800"},[t._v(t._s(t.section))])]),t._v(" "),n("div",{staticClass:"flex gap-8"},[n("span",{staticClass:"\n        font-bold\n        px-8\n        rounded-md\n        py-2\n        border border-gray-400\n        bg-indigo-700\n        text-white\n        shadow\n      "},[t._v(t._s(t.link1))]),t._v(" "),n("span",{staticClass:"\n        font-bold\n        px-8\n        rounded-md\n        py-2\n        border border-gray-400\n        bg-indigo-700\n        text-white\n        shadow\n      "},[t._v(t._s(t.link2))])])])}),[],!1,null,null,null);e.default=component.exports},251:function(t,e,n){"use strict";n.r(e);var r=n(7),l=(n(52),n(241)),o={components:{SectionTitle:n(240).default,OrientationInfo:l.default},data:function(){return{singleMember:{}}},beforeMount:function(){var t=this.$route.params.singlemember;this.getSingleMember(t)},methods:{getSingleMember:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$supabase.from("member").select("*").eq("id",t).single();case 2:r=n.sent,l=r.data,r.error,e.singleMember=l;case 6:case"end":return n.stop()}}),n)})))()}}},c=n(10),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"bg-white pb-20 px-8 sm:px-12 lg:pt-10 lg:pb-28 lg:px-16"},[n("orientation-info",{attrs:{section:"Area / Domotics",link1:"Areas",link2:"Managers"}}),t._v(" "),n("div",{staticClass:"my-10"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"\n            bg-cover\n            h-60\n            w-60\n            bg-gray-300\n            border border-gray-400\n            rounded-lg\n            shadow-lg\n          ",style:{backgroundImage:"url("+t.singleMember.image_url+")"}}),t._v(" "),n("div",{staticClass:"p-10"},[n("h2",{staticClass:"font-bold text-5xl tracking-wider"},[t._v("\n            "+t._s(t.singleMember.name+" "+t.singleMember.surname)+"\n          ")]),t._v(" "),n("p",{staticClass:"font-medium text-lg"},[t._v(t._s(t.singleMember.role))]),t._v(" "),n("p",{staticClass:"font-light text-md"},[t._v(t._s(t.singleMember.quote))])])])]),t._v(" "),n("div",{staticClass:"flex flex-col gap-10"},[n("div",[n("section-title",{attrs:{title:"Bio",subtitle:t.singleMember.bio}})],1),t._v(" "),n("div",[n("section-title",{attrs:{title:"Education",subtitle:t.singleMember.education}})],1),t._v(" "),n("div",[n("section-title",{attrs:{title:"Work",subtitle:t.singleMember.work}})],1)])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OrientationInfo:n(241).default,SectionTitle:n(240).default})}}]);