!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("moment"),require("pikaday")):"function"==typeof define&&define.amd?define(["moment","pikaday"],e):t.vuePikaday=e(t.moment,t.Pikaday)}(this,function(moment,Pikaday){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}moment=moment&&moment.hasOwnProperty("default")?moment.default:moment,Pikaday=Pikaday&&Pikaday.hasOwnProperty("default")?Pikaday.default:Pikaday;var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var n="object"==typeof e&&e&&e.Object===Object&&e,i="object"==typeof self&&self&&self.Object===Object&&self,o=n||i||Function("return this")(),r=o.Symbol,u=Object.prototype,s=u.hasOwnProperty,a=u.toString,f=r?r.toStringTag:void 0;var c=function(t){var e=s.call(t,f),n=t[f];try{t[f]=void 0}catch(t){}var i=a.call(t);return e?t[f]=n:delete t[f],i},l=Object.prototype.toString;var d=function(t){return l.call(t)},p="[object Null]",h="[object Undefined]",v=r?r.toStringTag:void 0;var y=function(t){return null==t?void 0===t?h:p:v&&v in Object(t)?c(t):d(t)};var m=function(t){return null!=t&&"object"==typeof t},b="[object Date]";var g=function(t){return m(t)&&y(t)==b};var O,w=function(t){return function(e){return t(e)}},j=(function(t,e){var i=e&&!e.nodeType&&e,o=i&&t&&!t.nodeType&&t,r=o&&o.exports===i&&n.process,u=function(){try{var t=o&&o.require&&o.require("util").types;return t||r&&r.binding&&r.binding("util")}catch(t){}}();t.exports=u}(O={exports:{}},O.exports),O.exports),x=j&&j.isDate,S=x?w(x):g;var k={name:"vue-pikaday",inheritAttrs:!1,props:{value:{validator:function(e){var n=[void 0,null];if(function(t){return t instanceof Event||t&&t.constructor&&"Event"===t.constructor.name}(e))return!0;if(S(e))return!0;for(var i=0;i<n.length;i++){var o=n[i];if(e===o||t(e)===o)return!0}return!1},required:!0},options:{required:!1,default:function(){return{}}},autoDefault:{type:Boolean,required:!1,default:!1}},data:function(){return{visible:!1,elAttrs:{type:"text"},defaultOptions:{format:"D MMM YYYY"},mergedOptions:{}}},computed:{elementAttributes:function(){return Object.assign({},this.$attrs,this.elAttrs)}},render:function(t){return t("input",{attrs:this.elementAttributes,on:this.$listeners,value:this.inputValue(this.value)},this.$slots.default)},beforeMount:function(){this.mergedOptions=Object.assign({},this.defaultOptions,this.options)},mounted:function(){var t=this;this.create(),this.$watch("value",function(e){S(e)||(e=null),t.visible||t.pikaday.setDate(e,!0),t.change(e)})},beforeDestroy:function(){this.destroy()},methods:{create:function(){var t=this;this.mergedOptions.field=this.$el,this.bindListener("onSelect",function(){return t.onSelect()}),this.bindListener("onOpen",function(){return t.onOpen()}),this.bindListener("onClose",function(){return t.onClose()}),this.pikaday=new Pikaday(this.mergedOptions);var e=this.value;!this.value&&this.autoDefault&&(e=moment().toDate(),this.change(e)),this.pikaday.setDate(e),!1===this.mergedOptions.bound?this.hide():this.visible?this.show():this.hide()},destroy:function(){this.pikaday.destroy()},change:function(t){this.$emit("input",t),this.$emit("input-value",this.inputValue(t))},inputValue:function(t){if(!S(t))return null;var e=moment(t);return e.isValid()?e.format(this.mergedOptions.format):null},onSelect:function(){this.change(this.pikaday.getDate())},onOpen:function(){this.visible=!0},onClose:function(){S(this.value)||(this.pikaday.setDate(null,!0),this.change(null)),this.visible=!1},show:function(){this.pikaday.show()},hide:function(){this.pikaday.hide()},bindListener:function(t,e){var n=this;if(this.mergedOptions[t]){var i=this.mergedOptions[t];this.mergedOptions[t]=function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];i(o),e.apply(n)}}else this.mergedOptions[t]=e}}};var D=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},$=function(){return o.Date.now()},T="[object Symbol]";var q=function(t){return"symbol"==typeof t||m(t)&&y(t)==T},A=NaN,M=/^\s+|\s+$/g,V=/^[-+]0x[0-9a-f]+$/i,P=/^0b[01]+$/i,C=/^0o[0-7]+$/i,E=parseInt;var L=function(t){if("number"==typeof t)return t;if(q(t))return A;if(D(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=D(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(M,"");var n=P.test(t);return n||C.test(t)?E(t.slice(2),n?2:8):V.test(t)?A:+t},Y="Expected a function",I=Math.max,N=Math.min;var W=function(t,e,n){var i,o,r,u,s,a,f=0,c=!1,l=!1,d=!0;if("function"!=typeof t)throw new TypeError(Y);function p(e){var n=i,r=o;return i=o=void 0,f=e,u=t.apply(r,n)}function h(t){var n=t-a;return void 0===a||n>=e||n<0||l&&t-f>=r}function v(){var t=$();if(h(t))return y(t);s=setTimeout(v,function(t){var n=e-(t-a);return l?N(n,r-(t-f)):n}(t))}function y(t){return s=void 0,d&&i?p(t):(i=o=void 0,u)}function m(){var t=$(),n=h(t);if(i=arguments,o=this,a=t,n){if(void 0===s)return function(t){return f=t,s=setTimeout(v,e),c?p(t):u}(a);if(l)return s=setTimeout(v,e),p(a)}return void 0===s&&(s=setTimeout(v,e)),u}return e=L(e)||0,D(n)&&(c=!!n.leading,r=(l="maxWait"in n)?I(L(n.maxWait)||0,e):r,d="trailing"in n?!!n.trailing:d),m.cancel=function(){void 0!==s&&clearTimeout(s),f=0,i=a=o=s=void 0},m.flush=function(){return void 0===s?u:y($())},m};function B(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e[n]=t,i=i||e,t?i.show():i.hide()}var F={inserted:function(t,e,n){var i=n.componentInstance;i.onOpen=function(){return B(!0,n.context,e.expression,i)},i.onClose=W(function(){return B(!1,n.context,e.expression,i)},100)},update:function(t,e,n){B(e.value,n.componentInstance,e.expression)}},U={install:function(t){t.component(k.name,k),t.directive("p-visible",F)}};return"undefined"!=typeof window&&window.Vue&&window.Vue.use(U),U});
//# sourceMappingURL=vue-pikaday.js.map
