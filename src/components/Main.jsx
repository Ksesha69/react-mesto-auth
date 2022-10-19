import { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";
import profileButton from '../images/Vector.svg';
import imageButton from '../images/plus.svg';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onHandleCardClick }) {
    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    const [userAvatar, setUserAvatar] = useState();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo()
        .then((userData) => {
            setUserAvatar(userData.avatar);
            setUserName(userData.name);
            setUserDescription(userData.about);
        })
        .catch(err => {
            console.log(err);
        });
        api.getInitialCard()
        .then((res) => {
            setCards(res);
        })
        .catch(err => {
            console.log(err);
        });
    })
    
    return (
        <main>
            <section className="profile">
                <div className="profile__info">
                    <button 
                    className="profile__avatar-button"
                    onClick={onEditAvatar}
                    />
                    <img
                        className="profile__avatar"
                        alt={userName}
                        src={userAvatar}
                    />
                    <div className="profile__text">
                        <div>
                            <h1 className="profile__name">{userName}</h1>
                            <p className="profile__job">{userDescription}</p>
                        </div>
                        <button
                        type="button" 
                        className="button profile__edit-button"
                        onClick={onEditProfile}
                        >
                            <img
                                src={profileButton}
                                alt="Изменить подпись"
                            />
                        </button>
                    </div>
                </div>
                <button 
                type="button" 
                className="profile__add-button"
                onClick={onAddPlace}
                >
                    <img
                        className="profile__image-button"
                        src={imageButton}
                        alt="Добавить фото"
                    />
                </button>
            </section>
            <section className="elements">
                {cards.length > 0 &&
                    cards.map((card) => (
                        <Card
                        card={card}
                        key={card._id}
                        onCardClick={onHandleCardClick}
                    />
                ))}
            </section>
        </main>
    )
}

export default Main;