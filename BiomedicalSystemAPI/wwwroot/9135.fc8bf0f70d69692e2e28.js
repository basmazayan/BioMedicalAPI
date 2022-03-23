"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[9135],{

/***/ 24384:
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterFunctions/vectorFieldUtils.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertVectorFieldData": () => (/* binding */ f),
/* harmony export */   "convertVectorFieldUnit": () => (/* binding */ p),
/* harmony export */   "createVFMesh": () => (/* binding */ U),
/* harmony export */   "createVFMeshScalar": () => (/* binding */ _),
/* harmony export */   "getUnitConversionFactor": () => (/* binding */ h),
/* harmony export */   "sampleVectorField": () => (/* binding */ S),
/* harmony export */   "snapImageToSymbolTile": () => (/* binding */ m),
/* harmony export */   "unitKebabDict": () => (/* binding */ i),
/* harmony export */   "uvComponentToVector": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/jsonMap.js */ 74856);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PixelBlock.js */ 77847);
/* harmony import */ var _pixelUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pixelUtils.js */ 85572);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=new Map;o.set("meter-per-second",1),o.set("kilometer-per-hour",.277778),o.set("knots",.514444),o.set("feet-per-second",.3048),o.set("mile-per-hour",.44704);const a=180/Math.PI,s=5,i=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__.JSONMap({esriMetersPerSecond:"meter-per-second",esriKilometersPerHour:"kilometer-per-hour",esriKnots:"knots",esriFeetPerSecond:"feet-per-second",esriMilesPerHour:"mile-per-hour"});function h(t,e){return o.get(t)/o.get(e)||1}function l(t){return(450-t)%360}function c(t,e="geographic"){const[n,r]=t,o=Math.sqrt(n*n+r*r);let s=Math.atan2(r,n)*a;return s=(360+s)%360,"geographic"===e&&(s=l(s)),[o,s]}function u(t,e="geographic"){let n=t[1];"geographic"===e&&(n=l(n)),n%=360;const r=t[0];return[r*Math.cos(n/a),r*Math.sin(n/a)]}function f(t,e,o="geographic",a=1){if(!(0,_pixelUtils_js__WEBPACK_IMPORTED_MODULE_3__.isValidPixelBlock)(t))return t;const{pixels:s,width:i,height:h}=t,l=i*h,f=s[0],p=s[1],m=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_2__.default.createEmptyBand(t.pixelType,l),M=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_2__.default.createEmptyBand(t.pixelType,l);let x=0;for(let n=0;n<h;n++)for(let t=0;t<i;t++)"vector-uv"===e?([m[x],M[x]]=c([f[x],p[x]],o),m[x]*=a):([m[x],M[x]]=u([f[x],p[x]],o),m[x]*=a,M[x]*=a),x++;const d=new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_2__.default({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:[m,M]});return d.updateStatistics(),d}function p(t,e,n=1){if(1===n||!(0,_pixelUtils_js__WEBPACK_IMPORTED_MODULE_3__.isValidPixelBlock)(t))return t;const o=t.clone(),{pixels:a,width:s,height:i}=o,h=a[0],l=a[1];let c=0;for(let r=0;r<i;r++)for(let t=0;t<s;t++)"vector-uv"===e?(h[c]*=n,l[c]*=n):h[c]*=n,c++;return o.updateStatistics(),o}function m(t,n,r,o,a){if(!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(a)||!a.spatialReference.equals(t.spatialReference))return{extent:t,width:n,height:r,resolution:t.width/n};const s=a.xmin,i=a.ymax;o=Math.max(o||0,30);const h=Math.ceil(n*(1/o)),l=Math.ceil(r*(1/o)),c=((t.xmax-t.xmin)/h+(t.ymax-t.ymin)/l)/2;return t.xmin=s+Math.floor((t.xmin-s)/c)*c,t.xmax=s+Math.ceil((t.xmax-s)/c)*c,t.ymin=i+Math.floor((t.ymin-i)/c)*c,t.ymax=i+Math.ceil((t.ymax-i)/c)*c,{extent:t,width:Math.round(t.width/c),height:Math.round(t.height/c),resolution:c}}const M=x(0,0,0);function x(t=0,e=0,n=Math.PI,r=!0){r&&(n=(2*Math.PI-n)%(2*Math.PI));const o=r?-1:1,a=13*o,s=-7*o,i=-2*o,h=-16*o,l=29,[c,u]=g(0,e+a,n,l),[f,p]=g(t-5.5,e+s,n,l),[m,M]=g(t+5.5,e+s,n,l),[x,d]=g(t-1.5,e+i,n,l),[k,w]=g(t+1.5,e+i,n,l),[y,P]=g(t-1.5,e+h,n,l),[b,I]=g(t+1.5,e+h,n,l);return[c,u,f,p,x,d,k,w,m,M,y,P,b,I]}function d(t=0,e=Math.PI,n=!0){n&&(e=(2*Math.PI-e)%(2*Math.PI));const r=10,o=n?-1:1,a=5*o,i=20*o,h=25*o,l=45,c=0,u=0,f=2,p=0,m=f*o;let[M,x]=[c+r/2,u-i],[d,k]=[M+f,x],[w,y]=[d-p,k+m],[P,b]=[c-r/2,u-h],[I,v]=[P+p,b-m],A=Math.ceil(t/s),_=Math.floor(A/10);A-=8*_;const U=[],S=[];for(let s=0;s<A/2;s++,_--){_<=0&&A%2==1&&s===(A-1)/2&&(P=c,I=P+p,b=(b+x)/2,v=b-m);const[t,n]=g(P,b,e,l);if(_>0){const[r,o]=g(d,b,e,l),[a,s]=g(M,x,e,l);U.push(r),U.push(o),U.push(t),U.push(n),U.push(a),U.push(s)}else{const[r,o]=g(d,k,e,l),[a,s]=g(w,y,e,l),[i,h]=g(I,v,e,l);S.push(t),S.push(n),S.push(i),S.push(h),S.push(a),S.push(s),S.push(r),S.push(o)}b+=a,x+=a,k+=a,y+=a,v+=a}const[D,F]=g(c+r/2,u+i,e,l),j=r/2+f,[N,T]=g(c+j,u+i,e,l),[q,B]=g(c+r/2,u-h,e,l),[E,J]=g(c+j,u-h,e,l);return{pennants:U,barbs:S,shaft:[D,F,N,T,q,B,E,J]}}function g(t,e,n,r=1){const o=Math.sqrt(t*t+e*e)/r,a=(2*Math.PI+Math.atan2(e,t))%(2*Math.PI);return[o,(2*Math.PI+a-n)%(2*Math.PI)]}const k=[0,1,3,6,10,16,21,27,33,40,47,55,63],w=[0,.5,1,1.5,2],y=[0,.25,.5,1,1.5,2,2.5,3,3.5,4];function P(t,e,n,r){const o=h(r||"knots",n);let a;for(a=1;a<e.length;a++)if(a===e.length-1){if(t<e[a]*o)break}else if(t<=e[a]*o)break;return Math.min(a-1,e.length-2)}function b(t,e,n,r,o){let a=0;switch(e){case"beaufort_kn":a=P(t,k,"knots",n);break;case"beaufort_km":a=P(t,k,"kilometer-per-hour",n);break;case"beaufort_ft":a=P(t,k,"feet-per-second",n);break;case"beaufort_m":a=P(t,k,"meter-per-second",n);break;case"classified_arrow":a=P(t,o,r,n);break;case"ocean_current_m":a=P(t,w,"meter-per-second",n);break;case"ocean_current_kn":a=P(t,y,"knots",n)}return a}function I(t,e){const{style:n,inputUnit:r,outputUnit:o,breakValues:a}=e,s=i.fromJSON(r),h=i.fromJSON(o),l=7*6,c=15;let u=0,f=0;const{width:p,height:m,mask:x}=t,d=t.pixels[0],g=t.pixels[1],k=x?x.filter((t=>t>0)).length:p*m,w=new Float32Array(k*l),y=new Uint32Array(c*k);for(let i=0;i<m;i++)for(let t=0;t<p;t++){const e=i*p+t;if(!x||x[i*p+t]){var P;const r=null!=(P=(g[e]+360)%360/180*Math.PI)?P:2*Math.PI*Math.random(),o=b(d[e],n,s,h,a);for(let n=0;n<M.length;n+=2)w[u++]=(t+.5)/p,w[u++]=(i+.5)/m,w[u++]=M[n],w[u++]=M[n+1]+r,w[u++]=o,w[u++]=d[e];const c=7*(u/l-1);y[f++]=c,y[f++]=c+1,y[f++]=c+2,y[f++]=c+0,y[f++]=c+4,y[f++]=c+3,y[f++]=c+0,y[f++]=c+2,y[f++]=c+3,y[f++]=c+2,y[f++]=c+5,y[f++]=c+3,y[f++]=c+5,y[f++]=c+6,y[f++]=c+3}}return{vertexData:w,indexData:y}}const v=[];function A(t,e){if(0===v.length)for(let s=0;s<30;s++)v.push(d(5*s,0));const n=h(i.fromJSON(e.inputUnit),"knots"),{width:r,height:o,mask:a}=t,l=t.pixels[0],c=t.pixels[1],u=6,f=[],p=[];let m=0,M=0;for(let i=0;i<o;i++)for(let t=0;t<r;t++){const e=i*r+t,h=l[e]*n;if((!a||a[i*r+t])&&h>=s){var x;const n=null!=(x=(c[e]+360)%360/180*Math.PI)?x:2*Math.PI*Math.random(),{pennants:a,barbs:s,shaft:l}=v[Math.min(Math.floor(h/5),29)];if(a.length+s.length===0)continue;let d=f.length/u;const g=(t+.5)/r,k=(i+.5)/o;for(let t=0;t<a.length;t+=2)f[m++]=g,f[m++]=k,f[m++]=a[t],f[m++]=a[t+1]+n,f[m++]=0,f[m++]=h;for(let t=0;t<s.length;t+=2)f[m++]=g,f[m++]=k,f[m++]=s[t],f[m++]=s[t+1]+n,f[m++]=0,f[m++]=h;for(let t=0;t<l.length;t+=2)f[m++]=g,f[m++]=k,f[m++]=l[t],f[m++]=l[t+1]+n,f[m++]=0,f[m++]=h;for(let t=0;t<a.length/6;t++)p[M++]=d,p[M++]=d+1,p[M++]=d+2,d+=3;for(let t=0;t<s.length/8;t++)p[M++]=d,p[M++]=d+1,p[M++]=d+2,p[M++]=d+1,p[M++]=d+2,p[M++]=d+3,d+=4;p[M++]=d+0,p[M++]=d+1,p[M++]=d+2,p[M++]=d+1,p[M++]=d+3,p[M++]=d+2,d+=4}}return{vertexData:new Float32Array(f),indexData:new Uint32Array(p)}}function _(t,e){const n=4*6;let r=0,o=0;const{width:a,height:i,mask:h}=t,l=t.pixels[0],c=[],u=[],f="wind_speed"===e.style?s:Number.MAX_VALUE;for(let s=0;s<i;s++)for(let t=0;t<a;t++){const e=s*a+t;if((!h||h[s*a+t])&&l[e]<f){for(let n=0;n<4;n++)c[r++]=(t+.5)/a,c[r++]=(s+.5)/i,c[r++]=n<2?-.5:.5,c[r++]=n%2==0?-.5:.5,c[r++]=0,c[r++]=l[e];const h=4*(r/n-1);u[o++]=h,u[o++]=h+1,u[o++]=h+2,u[o++]=h+1,u[o++]=h+2,u[o++]=h+3}}return{vertexData:new Float32Array(c),indexData:new Uint32Array(u)}}function U(t,e){return"simple_scalar"===e.style?_(t,e):"wind_speed"===e.style?A(t,e):I(t,e)}function S(t,e,r,o=[0,0],a=.5){const{width:s,height:i,mask:h}=t,[l,f]=t.pixels,[p,m]=o,M=Math.round((s-p)/r),x=Math.round((i-m)/r),d=M*x,g=new Float32Array(d),k=new Float32Array(d),w=new Uint8Array(d),y="vector-uv"===e;for(let n=0;n<x;n++)for(let t=0;t<M;t++){let e=0;const o=n*M+t,x=Math.max(0,n*r+m),d=Math.max(0,t*r+p),P=Math.min(i,x+r),b=Math.min(s,d+r);for(let t=x;t<P;t++)for(let n=d;n<b;n++){const r=t*s+n;if(!h||h[r]){e++;const t=y?[l[r],f[r]]:[l[r],(360+f[r])%360],[n,a]=y?t:u(t);g[o]+=n,k[o]+=a}}if(e>=(P-x)*(b-d)*(1-a)){w[o]=1;const[t,n]=c([g[o]/e,k[o]/e]);g[o]=t,k[o]=n}else w[o]=0,g[o]=0,k[o]=0}const P=new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_2__.default({width:M,height:x,pixels:[g,k],mask:w});return P.updateStatistics(),P}


