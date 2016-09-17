(require 'cljs.build.api)

(cljs.build.api/watch
 "src"
 {:main 'helloworld.core
  :output-to "out/main.js"})
