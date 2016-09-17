// Compiled by ClojureScript 1.9.230 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$cached,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__3343__auto__,writer__3344__auto__,opt__3345__auto__){
return cljs.core._write(writer__3344__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check)),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1822 = arguments.length;
var i__3645__auto___1823 = (0);
while(true){
if((i__3645__auto___1823 < len__3644__auto___1822)){
args__3647__auto__.push((arguments[i__3645__auto___1823]));

var G__1824 = (i__3645__auto___1823 + (1));
i__3645__auto___1823 = G__1824;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.impl.gen.quick_check_ref) : cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref)),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq1821){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1821));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1826 = arguments.length;
var i__3645__auto___1827 = (0);
while(true){
if((i__3645__auto___1827 < len__3644__auto___1826)){
args__3647__auto__.push((arguments[i__3645__auto___1827]));

var G__1828 = (i__3645__auto___1827 + (1));
i__3645__auto___1827 = G__1828;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.impl.gen.for_all_STAR__ref) : cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref)),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq1825){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1825));
});

var g_QMARK__1829 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)),cljs.core.str(" never required")].join('')));
}
}),null));
var g_1830 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__1829){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__1829))
,null));
var mkg_1831 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__1829,g_1830){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__1829,g_1830))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__1829,g_1830,mkg_1831){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g_QMARK__1829) : cljs.core.deref.call(null,g_QMARK__1829)).call(null,x);
});})(g_QMARK__1829,g_1830,mkg_1831))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__1829,g_1830,mkg_1831){
return (function cljs$spec$impl$gen$generator(gfn){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mkg_1831) : cljs.core.deref.call(null,mkg_1831)).call(null,gfn);
});})(g_QMARK__1829,g_1830,mkg_1831))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__1829,g_1830,mkg_1831){
return (function cljs$spec$impl$gen$generate(generator){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g_1830) : cljs.core.deref.call(null,g_1830)).call(null,generator);
});})(g_QMARK__1829,g_1830,mkg_1831))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator((function (rnd,size){
return cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gfnd) : cljs.core.deref.call(null,gfnd))).call(null,rnd,size);
}));
});
var g__5924__auto___1850 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__5924__auto___1850){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1851 = arguments.length;
var i__3645__auto___1852 = (0);
while(true){
if((i__3645__auto___1852 < len__3644__auto___1851)){
args__3647__auto__.push((arguments[i__3645__auto___1852]));

var G__1853 = (i__3645__auto___1852 + (1));
i__3645__auto___1852 = G__1853;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___1850))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___1850){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5924__auto___1850) : cljs.core.deref.call(null,g__5924__auto___1850)),args);
});})(g__5924__auto___1850))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__5924__auto___1850){
return (function (seq1832){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1832));
});})(g__5924__auto___1850))
;


var g__5924__auto___1854 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__5924__auto___1854){
return (function cljs$spec$impl$gen$list(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1855 = arguments.length;
var i__3645__auto___1856 = (0);
while(true){
if((i__3645__auto___1856 < len__3644__auto___1855)){
args__3647__auto__.push((arguments[i__3645__auto___1856]));

var G__1857 = (i__3645__auto___1856 + (1));
i__3645__auto___1856 = G__1857;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___1854))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___1854){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5924__auto___1854) : cljs.core.deref.call(null,g__5924__auto___1854)),args);
});})(g__5924__auto___1854))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__5924__auto___1854){
return (function (seq1833){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1833));
});})(g__5924__auto___1854))
;


var g__5924__auto___1858 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__5924__auto___1858){
return (function cljs$spec$impl$gen$map(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1859 = arguments.length;
var i__3645__auto___1860 = (0);
while(true){
if((i__3645__auto___1860 < len__3644__auto___1859)){
args__3647__auto__.push((arguments[i__3645__auto___1860]));

var G__1861 = (i__3645__auto___1860 + (1));
i__3645__auto___1860 = G__1861;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___1858))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___1858){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5924__auto___1858) : cljs.core.deref.call(null,g__5924__auto___1858)),args);
});})(g__5924__auto___1858))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__5924__auto___1858){
return (function (seq1834){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1834));
});})(g__5924__auto___1858))
;


