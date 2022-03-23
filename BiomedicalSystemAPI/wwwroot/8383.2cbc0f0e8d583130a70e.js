"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[8383],{

/***/ 48383:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/MemorySourceWorker.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/maybe.js */ 18502);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../featureConversionUtils.js */ 42187);
/* harmony import */ var _objectIdUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../objectIdUtils.js */ 19109);
/* harmony import */ var _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/FeatureStore.js */ 49685);
/* harmony import */ var _data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/projectionSupport.js */ 79371);
/* harmony import */ var _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/QueryEngine.js */ 43971);
/* harmony import */ var _clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clientSideDefaults.js */ 45033);
/* harmony import */ var _sourceUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sourceUtils.js */ 6035);
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../support/FieldsIndex.js */ 62419);
/* harmony import */ var _support_fieldType_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../support/fieldType.js */ 34309);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../support/fieldUtils.js */ 81451);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/














const R = _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__.WGS84,
      q = {
  xmin: -180,
  ymin: -90,
  xmax: 180,
  ymax: 90,
  spatialReference: _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__.WGS84
},
      D = {
  hasAttachments: !1,
  capabilities: "query, editing, create, delete, update",
  useStandardizedQueries: !0,
  supportsCoordinatesQuantization: !0,
  supportsReturningQueryGeometry: !0,
  advancedQueryCapabilities: {
    supportsQueryAttachments: !1,
    supportsStatistics: !0,
    supportsPercentileStatistics: !0,
    supportsReturningGeometryCentroid: !0,
    supportsQueryWithDistance: !0,
    supportsDistinct: !0,
    supportsReturningQueryExtent: !0,
    supportsReturningGeometryProperties: !1,
    supportsHavingClause: !0,
    supportsOrderBy: !0,
    supportsPagination: !0,
    supportsQueryWithResultType: !1,
    supportsSqlExpression: !0,
    supportsDisjointSpatialRel: !0
  }
};

function O(e) {
  return (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.isPoint)(e) ? null != e.z : !!e.hasZ;
}

function w(e) {
  return (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.isPoint)(e) ? null != e.m : !!e.hasM;
}

class S {
  constructor() {
    this._queryEngine = null, this._nextObjectId = null;
  }

  destroy() {
    this._queryEngine && this._queryEngine && this._queryEngine.destroy(), this._queryEngine = this._fieldsIndex = this._createDefaultAttributes = null;
  }

  load(t) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = [],
            {
        features: s
      } = t,
            r = _this._inferLayerProperties(s, t.fields),
            n = t.fields || [],
            a = null != t.hasM ? t.hasM : r.hasM,
            o = null != t.hasZ ? t.hasZ : r.hasZ,
            l = !t.spatialReference && !r.spatialReference,
            y = l ? R : t.spatialReference || r.spatialReference,
            I = l ? q : null,
            b = t.geometryType || r.geometryType,
            F = !b;

