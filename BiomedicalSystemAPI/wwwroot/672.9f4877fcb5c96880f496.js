"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[672],{

/***/ 80672:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/arcade/functions/featuresetstring.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerFunctions": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _Dictionary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Dictionary.js */ 41490);
/* harmony import */ var _Feature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Feature.js */ 65509);
/* harmony import */ var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/languageUtils.js */ 31863);
/* harmony import */ var _featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../featureset/support/shared.js */ 24642);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





function m(e) {
  return e && e.domain ? "coded-value" === e.domain.type || "codedValue" === e.domain.type ? _Dictionary_js__WEBPACK_IMPORTED_MODULE_0__.default.convertObjectToArcadeDictionary({
    type: "codedValue",
    name: e.domain.name,
    dataType: _featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_3__.layerFieldEsriConstants[e.field.type],
    codedValues: e.domain.codedValues.map(n => ({
      name: n.name,
      code: n.code
    }))
  }) : _Dictionary_js__WEBPACK_IMPORTED_MODULE_0__.default.convertObjectToArcadeDictionary({
    type: "range",
    name: e.domain.name,
    dataType: _featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_3__.layerFieldEsriConstants[e.field.type],
    min: e.domain.min,
    max: e.domain.max
  }) : null;
}

function l(f) {
  "async" === f.mode && (f.functions.domain = function (n, c) {
    return f.standardFunctionAsync(n, c, function (n, c, u) {
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(u, 2, 3), u[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_1__.default) {
        return m(u[0].fullDomain((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.d)(u[1]), void 0 === u[2] ? void 0 : (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(u[2])));
      }

      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.o)(u[0])) return u[0]._ensureLoaded().then(() => m((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.A)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.d)(u[1]), u[0], null, void 0 === u[2] ? void 0 : (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(u[2]))));
      throw new Error("Invalid Parameter");
    });
  }, f.functions.subtypes = function (o, r) {
    return f.standardFunctionAsync(o, r, function (o, r, i) {
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(i, 1, 1), i[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_1__.default) {
        const e = i[0].subtypes();
        return e ? _Dictionary_js__WEBPACK_IMPORTED_MODULE_0__.default.convertObjectToArcadeDictionary(e) : null;
      }

      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.o)(i[0])) return i[0]._ensureLoaded().then(() => {
        const e = i[0].subtypes();
        return e ? _Dictionary_js__WEBPACK_IMPORTED_MODULE_0__.default.convertObjectToArcadeDictionary(e) : null;
      });
      throw new Error("Invalid Parameter");
    });
  }, f.functions.domainname = function (n, u) {
    return f.standardFunctionAsync(n, u, function (n, u, d) {
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(d, 2, 4), d[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_1__.default) return d[0].domainValueLookup((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.d)(d[1]), d[2], void 0 === d[3] ? void 0 : (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(d[3]));
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.o)(d[0])) return d[0]._ensureLoaded().then(() => {
        const n = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.A)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.d)(d[1]), d[0], null, void 0 === d[3] ? void 0 : (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(d[3]));
        return (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.B)(n, d[2]);
      });
      throw new Error("Invalid Parameter");
    });
  }, f.signatures.push({
    name: "domainname",
    min: "2",
    max: "4"
  }), f.functions.domaincode = function (n, c) {
    return f.standardFunctionAsync(n, c, function (n, c, d) {
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(d, 2, 4), d[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_1__.default) return d[0].domainCodeLookup((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.d)(d[1]), d[2], void 0 === d[3] ? void 0 : (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(d[3]));
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.o)(d[0])) return d[0]._ensureLoaded().then(() => {
        const n = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.A)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.d)(d[1]), d[0], null, void 0 === d[3] ? void 0 : (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(d[3]));
        return (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(n, d[2]);
      });
      throw new Error("Invalid Parameter");
    });
  }, f.signatures.push({
    name: "domaincode",
    min: "2",
    max: "4"
  })), f.functions.text = function (n, e) {
    return f.standardFunctionAsync(n, e, function (n, e, o) {
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(o, 1, 2), !(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.o)(o[0])) return (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.s)(o[0], o[1]);
      {
        const e = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(o[1], "");
        if ("" === e) return o[0].castToText();
        if ("schema" === e.toLowerCase()) return o[0].convertToText("schema", n.abortSignal);
        if ("featureset" === e.toLowerCase()) return o[0].convertToText("featureset", n.abortSignal);
      }
    });
  }, f.functions.gdbversion = function (n, o) {
    return f.standardFunctionAsync(n, o, function (n, o, r) {
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r, 1, 1), r[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_1__.default) return r[0].gdbVersion();
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.o)(r[0])) return r[0].load().then(n => n.gdbVersion);
      throw new Error("Invalid Parameter");
    });
  }, f.functions.schema = function (o, r) {
    return f.standardFunctionAsync(o, r, function (o, r, i) {
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(i, 1, 1), (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.o)(i[0])) return i[0].load().then(() => _Dictionary_js__WEBPACK_IMPORTED_MODULE_0__.default.convertObjectToArcadeDictionary(i[0].schema()));

      if (i[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_1__.default) {
        const e = i[0].schema();
        return e ? _Dictionary_js__WEBPACK_IMPORTED_MODULE_0__.default.convertObjectToArcadeDictionary(e) : null;
      }

      throw new Error("Invalid Parameter");
    });
  };
}



/***/ })

}]);
//# sourceMappingURL=672.9f4877fcb5c96880f496.js.map