var g__5924__auto___1862 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__5924__auto___1862){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1863 = arguments.length;
var i__3645__auto___1864 = (0);
while(true){
if((i__3645__auto___1864 < len__3644__auto___1863)){
args__3647__auto__.push((arguments[i__3645__auto___1864]));

var G__1865 = (i__3645__auto___1864 + (1));
i__3645__auto___1864 = G__1865;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___1862))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___1862){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5924__auto___1862) : cljs.core.deref.call(null,g__5924__auto___1862)),args);
});})(g__5924__auto___1862))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__5924__auto___1862){
return (function (seq1835){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1835));
});})(g__5924__auto___1862))
;


var g__5924__auto___1866 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__5924__auto___1866){
return (function cljs$spec$impl$gen$set(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1867 = arguments.length;
var i__3645__auto___1868 = (0);
while(true){
if((i__3645__auto___1868 < len__3644__auto___1867)){
args__3647__auto__.push((arguments[i__3645__auto___1868]));

var G__1869 = (i__3645__auto___1868 + (1));
i__3645__auto___1868 = G__1869;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___1866))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___1866){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5924__auto___1866) : cljs.core.deref.call(null,g__5924__auto___1866)),args);
});})(g__5924__auto___1866))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__5924__auto___1866){
return (function (seq1836){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1836));
});})(g__5924__auto___1866))
;


var g__5924__auto___1870 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__5924__auto___1870){
return (function cljs$spec$impl$gen$vector(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1871 = arguments.length;
var i__3645__auto___1872 = (0);
while(true){
if((i__3645__auto___1872 < len__3644__auto___1871)){
args__3647__auto__.push((arguments[i__3645__auto___1872]));

var G__1873 = (i__3645__auto___1872 + (1));
i__3645__auto___1872 = G__1873;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___1870))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___1870){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5924__auto___1870) : cljs.core.deref.call(null,g__5924__auto___1870)),args);
});})(g__5924__auto___1870))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__5924__auto___1870){
return (function (seq1837){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1837));
});})(g__5924__auto___1870))
;


var g__5924__auto___1874 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__5924__auto___1874){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1875 = arguments.length;
var i__3645__auto___1876 = (0);
while(true){
if((i__3645__auto___1876 < len__3644__auto___1875)){
args__3647__auto__.push((arguments[i__3645__auto___1876]));

var G__1877 = (i__3645__auto___1876 + (1));
i__3645__auto___1876 = G__1877;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___1874))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___1874){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5924__auto___1874) : cljs.core.deref.call(null,g__5924__auto___1874)),args);
});})(g__5924__auto___1874))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__5924__auto___1874){
return (function (seq1838){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1838));
});})(g__5924__auto___1874))
;


var g__5924__auto___1878 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__5924__auto___1878){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1879 = arguments.length;
var i__3645__auto___1880 = (0);
while(true){
if((i__3645__auto___1880 < len__3644__auto___1879)){
args__3647__auto__.push((arguments[i__3645__auto___1880]));

var G__1881 = (i__3645__auto___1880 + (1));
i__3645__auto___1880 = G__1881;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___1878))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___1878){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5924__auto___1878) : cljs.core.deref.call(null,g__5924__auto___1878)),args);
});})(g__5924__auto___1878))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__5924__auto___1878){
return (function (seq1839){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1839));
});})(g__5924__auto___1878))
;


var g__5924__auto___1882 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__5924__auto___1882){
return (function cljs$spec$impl$gen$elements(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1883 = arguments.length;
var i__3645__auto___1884 = (0);
while(true){
if((i__3645__auto___1884 < len__3644__auto___1883)){
args__3647__auto__.push((arguments[i__3645__auto___1884]));

var G__1885 = (i__3645__auto___1884 + (1));
i__3645__auto___1884 = G__1885;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___1882))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___1882){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5924__auto___1882) : cljs.core.deref.call(null,g__5924__auto___1882)),args);
});})(g__5924__auto___1882))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__5924__auto___1882){
return (function (seq1840){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1840));
});})(g__5924__auto___1882))
;


