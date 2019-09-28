import { combineReducers } from 'redux'

import list from './getList'
import video from './getVideo'

export default combineReducers({
  list,
  video
})
