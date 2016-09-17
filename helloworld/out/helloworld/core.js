// Compiled by ClojureScript 1.9.230 {:static-fns true, :optimize-constants true}
goog.provide('helloworld.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
if(typeof helloworld.core.conn !== 'undefined'){
} else {
helloworld.core.conn = clojure.browser.repl.connect("http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Hello world!"], 0));
helloworld.core.foo = (function helloworld$core$foo(a,b){
return (a + b);
});
