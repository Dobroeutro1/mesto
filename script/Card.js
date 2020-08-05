export class Card {
  constructor(cardTemplate, name, link) {
    this.name = name
    this.link = link
    this.cardTemplate = cardTemplate 
    this.imagePopup = document.querySelector('[data-popup-name=popup-image]');         // Получаем попап изображения 
    this.popupImg = this.imagePopup.querySelector('.popup__image');                         // Получаем картинку попапа 
    this.popupTitle = this.imagePopup.querySelector('.popup__title-img');                   // Получаем текст попапа 
    this.cardImg = this.cardTemplate.querySelector('.card__img');
    this.cardTitle = this.cardTemplate.querySelector('.card__title');
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
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape' && popup) {                                              // Если ключ кнопки равен Esc, то  
        this._closePopup(popup);                                                              // И удаляем класс у попапа 
      }
    });
  }
  
  _closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => {
      if (evt.key === 'Escape' && popup) {                                              // Если ключ кнопки равен Esc, то  
        this._closePopup(popup);                                                              // И удаляем класс у попапа 
      }
    });
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
    
    const cardImg = this._element.querySelector('.card__img');
    cardImg.src = this.link;                                
    cardImg.alt = this.name;                               
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

    cardImg.addEventListener('click', () => {          
      this._imageCard();
    });

    return this._element
  }
}