/***/ }),

/***/ 62013:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/dataUtils.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAnimatedLinesData": () => (/* binding */ m),
/* harmony export */   "createLinesMesh": () => (/* binding */ w),
/* harmony export */   "createStreamlinesMesh": () => (/* binding */ c),
/* harmony export */   "fetchPart": () => (/* binding */ y),
/* harmony export */   "loadImagery": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry.js */ 61243);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ 88415);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/RandomLCG.js */ 46255);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geometry/Extent.js */ 70157);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/








const l = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__.default.getLogger("esri.views.2d.engine.flow.dataUtils"),
      s = 8;

function c(_x, _x2, _x3) {
  return _c.apply(this, arguments);
}

function _c() {
  _c = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, e, n) {
    const o = performance.now(),
          i = h(t, e),
          a = performance.now(),
          s = u(t, i, e.width, e.height),
          c = performance.now(),
          f = m(s, !0),
          d = performance.now(),
          g = w(f),
          p = performance.now();

    if (t.profile) {
      const t = {
        "_createFlowFieldFromData()": Math.round(a - o),
        "_getStreamlines()": Math.round(c - a),
        "createAnimatedLinesData()": Math.round(d - c),
        "createLinesMesh()": Math.round(p - d),
        "Total elapsed time": Math.round(p - o)
      };
      l.info("createStreamlinesMesh profile", t);
    }

    return yield Promise.resolve(), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(n), g;
  });
  return _c.apply(this, arguments);
}

