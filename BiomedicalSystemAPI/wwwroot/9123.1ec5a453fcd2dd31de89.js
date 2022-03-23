"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[9123],{

/***/ 15363:
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "persistable": () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../maybe.js */ 18502);
/* harmony import */ var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../multiOriginJSONSupportUtils.js */ 61647);
/* harmony import */ var _urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../urlUtils.js */ 30164);
/* harmony import */ var _uuid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../uuid.js */ 85056);
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../metadata.js */ 55851);
/* harmony import */ var _PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PropertyOrigin.js */ 84975);
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./property.js */ 94911);
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ 18312);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../chunks/persistableUrlUtils.js */ 26912);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/










function g(r) {
  const e = (0,_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(r) && r.origins ? r.origins : [void 0];
  return (t, o) => {
    const i = w(r, t, o);

    for (const r of e) {
      const e = (0,_property_js__WEBPACK_IMPORTED_MODULE_7__.propertyJSONMeta)(t, r, o);

      for (const t in i) e[t] = i[t];
    }
  };
}

function w(r, e, o) {
  if ((0,_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(r) && "resource" === r.type) return v(r, e, o);

  switch ((0,_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(r) && r.type ? r.type : "other") {
    case "other":
      return {
        read: !0,
        write: !0
      };

    case "url":
      {
        const {
          read: t,
          write: r
        } = _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.p;
        return {
          read: t,
          write: r
        };
      }
  }
}

function v(e, s, u) {
  const p = (0,_metadata_js__WEBPACK_IMPORTED_MODULE_5__.getOwnPropertyMetadata)(s, u);
  return {
    type: String,
    read: (t, r, e) => {
      const o = (0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.r)(t, r, e);
      return p.type === String ? o : "function" == typeof p.type ? new p.type({
        url: o
      }) : void 0;
    },
    write: {
      writer(s, a, l, f) {
        if (!f || !f.resources) return "string" == typeof s ? void (a[l] = (0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.t)(s, f)) : void (a[l] = s.write({}, f));
        const m = P(s),
              d = m ? (0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.t)(m, { ...f,
          verifyItemRelativeUrls: f && f.verifyItemRelativeUrls ? {
            writtenUrls: f.verifyItemRelativeUrls.writtenUrls,
            rootPath: null
          } : null
        }, 1) : null,
              g = p.type !== String && (!(0,_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_2__.isMultiOriginJSONMixin)(this) || f && f.origin && this.originIdOf(u) > (0,_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_6__.nameToId)(f.origin));
        f && f.portalItem && (0,_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(d) && !(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.isAbsolute)(d) ? g ? j(this, u, s, d, a, l, f, e) : I(d, a, l, f) : f && f.portalItem && ((0,_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isNone)(d) || (0,_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)((0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.i)(d)) || (0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.isBlobProtocol)(d) || g) ? U(this, u, s, d, a, l, f, e) : a[l] = d;
      }

    }
  };
}

function U(t, r, o, i, u, a, c, l) {
  const m = (0,_uuid_js__WEBPACK_IMPORTED_MODULE_4__.generateUUID)(),
        y = S(o, i, c),
        h = (0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.join)((0,_maybe_js__WEBPACK_IMPORTED_MODULE_1__.get)(l, "prefix"), m),
        d = `${h}.${(0,_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__.getResourceContentExtension)(y)}`,
        g = c.portalItem.resourceFromPath(d);
  (0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.isBlobProtocol)(i) && c.resources.pendingOperations.push(b(i).then(t => {
    g.path = `${h}.${(0,_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__.getResourceContentExtension)(t)}`, u[a] = g.itemRelativeUrl;
  }).catch(() => {})), O(t, r, g, y, c.resources.toAdd), u[a] = g.itemRelativeUrl;
}

function j(t, r, e, o, i, n, s, p) {
  const a = s.portalItem.resourceFromPath(o),
        c = S(e, o, s);
  (0,_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__.getResourceContentExtension)(c) === (0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.getPathExtension)(a.path) ? (O(t, r, a, c, s.resources.toUpdate), i[n] = o) : U(t, r, e, o, i, n, s, p);
}

function I(t, r, e, o) {
  o.resources.toKeep.push({
    resource: o.portalItem.resourceFromPath(t)
  }), r[e] = t;
}

function O(t, r, e, o, i) {
  i.push({
    resource: e,
    content: o,
    finish: e => {
      R(t, r, e);
    }
  });
}

function S(t, r, e) {
  return "string" == typeof t ? {
    url: r
  } : new Blob([JSON.stringify(t.toJSON(e))], {
    type: "application/json"
  });
}

function b(_x) {
  return _b.apply(this, arguments);
}

function _b() {
  _b = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t) {
    const r = (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../request.js */ 30351))).default,
          {
      data: e
    } = yield r(t, {
      responseType: "blob"
    });
    return e;
  });
  return _b.apply(this, arguments);
}

