"use strict";(self.webpackChunkbio_medical=self.webpackChunkbio_medical||[]).push([[2484],{52484:(he,vn,hn)=>{hn.r(vn),hn.d(vn,{i:()=>Gn});var mn,rn,gn,en={exports:{}};mn=en,rn="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,gn=function(S){var H,F,o=void 0!==(S=S||{})?S:{};o.ready=new Promise(function(n,r){H=n,F=r});var d,T={};for(d in o)o.hasOwnProperty(d)&&(T[d]=o[d]);var yn="object"==typeof window,L="function"==typeof importScripts;"object"==typeof process&&"object"==typeof process.versions&&process.versions.node;var tn,C="";(yn||L)&&(L?C=self.location.href:"undefined"!=typeof document&&document.currentScript&&(C=document.currentScript.src),rn&&(C=rn),C=0!==C.indexOf("blob:")?C.substr(0,C.replace(/[?#].*/,"").lastIndexOf("/")+1):"",L&&(tn=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var V,on,Xn=o.print||console.log.bind(console),U=o.printErr||console.warn.bind(console);for(d in T)T.hasOwnProperty(d)&&(o[d]=T[d]);T=null,o.arguments,o.thisProgram,o.quit,o.wasmBinary&&(V=o.wasmBinary),o.noExitRuntime,"object"!=typeof WebAssembly&&G("no native wasm support detected");var _n=!1,wn="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function bn(n,r,e){for(var t=r+e,a=r;n[a]&&!(a>=t);)++a;if(a-r>16&&n.subarray&&wn)return wn.decode(n.subarray(r,a));for(var u="";r<a;){var c=n[r++];if(128&c){var i=63&n[r++];if(192!=(224&c)){var f=63&n[r++];if((c=224==(240&c)?(15&c)<<12|i<<6|f:(7&c)<<18|i<<12|f<<6|63&n[r++])<65536)u+=String.fromCharCode(c);else{var s=c-65536;u+=String.fromCharCode(55296|s>>10,56320|1023&s)}}else u+=String.fromCharCode((31&c)<<6|i)}else u+=String.fromCharCode(c)}return u}function An(n,r){return n?bn(v,n,r):""}var an,j,v,O,q,p,k,Tn,Cn,kn,Pn="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function Kn(n,r){for(var e=n,t=e>>1,a=t+r/2;!(t>=a)&&q[t];)++t;if((e=t<<1)-n>32&&Pn)return Pn.decode(v.subarray(n,e));for(var u="",c=0;!(c>=r/2);++c){var i=O[n+2*c>>1];if(0==i)break;u+=String.fromCharCode(i)}return u}function Qn(n,r,e){if(void 0===e&&(e=2147483647),e<2)return 0;for(var t=r,a=(e-=2)<2*n.length?e/2:n.length,u=0;u<a;++u){var c=n.charCodeAt(u);O[r>>1]=c,r+=2}return O[r>>1]=0,r-t}function nr(n){return 2*n.length}function rr(n,r){for(var e=0,t="";!(e>=r/4);){var a=p[n+4*e>>2];if(0==a)break;if(++e,a>=65536){var u=a-65536;t+=String.fromCharCode(55296|u>>10,56320|1023&u)}else t+=String.fromCharCode(a)}return t}function er(n,r,e){if(void 0===e&&(e=2147483647),e<4)return 0;for(var t=r,a=t+e-4,u=0;u<n.length;++u){var c=n.charCodeAt(u);if(c>=55296&&c<=57343&&(c=65536+((1023&c)<<10)|1023&n.charCodeAt(++u)),p[r>>2]=c,(r+=4)+4>a)break}return p[r>>2]=0,r-t}function tr(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);t>=55296&&t<=57343&&++e,r+=4}return r}function or(n,r){return n%r>0&&(n+=r-n%r),n}function En(n){an=n,o.HEAP8=j=new Int8Array(n),o.HEAP16=O=new Int16Array(n),o.HEAP32=p=new Int32Array(n),o.HEAPU8=v=new Uint8Array(n),o.HEAPU16=q=new Uint16Array(n),o.HEAPU32=k=new Uint32Array(n),o.HEAPF32=Tn=new Float32Array(n),o.HEAPF64=Cn=new Float64Array(n)}o.INITIAL_MEMORY;var Wn=[],Rn=[],Sn=[];var x=0,z=null;function G(n){o.onAbort&&o.onAbort(n),U(n="Aborted("+n+")"),_n=!0,n+=". Build with -s ASSERTIONS=1 for more info.";var r=new WebAssembly.RuntimeError(n);throw F(r),r}o.preloadedImages={},o.preloadedAudios={};var A,n;function Fn(n){return n.startsWith("data:application/octet-stream;base64,")}function jn(n){try{if(n==A&&V)return new Uint8Array(V);if(tn)return tn(n);throw"both async and sync fetching of the wasm failed"}catch(r){G(r)}}function un(n){for(;n.length>0;){var r=n.shift();if("function"!=typeof r){var e=r.func;"number"==typeof e?void 0===r.arg?M(e)():M(e)(r.arg):e(void 0===r.arg?null:r.arg)}else r(o)}}Fn(A="i3s.wasm")||(n=A,A=o.locateFile?o.locateFile(n,C):C+n);var J=[];function M(n){var r=J[n];return r||(n>=J.length&&(J.length=n+1),J[n]=r=kn.get(n)),r}function wr(n){this.excPtr=n,this.ptr=n-16,this.set_type=function(r){p[this.ptr+4>>2]=r},this.get_type=function(){return p[this.ptr+4>>2]},this.set_destructor=function(r){p[this.ptr+8>>2]=r},this.get_destructor=function(){return p[this.ptr+8>>2]},this.set_refcount=function(r){p[this.ptr>>2]=r},this.set_caught=function(r){r=r?1:0,j[this.ptr+12>>0]=r},this.get_caught=function(){return 0!=j[this.ptr+12>>0]},this.set_rethrown=function(r){r=r?1:0,j[this.ptr+13>>0]=r},this.get_rethrown=function(){return 0!=j[this.ptr+13>>0]},this.init=function(r,e){this.set_type(r),this.set_destructor(e),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var r=p[this.ptr>>2];p[this.ptr>>2]=r+1},this.release_ref=function(){var r=p[this.ptr>>2];return p[this.ptr>>2]=r-1,1===r}}var X={};function xn(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function Y(n){return this.fromWireType(k[n>>2])}var D={},I={},Z={};function cn(n,r){var e=function(n,r){return n=function(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_"+n:n}(n),function(){return r.apply(this,arguments)}}(r,function(t){this.name=r,this.message=t;var a=new Error(t).stack;void 0!==a&&(this.stack=this.toString()+"\n"+a.replace(/^Error(:[^\n]*)?\n/,""))});return e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var In=void 0;function Un(n){throw new In(n)}function On(n,r,e){function t(i){var f=e(i);f.length!==n.length&&Un("Mismatched type converter count");for(var s=0;s<n.length;++s)P(n[s],f[s])}n.forEach(function(i){Z[i]=r});var a=new Array(r.length),u=[],c=0;r.forEach(function(i,f){I.hasOwnProperty(i)?a[f]=I[i]:(u.push(i),D.hasOwnProperty(i)||(D[i]=[]),D[i].push(function(){a[f]=I[i],++c===u.length&&t(a)}))}),0===u.length&&t(a)}function fn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var Dn=void 0;function h(n){for(var r="",e=n;v[e];)r+=Dn[v[e++]];return r}var Hn=void 0;function m(n){throw new Hn(n)}function P(n,r,e){if(e=e||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=r.name;if(n||m('type "'+t+'" must have a positive integer typeid pointer'),I.hasOwnProperty(n)){if(e.ignoreDuplicateRegistrations)return;m("Cannot register type '"+t+"' twice")}if(I[n]=r,delete Z[n],D.hasOwnProperty(n)){var a=D[n];delete D[n],a.forEach(function(u){u()})}}var sn=[],y=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Vn(n){n>4&&0==--y[n].refcount&&(y[n]=void 0,sn.push(n))}function Sr(){for(var n=0,r=5;r<y.length;++r)void 0!==y[r]&&++n;return n}function Fr(){for(var n=5;n<y.length;++n)if(void 0!==y[n])return y[n];return null}var $_toValue=function(n){return n||m("Cannot use deleted val. handle = "+n),y[n].value},$_toHandle=function(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=sn.length?sn.pop():y.length;return y[r]={refcount:1,value:n},r}};function ln(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function Ir(n,r){switch(r){case 2:return function(e){return this.fromWireType(Tn[e>>2])};case 3:return function(e){return this.fromWireType(Cn[e>>3])};default:throw new TypeError("Unknown float type: "+n)}}function Hr(n,r,e){o.hasOwnProperty(n)?((void 0===e||void 0!==o[n].overloadTable&&void 0!==o[n].overloadTable[e])&&m("Cannot register public name '"+n+"' twice"),function(n,r,e){if(void 0===n[r].overloadTable){var t=n[r];n[r]=function(){return n[r].overloadTable.hasOwnProperty(arguments.length)||m("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[r].overloadTable+")!"),n[r].overloadTable[arguments.length].apply(this,arguments)},n[r].overloadTable=[],n[r].overloadTable[t.argCount]=t}}(o,n,n),o.hasOwnProperty(e)&&m("Cannot register multiple overloads of a function with the same number of arguments ("+e+")!"),o[n].overloadTable[e]=r):(o[n]=r,void 0!==e&&(o[n].numArguments=e))}function Br(n,r,e){return n.includes("j")?function(n,r,e){var t=o["dynCall_"+n];return e&&e.length?t.apply(null,[r].concat(e)):t.call(null,r)}(n,r,e):M(r).apply(null,e)}function B(n,r){var t=(n=h(n)).includes("j")?function(n,r){var e=[];return function(){e.length=arguments.length;for(var t=0;t<arguments.length;t++)e[t]=arguments[t];return Br(n,r,e)}}(n,r):M(r);return"function"!=typeof t&&m("unknown function pointer with signature "+n+": "+r),t}var zn=void 0;function Mn(n){var r=Nn(n),e=h(r);return E(r),e}function Gr(n,r,e){switch(r){case 0:return e?function(t){return j[t]}:function(t){return v[t]};case 1:return e?function(t){return O[t>>1]}:function(t){return q[t>>1]};case 2:return e?function(t){return p[t>>2]}:function(t){return k[t>>2]};default:throw new TypeError("Unknown integer type: "+n)}}var re={};function ce(n){try{return on.grow(n-an.byteLength+65535>>>16),En(on.buffer),1}catch(r){}}var K={mappings:{},buffers:[null,[],[]],printChar:function(n,r){var e=K.buffers[n];0===r||10===r?((1===n?Xn:U)(bn(e,0)),e.length=0):e.push(r)},varargs:void 0,get:function(){return K.varargs+=4,p[K.varargs-4>>2]},getStr:function(n){return An(n)},get64:function(n,r){return n}};In=o.InternalError=cn(Error,"InternalError"),function(){for(var n=new Array(256),r=0;r<256;++r)n[r]=String.fromCharCode(r);Dn=n}(),Hn=o.BindingError=cn(Error,"BindingError"),o.count_emval_handles=Sr,o.get_first_emval=Fr,zn=o.UnboundTypeError=cn(Error,"UnboundTypeError");var Bn={__call_sighandler:function(n,r){M(n)(r)},__cxa_allocate_exception:function(n){return nn(n+16)+16},__cxa_atexit:function(n,r){},__cxa_throw:function(n,r,e){throw new wr(n).init(r,e),n},_embind_finalize_value_object:function(n){var r=X[n];delete X[n];var e=r.rawConstructor,t=r.rawDestructor,a=r.fields;On([n],a.map(function(u){return u.getterReturnType}).concat(a.map(function(u){return u.setterArgumentType})),function(u){var c={};return a.forEach(function(i,f){var s=i.fieldName,l=u[f],g=i.getter,_=i.getterContext,w=u[f+a.length],W=i.setter,b=i.setterContext;c[s]={read:function(N){return l.fromWireType(g(_,N))},write:function(N,dn){var R=[];W(b,N,w.toWireType(R,dn)),xn(R)}}}),[{name:r.name,fromWireType:function(i){var f={};for(var s in c)f[s]=c[s].read(i);return t(i),f},toWireType:function(i,f){for(var s in c)if(!(s in f))throw new TypeError('Missing field:  "'+s+'"');var l=e();for(s in c)c[s].write(l,f[s]);return null!==i&&i.push(t,l),l},argPackAdvance:8,readValueFromPointer:Y,destructorFunction:t}]})},_embind_register_bigint:function(n,r,e,t,a){},_embind_register_bool:function(n,r,e,t,a){var u=fn(e);P(n,{name:r=h(r),fromWireType:function(c){return!!c},toWireType:function(c,i){return i?t:a},argPackAdvance:8,readValueFromPointer:function(c){var i;if(1===e)i=j;else if(2===e)i=O;else{if(4!==e)throw new TypeError("Unknown boolean type size: "+r);i=p}return this.fromWireType(i[c>>u])},destructorFunction:null})},_embind_register_emval:function(n,r){P(n,{name:r=h(r),fromWireType:function(e){var t=$_toValue(e);return Vn(e),t},toWireType:function(e,t){return $_toHandle(t)},argPackAdvance:8,readValueFromPointer:Y,destructorFunction:null})},_embind_register_float:function(n,r,e){var t=fn(e);P(n,{name:r=h(r),fromWireType:function(a){return a},toWireType:function(a,u){if("number"!=typeof u&&"boolean"!=typeof u)throw new TypeError('Cannot convert "'+ln(u)+'" to '+this.name);return u},argPackAdvance:8,readValueFromPointer:Ir(r,t),destructorFunction:null})},_embind_register_function:function(n,r,e,t,a,u){var c=function(n,r){for(var e=[],t=0;t<n;t++)e.push(p[(r>>2)+t]);return e}(r,e);n=h(n),a=B(t,a),Hr(n,function(){!function(n,r){var e=[],t={};throw r.forEach(function a(u){t[u]||I[u]||(Z[u]?Z[u].forEach(a):(e.push(u),t[u]=!0))}),new zn(n+": "+e.map(Mn).join([", "]))}("Cannot call "+n+" due to unbound types",c)},r-1),On([],c,function(i){var f=[i[0],null].concat(i.slice(1));return function(n,r,e){o.hasOwnProperty(n)||Un("Replacing nonexistant public symbol"),void 0!==o[n].overloadTable&&void 0!==e?o[n].overloadTable[e]=r:(o[n]=r,o[n].argCount=e)}(n,function(n,r,e,t,a){var u=r.length;u<2&&m("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var c=null!==r[1]&&null!==e,i=!1,f=1;f<r.length;++f)if(null!==r[f]&&void 0===r[f].destructorFunction){i=!0;break}var s="void"!==r[0].name,l=u-2,g=new Array(l),_=[],w=[];return function(){var W;arguments.length!==l&&m("function "+n+" called with "+arguments.length+" arguments, expected "+l+" args!"),w.length=0,_.length=c?2:1,_[0]=a,c&&(W=r[1].toWireType(w,this),_[1]=W);for(var b=0;b<l;++b)g[b]=r[b+2].toWireType(w,arguments[b]),_.push(g[b]);function N(dn){if(i)xn(w);else for(var R=c?1:2;R<r.length;R++){var ve=1===R?W:g[R-2];null!==r[R].destructorFunction&&r[R].destructorFunction(ve)}if(s)return r[0].fromWireType(dn)}return N(t.apply(null,_))}}(n,f,null,a,u),r-1),[]})},_embind_register_integer:function(n,r,e,t,a){r=h(r),-1===a&&(a=4294967295);var u=fn(e),c=function(s){return s};if(0===t){var i=32-8*e;c=function(s){return s<<i>>>i}}var f=r.includes("unsigned");P(n,{name:r,fromWireType:c,toWireType:function(s,l){if("number"!=typeof l&&"boolean"!=typeof l)throw new TypeError('Cannot convert "'+ln(l)+'" to '+this.name);if(l<t||l>a)throw new TypeError('Passing a number "'+ln(l)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+t+", "+a+"]!");return f?l>>>0:0|l},argPackAdvance:8,readValueFromPointer:Gr(r,u,0!==t),destructorFunction:null})},_embind_register_memory_view:function(n,r,e){var t=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function a(u){var c=k,i=c[u>>=2],f=c[u+1];return new t(an,f,i)}P(n,{name:e=h(e),fromWireType:a,argPackAdvance:8,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},_embind_register_std_string:function(n,r){var e="std::string"===(r=h(r));P(n,{name:r,fromWireType:function(t){var a,u=k[t>>2];if(e)for(var c=t+4,i=0;i<=u;++i){var f=t+4+i;if(i==u||0==v[f]){var s=An(c,f-c);void 0===a?a=s:(a+=String.fromCharCode(0),a+=s),c=f+1}}else{var l=new Array(u);for(i=0;i<u;++i)l[i]=String.fromCharCode(v[t+4+i]);a=l.join("")}return E(t),a},toWireType:function(t,a){a instanceof ArrayBuffer&&(a=new Uint8Array(a));var u="string"==typeof a;u||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int8Array||m("Cannot pass non-string to std::string");var c=(e&&u?function(){return function(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);t>=55296&&t<=57343&&(t=65536+((1023&t)<<10)|1023&n.charCodeAt(++e)),t<=127?++r:r+=t<=2047?2:t<=65535?3:4}return r}(a)}:function(){return a.length})(),i=nn(4+c+1);if(k[i>>2]=c,e&&u)!function(n,r,e){(function(n,r,e,t){if(!(t>0))return 0;for(var a=e,u=e+t-1,c=0;c<n.length;++c){var i=n.charCodeAt(c);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++c)),i<=127){if(e>=u)break;r[e++]=i}else if(i<=2047){if(e+1>=u)break;r[e++]=192|i>>6,r[e++]=128|63&i}else if(i<=65535){if(e+2>=u)break;r[e++]=224|i>>12,r[e++]=128|i>>6&63,r[e++]=128|63&i}else{if(e+3>=u)break;r[e++]=240|i>>18,r[e++]=128|i>>12&63,r[e++]=128|i>>6&63,r[e++]=128|63&i}}r[e]=0})(n,v,r,e)}(a,i+4,c+1);else if(u)for(var f=0;f<c;++f){var s=a.charCodeAt(f);s>255&&(E(i),m("String has UTF-16 code units that do not fit in 8 bits")),v[i+4+f]=s}else for(f=0;f<c;++f)v[i+4+f]=a[f];return null!==t&&t.push(E,i),i},argPackAdvance:8,readValueFromPointer:Y,destructorFunction:function(t){E(t)}})},_embind_register_std_wstring:function(n,r,e){var t,a,u,c,i;e=h(e),2===r?(t=Kn,a=Qn,c=nr,u=function(){return q},i=1):4===r&&(t=rr,a=er,c=tr,u=function(){return k},i=2),P(n,{name:e,fromWireType:function(f){for(var s,l=k[f>>2],g=u(),_=f+4,w=0;w<=l;++w){var W=f+4+w*r;if(w==l||0==g[W>>i]){var b=t(_,W-_);void 0===s?s=b:(s+=String.fromCharCode(0),s+=b),_=W+r}}return E(f),s},toWireType:function(f,s){"string"!=typeof s&&m("Cannot pass non-string to C++ string type "+e);var l=c(s),g=nn(4+l+r);return k[g>>2]=l>>i,a(s,g+4,l+r),null!==f&&f.push(E,g),g},argPackAdvance:8,readValueFromPointer:Y,destructorFunction:function(f){E(f)}})},_embind_register_value_object:function(n,r,e,t,a,u){X[n]={name:h(r),rawConstructor:B(e,t),rawDestructor:B(a,u),fields:[]}},_embind_register_value_object_field:function(n,r,e,t,a,u,c,i,f,s){X[n].fields.push({fieldName:h(r),getterReturnType:e,getter:B(t,a),getterContext:u,setterArgumentType:c,setter:B(i,f),setterContext:s})},_embind_register_void:function(n,r){P(n,{isVoid:!0,name:r=h(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(e,t){}})},_emval_decref:Vn,_emval_incref:function(n){n>4&&(y[n].refcount+=1)},_emval_new_cstring:function(n){return $_toHandle(function(n){var r=re[n];return void 0===r?h(n):r}(n))},_emval_take_value:function(n,r){var e=(n=function(n,r){var e=I[n];return void 0===e&&m(r+" has unknown type "+Mn(n)),e}(n,"_emval_take_value")).readValueFromPointer(r);return $_toHandle(e)},abort:function(){G("")},emscripten_memcpy_big:function(n,r,e){v.copyWithin(n,r,r+e)},emscripten_resize_heap:function(n){var r=v.length,e=2147483648;if((n>>>=0)>e)return!1;for(var t=1;t<=4;t*=2){var a=r*(1+.2/t);if(a=Math.min(a,n+100663296),ce(Math.min(e,or(Math.max(n,a),65536))))return!0}return!1},fd_close:function(n){return 0},fd_seek:function(n,r,e,t,a){},fd_write:function(n,r,e,t){for(var a=0,u=0;u<e;u++){var c=p[r>>2],i=p[r+4>>2];r+=8;for(var f=0;f<i;f++)K.printChar(n,v[c+f]);a+=i}return p[t>>2]=a,0},setTempRet0:function(n){}};(function(){var n={env:Bn,wasi_snapshot_preview1:Bn};function r(u,c){var i=u.exports;o.asm=i,En((on=o.asm.memory).buffer),kn=o.asm.__indirect_function_table,function(n){Rn.unshift(n)}(o.asm.__wasm_call_ctors),function(n){if(x--,o.monitorRunDependencies&&o.monitorRunDependencies(x),0==x&&z){var r=z;z=null,r()}}()}function e(u){r(u.instance)}function t(u){return(V||!yn&&!L||"function"!=typeof fetch?Promise.resolve().then(function(){return jn(A)}):fetch(A,{credentials:"same-origin"}).then(function(n){if(!n.ok)throw"failed to load wasm binary file at '"+A+"'";return n.arrayBuffer()}).catch(function(){return jn(A)})).then(function(c){return WebAssembly.instantiate(c,n)}).then(function(c){return c}).then(u,function(c){U("failed to asynchronously prepare wasm: "+c),G(c)})}if(x++,o.monitorRunDependencies&&o.monitorRunDependencies(x),o.instantiateWasm)try{return o.instantiateWasm(n,r)}catch(u){return U("Module.instantiateWasm callback failed with error: "+u),!1}(V||"function"!=typeof WebAssembly.instantiateStreaming||Fn(A)||"function"!=typeof fetch?t(e):fetch(A,{credentials:"same-origin"}).then(function(u){return WebAssembly.instantiateStreaming(u,n).then(e,function(c){return U("wasm streaming compile failed: "+c),U("falling back to ArrayBuffer instantiation"),t(e)})})).catch(F)})(),o.___wasm_call_ctors=function(){return(o.___wasm_call_ctors=o.asm.__wasm_call_ctors).apply(null,arguments)};var Q,nn=o._malloc=function(){return(nn=o._malloc=o.asm.malloc).apply(null,arguments)},E=o._free=function(){return(E=o._free=o.asm.free).apply(null,arguments)},Nn=o.___getTypeName=function(){return(Nn=o.___getTypeName=o.asm.__getTypeName).apply(null,arguments)};function pn(n){function r(){Q||(Q=!0,o.calledRun=!0,_n||(un(Rn),H(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),function(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)n=o.postRun.shift(),Sn.unshift(n);var n;un(Sn)}()))}x>0||(function(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)n=o.preRun.shift(),Wn.unshift(n);var n;un(Wn)}(),x>0||(o.setStatus?(o.setStatus("Running..."),setTimeout(function(){setTimeout(function(){o.setStatus("")},1),r()},1)):r()))}if(o.___embind_register_native_and_builtin_types=function(){return(o.___embind_register_native_and_builtin_types=o.asm.__embind_register_native_and_builtin_types).apply(null,arguments)},o.___errno_location=function(){return(o.___errno_location=o.asm.__errno_location).apply(null,arguments)},o.stackSave=function(){return(o.stackSave=o.asm.stackSave).apply(null,arguments)},o.stackRestore=function(){return(o.stackRestore=o.asm.stackRestore).apply(null,arguments)},o.stackAlloc=function(){return(o.stackAlloc=o.asm.stackAlloc).apply(null,arguments)},o.dynCall_vij=function(){return(o.dynCall_vij=o.asm.dynCall_vij).apply(null,arguments)},o.dynCall_jiji=function(){return(o.dynCall_jiji=o.asm.dynCall_jiji).apply(null,arguments)},z=function n(){Q||pn(),Q||(z=n)},o.run=pn,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();return pn(),S.ready},mn.exports=gn;const qn=en.exports,Gn=Object.freeze(function(S,H){for(var F=0;F<H.length;F++){const o=H[F];if("string"!=typeof o&&!Array.isArray(o))for(const d in o)if("default"!==d&&!(d in S)){const T=Object.getOwnPropertyDescriptor(o,d);T&&Object.defineProperty(S,d,T.get?T:{enumerable:!0,get:()=>o[d]})}}return Object.freeze(S)}({__proto__:null,default:qn},[en.exports]))}}]);
//# sourceMappingURL=2484.62ac3026f1f16a77d6c0.js.map