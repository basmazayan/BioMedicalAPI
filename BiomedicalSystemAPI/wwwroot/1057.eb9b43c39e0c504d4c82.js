"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[1057],{

/***/ 11057:
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterFunctions/rasterProjectionHelper.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computeProjectedScales": () => (/* binding */ F),
/* harmony export */   "defaultGridSpacing": () => (/* binding */ y),
/* harmony export */   "defaultProjectionToleranceInPixels": () => (/* binding */ g),
/* harmony export */   "getDefaultDatumTransformationForDataset": () => (/* binding */ w),
/* harmony export */   "getProjectionOffsetGrid": () => (/* binding */ L),
/* harmony export */   "getRasterDatasetAlignmentInfo": () => (/* binding */ T),
/* harmony export */   "getWorldWidth": () => (/* binding */ P),
/* harmony export */   "getWorldWrapCount": () => (/* binding */ G),
/* harmony export */   "load": () => (/* binding */ d),
/* harmony export */   "minimumGridSpacing": () => (/* binding */ M),
/* harmony export */   "projectExtent": () => (/* binding */ j),
/* harmony export */   "projectPoint": () => (/* binding */ v),
/* harmony export */   "projectResolution": () => (/* binding */ R),
/* harmony export */   "requirePE": () => (/* binding */ x),
/* harmony export */   "snapExtent": () => (/* binding */ q),
/* harmony export */   "snapPyramid": () => (/* binding */ A)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry.js */ 61243);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/unitUtils.js */ 55612);
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../geometry/projection.js */ 15695);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../geometry/Point.js */ 7309);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/







const f = 5e-4;

function x(e, n, t) {
  return !(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__.canProjectWithoutEngine)(e, n, t);
}

function m(n, t, o) {
  const i = x(n, t, o);
  if (i && !(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__.isLoaded)()) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("rasterprojectionhelper-project", "projection engine is not loaded");
  return i;
}

const p = function (e, n, t) {
  const o = (e[0] + e[4] + e[4 * n.cols] + e[4 * n.cols + 4]) / 4,
        i = (e[1] + e[5] + e[4 * n.rows + 1] + e[4 * n.rows + 5]) / 4,
        a = (e[4 * n.cols] - e[0] + e[4 * n.cols + 4] - e[4]) / t[0] * .5,
        r = (e[4 * n.cols + 1] - e[1] + e[4 * n.cols + 5] - e[5]) / t[1] * .5;
  return [0 === a || isNaN(a) ? 0 : Math.abs(o - e[2 * n.rows + 2]) / Math.abs(a), 0 === r || isNaN(r) ? 0 : Math.abs(i - e[2 * n.rows + 3]) / Math.abs(r)];
},
      h = {
  3395: 20037508.342789244,
  3410: 17334193.943686873,
  3857: 20037508.342788905,
  3975: 17367530.445161372,
  4087: 20037508.342789244,
  4088: 20015108.787169147,
  6933: 17367530.445161372,
  32662: 20037508.342789244,
  53001: 20015086.79602057,
  53002: 10007543.39801029,
  53003: 20015086.79602057,
  53004: 20015086.79602057,
  53016: 14152803.599503474,
  53017: 17333573.624304302,
  53034: 20015086.79602057,
  53079: 20015114.352186374,
  53080: 20015114.352186374,
  54001: 20037508.342789244,
  54002: 10018754.171394624,
  54003: 20037508.342789244,
  54004: 20037508.342789244,
  54016: 14168658.027268292,
  54017: 17367530.44516137,
  54034: 20037508.342789244,
  54079: 20037508.342789244,
  54080: 20037508.342789244,
  54100: 20037508.342789244,
  54101: 20037508.342789244
},
      y = 32,
      M = 4,
      g = M;

function d() {
  return _d.apply(this, arguments);
}

function _d() {
  _d = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
    if ((0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__.isLoaded)()) return null;
    yield (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__.load)();
  });
  return _d.apply(this, arguments);
}

function w(e, n, t) {
  if (!m(e.spatialReference, n)) return null;
  return t ? (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__.getTransformation)(n, e.spatialReference, e) : (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__.getTransformation)(e.spatialReference, n, e);
}

function R(e, t, o, i = null) {
  if (e.spatialReference.equals(t)) return e;
  m(e.spatialReference, t, i);
  const a = o.center,
        r = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_6__.default({
    xmin: a.x - e.x / 2,
    xmax: a.x + e.x / 2,
    ymin: a.y - e.y / 2,
    ymax: a.y + e.y / 2,
    spatialReference: e.spatialReference
  }),
        s = (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__.project)(r, t, i);
  if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(s)) return null;
  return {
    x: s.xmax - s.xmin,
    y: s.ymax - s.ymin
  };
}

