function replaceVowel() {
  // Retrieve word/sentence from entry field
  var sampleString = document.getElementById("word-puzzle").value;
  // Initialise an empty variable
  var withoutVowels = "";
  // Creat a constant variable with the value "-"
  const replacement = "-";
  const vowels = ["a", "e", "i", "o" ,"u", "A", "E","I","O","U"];
  for(i = 0; i < sampleString.length; i ++) {
    // Check if the letter is a vowel
    if(vowels.includes(sampleString[i])) {
      // Push "-" to the variable, withoutVowels
      withoutVowels += replacement;
    }
    else {
      // Push the letter(itself) to the variable, withoutVowels
      withoutVowels += sampleString[i];
    }
  }
 document.getElementById("output").innerHTML = ("Guess the word/sentence:<br>"+withoutVowels+"");
}