/*Complete the solution so that it reverses the string passed into it.*/

function solution(str){
    var rts ='';
    for (let x = 0; x < str.length; x++) {
      rts += str[str.length - x - 1];
    }
    return rts;
}