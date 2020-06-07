import {takeLatest,put} from 'redux-saga/effects';
import {GET_IMAGE, setImage} from "../component/Modal/saga-action";


function * fetchImageUrl({image}) {
  yield put(setImage(image));
}

export function* fetchImageSaga() {
  yield takeLatest(GET_IMAGE, fetchImageUrl);
}