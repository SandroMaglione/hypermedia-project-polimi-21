(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{210:function(e,t,n){"use strict";n.r(t);var l=n(1),r=[{name:"Home",href:"/"},{name:"Areas",href:"/areas"},{name:"People",href:"/people"},{name:"Products",href:"/products"},{name:"About us",href:"/aboutus"},{name:"Contact us",href:"/contactus"}],c=l.a.extend({props:{current:{type:String,required:!0}},data:function(){return{navigation:r,isOpen:!1}},methods:{linkSelectedClass:function(link){return this.current===link?"underline font-black":""},openMenu:function(){this.isOpen=!this.isOpen}}}),o=n(10),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"bg-white"},[n("nav",{staticClass:"px-0 mx-auto max-w-7xl sm:px-6 lg:px-8",attrs:{"aria-label":"Top"}},[n("div",{staticClass:"flex items-center justify-between hidden w-full py-6 border-b border-blue-500  lg:items-center lg:border-none lg:flex"},[n("div",{staticClass:"flex items-center flex-1"},[n("div",{staticClass:"hidden ml-4 space-x-8 lg:block"},e._l(e.navigation,(function(link){return n("NuxtLink",{key:link.name,staticClass:"text-base font-medium text-blue-900 hover:text-blue-700",class:e.linkSelectedClass(link.name),attrs:{to:link.href}},[e._v("\n            "+e._s(link.name)+"\n          ")])})),1)]),e._v(" "),n("div",{staticClass:"flex-none"},[n("section-social-nav")],1)]),e._v(" "),n("div",{staticClass:"px-4 py-6 lg:hidden"},[n("div",{staticClass:"flex items-center justify-end w-full"},[e._m(0),e._v(" "),n("div",{staticClass:"flex-none"},[n("button",{attrs:{type:"button"},on:{click:e.openMenu}},[n("svg",{staticClass:"w-8 h-8 text-blue-800",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})])])])]),e._v(" "),e.isOpen?n("div",{staticClass:"flex flex-col justify-center py-4 space-y-3 text-lg text-center  lg:text-base lg:text-left lg:flex-wrap lg:space-x-6 lg:hidden"},e._l(e.navigation,(function(link){return n("NuxtLink",{key:link.name,staticClass:"text-base font-medium text-blue-600 hover:text-blue-800",class:e.linkSelectedClass(link.name),attrs:{to:link.href}},[e._v("\n          "+e._s(link.name)+"\n        ")])})),1):e._e()])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-1"},[n("span",{staticClass:"text-xl font-black tracking-tight text-blue-900"},[e._v("Rocket Inc.")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{SectionSocialNav:n(156).default})}}]);