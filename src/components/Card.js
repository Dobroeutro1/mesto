export default class Card {
    constructor(cardTemplate, name, link, { handleCardClick }) {
        this.name = name
        this.link = link
        this.cardTemplate = cardTemplate
        this._handleCardClick = handleCardClick;
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
            this._handleCardClick();
        });

        return this._element
    }
}