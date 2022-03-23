"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[3844],{

/***/ 56648:
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/devEnvironmentUtils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adjustStaticAGOUrl": () => (/* binding */ a),
/* harmony export */   "isDevEnvironment": () => (/* binding */ c),
/* harmony export */   "isTelemetryDevEnvironment": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(c){return c=c||globalThis.location.hostname,n.some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}function a(c,a){return c&&(a=a||globalThis.location.hostname)?null!=a.match(t)||null!=a.match(r)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=a.match(l)||null!=a.match(s)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c}function o(c){c=c||globalThis.location.hostname;return[/^zrh-.+?\.esri\.com$/].concat(n).some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}const t=/^devext.arcgis.com$/,l=/^qaext.arcgis.com$/,r=/^[\w-]*\.mapsdevext.arcgis.com$/,s=/^[\w-]*\.mapsqa.arcgis.com$/,n=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,t,l,/^jsapps.esri.com$/,r,s];


/***/ }),

/***/ 867:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/previewSymbol3D.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPatternDescriptor": () => (/* binding */ T),
/* harmony export */   "getSymbolLayerFill": () => (/* binding */ N),
/* harmony export */   "previewSymbol3D": () => (/* binding */ Y)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets.js */ 22287);
/* harmony import */ var _core_colorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/colorUtils.js */ 53265);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/screenUtils.js */ 75244);
/* harmony import */ var _gfxUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gfxUtils.js */ 51409);
/* harmony import */ var _IconSymbol3DLayerResource_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./IconSymbol3DLayerResource.js */ 62793);
/* harmony import */ var _ObjectSymbol3DLayerResource_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ObjectSymbol3DLayerResource.js */ 56184);
/* harmony import */ var _previewUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./previewUtils.js */ 65864);
/* harmony import */ var _renderUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./renderUtils.js */ 70772);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils.js */ 71185);
/* harmony import */ var _webStyleSymbolUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./webStyleSymbolUtils.js */ 3512);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/















const D = 22,
      O = 120,
      C = 80,
      I = 40,
      R = 20,
      E = _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__.default.getLogger("esri.symbols.support.previewSymbol3D");

function Z(e) {
  const t = e.outline,
        s = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(e.material) ? e.material.color : null,
        r = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(s) ? s.toHex() : null;
  if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(t) || "pattern" in t && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(t.pattern) && "style" === t.pattern.type && "none" === t.pattern.style) return "fill" === e.type && "#ffffff" === r ? {
    color: "#bdc3c7",
    width: .75
  } : null;
  const o = (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__.pt2px)(t.size) || 0;
  return {
    color: "rgba(" + ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(t.color) ? t.color.toRgba() : "255,255,255,1") + ")",
    width: Math.min(o, C),
    style: "pattern" in t && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(t.pattern) && "style" === t.pattern.type ? (0,_gfxUtils_js__WEBPACK_IMPORTED_MODULE_9__.dekebabifyLineStyle)(t.pattern.style) : null,
    join: "butt",
    cap: "patternCap" in t ? t.patternCap : "butt"
  };
}

function q(t, s) {
  const r = s && s.resource,
        o = r && r.href;
  if (t.thumbnail && t.thumbnail.url) return Promise.resolve(t.thumbnail.url);
  if (o && "object" !== s.type) return Promise.resolve((0,_utils_js__WEBPACK_IMPORTED_MODULE_14__.getIconHref)(t, s));
  const a = (0,_assets_js__WEBPACK_IMPORTED_MODULE_1__.getAssetUrl)("esri/images/Legend/legend3dsymboldefault.png");
  return t.styleOrigin && (t.styleOrigin.styleName || t.styleOrigin.styleUrl) ? (0,_webStyleSymbolUtils_js__WEBPACK_IMPORTED_MODULE_15__.resolveWebStyleSymbol)(t.styleOrigin, {
    portal: t.styleOrigin.portal
  }, "webRef").catch(e => e).then(e => {
    var t;
    return (null == e || null == (t = e.thumbnail) ? void 0 : t.url) || a;
  }) : Promise.resolve(a);
}

