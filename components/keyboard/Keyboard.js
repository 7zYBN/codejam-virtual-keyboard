import Button from '../button/Button.js';

export default class Keyboard {
  constructor(parent, template) {
    this._parent = parent;
    this._template = template;

    this._possibleLanguages = this._getPossibleLanguagesFromTemplate();

    if (localStorage.language) this._language = localStorage.language;
    else this._setLanguageFromTemplate();

    this._upperCase = false;
    this._wrapper = this._buildWrapper();
    this._allKeyboardButtons = [];

    this._buildKeyboard();
    this._setListeners();
  }

  _getPossibleLanguagesFromTemplate() {
    const firstButtonObject = Object.values(this._template[0][0])[0];
    const possibleLanguages = Object.keys(firstButtonObject);

    const filterCallback = (this._upperCase) ? (language) => language.includes('upper') : (language) => !language.includes('upper');

    return possibleLanguages.filter((language) => filterCallback(language));
  }

  _setLanguageFromTemplate(index = 0) {
    const error = new Error('not correct structure of keyboard template');

    if (!this._possibleLanguages) throw error;

    this._language = this._possibleLanguages[index];
    localStorage.language = (this._upperCase) ? this._language.substr(0, this._language.indexOf('-upper')) : this._language;
  }

  _buildWrapper() {
    const wrapper = document.createElement('div');

    wrapper.classList.add('keyboard-wrapper');
    this._parent.appendChild(wrapper);

    return wrapper;
  }

  _buildKeyboard() {
    this._template.forEach((row, rowIndex) => {
      const keyboardRow = this._createKeyboardRow(rowIndex);

      this._allKeyboardButtons.push([]);

      row.forEach((button) => {
        this._initButton(rowIndex, button, keyboardRow);
      });
    });
  }

  _createKeyboardRow(rowIndex) {
    const row = document.createElement('div');

    row.classList.add(`keyboard-row-${rowIndex}`);
    this._wrapper.appendChild(row);

    return row;
  }

  _initButton(rowIndex, button, parent) {
    const key = Object.keys(button)[0];
    const value = this._getValueForButton(button);
    const newButton = new Button(value, key, parent);

    this._allKeyboardButtons[rowIndex].push(newButton);
  }

  _getValueForButton(button) {
    const values = Object.values(button);

    return values[0][this._language];
  }

  _setListeners() {
    this._wrapper.addEventListener('mousedown', (event) => {
      if (event.target.closest('.button')) this._createNewEvent('keydown', event.target.dataset);
    });

    this._wrapper.addEventListener('mouseup', (event) => {
      if (event.target.closest('.button')) this._createNewEvent('keyup', event.target.dataset);
    });
  }

  _createNewEvent(newEvent, { key, code }) {
    const e = new Event(newEvent);

    e.key = key;
    e.code = code;
    document.dispatchEvent(e);

    return this;
  }

  switchLanguage() {
    const languageIndex = this._possibleLanguages.indexOf(this._language);
    const nextLanguageIndex = (languageIndex === this._possibleLanguages.length - 1)
      ? 0
      : languageIndex + 1;

    this._setLanguageFromTemplate(nextLanguageIndex);

    this._template.forEach((row, rowIndex) => {
      row.forEach((button, buttonIndex) => {
        const newValueForButton = this._getValueForButton(button);

        this._allKeyboardButtons[rowIndex][buttonIndex].changeButtonValue(newValueForButton);
      });
    });
  }

  switchUpperCase() {
    const languageIndex = this._possibleLanguages.indexOf(this._language);

    this._upperCase = !this._upperCase;
    this._possibleLanguages = this._getPossibleLanguagesFromTemplate();


    this._setLanguageFromTemplate(languageIndex);

    this._template.forEach((row, rowIndex) => {
      row.forEach((button, buttonIndex) => {
        const newValueForButton = this._getValueForButton(button);

        this._allKeyboardButtons[rowIndex][buttonIndex].changeButtonValue(newValueForButton);
      });
    });
  }
}
