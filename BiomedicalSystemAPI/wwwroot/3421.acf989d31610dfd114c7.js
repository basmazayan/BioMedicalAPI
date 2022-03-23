"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[3421],{

/***/ 53421:
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/loadGLTFMesh.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadGLTFMesh": () => (/* binding */ K)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Color.js */ 28503);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../request.js */ 30351);
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/MapUtils.js */ 68305);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chunks/mat3.js */ 72425);
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../chunks/mat3f64.js */ 30641);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chunks/vec3f64.js */ 33989);
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../chunks/vec4f64.js */ 7731);
/* harmony import */ var _MeshComponent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MeshComponent.js */ 92671);
/* harmony import */ var _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MeshMaterialMetallicRoughness.js */ 75329);
/* harmony import */ var _MeshTexture_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../MeshTexture.js */ 42461);
/* harmony import */ var _MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../MeshVertexAttributes.js */ 16745);
/* harmony import */ var _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../buffer/BufferView.js */ 79399);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../chunks/vec32.js */ 58535);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../chunks/vec42.js */ 14567);
/* harmony import */ var _buffer_utils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../buffer/utils.js */ 66094);
/* harmony import */ var _georeference_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./georeference.js */ 99814);
/* harmony import */ var _views_3d_glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../views/3d/glTF/DefaultLoadingContext.js */ 39685);
/* harmony import */ var _views_3d_glTF_loader_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../views/3d/glTF/loader.js */ 71176);
/* harmony import */ var _views_3d_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../views/3d/glTF/internal/indexUtils.js */ 12569);
/* harmony import */ var _views_3d_webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../views/3d/webgl-engine/lib/geometryDataUtils.js */ 62691);
/* harmony import */ var _views_3d_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../views/3d/webgl-engine/materials/DefaultMaterial_COLOR_GAMMA.js */ 87335);
/* harmony import */ var _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../chunks/vec33.js */ 18635);
/* harmony import */ var _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../chunks/vec43.js */ 9168);
/* harmony import */ var _chunks_vec22_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../chunks/vec22.js */ 14121);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


























function K(_x, _x2, _x3) {
  return _K.apply(this, arguments);
}

function _K() {
  _K = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, e, r) {
    const o = new _views_3d_glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_18__.DefaultLoadingContext(P(r)),
          n = (yield (0,_views_3d_glTF_loader_js__WEBPACK_IMPORTED_MODULE_19__.load)(o, e, r, !0)).model,
          i = n.lods.shift(),
          a = new Map(),
          c = new Map();
    n.textures.forEach((t, e) => a.set(e, W(t))), n.materials.forEach((t, e) => c.set(e, X(t, a)));
    const l = J(i);

    for (const s of l.parts) Y(l, s, c);

    const {
      position: u,
      normal: f,
      tangent: m,
      color: p,
      texCoord0: g
    } = l.vertexAttributes,
          x = {
      position: u.typedBuffer,
      normal: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(f) ? f.typedBuffer : null,
      tangent: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(m) ? m.typedBuffer : null,
      uv: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(g) ? g.typedBuffer : null,
      color: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(p) ? p.typedBuffer : null
    },
          h = (0,_georeference_js__WEBPACK_IMPORTED_MODULE_17__.georeferenceByTransform)(x, t, r);
    return {
      transform: h.transform,
      components: l.components,
      spatialReference: t.spatialReference,
      vertexAttributes: new _MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_12__.default({
        position: h.vertexAttributes.position,
        normal: h.vertexAttributes.normal,
        tangent: h.vertexAttributes.tangent,
        color: x.color,
        uv: x.uv
      })
    };
  });
  return _K.apply(this, arguments);
}

