import { call, put } from 'redux-saga/effects'
import { youtubeApi } from '../../services/api'
import querystring from 'querystring'

import { Creators as VideoActions } from '../ducks/getVideo'

export function* getVideo(action) {
  try {
    const qs = querystring.stringify({
      id: action.payload.id,
      part: 'snippet,statistics',
      key: 'AIzaSyA7IclksrAGwfIC-FrQq5cUFiyLndQrsNw'
    })
    const response = yield call(youtubeApi.get, `/videos?${qs}`)
    yield put(VideoActions.getVideoSuccess(response.data))
  } catch (err) {
    console.log(err)
  }
}
