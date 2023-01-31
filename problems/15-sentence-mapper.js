/*******************************************************************************
Write a function `sentenceMapper` that accepts a sentence and a callback as arguments.
The function should return a new sentence where
 every word of the original sentence
becomes the result of passing the word to the callback.

Examples:

let result1 = sentenceMapper("what is the answer?", function(word) {
    return word.toUpperCase() + "!";
});
console.log(result1); // 'WHAT! IS! THE! ANSWER?!'

let removeVowels = function(word) {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!"aeiou".includes(char)) {
            newWord += char;
        }
    }
    return newWord;
};

let result2 = sentenceMapper("this is pretty cool right", removeVowels);
console.log(result2); // 'ths s prtty cl rght'
*******************************************************************************/

let sentenceMapper = function (sentence, cb) {
const newSentence = []; // new array to push modified sentence words in
let sentenceArr = sentence.split(' '); // turn the original sentence into an array split at every space
for (let i = 0; i < sentenceArr.length; i++) {
 sentenceArr[i] = cb(sentenceArr[i]) // every element in the array = the callback function version of the element
 newSentence.push(sentenceArr[i]); //push the new element into the newarray
}
return newSentence.join(' ');  //return array with join
};

let result1 = sentenceMapper("what is the answer?", function(word) {
  return word.toUpperCase() + "!";
});
console.log(result1); // 'WHAT! IS! THE! ANSWER?!'



let removeVowels = function(word) {
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!"aeiou".includes(char)) {
          newWord += char;
      }
  }
  return newWord;
};

let result2 = sentenceMapper("this is pretty cool right", removeVowels);
console.log(result2); // 'ths s prtty cl rght'
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = sentenceMapper;
} catch (e) {
  return null;
}
