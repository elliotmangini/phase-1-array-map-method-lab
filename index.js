const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(toProperCase);
}

const toProperCase = (string) => {
  let casedString = '';
  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      casedString += string[i].toUpperCase();
    } else if (string[i-1] === ' ') {
      casedString += string[i].toUpperCase();
    } else {
      casedString += string[i];
    }
  }
  return casedString;
}

console.log(toProperCase('what is JSONP?'));