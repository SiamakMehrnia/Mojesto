/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./components/Navbat.js":
/*!******************************!*\
  !*** ./components/Navbat.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"react-scroll\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Menu,X!=!lucide-react */ \"(pages-dir-node)/__barrel_optimize__?names=Menu,X!=!./node_modules/lucide-react/dist/esm/lucide-react.js\");\n// components/Navbar.jsx\n\n\n\n\nfunction Navbar() {\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleMenu = ()=>setIsOpen(!isOpen);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Navbar.useEffect\": ()=>{\n            const handleScroll = {\n                \"Navbar.useEffect.handleScroll\": ()=>{\n                    if (window.scrollY > 50) {\n                        setScrolled(true);\n                    } else {\n                        setScrolled(false);\n                    }\n                }\n            }[\"Navbar.useEffect.handleScroll\"];\n            window.addEventListener(\"scroll\", handleScroll);\n            return ({\n                \"Navbar.useEffect\": ()=>window.removeEventListener(\"scroll\", handleScroll)\n            })[\"Navbar.useEffect\"];\n        }\n    }[\"Navbar.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: `fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? \"bg-white shadow-lg opacity-100\" : \"bg-transparent opacity-0\"}`,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center p-3 md:p-4 max-w-6xl mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-2xl md:text-3xl font-extrabold text-black animate-bounce-slow cursor-pointer\",\n                        children: \"Mojesto\"\n                    }, void 0, false, {\n                        fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/components/Navbat.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden md:flex space-x-8 text-md font-medium\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"home\",\n                                smooth: true,\n                                duration: 500,\n                                className: \"cursor-pointer hover:text-gray-500\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/components/Navbat.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"team\",\n                                smooth: true,\n                                duration: 500,\n                                className: \"cursor-pointer hover:text-gray-500\",\n                                children: \"Team\"\n                            }, void 0, false, {\n                                fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/components/Navbat.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"products\",\n                                smooth: true,\n                                duration: 500,\n                                className: \"cursor-pointer hover:text-gray-500\",\n                                children: \"Products\"\n                            }, void 0, false, {\n                                fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/components/Navbat.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"contact\",\n                                smooth: true,\n                                duration: 500,\n                                className: \"cursor-pointer hover:text-gray-500\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/components/Navbat.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/components/Navbat.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: toggleMenu,\n                            children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_3__.X, {\n                                size: 28\n                            }, void 0, false, {\n                                fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/components/Navbat.js\",\n                                lineNumber: 76,\n                                columnNumber: 23\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                                size: 28\n                            }, void 0, false, {\n                                fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/components/Navbat.js\",\n                                lineNumber: 76,\n                                columnNumber: 41\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/components/Navbat.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/components/Navbat.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/components/Navbat.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:hidden bg-white border-t border-gray-300 shadow-lg animate-slide-down flex flex-col items-center space-y-6 py-6 px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        onClick: toggleMenu,\n                        to: \"home\",\n                        smooth: true,\n                        duration: 500,\n                        className: \"cursor-pointer hover:text-gray-500 text-lg font-medium\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/components/Navbat.js\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        onClick: toggleMenu,\n                        to: \"team\",\n                        smooth: true,\n                        duration: 500,\n                        className: \"cursor-pointer hover:text-gray-500 text-lg font-medium\",\n                        children: \"Team\"\n                    }, void 0, false, {\n                        fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/components/Navbat.js\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        onClick: toggleMenu,\n                        to: \"products\",\n                        smooth: true,\n                        duration: 500,\n                        className: \"cursor-pointer hover:text-gray-500 text-lg font-medium\",\n                        children: \"Products\"\n                    }, void 0, false, {\n                        fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/components/Navbat.js\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        onClick: toggleMenu,\n                        to: \"contact\",\n                        smooth: true,\n                        duration: 500,\n                        className: \"cursor-pointer hover:text-gray-500 text-lg font-medium\",\n                        children: \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/components/Navbat.js\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/components/Navbat.js\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/components/Navbat.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTmF2YmF0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXdCOztBQUNvQjtBQUNSO0FBQ0c7QUFFeEIsU0FBU0s7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNVSxhQUFhLElBQU1ILFVBQVUsQ0FBQ0Q7SUFFcENMLGdEQUFTQTs0QkFBQztZQUNSLE1BQU1VO2lEQUFlO29CQUNuQixJQUFJQyxPQUFPQyxPQUFPLEdBQUcsSUFBSTt3QkFDdkJKLFlBQVk7b0JBQ2QsT0FBTzt3QkFDTEEsWUFBWTtvQkFDZDtnQkFDRjs7WUFFQUcsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7WUFDbEM7b0NBQU8sSUFBTUMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7O1FBQ3BEOzJCQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0s7UUFDQ0MsV0FBVyxDQUFDLGdFQUFnRSxFQUMxRVQsV0FBVyxtQ0FBbUMsNEJBQzlDOzswQkFFRiw4REFBQ1U7Z0JBQUlELFdBQVU7O2tDQUViLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FBb0Y7Ozs7OztrQ0FLbkcsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ2YsOENBQUlBO2dDQUNIaUIsSUFBRztnQ0FDSEMsUUFBUTtnQ0FDUkMsVUFBVTtnQ0FDVkosV0FBVTswQ0FDWDs7Ozs7OzBDQUdELDhEQUFDZiw4Q0FBSUE7Z0NBQ0hpQixJQUFHO2dDQUNIQyxRQUFRO2dDQUNSQyxVQUFVO2dDQUNWSixXQUFVOzBDQUNYOzs7Ozs7MENBR0QsOERBQUNmLDhDQUFJQTtnQ0FDSGlCLElBQUc7Z0NBQ0hDLFFBQVE7Z0NBQ1JDLFVBQVU7Z0NBQ1ZKLFdBQVU7MENBQ1g7Ozs7OzswQ0FHRCw4REFBQ2YsOENBQUlBO2dDQUNIaUIsSUFBRztnQ0FDSEMsUUFBUTtnQ0FDUkMsVUFBVTtnQ0FDVkosV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7O2tDQU1ILDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0s7NEJBQU9DLFNBQVNiO3NDQUNkSix1QkFBUyw4REFBQ0YseUVBQUNBO2dDQUFDb0IsTUFBTTs7Ozs7cURBQVMsOERBQUNyQiw0RUFBSUE7Z0NBQUNxQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTTdDbEIsd0JBQ0MsOERBQUNZO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ2YsOENBQUlBO3dCQUNIcUIsU0FBU2I7d0JBQ1RTLElBQUc7d0JBQ0hDLFFBQVE7d0JBQ1JDLFVBQVU7d0JBQ1ZKLFdBQVU7a0NBQ1g7Ozs7OztrQ0FHRCw4REFBQ2YsOENBQUlBO3dCQUNIcUIsU0FBU2I7d0JBQ1RTLElBQUc7d0JBQ0hDLFFBQVE7d0JBQ1JDLFVBQVU7d0JBQ1ZKLFdBQVU7a0NBQ1g7Ozs7OztrQ0FHRCw4REFBQ2YsOENBQUlBO3dCQUNIcUIsU0FBU2I7d0JBQ1RTLElBQUc7d0JBQ0hDLFFBQVE7d0JBQ1JDLFVBQVU7d0JBQ1ZKLFdBQVU7a0NBQ1g7Ozs7OztrQ0FHRCw4REFBQ2YsOENBQUlBO3dCQUNIcUIsU0FBU2I7d0JBQ1RTLElBQUc7d0JBQ0hDLFFBQVE7d0JBQ1JDLFVBQVU7d0JBQ1ZKLFdBQVU7a0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YIiwic291cmNlcyI6WyIvVXNlcnMvc2lhbWFrL0Rlc2t0b3AvcHJvZ3JhbWluZy9Nb2plc3RvL21vamVzdG9wai9jb21wb25lbnRzL05hdmJhdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL05hdmJhci5qc3hcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5pbXBvcnQgeyBNZW51LCBYIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiA1MCkge1xuICAgICAgICBzZXRTY3JvbGxlZCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNjcm9sbGVkKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdlxuICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTAgdy1mdWxsIHotNTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0ICR7XG4gICAgICAgIHNjcm9sbGVkID8gXCJiZy13aGl0ZSBzaGFkb3ctbGcgb3BhY2l0eS0xMDBcIiA6IFwiYmctdHJhbnNwYXJlbnQgb3BhY2l0eS0wXCJcbiAgICAgIH1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtMyBtZDpwLTQgbWF4LXctNnhsIG14LWF1dG9cIj5cbiAgICAgICAgey8qIExvZ28gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdGV4dC1ibGFjayBhbmltYXRlLWJvdW5jZS1zbG93IGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgTW9qZXN0b1xuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogRGVza3RvcCBNZW51ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IHNwYWNlLXgtOCB0ZXh0LW1kIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIHRvPVwiaG9tZVwiXG4gICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1ncmF5LTUwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgdG89XCJ0ZWFtXCJcbiAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBUZWFtXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICB0bz1cInByb2R1Y3RzXCJcbiAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBQcm9kdWN0c1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgdG89XCJjb250YWN0XCJcbiAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTW9iaWxlIE1lbnUgQnV0dG9uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmhpZGRlblwiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlTWVudX0+XG4gICAgICAgICAgICB7aXNPcGVuID8gPFggc2l6ZT17Mjh9IC8+IDogPE1lbnUgc2l6ZT17Mjh9IC8+fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTW9iaWxlIE1lbnUgKi99XG4gICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW4gYmctd2hpdGUgYm9yZGVyLXQgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1sZyBhbmltYXRlLXNsaWRlLWRvd24gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgc3BhY2UteS02IHB5LTYgcHgtNFwiPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNZW51fVxuICAgICAgICAgICAgdG89XCJob21lXCJcbiAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWdyYXktNTAwIHRleHQtbGcgZm9udC1tZWRpdW1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9XG4gICAgICAgICAgICB0bz1cInRlYW1cIlxuICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtZ3JheS01MDAgdGV4dC1sZyBmb250LW1lZGl1bVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVGVhbVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTWVudX1cbiAgICAgICAgICAgIHRvPVwicHJvZHVjdHNcIlxuICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtZ3JheS01MDAgdGV4dC1sZyBmb250LW1lZGl1bVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUHJvZHVjdHNcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9XG4gICAgICAgICAgICB0bz1cImNvbnRhY3RcIlxuICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtZ3JheS01MDAgdGV4dC1sZyBmb250LW1lZGl1bVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvbmF2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIk1lbnUiLCJYIiwiTmF2YmFyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGxlZCIsInRvZ2dsZU1lbnUiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJ0byIsInNtb290aCIsImR1cmF0aW9uIiwiYnV0dG9uIiwib25DbGljayIsInNpemUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Navbat.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbat */ \"(pages-dir-node)/./components/Navbat.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos/dist/aos.css */ \"(pages-dir-node)/./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n// pages/_app.js\n\n // ✅ مسیر درست رو چک کن\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)({\n        \"App.useEffect\": ()=>{\n            aos__WEBPACK_IMPORTED_MODULE_4___default().init({\n                duration: 800,\n                easing: 'ease-in-out',\n                once: true\n            });\n        }\n    }[\"App.useEffect\"], []);\n    const isAdminRoute = router.pathname.startsWith(\"/adminPanel\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-black\",\n        children: [\n            !isAdminRoute && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbat__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/pages/_app.js\",\n                lineNumber: 24,\n                columnNumber: 25\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: !isAdminRoute ? \"pt-20\" : \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/pages/_app.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/pages/_app.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/siamak/Desktop/programing/Mojesto/mojestopj/pages/_app.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQkFBZ0I7O0FBQzBCLENBQUMsdUJBQXVCO0FBQ3BDO0FBQ0o7QUFDSjtBQUNZO0FBQ007QUFFekIsU0FBU0ksSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxNQUFNQyxTQUFTSixzREFBU0E7SUFFeEJELGdEQUFTQTt5QkFBQztZQUNSRCwrQ0FBUSxDQUFDO2dCQUNQUSxVQUFVO2dCQUNWQyxRQUFRO2dCQUNSQyxNQUFNO1lBQ1I7UUFDRjt3QkFBRyxFQUFFO0lBRUwsTUFBTUMsZUFBZUwsT0FBT00sUUFBUSxDQUFDQyxVQUFVLENBQUM7SUFFaEQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7O1lBQ1osQ0FBQ0osOEJBQWdCLDhEQUFDWiwwREFBTUE7Ozs7OzBCQUN6Qiw4REFBQ2lCO2dCQUFLRCxXQUFXLENBQUNKLGVBQWUsVUFBVTswQkFDekMsNEVBQUNQO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDIiwic291cmNlcyI6WyIvVXNlcnMvc2lhbWFrL0Rlc2t0b3AvcHJvZ3JhbWluZy9Nb2plc3RvL21vamVzdG9wai9wYWdlcy9fYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL19hcHAuanNcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmF0XCI7IC8vIOKchSDZhdiz24zYsSDYr9ix2LPYqiDYsdmIINqG2qkg2qnZhlxuaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQU9TLmluaXQoe1xuICAgICAgZHVyYXRpb246IDgwMCxcbiAgICAgIGVhc2luZzogJ2Vhc2UtaW4tb3V0JyxcbiAgICAgIG9uY2U6IHRydWUsXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBpc0FkbWluUm91dGUgPSByb3V0ZXIucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9hZG1pblBhbmVsXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFja1wiPlxuICAgICAgeyFpc0FkbWluUm91dGUgJiYgPE5hdmJhciAvPn1cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17IWlzQWRtaW5Sb3V0ZSA/IFwicHQtMjBcIiA6IFwiXCJ9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiQU9TIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaW5pdCIsImR1cmF0aW9uIiwiZWFzaW5nIiwib25jZSIsImlzQWRtaW5Sb3V0ZSIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=Menu,X!=!./node_modules/lucide-react/dist/esm/lucide-react.js":
/*!***********************************************************************************************!*\
  !*** __barrel_optimize__?names=Menu,X!=!./node_modules/lucide-react/dist/esm/lucide-react.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: () => (/* reexport safe */ _icons_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   X: () => (/* reexport safe */ _icons_x_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _icons_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/menu.js */ \"(pages-dir-node)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _icons_x_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/x.js */ \"(pages-dir-node)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS9fX2JhcnJlbF9vcHRpbWl6ZV9fP25hbWVzPU1lbnUsWCE9IS4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9sdWNpZGUtcmVhY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDaUQiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWFtYWsvRGVza3RvcC9wcm9ncmFtaW5nL01vamVzdG8vbW9qZXN0b3BqL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vbHVjaWRlLXJlYWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZW51IH0gZnJvbSBcIi4vaWNvbnMvbWVudS5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFggfSBmcm9tIFwiLi9pY29ucy94LmpzXCIiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/__barrel_optimize__?names=Menu,X!=!./node_modules/lucide-react/dist/esm/lucide-react.js\n");

/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/lucide-react","vendor-chunks/aos"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();