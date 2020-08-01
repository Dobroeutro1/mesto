import { initialCards, Card } from './Card.js';
import { FormValidator, formObj } from './FormValidator.js';

const validProfile = new FormValidator(formObj, document.querySelector('.popup__form-profile'))
const validCard = new FormValidator(formObj, document.querySelector('.popup__form-card'))
validProfile.enableValidation()
validCard.enableValidation()

const cards = document.querySelector('.cards');                                     // Получаем блок карточек
const cardTemplate = document.querySelector('.card-template').content;              // Получаем разметку карточки 


function closeEsc(evt) {
  const popup = document.querySelector('.popup_opened');                            // Вводим модификатор открытия попапа
  if (evt.key === 'Escape' && popup) {                                              // Если ключ кнопки равен Esc, то  
    closePopup(popup);                                                              // И удаляем класс у попапа 
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc);
}

initialCards.forEach( (initialCardsElement) => {                                    // Перебираем массив с карточками 
  cards.append(new Card(cardTemplate, initialCardsElement.name, initialCardsElement.link).createCard());                                                               // Используем функцию создания карточки с аргументами имени и ссылки из массива карточек 
}); 

const nameInputCard = document.querySelector('#name-card');                         // Получаем инпут названия карточки 
const linkInputCard = document.querySelector('#link-card');                         // Получаем инпут ссылки картинки 
 
// Функция добавления карточки 
function addCard() { 
  createCard(nameInputCard.value, linkInputCard.value);                             // Используем функцию создания карточки с аргументами инпутов названия и ссылки 
} 
 
const createCardButton = document.querySelector('.popup__create-card');             // Получаем кнопку создания карточки 
createCardButton.addEventListener('submit', addCard);                               // Обработчик отправки функции создания карточки 
 
// Открытие/закрытие поп-апа 
const addButton = document.querySelector('.profile__add-btn');                      // Получаем кнопку добавления карточки 
const editButton = document.querySelector('.profile__edit-btn');                    // Получаем кнопку редактирования профиля 
const closeButton = document.querySelectorAll('.popup__close-btn');                 // Получаем все кнопки закрытия попапа 
const saveButton = document.querySelectorAll('.popup__save-btn');                   // Получаем все кнопки сохранить  

const popupList = document.querySelectorAll('.popup');                              // Получаем все оверлеи попапов 
const popupProfile = document.querySelector('[data-popup-name=popup-profile]');     // Получаем попап профиля 
const popupCard = document.querySelector('[data-popup-name=popup-card]');           // Получаем попап добавления карточки 
 
addButton.addEventListener('click', () => {                                         // Обработчик на кнопку добавления карточки 
  openPopup(popupCard);
  nameInputCard.value = '';                                                         // При открытии попапа, значение инпута названия карточки - пусто 
  linkInputCard.value = '';                                                         // При открытии попапа, значение инпута ссылки карточки - пусто 
}); 
editButton.addEventListener('click', () => {                                        // Обработчик на кнопку редактирования карточки 
  openPopup(popupProfile);
  nameInputProfile.value = profileName.textContent;                                 // При открытии попапа, значение инпута имени принимает значение поля имени профиля 
  jobInputProfile.value = profileAbout.textContent;                                 // При открытии попапа, значение инпута "о себе" принимает значение поля имени профиля 
}); 
closeButton.forEach( (closeButtonElement) => {                                      // Перебираем массив кнопок закрытия 
  const popup = closeButtonElement.closest('.popup');                               // Получаем попап-родитель у конкретной кнопки 
  closeButtonElement.addEventListener('click', () => {                              // Обработчик на кнопку закрытия попапа 
    closePopup(popup);
  }); 
}); 
saveButton.forEach( (saveButtonElement) => {                                        // Перебираем массив кнопок сохранения 
  const popup = saveButtonElement.closest('.popup');                                // Получаем попап-родитель у конкретной кнопки 
  saveButtonElement.addEventListener('click', () => {                               // Обработчик на кнопку сохранения попапа
    closePopup(popup); 
  }); 
}); 
popupList.forEach( (popupListElement) => {                                          // Перебираем оверлеи 
  const popup = popupListElement.closest('.popup');                                 // Получаем попап-родитель 
  popupListElement.addEventListener('mousedown', (evt) => {                         // Обработчик на нажатие ЛКМ 
    if (evt.target.classList.contains('popup')) {                                   // Условие: если выбранный элемент содержит класс popup, 
      closePopup(popup);
    } 
  }); 
}); 
 
// Значение полей ввода 
const formProfile = document.querySelector('.popup__form-profile');                 // Получаем форму профиля 
const formCard = document.querySelector('.popup__form-card');                       // Получаем форму карточки 
const nameInputProfile = document.querySelector('#name-profile');                   // Получаем инпут попапа имени профиля 
const jobInputProfile = document.querySelector('#about-profile');                   // Получаем инпут попапа "о себе" профиля 
const profileName = document.querySelector('.profile__title');                      // Получаем имя профиля 
const profileAbout = document.querySelector('.profile__subtitle');                  // Получаем "о себе" профиля 
 
// Функция обработчик профиля 
function formSubmitHandlerProfile () { 
  profileName.textContent = nameInputProfile.value;                                 // Текст имени профиля равен значению инпута имени профиля 
  profileAbout.textContent = jobInputProfile.value;                                 // Текст "о себе" профиля равен значению инпута "о себе" профиля 
} 
 
// Функция обработчик карточки 
function formSubmitHandlerCard () { 
  cards.prepend(new Card(cardTemplate, nameInputCard.value, linkInputCard.value).createCard());              // Используем функцию создания карточки с аргументами имени и ссылки
} 

formProfile.addEventListener('submit', formSubmitHandlerProfile);                   // Обработчик формы профиля 
formCard.addEventListener('submit', formSubmitHandlerCard);                         // Обработчик формы карточки 
