"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[7114],{

/***/ 35445:
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-icon2.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CalciteIcon),
/* harmony export */   "d": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stencil/core/internal/client */ 19965);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ 58920);
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers.js */ 64125);


/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */



const CSS = {
  icon: "icon",
  flipRtl: "flip-rtl"
};
/**
 * Icon data cache.
 * Exported for testing purposes.
 * @private
 */

const iconCache = {};
/**
 * Icon request cache.
 * Exported for testing purposes.
 * @private
 */

const requestCache = {};
const scaleToPx = {
  s: 16,
  m: 24,
  l: 32
};

function fetchIcon(_x) {
  return _fetchIcon.apply(this, arguments);
}
/**
 * Normalize the icon name to match the path data module exports.
 * Exported for testing purposes.
 * @private
 */


function _fetchIcon() {
  _fetchIcon = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* ({
    icon,
    scale
  }) {
    const size = scaleToPx[scale];
    const name = normalizeIconName(icon);
    const filled = name.charAt(name.length - 1) === "F";
    const iconName = filled ? name.substring(0, name.length - 1) : name;
    const id = `${iconName}${size}${filled ? "F" : ""}`;

    if (iconCache[id]) {
      return iconCache[id];
    }

    if (!requestCache[id]) {
      requestCache[id] = fetch((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.getAssetPath)(`./assets/calcite-icon/${id}.json`)).then(resp => resp.json()).catch(() => {
        console.error(`"${id}" is not a valid calcite-ui-icon name`);
        return "";
      });
    }

    const path = yield requestCache[id];
    iconCache[id] = path;
    return path;
  });
  return _fetchIcon.apply(this, arguments);
}

function normalizeIconName(name) {
  const numberLeadingName = !isNaN(Number(name.charAt(0)));
  const parts = name.split("-");

  if (parts.length === 1) {
    return numberLeadingName ? `i${name}` : name;
  }

  return parts.map((part, index) => {
    if (index === 0) {
      return numberLeadingName ? `i${part.toUpperCase()}` : part;
    }

    return part.charAt(0).toUpperCase() + part.slice(1);
  }).join("");
}

const calciteIconCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex}:host([scale=s]){width:1rem;height:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){width:1.5rem;height:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){width:2rem;height:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}";
let CalciteIcon = class extends HTMLElement {
  constructor() {
    super();

    this.__registerHost();

    this.__attachShadow(); //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------

    /**
     * The name of the icon to display. The value of this property must match the icon name from https://esri.github.io/calcite-ui-icons/.
     */


    this.icon = null;
    /**
     * When true, the icon will be flipped when the element direction is 'rtl'.
     */

    this.flipRtl = false;
    /**
     * Icon scale.
     */

    this.scale = "m";
    this.visible = false;
  } //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------


  connectedCallback() {
    this.waitUntilVisible(() => {
      this.visible = true;
      this.loadIconPathData();
    });
  }

  disconnectedCallback() {
    var _a;

    (_a = this.intersectionObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.intersectionObserver = null;
  }

  componentWillLoad() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.loadIconPathData();
    })();
  }

  render() {
    const {
      el,
      flipRtl,
      pathData,
      scale,
      textLabel
    } = this;
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.a)(el);
    const size = scaleToPx[scale];
    const semantic = !!textLabel;
    const paths = [].concat(pathData || "");
    return (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.h)(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.Host, {
      "aria-hidden": (!semantic).toString(),
      "aria-label": semantic ? textLabel : null,
      role: semantic ? "img" : null
    }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.h)("svg", {
      class: {
        [CSS.flipRtl]: dir === "rtl" && flipRtl,
        svg: true
      },
      fill: "currentColor",
      height: "100%",
      viewBox: `0 0 ${size} ${size}`,
      width: "100%",
      xmlns: "http://www.w3.org/2000/svg"
    }, paths.map(path => typeof path === "string" ? (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.h)("path", {
      d: path
    }) : (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.h)("path", {
      d: path.d,
      opacity: "opacity" in path ? path.opacity : 1
    }))));
  } //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------


  loadIconPathData() {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        icon,
        scale,
        visible
      } = _this2;

      if (!_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.Build.isBrowser || !icon || !visible) {
        return;
      }

      _this2.pathData = yield fetchIcon({
        icon,
        scale
      });
    })();
  }

  waitUntilVisible(callback) {
    this.intersectionObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_2__.c)("intersection", entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.intersectionObserver.disconnect();
          this.intersectionObserver = null;
          callback();
        }
      });
    }, {
      rootMargin: "50px"
    });

    if (!this.intersectionObserver) {
      callback();
      return;
    }

    this.intersectionObserver.observe(this.el);
  }

  static get assetsDirs() {
    return ["assets"];
  }

  get el() {
    return this;
  }

  static get watchers() {
    return {
      "icon": ["loadIconPathData"],
      "scale": ["loadIconPathData"]
    };
  }

  static get style() {
    return calciteIconCss;
  }

};
CalciteIcon = /*@__PURE__*/(0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.proxyCustomElement)(CalciteIcon, [1, "calcite-icon", {
  "icon": [513],
  "flipRtl": [516, "flip-rtl"],
  "scale": [513],
  "textLabel": [1, "text-label"],
  "pathData": [32],
  "visible": [32]
}]);

