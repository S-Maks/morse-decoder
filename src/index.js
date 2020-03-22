const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr)
{
    //var expr = '00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'; 
      var coderResult = '';
      var result = '';
      var temp = '';
      //function decode(expr) {
        // write your solution here
      
        for(let j = 0; j<expr.length; j+=10){
          if(expr[j]==='*'){
            result +=' ';
          }
          else{
      
            for(let i = j; i<j+10; i+=2){
              temp += expr[i] + expr[i+1];
              if(temp != '00'){
                if(temp =='10'){
                  coderResult+='.';
                }else{
                  coderResult += '-';
                }
              }
              temp = '';  
          }
          
          result+= MORSE_TABLE[coderResult];
          coderResult = '';
        }
      }
    return result;
}
module.exports = {
    decode
}