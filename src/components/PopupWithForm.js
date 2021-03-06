import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popup, { callBackSubmitForm }) {
        super(popup);
        this._form = this._popup.querySelector('.popup__form');
        this._callBackSubmitForm = callBackSubmitForm;
    }

    _getInputValues() {
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach( (input) => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', () => {
            this._callBackSubmitForm(this._getInputValues());
        })
    }

    close() {
        this._form.reset();
        super.close();
    }
}