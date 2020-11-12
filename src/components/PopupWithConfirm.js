import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
    constructor(popup, { handlerSubmitForm }) {
        super(popup);
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
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            this._handlerSubmitForm(this._id, this._card);
        })
    }
}