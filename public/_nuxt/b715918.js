(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{202:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{title:{type:String,required:!0},subtitle:{type:String,required:!0}}}),l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("p",{staticClass:"mt-1 text-xl text-gray-600 sm:mt-2"},[t._v("\n    "+t._s(t.subtitle)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},205:function(t,e,n){"use strict";n.r(e);var r=n(0),l=n(202),o=r.a.extend({components:{SectionTitle:l.default},props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},buttontext:{type:String,required:!0},posts:{type:Array,required:!0},href:{type:String,required:!1,default:"#"},subhref:{type:String,required:!1,default:"#"}},data:function(){return{}},methods:{subhrefLink:function(t){return this.subhref+"/"+t}}}),d=n(10),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-white pt-16 pb-20 px-8 sm:px-12 lg:pt-24 lg:pb-28 lg:px-16"},[n("div",{staticClass:"relative max-w-lg mx-auto lg:max-w-7xl"},[n("section-title",{attrs:{title:t.title,subtitle:t.subtitle}}),t._v(" "),n("div",{staticClass:"\n        mt-6\n        grid\n        gap-16\n        pt-12\n        lg:grid-cols-3\n        lg:gap-x-5 lg:gap-y-12\n        border-t border-gray-200\n      "},t._l(t.posts,(function(e){return n("div",{key:e.id},[n("div",{staticClass:"flex-shrink-0"},[n("img",{staticClass:"\n              h-48\n              w-full\n              object-cover\n              shadow-xl\n              border border-gray-300\n              rounded\n            ",attrs:{src:e.image_url,alt:e.image_url}})]),t._v(" "),n("div",{staticClass:"flex-1 bg-white px-2 py-3 flex flex-col justify-between"},[n("div",{staticClass:"flex-1"},[n("a",{staticClass:"block",attrs:{href:t.subhrefLink(e.id)}},[n("p",{staticClass:"text-xl font-semibold text-gray-900"},[t._v("\n                "+t._s(e.name)+"\n              ")])])])])])})),0),t._v(" "),n("div",{staticClass:"flex items-center justify-center mt-12"},[n("a",{staticClass:"\n          inline-flex\n          items-center\n          px-4\n          py-2\n          border border-gray-300\n          shadow-sm\n          text-base\n          font-medium\n          rounded-md\n          text-gray-700\n          bg-white\n          hover:bg-gray-50\n          focus:outline-none\n          focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\n        ",attrs:{href:t.href}},[t._v("\n        "+t._s(t.buttontext)+"\n      ")])])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);