var g__5924__auto___1886 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__5924__auto___1886){
return (function cljs$spec$impl$gen$bind(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1887 = arguments.length;
var i__3645__auto___1888 = (0);
while(true){
if((i__3645__auto___1888 < len__3644__auto___1887)){
args__3647__auto__.push((arguments[i__3645__auto___1888]));

var G__1889 = (i__3645__auto___1888 + (1));
i__3645__auto___1888 = G__1889;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___1886))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___1886){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5924__auto___1886) : cljs.core.deref.call(null,g__5924__auto___1886)),args);
});})(g__5924__auto___1886))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__5924__auto___1886){
return (function (seq1841){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1841));
});})(g__5924__auto___1886))
;


var g__5924__auto___1890 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__5924__auto___1890){
return (function cljs$spec$impl$gen$choose(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1891 = arguments.length;
var i__3645__auto___1892 = (0);
while(true){
if((i__3645__auto___1892 < len__3644__auto___1891)){
args__3647__auto__.push((arguments[i__3645__auto___1892]));

var G__1893 = (i__3645__auto___1892 + (1));
i__3645__auto___1892 = G__1893;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___1890))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___1890){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5924__auto___1890) : cljs.core.deref.call(null,g__5924__auto___1890)),args);
});})(g__5924__auto___1890))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__5924__auto___1890){
return (function (seq1842){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1842));
});})(g__5924__auto___1890))
;


var g__5924__auto___1894 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__5924__auto___1894){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1895 = arguments.length;
var i__3645__auto___1896 = (0);
while(true){
if((i__3645__auto___1896 < len__3644__auto___1895)){
args__3647__auto__.push((arguments[i__3645__auto___1896]));

var G__1897 = (i__3645__auto___1896 + (1));
i__3645__auto___1896 = G__1897;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___1894))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___1894){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5924__auto___1894) : cljs.core.deref.call(null,g__5924__auto___1894)),args);
});})(g__5924__auto___1894))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__5924__auto___1894){
return (function (seq1843){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1843));
});})(g__5924__auto___1894))
;


var g__5924__auto___1898 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__5924__auto___1898){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1899 = arguments.length;
var i__3645__auto___1900 = (0);
while(true){
if((i__3645__auto___1900 < len__3644__auto___1899)){
args__3647__auto__.push((arguments[i__3645__auto___1900]));

var G__1901 = (i__3645__auto___1900 + (1));
i__3645__auto___1900 = G__1901;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___1898))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___1898){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5924__auto___1898) : cljs.core.deref.call(null,g__5924__auto___1898)),args);
});})(g__5924__auto___1898))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__5924__auto___1898){
return (function (seq1844){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1844));
});})(g__5924__auto___1898))
;


var g__5924__auto___1902 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__5924__auto___1902){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1903 = arguments.length;
var i__3645__auto___1904 = (0);
while(true){
if((i__3645__auto___1904 < len__3644__auto___1903)){
args__3647__auto__.push((arguments[i__3645__auto___1904]));

var G__1905 = (i__3645__auto___1904 + (1));
i__3645__auto___1904 = G__1905;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___1902))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___1902){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5924__auto___1902) : cljs.core.deref.call(null,g__5924__auto___1902)),args);
});})(g__5924__auto___1902))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__5924__auto___1902){
return (function (seq1845){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1845));
});})(g__5924__auto___1902))
;


var g__5924__auto___1906 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__5924__auto___1906){
return (function cljs$spec$impl$gen$sample(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1907 = arguments.length;
var i__3645__auto___1908 = (0);
while(true){
if((i__3645__auto___1908 < len__3644__auto___1907)){
args__3647__auto__.push((arguments[i__3645__auto___1908]));

var G__1909 = (i__3645__auto___1908 + (1));
i__3645__auto___1908 = G__1909;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___1906))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___1906){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5924__auto___1906) : cljs.core.deref.call(null,g__5924__auto___1906)),args);
});})(g__5924__auto___1906))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__5924__auto___1906){
return (function (seq1846){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1846));
});})(g__5924__auto___1906))
;


var g__5924__auto___1910 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__5924__auto___1910){
return (function cljs$spec$impl$gen$return(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1911 = arguments.length;
var i__3645__auto___1912 = (0);
while(true){
if((i__3645__auto___1912 < len__3644__auto___1911)){
args__3647__auto__.push((arguments[i__3645__auto___1912]));

var G__1913 = (i__3645__auto___1912 + (1));
i__3645__auto___1912 = G__1913;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___1910))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___1910){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5924__auto___1910) : cljs.core.deref.call(null,g__5924__auto___1910)),args);
});})(g__5924__auto___1910))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__5924__auto___1910){
return (function (seq1847){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1847));
});})(g__5924__auto___1910))
;


