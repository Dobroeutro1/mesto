import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirm from "../components/PopupWithConfirm";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api";
import {
    formProfile,
    formCard,
    formProfileImage,
    formObj,
    nameInputProfile,
    jobInputProfile,
    profileName,
    profileAbout,
    cards,
    cardTemplate,
    addButton,
    editButton,
    profileButton,
    popupProfile,
    popupCard,
    popupImage,
    popupConfirm,
    popupUpdateImageProfile,
    profileAvatar,
} from "../utils/constants.js";

const api = new Api({
        baseUrl: 'https://mesto.nomoreparties.co/v1/',
        authorization: '8176c3f4-76a7-481c-9a33-49a36549538f'},
    'cohort-17'
);

const userInfo = new UserInfo(profileName, profileAbout, profileAvatar);
const popupWithImage = new PopupWithImage(popupImage);
const validProfile = new FormValidator(formObj, formProfile);
const validCard = new FormValidator(formObj, formCard);
const validProfileImage = new FormValidator(formObj, formProfileImage);
const defaultCard = new Section({
    renderer: (item, myId) => {
        defaultCard.addItem(newCard(item, myId).createCard());
    }
}, cards);
const popupCardConfirm = new PopupWithConfirm(popupConfirm, {
    handlerSubmitForm: (id, card) => {
        renderIsLoading(true, popupConfirm.querySelector('.popup__save-btn'))
        api.deleteCard(id)
            .then(() => {
                card.deleteCard();
            })
            .catch((err) => {
                console.log(err);
            })
        popupCardConfirm.close();
    }
});
const cardForm = new PopupWithForm(popupCard, {
    callBackSubmitForm: (item) => {
        console.log(item)
        renderIsLoading(true, popupCard.querySelector('.popup__save-btn'))
        api.addNewCard(item)
            .then((card) => {
                defaultCard.addItemPrepend(newCard(card).createCard());
            })
            .catch((err) => {
                console.log(err);
            })
    }
});
const profileImageForm = new PopupWithForm(popupUpdateImageProfile, {
    callBackSubmitForm: (item) => {
        renderIsLoading(true, popupUpdateImageProfile.querySelector('.popup__save-btn'))
        api.changeUserAvatar(item.link)
            .then(() => {
                profileAvatar.src = item.link;
            })
            .catch((err) => {
                console.log(err);
            })
    }
})
const profileForm = new PopupWithForm(popupProfile, {
    callBackSubmitForm: (item) => {
        renderIsLoading(true, popupProfile.querySelector('.popup__save-btn'))
        api.changeUserInfo(item.name, item.link)
            .then((data) => {
                userInfo.setUserInfo(data.name, data.about);
            })
            .catch((err) => {
                console.log(err);
            })
    }
});
function renderIsLoading(isLoading, button) {
    if (isLoading) {
        button.textContent = 'Сохранение...'
    }
}
function newCard(item, myId) {
    const newCard = new Card(cardTemplate, item, myId, {
        handleCardClick: () => {
            popupWithImage.open(item.name, item.link);
        },
        handleCardDelete: () => {
            popupCardConfirm.open(item._id, newCard);
        },
        handleAddLikeCard: () => {
            api.addLike(item)
                .then((data) => {
                    newCard.addLikeCard(data)
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        handleDeleteLikeCard: () => {
            api.deleteLike(item)
                .then((data) => {
                    newCard.addLikeCard(data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    });

    return newCard;
}
popupWithImage.setEventListeners();
popupCardConfirm.setEventListeners();
popupCardConfirm.setEventListeners();
validProfile.enableValidation();
validCard.enableValidation();
validProfileImage.enableValidation();
cardForm.setEventListeners();
profileImageForm.setEventListeners();
profileForm.setEventListeners();

addButton.addEventListener('click', () => {
    cardForm.open();
    validCard.toggleButtonState();
});

profileButton.addEventListener('click', () => {
    profileImageForm.open();
    validProfileImage.toggleButtonState();
});

editButton.addEventListener('click', () => {
    profileForm.open();
    const userInfoValues = userInfo.getUserInfo();
    nameInputProfile.value = userInfoValues.name;
    jobInputProfile.value = userInfoValues.info;
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([getUserInfo, initialCards]) => {

        userInfo.setUserInfo(getUserInfo.name, getUserInfo.about, getUserInfo.avatar);

        initialCards.forEach((item) => {
            defaultCard.renderItems(item, getUserInfo._id);
        })
    })
    .catch(() => {
        console.log('Что-то пошло не так :(')
    })