function P(t) {
  return null != t && t.resolveFile ? {
    busy: !1,
    request: function () {
      var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (r, o, n) {
        const i = t.resolveFile(r),
              a = "image" === o ? "image" : "binary" === o ? "array-buffer" : "json";
        return (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(i, {
          responseType: a,
          signal: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(n) ? n.signal : null
        })).data;
      });

      return function request(_x4, _x5, _x6) {
        return _ref.apply(this, arguments);
      };
    }()
  } : null;
}

function Q(t, e) {
  if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(t)) return "-";
  const o = t.typedBuffer;
  return `${(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_3__.getOrCreateMapValue)(e, o.buffer, () => e.size)}/${o.byteOffset}/${o.byteLength}`;
}

function H(t) {
  return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(t) ? t.toString() : "-";
}

function J(t) {
  let e = 0;
  const o = {
    color: !1,
    tangent: !1,
    normal: !1,
    texCoord0: !1
  },
        n = new Map(),
        s = new Map(),
        i = [];

  for (const a of t.parts) {
    const {
      attributes: {
        position: t,
        normal: c,
        color: l,
        tangent: u,
        texCoord0: f
      }
    } = a,
          m = `\n      ${Q(t, n)}/\n      ${Q(c, n)}/\n      ${Q(l, n)}/\n      ${Q(u, n)}/\n      ${Q(f, n)}/\n      ${H(a.transform)}\n    `;
    let p = !1;
    const d = (0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_3__.getOrCreateMapValue)(s, m, () => (p = !0, {
      start: e,
      length: t.count
    }));
    p && (e += t.count), c && (o.normal = !0), l && (o.color = !0), u && (o.tangent = !0), f && (o.texCoord0 = !0), i.push({
      gltf: a,
      writeVertices: p,
      region: d
    });
  }

  return {
    vertexAttributes: {
      position: (0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_16__.createBuffer)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_13__.BufferViewVec3f64, e),
      normal: o.normal ? (0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_16__.createBuffer)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_13__.BufferViewVec3f, e) : null,
      tangent: o.tangent ? (0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_16__.createBuffer)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_13__.BufferViewVec4f, e) : null,
      color: o.color ? (0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_16__.createBuffer)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_13__.BufferViewVec4u8, e) : null,
      texCoord0: o.texCoord0 ? (0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_16__.createBuffer)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_13__.BufferViewVec2f, e) : null
    },
    parts: i,
    components: []
  };
}

function W(t) {
  return new _MeshTexture_js__WEBPACK_IMPORTED_MODULE_11__.default({
    data: t.data,
    wrap: rt(t.parameters.wrap)
  });
}

function X(e, r) {
  const s = new _Color_js__WEBPACK_IMPORTED_MODULE_1__.default(st(e.color, e.opacity)),
        i = e.emissiveFactor ? new _Color_js__WEBPACK_IMPORTED_MODULE_1__.default(it(e.emissiveFactor)) : null;
  return new _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_10__.default({
    color: s,
    colorTexture: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.unwrap)((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.applySome)(e.textureColor, t => r.get(t))),
    normalTexture: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.unwrap)((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.applySome)(e.textureNormal, t => r.get(t))),
    emissiveColor: i,
    emissiveTexture: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.unwrap)((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.applySome)(e.textureEmissive, t => r.get(t))),
    occlusionTexture: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.unwrap)((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.applySome)(e.textureOcclusion, t => r.get(t))),
    alphaMode: et(e.alphaMode),
    alphaCutoff: e.alphaCutoff,
    doubleSided: e.doubleSided,
    metallic: e.metallicFactor,
    roughness: e.roughnessFactor,
    metallicRoughnessTexture: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.unwrap)((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.applySome)(e.textureMetallicRoughness, t => r.get(t)))
  });
}

function Y(t, e, r) {
  e.writeVertices && Z(t, e);
  const o = e.gltf,
        n = tt(o.indices || o.attributes.position.count, o.primitiveType),
        s = e.region.start;
  if (s) for (let i = 0; i < n.length; i++) n[i] += s;
  t.components.push(new _MeshComponent_js__WEBPACK_IMPORTED_MODULE_9__.default({
    faces: n,
    material: r.get(o.material),
    trustSourceNormals: !0
  }));
}

