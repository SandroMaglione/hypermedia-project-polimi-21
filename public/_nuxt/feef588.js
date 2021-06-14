(window.webpackJsonp=window.webpackJsonp||[]).push([[18,3,4],{201:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},link:{type:Object,required:!1,default:null}}}),l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("p",{staticClass:"mt-1 text-xl text-gray-600 sm:mt-2"},[t._v("\n    "+t._s(t.subtitle)+"\n  ")]),t._v(" "),null!=t.link?n("a",{staticClass:"\n      inline-flex\n      mt-3\n      items-center\n      px-4\n      py-1.5\n      text-sm\n      font-bold\n      text-indigo-600\n      bg-white\n      border border-gray-300\n      rounded-md\n      shadow-sm\n      hover:bg-indigo-600\n      hover:text-white\n      transition-all\n      duration-150\n      ease-in-out\n      focus:outline-none\n      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\n    ",attrs:{href:t.link.href}},[t._v("\n    "+t._s(t.link.label)+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},202:function(t,e,n){"use strict";n.r(e);var r=n(1),l=[{name:"Home",href:"/"},{name:"Areas",href:"/areas"},{name:"People",href:"/people"},{name:"Products",href:"/products"},{name:"About us",href:"/aboutus"},{name:"Contact us",href:"/contactus"}],o=r.a.extend({props:{current:{type:String,required:!0}},data:function(){return{navigation:l,isOpen:!1}},methods:{linkSelectedClass:function(link){return this.current===link?"underline font-black":""},openMenu:function(){this.isOpen=!this.isOpen}}}),c=n(10),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"bg-white"},[n("nav",{staticClass:"px-0 mx-auto max-w-7xl sm:px-6 lg:px-8",attrs:{"aria-label":"Top"}},[n("div",{staticClass:"flex items-center justify-between hidden w-full py-6 border-b border-indigo-500  lg:items-center lg:border-none lg:flex"},[n("div",{staticClass:"flex items-center flex-1"},[n("div",{staticClass:"hidden ml-4 space-x-8 lg:block"},t._l(t.navigation,(function(link){return n("a",{key:link.name,staticClass:"text-base font-medium text-indigo-900  hover:text-indigo-700",class:t.linkSelectedClass(link.name),attrs:{href:link.href}},[t._v("\n            "+t._s(link.name)+"\n          ")])})),0)]),t._v(" "),n("div",{staticClass:"flex-none"},[n("section-social-nav")],1)]),t._v(" "),n("div",{staticClass:"px-4 py-6 lg:hidden"},[n("div",{staticClass:"flex items-center justify-end w-full"},[t._m(0),t._v(" "),n("div",{staticClass:"flex-none"},[n("button",{attrs:{type:"button"},on:{click:t.openMenu}},[n("svg",{staticClass:"w-8 h-8 text-indigo-800",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})])])])]),t._v(" "),t.isOpen?n("div",{staticClass:"flex flex-col justify-center py-4 space-y-3 text-lg text-center  lg:text-base lg:text-left lg:flex-wrap lg:space-x-6 lg:hidden"},t._l(t.navigation,(function(link){return n("a",{key:link.name,staticClass:"text-base font-medium text-indigo-600 hover:text-indigo-800",class:t.linkSelectedClass(link.name),attrs:{href:link.href}},[t._v("\n          "+t._s(link.name)+"\n        ")])})),0):t._e()])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-1"},[n("span",{staticClass:"text-xl font-black tracking-tight text-indigo-900"},[t._v("Rocket Inc.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionSocialNav:n(153).default})},213:function(t,e,n){"use strict";n.r(e);var r=n(7),l=(n(34),n(58),n(59),n(37),n(44),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$supabase,e.next=3,n.from("product").select();case 3:return r=e.sent,l=r.data,e.abrupt("return",{postsProducts:l});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{postsProducts:[],searchText:""}},head:function(){return{title:"Products - Rocket Inc.",meta:[{hid:"products",content:"View all the products that we offer for you and your business",name:"Rocket Inc. products"}]}},computed:{searchProduct:function(){var t=this;return this.postsProducts.filter((function(e){return""===t.searchText||e.name.toLowerCase().includes(t.searchText.toLowerCase())}))}},methods:{updateSearch:function(t){this.searchText=t.target.value},hrefLink:function(t){return"product/"+t}}}),o=n(10),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("layout-header-menu",{attrs:{current:"Products"}}),t._v(" "),n("div",{staticClass:"px-8 pb-20 bg-white sm:px-12 lg:pt-10 lg:pb-28 lg:px-16"},[n("base-section-title",{attrs:{title:"Products",subtitle:"Some products"}}),t._v(" "),n("div",{staticClass:"flex flex-col gap-8 mt-10"},t._l(this.searchProduct,(function(e){return n("div",{key:e.id,staticClass:"flex flex-col justify-center bg-indigo-900 border border-gray-400 rounded-lg shadow-lg  lg:flex-row"},[n("div",{staticClass:"flex-1 h-72"},[n("img",{staticClass:"object-cover w-full h-72",attrs:{src:e.image_url,alt:e.image_url}})]),t._v(" "),n("div",{staticClass:"flex-1 p-10"},[n("a",{attrs:{href:t.hrefLink(e.id)}},[n("h2",{staticClass:"text-5xl font-black text-white"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"text-2xl font-medium text-white"},[t._v("\n              "+t._s(e.description)+"\n            ")])])])])})),0)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutHeaderMenu:n(202).default,BaseSectionTitle:n(201).default})}}]);