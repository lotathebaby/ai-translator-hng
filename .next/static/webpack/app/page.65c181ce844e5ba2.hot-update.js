"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Message.tsx":
/*!********************************!*\
  !*** ./components/Message.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Message)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst translateText = async (text, target)=>{\n    var _window_chrome_ai, _window_chrome;\n    const chromeAI = (_window_chrome = window.chrome) === null || _window_chrome === void 0 ? void 0 : (_window_chrome_ai = _window_chrome.ai) === null || _window_chrome_ai === void 0 ? void 0 : _window_chrome_ai.translator;\n    if (!chromeAI) {\n        console.error(\"Chrome AI APIs are not available. Using fallback translation service.\");\n        // Fallback translation logic\n        return \"Fallback translation service not configured.\";\n    }\n    try {\n        const result = await chromeAI.translate({\n            text,\n            targetLang: target\n        });\n        return result.translation;\n    } catch (error) {\n        console.error(\"Chrome AI translation error:\", error);\n        return \"Translation failed.\";\n    }\n};\nfunction Message(param) {\n    let { text } = param;\n    _s();\n    const [translation, setTranslation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [targetLang, setTargetLang] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"en\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-3 my-2 bg-blue-100 rounded-lg shadow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: text\n            }, void 0, false, {\n                fileName: \"/Users/lotanna/Documents/HNG12/stage3/components/Message.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                value: targetLang,\n                onChange: (e)=>setTargetLang(e.target.value),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"en\",\n                        children: \"English\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lotanna/Documents/HNG12/stage3/components/Message.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"pt\",\n                        children: \"Portuguese\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lotanna/Documents/HNG12/stage3/components/Message.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"es\",\n                        children: \"Spanish\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lotanna/Documents/HNG12/stage3/components/Message.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"ru\",\n                        children: \"Russian\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lotanna/Documents/HNG12/stage3/components/Message.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"tr\",\n                        children: \"Turkish\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lotanna/Documents/HNG12/stage3/components/Message.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"fr\",\n                        children: \"French\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lotanna/Documents/HNG12/stage3/components/Message.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lotanna/Documents/HNG12/stage3/components/Message.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"text-blue-500\",\n                onClick: async ()=>setTranslation(await translateText(text, targetLang)),\n                children: \"Translate\"\n            }, void 0, false, {\n                fileName: \"/Users/lotanna/Documents/HNG12/stage3/components/Message.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this),\n            translation && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm text-gray-700\",\n                children: [\n                    \"Translated: \",\n                    translation\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lotanna/Documents/HNG12/stage3/components/Message.tsx\",\n                lineNumber: 47,\n                columnNumber: 25\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lotanna/Documents/HNG12/stage3/components/Message.tsx\",\n        lineNumber: 31,\n        columnNumber: 7\n    }, this);\n}\n_s(Message, \"4XIHJIBZ31oLnJyd8JNgubcqxxU=\");\n_c = Message;\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTWVzc2FnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBRTVDLE1BQU1DLGdCQUFnQixPQUFPQyxNQUFjQztRQUN4QjtJQUFqQixNQUFNQyxZQUFXLHdCQUFnQkUsTUFBTSxjQUF0Qix5RUFBd0JDLEVBQUUsY0FBMUIsMERBQTRCQyxVQUFVO0lBRXZELElBQUksQ0FBQ0osVUFBVTtRQUNiSyxRQUFRQyxLQUFLLENBQUM7UUFFZCw2QkFBNkI7UUFDN0IsT0FBTztJQUNUO0lBRUEsSUFBSTtRQUNGLE1BQU1DLFNBQVMsTUFBTVAsU0FBU1EsU0FBUyxDQUFDO1lBQUVWO1lBQU1XLFlBQVlWO1FBQU87UUFDbkUsT0FBT1EsT0FBT0csV0FBVztJQUMzQixFQUFFLE9BQU9KLE9BQU87UUFDZEQsUUFBUUMsS0FBSyxDQUFDLGdDQUFnQ0E7UUFDOUMsT0FBTztJQUNUO0FBQ0Y7QUFNaUIsU0FBU0ssUUFBUSxLQUEwQjtRQUExQixFQUFFYixJQUFJLEVBQW9CLEdBQTFCOztJQUM5QixNQUFNLENBQUNZLGFBQWFFLGVBQWUsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2EsWUFBWUksY0FBYyxHQUFHakIsK0NBQVFBLENBQUM7SUFFN0MscUJBQ0UsOERBQUNrQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUdsQjs7Ozs7OzBCQUNKLDhEQUFDbUI7Z0JBQU9DLE9BQU9UO2dCQUFZVSxVQUFVLENBQUNDLElBQU1QLGNBQWNPLEVBQUVyQixNQUFNLENBQUNtQixLQUFLOztrQ0FDdEUsOERBQUNHO3dCQUFPSCxPQUFNO2tDQUFLOzs7Ozs7a0NBQ25CLDhEQUFDRzt3QkFBT0gsT0FBTTtrQ0FBSzs7Ozs7O2tDQUNuQiw4REFBQ0c7d0JBQU9ILE9BQU07a0NBQUs7Ozs7OztrQ0FDbkIsOERBQUNHO3dCQUFPSCxPQUFNO2tDQUFLOzs7Ozs7a0NBQ25CLDhEQUFDRzt3QkFBT0gsT0FBTTtrQ0FBSzs7Ozs7O2tDQUNuQiw4REFBQ0c7d0JBQU9ILE9BQU07a0NBQUs7Ozs7Ozs7Ozs7OzswQkFFckIsOERBQUNJO2dCQUNDUCxXQUFVO2dCQUNWUSxTQUFTLFVBQVlYLGVBQWUsTUFBTWYsY0FBY0MsTUFBTVc7MEJBQy9EOzs7Ozs7WUFHQUMsNkJBQWUsOERBQUNNO2dCQUFFRCxXQUFVOztvQkFBd0I7b0JBQWFMOzs7Ozs7Ozs7Ozs7O0FBR3hFO0dBeEJ3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3Rhbm5hL0RvY3VtZW50cy9ITkcxMi9zdGFnZTMvY29tcG9uZW50cy9NZXNzYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHRyYW5zbGF0ZVRleHQgPSBhc3luYyAodGV4dDogc3RyaW5nLCB0YXJnZXQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBjaHJvbWVBSSA9ICh3aW5kb3cgYXMgYW55KS5jaHJvbWU/LmFpPy50cmFuc2xhdG9yO1xuICBcbiAgaWYgKCFjaHJvbWVBSSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJDaHJvbWUgQUkgQVBJcyBhcmUgbm90IGF2YWlsYWJsZS4gVXNpbmcgZmFsbGJhY2sgdHJhbnNsYXRpb24gc2VydmljZS5cIik7XG4gICAgXG4gICAgLy8gRmFsbGJhY2sgdHJhbnNsYXRpb24gbG9naWNcbiAgICByZXR1cm4gXCJGYWxsYmFjayB0cmFuc2xhdGlvbiBzZXJ2aWNlIG5vdCBjb25maWd1cmVkLlwiO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaHJvbWVBSS50cmFuc2xhdGUoeyB0ZXh0LCB0YXJnZXRMYW5nOiB0YXJnZXQgfSk7XG4gICAgcmV0dXJuIHJlc3VsdC50cmFuc2xhdGlvbjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiQ2hyb21lIEFJIHRyYW5zbGF0aW9uIGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFwiVHJhbnNsYXRpb24gZmFpbGVkLlwiO1xuICB9XG59O1xuXG5cblxuXG4gIFxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXNzYWdlKHsgdGV4dCB9OiB7IHRleHQ6IHN0cmluZyB9KSB7XG4gICAgY29uc3QgW3RyYW5zbGF0aW9uLCBzZXRUcmFuc2xhdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbdGFyZ2V0TGFuZywgc2V0VGFyZ2V0TGFuZ10gPSB1c2VTdGF0ZShcImVuXCIpO1xuICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgbXktMiBiZy1ibHVlLTEwMCByb3VuZGVkLWxnIHNoYWRvd1wiPlxuICAgICAgICA8cD57dGV4dH08L3A+XG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e3RhcmdldExhbmd9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGFyZ2V0TGFuZyhlLnRhcmdldC52YWx1ZSl9PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlblwiPkVuZ2xpc2g8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHRcIj5Qb3J0dWd1ZXNlPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVzXCI+U3BhbmlzaDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJydVwiPlJ1c3NpYW48L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidHJcIj5UdXJraXNoPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZyXCI+RnJlbmNoPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiXG4gICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4gc2V0VHJhbnNsYXRpb24oYXdhaXQgdHJhbnNsYXRlVGV4dCh0ZXh0LCB0YXJnZXRMYW5nKSl9XG4gICAgICAgID5cbiAgICAgICAgICBUcmFuc2xhdGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHt0cmFuc2xhdGlvbiAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj5UcmFuc2xhdGVkOiB7dHJhbnNsYXRpb259PC9wPn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidHJhbnNsYXRlVGV4dCIsInRleHQiLCJ0YXJnZXQiLCJjaHJvbWVBSSIsIndpbmRvdyIsImNocm9tZSIsImFpIiwidHJhbnNsYXRvciIsImNvbnNvbGUiLCJlcnJvciIsInJlc3VsdCIsInRyYW5zbGF0ZSIsInRhcmdldExhbmciLCJ0cmFuc2xhdGlvbiIsIk1lc3NhZ2UiLCJzZXRUcmFuc2xhdGlvbiIsInNldFRhcmdldExhbmciLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJvcHRpb24iLCJidXR0b24iLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Message.tsx\n"));

/***/ })

});