function P(t) {
  return (0,_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isNone)(t) ? null : "string" == typeof t ? t : t.url;
}

function R(t, r, e) {
  "string" == typeof t[r] ? t[r] = e.url : t[r].url = e.url;
}



/***/ }),

/***/ 69123:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/IntegratedMeshLayer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ M)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Error.js */ 61414);
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Handles.js */ 65333);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/watchUtils.js */ 11652);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/decorators/persistable.js */ 15363);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mixins/APIKeyMixin.js */ 57993);
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ 41122);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ 32617);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/SceneService.js */ 55048);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./support/commonProperties.js */ 34042);
/* harmony import */ var _support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./support/I3SLayerDefinitions.js */ 11640);
/* harmony import */ var _support_SceneModifications_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./support/SceneModifications.js */ 8210);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../chunks/persistableUrlUtils.js */ 26912);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/

























let O = class extends (0,_mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_21__.SceneService)((0,_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_17__.ArcGISService)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_18__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_19__.PortalLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_20__.ScaleRangeLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__.MultiOriginJSONMixin)((0,_mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_16__.APIKeyMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_15__.default))))))) {
  constructor(...e) {
    super(...e), this.handles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_3__.default(), this.geometryType = "mesh", this.operationalLayerType = "IntegratedMeshLayer", this.type = "integrated-mesh", this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.profile = "mesh-pyramids", this.modifications = null, this._modificationsSource = null, this.elevationInfo = null, this.path = null;
  }

  destroy() {
    this.handles.destroy();
  }

  initialize() {
    this.handles.add((0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_7__.on)(this, "modifications", "after-changes", () => this.modifications = this.modifications, null, null, !0));
  }

  normalizeCtorArgs(e, t) {
    return "string" == typeof e ? {
      url: e,
      ...t
    } : e;
  }

  readModifications(e, t, r) {
    this._modificationsSource = {
      url: (0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_25__.f)(e, r),
      context: r
    };
  }

  load(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this.addResolvingPromise(_this._doLoad(e)), _this;
    })();
  }

  _doLoad(e) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const t = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.get)(e, "signal");

      try {
        yield _this2.loadFromPortal({
          supportedTypes: ["Scene Service"]
        }, e);
      } catch (r) {
        (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.throwIfAbortError)(r);
      }

      if (yield _this2._fetchService(t), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(_this2._modificationsSource)) {
        const t = yield _support_SceneModifications_js__WEBPACK_IMPORTED_MODULE_24__.default.fromUrl(_this2._modificationsSource.url, _this2.spatialReference, e);
        _this2.setAtOrigin("modifications", t, _this2._modificationsSource.context.origin), _this2._modificationsSource = null;
      }

      yield _this2._fetchIndexAndUpdateExtent(_this2.nodePages, t);
    })();
  }

  beforeSave() {
    if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(this._modificationsSource)) return this.load().then(() => {}, () => {});
  }

  saveAs(e, t) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this3._debouncedSaveOperations(1, { ...t,
        getTypeKeywords: () => _this3._getTypeKeywords(),
        portalItemLayerType: "integrated-mesh"
      }, e);
    })();
  }

  save() {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const e = {
        getTypeKeywords: () => _this4._getTypeKeywords(),
        portalItemLayerType: "integrated-mesh"
      };
      return _this4._debouncedSaveOperations(0, e);
    })();
  }

  validateLayer(e) {
    if (e.layerType && "IntegratedMesh" !== e.layerType) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("integrated-mesh-layer:layer-type-not-supported", "IntegratedMeshLayer does not support this layer type", {
      layerType: e.layerType
    });
    if (isNaN(this.version.major) || isNaN(this.version.minor)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("layer:service-version-not-supported", "Service version is not supported.", {
      serviceVersion: this.version.versionString,
      supportedVersions: "1.x"
    });
    if (this.version.major > 1) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("layer:service-version-too-new", "Service version is too new.", {
      serviceVersion: this.version.versionString,
      supportedVersions: "1.x"
    });
  }

  _getTypeKeywords() {
    return ["IntegratedMeshLayer"];
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: String,
  readOnly: !0
})], O.prototype, "geometryType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: ["show", "hide"]
})], O.prototype, "listMode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: ["IntegratedMeshLayer"]
})], O.prototype, "operationalLayerType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  json: {
    read: !1
  },
  readOnly: !0
})], O.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: _support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_23__.I3SNodePageDefinition,
  readOnly: !0
})], O.prototype, "nodePages", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: [_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_23__.I3SMaterialDefinition],
  readOnly: !0
})], O.prototype, "materialDefinitions", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: [_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_23__.I3STextureSetDefinition],
  readOnly: !0
})], O.prototype, "textureSetDefinitions", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: [_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_23__.I3SGeometryDefinition],
  readOnly: !0
})], O.prototype, "geometryDefinitions", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  readOnly: !0
})], O.prototype, "serviceUpdateTimeStamp", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: _support_SceneModifications_js__WEBPACK_IMPORTED_MODULE_24__.default
}), (0,_core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_14__.persistable)({
  origins: ["web-scene", "portal-item"],
  type: "resource",
  prefix: "modifications"
})], O.prototype, "modifications", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_12__.reader)(["web-scene", "portal-item"], "modifications")], O.prototype, "readModifications", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_22__.elevationInfo)], O.prototype, "elevationInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: String,
  json: {
    origins: {
      "web-scene": {
        read: !0,
        write: !0
      },
      "portal-item": {
        read: !0,
        write: !0
      }
    },
    read: !1
  }
})], O.prototype, "path", void 0), O = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__.subclass)("esri.layers.IntegratedMeshLayer")], O);
const M = O;


