// Валидация
class FormValidator {
  constructor(obj, formElement) {
    this._obj = obj
    this._formElement = formElement
    this._inputSelector = Array.from(document.querySelectorAll(this._obj.inputSelector));
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

    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
    inputElement.classList.remove(this._inputErrorClass);
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
    if (this._hasInvalidInput(this._inputSelector)) {
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

const formObj = {                                                                   // Функция включения валидации 
  formSelector: '.popup__form',                                                     // Форма 
  inputSelector: '.popup__input',                                                   // Инпут формы 
  submitButtonSelector: '.popup__save-btn',                                         // Кнопка сохранить 
  inactiveButtonClass: 'popup__save-btn_error',                                     // Класс неактивной кнопки 
  inputErrorClass: 'popup__input_error',                                            // Класс ошибки 
  errorClass: 'popup__input-error_active'                                           // Класс активной ошибки 
};

const validProfile = new FormValidator(formObj, document.querySelector('.popup__form-profile')).enableValidation()
const validCard = new FormValidator(formObj, document.querySelector('.popup__form-card')).enableValidation()



// // Функция показа ошибки 
// function showError(formElement, inputElement, errorMessage, inputErrorClass, errorClass) {  // Передаем аргументы формы, инпута и сообщения ошибки 
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);              // Получаем ошибку, которая привязана к инпуту 

//   inputElement.classList.add(inputErrorClass);                                              // Добавляем класс инпуту, для подчеркивания нижней границы 
//   errorElement.textContent = errorMessage;                                                  // Текст ошибки присваиваем аргументу функции errorMessage 
//   errorElement.classList.add(errorClass);                                                   // Меняем класс у ошибки. Делаем ее видимой 
// } 

// // Функция скрытия ошибки 
// function hideError(formElement, inputElement, inputErrorClass, errorClass) {                // Передаем аргументы формы и инпута 
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);              // Получаем ошибку, которая привязана к инпуту 

//   inputElement.classList.remove(inputErrorClass);                                           // Удаляем класс у инпута, для удаления подчеркивания нижней границы 
//   errorElement.classList.remove(errorClass);                                                // Удаляем класс у ошибки. Делаем ее невидимой 
//   errorElement.textContent = '';                                                            // Делаем текст ошибки пустым 
// } 
 
// // Функция проверки валидности инпута 
// function checkInputValidity(formElement, inputElement, inputErrorClass, errorClass) {       // Аргументы формы и инпута 
//   if (!inputElement.validity.valid) {                                                       // Условие: если инпут НЕ валиден, 
//     showError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);           // то вызываем функцию показа ошибки с аргументами формы, инпута и сообщения ошибки инпута 
//   } else {                                                                                  // иначе, 
//     hideError(formElement, inputElement, inputErrorClass, errorClass);                                           // вызываем функцию скрытия ошибки с аргументами формы и инпута 
//   } 
// } 
 
// // Функция проверки валидности всех инпутов 
// // const inputList = document.querySelectorAll('.popup__input');                            // Вводим массив со всеми инпутами 
// function hasInvalidInput(inputList) {                                                       // Передаем аргументом массив с инпутами 
//   return inputList.some((inputElement) => {                                                 // Если в массиве есть элемент который соответствует тому, что 
//     return !inputElement.validity.valid;                                                    // элемент НЕ валиден, то возвращаем true (звучит тупо, но я это так понимаю) 
//   }); 
// } 
 
// // Функция добавления/удаления класса кнопки 
// function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {                 // Передаем агрументом инпут и кнопку 
//   if (hasInvalidInput(inputList)) {                                                         // Условие: если функция проверки валидности всех инпутов (аргумент передаем инпут) принимает true, 
//     buttonElement.classList.add(inactiveButtonClass);                                       // то добавляем кнопке класс disabled 
//     buttonElement.disabled = true;                                                          // и делаем ее неактивной
//   } else {                                                                                  // иначе, 
//     buttonElement.classList.remove(inactiveButtonClass);                                    // удаляем у кнопки класс disabled 
//     buttonElement.disabled = false;                                                         // и делаем ее активной
//   } 
// } 
 
// // Функция обработчик на каждый инпут формы 
// function setEventListeners(formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) {    // Передаем аргументом форму 

//   const inputList = Array.from(formElement.querySelectorAll(inputSelector));                // Получаем массив(не псевдомассив, а прям массив) всех инпутов 
//   const buttonElement = formElement.querySelector(submitButtonSelector);                    // Получаем кнопку (тут наверное надо все-таки массив кнопок, либо кнопкам тоже ид присвоить) 
 
//   toggleButtonState(inputList, buttonElement, inactiveButtonClass);                         // Вызываем функцию добавления/удаления класса кнопки. Аргументы инпут и кнопка 

//   inputList.forEach((inputElement) => {                                                     // Перебор массива инпутов 
//     inputElement.addEventListener('input', function () {                                    // Вешаем обработчик на элемент массива 
//       checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);           // Вызываем функцию проверки валидности инпута 
//       toggleButtonState(inputList, buttonElement, inactiveButtonClass);                     // И функцию смены класса кнопки 
//     }); 
//   }); 
// } 
 
// // Функция применения валидации 
// function enableValidation({formSelector, ...rest}) { 
//   const formList = Array.from(document.querySelectorAll(formSelector));             // Вводим массив всех форм 
 
//   formList.forEach((formElement) => {                                               // Перебираем масив 
//     formElement.addEventListener('submit', function (evt) {                         // Обработчик 
//       evt.preventDefault();                                                         // Отменяем стандартное браузерное поведение 
//     }); 
//     setEventListeners(formElement, rest);                                           // Вызываем функцию обработчика каждого инпута 
//   }); 
// }