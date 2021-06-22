(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,4],{201:function(t,e,n){"use strict";n.r(e);var l=n(1).a.extend({props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},link:{type:Object,required:!1,default:null}}}),r=n(10),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("p",{staticClass:"mt-1 text-xl text-gray-600 sm:mt-2"},[t._v("\n    "+t._s(t.subtitle)+"\n  ")]),t._v(" "),null!=t.link?n("a",{staticClass:"\n      inline-flex\n      mt-3\n      items-center\n      px-4\n      py-1.5\n      text-sm\n      font-bold\n      text-blue-600\n      bg-white\n      border border-gray-300\n      rounded-md\n      shadow-sm\n      hover:bg-blue-600\n      hover:text-white\n      transition-all\n      duration-150\n      ease-in-out\n      focus:outline-none\n      focus:ring-2 focus:ring-offset-2 focus:ring-blue-500\n    ",attrs:{href:t.link.href}},[t._v("\n    "+t._s(t.link.label)+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},202:function(t,e,n){"use strict";n.r(e);var l=n(1),r=[{name:"Home",href:"/"},{name:"Areas",href:"/areas"},{name:"People",href:"/people"},{name:"Products",href:"/products"},{name:"About us",href:"/aboutus"},{name:"Contact us",href:"/contactus"}],o=l.a.extend({props:{current:{type:String,required:!0}},data:function(){return{navigation:r,isOpen:!1}},methods:{linkSelectedClass:function(link){return this.current===link?"underline font-black":""},openMenu:function(){this.isOpen=!this.isOpen}}}),c=n(10),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"bg-white"},[n("nav",{staticClass:"px-0 mx-auto max-w-7xl sm:px-6 lg:px-8",attrs:{"aria-label":"Top"}},[n("div",{staticClass:"\n        flex\n        items-center\n        justify-between\n        hidden\n        w-full\n        py-6\n        border-b border-blue-500\n        lg:items-center\n        lg:border-none\n        lg:flex\n      "},[n("div",{staticClass:"flex items-center flex-1"},[n("div",{staticClass:"hidden ml-4 space-x-8 lg:block"},t._l(t.navigation,(function(link){return n("a",{key:link.name,staticClass:"text-base font-medium text-blue-900 hover:text-blue-700",class:t.linkSelectedClass(link.name),attrs:{href:link.href}},[t._v("\n            "+t._s(link.name)+"\n          ")])})),0)]),t._v(" "),n("div",{staticClass:"flex-none"},[n("section-social-nav")],1)]),t._v(" "),n("div",{staticClass:"px-4 py-6 lg:hidden"},[n("div",{staticClass:"flex items-center justify-end w-full"},[t._m(0),t._v(" "),n("div",{staticClass:"flex-none"},[n("button",{attrs:{type:"button"},on:{click:t.openMenu}},[n("svg",{staticClass:"w-8 h-8 text-blue-800",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})])])])]),t._v(" "),t.isOpen?n("div",{staticClass:"\n          flex flex-col\n          justify-center\n          py-4\n          space-y-3\n          text-lg text-center\n          lg:text-base lg:text-left\n          lg:flex-wrap\n          lg:space-x-6\n          lg:hidden\n        "},t._l(t.navigation,(function(link){return n("a",{key:link.name,staticClass:"text-base font-medium text-blue-600 hover:text-blue-800",class:t.linkSelectedClass(link.name),attrs:{href:link.href}},[t._v("\n          "+t._s(link.name)+"\n        ")])})),0):t._e()])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-1"},[n("span",{staticClass:"text-xl font-black tracking-tight text-blue-900"},[t._v("Rocket Inc.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionSocialNav:n(153).default})},210:function(t,e,n){"use strict";n.r(e);var l=n(1).a.extend({head:function(){return{title:"Contact us - Rocket Inc.",meta:[{hid:"contactus",content:"Are you looking for more about Rocket Inc.? You can easily contact us from our website",name:"Rocket Inc. contact us"}]}}}),r=n(10),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("layout-header-menu",{attrs:{current:"Contact us"}}),t._v(" "),n("div",{staticClass:"px-8 pt-8 pb-20 bg-white sm:px-12 lg:pt-16 lg:pb-28 lg:px-16"},[n("div",[n("base-section-title",{attrs:{title:"Contact us",subtitle:"Use the online form to send us your message"}}),t._v(" "),t._m(0)],1),t._v(" "),n("div",{staticClass:"mt-16"},[n("base-section-title",{attrs:{title:"Company information",subtitle:"Here you can find all the contact information about the company"}}),t._v(" "),t._m(1)],1)])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n          flex flex-col\n          p-10\n          mt-8\n          space-y-8\n          border border-gray-200\n          rounded-md\n          shadow-md\n        "},[n("div",{staticClass:"flex flex-col space-y-2"},[n("label",{staticClass:"label",attrs:{for:"fullname"}},[t._v("Full name")]),t._v(" "),n("input",{staticClass:"input",attrs:{id:"fullname",type:"text",name:"fullname",placeholder:"Insert full name",required:""}})]),t._v(" "),n("div",{staticClass:"flex flex-col space-y-2"},[n("label",{staticClass:"label",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),n("input",{staticClass:"input",attrs:{id:"email",type:"email",name:"email",placeholder:"Insert email",required:""}})]),t._v(" "),n("div",{staticClass:"flex flex-col space-y-2"},[n("label",{staticClass:"label",attrs:{for:"message"}},[t._v("Message")]),t._v(" "),n("textarea",{staticClass:"input",attrs:{id:"message",name:"message",rows:"10",placeholder:"Write here your message",required:""}})]),t._v(" "),n("div",[n("button",{staticClass:"\n              w-full\n              py-3\n              text-lg\n              font-black\n              tracking-tight\n              text-center text-blue-800\n              transition-all\n              duration-150\n              ease-in-out\n              border-2 border-blue-700\n              rounded-2xl\n              hover:bg-blue-600\n              hover:text-white\n            ",attrs:{type:"submit"}},[t._v("\n            Send message\n          ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid grid-cols-1 gap-8 mt-6 md:grid-cols-2 lg:grid-cols-3"},[n("div",{staticClass:"flex flex-col p-6 space-y-1 border border-gray-100 shadow"},[n("span",{staticClass:"label"},[t._v("Email")]),t._v(" "),n("p",{staticClass:"text-2xl font-light"},[t._v("ouremail@company.info.com")])]),t._v(" "),n("div",{staticClass:"flex flex-col p-6 space-y-1 border border-gray-100 shadow"},[n("span",{staticClass:"label"},[t._v("Address")]),t._v(" "),n("p",{staticClass:"text-2xl font-light"},[t._v("Via Roma, 41, Milano")])]),t._v(" "),n("div",{staticClass:"flex flex-col p-6 space-y-1 border border-gray-100 shadow"},[n("span",{staticClass:"label"},[t._v("CEO")]),t._v(" "),n("p",{staticClass:"text-2xl font-light"},[t._v("Daniel Johnson")])]),t._v(" "),n("div",{staticClass:"flex flex-col p-6 space-y-1 border border-gray-100 shadow"},[n("span",{staticClass:"label"},[t._v("Tel.")]),t._v(" "),n("p",{staticClass:"text-2xl font-light"},[t._v("335-1928922928")])]),t._v(" "),n("div",{staticClass:"flex flex-col p-6 space-y-1 border border-gray-100 shadow"},[n("span",{staticClass:"label"},[t._v("Fax")]),t._v(" "),n("p",{staticClass:"text-2xl font-light"},[t._v("335-99827282")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutHeaderMenu:n(202).default,BaseSectionTitle:n(201).default})}}]);