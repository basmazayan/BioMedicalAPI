"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[3859],{

/***/ 73859:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/geometryServiceUtils.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGeometryServiceURL": () => (/* binding */ i),
/* harmony export */   "projectGeometry": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ 76925);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Portal.js */ 27149);
/* harmony import */ var _rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rest/geometryService/project.js */ 74769);
/* harmony import */ var _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../rest/support/ProjectParameters.js */ 14527);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






function i() {
  return _i.apply(this, arguments);
}

function _i() {
  _i = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (o = null, n) {
    var i, l;
    if (_config_js__WEBPACK_IMPORTED_MODULE_1__.default.geometryServiceUrl) return _config_js__WEBPACK_IMPORTED_MODULE_1__.default.geometryServiceUrl;
    if (!o) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("internal:geometry-service-url-not-configured");
    let a;
    a = "portal" in o ? o.portal || _Portal_js__WEBPACK_IMPORTED_MODULE_3__.default.getDefault() : o, yield a.load({
      signal: n
    });
    const c = null == (i = a.helperServices) || null == (l = i.geometry) ? void 0 : l.url;
    if (!c) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("internal:geometry-service-url-not-configured");
    return c;
  });
  return _i.apply(this, arguments);
}

function l(_x, _x2) {
  return _l.apply(this, arguments);
}

function _l() {
  _l = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (r, t, l = null, a) {
    const c = yield i(l, a),
          s = new _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_5__.default();
    s.geometries = [r], s.outSpatialReference = t;
    const m = yield (0,_rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_4__.project)(c, s, {
      signal: a
    });
    if (m && Array.isArray(m) && 1 === m.length) return m[0];
    throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("internal:geometry-service-projection-failed");
  });
  return _l.apply(this, arguments);
}



/***/ })

}]);
//# sourceMappingURL=3859.23885b65af9131ad882f.js.map