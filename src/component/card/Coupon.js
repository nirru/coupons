import React, {useCallback} from 'react';
import StarRatings from "react-star-ratings";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import '../home/home.css'
import PropTypes from "prop-types";
import {getImage} from "../Modal/saga-action";
import {getCoupons} from "../home/saga-action";
import {Link} from "react-router-dom";


export const Coupon = ({coupons,sendUrl})=>{
    const showImagePopUp = useCallback((url) => {
        sendUrl(url)
    }, []);
    const openBuyNowWindow = (url) => {
        window.open(url);
    }
    return (
        <li className="card" >
            <img src={coupons.image} alt="Avatar" onClick={()=>showImagePopUp(coupons.image)}/>
            <div className="name_rating">
                <b>{coupons.provider}</b>
                <span>
                  <StarRatings
                      rating={coupons.rating}
                      starDimension="10px"
                      starSpacing="1px"/>
                   <label>{coupons.rating}
                   </label>
                </span>

            </div>
            <div className="city_name">{coupons.location}</div>
            <p className="coupon_description">{coupons.coupon}</p>
            <div className="fav_mark">
                <FontAwesomeIcon icon={faHeart} className="fav_icon"/>
                {/*<Link to={coupons.coupon} target="_blank"  >Buy Now</Link>*/}
                <button className="buy_now" onClick={()=> openBuyNowWindow(coupons.image)}>Buy Now</button>
            </div>
        </li>
    )
}

Coupon.propTypes = {
    coupons:PropTypes.object.isRequired,
    sendUrl:PropTypes.func.isRequired
}