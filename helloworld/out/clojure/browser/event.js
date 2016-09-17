// Compiled by ClojureScript 1.9.230 {:static-fns true, :optimize-constants true}
goog.provide('clojure.browser.event');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventType');

/**
 * @interface
 */
clojure.browser.event.IEventType = function(){};

clojure.browser.event.event_types = (function clojure$browser$event$event_types(this$){
if((!((this$ == null))) && (!((this$.clojure$browser$event$IEventType$event_types$arity$1 == null)))){
return this$.clojure$browser$event$IEventType$event_types$arity$1(this$);
} else {
var x__3392__auto__ = (((this$ == null))?null:this$);
var m__3393__auto__ = (clojure.browser.event.event_types[goog.typeOf(x__3392__auto__)]);
if(!((m__3393__auto__ == null))){
return (m__3393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__3393__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__3393__auto__.call(null,this$));
} else {
var m__3393__auto____$1 = (clojure.browser.event.event_types["_"]);
if(!((m__3393__auto____$1 == null))){
return (m__3393__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__3393__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__3393__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventType.event-types",this$);
}
}
}
});

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$ = true;

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__1718){
var vec__1719 = p__1718;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1719,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1719,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
if(typeof Element !== 'undefined'){
Element.prototype.clojure$browser$event$IEventType$ = true;

Element.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__1722){
var vec__1723 = p__1722;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1723,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1723,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
} else {
}
clojure.browser.event.listen = (function clojure$browser$event$listen(var_args){
var args1726 = [];
var len__3644__auto___1733 = arguments.length;
var i__3645__auto___1734 = (0);
while(true){
if((i__3645__auto___1734 < len__3644__auto___1733)){
args1726.push((arguments[i__3645__auto___1734]));

var G__1735 = (i__3645__auto___1734 + (1));
i__3645__auto___1734 = G__1735;
continue;
} else {
}
break;
}

var G__1728 = args1726.length;
switch (G__1728) {
case 3:
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1726.length)].join('')));

}
});

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
var G__1729 = src;
var G__1730 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__1731 = fn;
var G__1732 = capture_QMARK_;
return goog.events.listen(G__1729,G__1730,G__1731,G__1732);
});

clojure.browser.event.listen.cljs$lang$maxFixedArity = 4;

clojure.browser.event.listen_once = (function clojure$browser$event$listen_once(var_args){
var args1737 = [];
var len__3644__auto___1744 = arguments.length;
var i__3645__auto___1745 = (0);
while(true){
if((i__3645__auto___1745 < len__3644__auto___1744)){
args1737.push((arguments[i__3645__auto___1745]));

var G__1746 = (i__3645__auto___1745 + (1));
i__3645__auto___1745 = G__1746;
continue;
} else {
}
break;
}

var G__1739 = args1737.length;
switch (G__1739) {
case 3:
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1737.length)].join('')));

}
});

clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});

clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
var G__1740 = src;
var G__1741 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__1742 = fn;
var G__1743 = capture_QMARK_;
return goog.events.listenOnce(G__1740,G__1741,G__1742,G__1743);
});

clojure.browser.event.listen_once.cljs$lang$maxFixedArity = 4;

clojure.browser.event.unlisten = (function clojure$browser$event$unlisten(var_args){
var args1748 = [];
var len__3644__auto___1755 = arguments.length;
var i__3645__auto___1756 = (0);
while(true){
if((i__3645__auto___1756 < len__3644__auto___1755)){
args1748.push((arguments[i__3645__auto___1756]));

var G__1757 = (i__3645__auto___1756 + (1));
i__3645__auto___1756 = G__1757;
continue;
} else {
}
break;
}

var G__1750 = args1748.length;
switch (G__1750) {
case 3:
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1748.length)].join('')));

}
});

clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});

clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
var G__1751 = src;
var G__1752 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__1753 = fn;
var G__1754 = capture_QMARK_;
return goog.events.unlisten(G__1751,G__1752,G__1753,G__1754);
});

clojure.browser.event.unlisten.cljs$lang$maxFixedArity = 4;

clojure.browser.event.unlisten_by_key = (function clojure$browser$event$unlisten_by_key(key){
return goog.events.unlistenByKey(key);
});
clojure.browser.event.dispatch_event = (function clojure$browser$event$dispatch_event(src,event){
return goog.events.dispatchEvent(src,event);
});
clojure.browser.event.expose = (function clojure$browser$event$expose(e){
return goog.events.expose(e);
});
clojure.browser.event.fire_listeners = (function clojure$browser$event$fire_listeners(obj,type,capture,event){
return null;
});
clojure.browser.event.total_listener_count = (function clojure$browser$event$total_listener_count(){
return goog.events.getTotalListenerCount();
});
clojure.browser.event.get_listener = (function clojure$browser$event$get_listener(src,type,listener,opt_capt,opt_handler){
return null;
});
clojure.browser.event.all_listeners = (function clojure$browser$event$all_listeners(obj,type,capture){
return null;
});
clojure.browser.event.unique_event_id = (function clojure$browser$event$unique_event_id(event_type){
return null;
});
clojure.browser.event.has_listener = (function clojure$browser$event$has_listener(obj,opt_type,opt_capture){
return null;
});
clojure.browser.event.remove_all = (function clojure$browser$event$remove_all(opt_obj,opt_type,opt_capt){
return null;
});
