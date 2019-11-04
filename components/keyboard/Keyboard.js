import Button from "../button/Button.js"

export default class Keyboard {
  constructor(parent, template) {
    this._parent = parent;
    this._template = template;

    this._possibleLanguages = this._getPossibleLanguagesFromTemplate();
    this._language = this._setLanguageFromTemplate();
    this._upperCase = false;
    this._wrapper = this._buildWrapper();
    
    this._buildKeyboard();
  }

  _getPossibleLanguagesFromTemplate() {
    const listIndex = 0;
    const firstButtonObject = Object.values(this._template[listIndex][listIndex])[listIndex];
    const possibleLanguages = Object.keys(firstButtonObject);    
    
    return possibleLanguages;
  }

  _setLanguageFromTemplate() {
    const error = new Error('not correct structure of keyboard template');
    const firstLanguageIndex = 0;

    if (!this._possibleLanguages) throw error;

    return this._possibleLanguages.filter(language => !language.includes('upper'))[firstLanguageIndex];
  }

  _buildWrapper() {
    const wrapper = document.createElement('div');

    wrapper.classList.add('keyboard-wrapper');
    this._parent.appendChild(wrapper);

    return  wrapper;
  }

  _buildKeyboard() {
    this._template.forEach((row, rowIndex) => {
      const keyboardRow = this._createKeyboardRow(rowIndex);

      row.forEach(button => {
        this._initButton(button, keyboardRow);
      })

    })
  }

  _createKeyboardRow(rowIndex) {
    const row = document.createElement('div');

    row.classList.add(`keyboard-row-${rowIndex}`);
    this._wrapper.appendChild(row);

    return row;
  }

  _initButton(button, parent) {
    const key = Object.keys(button)[0];
    const values = Object.values(button);
    const value = this._upperCase ? [`${this._language}-upper`] : [this._language];

    new Button(values[0][value], key, parent);
  }
}