function h(t, e) {
  const n = d(e.data, e.width, e.height, t.smoothing);

  if (t.interpolate) {
    return (t, r) => {
      const o = Math.floor(t),
            i = Math.floor(r);
      if (o < 0 || o >= e.width) return [0, 0];
      if (i < 0 || i >= e.height) return [0, 0];
      const a = t - o,
            l = r - i,
            s = o,
            c = i,
            h = o < e.width - 1 ? o + 1 : o,
            f = i < e.height - 1 ? i + 1 : i,
            u = n[2 * (c * e.width + s)],
            d = n[2 * (c * e.width + h)],
            m = n[2 * (f * e.width + s)],
            w = n[2 * (f * e.width + h)],
            g = n[2 * (c * e.width + s) + 1],
            p = n[2 * (c * e.width + h) + 1];
      return [(u * (1 - l) + m * l) * (1 - a) + (d * (1 - l) + w * l) * a, (g * (1 - l) + n[2 * (f * e.width + s) + 1] * l) * (1 - a) + (p * (1 - l) + n[2 * (f * e.width + h) + 1] * l) * a];
    };
  }

  return (t, r) => {
    const o = Math.round(t),
          i = Math.round(r);
    return o < 0 || o >= e.width || i < 0 || i >= e.height ? [0, 0] : [n[2 * (i * e.width + o) + 0], n[2 * (i * e.width + o) + 1]];
  };
}

