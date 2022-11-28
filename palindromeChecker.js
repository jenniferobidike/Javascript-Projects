function palindrome(str) {

 //change charcters to lowercase

 //make sure that they are only alphanumeric characters

 //make sure the reverse string ===return string

 const alphanumericOnly = str.toLowerCase()

                          .match(/[a-z0-9]/g);

  

  return alphanumericOnly.join('') === alphanumericOnly.reverse().join('');

}



console.log(palindrome("jennifer"));
