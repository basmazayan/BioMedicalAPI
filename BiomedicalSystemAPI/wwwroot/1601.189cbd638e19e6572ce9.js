"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[1601],{

/***/ 83169:
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/i3s/I3SModule.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets.js */ 22287);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(){return n||(n=new Promise((e=>__webpack_require__.e(/*! import() */ 2484).then(__webpack_require__.bind(__webpack_require__, /*! ../../chunks/i3s.js */ 52484)).then((e=>e.i)).then((({default:t})=>{const n=t({locateFile:i,onRuntimeInitialized:()=>e(n)});delete n.then})))).catch((e=>Promise.reject(e)))),n}function i(t){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__.getAssetUrl)(`esri/libs/i3s/${t}`)}let n;


/***/ }),

/***/ 51601:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/SceneLayerWorker.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "destroyContext": () => (/* binding */ a),
/* harmony export */   "dracoDecompressPointCloudData": () => (/* binding */ o),
/* harmony export */   "filterObbsForModifications": () => (/* binding */ s),
/* harmony export */   "filterObbsForModificationsSync": () => (/* binding */ m),
/* harmony export */   "initialize": () => (/* binding */ h),
/* harmony export */   "interpretObbModificationResults": () => (/* binding */ b),
/* harmony export */   "process": () => (/* binding */ n),
/* harmony export */   "setLegacySchema": () => (/* binding */ i),
/* harmony export */   "setModifications": () => (/* binding */ f),
/* harmony export */   "setModificationsSync": () => (/* binding */ l),
/* harmony export */   "test": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/typedArrayUtil.js */ 65218);
/* harmony import */ var _libs_i3s_I3SModule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/i3s/I3SModule.js */ 83169);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




function n(_x) {
  return _n.apply(this, arguments);
}

function _n() {
  _n = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
    yield h();
    const t = [e.geometryBuffer];
    return {
      result: y(e, t),
      transferList: t
    };
  });
  return _n.apply(this, arguments);
}

function o(_x2) {
  return _o.apply(this, arguments);
}

function _o() {
  _o = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
    var r;
    yield h();

    const n = [e.geometryBuffer],
          {
      geometryBuffer: o
    } = e,
          s = o.byteLength,
          f = c._malloc(s),
          i = new Uint8Array(c.HEAPU8.buffer, f, s);

    i.set(new Uint8Array(o));
    const a = c.dracoDecompressPointCloudData(f, i.byteLength);
    if (c._free(f), a.error.length > 0) throw `i3s.wasm: ${a.error}`;
    const u = (null == (r = a.featureIds) ? void 0 : r.length) > 0 ? (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__.slice)(a.featureIds) : null,
          l = (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__.slice)(a.positions);
    u && n.push(u.buffer), n.push(l.buffer);
    return {
      result: {
        positions: l,
        featureIds: u
      },
      transferList: n
    };
  });
  return _o.apply(this, arguments);
}

function s(_x3) {
  return _s.apply(this, arguments);
}

function _s() {
  _s = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
    yield h(), m(e);
    const t = {
      buffer: e.buffer
    };
    return {
      result: t,
      transferList: [t.buffer]
    };
  });
  return _s.apply(this, arguments);
}

function f(_x4) {
  return _f.apply(this, arguments);
}

function _f() {
  _f = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
    yield h(), l(e);
  });
  return _f.apply(this, arguments);
}

function i(_x5) {
  return _i.apply(this, arguments);
}

function _i() {
  _i = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
    yield h(), c.setLegacySchema(e.context, e.jsonSchema);
  });
  return _i.apply(this, arguments);
}

function a(e) {
  d(e);
}

let u, c;

function l(e) {
  const t = e.modifications,
        r = c._malloc(8 * t.length),
        n = new Float64Array(c.HEAPU8.buffer, r, t.length);

  for (let o = 0; o < t.length; ++o) n[o] = t[o];

  c.setModifications(e.context, r, t.length, e.isGeodetic), c._free(r);
}

