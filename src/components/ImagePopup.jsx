import React from "react";

function ImagePopup ({ card, isOpen, onClose }) {

    return (
        <div className={`popup ${isOpen ? "popup_opened" : false}`}>
        <div className="popup__container-photo">
        <button
            type="button"
            className="button button_close-photo popup__close-button"
            onClick={onClose}
        />
        
        <img 
        src = {card} 
        alt = {card}
        className="popup__image"
        />
        <h2 className="popup__text">{card}</h2>
        </div>
        </div>
    )
}

export default ImagePopup; 