function defineCustomElement() {
  const components = ["calcite-icon"];
  components.forEach(tagName => {
    switch (tagName) {
      case "calcite-icon":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, CalciteIcon);
        }

        break;
    }
  });
}

defineCustomElement();


/***/ }),

/***/ 47114:
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-notice.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalciteNotice": () => (/* binding */ CalciteNotice),
/* harmony export */   "defineCustomElement": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stencil/core/internal/client */ 19965);
/* harmony import */ var _interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces.js */ 33429);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ 58920);
/* harmony import */ var _calcite_icon2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calcite-icon2.js */ 35445);


/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */




const TEXT = {
  close: "Close"
};
const SLOTS = {
  title: "title",
  message: "message",
  link: "link",
  actionsEnd: "actions-end"
};
const CSS = {
  actionsEnd: "actions-end",
  close: "notice-close",
  container: "container",
  content: "notice-content",
  icon: "notice-icon"
};
const calciteNoticeCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size--2);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) ::slotted(calcite-link){font-size:var(--calcite-font-size--2);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=m]) ::slotted(calcite-link){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size-1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]) ::slotted(calcite-link){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{display:none;margin-left:auto;margin-right:auto;max-width:100%;-ms-flex-align:center;align-items:center;width:var(--calcite-notice-width)}.container{display:none;text-align:left;margin-top:0;margin-bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;opacity:0;pointer-events:none;background-color:var(--calcite-ui-foreground-1);max-height:0;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;border-left:0px solid;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent}.notice-close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.notice-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host{display:-ms-flexbox;display:flex}:host([active]) .container{display:-ms-flexbox;display:flex;-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);-ms-flex-align:center;align-items:center;opacity:1;max-height:100%;border-width:2px;pointer-events:auto}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){display:inline;margin:0;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-right:var(--calcite-notice-spacing-token-small)}.calcite--rtl slot[name=message]::slotted(*),.calcite--rtl *::slotted([slot=message]){margin-right:0;margin-left:var(--calcite-notice-spacing-token-small)}.notice-content{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;overflow-wrap:break-word;-ms-flex:1 1 0px;flex:1 1 0;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) 0}.notice-content:first-of-type:not(:only-child){padding-left:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}.notice-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}.notice-close{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;background-color:transparent;border-style:none;outline:2px solid transparent;outline-offset:2px;cursor:pointer;color:var(--calcite-ui-text-3);-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch}.calcite--rtl{text-align:right;border-left:none;border-right:0px solid}.calcite--rtl .notice-content{padding:var(--calcite-notice-spacing-token-small) 0 var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small)}.calcite--rtl .notice-content:first-of-type:not(:only-child){padding-right:var(--calcite-notice-spacing-token-large)}.calcite--rtl .notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}:host([color=blue]) .container{border-color:var(--calcite-ui-brand)}:host([color=blue]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([color=red]) .container{border-color:var(--calcite-ui-danger)}:host([color=red]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([color=yellow]) .container{border-color:var(--calcite-ui-warning)}:host([color=yellow]) .container .notice-icon{color:var(--calcite-ui-warning)}:host([color=green]) .container{border-color:var(--calcite-ui-success)}:host([color=green]) .container .notice-icon{color:var(--calcite-ui-success)}";
let CalciteNotice$1 = class extends HTMLElement {
  constructor() {
    super();

    this.__registerHost();

    this.__attachShadow();

    this.calciteNoticeClose = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_4__.createEvent)(this, "calciteNoticeClose", 7);
    this.calciteNoticeOpen = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_4__.createEvent)(this, "calciteNoticeOpen", 7); //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //---------------------------------------------------------------------------

    /** Is the notice currently active or not */

    this.active = false;
    /** Color for the notice (will apply to top border and icon) */

    this.color = "blue";
    /** Optionally show a button the user can click to dismiss the notice */

    this.dismissible = false;
    /** String for the close button.
     * @default "Close"
     */

    this.intlClose = TEXT.close;
    /** specify the scale of the notice, defaults to m */

    this.scale = "m";
    /** specify the width of the notice, defaults to auto */

    this.width = "auto"; //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------

    this.close = () => {
      this.active = false;
      this.calciteNoticeClose.emit();
    };
  }

  updateRequestedIcon() {
    this.requestedIcon = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.s)(_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.S, this.icon, this.color);
  } //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------


  componentWillLoad() {
    this.requestedIcon = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.s)(_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.S, this.icon, this.color);
  }

  componentDidLoad() {
    this.noticeLinkEl = this.el.querySelector("calcite-link");
  }

  render() {
    const {
      el
    } = this;
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.a)(el);
    const closeButton = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_4__.h)("button", {
      "aria-label": this.intlClose,
      class: CSS.close,
      onClick: this.close,
      ref: el => this.closeButton = el
    }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_4__.h)("calcite-icon", {
      icon: "x",
      scale: this.scale === "l" ? "m" : "s"
    }));
    const hasActionEnd = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.b)(el, SLOTS.actionsEnd);
    return (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_4__.h)("div", {
      class: {
        [CSS.container]: true,
        [_dom_js__WEBPACK_IMPORTED_MODULE_2__.C.rtl]: dir === "rtl"
      }
    }, this.requestedIcon ? (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_4__.h)("div", {
      class: CSS.icon
    }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_4__.h)("calcite-icon", {
      icon: this.requestedIcon,
      scale: this.scale === "l" ? "m" : "s"
    })) : null, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_4__.h)("div", {
      class: CSS.content
    }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_4__.h)("slot", {
      name: SLOTS.title
    }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_4__.h)("slot", {
      name: SLOTS.message
    }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_4__.h)("slot", {
      name: SLOTS.link
    })), hasActionEnd ? (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_4__.h)("div", {
      class: CSS.actionsEnd
    }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_4__.h)("slot", {
      name: SLOTS.actionsEnd
    })) : null, this.dismissible ? closeButton : null);
  } //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /** Sets focus on the component. */


  setFocus() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this.closeButton && !_this.noticeLinkEl) {
        return;
      }

      if (_this.noticeLinkEl) {
        _this.noticeLinkEl.setFocus();
      } else if (_this.closeButton) {
        _this.closeButton.focus();
      }
    })();
  }

  get el() {
    return this;
  }

  static get watchers() {
    return {
      "icon": ["updateRequestedIcon"],
      "color": ["updateRequestedIcon"]
    };
  }

  static get style() {
    return calciteNoticeCss;
  }

};
CalciteNotice$1 = /*@__PURE__*/(0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_4__.proxyCustomElement)(CalciteNotice$1, [1, "calcite-notice", {
  "active": [1540],
  "color": [513],
  "dismissible": [516],
  "icon": [520],
  "intlClose": [1, "intl-close"],
  "scale": [513],
  "width": [513],
  "setFocus": [64]
}]);

