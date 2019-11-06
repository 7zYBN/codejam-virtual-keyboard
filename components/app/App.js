import Keyboard from '../keyboard/Keyboard';
import KeyboardTemplate from '../../data/BUTTONS';

export default class Slon {
  constructor() {
    this._textArea = null;

    this._keyboard = null;

    this._setListeners();
  }

  buildApplication() {
    this._createTextArea();
    this._keyboard = new Keyboard(document.body, KeyboardTemplate);
  }

  _createTextArea() {
    const textArea = document.createElement('textarea');

    textArea.classList.add('textarea');
    textArea.cols = 70;
    textArea.rows = 10;
    document.body.appendChild(textArea);

    this._textArea = textArea;
  }

  _setListeners() {
    let lastKey = '';
    document.addEventListener('keydown', (event) => {
      event.preventDefault();


      const button = document.querySelector(`[data-code = ${event.code}]`);

      if (button) {
        if ((lastKey === 'Control' && event.key === 'Alt') || (lastKey === 'Alt' && event.key === 'Control')) this._keyboard.switchLanguage();
        lastKey = event.key;

        const functionalKeys = {

          'control-keys': {
            Control: '',
            Alt: '',
            Meta: '',
            Tab: ' '.repeat(10),
            Enter: '\n',
          },

          'upper-case-keys': ['CapsLock', 'Shift'],
        };

        const actionWithKeyboard = (key) => {
          if (Object.prototype.hasOwnProperty.call(functionalKeys['control-keys'], key)) this._textArea.value += functionalKeys['control-keys'][key];
          else if (functionalKeys['upper-case-keys'].includes(key)) this._keyboard.switchUpperCase();
          else if (key === 'Backspace') this._textArea.value = this._textArea.value.substr(0, this._textArea.value.length - 1);
          else this._textArea.value += key;
        };

        actionWithKeyboard(button.dataset.key);
        button.classList.toggle('clicked');
      }
    });

    document.addEventListener('keyup', (event) => {
      event.preventDefault();
      lastKey = '';
      const button = document.querySelector(`[data-code = ${event.code}]`);

      if (button) {
        if (button.dataset.key !== 'CapsLock') button.classList.remove('clicked');
        if (button.dataset.key === 'Shift') this._keyboard.switchUpperCase();
      }
    });
  }
}
