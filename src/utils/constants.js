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
  {                                                                                                       // Массив карточек 
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

export const formObj = {                                                                   // Функция включения валидации
  formSelector: '.popup__form',                                                     // Форма
  inputSelector: '.popup__input',                                                   // Инпут формы
  submitButtonSelector: '.popup__save-btn',                                         // Кнопка сохранить
  inactiveButtonClass: 'popup__save-btn_error',                                     // Класс неактивной кнопки
  inputErrorClass: 'popup__input_error',                                            // Класс ошибки
  errorClass: 'popup__input-error_active'                                           // Класс активной ошибки
};

export const nameInputProfile = document.querySelector('#name-profile');                   // Получаем инпут попапа имени профиля
export const jobInputProfile = document.querySelector('#about-profile');                   // Получаем инпут попапа "о себе" профиля
export const profileName = document.querySelector('.profile__title');                      // Получаем имя профиля
export const profileAbout = document.querySelector('.profile__subtitle');                  // Получаем "о себе" профиля
export const cards = document.querySelector('.cards');                                     // Получаем блок карточек
export const cardTemplate = document.querySelector('.card-template').content;              // Получаем разметку карточки
export const addButton = document.querySelector('.profile__add-btn');                      // Получаем кнопку добавления карточки
export const editButton = document.querySelector('.profile__edit-btn');                    // Получаем кнопку редактирования профиля
export const popupProfile = document.querySelector('[data-popup-name=popup-profile]');     // Получаем попап профиля
export const popupCard = document.querySelector('[data-popup-name=popup-card]');           // Получаем попап добавления карточки
export const popupImage = document.querySelector('[data-popup-name=popup-image]');
// export const popupList = document.querySelectorAll('.popup');                              // Получаем все оверлеи попапов
// export const closeButton = document.querySelectorAll('.popup__close-btn');                 // Получаем все кнопки закрытия попапа
// export const saveButton = document.querySelectorAll('.popup__save-btn');                   // Получаем все кнопки сохранить
// export const nameInputCard = document.querySelector('#name-card');                         // Получаем инпут названия карточки
// export const linkInputCard = document.querySelector('#link-card');                         // Получаем инпут ссылки картинки
// export const cardButton = document.querySelector('.popup__create-card');             // Получаем кнопку создания карточки
// export const profileButton = document.querySelector('.popup__save-profile');
// export const cardImage = document.querySelectorAll('.card__img');