function defineCustomElement$1() {
  const components = ["calcite-notice", "calcite-icon"];
  components.forEach(tagName => {
    switch (tagName) {
      case "calcite-notice":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, CalciteNotice$1);
        }

        break;

      case "calcite-icon":
        if (!customElements.get(tagName)) {
          (0,_calcite_icon2_js__WEBPACK_IMPORTED_MODULE_3__.d)();
        }

        break;
    }
  });
}

defineCustomElement$1();
const CalciteNotice = CalciteNotice$1;
const defineCustomElement = defineCustomElement$1;


/***/ }),

/***/ 58920:
/*!**********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/dom.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CSS_UTILITY),
/* harmony export */   "T": () => (/* binding */ TEXT),
/* harmony export */   "a": () => (/* binding */ getElementDir),
/* harmony export */   "b": () => (/* binding */ getSlotted),
/* harmony export */   "c": () => (/* binding */ getThemeName),
/* harmony export */   "d": () => (/* binding */ closestElementCrossShadowBoundary),
/* harmony export */   "e": () => (/* binding */ filterDirectChildren),
/* harmony export */   "f": () => (/* binding */ focusElement),
/* harmony export */   "g": () => (/* binding */ getElementProp),
/* harmony export */   "h": () => (/* binding */ ensureId),
/* harmony export */   "i": () => (/* binding */ isCalciteFocusable),
/* harmony export */   "j": () => (/* binding */ queryElementsRoots),
/* harmony export */   "k": () => (/* binding */ intersects),
/* harmony export */   "n": () => (/* binding */ nodeListToArray),
/* harmony export */   "q": () => (/* binding */ queryElementRoots),
/* harmony export */   "s": () => (/* binding */ setRequestedIcon)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guid.js */ 79991);


