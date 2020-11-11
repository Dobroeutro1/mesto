import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, { handlerSubmitForm }) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._handlerSubmitForm = handlerSubmitForm;
    }

    open(id, card) {
        this._card = card;
        this._id = id;
        super.open();
    }

    close() {
        super.close();
        this._form.reset();
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', () => {
            this._handlerSubmitForm(this._id, this._card);
        })
    }
}