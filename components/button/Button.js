export default class Button {
  constructor(key, code, parent) {
    this._key = key;
    this._code = code;
    this._parent = parent;

    this._button = this._createButton();
  }

  changeButtonValue(newKey) {
    this._button.innerHTML = newKey;
    this._button.setAttribute('data-key', newKey);
  }

  setUpperCase() {
    this._button.classList.add('clicked');
  }

  _createButton() {
    const button = document.createElement('div');

    button.innerHTML = this._key;
    button.classList.add('button');
    button.setAttribute('data-code', this._code);
    button.setAttribute('data-key', this._key);
    this._parent.appendChild(button);

    return button;
  }
}
