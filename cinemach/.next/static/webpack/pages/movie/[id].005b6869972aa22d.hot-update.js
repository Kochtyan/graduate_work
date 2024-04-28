"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movie/[id]",{

/***/ "./src/pages/movie/[id]/index.js":
/*!***************************************!*\
  !*** ./src/pages/movie/[id]/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_api_kinopoisk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app/api/kinopoisk */ \"./src/app/api/kinopoisk.js\");\n/* harmony import */ var _app_components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/components/header */ \"./src/app/components/header.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _app_css_movie_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app/css/movie.css */ \"./src/app/css/movie.css\");\n/* harmony import */ var _app_css_movie_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_css_movie_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_assets_icon_kp_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/assets/icon-kp.png */ \"./src/assets/icon-kp.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Movie() {\n    var _movie_rating, _movie_rating1, _movie_rating2, _movie_budget, _movie_budget1;\n    _s();\n    const [movie, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const IMAGE_BASE_URL = \"https://image.tmdb.org/t/p/w500\";\n    const { query } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            if (query.id) {\n                const movieDetails = await (0,_app_api_kinopoisk__WEBPACK_IMPORTED_MODULE_3__.fetchMovieById)(query.id);\n                setMovie(movieDetails);\n                console.log(movieDetails);\n            }\n        };\n        fetchData();\n    }, [\n        query.id\n    ]);\n    const handleMinutesToHours = (minutes)=>{\n        const hours = Math.floor(minutes / 60);\n        const remainingMinutes = minutes % 60;\n        let hoursLabel;\n        let minutesLabel;\n        if (hours % 10 === 1) {\n            hoursLabel = \"час\";\n        } else if (hours % 10 >= 2 && hours % 10 <= 4) {\n            hoursLabel = \"часа\";\n        } else if (hours % 10 >= 5 && hours % 10) {\n            hoursLabel = \"часов\";\n        }\n        if (remainingMinutes % 10 === 1 || remainingMinutes % 10 === 21) {\n            minutesLabel = \"минута\";\n        } else if (remainingMinutes % 10 >= 2 && remainingMinutes % 10 <= 4) {\n            minutesLabel = \"минуты\";\n        } else if (remainingMinutes % 10 >= 5 && remainingMinutes % 10 <= 20) {\n            minutesLabel = \"минут\";\n        }\n        if (hours === 0) {\n            return \"\".concat(remainingMinutes, \" минут\");\n        } else {\n            return \"\".concat(hours, \" \").concat(hoursLabel, \" \").concat(remainingMinutes, \" \").concat(minutesLabel);\n        }\n    };\n    const handleFormattedValue = (value)=>{\n        const formattedValue = value === null || value === void 0 ? void 0 : value.toLocaleString(\"en-US\");\n        return formattedValue;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"movie__container container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    container: true,\n                    spacing: 1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            item: true,\n                            xs: 4,\n                            children: movie.poster && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: movie.poster.url,\n                                alt: \"Постер \".concat(movie.name),\n                                style: {\n                                    maxWidth: \"320px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            item: true,\n                            xs: 6,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"\".concat(movie.name, \" \").concat(movie.year ? \"(\".concat(movie.year, \")\") : \"\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"movie__fast-info\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: movie === null || movie === void 0 ? void 0 : movie.alternativeName\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: movie.ageRating ? \"+\".concat(movie.ageRating) : \"\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: handleMinutesToHours(movie.movieLength)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"movie__ratings\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: _src_assets_icon_kp_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                                    alt: \"\",\n                                                    style: {\n                                                        width: \"10px\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 17\n                                                }, this),\n                                                (_movie_rating = movie.rating) === null || _movie_rating === void 0 ? void 0 : _movie_rating.kp\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: (_movie_rating1 = movie.rating) === null || _movie_rating1 === void 0 ? void 0 : _movie_rating1.imdb\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: (_movie_rating2 = movie.rating) === null || _movie_rating2 === void 0 ? void 0 : _movie_rating2.filmCritics\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                                            lineNumber: 96,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: movie.description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Режиссер:\",\n                                        movie && movie.persons && movie.persons.filter((person)=>person.enProfession === \"director\").sort((a, b)=>a.name.localeCompare(b.name)).map((director)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: [\n                                                    \" \",\n                                                    director.name\n                                                ]\n                                            }, director.id, true, {\n                                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                                                lineNumber: 109,\n                                                columnNumber: 21\n                                            }, this))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"Бюджет: \".concat((_movie_budget = movie.budget) === null || _movie_budget === void 0 ? void 0 : _movie_budget.currency).concat(handleFormattedValue((_movie_budget1 = movie.budget) === null || _movie_budget1 === void 0 ? void 0 : _movie_budget1.value))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"Сборы: \".concat(movie.fees.world.currency).concat(handleFormattedValue(movie.fees.world.value))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\graduate_work\\\\cinemach\\\\src\\\\pages\\\\movie\\\\[id]\\\\index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Movie, \"d9RngrqEcAVSDB7XV7EMzpDznvI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Movie;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQXNDSixPQUE1QmhCLE1BQU0yRCxJQUFJLENBQUNDLEtBQUssQ0FBQ0YsUUFBUSxFQUV2QyxPQUYwQzFDLHFCQUMxQ2hCLE1BQU0yRCxJQUFJLENBQUNDLEtBQUssQ0FBQzNDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEM7R0E1R1NsQjs7UUFLV0wsa0RBQVNBOzs7S0FMcEJLO0FBOEdULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9tb3ZpZS9baWRdL2luZGV4LmpzPzU5ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgZmV0Y2hNb3ZpZUJ5SWQgfSBmcm9tIFwiLi4vLi4vLi4vYXBwL2FwaS9raW5vcG9pc2tcIjtcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2hlYWRlclwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XHJcblxyXG5pbXBvcnQgXCIuLi8uLi8uLi9hcHAvY3NzL21vdmllLmNzc1wiO1xyXG5cclxuaW1wb3J0IGtwTG9nbyBmcm9tIFwiLi4vLi4vLi4vLi4vc3JjL2Fzc2V0cy9pY29uLWtwLnBuZ1wiO1xyXG5cclxuZnVuY3Rpb24gTW92aWUoKSB7XHJcbiAgY29uc3QgW21vdmllLCBzZXRNb3ZpZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vIGNvbnN0IElNQUdFX0JBU0VfVVJMID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwXCI7XHJcblxyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAocXVlcnkuaWQpIHtcclxuICAgICAgICBjb25zdCBtb3ZpZURldGFpbHMgPSBhd2FpdCBmZXRjaE1vdmllQnlJZChxdWVyeS5pZCk7XHJcbiAgICAgICAgc2V0TW92aWUobW92aWVEZXRhaWxzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb3ZpZURldGFpbHMpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtxdWVyeS5pZF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVNaW51dGVzVG9Ib3VycyA9IChtaW51dGVzKSA9PiB7XHJcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcclxuICAgIGNvbnN0IHJlbWFpbmluZ01pbnV0ZXMgPSBtaW51dGVzICUgNjA7XHJcblxyXG4gICAgbGV0IGhvdXJzTGFiZWw7XHJcbiAgICBsZXQgbWludXRlc0xhYmVsO1xyXG5cclxuICAgIGlmIChob3VycyAlIDEwID09PSAxKSB7XHJcbiAgICAgIGhvdXJzTGFiZWwgPSBcItGH0LDRgVwiO1xyXG4gICAgfSBlbHNlIGlmIChob3VycyAlIDEwID49IDIgJiYgaG91cnMgJSAxMCA8PSA0KSB7XHJcbiAgICAgIGhvdXJzTGFiZWwgPSBcItGH0LDRgdCwXCI7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXJzICUgMTAgPj0gNSAmJiBob3VycyAlIDEwKSB7XHJcbiAgICAgIGhvdXJzTGFiZWwgPSBcItGH0LDRgdC+0LJcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVtYWluaW5nTWludXRlcyAlIDEwID09PSAxIHx8IHJlbWFpbmluZ01pbnV0ZXMgJSAxMCA9PT0gMjEpIHtcclxuICAgICAgbWludXRlc0xhYmVsID0gXCLQvNC40L3Rg9GC0LBcIjtcclxuICAgIH0gZWxzZSBpZiAocmVtYWluaW5nTWludXRlcyAlIDEwID49IDIgJiYgcmVtYWluaW5nTWludXRlcyAlIDEwIDw9IDQpIHtcclxuICAgICAgbWludXRlc0xhYmVsID0gXCLQvNC40L3Rg9GC0YtcIjtcclxuICAgIH0gZWxzZSBpZiAocmVtYWluaW5nTWludXRlcyAlIDEwID49IDUgJiYgcmVtYWluaW5nTWludXRlcyAlIDEwIDw9IDIwKSB7XHJcbiAgICAgIG1pbnV0ZXNMYWJlbCA9IFwi0LzQuNC90YPRglwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChob3VycyA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gYCR7cmVtYWluaW5nTWludXRlc30g0LzQuNC90YPRgmA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gYCR7aG91cnN9ICR7aG91cnNMYWJlbH0gJHtyZW1haW5pbmdNaW51dGVzfSAke21pbnV0ZXNMYWJlbH1gO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1hdHRlZFZhbHVlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWRWYWx1ZSA9IHZhbHVlPy50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIpO1xyXG4gICAgcmV0dXJuIGZvcm1hdHRlZFZhbHVlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWVfX2NvbnRhaW5lciBjb250YWluZXJcIj5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAge21vdmllLnBvc3RlciAmJiAoXHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXttb3ZpZS5wb3N0ZXIudXJsfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtg0J/QvtGB0YLQtdGAICR7bW92aWUubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgPGgxPntgJHttb3ZpZS5uYW1lfSAke21vdmllLnllYXIgPyBgKCR7bW92aWUueWVhcn0pYCA6IFwiXCJ9YH08L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllX19mYXN0LWluZm9cIj5cclxuICAgICAgICAgICAgICA8c3Bhbj57bW92aWU/LmFsdGVybmF0aXZlTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e21vdmllLmFnZVJhdGluZyA/IGArJHttb3ZpZS5hZ2VSYXRpbmd9YCA6IGBgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj57aGFuZGxlTWludXRlc1RvSG91cnMobW92aWUubW92aWVMZW5ndGgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWVfX3JhdGluZ3NcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtrcExvZ299IGFsdD1cIlwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwcHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAge21vdmllLnJhdGluZz8ua3B9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnttb3ZpZS5yYXRpbmc/LmltZGJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnttb3ZpZS5yYXRpbmc/LmZpbG1Dcml0aWNzfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHA+e21vdmllLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAg0KDQtdC20LjRgdGB0LXRgDpcclxuICAgICAgICAgICAgICB7bW92aWUgJiZcclxuICAgICAgICAgICAgICAgIG1vdmllLnBlcnNvbnMgJiZcclxuICAgICAgICAgICAgICAgIG1vdmllLnBlcnNvbnNcclxuICAgICAgICAgICAgICAgICAgLmZpbHRlcigocGVyc29uKSA9PiBwZXJzb24uZW5Qcm9mZXNzaW9uID09PSBcImRpcmVjdG9yXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKVxyXG4gICAgICAgICAgICAgICAgICAubWFwKChkaXJlY3RvcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17ZGlyZWN0b3IuaWR9PiB7ZGlyZWN0b3IubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj57YNCR0Y7QtNC20LXRgjogJHttb3ZpZS5idWRnZXQ/LmN1cnJlbmN5fSR7aGFuZGxlRm9ybWF0dGVkVmFsdWUoXHJcbiAgICAgICAgICAgICAgbW92aWUuYnVkZ2V0Py52YWx1ZVxyXG4gICAgICAgICAgICApfWB9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e2DQodCx0L7RgNGLOiAke21vdmllLmZlZXMud29ybGQuY3VycmVuY3l9JHtoYW5kbGVGb3JtYXR0ZWRWYWx1ZShcclxuICAgICAgICAgICAgICBtb3ZpZS5mZWVzLndvcmxkLnZhbHVlXHJcbiAgICAgICAgICAgICl9YH08L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImZldGNoTW92aWVCeUlkIiwiSGVhZGVyIiwiR3JpZCIsImtwTG9nbyIsIk1vdmllIiwibW92aWUiLCJzZXRNb3ZpZSIsInF1ZXJ5IiwiZmV0Y2hEYXRhIiwiaWQiLCJtb3ZpZURldGFpbHMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTWludXRlc1RvSG91cnMiLCJtaW51dGVzIiwiaG91cnMiLCJNYXRoIiwiZmxvb3IiLCJyZW1haW5pbmdNaW51dGVzIiwiaG91cnNMYWJlbCIsIm1pbnV0ZXNMYWJlbCIsImhhbmRsZUZvcm1hdHRlZFZhbHVlIiwidmFsdWUiLCJmb3JtYXR0ZWRWYWx1ZSIsInRvTG9jYWxlU3RyaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwic3BhY2luZyIsIml0ZW0iLCJ4cyIsInBvc3RlciIsImltZyIsInNyYyIsInVybCIsImFsdCIsIm5hbWUiLCJzdHlsZSIsIm1heFdpZHRoIiwiaDEiLCJ5ZWFyIiwic3BhbiIsImFsdGVybmF0aXZlTmFtZSIsImFnZVJhdGluZyIsIm1vdmllTGVuZ3RoIiwid2lkdGgiLCJyYXRpbmciLCJrcCIsImltZGIiLCJmaWxtQ3JpdGljcyIsInAiLCJkZXNjcmlwdGlvbiIsInBlcnNvbnMiLCJmaWx0ZXIiLCJwZXJzb24iLCJlblByb2Zlc3Npb24iLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwibWFwIiwiZGlyZWN0b3IiLCJidWRnZXQiLCJjdXJyZW5jeSIsImZlZXMiLCJ3b3JsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/movie/[id]/index.js\n"));

/***/ })

});