/***/ }),

/***/ 11640:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/I3SLayerDefinitions.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I3SGeometryAttribute": () => (/* binding */ y),
/* harmony export */   "I3SGeometryBuffer": () => (/* binding */ c),
/* harmony export */   "I3SGeometryCompressedAttributes": () => (/* binding */ d),
/* harmony export */   "I3SGeometryDefinition": () => (/* binding */ m),
/* harmony export */   "I3SMaterialDefinition": () => (/* binding */ l),
/* harmony export */   "I3SMaterialPBRMetallicRoughness": () => (/* binding */ a),
/* harmony export */   "I3SMaterialTexture": () => (/* binding */ i),
/* harmony export */   "I3SNodePageDefinition": () => (/* binding */ s),
/* harmony export */   "I3STextureFormat": () => (/* binding */ n),
/* harmony export */   "I3STextureSetDefinition": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ 73358);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number})],s.prototype,"nodesPerPage",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number})],s.prototype,"rootIndex",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String})],s.prototype,"lodSelectionMetricType",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layer.support.I3SNodePageDefinition")],s);let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.factor=1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],i.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number})],i.prototype,"factor",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layer.support.I3SMaterialTexture")],i);let a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number]})],a.prototype,"baseColorFactor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:i})],a.prototype,"baseColorTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:i})],a.prototype,"metallicRoughnessTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number})],a.prototype,"metallicFactor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number})],a.prototype,"roughnessFactor",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],a);let l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__.enumeration)({opaque:"opaque",mask:"mask",blend:"blend"})],l.prototype,"alphaMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number})],l.prototype,"alphaCutoff",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean})],l.prototype,"doubleSided",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__.enumeration)({none:"none",back:"back",front:"front"})],l.prototype,"cullFace",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:i})],l.prototype,"normalTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:i})],l.prototype,"occlusionTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:i})],l.prototype,"emissiveTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number]})],l.prototype,"emissiveFactor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:a})],l.prototype,"pbrMetallicRoughness",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layer.support.I3SMaterialDefinition")],l);let n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],n.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__.enumeration)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],n.prototype,"format",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layer.support.I3STextureFormat")],n);let u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.atlas=!1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[n]})],u.prototype,"formats",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean})],u.prototype,"atlas",void 0),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layer.support.I3STextureSetDefinition")],u);let y=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__.enumeration)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],y.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number})],y.prototype,"component",void 0),y=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layer.support.I3SGeometryAttribute")],y);let d=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__.enumeration)({draco:"draco"})],d.prototype,"encoding",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[String]})],d.prototype,"attributes",void 0),d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layer.support.I3SGeometryCompressedAttributes")],d);let c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.offset=0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number})],c.prototype,"offset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:y})],c.prototype,"position",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:y})],c.prototype,"normal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:y})],c.prototype,"uv0",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:y})],c.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:y})],c.prototype,"uvRegion",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:y})],c.prototype,"featureId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:y})],c.prototype,"faceRange",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:d})],c.prototype,"compressedAttributes",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layer.support.I3SGeometryBuffer")],c);let m=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__.enumeration)({triangle:"triangle"})],m.prototype,"topology",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],m.prototype,"geometryBuffers",void 0),m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layer.support.I3SGeometryDefinition")],m);