var g__5924__auto___1914 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__5924__auto___1914){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1915 = arguments.length;
var i__3645__auto___1916 = (0);
while(true){
if((i__3645__auto___1916 < len__3644__auto___1915)){
args__3647__auto__.push((arguments[i__3645__auto___1916]));

var G__1917 = (i__3645__auto___1916 + (1));
i__3645__auto___1916 = G__1917;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___1914))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___1914){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5924__auto___1914) : cljs.core.deref.call(null,g__5924__auto___1914)),args);
});})(g__5924__auto___1914))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__5924__auto___1914){
return (function (seq1848){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1848));
});})(g__5924__auto___1914))
;


var g__5924__auto___1918 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__5924__auto___1918){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1919 = arguments.length;
var i__3645__auto___1920 = (0);
while(true){
if((i__3645__auto___1920 < len__3644__auto___1919)){
args__3647__auto__.push((arguments[i__3645__auto___1920]));

var G__1921 = (i__3645__auto___1920 + (1));
i__3645__auto___1920 = G__1921;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___1918))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___1918){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5924__auto___1918) : cljs.core.deref.call(null,g__5924__auto___1918)),args);
});})(g__5924__auto___1918))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__5924__auto___1918){
return (function (seq1849){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1849));
});})(g__5924__auto___1918))
;

var g__5929__auto___1943 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__5929__auto___1943){
return (function cljs$spec$impl$gen$any(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1944 = arguments.length;
var i__3645__auto___1945 = (0);
while(true){
if((i__3645__auto___1945 < len__3644__auto___1944)){
args__3647__auto__.push((arguments[i__3645__auto___1945]));

var G__1946 = (i__3645__auto___1945 + (1));
i__3645__auto___1945 = G__1946;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___1943))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___1943){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___1943) : cljs.core.deref.call(null,g__5929__auto___1943));
});})(g__5929__auto___1943))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__5929__auto___1943){
return (function (seq1922){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1922));
});})(g__5929__auto___1943))
;


var g__5929__auto___1947 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__5929__auto___1947){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1948 = arguments.length;
var i__3645__auto___1949 = (0);
while(true){
if((i__3645__auto___1949 < len__3644__auto___1948)){
args__3647__auto__.push((arguments[i__3645__auto___1949]));

var G__1950 = (i__3645__auto___1949 + (1));
i__3645__auto___1949 = G__1950;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___1947))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___1947){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___1947) : cljs.core.deref.call(null,g__5929__auto___1947));
});})(g__5929__auto___1947))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__5929__auto___1947){
return (function (seq1923){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1923));
});})(g__5929__auto___1947))
;


var g__5929__auto___1951 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__5929__auto___1951){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1952 = arguments.length;
var i__3645__auto___1953 = (0);
while(true){
if((i__3645__auto___1953 < len__3644__auto___1952)){
args__3647__auto__.push((arguments[i__3645__auto___1953]));

var G__1954 = (i__3645__auto___1953 + (1));
i__3645__auto___1953 = G__1954;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___1951))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___1951){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___1951) : cljs.core.deref.call(null,g__5929__auto___1951));
});})(g__5929__auto___1951))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__5929__auto___1951){
return (function (seq1924){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1924));
});})(g__5929__auto___1951))
;


var g__5929__auto___1955 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__5929__auto___1955){
return (function cljs$spec$impl$gen$char(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1956 = arguments.length;
var i__3645__auto___1957 = (0);
while(true){
if((i__3645__auto___1957 < len__3644__auto___1956)){
args__3647__auto__.push((arguments[i__3645__auto___1957]));

var G__1958 = (i__3645__auto___1957 + (1));
i__3645__auto___1957 = G__1958;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___1955))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___1955){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___1955) : cljs.core.deref.call(null,g__5929__auto___1955));
});})(g__5929__auto___1955))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__5929__auto___1955){
return (function (seq1925){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1925));
});})(g__5929__auto___1955))
;


