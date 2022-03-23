"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[3373],{

/***/ 73373:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/labelFormatUtils.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLabelFunction": () => (/* binding */ f),
/* harmony export */   "formatField": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _intl_date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../intl/date.js */ 14089);
/* harmony import */ var _intl_number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../intl/number.js */ 62073);
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fieldUtils.js */ 81451);
/* harmony import */ var _labelUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./labelUtils.js */ 49671);
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../support/arcadeOnDemand.js */ 2999);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/







const u = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__.default.getLogger("esri.layers.support.labelFormatUtils"),
      p = {
  type: "simple",
  evaluate: () => null
},
      c = {
  getAttribute: (e, t) => e.field(t)
};

function f(_x, _x2, _x3) {
  return _f.apply(this, arguments);
}

function _f() {
  _f = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, r, a) {
    if (!t || !t.symbol) return p;
    const n = t.where,
          o = (0,_labelUtils_js__WEBPACK_IMPORTED_MODULE_6__.getLabelExpression)(t),
          f = n ? yield __webpack_require__.e(/*! import() */ 6422).then(__webpack_require__.bind(__webpack_require__, /*! ../../core/sql/WhereClause.js */ 36422)) : null;
    let d;

    if ("arcade" === o.type) {
      const t = yield (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_7__.createLabelExpression)(o.expression, a, r);
      d = {
        type: "arcade",

        evaluate(r) {
          try {
            const e = t.evaluate({
              $feature: "attributes" in r ? t.repurposeFeature(r) : t.repurposeAdapter(r)
            });
            if (null != e) return e.toString();
          } catch (a) {
            u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("bad-arcade-expression", "Encountered an error when evaluating label expression for feature", {
              feature: r,
              expression: o
            }));
          }

          return null;
        },

        needsHydrationToEvaluate: () => null == (0,_labelUtils_js__WEBPACK_IMPORTED_MODULE_6__.getSingleFieldArcadeExpression)(o.expression)
      };
    } else d = {
      type: "simple",
      evaluate: e => o.expression.replace(/{[^}]*}/g, t => {
        const a = t.slice(1, -1),
              n = r.get(a);
        if (!n) return t;
        let o = null;

        if ("attributes" in e) {
          e && e.attributes && (o = e.attributes[n.name]);
        } else o = e.field(n.name);

        return null == o ? "" : m(o, n);
      })
    };

    if (n) {
      let e;

      try {
        e = f.WhereClause.create(n, r);
      } catch (y) {
        return p;
      }

      const t = d.evaluate;

      d.evaluate = r => {
        const a = "attributes" in r ? void 0 : c;
        return e.testFeature(r, a) ? t(r) : null;
      };
    }

    return d;
  });
  return _f.apply(this, arguments);
}

function m(e, t) {
  if (null == e) return "";
  const l = t.domain;
  if (l) if ("codedValue" === l.type || "coded-value" === l.type) {
    const t = e;

    for (const e of l.codedValues) if (e.code === t) return e.name;
  } else if ("range" === l.type) {
    const t = +e,
          r = "range" in l ? l.range[0] : l.minValue,
          a = "range" in l ? l.range[1] : l.maxValue;
    if (r <= t && t <= a) return l.name;
  }
  let i = e;
  return "date" === t.type || "esriFieldTypeDate" === t.type ? i = (0,_intl_date_js__WEBPACK_IMPORTED_MODULE_3__.formatDate)(i, (0,_intl_date_js__WEBPACK_IMPORTED_MODULE_3__.convertDateFormatToIntlOptions)("short-date")) : (0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_5__.isNumericField)(t) && (i = (0,_intl_number_js__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(+i)), i || "";
}



/***/ })

}]);
//# sourceMappingURL=3373.a7795a5b785ff941914f.js.map