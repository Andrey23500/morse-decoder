const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let wordsNum = expr.split('**********');
    let wordsTxt = [];

    for (let i = 0; i < wordsNum.length; i++) {
        while (wordsNum[i].length % 10 != 0) wordsNum[i].unshift(0);
    }

    for (let i = 0; i < wordsNum.length; i++) {
        let letters = [];
        let lettr = '';
        for (let j = 0; j < wordsNum[i].length; j++) {
            lettr += wordsNum[i][j];
            if (lettr.length == 10) {
                letters.push(lettr);
                lettr = '';
            }
        }

        let str = '';
        let words = '';
        for (let j = 0; j < letters.length; j++) {
            for (let k = 0; k < letters[j].length; k += 2) {
                if (letters[j][k] == 1 && letters[j][k + 1] == 0) str += '.';
                if (letters[j][k] == 1 && letters[j][k + 1] == 1) str += '-';
                if (letters[j][k] == 0 && letters[j][k + 1] == 0) str += '';
            }
            words+=(MORSE_TABLE[str]);
            str = '';
        }

        wordsTxt.push(words);
    }

    return wordsTxt.join(' ');
}

module.exports = {
    decode
}