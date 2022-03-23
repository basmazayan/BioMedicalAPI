"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[5048],{

/***/ 55048:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/SceneService.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SCENE_SERVICE_ITEM_TYPE": () => (/* binding */ O),
/* harmony export */   "SceneService": () => (/* binding */ N)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/urlUtils.js */ 30164);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/accessorSupport/originUtils.js */ 89719);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../geometry/HeightModelInfo.js */ 2701);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../support/arcgisLayerUrl.js */ 46996);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../support/commonProperties.js */ 34042);
/* harmony import */ var _support_I3SIndexInfo_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../support/I3SIndexInfo.js */ 24828);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../portal/Portal.js */ 27149);
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../portal/PortalItem.js */ 30424);
/* harmony import */ var _webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../webdoc/support/saveUtils.js */ 70160);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/

























const R = _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__.default.getLogger("esri.layers.mixins.SceneService"),
      N = i => {
  let N = class extends i {
    constructor() {
      var _this;

      (super(...arguments), _this = this), this.spatialReference = null, this.fullExtent = null, this.heightModelInfo = null, this.minScale = 0, this.maxScale = 0, this.version = {
        major: Number.NaN,
        minor: Number.NaN,
        versionString: ""
      }, this.copyright = null, this.sublayerTitleMode = "item-title", this.title = null, this.layerId = null, this.indexInfo = null, this._debouncedSaveOperations = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.debounce)( /*#__PURE__*/function () {
        var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t, r) {
          switch (e) {
            case 0:
              return _this._save(t);

            case 1:
              return _this._saveAs(r, t);
          }
        });

        return function (_x, _x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }());
    }

    readSpatialReference(e, t) {
      return this._readSpatialReference(t);
    }

    _readSpatialReference(e) {
      if (null != e.spatialReference) return _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__.default.fromJSON(e.spatialReference);
      {
        const t = e.store,
              r = t.indexCRS || t.geographicCRS,
              i = r && parseInt(r.substring(r.lastIndexOf("/") + 1, r.length), 10);
        return null != i ? new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__.default(i) : null;
      }
    }

    readFullExtent(e, t, r) {
      if (null != e && "object" == typeof e) {
        const i = null == e.spatialReference ? { ...e,
          spatialReference: this._readSpatialReference(t)
        } : e;
        return _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_16__.default.fromJSON(i, r);
      }

      const i = t.store,
            o = this._readSpatialReference(t);

      return null == o || null == i || null == i.extent || !Array.isArray(i.extent) || i.extent.some(e => e < U) ? null : new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_16__.default({
        xmin: i.extent[0],
        ymin: i.extent[1],
        xmax: i.extent[2],
        ymax: i.extent[3],
        spatialReference: o
      });
    }

    parseVersionString(e) {
      const t = {
        major: Number.NaN,
        minor: Number.NaN,
        versionString: e
      },
            r = e.split(".");
      return r.length >= 2 && (t.major = parseInt(r[0], 10), t.minor = parseInt(r[1], 10)), t;
    }

    readVersion(e, t) {
      const r = t.store,
            i = null != r.version ? r.version.toString() : "";
      return this.parseVersionString(i);
    }

    readTitlePortalItem(e) {
      return "item-title" !== this.sublayerTitleMode ? void 0 : e;
    }

    readTitleService(e, t) {
      const r = this.portalItem && this.portalItem.title;
      if ("item-title" === this.sublayerTitleMode) return (0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_19__.titleFromUrlAndName)(this.url, t.name);
      let i = t.name;

      if (!i && this.url) {
        const e = (0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_19__.parse)(this.url);
        (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(e) && (i = e.title);
      }

      return "item-title-and-service-name" === this.sublayerTitleMode && r && (i = r + " - " + i), (0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_19__.cleanTitle)(i);
    }

    set url(e) {
      const t = (0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_19__.sanitizeUrlWithLayerId)({
        layer: this,
        url: e,
        nonStandardUrlAllowed: !1,
        logger: R
      });
      this._set("url", t.url), null != t.layerId && this._set("layerId", t.layerId);
    }

    writeUrl(e, t, r, i) {
      (0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_19__.writeUrlWithLayerId)(this, e, "layers", t, i);
    }

    get parsedUrl() {
      const e = this._get("url");

      if (!e) return null;
      const t = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__.urlToObject)(e);
      return null != this.layerId && (t.path = `${t.path}/layers/${this.layerId}`), t;
    }

    _fetchIndexAndUpdateExtent(e, t) {
      var _this2 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        _this2.indexInfo = (0,_support_I3SIndexInfo_js__WEBPACK_IMPORTED_MODULE_21__.fetchIndexInfo)(_this2.parsedUrl.path, _this2.rootNode, e, _this2.apiKey, R, t), null == _this2.fullExtent || _this2.fullExtent.hasZ || _this2._updateExtent(yield _this2.indexInfo);
      })();
    }

    _updateExtent(e) {
      if ("page" === (null == e ? void 0 : e.type)) {
        var t, i;
        const o = e.rootIndex % e.pageSize,
              s = null == (t = e.rootPage) || null == (i = t.nodes) ? void 0 : i[o];
        if (null == s || null == s.obb || null == s.obb.center || null == s.obb.halfSize) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("sceneservice:invalid-node-page", "Invalid node page.");
        if (s.obb.center[0] < U || null == this.fullExtent || this.fullExtent.hasZ) return;
        const a = s.obb.halfSize,
              n = s.obb.center[2],
              l = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
        this.fullExtent.zmin = n - l, this.fullExtent.zmax = n + l;
      } else if ("node" === (null == e ? void 0 : e.type)) {
        var o;
        const t = null == (o = e.rootNode) ? void 0 : o.mbs;
        if (!Array.isArray(t) || 4 !== t.length || t[0] < U) return;
        const r = t[2],
              i = t[3];
        this.fullExtent.zmin = r - i, this.fullExtent.zmax = r + i;
      }
    }

    _fetchService(e) {
      var _this3 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        if (null == _this3.url) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("sceneservice:url-not-set", "Scene service can not be loaded without valid portal item or url");

        if (null == _this3.layerId && /SceneServer\/*$/i.test(_this3.url)) {
          const t = yield _this3._fetchFirstLayerId(e);
          null != t && (_this3.layerId = t);
        }

        return _this3._fetchServiceLayer(e);
      })();
    }

    _fetchFirstLayerId(e) {
      var _this4 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const r = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(_this4.url, {
          query: {
            f: "json",
            token: _this4.apiKey
          },
          responseType: "json",
          signal: e
        });
        if (r.data && Array.isArray(r.data.layers) && r.data.layers.length > 0) return r.data.layers[0].id;
      })();
    }

    _fetchServiceLayer(e) {
      var _this5 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const r = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(_this5.parsedUrl.path, {
          query: {
            f: "json",
            token: _this5.apiKey
          },
          responseType: "json",
          signal: e
        });
        r.ssl && (_this5.url = _this5.url.replace(/^http:/i, "https:"));
        let i = !1;
        if (r.data.layerType && "Voxel" === r.data.layerType && (i = !0), i) return _this5.read(r.data, {
          origin: "service",
          url: _this5.parsedUrl
        }), _this5._fetchVoxelServiceLayer();
        const o = r.data;
        _this5.read(o, {
          origin: "service",
          url: _this5.parsedUrl
        }), _this5.validateLayer(o);
      })();
    }

    _fetchVoxelServiceLayer(e) {
      var _this6 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const r = (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(_this6.parsedUrl.path + "/layer", {
          query: {
            f: "json",
            token: _this6.apiKey
          },
          responseType: "json",
          signal: e
        })).data;
        _this6.read(r, {
          origin: "service",
          url: _this6.parsedUrl
        }), _this6.validateLayer(r);
      })();
    }

    _ensureLoadBeforeSave() {
      var _this7 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        yield _this7.load(), "beforeSave" in _this7 && "function" == typeof _this7.beforeSave && (yield _this7.beforeSave());
      })();
    }

    validateLayer(e) {}

    _updateTypeKeywords(e, t, r) {
      e.typeKeywords || (e.typeKeywords = []);
      const i = t.getTypeKeywords();

      for (const o of i) e.typeKeywords.push(o);

      e.typeKeywords && (e.typeKeywords = e.typeKeywords.filter((e, t, r) => r.indexOf(e) === t), 1 === r && (e.typeKeywords = e.typeKeywords.filter(e => "Hosted Service" !== e)));
    }

    _saveAs(e, t) {
      var _this8 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const i = { ...E,
          ...t
        };
        let o = _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_23__.default.from(e);
        o || (R.error("_saveAs(): requires a portal item parameter"), yield Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("sceneservice:portal-item-required", "_saveAs() requires a portal item to save to"))), o.id && (o = o.clone(), o.id = null);
        const s = o.portal || _portal_Portal_js__WEBPACK_IMPORTED_MODULE_22__.default.getDefault();
        yield _this8._ensureLoadBeforeSave(), o.type = O, o.portal = s;
        const a = {
          origin: "portal-item",
          url: null,
          messages: [],
          portal: s,
          portalItem: o,
          writtenProperties: [],
          blockedRelativeUrls: [],
          resources: {
            toAdd: [],
            toUpdate: [],
            toKeep: [],
            pendingOperations: []
          }
        },
              n = {
          layers: [_this8.write({}, a)]
        };
        return yield Promise.all(a.resources.pendingOperations), yield _this8._validateAgainstJSONSchema(n, a, i), o.url = _this8.url, o.title || (o.title = _this8.title), _this8._updateTypeKeywords(o, i, 1), yield s._signIn(), yield s.user.addItem({
          item: o,
          folder: i && i.folder,
          data: n
        }), yield (0,_webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_24__.saveResources)(_this8.resourceReferences, a, null), _this8.portalItem = o, (0,_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_15__.updateOrigins)(a), a.portalItem = o, o;
      })();
    }

    _save(e) {
      var _this9 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const t = { ...E,
          ...e
        };
        _this9.portalItem || (R.error("_save(): requires the .portalItem property to be set"), yield Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("sceneservice:portal-item-not-set", "Portal item to save to has not been set on this SceneService"))), _this9.portalItem.type !== O && (R.error("_save(): Non-matching portal item type. Got " + _this9.portalItem.type + ", expected " + O), yield Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("sceneservice:portal-item-wrong-type", `Portal item needs to have type "${O}"`))), yield _this9._ensureLoadBeforeSave();
        const i = {
          origin: "portal-item",
          url: _this9.portalItem.itemUrl && (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__.urlToObject)(_this9.portalItem.itemUrl),
          messages: [],
          portal: _this9.portalItem.portal || _portal_Portal_js__WEBPACK_IMPORTED_MODULE_22__.default.getDefault(),
          portalItem: _this9.portalItem,
          writtenProperties: [],
          blockedRelativeUrls: [],
          resources: {
            toAdd: [],
            toUpdate: [],
            toKeep: [],
            pendingOperations: []
          }
        },
              o = {
          layers: [_this9.write({}, i)]
        };
        return yield Promise.all(i.resources.pendingOperations), yield _this9._validateAgainstJSONSchema(o, i, t), _this9.portalItem.url = _this9.url, _this9.portalItem.title || (_this9.portalItem.title = _this9.title), _this9._updateTypeKeywords(_this9.portalItem, t, 0), yield _this9.portalItem.update({
          data: o
        }), yield (0,_webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_24__.saveResources)(_this9.resourceReferences, i, null), (0,_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_15__.updateOrigins)(i), _this9.portalItem;
      })();
    }

    _validateAgainstJSONSchema(e, t, i) {
      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        let o = t.messages.filter(e => "error" === e.type).map(e => new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default(e.name, e.message, e.details));

        if (i && i.validationOptions.ignoreUnsupported && (o = o.filter(e => "layer:unsupported" !== e.name && "symbol:unsupported" !== e.name && "symbol-layer:unsupported" !== e.name && "property:unsupported" !== e.name && "url:unsupported" !== e.name && "scenemodification:unsupported" !== e.name)), i.validationOptions.enabled || T) {
          const t = (yield __webpack_require__.e(/*! import() */ 115).then(__webpack_require__.bind(__webpack_require__, /*! ../support/schemaValidator.js */ 10115))).validate(e, i.portalItemLayerType);

          if (t.length > 0) {
            const e = `Layer item did not validate:\n${t.join("\n")}`;

            if (R.error(`_validateAgainstJSONSchema(): ${e}`), "throw" === i.validationOptions.failPolicy) {
              const e = t.map(e => new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("sceneservice:schema-validation", e)).concat(o);
              throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("sceneservice-validate:error", "Failed to save layer item due to schema validation, see `details.errors`.", {
                combined: e
              });
            }
          }
        }

        if (o.length > 0) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("sceneservice:save", "Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information", {
          errors: o
        });
      })();
    }

  };
  return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__.id)], N.prototype, "id", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
    type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__.default
  })], N.prototype, "spatialReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_12__.reader)("spatialReference", ["spatialReference", "store.indexCRS", "store.geographicCRS"])], N.prototype, "readSpatialReference", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
    type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_16__.default
  })], N.prototype, "fullExtent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_12__.reader)("fullExtent", ["fullExtent", "store.extent", "spatialReference", "store.indexCRS", "store.geographicCRS"])], N.prototype, "readFullExtent", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
    readOnly: !0,
    type: _geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_17__.default
  })], N.prototype, "heightModelInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
    type: Number,
    json: {
      name: "layerDefinition.minScale",
      write: !0,
      origins: {
        service: {
          read: {
            source: "minScale"
          },
          write: !1
        }
      }
    }
  })], N.prototype, "minScale", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
    type: Number,
    json: {
      name: "layerDefinition.maxScale",
      write: !0,
      origins: {
        service: {
          read: {
            source: "maxScale"
          },
          write: !1
        }
      }
    }
  })], N.prototype, "maxScale", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
    readOnly: !0
  })], N.prototype, "version", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_12__.reader)("version", ["store.version"])], N.prototype, "readVersion", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
    type: String,
    json: {
      read: {
        source: "copyrightText"
      }
    }
  })], N.prototype, "copyright", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
    type: String,
    json: {
      read: !1
    }
  })], N.prototype, "sublayerTitleMode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
    type: String
  })], N.prototype, "title", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_12__.reader)("portal-item", "title")], N.prototype, "readTitlePortalItem", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_12__.reader)("service", "title", ["name"])], N.prototype, "readTitleService", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
    type: Number,
    json: {
      origins: {
        service: {
          read: {
            source: "id"
          }
        },
        "portal-item": {
          write: {
            target: "id",
            isRequired: !0,
            ignoreOrigin: !0
          },
          read: !1
        }
      }
    }
  })], N.prototype, "layerId", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__.url)], N.prototype, "url", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_14__.writer)("url")], N.prototype, "writeUrl", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)()], N.prototype, "parsedUrl", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
    readOnly: !0
  })], N.prototype, "store", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
    type: String,
    readOnly: !0,
    json: {
      read: {
        source: "store.rootNode"
      }
    }
  })], N.prototype, "rootNode", void 0), N = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__.subclass)("esri.layers.mixins.SceneService")], N), N;
},
      U = -1e38,
      T = !1,
      O = "Scene Service",
      E = {
  getTypeKeywords: () => [],
  portalItemLayerType: "unknown",
  validationOptions: {
    enabled: !0,
    ignoreUnsupported: !1,
    failPolicy: "throw"
  }
};



