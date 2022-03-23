"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[747],{

/***/ 60747:
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/MapNotesLayer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ B)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry.js */ 61243);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Graphic.js */ 99326);
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../symbols.js */ 58650);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Collection.js */ 37635);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/Error.js */ 61414);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/lang.js */ 60161);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/object.js */ 47914);
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/Warning.js */ 68364);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../geometry/projection.js */ 15695);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../geometry/support/normalizeUtils.js */ 46010);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./FeatureLayer.js */ 36328);
/* harmony import */ var _GraphicsLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./GraphicsLayer.js */ 48092);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _graphics_objectIdUtils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./graphics/objectIdUtils.js */ 19109);
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ 88945);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ 32617);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./support/Field.js */ 66536);
/* harmony import */ var _symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../symbols/SimpleFillSymbol.js */ 42247);
/* harmony import */ var _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../symbols/SimpleLineSymbol.js */ 34755);
/* harmony import */ var _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../symbols/SimpleMarkerSymbol.js */ 85076);
/* harmony import */ var _symbols_TextSymbol_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../symbols/TextSymbol.js */ 51159);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../geometry/Extent.js */ 70157);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/



































function F(e) {
  return e.layers.some(e => null != e.layerDefinition.visibilityField);
}

const G = new _support_Field_js__WEBPACK_IMPORTED_MODULE_28__.default({
  name: "OBJECTID",
  alias: "OBJECTID",
  type: "oid",
  nullable: !1,
  editable: !1
}),
      _ = new _support_Field_js__WEBPACK_IMPORTED_MODULE_28__.default({
  name: "title",
  alias: "Title",
  type: "string",
  nullable: !0,
  editable: !0
});

