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
  formProfile,
  formCard,
  nameInputProfile,
  jobInputProfile,
  profileName,
  profileAbout,
  cards,
  cardTemplate,
  addButton,
  editButton,
  closeButton,
  // saveButton,
  popupList,
  popupProfile,
  popupCard,
  popupImage,
  nameInputCard,
  linkInputCard,
  cardButton,
  profileButton,
  // cardImage
} from "../utils/constants.js";

const defaultCard = new Section({
  items: initialCards,
  renderer: (item) => {
    return defaultCard.addItem(new Card(cardTemplate, item.name, item.link, {
      handleCardClick: () => {
        new PopupWithImage(popupImage).open(item.name, item.link);
      }
    }).createCard());
  }
}, cards);
defaultCard.renderItems();

const validProfile = new FormValidator(formObj, formProfile);
const validCard = new FormValidator(formObj, formCard);
validProfile.enableValidation();
validCard.enableValidation();

addButton.addEventListener('click', () => {                                    // Кнопка добавления карточки
  new Popup(popupCard).open();
  validCard.enableValidation();
});

editButton.addEventListener('click', () => {                                   // Кнопка редактирования профиля
  validProfile.enableValidation();
  new Popup(popupProfile).open();
  const userInfo = new UserInfo(profileName, profileAbout);
  nameInputProfile.value = userInfo.getUserInfo().name;
  jobInputProfile.value = userInfo.getUserInfo().info;
});

closeButton.forEach( (closeButtonElement) => {                           // Перебираем массив кнопок закрытия
  closeButtonElement.addEventListener('click', () => {
      new Popup(closeButtonElement.closest('.popup')).close();
  });
});

const cardForm = new PopupWithForm(popupCard, {
    callBackSubmitForm: (item) => {
        const newCard = new Card(cardTemplate, item.name, item.link, {
            handleCardClick: () => {
                new PopupWithImage(popupImage).open(item.name, item.link);
            }
        });
        cards.prepend(newCard.createCard());
    }
});
const setEventCardForm = cardForm.setEventListeners();
cardButton.addEventListener('click', setEventCardForm);

const profileForm = new PopupWithForm(popupProfile, {
    callBackSubmitForm: (item) => {
        const userInfo = new UserInfo(profileName, profileAbout);
        userInfo.setUserInfo(item.name, item.link);
    }
});
const setEventProfileForm = profileForm.setEventListeners();
profileButton.addEventListener('click', setEventProfileForm);

popupList.forEach( (popupListElement) => {                                // Оверлей
  popupListElement.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup')) {
      new Popup(popupListElement.closest('.popup')).close();
    }
  });
});