var g__5929__auto___1959 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__5929__auto___1959){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1960 = arguments.length;
var i__3645__auto___1961 = (0);
while(true){
if((i__3645__auto___1961 < len__3644__auto___1960)){
args__3647__auto__.push((arguments[i__3645__auto___1961]));

var G__1962 = (i__3645__auto___1961 + (1));
i__3645__auto___1961 = G__1962;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___1959))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___1959){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___1959) : cljs.core.deref.call(null,g__5929__auto___1959));
});})(g__5929__auto___1959))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__5929__auto___1959){
return (function (seq1926){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1926));
});})(g__5929__auto___1959))
;


var g__5929__auto___1963 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__5929__auto___1963){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1964 = arguments.length;
var i__3645__auto___1965 = (0);
while(true){
if((i__3645__auto___1965 < len__3644__auto___1964)){
args__3647__auto__.push((arguments[i__3645__auto___1965]));

var G__1966 = (i__3645__auto___1965 + (1));
i__3645__auto___1965 = G__1966;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___1963))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___1963){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___1963) : cljs.core.deref.call(null,g__5929__auto___1963));
});})(g__5929__auto___1963))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__5929__auto___1963){
return (function (seq1927){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1927));
});})(g__5929__auto___1963))
;


var g__5929__auto___1967 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__5929__auto___1967){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1968 = arguments.length;
var i__3645__auto___1969 = (0);
while(true){
if((i__3645__auto___1969 < len__3644__auto___1968)){
args__3647__auto__.push((arguments[i__3645__auto___1969]));

var G__1970 = (i__3645__auto___1969 + (1));
i__3645__auto___1969 = G__1970;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___1967))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___1967){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___1967) : cljs.core.deref.call(null,g__5929__auto___1967));
});})(g__5929__auto___1967))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__5929__auto___1967){
return (function (seq1928){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1928));
});})(g__5929__auto___1967))
;


var g__5929__auto___1971 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__5929__auto___1971){
return (function cljs$spec$impl$gen$double(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1972 = arguments.length;
var i__3645__auto___1973 = (0);
while(true){
if((i__3645__auto___1973 < len__3644__auto___1972)){
args__3647__auto__.push((arguments[i__3645__auto___1973]));

var G__1974 = (i__3645__auto___1973 + (1));
i__3645__auto___1973 = G__1974;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___1971))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___1971){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___1971) : cljs.core.deref.call(null,g__5929__auto___1971));
});})(g__5929__auto___1971))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__5929__auto___1971){
return (function (seq1929){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1929));
});})(g__5929__auto___1971))
;


var g__5929__auto___1975 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__5929__auto___1975){
return (function cljs$spec$impl$gen$int(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1976 = arguments.length;
var i__3645__auto___1977 = (0);
while(true){
if((i__3645__auto___1977 < len__3644__auto___1976)){
args__3647__auto__.push((arguments[i__3645__auto___1977]));

var G__1978 = (i__3645__auto___1977 + (1));
i__3645__auto___1977 = G__1978;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___1975))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___1975){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___1975) : cljs.core.deref.call(null,g__5929__auto___1975));
});})(g__5929__auto___1975))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__5929__auto___1975){
return (function (seq1930){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1930));
});})(g__5929__auto___1975))
;


var g__5929__auto___1979 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__5929__auto___1979){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1980 = arguments.length;
var i__3645__auto___1981 = (0);
while(true){
if((i__3645__auto___1981 < len__3644__auto___1980)){
args__3647__auto__.push((arguments[i__3645__auto___1981]));

var G__1982 = (i__3645__auto___1981 + (1));
i__3645__auto___1981 = G__1982;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___1979))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___1979){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___1979) : cljs.core.deref.call(null,g__5929__auto___1979));
});})(g__5929__auto___1979))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__5929__auto___1979){
return (function (seq1931){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1931));
});})(g__5929__auto___1979))
;


var g__5929__auto___1983 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__5929__auto___1983){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1984 = arguments.length;
var i__3645__auto___1985 = (0);
while(true){
if((i__3645__auto___1985 < len__3644__auto___1984)){
args__3647__auto__.push((arguments[i__3645__auto___1985]));

var G__1986 = (i__3645__auto___1985 + (1));
i__3645__auto___1985 = G__1986;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___1983))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___1983){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___1983) : cljs.core.deref.call(null,g__5929__auto___1983));
});})(g__5929__auto___1983))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__5929__auto___1983){
return (function (seq1932){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1932));
});})(g__5929__auto___1983))
;


