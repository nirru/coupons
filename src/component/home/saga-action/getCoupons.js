import {makeActionCreator} from "../../../utility";

export const GET_COUPONS = 'GET_COUPONS';
export const getCoupons = makeActionCreator(GET_COUPONS,'coupons');
