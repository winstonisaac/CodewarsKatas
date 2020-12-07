/* Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.*/

function converter(RomanNumeral){
  switch(true) {
    case(RomanNumeral === 'I'):
      return 1;
    case(RomanNumeral === 'V'):
      return 5;
    case(RomanNumeral === 'X'):
      return 10;
    case(RomanNumeral === 'L'):
      return 50;
    case(RomanNumeral === 'C'):
      return 100;
    case(RomanNumeral === 'D'):
      return 500;
    case(RomanNumeral === 'M'):
      return 1000;
  }
}
function solution(RomanExpression){
  var ArabicEquivalent = 0;
  for(let index = 0; index < RomanExpression.length; index++){
    if(converter(RomanExpression[index]) < converter(RomanExpression[index + 1])){
      ArabicEquivalent -= converter(RomanExpression[index]);
      continue;
    }
    ArabicEquivalent += converter(RomanExpression[index]);
  }
  return ArabicEquivalent;
}