function f(t, e, n, r, o, i, a, l, s) {
  const c = [];
  let h,
      f,
      u = n,
      d = r,
      m = 0;
  c.push({
    x: u,
    y: d,
    t: m
  });

  for (let w = 0; w < t.verticesPerLine; w++) {
    let [n, r] = e(u, d);
    n *= t.velocityScale, r *= t.velocityScale;
    const w = Math.sqrt(n * n + r * r);
    if (w < t.minSpeedThreshold) return c;
    const g = n / w,
          p = r / w;
    u += g * t.segmentLength, d += p * t.segmentLength;
    if (m += t.segmentLength / w, Math.acos(g * h + p * f) > t.maxTurnAngle) return c;

    if (t.mergeLines) {
      const t = Math.round(u * s),
            e = Math.round(d * s);
      if (t < 0 || t > a - 1 || e < 0 || e > l - 1) return c;
      const n = i[e * a + t];
      if (-1 !== n && n !== o) return c;
      i[e * a + t] = o;
    }

    c.push({
      x: u,
      y: d,
      t: m
    }), h = g, f = p;
  }

  return c;
}

function u(t, e, n, r) {
  const i = [],
        a = new _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__.default(),
        l = 1 / Math.max(t.lineCollisionWidth, 1),
        s = Math.round(n * l),
        c = Math.round(r * l),
        h = new Int32Array(s * c);

  for (let o = 0; o < h.length; o++) h[o] = -1;

  const u = [];

  for (let o = 0; o < r; o += t.lineSpacing) for (let e = 0; e < n; e += t.lineSpacing) u.push({
    x: e,
    y: o,
    sort: a.getFloat()
  });

  u.sort((t, e) => t.sort - e.sort);

  for (const {
    x: o,
    y: d
  } of u) if (a.getFloat() < t.density) {
    const n = f(t, e, o, d, i.length, h, s, c, l);
    if (n.length < 2) continue;
    i.push(n);
  }

  return i;
}

