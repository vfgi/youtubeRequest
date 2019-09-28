export const Types = {
  GET_LIST: 'getList/GET_LIST',
  ADD_LIST: 'addList/ADD_LIST',
  ADD_LIST_SUCCESS: 'addList/ADD_LIST_SUCCESS',
  GET_LIST_SUCCESS: 'getList/GET_LIST_SUCCESS',
  GET_LIST_ERROR: 'getList/GET_LIST_ERROR'
}

const INITIAL_STATE = {
  data: [],
  loading: true,
  response: {},
  query: '',
  nextPage: ''
}

export default function list(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_LIST:
      return {
        ...state,
        data: [],
        loading: true,
        query: action.payload.query
      }
    case Types.ADD_LIST:
      return {
        ...state,
        query: action.payload.query,
        nextPage: action.payload.nextPage
      }
    case Types.ADD_LIST_SUCCESS:
      console.log(state.data.items)
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload.data]
      }
    case Types.GET_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      }
    case Types.GET_LIST_ERROR:
      return {
        ...state,
        loading: false,
        response: action.payload.response
      }
    default:
      return state
  }
}

export const Creators = {
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
    payload: { data }
  }),
  getListSuccess: data => ({
    type: Types.GET_LIST_SUCCESS,
    payload: { data }
  }),
  getListError: response => ({
    type: Types.GET_LIST_ERROR,
    payload: { response }
  })
}
