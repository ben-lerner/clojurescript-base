(require 'cljs.build.api)

(cljs.build.api/build
 "src"
 {:main 'helloworld.core
  :output-to "out/main.js"})