var g__5929__auto___1987 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__5929__auto___1987){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1988 = arguments.length;
var i__3645__auto___1989 = (0);
while(true){
if((i__3645__auto___1989 < len__3644__auto___1988)){
args__3647__auto__.push((arguments[i__3645__auto___1989]));

var G__1990 = (i__3645__auto___1989 + (1));
i__3645__auto___1989 = G__1990;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___1987))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___1987){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___1987) : cljs.core.deref.call(null,g__5929__auto___1987));
});})(g__5929__auto___1987))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__5929__auto___1987){
return (function (seq1933){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1933));
});})(g__5929__auto___1987))
;


var g__5929__auto___1991 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__5929__auto___1991){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1992 = arguments.length;
var i__3645__auto___1993 = (0);
while(true){
if((i__3645__auto___1993 < len__3644__auto___1992)){
args__3647__auto__.push((arguments[i__3645__auto___1993]));

var G__1994 = (i__3645__auto___1993 + (1));
i__3645__auto___1993 = G__1994;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___1991))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___1991){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___1991) : cljs.core.deref.call(null,g__5929__auto___1991));
});})(g__5929__auto___1991))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__5929__auto___1991){
return (function (seq1934){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1934));
});})(g__5929__auto___1991))
;


var g__5929__auto___1995 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__5929__auto___1995){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__3647__auto__ = [];
var len__3644__auto___1996 = arguments.length;
var i__3645__auto___1997 = (0);
while(true){
if((i__3645__auto___1997 < len__3644__auto___1996)){
args__3647__auto__.push((arguments[i__3645__auto___1997]));

var G__1998 = (i__3645__auto___1997 + (1));
i__3645__auto___1997 = G__1998;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___1995))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___1995){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___1995) : cljs.core.deref.call(null,g__5929__auto___1995));
});})(g__5929__auto___1995))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__5929__auto___1995){
return (function (seq1935){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1935));
});})(g__5929__auto___1995))
;


var g__5929__auto___1999 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__5929__auto___1999){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__3647__auto__ = [];
var len__3644__auto___2000 = arguments.length;
var i__3645__auto___2001 = (0);
while(true){
if((i__3645__auto___2001 < len__3644__auto___2000)){
args__3647__auto__.push((arguments[i__3645__auto___2001]));

var G__2002 = (i__3645__auto___2001 + (1));
i__3645__auto___2001 = G__2002;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___1999))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___1999){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___1999) : cljs.core.deref.call(null,g__5929__auto___1999));
});})(g__5929__auto___1999))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__5929__auto___1999){
return (function (seq1936){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1936));
});})(g__5929__auto___1999))
;


var g__5929__auto___2003 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__5929__auto___2003){
return (function cljs$spec$impl$gen$string(var_args){
var args__3647__auto__ = [];
var len__3644__auto___2004 = arguments.length;
var i__3645__auto___2005 = (0);
while(true){
if((i__3645__auto___2005 < len__3644__auto___2004)){
args__3647__auto__.push((arguments[i__3645__auto___2005]));

var G__2006 = (i__3645__auto___2005 + (1));
i__3645__auto___2005 = G__2006;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___2003))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___2003){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___2003) : cljs.core.deref.call(null,g__5929__auto___2003));
});})(g__5929__auto___2003))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__5929__auto___2003){
return (function (seq1937){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1937));
});})(g__5929__auto___2003))
;


var g__5929__auto___2007 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__5929__auto___2007){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__3647__auto__ = [];
var len__3644__auto___2008 = arguments.length;
var i__3645__auto___2009 = (0);
while(true){
if((i__3645__auto___2009 < len__3644__auto___2008)){
args__3647__auto__.push((arguments[i__3645__auto___2009]));

var G__2010 = (i__3645__auto___2009 + (1));
i__3645__auto___2009 = G__2010;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___2007))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___2007){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___2007) : cljs.core.deref.call(null,g__5929__auto___2007));
});})(g__5929__auto___2007))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__5929__auto___2007){
return (function (seq1938){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1938));
});})(g__5929__auto___2007))
;


