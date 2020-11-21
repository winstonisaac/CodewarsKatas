/* Your job is to write a function which increments a string, to create a new string.
If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Attention: If the number has leading zeros the amount of digits should be considered. */

function incrementString (str) {
    var numberPart;
    if(str === ''){
        return '1';
    }
    for(var index = 0; index < str.length; index++){
        if(!isNaN(str[index])){
            if(str[index] != '0'){
                numberPart = str.slice(index, str.length);
                if(numberPart.length != (parseInt(numberPart) + 1).toString().length && str[index - 1] === '0'){
                    str = str.slice(0, index - 1) + (parseInt(numberPart) + 1).toString();
                    return str; 
                }
                str = str.slice(0, index) + (parseInt(numberPart) + 1).toString();
                return str;
            }
            if(str[index] === '0' && index === str.length - 1){
                numberPart = str.slice(index, str.length);
                str = str.slice(0, index) + (parseInt(numberPart) + 1).toString();
                return str;
            }
        }
        if(index === str.length - 1){
            return str + '1';
        }
    }
}