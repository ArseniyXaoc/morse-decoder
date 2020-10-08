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
    let strDecode ='';
    const re = /.{1,10}/g;
    let decode = expr.match(re);
    let letter ='';
    console.log(decode);
    const morzeCode = (str) => {
        str = str.match(/.{1,2}/g);
        let morzeCode = str.map(item => {
            if (item === '00') return '';
            if (item === '10') return '.';
            if (item === '11') return '-';
        })
        morzeCode = morzeCode.join('');        
        return morzeCode
    }
    for (item of decode) {
        if(item === '**********') letter +=' ';
        else{
        strDecode = morzeCode(item); 
        letter +=   MORSE_TABLE[strDecode]
    }
    }
    return letter;
    // write your solution here
}

module.exports = {
    decode
}

