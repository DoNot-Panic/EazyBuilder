(this.webpackJsonp=this.webpackJsonp||[]).push([[55],{"/GZH":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return s})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return d}));var r=40,i=35,o=13,a=27,c=36,s=37,l=39,u=32,d=38},"4lAS":function(t,e,n){"use strict";var r=n("ofGl"),i=n("XBTk"),o=n("g3So"),a=n("s1D3"),c=n("FkSe"),s=n("Pyw5"),l=n.n(s);const u={components:{BButton:r.a,GlIcon:a.a,GlLoadingIcon:c.a},mixins:[o.a],props:{category:{type:String,required:!1,default:i.u.primary,validator:function(t){return Object.keys(i.u).includes(t)}},variant:{type:String,required:!1,default:i.x.default,validator:function(t){return Object.keys(i.x).includes(t)}},size:{type:String,required:!1,default:i.v.medium,validator:function(t){return Object.keys(i.v).includes(t)}},selected:{type:Boolean,required:!1,default:!1},icon:{type:String,required:!1,default:""},label:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},buttonTextClasses:{type:String,required:!1,default:""},disabled:{type:Boolean,required:!1,default:!1}},computed:{hasIcon:function(){return""!==this.icon},hasIconOnly:function(){return 0===Object.keys(this.$slots).length&&this.hasIcon},isButtonDisabled:function(){return this.disabled||this.loading},buttonClasses:function(){var t=["gl-button"];return[i.x.dashed,i.x.link].includes(this.variant)||this.category===i.u.primary||t.push("btn-".concat(this.variant,"-").concat(this.category)),t.push({"btn-icon":this.hasIconOnly,"button-ellipsis-horizontal":this.hasIconOnly&&"ellipsis_h"===this.icon,selected:this.selected}),this.label&&t.push("btn","btn-label","btn-".concat(this.buttonSize)),t},buttonSize:function(){return i.w[this.size]}}};const d=l()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.label?"span":"b-button",t._g(t._b({directives:[{name:"safe-link",rawName:"v-safe-link:[safeLinkConfig]",arg:t.safeLinkConfig}],tag:"component",class:t.buttonClasses,attrs:{target:t.target,variant:t.variant,size:t.buttonSize,disabled:t.isButtonDisabled}},"component",t.$attrs,!1),t.$listeners),[t.loading?n("gl-loading-icon",{staticClass:"gl-button-icon gl-button-loading-indicator",attrs:{inline:""}}):t._e(),t._v(" "),!t.hasIcon||t.hasIconOnly&&t.loading?t._e():n("gl-icon",{staticClass:"gl-button-icon",attrs:{name:t.icon}}),t._v(" "),t._t("emoji"),t._v(" "),t.hasIconOnly?t._e():n("span",{staticClass:"gl-button-text",class:t.buttonTextClasses},[t._t("default")],2)],2)},staticRenderFns:[]},void 0,u,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=d},"6iM1":function(t,e,n){"use strict";e.a={methods:{listenOnRoot:function(t,e){var n=this;this.$root.$on(t,e),this.$on("hook:beforeDestroy",(function(){n.$root.$off(t,e)}))},listenOnRootOnce:function(t,e){var n=this;this.$root.$once(t,e),this.$on("hook:beforeDestroy",(function(){n.$root.$off(t,e)}))},emitOnRoot:function(t){for(var e,n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];(e=this.$root).$emit.apply(e,[t].concat(r))}}}},AMrI:function(t,e,n){"use strict";var r={name:"UserAccessRoleBadge",components:{GlBadge:n("Lzak").a}},i=n("tBpV"),o=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("gl-badge",{staticClass:"gl-bg-transparent! gl-inset-border-1-gray-100!"},[this._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},DXSV:function(t,e,n){"use strict";e.a={props:{id:{type:String}},data:function(){return{localId_:null}},computed:{safeId:function(){var t=this.id||this.localId_;return function(e){return t?(e=String(e||"").replace(/\s+/g,"_"))?t+"_"+e:t:null}}},mounted:function(){var t=this;this.$nextTick((function(){t.localId_="__BVID__".concat(t._uid)}))}}},"E/HZ":function(t,e,n){"use strict";n.d(e,"j",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"g",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return d})),n.d(e,"i",(function(){return b})),n.d(e,"h",(function(){return f})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return g}));var r=n("/lV4");const i=20,o="subgroups_and_projects",a="shared",c="archived",s=".js-groups-list-holder",l=".js-group-filter-form",u=".groups-list",d={FAILURE:Object(r.a)("An error occurred. Please try again."),LEAVE_FORBIDDEN:Object(r.e)("GroupsTree|Failed to leave the group. Please make sure you are not the only owner."),LEAVE_BTN_TITLE:Object(r.e)("GroupsTree|Leave this group"),EDIT_BTN_TITLE:Object(r.e)("GroupsTree|Edit group"),GROUP_SEARCH_EMPTY:Object(r.e)("GroupsTree|No groups matched your search"),GROUP_PROJECT_SEARCH_EMPTY:Object(r.e)("GroupsTree|No groups or projects matched your search")},b={PROJECT:"project",GROUP:"group"},f={public:Object(r.a)("Public - The group and any public projects can be viewed without any authentication."),internal:Object(r.a)("Internal - The group and any internal projects can be viewed by any logged in user except external users."),private:Object(r.a)("Private - The group and its projects can only be viewed by members.")},p={public:Object(r.a)("Public - The project can be accessed without any authentication."),internal:Object(r.a)("Internal - The project can be accessed by any logged in user except external users."),private:Object(r.a)("Private - Project access must be granted explicitly to each user. If this project is part of a group, access will be granted to members of the group.")},g={public:"earth",internal:"shield",private:"lock"}},FkSe:function(t,e,n){"use strict";var r=n("Pyw5"),i=["sm","md","lg","xl"],o={dark:"dark",light:"light"};const a={props:{label:{type:String,required:!1,default:"Loading"},size:{type:String,required:!1,default:"sm",validator:function(t){return-1!==i.indexOf(t)}},color:{type:String,required:!1,default:o.dark,validator:function(t){return Object.keys(o).includes(t)}},inline:{type:Boolean,required:!1,default:!1}},computed:{rootElementType:function(){return this.inline?"span":"div"},cssClasses:function(){return["gl-spinner","".concat("gl-spinner","-").concat(o[this.color]),"".concat("gl-spinner","-").concat(this.size)]}}};const c=n.n(r)()({render:function(){var t=this.$createElement,e=this._self._c||t;return e(this.rootElementType,{tag:"component",staticClass:"gl-spinner-container"},[e("span",{staticClass:"align-text-bottom",class:this.cssClasses,attrs:{"aria-label":this.label}})])},staticRenderFns:[]},void 0,a,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=c},LLbv:function(t,e,n){"use strict";n.d(e,"a",(function(){return D}));var r=n("0zRR"),i=n("EGUT"),o=n("qTlp"),a=n("NSGy"),c=n("TjC/"),s=n("t8l0"),l=n("EGlP"),u=n("BrvI"),d=n("Ddgg"),b=n("7bmO"),f=n("RhHz");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O="__BV_Tooltip__",y={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},h=/^html$/i,j=/^noninteractive$/i,m=/^nofade$/i,_=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,P=/^(window|viewport|scrollParent)$/i,w=/^d\d+$/i,S=/^ds\d+$/i,k=/^dh\d+$/i,E=/^o-?\d+$/i,T=/^v-.+$/i,$=/\s+/,I=function(t,e,n){if(l.g){var p=function(t,e){var n={title:void 0,trigger:"",placement:"top",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,id:null,html:!1,interactive:!0,disabled:!1,delay:Object(s.b)(r.Eb,"delay"),boundary:String(Object(s.b)(r.Eb,"boundary")),boundaryPadding:Object(d.c)(Object(s.b)(r.Eb,"boundaryPadding"),0),variant:Object(s.b)(r.Eb,"variant"),customClass:Object(s.b)(r.Eb,"customClass")};if(Object(u.l)(t.value)||Object(u.g)(t.value)?n.title=t.value:Object(u.e)(t.value)?n.title=t.value:Object(u.i)(t.value)&&(n=g(g({},n),t.value)),Object(u.m)(n.title)){var i=e.data||{};n.title=i.attrs&&!Object(u.n)(i.attrs.title)?i.attrs.title:void 0}Object(u.i)(n.delay)||(n.delay={show:Object(d.c)(n.delay,0),hide:Object(d.c)(n.delay,0)}),t.arg&&(n.container="#".concat(t.arg)),Object(b.i)(t.modifiers).forEach((function(t){if(h.test(t))n.html=!0;else if(j.test(t))n.interactive=!1;else if(m.test(t))n.animation=!1;else if(_.test(t))n.placement=t;else if(P.test(t))t="scrollparent"===t?"scrollParent":t,n.boundary=t;else if(w.test(t)){var e=Object(d.c)(t.slice(1),0);n.delay.show=e,n.delay.hide=e}else S.test(t)?n.delay.show=Object(d.c)(t.slice(2),0):k.test(t)?n.delay.hide=Object(d.c)(t.slice(2),0):E.test(t)?n.offset=Object(d.c)(t.slice(1),0):T.test(t)&&(n.variant=t.slice(2)||null)}));var a={};return Object(c.b)(n.trigger||"").filter(o.a).join(" ").trim().toLowerCase().split($).forEach((function(t){y[t]&&(a[t]=!0)})),Object(b.i)(t.modifiers).forEach((function(t){t=t.toLowerCase(),y[t]&&(a[t]=!0)})),n.trigger=Object(b.i)(a).join(" "),"blur"===n.trigger&&(n.trigger="focus"),n.trigger||(n.trigger="hover focus"),n}(e,n);if(!t[O]){var v=n.context;t[O]=new f.a({parent:v,_scopeId:Object(i.a)(v,void 0)}),t[O].__bv_prev_data__={},t[O].$on("show",(function(){Object(u.e)(p.title)&&t[O].updateData({title:p.title(t)})}))}var I={title:p.title,triggers:p.trigger,placement:p.placement,fallbackPlacement:p.fallbackPlacement,variant:p.variant,customClass:p.customClass,container:p.container,boundary:p.boundary,delay:p.delay,offset:p.offset,noFade:!p.animation,id:p.id,interactive:p.interactive,disabled:p.disabled,html:p.html},D=t[O].__bv_prev_data__;if(t[O].__bv_prev_data__=I,!Object(a.a)(I,D)){var C={target:t};Object(b.i)(I).forEach((function(e){I[e]!==D[e]&&(C[e]="title"===e&&Object(u.e)(I[e])?I[e](t):I[e])})),t[O].updateData(C)}}},D={bind:function(t,e,n){I(t,e,n)},componentUpdated:function(t,e,n){n.context.$nextTick((function(){I(t,e,n)}))},unbind:function(t){!function(t){t[O]&&(t[O].$destroy(),t[O]=null),delete t[O]}(t)}}},Lzak:function(t,e,n){"use strict";var r=n("0zRR"),i=n("/Szx"),o=n("lgrP"),a=n("t8l0"),c=n("7bmO"),s=n("ua/H"),l=n("U9NU"),u=n("1m+M");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=Object(c.k)(u.b,["event","routerTag"]);delete f.href.default,delete f.to.default;var p=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({tag:{type:String,default:"span"},variant:{type:String,default:function(){return Object(a.b)(r.c,"variant")}},pill:{type:Boolean,default:!1}},f),g=i.a.extend({name:r.c,functional:!0,props:p,render:function(t,e){var n=e.props,r=e.data,i=e.children,a=Object(l.d)(n),c=a?u.a:n.tag,d={staticClass:"badge",class:[n.variant?"badge-".concat(n.variant):"badge-secondary",{"badge-pill":n.pill,active:n.active,disabled:n.disabled}],props:a?Object(s.a)(f,n):{}};return t(c,Object(o.a)(r,d),i)}}),v=n("XBTk"),O=n("s1D3"),y=n("Pyw5"),h=n.n(y);const j={components:{BBadge:g,GlIcon:O.a},inheritAttrs:!1,props:{size:{type:String,default:v.h.md,validator:function(t){return void 0!==v.h[t]},required:!1},variant:{type:String,default:v.i.muted,validator:function(t){return void 0!==v.i[t]},required:!1},icon:{type:String,required:!1,default:null}},computed:{hasIconOnly:function(){return Boolean(this.icon&&0===Object.keys(this.$slots).length)},role:function(){return this.hasIconOnly?"img":void 0}}};const m=h()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-badge",t._b({class:["gl-badge",t.size],attrs:{variant:t.variant,role:t.role,pill:""}},"b-badge",t.$attrs,!1),[t.icon?n("gl-icon",{staticClass:"gl-badge-icon",class:{"gl-mr-2":!t.hasIconOnly},attrs:{name:t.icon}}):t._e(),t._v(" "),t._t("default")],2)},staticRenderFns:[]},void 0,j,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=m},cfII:function(t,e,n){"use strict";var r=n("o/E4"),i=n("kI/X");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a=function(t,e,n){if(t=t?t.$el||t:null,!Object(r.s)(t))return null;if(Object(i.b)("observeDom"))return null;var c=new r.a((function(t){for(var n=!1,r=0;r<t.length&&!n;r++){var i=t[r],o=i.type,a=i.target;"characterData"===o&&a.nodeType===Node.TEXT_NODE?n=!0:"attributes"===o?n=!0:"childList"===o&&(i.addedNodes.length>0||i.removedNodes.length>0)&&(n=!0)}n&&e()}));return c.observe(t,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({childList:!0,subtree:!0},n)),c}},ofGl:function(t,e,n){"use strict";n.d(e,"a",(function(){return $}));var r=n("0zRR"),i=n("/GZH"),o=n("/Szx"),a=n("lgrP"),c=n("TjC/"),s=n("t8l0"),l=n("o/E4"),u=n("QXXq"),d=n("BrvI"),b=n("7bmO"),f=n("ua/H"),p=n("U9NU"),g=n("1m+M");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=Object(b.k)(g.b,["event","routerTag"]);delete h.href.default,delete h.to.default;var j=O(O({},{block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:String,default:function(){return Object(s.b)(r.g,"size")}},variant:{type:String,default:function(){return Object(s.b)(r.g,"variant")}},type:{type:String,default:"button"},tag:{type:String,default:"button"},pill:{type:Boolean,default:!1},squared:{type:Boolean,default:!1},pressed:{type:Boolean,default:null}}),h),m=function(t){"focusin"===t.type?Object(l.b)(t.target,"focus"):"focusout"===t.type&&Object(l.y)(t.target,"focus")},_=function(t){return Object(p.d)(t)||Object(l.t)(t.tag,"a")},P=function(t){return Object(d.b)(t.pressed)},w=function(t){return!(_(t)||t.tag&&!Object(l.t)(t.tag,"button"))},S=function(t){return!_(t)&&!w(t)},k=function(t){var e;return["btn-".concat(t.variant||Object(s.b)(r.g,"variant")),(e={},y(e,"btn-".concat(t.size),t.size),y(e,"btn-block",t.block),y(e,"rounded-pill",t.pill),y(e,"rounded-0",t.squared&&!t.pill),y(e,"disabled",t.disabled),y(e,"active",t.pressed),e)]},E=function(t){return _(t)?Object(f.a)(h,t):{}},T=function(t,e){var n=w(t),r=_(t),i=P(t),o=S(t),a=r&&"#"===t.href,c=e.attrs&&e.attrs.role?e.attrs.role:null,s=e.attrs?e.attrs.tabindex:null;return(o||a)&&(s="0"),{type:n&&!r?t.type:null,disabled:n?t.disabled:null,role:o||a?"button":c,"aria-disabled":o?String(t.disabled):null,"aria-pressed":i?String(t.pressed):null,autocomplete:i?"off":null,tabindex:t.disabled&&!n?"-1":s}},$=o.a.extend({name:r.g,functional:!0,props:j,render:function(t,e){var n=e.props,r=e.data,o=e.listeners,s=e.children,l=P(n),b=_(n),f=S(n),p=b&&"#"===n.href,v={keydown:function(t){if(!n.disabled&&(f||p)){var e=t.keyCode;if(e===i.h||e===i.c&&f){var r=t.currentTarget||t.target;Object(u.d)(t,{propagation:!1}),r.click()}}},click:function(t){n.disabled&&Object(d.d)(t)?Object(u.d)(t):l&&o&&o["update:pressed"]&&Object(c.b)(o["update:pressed"]).forEach((function(t){Object(d.e)(t)&&t(!n.pressed)}))}};l&&(v.focusin=m,v.focusout=m);var O={staticClass:"btn",class:k(n),props:E(n),attrs:T(n,r),on:v};return t(b?g.a:n.tag,Object(a.a)(r,O),s)}})},rPnh:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o}));var r=n("zlPX"),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return String(t).replace(r.f,"")},o=function(t,e){return t?{innerHTML:t}:e?{textContent:e}:{}}},z4I3:function(t,e,n){"use strict";var r=n("ZfjD"),i=n("jl4x"),o=n("kd5c"),a=n("YEnO"),c=n("wZF9"),s=n("OhKz").f,l=n("oRA1"),u=o.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof b?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(b,u);var f=b.prototype=u.prototype;f.constructor=b;var p=f.toString,g="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;s(f,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=p.call(t);if(a(d,t))return"";var n=g?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:b})}}}]);
//# sourceMappingURL=commons-pages.dashboard.groups.index-pages.explore.groups-pages.groups.details-pages.groups.show-pag-b829919a.dc5f4559.chunk.js.map