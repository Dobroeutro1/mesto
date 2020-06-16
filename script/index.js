// Открытие/закрытие поп-апа
let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-btn');
let closeButton = document.querySelector('.popup__close-btn');

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#about');
let profileName = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__subtitle');


function formSubmitHandler (evt) {
    evt.preventDefault(); 

    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;


}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

let saveButton = document.querySelector('.popup__save-text');

saveButton.addEventListener('click', closePopup);