function d(t, e, n, r) {
  if (0 === r) return t;
  const o = Math.round(3 * r),
        i = new Array(2 * o + 1);
  let a = 0;

  for (let c = -o; c <= o; c++) {
    const t = Math.exp(-c * c / (r * r));
    i[c + o] = t, a += t;
  }

  for (let c = -o; c <= o; c++) i[c + o] /= a;

  const l = new Float32Array(t.length);

  for (let c = 0; c < n; c++) for (let n = 0; n < e; n++) {
    let r = 0,
        a = 0;

    for (let l = -o; l <= o; l++) {
      if (n + l < 0 || n + l >= e) continue;
      const s = i[l + o];
      r += s * t[2 * (c * e + (n + l)) + 0], a += s * t[2 * (c * e + (n + l)) + 1];
    }

    l[2 * (c * e + n) + 0] = r, l[2 * (c * e + n) + 1] = a;
  }

  const s = new Float32Array(t.length);

  for (let c = 0; c < e; c++) for (let t = 0; t < n; t++) {
    let r = 0,
        a = 0;

    for (let s = -o; s <= o; s++) {
      if (t + s < 0 || t + s >= n) continue;
      const h = i[s + o];
      r += h * l[2 * ((t + s) * e + c) + 0], a += h * l[2 * ((t + s) * e + c) + 1];
    }

    s[2 * (t * e + c) + 0] = r, s[2 * (t * e + c) + 1] = a;
  }

  return s;
}

function m(t, e) {
  const n = new _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__.default(),
        r = t.reduce((t, e) => t + e.length, 0),
        i = new Float32Array(3 * r),
        a = new Array(t.length);
  let l = 0,
      s = 0;

  for (const o of t) {
    const t = l;

    for (const e of o) i[3 * l + 0] = e.x, i[3 * l + 1] = e.y, i[3 * l + 2] = e.t, l++;

    a[s++] = {
      startVertex: t,
      numberOfVertices: o.length,
      totalTime: o[o.length - 1].t,
      timeSeed: e ? n.getFloat() : 0
    };
  }

  return {
    lineVertices: i,
    lineDescriptors: a
  };
}

function w(t, e = 10) {
  const {
    lineVertices: n,
    lineDescriptors: r
  } = t;
  let o = 0,
      i = 0;

  for (const s of r) {
    o += 2 * s.numberOfVertices;
    i += 6 * (s.numberOfVertices - 1);
  }

  const a = new Float32Array(o * s),
        l = new Uint32Array(i);
  let c = 0,
      h = 0;

  function f() {
    l[h++] = c - 2, l[h++] = c, l[h++] = c - 1, l[h++] = c, l[h++] = c + 1, l[h++] = c - 1;
  }

  function u(t, e, n, r, o, i, l) {
    const h = c * s;
    let f = 0;
    a[h + f++] = t, a[h + f++] = e, a[h + f++] = 1, a[h + f++] = n, a[h + f++] = i, a[h + f++] = l, a[h + f++] = r, a[h + f++] = o, c++, a[h + f++] = t, a[h + f++] = e, a[h + f++] = -1, a[h + f++] = n, a[h + f++] = i, a[h + f++] = l, a[h + f++] = -r, a[h + f++] = -o, c++;
  }

  for (const s of r) {
    const {
      totalTime: t,
      timeSeed: r
    } = s;
    let o = null,
        i = null,
        a = null,
        l = null,
        c = null;

    for (let h = 0; h < s.numberOfVertices; h++) {
      const d = n[3 * (s.startVertex + h) + 0],
            m = n[3 * (s.startVertex + h) + 1],
            w = n[3 * (s.startVertex + h) + 2];
      let g = null,
          p = null,
          y = null,
          x = null;

      if (h > 0) {
        g = d - o, p = m - i;
        const n = Math.sqrt(g * g + p * p);

        if (g /= n, p /= n, h > 1) {
          let t = g + l,
              n = p + c;
          const r = Math.sqrt(t * t + n * n);
          t /= r, n /= r;
          const o = Math.min(1 / (t * g + n * p), e);
          t *= o, n *= o, y = -n, x = t;
        } else y = -p, x = g;

        null !== y && null !== x && (u(o, i, a, y, x, t, r), f());
      }

      o = d, i = m, a = w, l = g, c = p;
    }

    u(o, i, a, -c, l, t, r);
  }

  return {
    vertexData: a,
    indexData: l
  };
}

