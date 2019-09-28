webpackHotUpdate("main",{

/***/ "./src/store/ducks/getList.js":
/*!************************************!*\
  !*** ./src/store/ducks/getList.js ***!
  \************************************/
/*! exports provided: Types, default, Creators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Types", function() { return Types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Creators", function() { return Creators; });
/* harmony import */ var _home_vitor_Documentos_cursos_testIcasei_icasei2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var rxjs_internal_scheduler_Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/scheduler/Action */ "./node_modules/rxjs/internal/scheduler/Action.js");
/* harmony import */ var rxjs_internal_scheduler_Action__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_scheduler_Action__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_home_vitor_Documentos_cursos_testIcasei_icasei2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


const Types = {
  GET_LIST: 'getList/GET_LIST',
  ADD_LIST: 'getList/ADD_LIST',
  GET_LIST_SUCCESS: 'getList/GET_LIST_SUCCESS',
  GET_LIST_ERROR: 'getList/GET_LIST_ERROR'
};
const INITIAL_STATE = {
  data: [],
  loading: true,
  response: {},
  query: '',
  nextPage: ''
};
function list(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_LIST:
      return _objectSpread({}, state, {
        data: [],
        loading: true,
        query: action.payload.query
      });

    case Types.ADD_LIST:
      return _objectSpread({}, state, {
        query: action.payload.query,
        nextPage: action.payload.nextPage
      });

    case Types.ADD_LIST_SUCCESS:
      console.log(...state.data);
      return _objectSpread({}, state, {
        loading: false,
        data: [...state.data, action.payload.data]
      });

    case Types.GET_LIST_SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        data: action.payload.data
      });

    case Types.GET_LIST_ERROR:
      return _objectSpread({}, state, {
        loading: false,
        response: action.payload.response
      });

    default:
      return state;
  }
}
const Creators = {
  getList: payload => ({
    type: Types.GET_LIST,
    payload
  }),
  addList: payload => ({
    type: Types.ADD_LIST,
    payload
  }),
  addListSuccess: data => ({
    type: Types.ADD_LIST_SUCCESS,
    payload: {
      data
    }
  }),
  getListSuccess: data => ({
    type: Types.GET_LIST_SUCCESS,
    payload: {
      data
    }
  }),
  getListError: response => ({
    type: Types.GET_LIST_ERROR,
    payload: {
      response
    }
  })
};

/***/ })

})
//# sourceMappingURL=main.2278af0357fb0b94179c.hot-update.js.map