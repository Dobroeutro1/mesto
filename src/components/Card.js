export default class Card {
    constructor(cardTemplate, item, myId, { handleCardClick, handleCardDelete, handleAddLikeCard, handleDeleteLikeCard }) {
        this._item = item;
        this._myId = myId;
        this._name = this._item.name;
        this._link = this._item.link
        this._cardTemplate = cardTemplate
        this._ownerId = this._item.owner._id;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._handleAddLikeCard = handleAddLikeCard;
        this._handleDeleteLikeCard = handleDeleteLikeCard;
    }

    _getTemplate() {
        const cardElement = this._cardTemplate.cloneNode(true).querySelector('.card');

        return cardElement;
    }

    deleteCard() {
        this._element.remove();
    }

    getLikeCard() {
        this.setLikeCard(this._item);
        if (this._item.likes.some((like) => { return like._id === this._myId })) {
            this.likeCard();
        }
    }

    setLikeCard(card) {
        this._likeCounter.textContent = card.likes.length;
    }

    likeCard() {
        this._likeButton.classList.toggle('card__like-btn_liked');
    }

    createCard() {
        this._element = this._getTemplate()

        const cardImg = this._element.querySelector('.card__img');
        cardImg.src = this._link;
        cardImg.alt = this._name;
        this._element.querySelector('.card__title').textContent = this._name;
        cardImg.addEventListener('click', () => {
            this._handleCardClick();
        });
        const deleteButton = this._element.querySelector('.card__trash-btn');
        if (this._ownerId !== this._myId) {
            deleteButton.remove();
        }
        deleteButton.addEventListener('click', () => {
            this._handleCardDelete();
        });

        this._likeButton = this._element.querySelector('.card__like-btn');
        this._likeCounter = this._element.querySelector('.card__like-counter');

        this.getLikeCard();

        this._likeButton.addEventListener('click', () => {
            if (this._likeButton.classList.contains('card__like-btn_liked')) {
                this._handleDeleteLikeCard();
            } else {
                this._handleAddLikeCard();
            }
        });

        return this._element
    }
}