let P = class extends _GraphicsLayer_js__WEBPACK_IMPORTED_MODULE_21__.default {
  constructor() {
    super(...arguments), this.visibilityMode = "inherited";
  }

  initialize() {
    for (const e of this.graphics) e.sourceLayer = this.layer;

    this.graphics.on("after-add", e => {
      e.item.sourceLayer = this.layer;
    }), this.graphics.on("after-remove", e => {
      e.item.sourceLayer = null;
    });
  }

  get sublayers() {
    return this.graphics;
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  readOnly: !0
})], P.prototype, "sublayers", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)()], P.prototype, "layer", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  readOnly: !0
})], P.prototype, "visibilityMode", void 0), P = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_15__.subclass)("esri.layers.MapNotesLayer.MapNotesSublayer")], P);
const k = [{
  geometryType: "polygon",
  geometryTypeJSON: "esriGeometryPolygon",
  layerId: "polygonLayer",
  title: "Polygons",
  identifyingSymbol: new _symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_29__.default().toJSON()
}, {
  geometryType: "polyline",
  geometryTypeJSON: "esriGeometryPolyline",
  layerId: "polylineLayer",
  title: "Polylines",
  identifyingSymbol: new _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_30__.default().toJSON()
}, {
  geometryType: "multipoint",
  geometryTypeJSON: "esriGeometryMultipoint",
  layerId: "multipointLayer",
  title: "Multipoints",
  identifyingSymbol: new _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_31__.default().toJSON()
}, {
  geometryType: "point",
  geometryTypeJSON: "esriGeometryPoint",
  layerId: "pointLayer",
  title: "Points",
  identifyingSymbol: new _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_31__.default().toJSON()
}, {
  geometryType: "point",
  geometryTypeJSON: "esriGeometryPoint",
  layerId: "textLayer",
  title: "Text",
  identifyingSymbol: new _symbols_TextSymbol_js__WEBPACK_IMPORTED_MODULE_32__.default().toJSON()
}];
let z = class extends (0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_24__.BlendLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_27__.ScaleRangeLayer)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_25__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_26__.PortalLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_9__.MultiOriginJSONMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_22__.default))))) {
  constructor(e) {
    super(e), this.capabilities = {
      operations: {
        supportsMapNotesEditing: !0
      }
    }, this.featureCollections = null, this.featureCollectionJSON = null, this.featureCollectionType = "notes", this.legendEnabled = !1, this.minScale = 0, this.maxScale = 0, this.spatialReference = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_33__.default.WGS84, this.sublayers = new _core_Collection_js__WEBPACK_IMPORTED_MODULE_5__.default(k.map(e => new P({
      id: e.layerId,
      title: e.title,
      layer: this
    }))), this.title = "Map Notes", this.type = "map-notes", this.visibilityMode = "inherited";
  }

  readCapabilities(e, t, r) {
    return {
      operations: {
        supportsMapNotesEditing: !F(t) && "portal-item" !== (null == r ? void 0 : r.origin)
      }
    };
  }

  readFeatureCollections(e, t, o) {
    if (!F(t)) return null;
    const i = t.layers.map(e => {
      const t = new _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_20__.default();
      return t.read(e, o), t;
    });
    return new _core_Collection_js__WEBPACK_IMPORTED_MODULE_5__.default({
      items: i
    });
  }

  readLegacyfeatureCollectionJSON(e, t) {
    return F(t) ? (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_7__.clone)(t.featureCollection) : null;
  }

  readFullExtent(e, t) {
    if (!t.layers.length || t.layers.every(e => !e.layerDefinition.extent)) return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_34__.default({
      xmin: -180,
      ymin: -90,
      xmax: 180,
      ymax: 90,
      spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_33__.default.WGS84
    });
    const r = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_33__.default.fromJSON(t.layers[0].layerDefinition.spatialReference);
    return t.layers.reduce((e, t) => {
      const r = t.layerDefinition.extent;
      return r ? _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_34__.default.fromJSON(r).union(e) : e;
    }, new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_34__.default({
      spatialReference: r
    }));
  }

  readMinScale(e, t) {
    for (const r of t.layers) if (null != r.layerDefinition.minScale) return r.layerDefinition.minScale;

    return 0;
  }

  readMaxScale(e, t) {
    for (const r of t.layers) if (null != r.layerDefinition.maxScale) return r.layerDefinition.maxScale;

    return 0;
  }

  get multipointLayer() {
    return this._findSublayer("multipointLayer");
  }

  get pointLayer() {
    return this._findSublayer("pointLayer");
  }

  get polygonLayer() {
    return this._findSublayer("polygonLayer");
  }

  get polylineLayer() {
    return this._findSublayer("polylineLayer");
  }

  readSpatialReference(e, t) {
    return t.layers.length ? _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_33__.default.fromJSON(t.layers[0].layerDefinition.spatialReference) : _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_33__.default.WGS84;
  }

  readSublayers(e, o, i) {
    if (F(o)) return null;
    const l = [];

    for (let r = 0; r < o.layers.length; r++) {
      var a;
      const {
        layerDefinition: e,
        featureSet: i
      } = o.layers[r],
            n = null != (a = e.geometryType) ? a : i.geometryType,
            s = k.find(t => {
        var r, o, i;
        return n === t.geometryTypeJSON && (null == (r = e.drawingInfo) || null == (o = r.renderer) || null == (i = o.symbol) ? void 0 : i.type) === t.identifyingSymbol.type;
      });

      if (s) {
        const r = new P({
          id: s.layerId,
          title: e.name,
          layer: this,
          graphics: i.features.map(({
            geometry: e,
            symbol: r,
            attributes: o,
            popupInfo: i
          }) => _Graphic_js__WEBPACK_IMPORTED_MODULE_3__.default.fromJSON({
            attributes: o,
            geometry: e,
            symbol: r,
            popupTemplate: i
          }))
        });
        l.push(r);
      }
    }

    return new _core_Collection_js__WEBPACK_IMPORTED_MODULE_5__.default(l);
  }

  writeSublayers(e, t, r, i) {
    const {
      minScale: n,
      maxScale: p
    } = this;
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_8__.isNone)(e)) return;
    const y = e.some(e => e.graphics.length > 0);

    if (!this.capabilities.operations.supportsMapNotesEditing) {
      var m;
      if (y) null == i || null == (m = i.messages) || m.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("map-notes-layer:editing-not-supported", "New map notes cannot be added to this layer"));
      return;
    }

    const u = [];
    let c = this.spatialReference.toJSON();

    e: for (const o of e) for (const e of o.graphics) if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_8__.isSome)(e.geometry)) {
      c = e.geometry.spatialReference.toJSON();
      break e;
    }

    for (const o of k) {
      const t = e.find(e => o.layerId === e.id);

      this._writeMapNoteSublayer(u, t, o, n, p, c, i);
    }

    (0,_core_object_js__WEBPACK_IMPORTED_MODULE_10__.setDeepValue)("featureCollection.layers", u, t);
  }

  get textLayer() {
    return this._findSublayer("textLayer");
  }

  load(e) {
    return this.addResolvingPromise(this.loadFromPortal({
      supportedTypes: ["Feature Collection"]
    }, e)), Promise.resolve(this);
  }

  read(e, t) {
    "featureCollection" in e && (e = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_7__.clone)(e), Object.assign(e, e.featureCollection)), super.read(e, t);
  }

  beforeSave() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_8__.isNone)(_this.sublayers)) return;
      let e = null;
      const t = [];

      for (const o of _this.sublayers) for (const r of o.graphics) if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_8__.isSome)(r.geometry)) {
        const o = r.geometry;
        e ? (0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_19__.equals)(o.spatialReference, e) || ((0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_17__.canProjectWithoutEngine)(o.spatialReference, e) || (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_17__.isLoaded)() || (yield (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_17__.load)()), r.geometry = (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_17__.project)(o, e)) : e = o.spatialReference, t.push(r);
      }

      const r = yield (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_18__.normalizeCentralMeridian)(t.map(e => e.geometry));
      t.forEach((e, t) => e.geometry = r[t]);
    })();
  }

  _findSublayer(e) {
    var t, r;
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_8__.isNone)(this.sublayers) ? null : null != (t = null == (r = this.sublayers) ? void 0 : r.find(t => t.id === e)) ? t : null;
  }

  _writeMapNoteSublayer(e, t, r, o, a, n, s) {
    const p = [];

    if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_8__.isNone)(t)) {
      for (const e of t.graphics) this._writeMapNote(p, e, r.geometryType, s);

      this._normalizeObjectIds(p, G), e.push({
        layerDefinition: {
          name: t.title,
          drawingInfo: {
            renderer: {
              type: "simple",
              symbol: (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_7__.clone)(r.identifyingSymbol)
            }
          },
          geometryType: r.geometryTypeJSON,
          minScale: o,
          maxScale: a,
          objectIdField: "OBJECTID",
          fields: [G.toJSON(), _.toJSON()],
          spatialReference: n
        },
        featureSet: {
          features: p,
          geometryType: r.geometryTypeJSON
        }
      });
    }
  }

  _writeMapNote(e, t, r, o) {
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_8__.isNone)(t)) return;
    const {
      geometry: i,
      symbol: n,
      popupTemplate: s
    } = t;
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_8__.isNone)(i)) return;
    var y, m;
    if (i.type !== r) return void (null == o || null == (y = o.messages) || y.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_11__.default("map-notes-layer:invalid-geometry-type", `Geometry "${i.type}" cannot be saved in "${r}" layer`, {
      graphic: t
    })));
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_8__.isNone)(n)) return void (null == o || null == (m = o.messages) || m.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_11__.default("map-notes-layer:no-symbol", "Skipping map notes with no symbol", {
      graphic: t
    })));
    const u = {
      attributes: { ...t.attributes
      },
      geometry: i.toJSON(),
      symbol: n.toJSON()
    };
    (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_8__.isSome)(s) && (u.popupInfo = s.toJSON()), e.push(u);
  }

  _normalizeObjectIds(e, t) {
    const r = t.name;
    let o = (0,_graphics_objectIdUtils_js__WEBPACK_IMPORTED_MODULE_23__.findLastObjectIdFromFeatures)(r, e) + 1;
    const i = new Set();

    for (const l of e) {
      l.attributes || (l.attributes = {});
      const {
        attributes: e
      } = l;
      (null == e[r] || i.has(e[r])) && (e[r] = o++), i.add(e[r]);
    }
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  readOnly: !0
})], z.prototype, "capabilities", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__.reader)(["portal-item", "web-map"], "capabilities", ["layers"])], z.prototype, "readCapabilities", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  readOnly: !0
})], z.prototype, "featureCollections", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__.reader)(["web-map", "portal-item"], "featureCollections", ["layers"])], z.prototype, "readFeatureCollections", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  readOnly: !0,
  json: {
    origins: {
      "web-map": {
        write: {
          enabled: !0,
          target: "featureCollection"
        }
      }
    }
  }
})], z.prototype, "featureCollectionJSON", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__.reader)(["web-map", "portal-item"], "featureCollectionJSON", ["featureCollection"])], z.prototype, "readLegacyfeatureCollectionJSON", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  readOnly: !0,
  json: {
    read: !1,
    write: {
      enabled: !0,
      ignoreOrigin: !0
    }
  }
})], z.prototype, "featureCollectionType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  json: {
    write: !1
  }
})], z.prototype, "fullExtent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__.reader)(["web-map", "portal-item"], "fullExtent", ["layers"])], z.prototype, "readFullExtent", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  readOnly: !0,
  json: {
    origins: {
      "web-map": {
        write: {
          target: "featureCollection.showLegend",

          overridePolicy() {
            return {
              enabled: null != this.featureCollectionJSON
            };
          }

        }
      }
    }
  }
})], z.prototype, "legendEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  type: ["show", "hide"]
})], z.prototype, "listMode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  type: Number,
  nonNullable: !0,
  json: {
    write: !1
  }
})], z.prototype, "minScale", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__.reader)(["web-map", "portal-item"], "minScale", ["layers"])], z.prototype, "readMinScale", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  type: Number,
  nonNullable: !0,
  json: {
    write: !1
  }
})], z.prototype, "maxScale", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__.reader)(["web-map", "portal-item"], "maxScale", ["layers"])], z.prototype, "readMaxScale", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  readOnly: !0
})], z.prototype, "multipointLayer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  value: "ArcGISFeatureLayer",
  type: ["ArcGISFeatureLayer"]
})], z.prototype, "operationalLayerType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  readOnly: !0
})], z.prototype, "pointLayer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  readOnly: !0
})], z.prototype, "polygonLayer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  readOnly: !0
})], z.prototype, "polylineLayer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_33__.default
})], z.prototype, "spatialReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__.reader)(["web-map", "portal-item"], "spatialReference", ["layers"])], z.prototype, "readSpatialReference", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  readOnly: !0,
  json: {
    origins: {
      "web-map": {
        write: {
          ignoreOrigin: !0
        }
      }
    }
  }
})], z.prototype, "sublayers", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__.reader)("web-map", "sublayers", ["layers"])], z.prototype, "readSublayers", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_16__.writer)("web-map", "sublayers")], z.prototype, "writeSublayers", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  readOnly: !0
})], z.prototype, "textLayer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)()], z.prototype, "title", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  readOnly: !0,
  json: {
    read: !1
  }
})], z.prototype, "type", void 0), z = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_15__.subclass)("esri.layers.MapNotesLayer")], z);
const B = z;


/***/ })

}]);
//# sourceMappingURL=747.c704e6caf98cb7f58b48.js.map