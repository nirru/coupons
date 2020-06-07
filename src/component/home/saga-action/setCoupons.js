import {makeActionCreator} from "../../../utility";

export const SET_COUPONS = 'SET_COUPONS';
export const setCoupons = makeActionCreator(SET_COUPONS,'coupons');