/***/ }),

/***/ 45180:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/SceneModification.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Warning.js */ 68364);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/persistable.js */ 15363);
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../geometry/projection.js */ 15695);
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../geometry/Polygon.js */ 38535);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m;let y=m=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,r,o,s){if(s.layer&&s.layer.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_10__.canProjectWithoutEngine)(e.spatialReference,s.layer.spatialReference))return void(s&&s.messages&&s.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_4__.default("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const p=new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_11__.default;(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_10__.projectPolygon)(e,p,s.layer.spatialReference),r[o]=p.toJSON(s)}else r[o]=e.toJSON(s);delete r[o].spatialReference}clone(){return new m({geometry:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.geometry),type:this.type})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_11__.default}),(0,_core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_9__.persistable)()],y.prototype,"geometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)(["web-scene","portal-item"],"geometry")],y.prototype,"writeGeometry",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:["clip","mask","replace"],nonNullable:!0}),(0,_core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_9__.persistable)()],y.prototype,"type",void 0),y=m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.support.SceneModification")],y);const f=y;


/***/ }),

/***/ 8210:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/SceneModifications.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Collection.js */ 37635);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/urlUtils.js */ 30164);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _SceneModification_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SceneModification.js */ 45180);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/












var m;
let n = m = class extends (0,_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__.JSONSupportMixin)(_core_Collection_js__WEBPACK_IMPORTED_MODULE_3__.default.ofType(_SceneModification_js__WEBPACK_IMPORTED_MODULE_12__.default)) {
  constructor(r) {
    super(r), this.url = null;
  }

  toJSON(r) {
    return this.toArray().map(o => o.toJSON(r)).filter(r => !!r.geometry);
  }

  clone() {
    return new m({
      url: this.url,
      items: this.items.map(r => r.clone())
    });
  }

  _readModifications(r, o) {
    for (const t of r) this.add(_SceneModification_js__WEBPACK_IMPORTED_MODULE_12__.default.fromJSON(t, o));
  }

  static fromJSON(r, o) {
    const t = new m();
    return t._readModifications(r, o), t;
  }

  static fromUrl(r, t, e) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const c = {
        url: (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.urlToObject)(r),
        origin: "service"
      },
            a = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(r, {
        responseType: "json",
        signal: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.get)(e, "signal")
      }),
            n = t.toJSON(),
            l = [];

      for (const o of a.data) l.push(_SceneModification_js__WEBPACK_IMPORTED_MODULE_12__.default.fromJSON({ ...o,
        geometry: { ...o.geometry,
          spatialReference: n
        }
      }, c));

      return new m({
        url: r,
        items: l
      });
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  type: String
})], n.prototype, "url", void 0), n = m = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.layers.support.SceneModifications")], n);
const l = n;


/***/ }),

/***/ 18312:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/resourceExtension.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResourceContentExtension": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/urlUtils.js */ 30164);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function p(i){return o[n(i)]||e}function n(i){return i instanceof Blob?i.type:t(i.url)}function t(p){const n=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.getPathExtension)(p);return g[n]||a}const o={},a="text/plain",e=o[a],g={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const l in g)o[g[l]]=l;


/***/ })

}]);
//# sourceMappingURL=9123.1ec5a453fcd2dd31de89.js.map