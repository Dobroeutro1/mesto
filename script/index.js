// Карточки из коробки
const initialCards = [
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

const cards = document.querySelector('.cards')

// Функция создания карточки
function createCard(name, link) {
  const cardTemplate = document.querySelector('.card-template').content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__img').src = link;
  cardElement.querySelector('.card__img').alt = name;
  cardElement.querySelector('.card__title').textContent = name;

  // Удаление
  const deleteButton = cardElement.querySelector('.card__trash-btn');
  deleteButton.addEventListener('click', () => {
    const card = deleteButton.closest('.card');
    card.remove();
  });

  // Like
  const likeButton = cardElement.querySelector('.card__like-btn'); 
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('card__like-btn_liked'); 
  });

  // Попап изображения
  const imagePopup = document.querySelector('[data-popup-name=popup-image]');      // Получаем попап картинки
  const popupImg = document.querySelector('.popup__image');                        // Получаем картинку попапа
  const popupTitle = document.querySelector('.popup__title-img');                  // Получаем текст попапа

  cardElement.querySelector('.card__img').addEventListener('click', () => {
    imagePopup.classList.toggle('popup_opened');
    popupTitle.textContent = name;
    popupImg.src = link;
    popupImg.alt = name;
  });

  cards.prepend(cardElement);
};

initialCards.forEach( (initialCardsElement) => {
  createCard(initialCardsElement.name, initialCardsElement.link);
});

const nameInputCard = document.querySelector('#name-card');
const linkInputCard = document.querySelector('#link-card');

// Функция добавления карточки
function addCard() {
  initialCards.push (
    {
    name: `${nameInputCard.value}`,
    link: `${linkInputCard.value}`
    }
  );
  
  createCard(nameInputCard.value, linkInputCard.value)
}

const createCardButton = document.querySelector('.popup__create-card');
createCardButton.addEventListener('click', addCard);

// Открытие/закрытие поп-апа
const addButton = document.querySelector('.profile__add-btn');                     // Получаем кнопку добавления карточки
const editButton = document.querySelector('.profile__edit-btn');                   // Получаем кнопку редактирования профиля
const closeButton = document.querySelectorAll('.popup__close-btn');                // Получаем все кнопки закрытия попапа
const saveButton = document.querySelectorAll('.popup__save-btn');                  // Получаем все кнопки сохранить 

let popupProfile = document.querySelector('[data-popup-name=popup-profile]');      // Получаем попап профиля
let popupCard = document.querySelector('[data-popup-name=popup-card]');            // Получаем попап добавления карточки

addButton.addEventListener('click', () => {                                        // Обработчик на кнопку добавления карточки
  popupCard.classList.toggle('popup_opened');
  nameInputCard.value = '';
  linkInputCard.value = '';                                                        // При выборе кнопки меняем класс у попапа
});
editButton.addEventListener('click', () => {                                       // Обработчик на кнопку редактирования карточки
  popupProfile.classList.toggle('popup_opened');                                   // При выборе кнопки меняем класс у попапа
});
closeButton.forEach( (closeButtonElement) => {                                     // Перебираем массив кнопок закрытия
  const popup = closeButtonElement.closest('.popup');                              // Получаем попап-родитель у конкретной кнопки
  closeButtonElement.addEventListener('click', () => {                             // Обработчик на кнопку закрытия попапа
    popup.classList.remove('popup_opened');                                        // Удаление класса у попапа
  });
});
saveButton.forEach( (saveButtonElement) => {                                       // Перебираем массив кнопок сохранения
  const popup = saveButtonElement.closest('.popup');                               // Получаем попап-родитель у конкретной кнопки
  saveButtonElement.addEventListener('click', () => {                              // Обработчик на кнопку сохранения попапа
    popup.classList.remove('popup_opened');                                        // Удаление класса у попапа
  });
});

// Значение полей ввода
const formElement = document.querySelectorAll('.popup__form');
const nameInput = document.querySelector('#name-profile');
const jobInput = document.querySelector('#about-profile');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');


function formSubmitHandler () {
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
}

formElement.forEach((form) => {
  form.addEventListener('submit', formSubmitHandler);
})

