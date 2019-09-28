export const Types = {
  GET_VIDEO: 'getVideo/GET_VIDEO',
  GET_VIDEO_SUCCESS: 'getVideo/GET_VIDEO_SUCCESS',
  GET_VIDEO_ERROR: 'getVideo/GET_VIDEO_ERROR'
}

const INITIAL_STATE = {
  data: [],
  loading: true,
  response: {},
  id: ''
}

export default function video(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_VIDEO:
      return {
        ...state,
        data: [],
        loading: true,
        id: action.payload.id
      }
    case Types.GET_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      }
    case Types.GET_VIDEO_ERROR:
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
  getVideo: payload => ({
    type: Types.GET_VIDEO,
    payload
  }),
  getVideoSuccess: data => ({
    type: Types.GET_VIDEO_SUCCESS,
    payload: { data }
  }),
  getVideoError: response => ({
    type: Types.GET_VIDEO_ERROR,
    payload: { response }
  })
}
