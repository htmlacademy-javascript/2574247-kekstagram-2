

const checksTheLength = (string, maxLength) => string.length <= maxLength;

checksTheLength('проверяемая строка', 20);
checksTheLength('проверяемая строка', 18);
checksTheLength('проверяемая строка', 10);


function checksForPalindrome (string) {
  const preparedString = string.replaceAll(' ', '').toUpperCase();
  let emptyString = '';
  for (let i = preparedString.length - 1; i >= 0; i -= 1){
    emptyString += preparedString[i];
  }
  return emptyString === preparedString;
}
checksForPalindrome('топот');
checksForPalindrome('ДовОд');
checksForPalindrome('Кекс');
checksForPalindrome('Лёша на полке клопа нашёл ');

function getNumber (string){

  let result = '';

  if(typeof string === 'number'){
    return string;
  }

  for(let i = 0; i < string.length; i += 1){
    if(!Number.isNaN(parseInt(string[i], 10))){
      result += string[i];
    }
  }
  return +result;
}

getNumber('2023'); //2023
getNumber('2023 год'); //2023
getNumber('1 кефир, 0.5 батона'); //105
getNumber('агент 007'); //7
getNumber('а я томат'); //0
getNumber(-1); // -1
getNumber(1.5); // 1.5