function Z(t, e) {
  const {
    position: r,
    normal: o,
    tangent: n,
    color: i,
    texCoord0: l
  } = t.vertexAttributes,
        u = e.region.start,
        {
    attributes: f,
    transform: m
  } = e.gltf,
        p = f.position.count;

  if ((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.t)(r.slice(u, p), f.position, m), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(f.normal) && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(o)) {
    const t = (0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_5__.a)((0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_6__.c)(), m);
    (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.a)(o.slice(u, p), f.normal, t);
  } else (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(o) && (0,_chunks_vec33_js__WEBPACK_IMPORTED_MODULE_23__.f)(o, 0, 0, 1, {
    dstIndex: u,
    count: p
  });

  if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(f.tangent) && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(n)) {
    const t = (0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_5__.a)((0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_6__.c)(), m);
    (0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_15__.t)(n.slice(u, p), f.tangent, t);
  } else (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(n) && (0,_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_24__.f)(n, 0, 0, 1, 1, {
    dstIndex: u,
    count: p
  });

  if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(f.texCoord0) && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(l) ? (0,_chunks_vec22_js__WEBPACK_IMPORTED_MODULE_25__.n)(l.slice(u, p), f.texCoord0) : (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(l) && (0,_chunks_vec22_js__WEBPACK_IMPORTED_MODULE_25__.f)(l, 0, 0, {
    dstIndex: u,
    count: p
  }), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(f.color) && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(i)) {
    const t = f.color,
          e = i.slice(u, p);
    if (4 === t.elementCount) t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_13__.BufferViewVec4f ? (0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_15__.s)(e, t, 255) : t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_13__.BufferViewVec4u8 ? (0,_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_24__.c)(e, t) : t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_13__.BufferViewVec4u16 && (0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_15__.a)(e, t, 8);else {
      (0,_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_24__.f)(e, 255, 255, 255, 255);
      const r = _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_13__.BufferViewVec3u8.fromTypedArray(e.typedBuffer, e.typedBufferStride);
      t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_13__.BufferViewVec3f ? (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.s)(r, t, 255) : t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_13__.BufferViewVec3u8 ? (0,_chunks_vec33_js__WEBPACK_IMPORTED_MODULE_23__.c)(r, t) : t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_13__.BufferViewVec3u16 && (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.b)(r, t, 8);
    }
  } else (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(i) && (0,_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_24__.f)(i.slice(u, p), 255, 255, 255, 255);
}

function tt(t, e) {
  switch (e) {
    case 4:
      return (0,_views_3d_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_20__.trianglesToTriangles)(t, _views_3d_webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_21__.generateIndexArray);

    case 5:
      return (0,_views_3d_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_20__.triangleStripToTriangles)(t);

    case 6:
      return (0,_views_3d_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_20__.triangleFanToTriangles)(t);
  }
}

function et(t) {
  switch (t) {
    case "OPAQUE":
      return "opaque";

    case "MASK":
      return "mask";

    case "BLEND":
      return "blend";
  }
}

function rt(t) {
  return {
    horizontal: ot(t.s),
    vertical: ot(t.t)
  };
}

function ot(t) {
  switch (t) {
    case 33071:
      return "clamp";

    case 33648:
      return "mirror";

    case 10497:
      return "repeat";
  }
}

function nt(t) {
  return t ** (1 / _views_3d_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_22__.COLOR_GAMMA) * 255;
}

function st(t, e) {
  return (0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_8__.f)(nt(t[0]), nt(t[1]), nt(t[2]), e);
}

function it(t) {
  return (0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.f)(nt(t[0]), nt(t[1]), nt(t[2]));
}



/***/ })

}]);
//# sourceMappingURL=3421.acf989d31610dfd114c7.js.map