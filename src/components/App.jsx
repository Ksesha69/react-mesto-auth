import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});


  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleCardClick({name, link}) {
    setSelectedCard({name, link});
    setImagePopupOpen(true);
  }

  function handleConfirmationClick() {
    setConfirmationPopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setConfirmationPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="App">
    <>
      <div className="page">
        <Header />
        <Main 
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onEditAvatar = {handleEditAvatarClick}
          onHandleCardClick = {handleCardClick}
          onConformitionClick = {handleConfirmationClick}
        />
        <Footer />
      </div>
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        noValidate=""
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          defaultValue=""
          id="profile-input-name"
          required=""
          minLength={2}
          maxLength={40}
          name="input-name"
          className="popup__input popup__input_type_name"
        />
        <span id="profile-input-name-error" className="popup__input-error" />
        <input
          type="text"
          defaultValue=""
          id="profile-input-about"
          required=""
          minLength={2}
          maxLength={200}
          name="input-job"
          className="popup__input popup__input_type_job"
        />
        <span id="profile-input-about-error" className="popup__input-error" />
      </PopupWithForm>

      <PopupWithForm
        name="photo" 
        title="Новое место"
        className="popup__form popup-photo__form" 
        noValidate=""
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        >
          <input
            required=""
            type="text"
            defaultValue=""
            minLength={2}
            id="picture-input-name"
            name="input-photo"
            className="popup__input popup__input_type_photo"
            placeholder="Название"
          />
          <span id="picture-input-name-error" className="popup__input-error" />
          <input
            required=""
            type="url"
            defaultValue=""
            id="picture-input-link"
            name="input-title"
            className="popup__input popup__input_type_title"
            placeholder="Ссылка на картинку"
          />
          <span id="picture-input-link-error" className="popup__input-error" />
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        className="popup__form popup-avatar__form"
        noValidate=""
        buttonText="Создать"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          required=""
          type="url"
          id="userpic-input-avatar"
          name="input-avatar"
          className="popup__input popup__input_type_avatar"
          placeholder="Ссылка на картинку"
        />
        <span id="userpic-input-avatar-error" className="popup__input-error" />
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        isOpen={isImagePopupOpen}
      />
      <PopupWithForm
        name="delete"
        title="Вы уверены?" 
        className="popup__form"
        buttonText="Да"
        isOpen={isConfirmationPopupOpen}
        onClose={closeAllPopups}
      >
      </PopupWithForm>
      </>
    </div>
  );
}

export default App;
