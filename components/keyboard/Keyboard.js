export default class Keyboard {
  constructor(parent, template) {
    this._parent = parent;
    this._template = template;

    this._possibleLanguages = this._getPossibleLanguagesFromTemplate();
    this._language = this._setLanguageFromTemplate();
    this._upperCase = false;
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

    if (this._possibleLanguages) {
      return this._possibleLanguages.filter(language => !language.includes('-upper'))[firstLanguageIndex];
    }
    
    throw error;
  }
}