function y(r, n) {
  if (!c) return null;

  const {
    context: o,
    localOrigin: s,
    globalTrafo: f,
    mbs: i,
    obb: a,
    elevationOffset: u,
    geometryBuffer: l,
    geometryDescriptor: y,
    indexToVertexProjector: b,
    vertexToRenderProjector: m
  } = r,
        d = c._malloc(l.byteLength),
        h = 33,
        p = c._malloc(h * Float64Array.BYTES_PER_ELEMENT),
        g = new Uint8Array(c.HEAPU8.buffer, d, l.byteLength);

  g.set(new Uint8Array(l));
  const w = new Float64Array(c.HEAPU8.buffer, p, h);
  E(w, s);

  let A = w.byteOffset + 3 * w.BYTES_PER_ELEMENT,
      _ = new Float64Array(w.buffer, A);

  E(_, f), A += 16 * w.BYTES_PER_ELEMENT, _ = new Float64Array(w.buffer, A), E(_, i), A += 4 * w.BYTES_PER_ELEMENT, (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(a) && (_ = new Float64Array(w.buffer, A), E(_, a.center), A += 3 * w.BYTES_PER_ELEMENT, _ = new Float64Array(w.buffer, A), E(_, a.halfSize), A += 3 * w.BYTES_PER_ELEMENT, _ = new Float64Array(w.buffer, A), E(_, a.quaternion));
  const L = y,
        T = {
    isDraco: !1,
    isLegacy: !1,
    color: r.layouts.some(e => e.some(e => "color" === e.name)),
    normal: r.needNormals && r.layouts.some(e => e.some(e => "normalCompressed" === e.name)),
    uv0: r.layouts.some(e => e.some(e => "uv0" === e.name)),
    uvRegion: r.layouts.some(e => e.some(e => "uvRegion" === e.name)),
    featureIndex: L.featureIndex
  },
        I = c.process(o, !!r.obb, d, g.byteLength, L, T, p, u, b, m, r.normalReferenceFrame);
  if (c._free(p), c._free(d), I.error.length > 0) throw `i3s.wasm: ${I.error}`;
  if (I.discarded) return null;
  const P = I.componentOffsets.length > 0 ? (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__.slice)(I.componentOffsets) : null,
        U = I.featureIds.length > 0 ? (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__.slice)(I.featureIds) : null,
        B = (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__.slice)(I.interleavedVertedData).buffer,
        F = 1 === I.indicesType ? (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__.slice)(new Uint16Array(I.indices.buffer, I.indices.byteOffset, I.indices.byteLength / 2)) : (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__.slice)(new Uint32Array(I.indices.buffer, I.indices.byteOffset, I.indices.byteLength / 4)),
        v = (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__.slice)(I.positions),
        x = 1 === I.positionIndicesType ? (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__.slice)(new Uint16Array(I.positionIndices.buffer, I.positionIndices.byteOffset, I.positionIndices.byteLength / 2)) : (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__.slice)(new Uint32Array(I.positionIndices.buffer, I.positionIndices.byteOffset, I.positionIndices.byteLength / 4)),
        M = {
    layout: r.layouts[0],
    interleavedVertexData: B,
    indices: F,
    hasColors: I.hasColors,
    hasModifications: I.hasModifications,
    positionData: {
      data: v,
      indices: x
    }
  };
  return U && n.push(U.buffer), P && n.push(P.buffer), n.push(B), n.push(F.buffer), n.push(v.buffer), n.push(x.buffer), {
    componentOffsets: P,
    featureIds: U,
    transformedGeometry: M,
    obb: I.obb
  };
}

function b(e) {
  return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3;
}

function m(e) {
  const {
    context: t,
    buffer: r
  } = e,
        n = c._malloc(r.byteLength),
        o = r.byteLength / Float64Array.BYTES_PER_ELEMENT,
        s = new Float64Array(c.HEAPU8.buffer, n, o),
        f = new Float64Array(r);

  s.set(f), c.filterOBBs(t, n, o), f.set(s), c._free(n);
}

function d(e) {
  c && c.destroy(e);
}

function E(e, t) {
  for (let r = 0; r < t.length; ++r) e[r] = t[r];
}

function h() {
  return c ? Promise.resolve() : (u || (u = (0,_libs_i3s_I3SModule_js__WEBPACK_IMPORTED_MODULE_3__.get)().then(e => {
    c = e, u = null;
  })), u);
}

const p = {
  transform: y,
  destroy: d
};


/***/ })

}]);
//# sourceMappingURL=1601.189cbd638e19e6572ce9.js.map