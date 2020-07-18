const cards = document.querySelector('.cards')                                      // Получаем блок карточек
const imagePopup = document.querySelector('[data-popup-name=popup-image]');         // Получаем попап изображения 
const popupImg = document.querySelector('.popup__image');                           // Получаем картинку попапа 
const popupTitle = document.querySelector('.popup__title-img');                     // Получаем текст попапа 
const cardTemplate = document.querySelector('.card-template').content;              // Получаем разметку карточки 
 
// Функция создания карточки 
function createCard(name, link) { 

  const cardElement = cardTemplate.cloneNode(true);                                 // Клонируем карточку 
 
  cardElement.querySelector('.card__img').src = link;                               // Присваиваем значение ссылки картинки из переменной link массива карточек 
  cardElement.querySelector('.card__img').alt = name;                               // Присваиваем значение alt картинки из переменной name массива карточек 
  cardElement.querySelector('.card__title').textContent = name;                     // Присваиваем значение названия картинки из переменной name массива карточек 
 
  // Удаление 
  const deleteButton = cardElement.querySelector('.card__trash-btn');               // Получаем кнопку удаления карточки 
  deleteButton.addEventListener('click', () => {                                    // Обработчик кнопки по клику 
    const card = deleteButton.closest('.card');                                     // Получаем карточку-родилель у кнопки при клике 
    card.remove();                                                                  // Удаляем карточку-родитель при клике 
  }); 
 
  // Like 
  const likeButton = cardElement.querySelector('.card__like-btn');                  // Получаем кнопку лайка карточки 
  likeButton.addEventListener('click', () => {                                      // Обработчик кнопки по клику 
    likeButton.classList.toggle('card__like-btn_liked');                            // Меняем класс у кнопки лайка при клике 
  }); 
 
  // Попап изображения 
  cardElement.querySelector('.card__img').addEventListener('click', () => {         // Обработчик по клику на картинку карточки 
    imagePopup.classList.toggle('popup_opened');                                    // Меняем класс у попапа картинки 
    popupTitle.textContent = name;                                                  // Значению текста попапа присваиваем значение name из массива карточек 
    popupImg.src = link;                                                            // Значению ссылки картинки присваиваем значение link из массива карточек 
    popupImg.alt = name;                                                            // Значению alt картинки присваиваем значение name из массива карточек 
  }); 
 
  return cardElement; 
}; 

function closeEsc(evt) {
  if (evt.key === 'Escape') {                                                       // Если ключ кнопки равен Esc, то 
    const popup = document.querySelector('.popup_opened');                          // Вводим модификатор открытия попапа 
    popup.classList.remove('popup_opened');                                         // И удаляем класс у попапа 
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc)
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc) 
}

initialCards.forEach( (initialCardsElement) => {                                    // Перебираем массив с карточками 
  cards.append(createCard(initialCardsElement.name, initialCardsElement.link));     // Используем функцию создания карточки с аргументами имени и ссылки из массива карточек 
}); 
 
const nameInputCard = document.querySelector('#name-card');                         // Получаем инпут названия карточки 
const linkInputCard = document.querySelector('#link-card');                         // Получаем инпут ссылки картинки 
 
// Функция добавления карточки 
function addCard() { 
  createCard(nameInputCard.value, linkInputCard.value)                              // Используем функцию создания карточки с аргументами инпутов названия и ссылки 
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
  // popupCard.classList.toggle('popup_opened');                                       // Меняем класс у попапа 
  nameInputCard.value = '';                                                         // При открытии попапа, значение инпута названия карточки - пусто 
  linkInputCard.value = '';                                                         // При открытии попапа, значение инпута ссылки карточки - пусто 
}); 
editButton.addEventListener('click', () => {                                        // Обработчик на кнопку редактирования карточки 
  openPopup(popupProfile);
  // popupProfile.classList.toggle('popup_opened');                                    // При выборе кнопки меняем класс у попапа 
  nameInputProfile.value = profileName.textContent;                                 // При открытии попапа, значение инпута имени принимает значение поля имени профиля 
  jobInputProfile.value = profileAbout.textContent;                                 // При открытии попапа, значение инпута "о себе" принимает значение поля имени профиля 
}); 
closeButton.forEach( (closeButtonElement) => {                                      // Перебираем массив кнопок закрытия 
  const popup = closeButtonElement.closest('.popup');                               // Получаем попап-родитель у конкретной кнопки 
  closeButtonElement.addEventListener('click', () => {                              // Обработчик на кнопку закрытия попапа 
    closePopup(popup);
    // popup.classList.remove('popup_opened');                                         // Удаление класса у попапа 
  }); 
}); 
saveButton.forEach( (saveButtonElement) => {                                        // Перебираем массив кнопок сохранения 
  const popup = saveButtonElement.closest('.popup');                                // Получаем попап-родитель у конкретной кнопки 
  saveButtonElement.addEventListener('click', () => {                               // Обработчик на кнопку сохранения попапа
    closePopup(popup); 
    // popup.classList.remove('popup_opened');                                         // Удаление класса у попапа 
  }); 
}); 
popupList.forEach( (popupListElement) => {                                          // Перебираем оверлеи 
  const popup = popupListElement.closest('.popup');                                 // Получаем попап-родитель 
  popupListElement.addEventListener('mousedown', (evt) => {                         // Обработчик на нажатие ЛКМ 
    if (evt.target.classList.contains('popup')) {                                   // Условие: если выбранный элемент содержит класс popup, 
      closePopup(popup);
      // popup.classList.remove('popup_opened');                                    // то удаляем класс __opened у попапа-родителя 
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
const cardName = document.querySelector('.card__title');                            // Получаем название карточки 
const cardImg = document.querySelector('.card__img');                               // Получаем картинку карточки 
 
// Функция обработчик профиля 
function formSubmitHandlerProfile () { 
  profileName.textContent = nameInputProfile.value;                                 // Текст имени профиля равен значению инпута имени профиля 
  profileAbout.textContent = jobInputProfile.value;                                 // Текст "о себе" профиля равен значению инпута "о себе" профиля 
} 
 
// Функция обработчик карточки 
function formSubmitHandlerCard () { 
  cards.prepend(createCard(nameInputCard.value, linkInputCard.value));              // Используем функцию создания карточки с аргументами имени и ссылки 
} 
 
formProfile.addEventListener('submit', formSubmitHandlerProfile);                   // Обработчик формы профиля 
formCard.addEventListener('submit', formSubmitHandlerCard);                         // Обработчик формы карточки 
