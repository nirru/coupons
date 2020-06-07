import {takeLatest,put} from 'redux-saga/effects';
import {GET_COUPONS, setCoupons} from "../component/home/saga-action";


function * fetchCoupons({coupons}) {
  const response = yield fetch(`${process.env.API_URL}coupon`);
  const data = yield response.json();
  yield put(setCoupons(data));
}

export function* fetchCouponsSaga() {
  yield takeLatest(GET_COUPONS, fetchCoupons);
}