      let j = t.objectIdField || r.objectIdField,
          _ = t.timeInfo;
      if (!F && (l && i.push({
        name: "feature-layer:spatial-reference-not-found",
        message: "Spatial reference not provided or found in features. Defaults to WGS84"
      }), !b)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("feature-layer:missing-property", "geometryType not set and couldn't be inferred from the provided features");
      if (!j) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("feature-layer:missing-property", "objectIdField not set and couldn't be found in the provided fields");

      if (r.objectIdField && j !== r.objectIdField && (i.push({
        name: "feature-layer:duplicated-oid-field",
        message: `Provided objectIdField "${j}" doesn't match the field name "${r.objectIdField}", found in the provided fields`
      }), j = r.objectIdField), j && !r.objectIdField) {
        let e = null;
        n.some(t => t.name === j && (e = t, !0)) ? (e.type = "esriFieldTypeOID", e.editable = !1, e.nullable = !1) : n.unshift({
          alias: j,
          name: j,
          type: "esriFieldTypeOID",
          editable: !1,
          nullable: !1
        });
      }

      for (const d of n) {
        if (null == d.name && (d.name = d.alias), null == d.alias && (d.alias = d.name), !d.name) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("feature-layer:invalid-field-name", "field name is missing", {
          field: d
        });
        if (d.name === j && (d.type = "esriFieldTypeOID"), -1 === _support_fieldType_js__WEBPACK_IMPORTED_MODULE_13__.kebabDict.jsonValues.indexOf(d.type)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("feature-layer:invalid-field-type", `invalid type for field "${d.name}"`, {
          field: d
        });
      }

      const O = {};

      for (const e of n) if ("esriFieldTypeOID" !== e.type && "esriFieldTypeGlobalID" !== e.type) {
        const t = (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_14__.getFieldDefaultValue)(e);
        void 0 !== t && (O[e.name] = t);
      }

      if (_this._fieldsIndex = new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_12__.default(n), _this._createDefaultAttributes = (0,_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_10__.createDefaultAttributesFunction)(O, j), _) {
        if (_.startTimeField) {
          const e = _this._fieldsIndex.get(_.startTimeField);

          e ? (_.startTimeField = e.name, e.type = "esriFieldTypeDate") : _.startTimeField = null;
        }

        if (_.endTimeField) {
          const e = _this._fieldsIndex.get(_.endTimeField);

          e ? (_.endTimeField = e.name, e.type = "esriFieldTypeDate") : _.endTimeField = null;
        }

        if (_.trackIdField) {
          const e = _this._fieldsIndex.get(_.trackIdField);

          e ? _.trackIdField = e.name : (_.trackIdField = null, i.push({
            name: "feature-layer:invalid-timeInfo-trackIdField",
            message: "trackIdField is missing",
            details: {
              timeInfo: _
            }
          }));
        }

        _.startTimeField || _.endTimeField || (i.push({
          name: "feature-layer:invalid-timeInfo",
          message: "startTimeField and endTimeField are missing or invalid",
          details: {
            timeInfo: _
          }
        }), _ = null);
      }

      const w = {
        warnings: i,
        featureErrors: [],
        layerDefinition: { ...D,
          drawingInfo: (0,_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_10__.createDrawingInfo)(b),
          templates: (0,_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_10__.createDefaultTemplate)(O),
          extent: I,
          geometryType: b,
          objectIdField: j,
          fields: n,
          hasZ: !!o,
          hasM: !!a,
          timeInfo: _
        },
        assignedObjectIds: {}
      };
      if (_this._queryEngine = new _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_9__.default({
        fields: n,
        geometryType: b,
        hasM: a,
        hasZ: o,
        objectIdField: j,
        spatialReference: y,
        featureStore: new _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_7__.default({
          geometryType: b,
          hasM: a,
          hasZ: o
        }),
        timeInfo: _,
        cacheSpatialQueries: !0
      }), !s || !s.length) return _this._nextObjectId = _objectIdUtils_js__WEBPACK_IMPORTED_MODULE_6__.initialObjectId, w;
      const S = (0,_objectIdUtils_js__WEBPACK_IMPORTED_MODULE_6__.findLastObjectIdFromFeatures)(j, s);
      return _this._nextObjectId = S + 1, yield (0,_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__.checkProjectionSupport)(s, y), _this._loadInitialFeatures(w, s);
    })();
  }

  applyEdits(e) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        spatialReference: t,
        geometryType: i
      } = _this2._queryEngine;
      return yield Promise.all([(0,_sourceUtils_js__WEBPACK_IMPORTED_MODULE_11__.loadGeometryEngineForSimplify)(t, i), (0,_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__.checkProjectionSupport)(e.adds, t), (0,_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__.checkProjectionSupport)(e.updates, t)]), _this2._applyEdits(e);
    })();
  }

  queryFeatures(e, t = {}) {
    return this._queryEngine.executeQuery(e, t.signal);
  }

  queryFeatureCount(e, t = {}) {
    return this._queryEngine.executeQueryForCount(e, t.signal);
  }

  queryObjectIds(e, t = {}) {
    return this._queryEngine.executeQueryForIds(e, t.signal);
  }

  queryExtent(e, t = {}) {
    return this._queryEngine.executeQueryForExtent(e, t.signal);
  }

  querySnapping(e, t = {}) {
    return this._queryEngine.executeQueryForSnapping(e, t.signal);
  }

  _inferLayerProperties(e, i) {
    let r,
        n,
        a = null,
        o = null,
        l = null;

    for (const d of e) {
      const e = d.geometry;
      if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isNone)(e) && (a || (a = (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.getJsonType)(e)), o || (o = e.spatialReference), null == r && (r = O(e)), null == n && (n = w(e)), a && o && null != r && null != n)) break;
    }

    if (i && i.length) {
      let e = null;
      i.some(t => {
        const i = "esriFieldTypeOID" === t.type,
              s = !t.type && t.name && "objectid" === t.name.toLowerCase();
        return e = t, i || s;
      }) && (l = e.name);
    }

    return {
      geometryType: a,
      spatialReference: o,
      objectIdField: l,
      hasM: n,
      hasZ: r
    };
  }

  _loadInitialFeatures(e, t) {
    const {
      geometryType: r,
      hasM: n,
      hasZ: o,
      objectIdField: l,
      spatialReference: d,
      featureStore: u
    } = this._queryEngine,
          p = [];

    for (const a of t) {
      if (null != a.uid && (e.assignedObjectIds[a.uid] = -1), a.geometry && r !== (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.getJsonType)(a.geometry)) {
        e.featureErrors.push((0,_sourceUtils_js__WEBPACK_IMPORTED_MODULE_11__.createFeatureEditErrorResult)("Incorrect geometry type."));
        continue;
      }

      const t = this._createDefaultAttributes(),
            n = (0,_sourceUtils_js__WEBPACK_IMPORTED_MODULE_11__.mixAttributes)(this._fieldsIndex, t, a.attributes, !0, e.warnings);

      n ? e.featureErrors.push(n) : (this._assignObjectId(t, a.attributes, !0), a.attributes = t, null != a.uid && (e.assignedObjectIds[a.uid] = a.attributes[l]), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(a.geometry) && (a.geometry = (0,_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__.project)(a.geometry, a.geometry.spatialReference, d)), p.push(a));
    }

    if (u.addMany((0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__.convertFromFeatures)([], p, r, o, n, l)), e.layerDefinition.extent = this._queryEngine.fullExtent, e.layerDefinition.timeInfo) {
      const {
        start: t,
        end: i
      } = this._queryEngine.timeExtent;
      e.layerDefinition.timeInfo.timeExtent = [t, i];
    }

    return e;
  }

  _applyEdits(e) {
    const {
      adds: t,
      updates: i,
      deletes: s
    } = e,
          r = {
      addResults: [],
      deleteResults: [],
      updateResults: [],
      uidToObjectId: {}
    };

    if (t && t.length && this._applyAddEdits(r, t), i && i.length && this._applyUpdateEdits(r, i), s && s.length) {
      for (const e of s) r.deleteResults.push((0,_sourceUtils_js__WEBPACK_IMPORTED_MODULE_11__.createFeatureEditSuccessResult)(e));

      this._queryEngine.featureStore.removeManyById(s);
    }

    return {
      fullExtent: this._queryEngine.fullExtent,
      featureEditResults: r
    };
  }

  _applyAddEdits(e, t) {
    const {
      addResults: r
    } = e,
          {
      geometryType: n,
      hasM: o,
      hasZ: l,
      objectIdField: d,
      spatialReference: u,
      featureStore: p
    } = this._queryEngine,
          f = [];

    for (const a of t) {
      if (a.geometry && n !== (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.getJsonType)(a.geometry)) {
        r.push((0,_sourceUtils_js__WEBPACK_IMPORTED_MODULE_11__.createFeatureEditErrorResult)("Incorrect geometry type."));
        continue;
      }

      const t = this._createDefaultAttributes(),
            o = (0,_sourceUtils_js__WEBPACK_IMPORTED_MODULE_11__.mixAttributes)(this._fieldsIndex, t, a.attributes);

      if (o) r.push(o);else {
        if (this._assignObjectId(t, a.attributes), a.attributes = t, null != a.uid) {
          const t = a.attributes[d];
          e.uidToObjectId[a.uid] = t;
        }

        (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(a.geometry) && (a.geometry = (0,_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__.project)((0,_sourceUtils_js__WEBPACK_IMPORTED_MODULE_11__.simplify)(a.geometry, u), a.geometry.spatialReference, u)), f.push(a), r.push((0,_sourceUtils_js__WEBPACK_IMPORTED_MODULE_11__.createFeatureEditSuccessResult)(a.attributes[d]));
      }
    }

    p.addMany((0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__.convertFromFeatures)([], f, n, l, o, d));
  }

  _applyUpdateEdits({
    updateResults: e
  }, t) {
    const {
      geometryType: r,
      hasM: n,
      hasZ: a,
      objectIdField: d,
      spatialReference: u,
      featureStore: p
    } = this._queryEngine;

    for (const f of t) {
      const {
        attributes: t,
        geometry: c
      } = f,
            m = t && t[d];

      if (null == m) {
        e.push((0,_sourceUtils_js__WEBPACK_IMPORTED_MODULE_11__.createFeatureEditErrorResult)(`Identifier field ${d} missing`));
        continue;
      }

      if (!p.has(m)) {
        e.push((0,_sourceUtils_js__WEBPACK_IMPORTED_MODULE_11__.createFeatureEditErrorResult)(`Feature with object id ${m} missing`));
        continue;
      }

      const h = (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__.convertToFeature)(p.getFeature(m), r, a, n);

      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(c)) {
        if (r !== (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.getJsonType)(c)) {
          e.push((0,_sourceUtils_js__WEBPACK_IMPORTED_MODULE_11__.createFeatureEditErrorResult)("Incorrect geometry type."));
          continue;
        }

        h.geometry = (0,_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__.project)((0,_sourceUtils_js__WEBPACK_IMPORTED_MODULE_11__.simplify)(c, u), c.spatialReference, u);
      }

      if (t) {
        const i = (0,_sourceUtils_js__WEBPACK_IMPORTED_MODULE_11__.mixAttributes)(this._fieldsIndex, h.attributes, t);

        if (i) {
          e.push(i);
          continue;
        }
      }

      p.add((0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__.convertFromFeature)(h, r, a, n, d)), e.push((0,_sourceUtils_js__WEBPACK_IMPORTED_MODULE_11__.createFeatureEditSuccessResult)(m));
    }
  }

  _assignObjectId(e, t, i = !1) {
    const s = this._queryEngine.objectIdField;
    i && t && isFinite(t[s]) ? e[s] = t[s] : e[s] = this._nextObjectId++;
  }

}



