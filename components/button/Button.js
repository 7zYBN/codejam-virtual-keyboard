export default class Button {
  constructor(key, code, parent) {
    this._key = key;
    this._code = code;
    this._parent = parent;

    this._button = this._createButton();
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