function A(e, r = 1) {
  const o = e.a,
        a = (0,_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_2__.toHSV)(e),
        n = a.h,
        l = a.s / r,
        i = 100 - (100 - a.v) / r,
        {
    r: c,
    g: p,
    b: u
  } = (0,_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_2__.toRGB)({
    h: n,
    s: l,
    v: i
  });
  return [c, p, u, o];
}

function H(e) {
  return "water" === e.type ? (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(e.color) ? null : e.color : (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(e.material) || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(e.material.color) ? null : e.material.color;
}

function N(e, t = 0) {
  const s = H(e);

  if (!s) {
    if ("fill" === e.type) return null;
    const s = _gfxUtils_js__WEBPACK_IMPORTED_MODULE_9__.defaultThematicColor.r,
          r = (0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_12__.adjustColorComponentBrightness)(s, t);
    return [r, r, r, 100];
  }

  const r = s.toRgba();

  for (let o = 0; o < 3; o++) r[o] = (0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_12__.adjustColorComponentBrightness)(r[o], t);

  return r;
}

function T(_x, _x2) {
  return _T.apply(this, arguments);
}

function _T() {
  _T = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, s) {
    const r = t.style;
    if ("none" === r) return null;
    return {
      type: "pattern",
      x: 0,
      y: 0,
      src: yield (0,_gfxUtils_js__WEBPACK_IMPORTED_MODULE_9__.getPatternUrlWithColor)((0,_assets_js__WEBPACK_IMPORTED_MODULE_1__.getAssetUrl)(`esri/symbols/patterns/${r}.png`), s.toCss(!0)),
      width: 5,
      height: 5
    };
  });
  return _T.apply(this, arguments);
}

function $(e) {
  return e.outline ? Z(e) : {
    color: "rgba(0, 0, 0, 1)",
    width: 1.5
  };
}

function B(e, t) {
  const s = H(e);
  if (!s) return null;
  let r = "rgba(";
  return r += (0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_12__.adjustColorComponentBrightness)(s.r, t) + ",", r += (0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_12__.adjustColorComponentBrightness)(s.g, t) + ",", r += (0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_12__.adjustColorComponentBrightness)(s.b, t) + ",", r + s.a + ");";
}

function F(e, t) {
  const s = B(e, t);
  if (!s) return {};
  if ("pattern" in e && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(e.pattern) && "style" === e.pattern.type && "none" === e.pattern.style) return null;
  return {
    color: s,
    width: Math.min(e.size ? (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__.pt2px)(e.size) : .75, C),
    style: "pattern" in e && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(e.pattern) && "style" === e.pattern.type ? (0,_gfxUtils_js__WEBPACK_IMPORTED_MODULE_9__.dekebabifyLineStyle)(e.pattern.style) : null,
    cap: "cap" in e ? e.cap : null,
    join: "join" in e ? "miter" === e.join ? (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__.pt2px)(2) : e.join : null
  };
}

function G(e, t, s) {
  const r = .75 * s;
  return {
    type: "linear",
    x1: r ? .25 * r : 0,
    y1: r ? .5 * r : 0,
    x2: r || 4,
    y2: r ? .5 * r : 4,
    colors: [{
      color: e,
      offset: 0
    }, {
      color: t,
      offset: 1
    }]
  };
}

function J(e) {
  const t = e.depth,
        s = e.height,
        r = e.width;
  return r && t && s && r === t && r < s;
}

