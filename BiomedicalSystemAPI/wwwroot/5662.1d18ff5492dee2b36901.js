"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[5662],{

/***/ 55662:
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/SceneLayer.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ee)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PopupTemplate.js */ 95821);
/* harmony import */ var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../renderers/ClassBreaksRenderer.js */ 25938);
/* harmony import */ var _renderers_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renderers/DictionaryRenderer.js */ 15206);
/* harmony import */ var _renderers_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../renderers/DotDensityRenderer.js */ 51471);
/* harmony import */ var _renderers_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../renderers/HeatmapRenderer.js */ 16008);
/* harmony import */ var _renderers_Renderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../renderers/Renderer.js */ 6557);
/* harmony import */ var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../renderers/SimpleRenderer.js */ 78477);
/* harmony import */ var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../renderers/UniqueValueRenderer.js */ 96337);
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../renderers/support/jsonUtils.js */ 94111);
/* harmony import */ var _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../renderers/support/types.js */ 15196);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/urlUtils.js */ 30164);
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/watchUtils.js */ 11652);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../core/accessorSupport/utils.js */ 43365);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./mixins/APIKeyMixin.js */ 57993);
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ 41122);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ 32617);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./mixins/SceneService.js */ 55048);
/* harmony import */ var _support_capabilities_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./support/capabilities.js */ 61334);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./support/commonProperties.js */ 34042);
/* harmony import */ var _support_FeatureReduction_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./support/FeatureReduction.js */ 83038);
/* harmony import */ var _support_FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./support/FeatureReductionSelection.js */ 20369);
/* harmony import */ var _support_FetchAssociatedFeatureLayer_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./support/FetchAssociatedFeatureLayer.js */ 2652);
/* harmony import */ var _support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./support/fieldProperties.js */ 80839);
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./support/FieldsIndex.js */ 62419);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./support/fieldUtils.js */ 81451);
/* harmony import */ var _support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./support/I3SLayerDefinitions.js */ 11640);
/* harmony import */ var _support_LabelClass_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./support/LabelClass.js */ 51331);
/* harmony import */ var _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./support/labelingInfo.js */ 93560);
/* harmony import */ var _support_LayerFloorInfo_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./support/LayerFloorInfo.js */ 66026);
/* harmony import */ var _support_RangeInfo_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./support/RangeInfo.js */ 45674);
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../renderers/support/styleUtils.js */ 62840);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../rest/support/Query.js */ 37995);
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../support/popupUtils.js */ 81569);
/* harmony import */ var _webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../webdoc/support/opacityUtils.js */ 66749);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


















































const Z = ["3DObject", "Point"],
      B = _core_Logger_js__WEBPACK_IMPORTED_MODULE_14__.default.getLogger("esri.layers.SceneLayer"),
      H = (0,_support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_39__.defineFieldProperties)();