/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */

const autoTheme = "calcite-theme-auto";
const darkTheme = "calcite-theme-dark";
const lightTheme = "calcite-theme-light";
const CSS_UTILITY = {
  autoTheme,
  darkTheme,
  lightTheme,
  rtl: "calcite--rtl"
};
const TEXT = {
  loading: "Loading"
};
/**
 * This helper will guarantee an ID on the provided element.
 *
 * If it already has an ID, it will be preserved, otherwise a unique one will be generated and assigned.
 *
 * @returns {string} The element's ID.
 */

function ensureId(el) {
  if (!el) {
    return "";
  }

  return el.id = el.id || `${el.tagName.toLowerCase()}-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_1__.g)()}`;
}

function nodeListToArray(nodeList) {
  return Array.isArray(nodeList) ? nodeList : Array.from(nodeList);
}

function getThemeName(el) {
  return closestElementCrossShadowBoundary(el, `.${CSS_UTILITY.darkTheme}`) ? "dark" : "light";
}

function getElementDir(el) {
  const prop = "dir";
  const selector = `[${prop}]`;
  const closest = closestElementCrossShadowBoundary(el, selector);
  return closest ? closest.getAttribute(prop) : "ltr";
}

function getElementProp(el, prop, fallbackValue) {
  const selector = `[${prop}]`;
  const closest = el.closest(selector);
  return closest ? closest.getAttribute(prop) : fallbackValue;
}

function getRootNode(el) {
  return el.getRootNode();
}

function getHost(root) {
  return root.host || null;
} // Queries an element's rootNode and any ancestor rootNodes.
// based on https://stackoverflow.com/q/54520554/194216


function queryElementsRoots(element, selector) {
  // Gets the rootNode and any ancestor rootNodes (shadowRoot or document) of an element and queries them for a selector.
  function queryFromAll(el, allResults) {
    if (!el) {
      return allResults;
    }

    if (el.assignedSlot) {
      el = el.assignedSlot;
    }

    const rootNode = getRootNode(el);
    const results = Array.from(rootNode.querySelectorAll(selector));
    const uniqueResults = results.filter(result => !allResults.includes(result));
    allResults = [...allResults, ...uniqueResults];
    const host = getHost(rootNode);
    return host ? queryFromAll(host, allResults) : allResults;
  }

  return queryFromAll(element, []);
} // Queries an element's rootNode and any ancestor rootNodes.
// based on https://stackoverflow.com/q/54520554/194216