function K(e, t, s) {
  const r = [];
  if (!e) return r;

  switch (e.type) {
    case "icon":
      {
        const s = 0,
              o = 0,
              a = t,
              n = t;

        switch (e.resource && e.resource.primitive || _IconSymbol3DLayerResource_js__WEBPACK_IMPORTED_MODULE_10__.defaultPrimitive) {
          case "circle":
            r.push({
              shape: {
                type: "circle",
                cx: 0,
                cy: 0,
                r: .5 * t
              },
              fill: N(e, 0),
              stroke: Z(e)
            });
            break;

          case "square":
            r.push({
              shape: {
                type: "path",
                path: [{
                  command: "M",
                  values: [s, n]
                }, {
                  command: "L",
                  values: [s, o]
                }, {
                  command: "L",
                  values: [a, o]
                }, {
                  command: "L",
                  values: [a, n]
                }, {
                  command: "Z",
                  values: []
                }]
              },
              fill: N(e, 0),
              stroke: Z(e)
            });
            break;

          case "triangle":
            r.push({
              shape: {
                type: "path",
                path: [{
                  command: "M",
                  values: [s, n]
                }, {
                  command: "L",
                  values: [.5 * a, o]
                }, {
                  command: "L",
                  values: [a, n]
                }, {
                  command: "Z",
                  values: []
                }]
              },
              fill: N(e, 0),
              stroke: Z(e)
            });
            break;

          case "cross":
            r.push({
              shape: {
                type: "path",
                path: [{
                  command: "M",
                  values: [.5 * a, o]
                }, {
                  command: "L",
                  values: [.5 * a, n]
                }, {
                  command: "M",
                  values: [s, .5 * n]
                }, {
                  command: "L",
                  values: [a, .5 * n]
                }]
              },
              stroke: $(e)
            });
            break;

          case "x":
            r.push({
              shape: {
                type: "path",
                path: [{
                  command: "M",
                  values: [s, o]
                }, {
                  command: "L",
                  values: [a, n]
                }, {
                  command: "M",
                  values: [a, o]
                }, {
                  command: "L",
                  values: [s, n]
                }]
              },
              stroke: $(e)
            });
            break;

          case "kite":
            r.push({
              shape: {
                type: "path",
                path: [{
                  command: "M",
                  values: [s, .5 * n]
                }, {
                  command: "L",
                  values: [.5 * a, o]
                }, {
                  command: "L",
                  values: [a, .5 * n]
                }, {
                  command: "L",
                  values: [.5 * a, n]
                }, {
                  command: "Z",
                  values: []
                }]
              },
              fill: N(e, 0),
              stroke: Z(e)
            });
        }

        break;
      }

    case "object":
      switch (e.resource && e.resource.primitive || _ObjectSymbol3DLayerResource_js__WEBPACK_IMPORTED_MODULE_11__.defaultPrimitive) {
        case "cone":
          {
            const o = G(N(e, 0), N(e, -.6), s ? R : t),
                  a = (0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_12__.getConeShapes)(t, s);
            r.push({
              shape: a[0],
              fill: o
            }), r.push({
              shape: a[1],
              fill: o
            });
            break;
          }

        case "inverted-cone":
          {
            const s = N(e, 0),
                  o = G(s, N(e, -.6), t),
                  a = (0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_12__.getInvertedConeShapes)(t);
            r.push({
              shape: a[0],
              fill: o
            }), r.push({
              shape: a[1],
              fill: s
            });
            break;
          }

        case "cube":
          {
            const o = (0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_12__.getCubeShapes)(t, s);
            r.push({
              shape: o[0],
              fill: N(e, 0)
            }), r.push({
              shape: o[1],
              fill: N(e, -.3)
            }), r.push({
              shape: o[2],
              fill: N(e, -.5)
            });
            break;
          }

        case "cylinder":
          {
            const o = G(N(e, 0), N(e, -.6), s ? R : t),
                  a = (0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_12__.getCylinderShapes)(t, s);
            r.push({
              shape: a[0],
              fill: o
            }), r.push({
              shape: a[1],
              fill: o
            }), r.push({
              shape: a[2],
              fill: N(e, 0)
            });
            break;
          }

        case "diamond":
          {
            const s = (0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_12__.getDiamondShapes)(t);
            r.push({
              shape: s[0],
              fill: N(e, -.3)
            }), r.push({
              shape: s[1],
              fill: N(e, 0)
            }), r.push({
              shape: s[2],
              fill: N(e, -.3)
            }), r.push({
              shape: s[3],
              fill: N(e, -.7)
            });
            break;
          }

        case "sphere":
          {
            const s = G(N(e, 0), N(e, -.6));
            s.x1 = 0, s.y1 = 0, s.x2 = .25 * t, s.y2 = .25 * t, r.push({
              shape: {
                type: "circle",
                cx: 0,
                cy: 0,
                r: .5 * t
              },
              fill: s
            });
            break;
          }

        case "tetrahedron":
          {
            const s = (0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_12__.getTetrahedronShapes)(t);
            r.push({
              shape: s[0],
              fill: N(e, -.3)
            }), r.push({
              shape: s[1],
              fill: N(e, 0)
            }), r.push({
              shape: s[2],
              fill: N(e, -.6)
            });
            break;
          }
      }

      break;
  }

  return r;
}