/***/ }),

/***/ 45033:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/clientSideDefaults.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCapabilities": () => (/* binding */ a),
/* harmony export */   "createDefaultAttributesFunction": () => (/* binding */ n),
/* harmony export */   "createDefaultTemplate": () => (/* binding */ i),
/* harmony export */   "createDrawingInfo": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/lang.js */ 60161);
/* harmony import */ var _data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/QueryEngineCapabilities.js */ 91343);
/* harmony import */ var _symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../symbols/support/defaultsJSON.js */ 70338);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__.defaultPointSymbolJSON:"esriGeometryPolyline"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__.defaultPolylineSymbolJSON:_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__.defaultPolygonSymbolJSON}}}function n(s,e){if((0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__.default)("esri-csp-restrictions"))return()=>({[e]:null,...s});try{let t=`this.${e} = null;`;for(const e in s){t+=`this${e.includes(".")?`["${e}"]`:`.${e}`} = ${JSON.stringify(s[e])};`}const r=new Function(t);return()=>new r}catch(r){return()=>({[e]:null,...s})}}function i(t={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(t)}}]}function a(t,s){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0},query:_data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_2__.queryCapabilities,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}


/***/ })

}]);
//# sourceMappingURL=8383.2cbc0f0e8d583130a70e.js.map