function b(e, n = .01) {
  return (0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__.getMetersPerUnitForSR)(e) ? n / (0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__.getMetersPerUnitForSR)(e) : 0;
}

function v(e, n, t = null, o = !0) {
  const i = e.spatialReference;
  if (i.equals(n)) return e;
  m(i, n, t);
  const a = (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__.project)(e, n, t);

  if (o && n.isGeographic) {
    const [n, t] = C(i, !0),
          o = b(i);
    o && null != n && null != t && (Math.abs(e.x - n) < o && Math.abs(180 - a.x) < f ? a.x -= 360 : Math.abs(e.x - t) < o && Math.abs(180 + a.x) < f && (a.x += 360));
  }

  return a;
}

function N(e, n, t = null) {
  const o = e[0].spatialReference;
  return o.equals(n) ? e : (m(o, n, t), (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__.project)(e, n, t));
}

function z(e) {
  const n = P(e[0].spatialReference);
  if (e.length < 2 || !(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(n)) return e[0];
  let {
    xmin: o,
    xmax: i,
    ymin: a,
    ymax: r
  } = e[0];

  for (let t = 1; t < e.length; t++) {
    const o = e[t];
    i = o.xmax + n * t, a = Math.min(a, o.ymin), r = Math.max(r, o.ymax);
  }

  return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_6__.default({
    xmin: o,
    xmax: i,
    ymin: a,
    ymax: r,
    spatialReference: e[0].spatialReference
  });
}

function j(e, n, o = null, i = !0) {
  if (e.spatialReference.equals(n)) return e;
  const a = G(e),
        r = P(e.spatialReference, !0);
  if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(r) || 0 === a) return S(e, n, o, i);
  return z(e.clone().normalize().map(e => S(e, n, o, i)));
}

function S(e, n, t = null, o = !0) {
  const i = e.spatialReference;
  if (i.equals(n)) return e;
  m(i, n, t);
  const a = (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__.project)(e, n, t);
  let [r, s] = C(i, !0);

  if (a && o && i.isWebMercator && n.isGeographic && null != r && null != s) {
    const o = .001,
          l = 1e3;

    if (Math.abs(e.xmin - r) < o && Math.abs(s - e.xmax) > l && Math.abs(180 - a.xmax) < f) {
      a.xmin = -180;
      const o = [];
      o.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__.default(e.xmax, e.ymin, i)), o.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__.default(e.xmax, (e.ymin + e.ymax) / 2, i)), o.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__.default(e.xmax, e.ymax, i));
      const r = o.map(e => v(e, n, t)).filter(e => !isNaN(null == e ? void 0 : e.x)).map(e => e.x);
      a.xmax = Math.max.apply(null, r);
    }

    if (Math.abs(e.xmax - s) < o && Math.abs(r - e.xmin) > l && Math.abs(180 + a.xmin) < f) {
      a.xmax = 180;
      const o = [];
      o.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__.default(e.xmin, e.ymin, i)), o.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__.default(e.xmin, (e.ymin + e.ymax) / 2, i)), o.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__.default(e.xmin, e.ymax, i));
      const r = o.map(e => v(e, n, t)).filter(e => !isNaN(null == e ? void 0 : e.x)).map(e => e.x);
      a.xmin = Math.min.apply(null, r);
    }
  }

  [r, s] = C(n, !0);
  const c = b(n);
  return c && null != r && null != s && a && (Math.abs(a.xmin - r) < c && (a.xmin = r), Math.abs(a.xmax - s) < c && (a.xmax = s)), a;
}

function P(e, n = !1) {
  const t = n ? 20037508.342787 : 20037508.342788905;
  return e.isWebMercator ? 2 * t : e.wkid && e.isGeographic ? 360 : 2 * h[e.wkid] || null;
}

function C(e, n = !1) {
  const o = [],
        i = P(e, n);
  return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(i) && (o.push(-i / 2), o.push(i / 2)), o;
}

function W(e, n, t, o) {
  let i = (e - n) / t;
  return i - Math.floor(i) != 0 ? i = Math.floor(i) : o && (i -= 1), i;
}

function G(e, n = !1) {
  const o = P(e.spatialReference);
  if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(o)) return 0;
  const i = n ? 0 : -(o / 2);
  return W(e.xmax, i, o, !0) - W(e.xmin, i, o, !1);
}

