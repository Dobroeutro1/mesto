import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  formObj,
  nameInputProfile,
  jobInputProfile,
  profileName,
  profileAbout,
  cards,
  cardTemplate,
  addButton,
  editButton,
  popupProfile,
  popupCard,
  popupImage,
} from "../utils/constants.js";

const formProfile = document.querySelector('.popup__form-profile');                 // Получаем форму профиля
const formCard = document.querySelector('.popup__form-card');                       // Получаем форму карточки
const popupWithImage = new PopupWithImage(popupImage);
const userInfo = new UserInfo(profileName, profileAbout);
const userInfoValues = userInfo.getUserInfo();
const newPopupProfile = new Popup(popupProfile);
const newPopupCard = new Popup(popupCard);
const newPopupImage = new Popup(popupImage);

function newCard(item) {
    const newCard = new Card(cardTemplate, item.name, item.link, {
        handleCardClick: () => {
            popupWithImage.open(item.name, item.link);
            newPopupImage.setEventListeners();
        }
    });

    return newCard;
}

const defaultCard = new Section({
  items: initialCards,
  renderer: (item) => {
    return defaultCard.addItem(newCard(item).createCard());
  }
}, cards);
defaultCard.renderItems();

const cardForm = new PopupWithForm(popupCard, {
    callBackSubmitForm: (item) => {
        defaultCard.addItemPrepend(newCard(item).createCard());
    }
});
cardForm.setEventListeners();

const profileForm = new PopupWithForm(popupProfile, {
    callBackSubmitForm: (item) => {
        const userInfo = new UserInfo(profileName, profileAbout);
        userInfo.setUserInfo(item.name, item.link);
    }
});
profileForm.setEventListeners();

const validProfile = new FormValidator(formObj, formProfile);
const validCard = new FormValidator(formObj, formCard);
validProfile.enableValidation();
validCard.enableValidation();

addButton.addEventListener('click', () => {                                    // Кнопка добавления карточки
  newPopupCard.open();
});

editButton.addEventListener('click', () => {
  newPopupProfile.open();
  nameInputProfile.value = userInfoValues.name;
  jobInputProfile.value = userInfoValues.info;
});