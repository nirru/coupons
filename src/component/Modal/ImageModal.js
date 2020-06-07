import React from 'react';
import PropTypes from "prop-types";
import './modal.css'

export const ImageModal = ({show, url,close}) => {
    console.log('hahahah=='+show);
    const closeModal = ()=>{
        close(false);
    }
    return (
        <div id="myModal" className={`modal_base ${show ? 'modal_show' : 'modal_hide'}`}>

            <span className="close" onClick={()=>closeModal()}>&times;</span>

            <img className="modal-content" id="img01" src={url}/>

                <div id="caption">

                </div>
        </div>
    )

}

ImageModal.propTypes = {
    show:PropTypes.bool.isRequired,
    url:PropTypes.string.isRequired,
    close:PropTypes.func.isRequired,
}