/***/ }),

/***/ 24828:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/I3SIndexInfo.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchIndexInfo": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




function n(_x, _x2, _x3, _x4, _x5, _x6) {
  return _n.apply(this, arguments);
}

function _n() {
  _n = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, t, s, a, i, d) {
    let l = null;

    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(s)) {
      const o = `${n}/nodepages/`,
            t = o + Math.floor(s.rootIndex / s.nodesPerPage);

      try {
        return {
          type: "page",
          rootPage: (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(t, {
            query: {
              f: "json",
              token: a
            },
            responseType: "json",
            signal: d
          })).data,
          rootIndex: s.rootIndex,
          pageSize: s.nodesPerPage,
          lodMetric: s.lodSelectionMetricType,
          urlPrefix: o
        };
      } catch (f) {
        (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(i) && i.warn("#fetchIndexInfo()", "Failed to load root node page. Falling back to node documents.", t, f), l = f;
      }
    }

    if (!t) return null;
    const p = `${n}/nodes/`,
          c = p + (t && t.split("/").pop());

    try {
      return {
        type: "node",
        rootNode: (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(c, {
          query: {
            f: "json",
            token: a
          },
          responseType: "json",
          signal: d
        })).data,
        urlPrefix: p
      };
    } catch (f) {
      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("sceneservice:root-node-missing", "Root node missing.", {
        pageError: l,
        nodeError: f,
        url: c
      });
    }
  });
  return _n.apply(this, arguments);
}