let J = class extends (0,_mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_33__.SceneService)((0,_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_29__.ArcGISService)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_30__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_31__.PortalLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_32__.ScaleRangeLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_16__.MultiOriginJSONMixin)((0,_mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_28__.APIKeyMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_27__.default))))))) {
  constructor(...e) {
    super(...e), this.featureReduction = null, this.rangeInfos = null, this.operationalLayerType = "ArcGISSceneServiceLayer", this.type = "scene", this.fields = null, this.floorInfo = null, this.outFields = null, this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.definitionExpression = null, this.path = null, this.labelsVisible = !0, this.labelingInfo = null, this.legendEnabled = !0, this.cachedDrawingInfo = {
      color: !1
    }, this.popupEnabled = !0, this.popupTemplate = null, this.objectIdField = null, this.globalIdField = null, this._fieldUsageInfo = {}, this.screenSizePerspectiveEnabled = !0;
  }

  normalizeCtorArgs(e, t) {
    return "string" == typeof e ? {
      url: e,
      ...t
    } : e;
  }

  getField(e) {
    return this.fieldsIndex.get(e);
  }

  getFieldDomain(e, t) {
    var r, s, o, i;
    const a = null == (r = this.getFeatureType(null == t ? void 0 : t.feature)) || null == (s = r.domains) ? void 0 : s[e];
    return a && "inherited" !== a.type ? a : null != (o = null == (i = this.getField(e)) ? void 0 : i.domain) ? o : null;
  }

  getFeatureType(e) {
    return e && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_15__.isSome)(this.associatedLayer) ? this.associatedLayer.getFeatureType(e) : null;
  }

  get types() {
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_15__.isSome)(this.associatedLayer) ? this.associatedLayer.types : [];
  }

  get typeIdField() {
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_15__.isSome)(this.associatedLayer) ? this.associatedLayer.typeIdField : null;
  }

  get formTemplate() {
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_15__.isSome)(this.associatedLayer) ? this.associatedLayer.formTemplate : null;
  }

  get fieldsIndex() {
    return new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_40__.default(this.fields);
  }

  readNodePages(e, t, r) {
    return "Point" === t.layerType && (e = t.pointNodePages), null == e || "object" != typeof e ? null : _support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_42__.I3SNodePageDefinition.fromJSON(e, r);
  }

  set elevationInfo(e) {
    this._set("elevationInfo", e), this.loaded && this._validateElevationInfo();
  }

  get geometryType() {
    return Y[this.profile] || "mesh";
  }

  set renderer(e) {
    (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_41__.fixRendererFields)(e, this.fieldsIndex), this._set("renderer", e);
  }

  readCachedDrawingInfo(e) {
    return null != e && "object" == typeof e || (e = {}), null == e.color && (e.color = !1), e;
  }

  get capabilities() {
    const e = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_15__.isSome)(this.associatedLayer) && this.associatedLayer.capabilities ? this.associatedLayer.capabilities : _support_capabilities_js__WEBPACK_IMPORTED_MODULE_34__.zeroCapabilities,
          {
      query: t,
      editing: {
        supportsGlobalId: r,
        supportsRollbackOnFailure: s,
        supportsUploadWithItemId: o,
        supportsReturnServiceEditsInSourceSpatialReference: i
      },
      data: {
        supportsZ: n,
        supportsM: p,
        isVersioned: l,
        supportsAttachment: d
      },
      operations: {
        supportsEditing: y,
        supportsUpdate: u,
        supportsQuery: c,
        supportsQueryAttachments: f
      }
    } = e,
          h = e.operations.supportsChangeTracking;
    return {
      query: t,
      editing: {
        supportsGlobalId: r,
        supportsReturnServiceEditsInSourceSpatialReference: i,
        supportsRollbackOnFailure: s,
        supportsGeometryUpdate: !1,
        supportsUploadWithItemId: o
      },
      data: {
        supportsAttachment: d,
        supportsZ: n,
        supportsM: p,
        isVersioned: l
      },
      operations: {
        supportsQuery: c,
        supportsQueryAttachments: f,
        supportsEditing: y && h,
        supportsAdd: !1,
        supportsDelete: !1,
        supportsUpdate: u && h
      }
    };
  }

  get editingEnabled() {
    return this._isOverridden("editingEnabled") ? this._get("editingEnabled") : this.userHasEditingPrivileges;
  }

  set editingEnabled(e) {
    null != e ? this._override("editingEnabled", e) : this._clearOverride("editingEnabled");
  }

  get defaultPopupTemplate() {
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_15__.isSome)(this.associatedLayer) || this.attributeStorageInfo ? this.createPopupTemplate() : null;
  }

  readObjectIdField(e, t) {
    return !e && t.fields && t.fields.some(t => ("esriFieldTypeOID" === t.type && (e = t.name), !!e)), e || void 0;
  }

  readGlobalIdField(e, t) {
    return !e && t.fields && t.fields.some(t => ("esriFieldTypeGlobalID" === t.type && (e = t.name), !!e)), e || void 0;
  }

  get displayField() {
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_15__.isSome)(this.associatedLayer) ? this.associatedLayer.displayField : null;
  }

  readProfile(e, t) {
    const r = t.store.profile;
    return null != r && X[r] ? X[r] : (B.error("Unknown or missing profile", {
      profile: r,
      layer: this
    }), "mesh-pyramids");
  }

  load(e) {
    const t = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_15__.isSome)(e) ? e.signal : null,
          r = this.loadFromPortal({
      supportedTypes: ["Scene Service"]
    }, e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_17__.throwIfAbortError).then(() => this._fetchService(t)).then(() => Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages, t), this._setAssociatedFeatureLayer(t)])).then(() => this._validateElevationInfo()).then(() => this._applyAssociatedLayerOverrides()).then(() => this._populateFieldUsageInfo()).then(() => (0,_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_47__.loadStyleRenderer)(this, {
      origin: "service"
    }, t)).then(() => (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_41__.fixRendererFields)(this.renderer, this.fieldsIndex)).then(() => this.finishLoadEditablePortalLayer(e));
    return this.addResolvingPromise(r), Promise.resolve(this);
  }

  createQuery() {
    const e = new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_48__.default();
    return "mesh" !== this.geometryType && (e.returnGeometry = !0, e.returnZ = !0), e.where = this.definitionExpression || "1=1", e.sqlFormat = "standard", e;
  }

  queryExtent(e, t) {
    return this._getAssociatedLayerForQuery().then(r => r.queryExtent(e || this.createQuery(), t));
  }

  queryFeatureCount(e, t) {
    return this._getAssociatedLayerForQuery().then(r => r.queryFeatureCount(e || this.createQuery(), t));
  }

  queryFeatures(e, t) {
    return this._getAssociatedLayerForQuery().then(r => r.queryFeatures(e || this.createQuery(), t)).then(e => {
      if (null != e && e.features) for (const t of e.features) t.layer = this, t.sourceLayer = this;
      return e;
    });
  }

  queryObjectIds(e, t) {
    return this._getAssociatedLayerForQuery().then(r => r.queryObjectIds(e || this.createQuery(), t));
  }

  queryAttachments(e, t) {
    return this._getAssociatedLayerForQuery().then(r => r.queryAttachments(e, t));
  }

  getFieldUsageInfo(e) {
    const t = {
      supportsLabelingInfo: !1,
      supportsRenderer: !1,
      supportsPopupTemplate: !1,
      supportsLayerQuery: !1
    };
    return this.loaded ? this._fieldUsageInfo[e] || t : (B.error("#getFieldUsageInfo()", "Unavailable until layer is loaded"), t);
  }

  createPopupTemplate(e) {
    return (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_49__.createPopupTemplate)(this, e);
  }

  _getAssociatedLayerForQuery() {
    const e = this.associatedLayer;
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_15__.isSome)(e) && e.loaded ? Promise.resolve(e) : this._loadAssociatedLayerForQuery();
  }

  _loadAssociatedLayerForQuery() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (yield _this.load(), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_15__.isNone)(_this.associatedLayer)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_13__.default("scenelayer:query-not-available", "SceneLayer queries are not available without an associated feature layer", {
        layer: _this
      });

      try {
        yield _this.associatedLayer.load();
      } catch (e) {
        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_13__.default("scenelayer:query-not-available", "SceneLayer associated feature layer could not be loaded", {
          layer: _this,
          error: e
        });
      }

      return _this.associatedLayer;
    })();
  }

  hasCachedStatistics(e) {
    return null != this.statisticsInfo && this.statisticsInfo.some(t => t.name === e);
  }

  queryCachedStatistics(e, t) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (yield _this2.load(t), !_this2.statisticsInfo) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_13__.default("scenelayer:no-cached-statistics", "Cached statistics are not available for this layer");

      const r = _this2.fieldsIndex.get(e);

      if (!r) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_13__.default("scenelayer:field-unexisting", `Field '${e}' does not exist on the layer`);

      for (const o of _this2.statisticsInfo) if (o.name === r.name) {
        const e = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_18__.join)(_this2.parsedUrl.path, o.href);
        return (0,_request_js__WEBPACK_IMPORTED_MODULE_12__.default)(e, {
          query: {
            f: "json",
            token: _this2.apiKey
          },
          responseType: "json",
          signal: t ? t.signal : null
        }).then(e => e.data);
      }

      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_13__.default("scenelayer:no-cached-statistics", "Cached statistics for this attribute are not available");
    })();
  }

  saveAs(e, t) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this3._debouncedSaveOperations(1, { ...t,
        getTypeKeywords: () => _this3._getTypeKeywords(),
        portalItemLayerType: "scene"
      }, e);
    })();
  }

  save() {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const e = {
        getTypeKeywords: () => _this4._getTypeKeywords(),
        portalItemLayerType: "scene"
      };
      return _this4._debouncedSaveOperations(0, e);
    })();
  }

  applyEdits(e, t) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = yield __webpack_require__.e(/*! import() */ 1719).then(__webpack_require__.bind(__webpack_require__, /*! ./graphics/editingSupport.js */ 21719));
      if (yield _this5.load(), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_15__.isNone)(_this5.associatedLayer)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_13__.default(`${_this5.type}-layer:not-editable`, "Service is not editable");
      return yield _this5.associatedLayer.load(), r.applyEdits(_this5, _this5.associatedLayer.source, e, t);
    })();
  }

  on(e, t) {
    return super.on(e, t);
  }

  validateLayer(e) {
    if (e.layerType && -1 === Z.indexOf(e.layerType)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_13__.default("scenelayer:layer-type-not-supported", "SceneLayer does not support this layer type", {
      layerType: e.layerType
    });
    if (isNaN(this.version.major) || isNaN(this.version.minor)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_13__.default("layer:service-version-not-supported", "Service version is not supported.", {
      serviceVersion: this.version.versionString,
      supportedVersions: "1.x"
    });
    if (this.version.major > 1) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_13__.default("layer:service-version-too-new", "Service version is too new.", {
      serviceVersion: this.version.versionString,
      supportedVersions: "1.x"
    });

    function t(e, t) {
      let r = !1,
          s = !1;
      if (null == e) r = !0, s = !0;else {
        const o = t && t.isGeographic;

        switch (e) {
          case "east-north-up":
          case "earth-centered":
            r = !0, s = o;
            break;

          case "vertex-reference-frame":
            r = !0, s = !o;
            break;

          default:
            r = !1;
        }
      }
      if (!r) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_13__.default("scenelayer:unsupported-normal-reference-frame", "Normal reference frame is invalid.");
      if (!s) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_13__.default("scenelayer:incompatible-normal-reference-frame", "Normal reference frame is incompatible with layer spatial reference.");
    }

    t(this.normalReferenceFrame, this.spatialReference);
  }

  _getTypeKeywords() {
    const e = [];
    if ("points" === this.profile) e.push("Point");else {
      if ("mesh-pyramids" !== this.profile) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_13__.default("scenelayer:unknown-profile", "SceneLayer:save() encountered an unknown SceneLayer profile: " + this.profile);
      e.push("3DObject");
    }
    return e;
  }

  _populateFieldUsageInfo() {
    if (this._fieldUsageInfo = {}, this.fields) for (const e of this.fields) {
      const t = !(!this.attributeStorageInfo || !this.attributeStorageInfo.some(t => t.name === e.name)),
            r = !!((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_15__.isSome)(this.associatedLayer) && this.associatedLayer.fields && this.associatedLayer.fields.some(t => t && e.name === t.name)),
            s = {
        supportsLabelingInfo: t,
        supportsRenderer: t,
        supportsPopupTemplate: t || r,
        supportsLayerQuery: r
      };
      this._fieldUsageInfo[e.name] = s;
    }
  }

  _applyAssociatedLayerOverrides() {
    this._applyAssociatedLayerFieldsOverrides(), this._applyAssociatedLayerPopupOverrides();
  }

  _applyAssociatedLayerFieldsOverrides() {
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_15__.isNone)(this.associatedLayer) || !this.associatedLayer.fields) return;
    let e = null;

    for (const t of this.associatedLayer.fields) {
      const r = this.getField(t.name);
      r ? (!r.domain && t.domain && (r.domain = t.domain.clone()), r.editable = t.editable, r.nullable = t.nullable, r.length = t.length) : (e || (e = this.fields ? this.fields.slice() : []), e.push(t.clone()));
    }

    e && this._set("fields", e);
  }

  _applyAssociatedLayerPopupOverrides() {
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_15__.isNone)(this.associatedLayer)) return;
    const e = ["popupTemplate", "popupEnabled"],
          t = (0,_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_23__.getProperties)(this);

    for (let r = 0; r < e.length; r++) {
      const s = e[r],
            o = this.originIdOf(s),
            i = this.associatedLayer.originIdOf(s);
      o < i && (2 === i || 3 === i) && t.setAtOrigin(s, this.associatedLayer[s], i);
    }
  }

  _setAssociatedFeatureLayer(e) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (-1 === ["mesh-pyramids", "points"].indexOf(_this6.profile)) return;
      const t = new _support_FetchAssociatedFeatureLayer_js__WEBPACK_IMPORTED_MODULE_38__.FetchAssociatedFeatureLayer(_this6.parsedUrl, _this6.portalItem, _this6.apiKey, e);

      try {
        _this6.associatedLayer = yield t.fetch();
      } catch (r) {
        (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_17__.isAbortError)(r) || _this6._logWarningOnPopupEnabled();
      }
    })();
  }

  _logWarningOnPopupEnabled() {
    (0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_19__.whenValidOnce)(this, ["popupTemplate", "popupEnabled"], () => this.popupEnabled && null != this.popupTemplate).then(() => () => {
      const e = `this SceneLayer: ${this.title}`;
      null == this.attributeStorageInfo ? B.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`) : B.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`);
    });
  }

  _validateElevationInfo() {
    const e = this.elevationInfo;
    e && ("mesh-pyramids" === this.profile && "absolute-height" !== e.mode && B.warn(".elevationInfo=", "Mesh scene layers only support absolute-height elevation mode"), e.featureExpressionInfo && "0" !== e.featureExpressionInfo.expression && B.warn(".elevationInfo=", "Scene layers do not support featureExpressionInfo"));
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  types: {
    key: "type",
    base: _support_FeatureReduction_js__WEBPACK_IMPORTED_MODULE_36__.default,
    typeMap: {
      selection: _support_FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_37__.default
    }
  },
  json: {
    origins: {
      "web-scene": {
        name: "layerDefinition.featureReduction",
        write: !0
      },
      "portal-item": {
        name: "layerDefinition.featureReduction",
        write: !0
      }
    }
  }
})], J.prototype, "featureReduction", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: [_support_RangeInfo_js__WEBPACK_IMPORTED_MODULE_46__.default],
  json: {
    read: !1,
    origins: {
      "web-scene": {
        name: "layerDefinition.rangeInfos",
        write: !0
      },
      "portal-item": {
        name: "layerDefinition.rangeInfos",
        write: !0
      }
    }
  }
})], J.prototype, "rangeInfos", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  json: {
    read: !1
  }
})], J.prototype, "associatedLayer", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: ["show", "hide"]
})], J.prototype, "listMode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: ["ArcGISSceneServiceLayer"]
})], J.prototype, "operationalLayerType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  json: {
    read: !1
  },
  readOnly: !0
})], J.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({ ...H.fields,
  readOnly: !0,
  json: {
    read: !1,
    origins: {
      service: {
        read: !0
      }
    }
  }
})], J.prototype, "fields", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)()], J.prototype, "types", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)()], J.prototype, "typeIdField", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)()], J.prototype, "formTemplate", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  readOnly: !0
})], J.prototype, "fieldsIndex", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: _support_LayerFloorInfo_js__WEBPACK_IMPORTED_MODULE_45__.default,
  json: {
    read: {
      source: "layerDefinition.floorInfo"
    },
    write: {
      target: "layerDefinition.floorInfo"
    }
  }
})], J.prototype, "floorInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)(H.outFields)], J.prototype, "outFields", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: _support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_42__.I3SNodePageDefinition,
  readOnly: !0,
  json: {
    read: !1
  }
})], J.prototype, "nodePages", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_25__.reader)("service", "nodePages", ["nodePages", "pointNodePages"])], J.prototype, "readNodePages", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: [_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_42__.I3SMaterialDefinition],
  readOnly: !0
})], J.prototype, "materialDefinitions", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: [_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_42__.I3STextureSetDefinition],
  readOnly: !0
})], J.prototype, "textureSetDefinitions", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: [_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_42__.I3SGeometryDefinition],
  readOnly: !0
})], J.prototype, "geometryDefinitions", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  readOnly: !0
})], J.prototype, "serviceUpdateTimeStamp", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  readOnly: !0
})], J.prototype, "attributeStorageInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  readOnly: !0
})], J.prototype, "statisticsInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: String,
  json: {
    origins: {
      service: {
        read: !1,
        write: !1
      }
    },
    name: "layerDefinition.definitionExpression",
    write: {
      enabled: !0,
      allowNull: !0
    }
  }
})], J.prototype, "definitionExpression", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: String,
  json: {
    origins: {
      "web-scene": {
        read: !0,
        write: !0
      }
    },
    read: !1
  }
})], J.prototype, "path", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_35__.elevationInfo)], J.prototype, "elevationInfo", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: String
})], J.prototype, "geometryType", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_35__.labelsVisible)], J.prototype, "labelsVisible", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: [_support_LabelClass_js__WEBPACK_IMPORTED_MODULE_43__.default],
  json: {
    origins: {
      service: {
        name: "drawingInfo.labelingInfo",
        read: {
          reader: _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_44__.reader
        },
        write: !1
      }
    },
    name: "layerDefinition.drawingInfo.labelingInfo",
    read: {
      reader: _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_44__.reader
    },
    write: !0
  }
})], J.prototype, "labelingInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_35__.legendEnabled)], J.prototype, "legendEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: Number,
  json: {
    origins: {
      "web-document": {
        default: 1,
        write: {
          enabled: !0,
          target: {
            opacity: {
              type: Number
            },
            "layerDefinition.drawingInfo.transparency": {
              type: Number
            }
          }
        },
        read: {
          source: ["opacity", "layerDefinition.drawingInfo.transparency"],

          reader(e, t) {
            var r, s;
            if ("number" == typeof e && e >= 0 && e <= 1) return e;
            const o = null == (r = t.layerDefinition) || null == (s = r.drawingInfo) ? void 0 : s.transparency;
            return void 0 !== o ? (0,_webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_50__.transparencyToOpacity)(o) : void 0;
          }

        }
      },
      "portal-item": {
        write: !0
      },
      service: {
        read: !1
      }
    }
  }
})], J.prototype, "opacity", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_11__.webSceneRendererTypes,
  json: {
    origins: {
      service: {
        read: {
          source: "drawingInfo.renderer"
        }
      }
    },
    name: "layerDefinition.drawingInfo.renderer",
    write: !0
  },
  value: null
})], J.prototype, "renderer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  json: {
    read: !1
  }
})], J.prototype, "cachedDrawingInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_25__.reader)("service", "cachedDrawingInfo")], J.prototype, "readCachedDrawingInfo", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  readOnly: !0,
  json: {
    read: !1
  }
})], J.prototype, "capabilities", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: Boolean,
  json: {
    read: !1
  }
})], J.prototype, "editingEnabled", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_35__.popupEnabled)], J.prototype, "popupEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__.default,
  json: {
    name: "popupInfo",
    write: !0
  }
})], J.prototype, "popupTemplate", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  readOnly: !0,
  json: {
    read: !1
  }
})], J.prototype, "defaultPopupTemplate", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: String,
  json: {
    read: !1
  }
})], J.prototype, "objectIdField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_25__.reader)("service", "objectIdField", ["objectIdField", "fields"])], J.prototype, "readObjectIdField", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: String,
  json: {
    read: !1
  }
})], J.prototype, "globalIdField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_25__.reader)("service", "globalIdField", ["globalIdField", "fields"])], J.prototype, "readGlobalIdField", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  readOnly: !0,
  type: String,
  json: {
    read: !1
  }
})], J.prototype, "displayField", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: String,
  json: {
    read: !1
  }
})], J.prototype, "profile", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_25__.reader)("service", "profile", ["store.profile"])], J.prototype, "readProfile", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  readOnly: !0,
  type: String,
  json: {
    origins: {
      service: {
        read: {
          source: "store.normalReferenceFrame"
        }
      }
    },
    read: !1
  }
})], J.prototype, "normalReferenceFrame", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_35__.screenSizePerspectiveEnabled)], J.prototype, "screenSizePerspectiveEnabled", void 0), J = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_26__.subclass)("esri.layers.SceneLayer")], J);
const X = {
  "mesh-pyramids": "mesh-pyramids",
  meshpyramids: "mesh-pyramids",
  "features-meshes": "mesh-pyramids",
  points: "points",
  "features-points": "points",
  lines: "lines",
  "features-lines": "lines",
  polygons: "polygons",
  "features-polygons": "polygons"
},
      Y = {
  "mesh-pyramids": "mesh",
  points: "point",
  lines: "polyline",
  polygons: "polygon"
},
      ee = J;


/***/ }),

/***/ 45674:
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/RangeInfo.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RangeInfo": () => (/* binding */ s),
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{read:!0,write:!0}})],s.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{read:!0,write:!0}})],s.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number],json:{read:!0,write:!0}})],s.prototype,"currentRangeExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number],json:{read:!0,write:!0}})],s.prototype,"fullRangeExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],s.prototype,"type",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.RangeInfo")],s);const p=s;


/***/ })

}]);
//# sourceMappingURL=5662.1d18ff5492dee2b36901.js.map