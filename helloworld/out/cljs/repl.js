// Compiled by ClojureScript 1.9.230 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__2921){
var map__2946 = p__2921;
var map__2946__$1 = ((((!((map__2946 == null)))?((((map__2946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2946):map__2946);
var m = map__2946__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2946__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2946__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((function (){var temp__4657__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__2948_2970 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__2949_2971 = null;
var count__2950_2972 = (0);
var i__2951_2973 = (0);
while(true){
if((i__2951_2973 < count__2950_2972)){
var f_2974 = chunk__2949_2971.cljs$core$IIndexed$_nth$arity$2(null,i__2951_2973);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_2974], 0));

var G__2975 = seq__2948_2970;
var G__2976 = chunk__2949_2971;
var G__2977 = count__2950_2972;
var G__2978 = (i__2951_2973 + (1));
seq__2948_2970 = G__2975;
chunk__2949_2971 = G__2976;
count__2950_2972 = G__2977;
i__2951_2973 = G__2978;
continue;
} else {
var temp__4657__auto___2979 = cljs.core.seq(seq__2948_2970);
if(temp__4657__auto___2979){
var seq__2948_2980__$1 = temp__4657__auto___2979;
if(cljs.core.chunked_seq_QMARK_(seq__2948_2980__$1)){
var c__3496__auto___2981 = cljs.core.chunk_first(seq__2948_2980__$1);
var G__2982 = cljs.core.chunk_rest(seq__2948_2980__$1);
var G__2983 = c__3496__auto___2981;
var G__2984 = cljs.core.count(c__3496__auto___2981);
var G__2985 = (0);
seq__2948_2970 = G__2982;
chunk__2949_2971 = G__2983;
count__2950_2972 = G__2984;
i__2951_2973 = G__2985;
continue;
} else {
var f_2986 = cljs.core.first(seq__2948_2980__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_2986], 0));

var G__2987 = cljs.core.next(seq__2948_2980__$1);
var G__2988 = null;
var G__2989 = (0);
var G__2990 = (0);
seq__2948_2970 = G__2987;
chunk__2949_2971 = G__2988;
count__2950_2972 = G__2989;
i__2951_2973 = G__2990;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_2991 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3113__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3113__auto__)){
return or__3113__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_2991], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_2991)))?cljs.core.second(arglists_2991):arglists_2991)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__2952_2992 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__2953_2993 = null;
var count__2954_2994 = (0);
var i__2955_2995 = (0);
while(true){
if((i__2955_2995 < count__2954_2994)){
var vec__2956_2996 = chunk__2953_2993.cljs$core$IIndexed$_nth$arity$2(null,i__2955_2995);
var name_2997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2956_2996,(0),null);
var map__2959_2998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2956_2996,(1),null);
var map__2959_2999__$1 = ((((!((map__2959_2998 == null)))?((((map__2959_2998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2959_2998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2959_2998):map__2959_2998);
var doc_3000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2959_2999__$1,cljs.core.cst$kw$doc);
var arglists_3001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2959_2999__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_2997], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_3001], 0));

if(cljs.core.truth_(doc_3000)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_3000], 0));
} else {
}

var G__3002 = seq__2952_2992;
var G__3003 = chunk__2953_2993;
var G__3004 = count__2954_2994;
var G__3005 = (i__2955_2995 + (1));
seq__2952_2992 = G__3002;
chunk__2953_2993 = G__3003;
count__2954_2994 = G__3004;
i__2955_2995 = G__3005;
continue;
} else {
var temp__4657__auto___3006 = cljs.core.seq(seq__2952_2992);
if(temp__4657__auto___3006){
var seq__2952_3007__$1 = temp__4657__auto___3006;
if(cljs.core.chunked_seq_QMARK_(seq__2952_3007__$1)){
var c__3496__auto___3008 = cljs.core.chunk_first(seq__2952_3007__$1);
var G__3009 = cljs.core.chunk_rest(seq__2952_3007__$1);
var G__3010 = c__3496__auto___3008;
var G__3011 = cljs.core.count(c__3496__auto___3008);
var G__3012 = (0);
seq__2952_2992 = G__3009;
chunk__2953_2993 = G__3010;
count__2954_2994 = G__3011;
i__2955_2995 = G__3012;
continue;
} else {
var vec__2961_3013 = cljs.core.first(seq__2952_3007__$1);
var name_3014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2961_3013,(0),null);
var map__2964_3015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2961_3013,(1),null);
var map__2964_3016__$1 = ((((!((map__2964_3015 == null)))?((((map__2964_3015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2964_3015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2964_3015):map__2964_3015);
var doc_3017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2964_3016__$1,cljs.core.cst$kw$doc);
var arglists_3018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2964_3016__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_3014], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_3018], 0));

if(cljs.core.truth_(doc_3017)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_3017], 0));
} else {
}

var G__3019 = cljs.core.next(seq__2952_3007__$1);
var G__3020 = null;
var G__3021 = (0);
var G__3022 = (0);
seq__2952_2992 = G__3019;
chunk__2953_2993 = G__3020;
count__2954_2994 = G__3021;
i__2955_2995 = G__3022;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Spec"], 0));

var seq__2966 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__2967 = null;
var count__2968 = (0);
var i__2969 = (0);
while(true){
if((i__2969 < count__2968)){
var role = chunk__2967.cljs$core$IIndexed$_nth$arity$2(null,i__2969);
var temp__4657__auto___3023__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___3023__$1)){
var spec_3024 = temp__4657__auto___3023__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n "),cljs.core.str(cljs.core.name(role)),cljs.core.str(":")].join(''),cljs.spec.describe(spec_3024)], 0));
} else {
}

var G__3025 = seq__2966;
var G__3026 = chunk__2967;
var G__3027 = count__2968;
var G__3028 = (i__2969 + (1));
seq__2966 = G__3025;
chunk__2967 = G__3026;
count__2968 = G__3027;
i__2969 = G__3028;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__2966);
if(temp__4657__auto____$1){
var seq__2966__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__2966__$1)){
var c__3496__auto__ = cljs.core.chunk_first(seq__2966__$1);
var G__3029 = cljs.core.chunk_rest(seq__2966__$1);
var G__3030 = c__3496__auto__;
var G__3031 = cljs.core.count(c__3496__auto__);
var G__3032 = (0);
seq__2966 = G__3029;
chunk__2967 = G__3030;
count__2968 = G__3031;
i__2969 = G__3032;
continue;
} else {
var role = cljs.core.first(seq__2966__$1);
var temp__4657__auto___3033__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___3033__$2)){
var spec_3034 = temp__4657__auto___3033__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n "),cljs.core.str(cljs.core.name(role)),cljs.core.str(":")].join(''),cljs.spec.describe(spec_3034)], 0));
} else {
}

var G__3035 = cljs.core.next(seq__2966__$1);
var G__3036 = null;
var G__3037 = (0);
var G__3038 = (0);
seq__2966 = G__3035;
chunk__2967 = G__3036;
count__2968 = G__3037;
i__2969 = G__3038;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