var g__5929__auto___2011 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__5929__auto___2011){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__3647__auto__ = [];
var len__3644__auto___2012 = arguments.length;
var i__3645__auto___2013 = (0);
while(true){
if((i__3645__auto___2013 < len__3644__auto___2012)){
args__3647__auto__.push((arguments[i__3645__auto___2013]));

var G__2014 = (i__3645__auto___2013 + (1));
i__3645__auto___2013 = G__2014;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___2011))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___2011){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___2011) : cljs.core.deref.call(null,g__5929__auto___2011));
});})(g__5929__auto___2011))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__5929__auto___2011){
return (function (seq1939){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1939));
});})(g__5929__auto___2011))
;


var g__5929__auto___2015 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__5929__auto___2015){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__3647__auto__ = [];
var len__3644__auto___2016 = arguments.length;
var i__3645__auto___2017 = (0);
while(true){
if((i__3645__auto___2017 < len__3644__auto___2016)){
args__3647__auto__.push((arguments[i__3645__auto___2017]));

var G__2018 = (i__3645__auto___2017 + (1));
i__3645__auto___2017 = G__2018;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___2015))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___2015){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___2015) : cljs.core.deref.call(null,g__5929__auto___2015));
});})(g__5929__auto___2015))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__5929__auto___2015){
return (function (seq1940){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1940));
});})(g__5929__auto___2015))
;


var g__5929__auto___2019 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__5929__auto___2019){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__3647__auto__ = [];
var len__3644__auto___2020 = arguments.length;
var i__3645__auto___2021 = (0);
while(true){
if((i__3645__auto___2021 < len__3644__auto___2020)){
args__3647__auto__.push((arguments[i__3645__auto___2021]));

var G__2022 = (i__3645__auto___2021 + (1));
i__3645__auto___2021 = G__2022;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___2019))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___2019){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___2019) : cljs.core.deref.call(null,g__5929__auto___2019));
});})(g__5929__auto___2019))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__5929__auto___2019){
return (function (seq1941){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1941));
});})(g__5929__auto___2019))
;


var g__5929__auto___2023 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__5929__auto___2023){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__3647__auto__ = [];
var len__3644__auto___2024 = arguments.length;
var i__3645__auto___2025 = (0);
while(true){
if((i__3645__auto___2025 < len__3644__auto___2024)){
args__3647__auto__.push((arguments[i__3645__auto___2025]));

var G__2026 = (i__3645__auto___2025 + (1));
i__3645__auto___2025 = G__2026;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___2023))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___2023){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__5929__auto___2023) : cljs.core.deref.call(null,g__5929__auto___2023));
});})(g__5929__auto___2023))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__5929__auto___2023){
return (function (seq1942){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1942));
});})(g__5929__auto___2023))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__3647__auto__ = [];
var len__3644__auto___2029 = arguments.length;
var i__3645__auto___2030 = (0);
while(true){
if((i__3645__auto___2030 < len__3644__auto___2029)){
args__3647__auto__.push((arguments[i__3645__auto___2030]));

var G__2031 = (i__3645__auto___2030 + (1));
i__3645__auto___2030 = G__2031;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (p1__2027_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__2027_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.tuple,gens)], 0));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq2028){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2028));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns()], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.impl.gen.any_printable()], null)], 0)),cljs.spec.impl.gen.boolean$(),cljs.spec.impl.gen.char$(),cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (simple){
return (function (p1__2032_SHARP_){
return (new Date(p1__2032_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer()], 0)),cljs.spec.impl.gen.symbol(),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0)),cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.impl.gen.string_alphanumeric(),cljs.spec.impl.gen.large_integer(),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0)),cljs.spec.impl.gen.keyword_ns(),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0)),cljs.spec.impl.gen.keyword(),cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,(-1)], null)], 0)),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns(),cljs.spec.impl.gen.symbol_ns()], null)], 0)),cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns(),cljs.spec.impl.gen.symbol_ns()], null)], 0))], 0)),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([true], 0)),cljs.spec.impl.gen.large_integer(),cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], 0)),cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(1)], null)], 0)),cljs.spec.impl.gen.uuid(),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword(),cljs.spec.impl.gen.symbol()], null)], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer(),cljs.spec.impl.gen.double$()], null)], 0)),cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns()], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.string_alphanumeric()], null)], 0)),cljs.spec.impl.gen.symbol_ns(),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.impl.gen.gen_builtins) : cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins)),pred);
}
});
