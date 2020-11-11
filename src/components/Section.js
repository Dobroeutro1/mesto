export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = containerSelector;
    }

    renderItems(item, myId) {
        this._renderer(item, myId);
    }

    addItem(domElement) {
        this._container.append(domElement);
    }

    addItemPrepend(domElement) {
        this._container.prepend(domElement);
    }
}