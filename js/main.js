const checksTheLength = (string, maxLength) => {
  return string <= maxLength ? true : false;
}


const checksForPalindrome = string=>{
  let preparedString = string.replaceAll(' ', '').toUpperCase();
  let emptyString = '';
for(let i = preparedString.length -1; i >= 0; i-=1 ){
  emptyString += preparedString[i];
}
return emptyString === preparedString;
}