function queryElementRoots(element, selector) {
  // Gets the rootNode and any ancestor rootNodes (shadowRoot or document) of an element and queries them for a selector.
  function queryFrom(el) {
    if (!el) {
      return null;
    }

    if (el.assignedSlot) {
      el = el.assignedSlot;
    }

    const rootNode = getRootNode(el);
    const found = rootNode.querySelector(selector);
    const host = getHost(rootNode);
    return found ? found : host ? queryFrom(host) : null;
  }

  return queryFrom(element);
}

function closestElementCrossShadowBoundary(element, selector) {
  // based on https://stackoverflow.com/q/54520554/194216
  function closestFrom(el) {
    return el ? el.closest(selector) || closestFrom(getHost(getRootNode(el))) : null;
  }

  return closestFrom(element);
}

function isCalciteFocusable(el) {
  return typeof (el === null || el === void 0 ? void 0 : el.setFocus) === "function";
}

function focusElement(_x) {
  return _focusElement.apply(this, arguments);
}

function _focusElement() {
  _focusElement = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (el) {
    if (!el) {
      return;
    }

    return isCalciteFocusable(el) ? el.setFocus() : el.focus();
  });
  return _focusElement.apply(this, arguments);
}

function getSlotted(element, slotName, options) {
  const slotSelector = `[slot="${slotName}"]`;

  if (options === null || options === void 0 ? void 0 : options.all) {
    return queryMultiple(element, slotSelector, options);
  }

  return querySingle(element, slotSelector, options);
}

function queryMultiple(element, slotSelector, options) {
  let matches = Array.from(element.querySelectorAll(slotSelector));
  matches = options && options.direct === false ? matches : matches.filter(el => el.parentElement === element);
  const selector = options === null || options === void 0 ? void 0 : options.selector;
  return selector ? matches.map(item => Array.from(item.querySelectorAll(selector))).reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []).filter(match => !!match) : matches;
}

function querySingle(element, slotSelector, options) {
  let match = element.querySelector(slotSelector);
  match = options && options.direct === false ? match : (match === null || match === void 0 ? void 0 : match.parentElement) === element ? match : null;
  const selector = options === null || options === void 0 ? void 0 : options.selector;
  return selector ? match.querySelector(selector) : match;
}

function filterDirectChildren(el, selector) {
  return Array.from(el.children).filter(child => child.matches(selector));
} // set a default icon from a defined set or allow an override with an icon name string


function setRequestedIcon(iconObject, iconValue, matchedValue) {
  if (typeof iconValue === "string" && iconValue !== "") {
    return iconValue;
  } else if (iconValue === "") {
    return iconObject[matchedValue];
  }
}

function intersects(rect1, rect2) {
  return !(rect2.left > rect1.right || rect2.right < rect1.left || rect2.top > rect1.bottom || rect2.bottom < rect1.top);
}



/***/ }),

/***/ 79991:
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/guid.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ guid)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
function gen(counts) {
  return counts
    .map((count) => {
    let out = "";
    for (let i = 0; i < count; i++) {
      out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return out;
  })
    .join("-");
}
const guid = () => gen([2, 1, 1, 1, 3]);




/***/ }),

/***/ 33429:
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/interfaces.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ StatusIcons)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
var StatusIcons;
(function (StatusIcons) {
  StatusIcons["green"] = "checkCircle";
  StatusIcons["yellow"] = "exclamationMarkTriangle";
  StatusIcons["red"] = "exclamationMarkTriangle";
  StatusIcons["blue"] = "lightbulb";
})(StatusIcons || (StatusIcons = {}));




/***/ }),

/***/ 64125:
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/observers.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createObserver)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ 19965);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */


/**
 * This utility ensures observers are created only for browser contexts.
 *
 * @param type - the type of observer to create
 * @param callback - the observer callback
 * @param options - the observer options
 */
function createObserver(type, callback, options) {
  const Observer = getObserver(type);
  return _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser ? new Observer(callback, options) : undefined;
}
function getObserver(type) {
  return (type === "intersection" ? IntersectionObserver : type === "mutation" ? MutationObserver : ResizeObserver);
}




/***/ })

}]);
//# sourceMappingURL=7114.9fb3ea373b4ce38aa2f2.js.map