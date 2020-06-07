import {SET_COUPONS} from "../component/home/saga-action/setCoupons";
import {
  fromJS
} from 'immutable';
import {createReducer} from "../utility";
import {SET_IMAGE} from "../component/Modal/saga-action";

export const couponsReducer = createReducer(null, {
  [SET_COUPONS](state,{coupons}) {
    return coupons;
  },
  [SET_IMAGE](state,{image}) {
    return {...state,image:image};
  },
});