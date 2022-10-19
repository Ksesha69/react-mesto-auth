import React from "react";
function Card({card, onCardClick}) {

    
    const handleClick = () => {
        onCardClick({name: card.name, link: card.link});
    } 

    return (
        <div className="elements__item">
            <button 
            type="button" 
            className="button__image">
                <img 
                className="elements__image" 
                src={card.link}
                alt={card.name}
                onClick={handleClick}
                />
            </button>
            <button 
            type="button" 
            className="button__delete button" 
            />
            <div className="elements__table">
                <h2 className="elements__text">{card.name}</h2>
                <div className="elements__container">
                    <button type="button" className="button elements__like" />
                    <h4 className="elements__like_amount">{card.likes.length}</h4>
                </div>
            </div>
        </div>
    )
}

export default Card;