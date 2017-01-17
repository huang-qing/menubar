# Error

Node Sass could not find a binding for your current environment: Windows 64-bit with Node.js 6.x

~~~javascript
F:\Git\menubar\node_modules\.npminstall\node-sass\4.0.0\node-sass\lib\binding.js:15
      throw new Error(errors.missingBinary());
      ^

Error: Missing binding F:\Git\menubar\node_modules\.npminstall\node-sass\4.0.0\node-sass\vendor\win32-x64-48\binding.node
Node Sass could not find a binding for your current environment: Windows 64-bit with Node.js 6.x

Found bindings for the following environments:
  - Windows 64-bit with Node.js 4.x

This usually happens because your environment has changed since running `npm install`.
Run `npm rebuild node-sass` to build the binding for your current environment.
    at module.exports (F:\Git\menubar\node_modules\.npminstall\node-sass\4.0.0\node-sass\lib\binding.js:15:13)
    at Object.<anonymous> (F:\Git\menubar\node_modules\.npminstall\node-sass\4.0.0\node-sass\lib\index.js:14:35)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (F:\Git\menubar\node_modules\.npminstall\gulp-sass\3.0.0\gulp-sass\index.js:187:21)
~~~

~~~javascript
This usually happens because your environment has changed since running `npm install`.
Run `npm rebuild node-sass` to build the binding for your current environment.
~~~

----