/***/ }),

/***/ 31885:
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/resourceUtils.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addOrUpdateResource": () => (/* binding */ u),
/* harmony export */   "contentToBlob": () => (/* binding */ h),
/* harmony export */   "fetchResources": () => (/* binding */ c),
/* harmony export */   "getSiblingOfSameType": () => (/* binding */ f),
/* harmony export */   "getSiblingOfSameTypeI": () => (/* binding */ w),
/* harmony export */   "removeAllResources": () => (/* binding */ l),
/* harmony export */   "removeResource": () => (/* binding */ i),
/* harmony export */   "splitPrefixFileNameAndExtension": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/urlUtils.js */ 30164);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





function c(_x) {
  return _c.apply(this, arguments);
}

function _c() {
  _c = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t = {}, a) {
    yield e.load(a);
    const o = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.join)(e.itemUrl, "resources"),
          {
      start: n = 1,
      num: c = 10,
      sortOrder: u = "asc",
      sortField: i = "created"
    } = t,
          l = {
      query: {
        start: n,
        num: c,
        sortOrder: u,
        sortField: i,
        token: e.apiKey
      },
      signal: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.get)(a, "signal")
    },
          p = yield e.portal._request(o, l);
    return {
      total: p.total,
      nextStart: p.nextStart,
      resources: p.resources.map(({
        created: t,
        size: r,
        resource: a
      }) => ({
        created: new Date(t),
        size: r,
        resource: e.resourceFromPath(a)
      }))
    };
  });
  return _c.apply(this, arguments);
}

