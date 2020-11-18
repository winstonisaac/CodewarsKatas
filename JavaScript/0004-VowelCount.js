/*Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
    var vowelsCount = 0;
    var vowels= "aeiou";
    for(char = 0; char < str.length; char++){
      if(vowels.includes(str[char].toLowerCase())){
        vowelsCount++;
      }
    }
    return vowelsCount;
  }