// Валидация
export class FormValidator {
  constructor(obj, formElement) {
    this._obj = obj
    this._formElement = formElement
    this._inputSelector = Array.from(this._formElement.querySelectorAll(this._obj.inputSelector));
    this._submitButtonSelector = this._formElement.querySelector(this._obj.submitButtonSelector);
    this._inactiveButtonClass = this._obj.inactiveButtonClass;
    this._inputErrorClass = this._obj.inputErrorClass;
    this._errorClass = this._obj.errorClass;
  }

  // Функция показа ошибки
  _showError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  // Функция скрытия ошибки
  _hideError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  // Функция проверки валидности инпута
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    }
  }

  // Функция проверки валидности всех инпутов
  _hasInvalidInput() {
    return this._inputSelector.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // Функция добавления/удаления класса кнопки
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButtonSelector.classList.add(this._inactiveButtonClass);
      this._submitButtonSelector.disabled = true;
    } else {
      this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
      this._submitButtonSelector.disabled = false;
    }
  }

  // Функция обработчик на каждый инпут формы
  _setEventListeners() {
    this._toggleButtonState();

    this._inputSelector.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  // Функция применения валидации
  enableValidation() {
      this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners();
  }
}

export const formObj = {                                                                   // Функция включения валидации 
  formSelector: '.popup__form',                                                     // Форма 
  inputSelector: '.popup__input',                                                   // Инпут формы 
  submitButtonSelector: '.popup__save-btn',                                         // Кнопка сохранить 
  inactiveButtonClass: 'popup__save-btn_error',                                     // Класс неактивной кнопки 
  inputErrorClass: 'popup__input_error',                                            // Класс ошибки 
  errorClass: 'popup__input-error_active'                                           // Класс активной ошибки 
};

// const validProfile = new FormValidator(formObj, document.querySelector('.popup__form-profile')).enableValidation()
// const validCard = new FormValidator(formObj, document.querySelector('.popup__form-card')).enableValidation()