import {cardTemplate} from "../utils/constants";

export default class Card {
    constructor(cardTemplate, item, myId, { handleCardClick, handleCardDelete, handleAddLikeCard, handleDeleteLikeCard }) {
        this._item = item;
        this._myId = myId;
        this._name = this._item.name;
        this._link = this._item.link
        this.cardTemplate = cardTemplate
        this._id = this._item.owner._id;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._handleAddLikeCard = handleAddLikeCard;
        this._handleDeleteLikeCard = handleDeleteLikeCard;
    }

    _getTemplate() {
        const cardElement = this.cardTemplate.cloneNode(true);

        return cardElement;
    }

    deleteCard() {
        this._card.remove();
    }

    getLikeCard() {
        this.likeCounter.textContent = this._item.likes.length;
        if (this._item.likes.some((like) => { return like._id === this._myId })) {
            this.likeCard();
        }
    }

    addLikeCard(card) {
        this.likeCounter.textContent = card.likes.length;
    }

    likeCard() {
        this.likeButton.classList.toggle('card__like-btn_liked');
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
        const cardElement = deleteButton.closest('.card');
        if (this._id !== "8c46c2c1eec7ea6894dea949") {
            deleteButton.style.display = 'none'
        }
        this._card = cardElement
        deleteButton.addEventListener('click', () => {
            this._handleCardDelete();
        });

        const likeButton = this._element.querySelector('.card__like-btn');
        const likeCounter = this._element.querySelector('.card__like-counter');
        this.likeButton = likeButton;
        this.likeCounter = likeCounter;

        this.getLikeCard();

        this.likeButton.addEventListener('click', () => {
            this.likeCard();

            if (this.likeButton.classList.contains('card__like-btn_liked')) {
                this._handleAddLikeCard();
                // this.getLikeCard();
            } else {
                this._handleDeleteLikeCard();
                // this.getLikeCard();
            }
        });

        return this._element
    }
}