function u(_x2, _x3, _x4, _x5) {
  return _u.apply(this, arguments);
}

function _u() {
  _u = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, o, n, c) {
    if (!e.hasPath()) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default(`portal-item-resource-${o}:invalid-path`, "Resource does not have a valid path");
    const u = e.portalItem;
    yield u.load(c);
    const i = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.join)(u.userItemUrl, "add" === o ? "addResources" : "updateResources"),
          [l, d] = p(e.path),
          m = yield h(n),
          f = new FormData();
    return l && "." !== l && f.append("resourcesPrefix", l), f.append("fileName", d), f.append("file", m, d), f.append("f", "json"), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(c) && c.access && f.append("access", c.access), yield u.portal._request(i, {
      method: "post",
      body: f,
      signal: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.get)(c, "signal")
    }), e;
  });
  return _u.apply(this, arguments);
}

function i(_x6, _x7, _x8) {
  return _i.apply(this, arguments);
}

function _i() {
  _i = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, a, o) {
    if (!a.hasPath()) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("portal-item-resources-remove:invalid-path", "Resource does not have a valid path");
    yield e.load(o);
    const n = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.join)(e.userItemUrl, "removeResources");
    yield e.portal._request(n, {
      method: "post",
      query: {
        resource: a.path
      },
      signal: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.get)(o, "signal")
    }), a.portalItem = null;
  });
  return _i.apply(this, arguments);
}

