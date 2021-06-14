(window.webpackJsonp=window.webpackJsonp||[]).push([[15,3,4],{201:function(e,t,n){"use strict";n.r(t);var r=n(1).a.extend({props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},link:{type:Object,required:!1,default:null}}}),l=n(10),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),n("p",{staticClass:"mt-1 text-xl text-gray-600 sm:mt-2"},[e._v("\n    "+e._s(e.subtitle)+"\n  ")]),e._v(" "),null!=e.link?n("a",{staticClass:"\n      inline-flex\n      mt-3\n      items-center\n      px-4\n      py-1.5\n      text-sm\n      font-bold\n      text-indigo-600\n      bg-white\n      border border-gray-300\n      rounded-md\n      shadow-sm\n      hover:bg-indigo-600\n      hover:text-white\n      transition-all\n      duration-150\n      ease-in-out\n      focus:outline-none\n      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\n    ",attrs:{href:e.link.href}},[e._v("\n    "+e._s(e.link.label)+"\n  ")]):e._e()])}),[],!1,null,null,null);t.default=component.exports},202:function(e,t,n){"use strict";n.r(t);var r=n(1),l=[{name:"Home",href:"/"},{name:"Areas",href:"/areas"},{name:"People",href:"/people"},{name:"Products",href:"/products"},{name:"About us",href:"/aboutus"},{name:"Contact us",href:"/contactus"}],o=r.a.extend({props:{current:{type:String,required:!0}},data:function(){return{navigation:l,isOpen:!1}},methods:{linkSelectedClass:function(link){return this.current===link?"underline font-black":""},openMenu:function(){this.isOpen=!this.isOpen}}}),c=n(10),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"bg-white"},[n("nav",{staticClass:"px-0 mx-auto max-w-7xl sm:px-6 lg:px-8",attrs:{"aria-label":"Top"}},[n("div",{staticClass:"flex items-center justify-between hidden w-full py-6 border-b border-indigo-500  lg:items-center lg:border-none lg:flex"},[n("div",{staticClass:"flex items-center flex-1"},[n("div",{staticClass:"hidden ml-4 space-x-8 lg:block"},e._l(e.navigation,(function(link){return n("a",{key:link.name,staticClass:"text-base font-medium text-indigo-900  hover:text-indigo-700",class:e.linkSelectedClass(link.name),attrs:{href:link.href}},[e._v("\n            "+e._s(link.name)+"\n          ")])})),0)]),e._v(" "),n("div",{staticClass:"flex-none"},[n("section-social-nav")],1)]),e._v(" "),n("div",{staticClass:"px-4 py-6 lg:hidden"},[n("div",{staticClass:"flex items-center justify-end w-full"},[e._m(0),e._v(" "),n("div",{staticClass:"flex-none"},[n("button",{attrs:{type:"button"},on:{click:e.openMenu}},[n("svg",{staticClass:"w-8 h-8 text-indigo-800",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})])])])]),e._v(" "),e.isOpen?n("div",{staticClass:"flex flex-col justify-center py-4 space-y-3 text-lg text-center  lg:text-base lg:text-left lg:flex-wrap lg:space-x-6 lg:hidden"},e._l(e.navigation,(function(link){return n("a",{key:link.name,staticClass:"text-base font-medium text-indigo-600 hover:text-indigo-800",class:e.linkSelectedClass(link.name),attrs:{href:link.href}},[e._v("\n          "+e._s(link.name)+"\n        ")])})),0):e._e()])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-1"},[n("span",{staticClass:"text-xl font-black tracking-tight text-indigo-900"},[e._v("Rocket Inc.")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{SectionSocialNav:n(153).default})},211:function(e,t,n){"use strict";n.r(t);var r=n(7),l=(n(34),n(58),n(59),n(37),n(44),{asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$supabase,t.next=3,n.from("people").select();case 3:return r=t.sent,l=r.data,t.abrupt("return",{postsPeople:l});case 6:case"end":return t.stop()}}),t)})))()},data:function(){return{postsPeople:[],searchText:""}},head:function(){return{title:"People - Rocket Inc.",meta:[{hid:"people",content:"View and search all the people that work in Rocket Inc.",name:"Rocket Inc. people"}]}},computed:{searchMember:function(){var e=this;return this.postsPeople.filter((function(t){return""===e.searchText||t.name.toLowerCase().includes(e.searchText.toLowerCase())||t.surname.toLowerCase().includes(e.searchText.toLowerCase())}))}},methods:{updateSearch:function(e){this.searchText=e.target.value},hrefLink:function(e){return"member/"+e}}}),o=n(10),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("layout-header-menu",{attrs:{current:"People"}}),e._v(" "),n("div",{staticClass:"px-8 pb-20 bg-white sm:px-12 lg:pt-10 lg:pb-28 lg:px-16"},[n("base-section-title",{attrs:{title:"People",subtitle:"Some people"}}),e._v(" "),n("div",{staticClass:"grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3"},e._l(this.searchMember,(function(t){return n("div",{key:t.id,staticClass:"flex flex-col bg-indigo-900 border border-gray-300 rounded-lg shadow-lg "},[n("a",{attrs:{href:e.hrefLink(t.id)}},[n("div",{staticClass:"w-full bg-gray-300 h-60"},[n("img",{staticClass:"object-cover w-full rounded-t-lg h-60",attrs:{src:t.image_url,alt:""}})]),e._v(" "),n("div",{staticClass:"px-6 py-5"},[n("h2",{staticClass:"text-xl font-bold tracking-wider text-white"},[e._v("\n              "+e._s(t.name+" "+t.surname)+"\n            ")]),e._v(" "),n("p",{staticClass:"font-medium text-white text-md"},[e._v(e._s(t.role))])])])])})),0)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LayoutHeaderMenu:n(202).default,BaseSectionTitle:n(201).default})}}]);