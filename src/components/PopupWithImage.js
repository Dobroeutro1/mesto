import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, name, link ) {
        super(popupSelector, open);
    }

    open(name, link) {
        super.open();
        const popupImage = this._popup.querySelector('.popup__image');
        const popupTitle = this._popup.querySelector('.popup__title-img');

        popupImage.src = link;
        popupImage.alt = name;
        popupTitle.textContent = name;
    }
}