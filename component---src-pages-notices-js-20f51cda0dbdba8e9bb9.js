(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{158:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(175),l=(a(162),a(160),a(161),a(74),a(55),a(34),a(195)),c=a(159),s=function(){var e=[],t=l.data.noticesToml.notices.entries(),a=Array.isArray(t),n=0;for(t=a?t:t[Symbol.iterator]();;){var o;if(a){if(n>=t.length)break;o=t[n++]}else{if((n=t.next()).done)break;o=n.value}var s=o,i=s[0],m=s[1];e.push(r.a.createElement("div",{className:"col-4 p-2",key:"notice-"+i},r.a.createElement("a",{href:m.url},m.name)))}return r.a.createElement("section",{className:"bg-light-grey has-divider"},r.a.createElement("div",{className:"container pt-6"},r.a.createElement("div",{className:"row pb-0"},r.a.createElement("div",{className:"col-xl-8 col-lg-9"},r.a.createElement("h2",{className:"display-4"},"Open Source Notices"),r.a.createElement("p",{className:"display-6"},"Notice required by licensors of any open source libraries or components related to any of the applicable services. For questions please contact ",r.a.createElement(c.a,{to:"mailto:opensource@salesforce.com"},"opensource@salesforce.com")))),r.a.createElement("div",{className:"row"},e)))};t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(s,null))}},159:function(e,t,a){"use strict";a(38);var n=a(82),r=a.n(n),o=a(0),l=a.n(o),c=a(4),s=a.n(c),i=a(33),m=a.n(i);a(168),l.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func;var u=a(174);t.a=function(e){var t=e.children,a=e.to,n=e.activeClassName,o=e.partiallyActive,c=r()(e,["children","to","activeClassName","partiallyActive"]);return/^\/(?!\/)/.test(a)?l.a.createElement(m.a,Object.assign({to:a,activeClassName:n,partiallyActive:o},c),t):l.a.createElement(u.OutboundLink,Object.assign({href:a},c),t)}},160:function(e,t,a){a(163)("asyncIterator")},161:function(e,t,a){"use strict";var n=a(5),r=a(26),o=a(18),l=a(12),c=a(14),s=a(169).KEY,i=a(19),m=a(40),u=a(41),f=a(37),p=a(3),d=a(164),v=a(163),g=a(170),b=a(80),h=a(6),y=a(11),E=a(35),N=a(76),w=a(56),S=a(81),O=a(171),x=a(172),k=a(25),C=a(39),j=x.f,_=k.f,P=O.f,T=n.Symbol,A=n.JSON,M=A&&A.stringify,F=p("_hidden"),D=p("toPrimitive"),H={}.propertyIsEnumerable,L=m("symbol-registry"),V=m("symbols"),B=m("op-symbols"),I=Object.prototype,K="function"==typeof T,R=n.QObject,J=!R||!R.prototype||!R.prototype.findChild,q=o&&i(function(){return 7!=S(_({},"a",{get:function(){return _(this,"a",{value:7}).a}})).a})?function(e,t,a){var n=j(I,t);n&&delete I[t],_(e,t,a),n&&e!==I&&_(I,t,n)}:_,z=function(e){var t=V[e]=S(T.prototype);return t._k=e,t},W=K&&"symbol"==typeof T.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof T},G=function(e,t,a){return e===I&&G(B,t,a),h(e),t=N(t,!0),h(a),r(V,t)?(a.enumerable?(r(e,F)&&e[F][t]&&(e[F][t]=!1),a=S(a,{enumerable:w(0,!1)})):(r(e,F)||_(e,F,w(1,{})),e[F][t]=!0),q(e,t,a)):_(e,t,a)},Q=function(e,t){h(e);for(var a,n=g(t=E(t)),r=0,o=n.length;o>r;)G(e,a=n[r++],t[a]);return e},Y=function(e){var t=H.call(this,e=N(e,!0));return!(this===I&&r(V,e)&&!r(B,e))&&(!(t||!r(this,e)||!r(V,e)||r(this,F)&&this[F][e])||t)},Z=function(e,t){if(e=E(e),t=N(t,!0),e!==I||!r(V,t)||r(B,t)){var a=j(e,t);return!a||!r(V,t)||r(e,F)&&e[F][t]||(a.enumerable=!0),a}},U=function(e){for(var t,a=P(E(e)),n=[],o=0;a.length>o;)r(V,t=a[o++])||t==F||t==s||n.push(t);return n},X=function(e){for(var t,a=e===I,n=P(a?B:E(e)),o=[],l=0;n.length>l;)!r(V,t=n[l++])||a&&!r(I,t)||o.push(V[t]);return o};K||(c((T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var e=f(arguments.length>0?arguments[0]:void 0),t=function(a){this===I&&t.call(B,a),r(this,F)&&r(this[F],e)&&(this[F][e]=!1),q(this,e,w(1,a))};return o&&J&&q(I,e,{configurable:!0,set:t}),z(e)}).prototype,"toString",function(){return this._k}),x.f=Z,k.f=G,a(165).f=O.f=U,a(75).f=Y,a(77).f=X,o&&!a(36)&&c(I,"propertyIsEnumerable",Y,!0),d.f=function(e){return z(p(e))}),l(l.G+l.W+l.F*!K,{Symbol:T});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;$.length>ee;)p($[ee++]);for(var te=C(p.store),ae=0;te.length>ae;)v(te[ae++]);l(l.S+l.F*!K,"Symbol",{for:function(e){return r(L,e+="")?L[e]:L[e]=T(e)},keyFor:function(e){if(!W(e))throw TypeError(e+" is not a symbol!");for(var t in L)if(L[t]===e)return t},useSetter:function(){J=!0},useSimple:function(){J=!1}}),l(l.S+l.F*!K,"Object",{create:function(e,t){return void 0===t?S(e):Q(S(e),t)},defineProperty:G,defineProperties:Q,getOwnPropertyDescriptor:Z,getOwnPropertyNames:U,getOwnPropertySymbols:X}),A&&l(l.S+l.F*(!K||i(function(){var e=T();return"[null]"!=M([e])||"{}"!=M({a:e})||"{}"!=M(Object(e))})),"JSON",{stringify:function(e){for(var t,a,n=[e],r=1;arguments.length>r;)n.push(arguments[r++]);if(a=t=n[1],(y(t)||void 0!==e)&&!W(e))return b(t)||(t=function(e,t){if("function"==typeof a&&(t=a.call(this,e,t)),!W(t))return t}),n[1]=t,M.apply(A,n)}}),T.prototype[D]||a(13)(T.prototype,D,T.prototype.valueOf),u(T,"Symbol"),u(Math,"Math",!0),u(n.JSON,"JSON",!0)},162:function(e,t,a){var n=a(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},163:function(e,t,a){var n=a(5),r=a(20),o=a(36),l=a(164),c=a(25).f;e.exports=function(e){var t=r.Symbol||(r.Symbol=o?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:l.f(e)})}},164:function(e,t,a){t.f=a(3)},165:function(e,t,a){var n=a(79),r=a(57).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,r)}},166:function(e){e.exports={data:{githubToml:{organizations:[{name:"Salesforce",url:"https://github.com/salesforce"},{name:"Salesforce UX",url:"https://github.com/salesforce-ux"},{name:"Heroku",url:"https://github.com/heroku"},{name:"Mulesoft",url:"https://github.com/mulesoft"},{name:"Datorama",url:"https://github.com/datorama"},{name:"Lightning Platform",url:"https://github.com/forcedotcom"},{name:"Developer Force",url:"https://github.com/developerforce"},{name:"Trailhead Apps",url:"https://github.com/trailheadapps"},{name:"oclif",url:"https://github.com/oclif"}]}}}},167:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===o)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},168:function(e,t,a){var n;e.exports=(n=a(173))&&n.default||n},169:function(e,t,a){var n=a(37)("meta"),r=a(11),o=a(26),l=a(25).f,c=0,s=Object.isExtensible||function(){return!0},i=!a(19)(function(){return s(Object.preventExtensions({}))}),m=function(e){l(e,n,{value:{i:"O"+ ++c,w:{}}})},u=e.exports={KEY:n,NEED:!1,fastKey:function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,n)){if(!s(e))return"F";if(!t)return"E";m(e)}return e[n].i},getWeak:function(e,t){if(!o(e,n)){if(!s(e))return!0;if(!t)return!1;m(e)}return e[n].w},onFreeze:function(e){return i&&u.NEED&&s(e)&&!o(e,n)&&m(e),e}}},170:function(e,t,a){var n=a(39),r=a(77),o=a(75);e.exports=function(e){var t=n(e),a=r.f;if(a)for(var l,c=a(e),s=o.f,i=0;c.length>i;)s.call(e,l=c[i++])&&t.push(l);return t}},171:function(e,t,a){var n=a(35),r=a(165).f,o={}.toString,l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return l&&"[object Window]"==o.call(e)?function(e){try{return r(e)}catch(t){return l.slice()}}(e):r(n(e))}},172:function(e,t,a){var n=a(75),r=a(56),o=a(35),l=a(76),c=a(26),s=a(78),i=Object.getOwnPropertyDescriptor;t.f=a(18)?i:function(e,t){if(e=o(e),t=l(t,!0),s)try{return i(e,t)}catch(a){}if(c(e,t))return r(!n.f.call(e,t),e[t])}},173:function(e,t,a){"use strict";a.r(t);a(38);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),c=a(58),s=a(2),i=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};i.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=i},174:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OutboundLink=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=l(a(0)),o=l(a(4));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return r.default.createElement("a",n({},e,{onClick:function(t){"function"==typeof e.onClick&&e.onClick();var a=!0;return(0!==t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.defaultPrevented)&&(a=!1),e.target&&"_self"!==e.target.toLowerCase()&&(a=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:e.href,transport_type:"beacon",event_callback:function(){a&&(document.location=e.href)}}):a&&(document.location=e.href),!1}}))}c.propTypes={href:o.default.string,target:o.default.string,onClick:o.default.func},t.OutboundLink=c},175:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(162),a(160),a(161),a(74),a(55),a(34),a(166)),l=a(167),c=a.n(l),s=a(149),i=a.n(s),m=a(159),u=function(){var e=[],t=o.data.githubToml.organizations.entries(),a=Array.isArray(t),n=0;for(t=a?t:t[Symbol.iterator]();;){var l;if(a){if(n>=t.length)break;l=t[n++]}else{if((n=t.next()).done)break;l=n.value}var s=l,u=s[0],f=s[1];e.push(r.a.createElement(m.a,{to:f.url,className:"dropdown-item nav-link pl-2",key:"github-org-"+u},f.name))}return r.a.createElement("div",{className:"navbar-container"},r.a.createElement("nav",{className:"navbar navbar-expand-lg justify-content-between navbar-light border-bottom-0","data-sticky":"top"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col flex-fill px-0 d-flex justify-content-between"},r.a.createElement(m.a,{to:"/",className:c()("navbar-brand","mr-0","fade-page")},r.a.createElement("img",{src:"/assets/img/salesforce-opensource.svg",alt:"Salesforce Open Source",className:i.a.logo})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":".navbar-collapse","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("svg",{className:"icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V17C21 16.4477 20.5523 16 20 16H4C3.44772 16 3 16.4477 3 17V17ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12V12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12V12ZM4 6C3.44772 6 3 6.44772 3 7V7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7V7C21 6.44772 20.5523 6 20 6H4Z",fill:"#212529"})))),r.a.createElement("div",{className:"collapse navbar-collapse col px-0 px-lg-2 flex-fill justify-content-end"},r.a.createElement("div",{className:"py-2 py-lg-0"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item text-center"},r.a.createElement(m.a,{to:"https://engineering.salesforce.com/",className:"nav-link"},"Blog")),r.a.createElement("li",{className:"nav-item text-center"},r.a.createElement(m.a,{to:"https://twitter.com/salesforceeng",className:"nav-link"},"Twitter")),r.a.createElement("li",{className:"dropdown nav-item text-center"},r.a.createElement(m.a,{to:"#",className:"nav-link dropdown-toggle","data-toggle":"dropdown","aria-expanded":"false","aria-haspopup":"true"},"GitHub"),r.a.createElement("div",{className:"dropdown-menu m-0","aria-labelledby":"dropdownMenuLink"},e)),r.a.createElement("li",{className:"nav-item text-center"},r.a.createElement(m.a,{to:"https://salesforce.wd1.myworkdayjobs.com/External_Career_Site/2/refreshFacet/318c8bb6f553100021d223d9780d30be?source=Salesforce_Open_Source_Site",className:"nav-link"},"Careers"))))))))},f=function(){var e=[],t=o.data.githubToml.organizations.entries(),a=Array.isArray(t),n=0;for(t=a?t:t[Symbol.iterator]();;){var l;if(a){if(n>=t.length)break;l=t[n++]}else{if((n=t.next()).done)break;l=n.value}var c=l,s=c[0],i=c[1];e.push(r.a.createElement("div",{className:"nav-item col-12 col-md-6 p-0",key:"github-org-"+s},r.a.createElement(m.a,{to:i.url,className:"nav-link p-0 mb-2"},i.name)))}return r.a.createElement("footer",{className:"pb-5 bg-primary-3 text-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col text-center"},r.a.createElement(m.a,{to:"https://salesforce.com"},r.a.createElement("img",{src:"/assets/img/cloud-salesforce.svg",alt:"Salesforce",className:"mb-4",style:{height:100}})))),r.a.createElement("div",{className:"row mb-6 justify-content-center"},r.a.createElement("div",{className:"col-md-10 col-lg-5 mb-3 text-lg-left text-md-center"},r.a.createElement("h5",null,"About Salesforce"),r.a.createElement("p",{className:"pr-xl-3 text-light"},"Salesforce is the leader in customer relationship management (CRM), bringing companies closer to their customers. Salesforce enables companies of every size and industry to take advantage of powerful technologies—cloud, mobile, social, internet of things, and artificial intelligence—to connect to their customers. ",r.a.createElement(m.a,{className:"hover-arrow",to:"https://www.salesforce.com"},"Go to salesforce.com"))),r.a.createElement("div",{className:"col-md-3 col-lg-2 mb-3"},r.a.createElement("h5",null,"Open Source"),r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("div",{className:"nav-item"},r.a.createElement(m.a,{to:"/",className:"nav-link p-0 mb-2"},"Home")),r.a.createElement("div",{className:"nav-item"},r.a.createElement(m.a,{to:"https://engineering.salesforce.com/",className:"nav-link p-0 mb-2"},"Blog")),r.a.createElement("div",{className:"nav-item"},r.a.createElement(m.a,{to:"https://twitter.com/salesforceeng",className:"nav-link p-0 mb-2"},"Twitter")),r.a.createElement("div",{className:"nav-item"},r.a.createElement(m.a,{to:"https://salesforce.wd1.myworkdayjobs.com/External_Career_Site/2/refreshFacet/318c8bb6f553100021d223d9780d30be?source=Salesforce_Open_Source_Site",className:"nav-link p-0 mb-2"},"Careers")),r.a.createElement("div",{className:"nav-item"},r.a.createElement(m.a,{to:"/notices",className:"nav-link p-0 mb-2"},"Notices")))),r.a.createElement("div",{className:"col-md-6 col-lg-4"},r.a.createElement("h5",null,"On GitHub"),r.a.createElement("div",{className:"d-flex flex-wrap"},e))),r.a.createElement("div",{className:"row justify-content-center text-center"},r.a.createElement("div",{className:"col-xl-10"},r.a.createElement("ul",{className:"list-inline mb-0"},r.a.createElement("li",{className:"list-inline-item pr-2 mb-0 text-muted small"},"Copyright © ",(new Date).getFullYear(),", Salesforce, Inc"),r.a.createElement("li",{className:"list-inline-item pr-2 mb-0 text-muted small"},r.a.createElement(m.a,{to:"https://www.salesforce.com/company/privacy/"},"Privacy Policy")),r.a.createElement("li",{className:"list-inline-item pr-2 mb-0 text-muted small"},r.a.createElement(m.a,{to:"https://www.salesforce.com/company/legal/sfdc-website-terms-of-service.jsp"},"Terms")),r.a.createElement("li",{className:"list-inline-item pr-2 mb-0 text-muted small"},r.a.createElement(m.a,{to:"#",className:"page-footer_link optanon-toggle-display","data-ignore-geolocation":"true"},"Cookie Preferences")))))))};t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(u,null),t,r.a.createElement(f,null))}},195:function(e){e.exports={data:{noticesToml:{notices:[{name:"Audience Studio and Data Studio",url:"/assets/notices/Audience-Studio-and-Data-Studio-Open-Source.pdf"},{name:"B2B Commerce",url:"/assets/notices/B2B-Commerce-Open-Source.pdf"},{name:"Commerce Cloud",url:"/assets/notices/Commerce-Cloud-Open-Source.pdf"},{name:"Data.com",url:"/assets/notices/Data-com-Open-Source.pdf"},{name:"IoT",url:"/assets/notices/IoT-Open-Source.pdf"},{name:"LiveMessage",url:"/assets/notices/LiveMessage-Open-Source.pdf"},{name:"Marketing Cloud",url:"/assets/notices/Marketing-Cloud-Open-Source.pdf"},{name:"MuleSoft",url:"https://docs.mulesoft.com/mule-runtime/3.9/third-party-software-in-mule"},{name:"Pardot",url:"/assets/notices/Pardot-Open-Source.pdf"},{name:"Quip",url:"/assets/notices/Quip-Open-Source.pdf"},{name:"Salesforce",url:"/assets/notices/Salesforce-Open-Source.pdf"},{name:"Tableau",url:"/assets/notices/Tableau-CRM-Open-Source.pdf"},{name:"Vlocity",url:"/assets/notices/Vlocity-Open-Source.pdf"},{name:"WDC",url:"/assets/notices/WDC-Open-Source.pdf"}]}}}}}]);
//# sourceMappingURL=component---src-pages-notices-js-20f51cda0dbdba8e9bb9.js.map