function T(e) {
  const n = e.storageInfo.origin.x,
        o = P(e.spatialReference, !0);
  if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(o)) return {
    originX: n,
    halfWorldWidth: null,
    pyramidsInfo: null
  };
  const i = o / 2,
        {
    nativePixelSize: a,
    storageInfo: r,
    extent: s
  } = e,
        {
    maximumPyramidLevel: l,
    blockWidth: c,
    pyramidScalingFactor: u
  } = r;
  let f = a.x;
  const x = [],
        m = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(e.transform) && "gcs-shift" === e.transform.type,
        p = n + (m ? 0 : i),
        h = m ? o - n : i - n;

  for (let t = 0; t <= l; t++) {
    const e = (s.xmax - n) / f / c,
          t = e - Math.floor(e) == 0 ? e : Math.ceil(e),
          o = h / f / c,
          i = o - Math.floor(o) == 0 ? o : Math.ceil(o),
          a = Math.floor(p / f / c),
          r = Math.round(p / f) % c,
          l = (c - Math.round(h / f) % c) % c;
    x.push({
      resolutionX: f,
      blockWidth: c,
      datsetColumnCount: t,
      worldColumnCountFromOrigin: i,
      leftMargin: r,
      rightPadding: l,
      originColumnOffset: a
    }), f *= u;
  }

  return {
    originX: n,
    halfWorldWidth: i,
    pyramidsInfo: x,
    hasGCSSShiftTransform: m
  };
}

function L(e) {
  const n = e.isAdaptive && null == e.spacing,
        t = e.spacing || [y, y];
  let o = k(e),
      i = {
    cols: o.size[0] + 1,
    rows: o.size[1] + 1
  },
      a = p(o.offsets, i, t);
  const r = (a[0] + a[1]) / 2,
        s = o.outofBoundPointCount > 0 && o.outofBoundPointCount < o.offsets.length / 2;
  return n && (s || r > g) && (o = k({ ...e,
    spacing: [M, M]
  }), i = {
    cols: o.size[0] + 1,
    rows: o.size[1] + 1
  }, a = p(o.offsets, i, t)), o.error = a, o.coefficients = I(o.offsets, i, s), o;
}

function k(e) {
  const {
    projectedExtent: n,
    srcBufferExtent: o,
    pixelSize: i,
    datumTransformation: a,
    rasterTransform: r
  } = e,
        s = n.spatialReference,
        l = o.spatialReference;
  m(s, l);
  const {
    xmin: c,
    ymin: f,
    xmax: x,
    ymax: p
  } = n,
        h = P(l),
        M = e.hasWrapAround || "gcs-shift" === (null == r ? void 0 : r.type),
        g = e.spacing || [y, y],
        d = {
    x: g[0] * i.x,
    y: g[1] * i.y
  },
        w = {
    cols: Math.ceil((x - c) / d.x - .1 / g[0]) + 1,
    rows: Math.ceil((p - f) / d.y - .1 / g[1]) + 1
  },
        R = d.x,
        b = d.y,
        v = [];
  let z,
      j = 0;
  const S = [];

  for (let t = 0; t < w.cols; t++) for (let e = 0; e < w.rows; e++) S.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__.default({
    x: c + R * t,
    y: p - b * e,
    spatialReference: s
  }));

  const C = N(S, l, a);

  for (let u = 0; u < w.cols; u++) {
    const e = [];

    for (let n = 0; n < w.rows; n++) {
      let i = C[u * w.rows + n];
      r && (i = r.inverseTransform(i)), e.push(i), u > 0 && M && i && z[n] && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(h) && i.x < z[n].x && (i.x += h), i ? (v.push((i.x - o.xmin) / (o.xmax - o.xmin)), v.push((o.ymax - i.y) / (o.ymax - o.ymin))) : (v.push(NaN), v.push(NaN), j++);
    }

    z = e;
  }

  return {
    offsets: v,
    error: null,
    coefficients: null,
    outofBoundPointCount: j,
    spacing: g,
    size: [w.cols - 1, w.rows - 1]
  };
}

function I(e, n, t) {
  const {
    cols: o,
    rows: i
  } = n,
        a = new Float32Array((o - 1) * (i - 1) * 2 * 6),
        r = new Float32Array([-0, -1, 1, -1, 1, -0, 1, -0, -0]),
        s = new Float32Array([-1, 1, 0, 0, -1, 1, 1, 0, 0]);

  for (let l = 0; l < o - 1; l++) {
    for (let n = 0; n < i - 1; n++) {
      let t = l * i * 2 + 2 * n;
      const c = e[t],
            u = e[t + 1],
            f = e[t + 2],
            x = e[t + 3];
      t += 2 * i;
      const m = e[t],
            p = e[t + 1],
            h = e[t + 2],
            y = e[t + 3];
      let M = 0,
          g = 12 * (n * (o - 1) + l);

      for (let e = 0; e < 3; e++) a[g++] = r[M++] * c + r[M++] * f + r[M++] * h;

      M = 0;

      for (let e = 0; e < 3; e++) a[g++] = r[M++] * u + r[M++] * x + r[M++] * y;

      M = 0;

      for (let e = 0; e < 3; e++) a[g++] = s[M++] * c + s[M++] * m + s[M++] * h;

      M = 0;

      for (let e = 0; e < 3; e++) a[g++] = s[M++] * u + s[M++] * p + s[M++] * y;
    }

    if (t) for (let e = 0; e < a.length; e++) isNaN(a[e]) && (a[e] = -1);
  }

  return a;
}

