function isPangram(string){
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  string = string.toLowerCase();
  for(let letter = 0; letter < alphabet.length; letter++){
    if(string.includes(alphabet[letter])){
      continue;
    }else{
      return false;
    }
  }
  return true;
}