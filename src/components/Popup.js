export default class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
            if (evt.key === 'Escape' && this._popup) {
                this.close(this._popup);
            }
    }

    setEventListeners() {
        const closeBtn = this._popup.querySelector('.popup__close-btn');
        const popupOverlayList = document.querySelectorAll('.popup');

        closeBtn.addEventListener('click', this.close.bind(this));
        popupOverlayList.forEach((popupOverlay) => {
            popupOverlay.addEventListener('mousedown', (evt) => {
                if (evt.target.classList.contains('popup')) {
                  this.close();
                }
            });
        })
    }
}