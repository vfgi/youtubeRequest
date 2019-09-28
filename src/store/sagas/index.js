import { all, takeLatest } from 'redux-saga/effects'

import { Types as GetListTypes } from '../ducks/getList'
import { Types as GetVideoTypes } from '../ducks/getVideo'

import { getList } from './getList'
import { addList } from './getList'
import { getVideo } from './getVideo'

export default function* rootSaga() {
  yield all([
    takeLatest(GetListTypes.GET_LIST, getList),
    takeLatest(GetListTypes.ADD_LIST, addList),
    takeLatest(GetVideoTypes.GET_VIDEO, getVideo)
  ])
}
