!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.Vuelm=n()}(this,function(){"use strict";function t(t,n){return n.split(".").reduce(function(t,n){return t[n]},t)}function n(t,e){for(var o in e)!function(o){var i=null;Array.isArray(e[o])?(i=[],e[o].forEach(function(t){i.push(n({},t))})):i="object"===r(e[o])?n({},e[o]):e[o],t[o]=i}(o);return t}function e(t,n){var e=t.methods||{},o=t.name||"unknown",i=["get","update","observe","_notify"];for(var s in n)"function"!=r(n[s])||function(t){return i.filter(function(n){return n==t}).length>0}(s)||(e.hasOwnProperty(s)?console.warn("Component '%s' already have a method called '%s'",o,s):e[s]=n[s].bind(n));e.sync=function(t){var n=JSON.parse(JSON.stringify(t));this.update("SYNC_MODEL",n)}.bind(n),t.methods=e}function o(t,e,o){if(e.SYNC_MODEL=function(t,e){return n(t,e)},this._subscriber_id=100,this._subscribers={},this.logger=!1,this._options={state:t,updates:e},void 0!==o||null!==o)for(var r in o)this[r]=o[r]}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function t(t){this.value=t}function n(n){function e(r,i){try{var s=n[r](i),u=s.value;u instanceof t?Promise.resolve(u.value).then(function(t){e("next",t)},function(t){e("throw",t)}):o(s.done?"return":"normal",s.value)}catch(t){o("throw",t)}}function o(t,n){switch(t){case"return":r.resolve({value:n,done:!0});break;case"throw":r.reject(n);break;default:r.resolve({value:n,done:!1})}(r=r.next)?e(r.key,r.arg):i=null}var r,i;this._invoke=function(t,n){return new Promise(function(o,s){var u={key:t,arg:n,resolve:o,reject:s,next:null};i?i=i.next=u:(r=i=u,e(t,n))})},"function"!=typeof n.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(n.prototype[Symbol.asyncIterator]=function(){return this}),n.prototype.next=function(t){return this._invoke("next",t)},n.prototype.throw=function(t){return this._invoke("throw",t)},n.prototype.return=function(t){return this._invoke("return",t)}}();o.prototype={_notify:function(){var t=n({},this._options.state);for(var e in this._subscribers)this._subscribers[e](t);t=null},state:function(){return n({},this._options.state)},get:function(n){return t(this._options.state,n)},update:function(t,e){var o=n({},this._options.state),r={};this.logger&&console.group&&console.group(t),this.logger&&console.log("Old State:",o),"function"==typeof this._options.updates[t]?(r=this._options.updates[t].call(this,o,e),this._options.state=r):r=o,this.logger&&console.log("New State:",r),this.logger&&console.groupEnd&&console.groupEnd(),this._notify(),o=null,r=null},observe:function(t){var n=this,e=this._subscriber_id++;return n._subscribers[e]=function(e){t.call(n,e)},function(){var t=e;delete n._subscribers[t]}}};var i="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,s=function(t){return function(){console.warn("'%s' is deprecated and will be removed on next version.",t)}};return{version:"0.8.1",types:function(){var t={};if(!arguments)return t;for(var n=arguments.length,e=0;e<n;e++)t[arguments[e]]=arguments[e].toUpperCase();return t},store:function(t,n,e){var r=new o(t,n,e);return i&&i.emit("vuex:init",r),r},info:s("info"),logger:s("logger"),connect:function(n,o){var i=n.beforeCreate,s=n.beforeDestroy,u=n.beforeMount;{if("object"===(void 0===o?"undefined":r(o))){for(var f in o)e(n,o[f]);return n.beforeCreate=function(){var e=this,r=[];for(var s in o)r.push(o[s].observe(function(n){for(var o in n)e.hasOwnProperty(o)&&e.$set(e,o,t(n,o))}));void 0!==i&&i.call(n),n.$disposes=r},n.beforeDestroy=function(){void 0!==s&&s(),n.$disposes.forEach(function(t){return t()}),n.$disposes=null},n.beforeMount=function(){for(var n in o){var e=o[n].state();for(var r in e)this.hasOwnProperty(r)&&this.$set(this,r,t(e,r))}void 0!=u&&u()},n}console.warn('"store" object must be defined.')}}}});