function Q(e) {
  return "icon" === e.type ? "multiply" : "tint";
}

function V(e, t) {
  const s = t && t.size ? (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__.pt2px)(t.size) : null,
        r = t && t.maxSize ? (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__.pt2px)(t.maxSize) : null,
        o = t && t.disableUpsampling,
        a = e.symbolLayers,
        n = [];
  let c = 0,
      p = 0;
  const u = a.getItemAt(a.length - 1);
  let h;
  return u && "icon" === u.type && (h = u.size && (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__.pt2px)(u.size)), a.forEach(a => {
    if ("icon" !== a.type && "object" !== a.type) return;
    const l = "icon" === a.type ? a.size && (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__.pt2px)(a.size) : 0,
          u = s || l ? Math.ceil(Math.min(s || l, r || O)) : D;

    if (a && a.resource && a.resource.href) {
      const t = q(e, a).then(function (e) {
        const t = a.get("material.color"),
              s = Q(a);
        return (0,_renderUtils_js__WEBPACK_IMPORTED_MODULE_13__.tintImageWithColor)(e, u, t, s, o);
      }).then(function (e) {
        const t = e.width,
              s = e.height;
        return c = Math.max(c, t), p = Math.max(p, s), [{
          shape: {
            type: "image",
            x: 0,
            y: 0,
            width: t,
            height: s,
            src: e.url
          },
          fill: null,
          stroke: null
        }];
      });
      n.push(t);
    } else {
      var m;
      let e = u;
      "icon" === a.type && h && s && (e = u * (l / h));
      const r = "tall" === (null == t ? void 0 : t.symbolConfig) || (null == t || null == (m = t.symbolConfig) ? void 0 : m.isTall) || "object" === a.type && J(a);
      c = Math.max(c, r ? R : e), p = Math.max(p, e), n.push(Promise.resolve(K(a, e, r)));
    }
  }), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.eachAlways)(n).then(function (e) {
    const s = [];
    return e.forEach(function (e) {
      e.value ? s.push(e.value) : e.error && E.warn("error while building swatchInfo!", e.error);
    }), (0,_renderUtils_js__WEBPACK_IMPORTED_MODULE_13__.renderSymbol)(s, [c, p], {
      node: t && t.node,
      scale: !1,
      opacity: t && t.opacity
    });
  });
}

function W(e, t) {
  const s = e.symbolLayers,
        r = [],
        o = (0,_utils_js__WEBPACK_IMPORTED_MODULE_14__.isVolumetricSymbol)(e),
        n = t && t.size ? (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__.pt2px)(t.size) : null,
        l = (t && t.maxSize ? (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__.pt2px)(t.maxSize) : null) || C;
  let c,
      p = 0,
      u = 0;
  return s.forEach((e, t) => {
    if (!e) return;
    if ("line" !== e.type && "path" !== e.type) return;
    const s = [];

    switch (e.type) {
      case "line":
        {
          const r = F(e, 0);
          if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(r)) break;
          const o = r && r.width || 0;
          0 === t && (c = o);
          const i = Math.min(n || o, l),
                h = 0 === t ? i : n ? i * (o / c) : i,
                m = h > I / 2 ? 2 * h : I;
          u = Math.max(u, h), p = Math.max(p, m), r.width = h, s.push({
            shape: {
              type: "path",
              path: [{
                command: "M",
                values: [0, .5 * u]
              }, {
                command: "L",
                values: [p, .5 * u]
              }]
            },
            stroke: r
          });
          break;
        }

      case "path":
        {
          const t = Math.min(n || D, l),
                r = N(e, 0),
                o = N(e, -.2),
                a = B(e, -.4),
                i = a ? {
            color: a,
            width: 1
          } : {};

          if ("quad" === e.profile) {
            const t = e.width,
                  a = e.height,
                  n = (0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_12__.getPathSymbolShapes)(t && a ? t / a : 1, 0 === a, 0 === t),
                  l = { ...i,
              join: "bevel"
            };
            s.push({
              shape: n[0],
              fill: o,
              stroke: l
            }), s.push({
              shape: n[1],
              fill: o,
              stroke: l
            }), s.push({
              shape: n[2],
              fill: r,
              stroke: l
            });
          } else s.push({
            shape: _previewUtils_js__WEBPACK_IMPORTED_MODULE_12__.shapes.pathSymbol3DLayer[0],
            fill: o,
            stroke: i
          }), s.push({
            shape: _previewUtils_js__WEBPACK_IMPORTED_MODULE_12__.shapes.pathSymbol3DLayer[1],
            fill: r,
            stroke: i
          });

          u = Math.max(u, t), p = u;
        }
    }

    r.push(s);
  }), Promise.resolve((0,_renderUtils_js__WEBPACK_IMPORTED_MODULE_13__.renderSymbol)(r, [p, u], {
    node: t && t.node,
    scale: o,
    opacity: t && t.opacity
  }));
}