function g(t, n) {
  const r = n.pixels,
        {
    width: o,
    height: i
  } = n,
        a = new Float32Array(o * i * 2);
  if ("vector-uv" === t) for (let e = 0; e < o * i; e++) a[2 * e + 0] = r[0][e], a[2 * e + 1] = -r[1][e];else if ("vector-magdir" === t) for (let l = 0; l < o * i; l++) {
    const t = r[0][l],
          n = (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__.deg2rad)(r[1][l]),
          o = Math.cos(n - Math.PI / 2),
          i = Math.sin(n - Math.PI / 2);
    a[2 * l + 0] = o * t, a[2 * l + 1] = i * t;
  }
  return {
    data: a,
    width: o,
    height: i
  };
}

function p(_x4, _x5, _x6, _x7, _x8) {
  return _p.apply(this, arguments);
}

function _p() {
  _p = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, e, n, r, o) {
    const l = (0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__.getInfo)(e.spatialReference);
    if (!l) return y(t, e, n, r, o);
    const [s, c] = l.valid,
          h = c - s,
          f = Math.ceil(e.width / h),
          u = e.width / f,
          d = Math.round(n / f);
    let m = e.xmin;
    const w = [];

    for (let i = 0; i < f; i++) {
      const n = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_8__.default({
        xmin: m,
        xmax: m + u,
        ymin: e.ymin,
        ymax: e.ymax,
        spatialReference: e.spatialReference
      });
      w.push(y(t, n, d, r, o)), m += u;
    }

    const g = yield Promise.all(w),
          p = {
      data: new Float32Array(n * r * 2),
      width: n,
      height: r
    };
    let x = 0;

    for (const i of g) {
      for (let t = 0; t < i.height; t++) for (let e = 0; e < i.width; e++) x + e >= n || (p.data[2 * (t * n + x + e) + 0] = i.data[2 * (t * i.width + e) + 0], p.data[2 * (t * n + x + e) + 1] = i.data[2 * (t * i.width + e) + 1]);

      x += i.width;
    }

    return p;
  });
  return _p.apply(this, arguments);
}

function y(_x9, _x10, _x11, _x12, _x13) {
  return _y.apply(this, arguments);
}

function _y() {
  _y = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, e, r, o, i) {
    if ("imagery" === t.type) {
      yield t.load({
        signal: i
      });
      const a = t.rasterInfo.dataType,
            l = yield t.fetchImage(e, r, o, {
        signal: i
      });
      return !l || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(l.pixelData) || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(l.pixelData.pixelBlock) ? {
        data: new Float32Array(r * o * 2),
        width: r,
        height: o
      } : g(a, l.pixelData.pixelBlock);
    }

    yield t.load({
      signal: i
    });
    const a = t.rasterInfo.dataType,
          l = yield t.fetchPixels(e, r, o, {
      signal: i
    });
    return !l || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(l.pixelBlock) ? {
      data: new Float32Array(r * o * 2),
      width: r,
      height: o
    } : g(a, l.pixelBlock);
  });
  return _y.apply(this, arguments);
}



/***/ })

}]);
//# sourceMappingURL=9135.fc8bf0f70d69692e2e28.js.map