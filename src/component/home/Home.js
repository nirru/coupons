import React, {useEffect, useState} from "react";
import './home.css';
import {Coupon} from "../card/Coupon";
import {useDispatch, useSelector} from "react-redux";
import {getCoupons} from "./saga-action";
import {ImageModal} from "../Modal/ImageModal";
import {getImage} from "../Modal/saga-action";

export const Home = () => {
    const dispatch = useDispatch();
    const [display,setDisplay] = useState(false);
    const [image,setImage] = useState('');
    useEffect(() => {
        dispatch(getCoupons());
    }, []);

   const sendUrl = (url) =>{
       setDisplay(true);
       setImage(url);
    }
    const close = (show) => {
       setDisplay(show);
    }
    const meal = useSelector(state => state.get('couponsReducer'));
    return (
        <div className="container">
            <div className="header"></div>
            <div className="main">
                <section className="main_body" id="main">
                    <ul>
                        {meal !== null ? meal.meal.map(item=><Coupon coupons={item} key ={item.id} sendUrl={sendUrl}/>) : <div>Loading</div>}
                    </ul>

                </section>
                <ImageModal show={display} url={image} close={close}/>
            </div>
            <div className="footer">
                 developed by nirmal kumar
            </div>
        </div>
    )
}