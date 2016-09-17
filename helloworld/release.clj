(require 'cljs.build.api)

(cljs.build.api/build
 "src"
 {:output-to "out/main.js"
  :optimizations :advanced})

(System/exit 0)

; java -cp cljs.jar:src clojure.main release.clj
