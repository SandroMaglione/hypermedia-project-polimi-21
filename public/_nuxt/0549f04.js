(window.webpackJsonp=window.webpackJsonp||[]).push([[17,2,3,4,6],{201:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},link:{type:Object,required:!1,default:null}}}),l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("p",{staticClass:"mt-1 text-xl text-gray-600 sm:mt-2"},[t._v("\n    "+t._s(t.subtitle)+"\n  ")]),t._v(" "),null!=t.link?n("a",{staticClass:"\n      inline-flex\n      mt-3\n      items-center\n      px-4\n      py-1.5\n      text-sm\n      font-bold\n      text-indigo-600\n      bg-white\n      border border-gray-300\n      rounded-md\n      shadow-sm\n      hover:bg-indigo-600\n      hover:text-white\n      transition-all\n      duration-150\n      ease-in-out\n      focus:outline-none\n      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\n    ",attrs:{href:t.link.href}},[t._v("\n    "+t._s(t.link.label)+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},202:function(t,e,n){"use strict";n.r(e);var r=n(1),l=[{name:"Home",href:"/"},{name:"Areas",href:"/areas"},{name:"People",href:"/people"},{name:"Products",href:"/products"},{name:"About us",href:"/aboutus"},{name:"Contact us",href:"/contactus"}],o=r.a.extend({props:{current:{type:String,required:!0}},data:function(){return{navigation:l,isOpen:!1}},methods:{linkSelectedClass:function(link){return this.current===link?"underline font-black":""},openMenu:function(){this.isOpen=!this.isOpen}}}),c=n(10),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"bg-white"},[n("nav",{staticClass:"px-0 mx-auto max-w-7xl sm:px-6 lg:px-8",attrs:{"aria-label":"Top"}},[n("div",{staticClass:"flex items-center justify-between hidden w-full py-6 border-b border-indigo-500  lg:items-center lg:border-none lg:flex"},[n("div",{staticClass:"flex items-center flex-1"},[n("div",{staticClass:"hidden ml-4 space-x-8 lg:block"},t._l(t.navigation,(function(link){return n("a",{key:link.name,staticClass:"text-base font-medium text-indigo-900  hover:text-indigo-700",class:t.linkSelectedClass(link.name),attrs:{href:link.href}},[t._v("\n            "+t._s(link.name)+"\n          ")])})),0)]),t._v(" "),n("div",{staticClass:"flex-none"},[n("section-social-nav")],1)]),t._v(" "),n("div",{staticClass:"px-4 py-6 lg:hidden"},[n("div",{staticClass:"flex items-center justify-end w-full"},[t._m(0),t._v(" "),n("div",{staticClass:"flex-none"},[n("button",{attrs:{type:"button"},on:{click:t.openMenu}},[n("svg",{staticClass:"w-8 h-8 text-indigo-800",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})])])])]),t._v(" "),t.isOpen?n("div",{staticClass:"flex flex-col justify-center py-4 space-y-3 text-lg text-center  lg:text-base lg:text-left lg:flex-wrap lg:space-x-6 lg:hidden"},t._l(t.navigation,(function(link){return n("a",{key:link.name,staticClass:"text-base font-medium text-indigo-600 hover:text-indigo-800",class:t.linkSelectedClass(link.name),attrs:{href:link.href}},[t._v("\n          "+t._s(link.name)+"\n        ")])})),0):t._e()])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-1"},[n("span",{staticClass:"text-xl font-black tracking-tight text-indigo-900"},[t._v("Rocket Inc.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionSocialNav:n(153).default})},203:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},link:{type:Object,required:!1,default:null},posts:{type:Array,required:!0},subhref:{type:String,required:!1,default:"#"}},methods:{subhrefLink:function(t){return this.subhref+"/"+t}}}),l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-4 pt-16 pb-20 bg-white border border-indigo-500 shadow-md  sm:px-12 lg:pt-18 lg:pb-20 lg:px-16"},[n("div",{staticClass:"relative max-w-lg mx-auto lg:max-w-7xl"},[n("base-section-title",{attrs:{title:t.title,subtitle:t.subtitle,link:t.link}}),t._v(" "),n("div",{staticClass:"grid gap-16 pt-12 mt-6 border-t border-gray-200  lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12"},t._l(t.posts,(function(e){return n("div",{key:e.id},[n("a",{staticClass:"block",attrs:{href:t.subhrefLink(e.id)}},[n("div",{staticClass:"flex-shrink-0 transition-transform duration-150 ease-in-out transform  hover:scale-105"},[n("img",{staticClass:"object-cover w-full h-48 border border-gray-300 rounded shadow-xl ",attrs:{src:e.image_url,alt:e.image_url}})]),t._v(" "),n("div",{staticClass:"flex flex-col justify-between flex-1 px-2 py-3 bg-white"},[n("div",{staticClass:"flex-1"},[n("p",{staticClass:"text-xl font-semibold text-gray-900"},[t._v("\n                "+t._s(e.name)+"\n              ")])])])])])})),0)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseSectionTitle:n(201).default})},204:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({props:{section:{type:String,required:!0},link1:{type:String,required:!0},link2:{type:String,required:!0},href1:{type:String,required:!1,default:null},href2:{type:String,required:!1,default:null}}}),l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center gap-6 lg:flex-row lg:gap-10"},[n("div",{staticClass:"flex-1"},[n("span",{staticClass:"text-xl font-bold tracking-widest font-gray-800"},[t._v(t._s(t.section))])]),t._v(" "),n("div",{staticClass:"flex gap-8"},[null!=t.href1?n("a",{staticClass:"\n        px-6\n        py-1.5\n        font-bold\n        text-sm text-indigo-600\n        bg-white\n        border border-indigo-400\n        rounded-md\n        shadow\n        hover:bg-indigo-600\n        hover:text-white\n        transition-all\n        duration-150\n        ease-in-out\n      ",attrs:{href:t.href1}},[t._v(t._s(t.link1))]):t._e(),t._v(" "),null!=t.href2?n("a",{staticClass:"\n        px-6\n        py-1.5\n        font-bold\n        text-sm text-indigo-600\n        bg-white\n        border border-indigo-400\n        rounded-md\n        shadow\n        hover:bg-indigo-600\n        hover:text-white\n        transition-all\n        duration-150\n        ease-in-out\n      ",attrs:{href:t.href2}},[t._v(t._s(t.link2))]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},216:function(t,e,n){"use strict";n.r(e);var r=n(7),l=(n(37),n(44),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,o,c,d,f,x,area;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.$supabase,l=n.params.singleproduct,e.next=4,r.from("product").select().eq("id",l).single();case 4:return o=e.sent,c=o.data,e.next=8,r.from("product_people").select().eq("product_id",l);case 8:return d=e.sent,f=d.data,e.next=12,r.from("product_area").select().eq("product_id",l).single();case 12:return x=e.sent,area=x.data,e.abrupt("return",{singleProduct:c,productPeople:f,productArea:area});case 15:case"end":return e.stop()}}),e)})))()},data:function(){return{singleProduct:{},productArea:{},productPeople:[]}},head:function(){return{title:this.headTitle,meta:[{hid:this.headHid,name:this.headName,content:this.headContent}]}},computed:{orientationLabel:function(){return"Product / "+this.singleProduct.name},myAreaLink:function(){return"View area of the product: "+this.productArea.name},myAreaHref:function(){return"/area/"+this.productArea.id},headTitle:function(){return this.singleProduct.name+" - Rocket Inc."},headHid:function(){return"product "+this.singleProduct.name},headName:function(){return"Rocket Inc. "+this.singleProduct.name},headContent:function(){return"View all the details about the "+this.singleProduct.name+" product offered by Rocket Inc."}}}),o=n(10),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("layout-header-menu",{attrs:{current:"Products"}}),t._v(" "),n("div",{staticClass:"px-8 pb-20 bg-white sm:px-12 lg:pt-10 lg:pb-28 lg:px-16"},[n("base-orientation-info",{attrs:{section:t.orientationLabel,link1:t.myAreaLink,href1:t.myAreaHref,link2:"Managers"}}),t._v(" "),n("div",{staticClass:"pt-10 mt-6 mb-10 border-t border-gray-300"},[n("div",{staticClass:"relative flex items-center justify-center bg-gray-300 border border-gray-400 rounded-lg shadow-xl  h-60",style:{backgroundImage:"url("+t.singleProduct.image_url+")"}},[n("div",{staticClass:"absolute inset-0 bg-indigo-900 rounded-lg opacity-75"}),t._v(" "),n("h1",{staticClass:"z-50 text-6xl font-black text-white"},[t._v("\n          "+t._s(t.singleProduct.name)+"\n        ")])])]),t._v(" "),n("div",{staticClass:"mb-20"},[n("base-section-title",{attrs:{title:"Product details",subtitle:t.singleProduct.description}})],1),t._v(" "),n("div",[n("base-section-title",{attrs:{title:"Product pricing",subtitle:"Different prices available for the product"}}),t._v(" "),t._m(0)],1),t._v(" "),n("section-grid-section",{attrs:{title:"People working on this Product",subtitle:"All the people working on the product",subhref:"/product",posts:t.productPeople}})],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-end gap-10 mt-12 lg:flex-row"},[n("div",{staticClass:"flex-1 w-full lg:w-auto"},[n("div",{staticClass:"py-20 text-center bg-gray-300 h-60"},[n("span",{staticClass:"text-3xl font-bold tracking-widest text-gray-900"},[t._v("Pricing 1")])])]),t._v(" "),n("div",{staticClass:"flex-1 w-full lg:w-auto"},[n("div",{staticClass:"py-24 text-center bg-gray-300 border border-gray-400 shadow-xl  h-72"},[n("span",{staticClass:"text-5xl font-bold tracking-widest text-gray-900"},[t._v("Pricing 2")])])]),t._v(" "),n("div",{staticClass:"flex-1 w-full lg:w-auto"},[n("div",{staticClass:"py-20 text-center bg-gray-300 h-60"},[n("span",{staticClass:"text-3xl font-bold tracking-widest text-gray-900"},[t._v("Pricing 3")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutHeaderMenu:n(202).default,BaseOrientationInfo:n(204).default,BaseSectionTitle:n(201).default,SectionGridSection:n(203).default})}}]);