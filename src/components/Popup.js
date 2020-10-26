export default class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
    }

    open() {
        // this._popup.querySelector('.popup__form').reset();
        this._popup.classList.add('popup_opened');
        this._handleEscClose();
    }

    close() {
        this._popup.classList.remove('popup_opened');
    }

    _handleEscClose() {
        document.addEventListener('keydown', (evt) => {
            if (evt.key === 'Escape' && this._popup) {                                              // Если ключ кнопки равен Esc, то
                this.close(this._popup);                                                              // И удаляем класс у попапа
            }
        });
    }

    setEventListeners() {
        const closeBtn = this._popup.querySelector('.popup__close-btn');
        closeBtn.addEventListener('click', this.close);
    }
}