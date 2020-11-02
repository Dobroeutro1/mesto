// Карточки из коробки
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const formObj = {                                                                            // Функция включения валидации
  formSelector: '.popup__form',                                                                     // Форма
  inputSelector: '.popup__input',                                                                   // Инпут формы
  submitButtonSelector: '.popup__save-btn',                                                         // Кнопка сохранить
  inactiveButtonClass: 'popup__save-btn_error',                                                     // Класс неактивной кнопки
  inputErrorClass: 'popup__input_error',                                                            // Класс ошибки
  errorClass: 'popup__input-error_active'                                                           // Класс активной ошибки
};


export const popupProfile = document.querySelector('[data-popup-name=popup-profile]');     // Попап профиля
export const popupCard = document.querySelector('[data-popup-name=popup-card]');           // Попап добавления карточки
export const popupImage = document.querySelector('[data-popup-name=popup-image]');         // Попап изображения
export const nameInputProfile = document.querySelector('#name-profile');                   // Инпут попапа имени профиля
export const jobInputProfile = document.querySelector('#about-profile');                   // Инпут попапа инфо профиля
export const profileName = document.querySelector('.profile__title');                      // Имя профиля
export const profileAbout = document.querySelector('.profile__subtitle');                  // Инфо профиля
export const cards = document.querySelector('.cards');                                     // Блок карточек
export const cardTemplate = document.querySelector('.card-template').content;              // Разметка карточки
export const addButton = document.querySelector('.profile__add-btn');                      // Кнопка добавления карточки
export const editButton = document.querySelector('.profile__edit-btn');                    // Кнопка редактирования профиля