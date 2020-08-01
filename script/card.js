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

export class Card {
  constructor(cardTemplate, name, link) {
    this.name = name
    this.link = link
    this.cardTemplate = cardTemplate 
    this.imagePopup = document.querySelector('[data-popup-name=popup-image]');         // Получаем попап изображения 
    this.popupImg = this.imagePopup.querySelector('.popup__image');                         // Получаем картинку попапа 
    this.popupTitle = this.imagePopup.querySelector('.popup__title-img');                   // Получаем текст попапа 

  }

  _getTemplate() {
    const cardElement = this.cardTemplate.cloneNode(true);                                      

    return cardElement;
  }
  
  _deleteCard() {
    // Удаление
    this.card.remove();                                                                  // Удаляем карточку-родитель при клике 
  }

  _likeCard() {
    // Like
    this.likeButton.classList.toggle('card__like-btn_liked');                            // Меняем класс у кнопки лайка при клике  
  }

  _openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closeEsc);
  }
  
  _closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closeEsc);
  }
  
  _imageCard() {
    // Попап изображения 
    this._openPopup(this.imagePopup);                                                          // Меняем класс у попапа картинки 
    this.popupTitle.textContent = this.name;                                                  // Значению текста попапа присваиваем значение name из массива карточек 
    this.popupImg.src = this.link;                                                            // Значению ссылки картинки присваиваем значение link из массива карточек 
    this.popupImg.alt = this.name;                                                            // Значению alt картинки присваиваем значение name из массива карточек 
  }

  createCard() {
    this._element = this._getTemplate()

    this._element.querySelector('.card__img').src = this.link;                                
    this._element.querySelector('.card__img').alt = this.name;                               
    this._element.querySelector('.card__title').textContent = this.name;

    const deleteButton = this._element.querySelector('.card__trash-btn');
    const card = deleteButton.closest('.card')
    this.card = card
    deleteButton.addEventListener('click', () => {
      this._deleteCard();                                                             
    });

    const likeButton = this._element.querySelector('.card__like-btn');
    this.likeButton = likeButton                 
    this.likeButton.addEventListener('click', () => {                             
      this._likeCard();                                                               
    });

    this._element.querySelector('.card__img').addEventListener('click', () => {          
      this._imageCard();
    });

    return this._element
  }
}