/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890" */

function createPhoneNumber(numbers){
    var phoneNumber = '(';
    for(var index = 0; index < 3; index ++){
        phoneNumber += numbers[index];
    }
    phoneNumber += ') ';
    for(; index < 6; index ++){
        phoneNumber += numbers[index];
    }
    phoneNumber += '-';
    for(; index < numbers.length; index ++){
        phoneNumber += numbers[index];
    }
    return phoneNumber;
}