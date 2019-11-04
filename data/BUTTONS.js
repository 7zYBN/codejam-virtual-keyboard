const BUTTONS = [
  [
    {
      Backquote: {
        RU: 'ё',
        US: '`',
        'RU-upper': 'Ё',
        'US-upper': '~'
      }
    },

    {
      Digit1: {
        RU: '1',
        US: '1',
        'RU-upper': '!',
        'US-upper': '!'
      }
    },

    {
      Digit2: {
        RU: '2',
        US: '2',
        'RU-upper': '"',
        'US-upper': '@'
      }
    },

    {
      Digit3: {
        RU: '3',
        US: '3',
        'RU-upper': '№',
        'US-upper': '#'
      }
    },

    {
      Digit4: {
        RU: '4',
        US: '4',
        'RU-upper': ';',
        'US-upper': '$'
      }
    },

    {
      Digit5: {
        RU: '5',
        US: '5',
        'RU-upper': '%',
        'US-upper': '%'
      }
    },

    {
      Digit6: {
        RU: '6',
        US: '6',
        'RU-upper': ':',
        'US-upper': '^'
      }
    },

    {
      Digit7: {
        RU: '7',
        US: '7',
        'RU-upper': '?',
        'US-upper': '&'
      }
    },

    {
      Digit8: {
        RU: '8',
        US: '8',
        'RU-upper': '*',
        'US-upper': '*'
      }
    },

    {
      Digit9: {
        RU: '9',
        US: '9',
        'RU-upper': '(',
        'US-upper': '('
      }
    },

    {
      Digit0: {
        RU: '0',
        US: '0',
        'RU-upper': ')',
        'US-upper': ')'
      }
    },

    {
      Minus: {
        RU: '-',
        US: '-',
        'RU-upper': '_',
        'US-upper': '_'
      }
    },

    {
      Equal: {
        RU: '=',
        US: '=',
        'RU-upper': '+',
        'US-upper': '+'
      }
    },

    {
      Backspace: {
        RU: 'Backspace',
        US: 'Backspace',
        'RU-upper': 'Backspace',
        'US-upper': 'Backspace'
      }
    },
  ],
  
  [
    {
      Tab: {
        RU: 'Tab',
        US: 'Tab',
        'RU-upper': 'Tab',
        'US-upper': 'Tab'
      }
    },

    {
    KeyQ: {
      RU: 'й',
      US: 'q',
      'RU-upper': 'Й',
      'US-upper': 'Q'
    }
    },

    {
      KeyW: {
        RU: 'ц',
        US: 'w',
        'RU-upper': 'Ц',
        'US-upper': 'W'
      }
    },

    {
      KeyE: {
        RU: 'у',
        US: 'e',
        'RU-upper': 'У',
        'US-upper': 'E'
      }
    },

    {
      KeyR: {
        RU: 'к',
        US: 'r',
        'RU-upper': 'К',
        'US-upper': 'R'
      }
    },

    {
      KeyT: {
        RU: 'е',
        US: 't',
        'RU-upper': 'Е',
        'US-upper': 'T'
      }
    },

    {
      KeyY: {
        RU: 'н',
        US: 'y',
        'RU-upper': 'Н',
        'US-upper': 'Y'
      }
    },

    {
      KeyU: {
        RU: 'г',
        US: 'u',
        'RU-upper': 'Г',
        'US-upper': 'U'
      }
    },

    {
      KeyI: {
        RU: 'ш',
        US: 'i',
        'RU-upper': 'Ш',
        'US-upper': 'I'
      }
    },

    {
      KeyO: {
        RU: 'щ',
        US: 'o',
        'RU-upper': 'Щ',
        'US-upper': 'O'
      }
    },

    {
      KeyP: {
        RU: 'з',
        US: 'p',
        'RU-upper': 'З',
        'US-upper': 'P'
      }
    },

    {
      BracketLeft: {
        RU: 'х',
        US: '[',
        'RU-upper': 'Х',
        'US-upper': '{'
      }
    },

    {
      BracketRight: {
        RU: 'ъ',
        US: ']',
        'RU-upper': 'Ъ',
        'US-upper': '}'
      }
    },
  ],

  [
    {
      CapsLock: {
        RU: 'CapsLock',
        US: 'CapsLock',
        'RU-upper': 'CapsLock',
        'US-upper': 'CapsLock'
      }
    },

    {
      KeyA: {
        RU: 'ф',
        US: 'a',
        'RU-upper': 'Ф',
        'US-upper': 'A'
      }
    },

    {
      KeyS: {
        RU: 'ы',
        US: 's',
        'RU-upper': 'Ы',
        'US-upper': 'S'
      }
    },

    {
      KeyD: {
        RU: 'в',
        US: 'd',
        'RU-upper': 'В',
        'US-upper': 'D'
      }
    },

    {
      KeyF: {
        RU: 'а',
        US: 'f',
        'RU-upper': 'А',
        'US-upper': 'F'
      }
    },

    {
      KeyG: {
        RU: 'п',
        US: 'g',
        'RU-upper': 'П',
        'US-upper': 'G'
      }
    },

    {
      KeyH: {
        RU: 'р',
        US: 'h',
        'RU-upper': 'Р',
        'US-upper': 'H'
      }
    },

    {
      KeyJ: {
        RU: 'о',
        US: 'j',
        'RU-upper': 'О',
        'US-upper': 'J'
      }
    },
    
    {
      KeyK: {
        RU: 'л',
        US: 'k',
        'RU-upper': 'Л',
        'US-upper': 'K'
      }
    },

    {
      KeyL: {
        RU: 'д',
        US: 'l',
        'RU-upper': 'Д',
        'US-upper': 'L'
      }
    },

    {
      Semicolon: {
        RU: 'ж',
        US: ';',
        'RU-upper': 'Ж',
        'US-upper': ':'
      }
    },

    {
      Quote: {
        RU: 'э',
        US: "'",
        'RU-upper': 'Э',
        'US-upper': '"'
      }
    },

    {
      Enter: {
        RU: 'Enter',
        US: 'Enter',
        'RU-upper': 'Enter',
        'US-upper': 'Enter'
      }
    }
  ],

  [
    {
      ShiftLeft: {
        RU: 'Shift',
        US: 'Shift',
        'RU-upper': 'Shift',
        'US-upper': 'Shift'
      }
    },

    {
    KeyZ: {
      RU: 'я',
      US: 'z',
      'RU-upper': 'Я',
      'US-upper': 'Z'
    }
    },

    {
      KeyX: {
        RU: 'ч',
        US: 'x',
        'RU-upper': 'Ч',
        'US-upper': 'X'
      }
    },

    {
      KeyC: {
        RU: 'с',
        US: 'c',
        'RU-upper': 'С',
        'US-upper': 'C'
      }
    },

    {
      KeyV: {
        RU: 'м',
        US: 'v',
        'RU-upper': 'М',
        'US-upper': 'V'
      }
    },

    {
      KeyB: {
        RU: 'и',
        US: 'b',
        'RU-upper': 'И',
        'US-upper': 'B'
      }
    },

    {
      KeyN: {
        RU: 'т',
        US: 'n',
        'RU-upper': 'Т',
        'US-upper': 'N'
      }
    },

    {
      KeyM: {
        RU: 'ь',
        US: 'm',
        'RU-upper': 'Ь',
        'US-upper': 'M'
      }
    },
    
    {
      Comma: {
        RU: 'б',
        US: ',',
        'RU-upper': 'Б',
        'US-upper': '<'
      }
    },

    {
      Period: {
        RU: 'ю',
        US: '.',
        'RU-upper': 'Ю',
        'US-upper': '>'
      }
    },

    {
      Slash: {
        RU: '.',
        US: '/',
        'RU-upper': ',',
        'US-upper': '?'
      }
    },

    {
      ShiftRight: {
        RU: 'Shift',
        US: 'Shift',
        'RU-upper': 'Shift',
        'US-upper': 'Shift'
      }
    }
  ],

  [
    {
      ControlLeft: {
        RU: 'Control',
        US: 'Control',
        'RU-upper': 'Control',
        'US-upper': 'Control'
      }
    },

    {
      MetaLeft: {
        RU: 'Meta',
        US: 'Meta',
        'RU-upper': 'Meta',
        'US-upper': 'Meta'
      }
    },

    {
      AltLeft: {
        RU: 'Alt',
        US: 'Alt',
        'RU-upper': 'Alt',
        'US-upper': 'Alt'
      }
    },

    {
      Space: {
        RU: ' ',
        US: ' ',
        'RU-upper': ' ',
        'US-upper': ' '
      }
    },

    {
      AltRight: {
        RU: 'Alt',
        US: 'Alt',
        'RU-upper': 'Alt',
        'US-upper': 'Alt'
      }
    },

    {
      ControlRight: {
        RU: 'Control',
        US: 'Control',
        'RU-upper': 'Control',
        'US-upper': 'Control'
      }
    }
  ]
];

export default BUTTONS;