function q(e) {
  const n = e.clone().normalize();
  return 1 === n.length ? n[0] : z(n);
}

function A(e, n, o) {
  const {
    storageInfo: i,
    pixelSize: a
  } = n;
  let r,
      s = !1;
  const {
    pyramidResolutions: l
  } = i;

  if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(l) && l.length) {
    const t = (e.x + e.y) / 2,
          i = l[l.length - 1],
          c = (i.x + i.y) / 2,
          f = (a.x + a.y) / 2;
    if (t <= f) r = 0;else if (t >= c) r = l.length, s = t / c > 8;else {
      let e,
          n = f;

      for (let i = 1; i <= l.length; i++) {
        if (e = (l[i - 1].x + l[i - 1].y) / 2, t <= e) {
          t === e ? r = i : "down" === o ? (r = i - 1, s = t / n > 8) : r = "up" === o || t - n > e - t || t / n > 2 ? i : i - 1;
          break;
        }

        n = e;
      }
    }
    const x = 0 === r ? a : l[r - 1];
    return {
      pyramidLevel: r,
      pyramidResolution: new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__.default({
        x: x.x,
        y: x.y,
        spatialReference: n.spatialReference
      }),
      excessiveReading: s
    };
  }

  const c = Math.log(e.x / a.x) / Math.LN2,
        f = Math.log(e.y / a.y) / Math.LN2,
        x = n.storageInfo.maximumPyramidLevel || 0;
  r = "down" === o ? Math.floor(Math.min(c, f)) : "up" === o ? Math.ceil(Math.max(c, f)) : Math.round((c + f) / 2), r < 0 ? r = 0 : r > x && (s = r > x + 3, r = x);
  const m = 2 ** r;
  return {
    pyramidLevel: r,
    pyramidResolution: new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__.default({
      x: m * n.nativePixelSize.x,
      y: m * n.nativePixelSize.y,
      spatialReference: n.spatialReference
    }),
    excessiveReading: s
  };
}

function F(e, n, t = 512, i = !0) {
  const {
    extent: a,
    spatialReference: r,
    pixelSize: s
  } = e,
        l = R(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__.default({
    x: s.x,
    y: s.y,
    spatialReference: r
  }), n, a);
  if (null == l) return {
    projectedPixelSize: null,
    scales: null,
    srcResolutions: null,
    isCustomTilingScheme: !1
  };
  const c = (l.x + l.y) / 2,
        f = (0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__.getMetersPerUnitForSR)(n),
        x = c * f * 96 * 39.37,
        m = n.isGeographic ? 256 / t * 295828763.7958547 : 256 / t * 591657527.591555;
  let p = "vector-magdir" === e.dataType || "vector-uv" === e.dataType;
  const h = j(a, n);
  p || i && (n.isGeographic || n.isWebMercator) && (p = h.xmin * h.xmax < 0);
  let y,
      M = x;
  const g = 1.001;

  if (p) {
    M = m;
    const e = n.isGeographic ? 1341104507446289e-21 : .29858214164761665,
          t = e * (96 * f * 39.37),
          o = n.isGeographic ? 4326 : 3857;
    y = R(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__.default({
      x: e,
      y: e,
      spatialReference: {
        wkid: o
      }
    }), r, h), y.x *= M / t, y.y *= M / t;
  } else {
    y = {
      x: s.x,
      y: s.y
    };
    const n = Math.ceil(Math.log(Math.min(e.width, e.height) / 32) / Math.LN2);
    let t = 0;

    for (; M < m * (g / 2) && t < n;) t++, M *= 2, y.x *= 2, y.y *= 2;

    Math.max(M, m) / Math.min(M, m) <= g && (M = m);
  }

  const d = [M],
        w = [{
    x: y.x,
    y: y.y
  }],
        b = 70.5310735,
        v = Math.min(b, x) / g;

  for (; M >= v;) M /= 2, y.x /= 2, y.y /= 2, d.push(M), w.push({
    x: y.x,
    y: y.y
  });

  return {
    projectedPixelSize: l,
    scales: d,
    srcResolutions: w,
    isCustomTilingScheme: !p
  };
}



/***/ })

}]);
//# sourceMappingURL=1057.eb9b43c39e0c504d4c82.js.map