function l(_x9, _x10) {
  return _l.apply(this, arguments);
}

function _l() {
  _l = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t) {
    yield e.load(t);
    const a = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.join)(e.userItemUrl, "removeResources");
    return e.portal._request(a, {
      method: "post",
      query: {
        deleteAll: !0
      },
      signal: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.get)(t, "signal")
    });
  });
  return _l.apply(this, arguments);
}

function p(e) {
  const t = e.lastIndexOf("/");
  return -1 === t ? [".", e] : [e.slice(0, t), e.slice(t + 1)];
}

function d(e) {
  const [t, r] = m(e),
        [a, o] = p(t);
  return [a, o, r];
}

function m(e) {
  const t = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.getPathExtension)(e);
  return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(t) ? [e, ""] : [e.slice(0, e.length - t.length - 1), `.${t}`];
}

function h(_x11) {
  return _h.apply(this, arguments);
}

function _h() {
  _h = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t) {
    if (t instanceof Blob) return t;
    return (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(t.url, {
      responseType: "blob"
    })).data;
  });
  return _h.apply(this, arguments);
}

function f(e, t) {
  if (!e.hasPath()) return null;
  const [r,, a] = d(e.path);
  return e.portalItem.resourceFromPath((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.join)(r, t + a));
}

function w(e, t) {
  if (!e.hasPath()) return null;
  const [r,, a] = d(e.path);
  return e.portalItem.resourceFromPath((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.join)(r, t + a));
}



