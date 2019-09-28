import { call, put } from 'redux-saga/effects'
import { youtubeApi } from '../../services/api'
import querystring from 'querystring'

import { Creators as ListActions } from '../ducks/getList'

export function* getList(action) {
  try {
    const qs = querystring.stringify({
      q: action.payload.query,
      key: 'AIzaSyA7IclksrAGwfIC-FrQq5cUFiyLndQrsNw'
    })
    const response = yield call(youtubeApi.get, `/search?part=id,snippet&maxResults=20&${qs}`)
    yield put(ListActions.getListSuccess(response.data))
  } catch (err) {
    console.log(err)
  }
}

export function* addList(action) {
  try {
    const qs = querystring.stringify({
      pageToken: action.payload.nextPage,
      q: action.payload.query,
      type: 'video',
      key: 'AIzaSyA7IclksrAGwfIC-FrQq5cUFiyLndQrsNw'
    })
    const response = yield call(
      youtubeApi.get,
      `/search?part=snippet&maxResults=10&order=viewCount&${qs}`
    )
    yield put(ListActions.addListSuccess(response.data))
  } catch (err) {
    console.log(err)
  }
}
