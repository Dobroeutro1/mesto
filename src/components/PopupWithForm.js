import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, { callBackSubmitForm }) {
        super(popupSelector);
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
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callBackSubmitForm(this._getInputValues());
            this.close();
        })
    }

    close() {
        this._form.reset();
        super.close();
    }
}

// _getInputValues() {
//     const formInputName = this._form.querySelectorAll('.popup__input_name');
//     const formInputTitle = this._form.querySelectorAll('.popup__input_title');
//
//     return {
//         name: formInputName.value,
//         title: formInputTitle.value
//     };
// }

// setEventListeners() {
//     this._getInputValues();
//     super.setEventListeners();
//     this._callBackSubmitForm();
// }