/***/ }),

/***/ 70160:
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/webdoc/support/saveUtils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveResources": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/asyncUtils.js */ 97073);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/uuid.js */ 85056);
/* harmony import */ var _portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/support/resourceUtils.js */ 31885);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






function a(_x, _x2, _x3) {
  return _a.apply(this, arguments);
}

function _a() {
  _a = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (r, a, u) {
    if (!a || !a.resources) return;
    const h = a.portalItem === r.portalItem ? new Set(r.paths) : new Set();
    r.paths.length = 0, r.portalItem = a.portalItem;
    const i = new Set(a.resources.toKeep.map(r => r.resource.path)),
          f = new Set(),
          m = [];
    i.forEach(e => {
      h.delete(e), r.paths.push(e);
    });

    for (const e of a.resources.toUpdate) if (h.delete(e.resource.path), i.has(e.resource.path) || f.has(e.resource.path)) {
      const {
        resource: o,
        content: t,
        finish: a,
        error: p
      } = e,
            h = (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_5__.getSiblingOfSameTypeI)(o, (0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_4__.generateUUID)());
      r.paths.push(h.path), m.push(n({
        resource: h,
        content: t,
        finish: a,
        error: p
      }, u));
    } else r.paths.push(e.resource.path), m.push(p(e, u)), f.add(e.resource.path);

    for (const e of a.resources.toAdd) m.push(n(e, u)), r.paths.push(e.resource.path);

    if (h.forEach(r => {
      const e = a.portalItem.resourceFromPath(r);
      m.push(e.portalItem.removeResource(e).catch(() => {}));
    }), 0 === m.length) return;
    const l = yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.eachAlways)(m);
    (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(u);
    const d = l.filter(r => "error" in r).map(r => r.error);
    if (d.length > 0) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("save:resources", "Failed to save one or more resources", {
      errors: d
    });
  });
  return _a.apply(this, arguments);
}

function n(_x4, _x5) {
  return _n.apply(this, arguments);
}

function _n() {
  _n = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, o) {
    const t = yield (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__.result)(e.resource.portalItem.addResource(e.resource, e.content, o));
    if (!0 !== t.ok) throw e.error && e.error(t.error), t.error;
    e.finish && e.finish(e.resource);
  });
  return _n.apply(this, arguments);
}

function p(_x6, _x7) {
  return _p.apply(this, arguments);
}

function _p() {
  _p = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, o) {
    const t = yield (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__.result)(e.resource.update(e.content, o));
    if (!0 !== t.ok) throw e.error(t.error), t.error;
    e.finish(e.resource);
  });
  return _p.apply(this, arguments);
}



/***/ })

}]);
//# sourceMappingURL=5048.b033829d10c37955a0f3.js.map