function X(_x3, _x4) {
  return _X.apply(this, arguments);
}

function _X() {
  _X = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t) {
    const s = "mesh-3d" === e.type,
          r = e.symbolLayers,
          o = t && t.size ? (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__.pt2px)(t.size) : null,
          l = t && t.maxSize ? (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__.pt2px)(t.maxSize) : null,
          c = o || D,
          p = [];
    let u = 0,
        h = 0,
        m = !1;

    for (let i = 0; i < r.length; i++) {
      const e = r.getItemAt(i),
            t = [];
      if (s && "fill" !== e.type) continue;
      const o = _previewUtils_js__WEBPACK_IMPORTED_MODULE_12__.shapes.fill[0];

      switch (e.type) {
        case "fill":
          {
            const r = Z(e),
                  a = Math.min(c, l || O);
            u = Math.max(u, a), h = Math.max(h, a), m = !0;
            let i = N(e, 0);
            const p = "pattern" in e && e.pattern,
                  f = H(e);
            !s && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(p) && "style" === p.type && "solid" !== p.style && f && (i = yield T(p, f)), t.push({
              shape: o,
              fill: i,
              stroke: r
            });
            break;
          }

        case "line":
          {
            const s = F(e, 0);
            if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(s)) break;
            const r = {
              stroke: s,
              shape: o
            };
            u = Math.max(u, D), h = Math.max(h, D), t.push(r);
            break;
          }

        case "extrude":
          {
            const s = {
              join: "round",
              width: 1,
              ...F(e, -.4)
            },
                  r = N(e, 0),
                  o = N(e, -.2),
                  a = Math.min(c, l || O),
                  n = (0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_12__.getExtrudeSymbolShapes)(a);
            s.width = 1, t.push({
              shape: n[0],
              fill: o,
              stroke: s
            }), t.push({
              shape: n[1],
              fill: o,
              stroke: s
            }), t.push({
              shape: n[2],
              fill: r,
              stroke: s
            });
            const i = D,
                  p = .7 * D + .5 * a;
            u = Math.max(u, i), h = Math.max(h, p);
            break;
          }

        case "water":
          {
            const s = H(e),
                  r = A(s),
                  o = A(s, 2),
                  a = A(s, 3),
                  n = (0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_12__.getWaterSymbolShapes)();
            m = !0, t.push({
              shape: n[0],
              fill: r
            }), t.push({
              shape: n[1],
              fill: o
            }), t.push({
              shape: n[2],
              fill: a
            });
            const i = Math.min(c, l || O);
            u = Math.max(u, i), h = Math.max(h, i);
            break;
          }
      }

      p.push(t);
    }

    return Promise.resolve((0,_renderUtils_js__WEBPACK_IMPORTED_MODULE_13__.renderSymbol)(p, [u, h], {
      node: t && t.node,
      scale: m,
      opacity: t && t.opacity
    }));
  });
  return _X.apply(this, arguments);
}

function Y(e, t) {
  if (0 === e.symbolLayers.length) return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("symbolPreview: renderPreviewHTML3D", "No symbolLayers in the symbol."));

  switch (e.type) {
    case "point-3d":
      return V(e, t);

    case "line-3d":
      return W(e, t);

    case "polygon-3d":
    case "mesh-3d":
      return X(e, t);
  }

  return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("symbolPreview: swatchInfo3D", "symbol not supported."));
}



/***/ })

}]);
//# sourceMappingURL=3844.7d36c90dc54ec9368bed.js.map