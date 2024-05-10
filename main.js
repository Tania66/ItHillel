// task 1
const age = 23;
const name = "Tania";
const female = true;
const selectedFood = null;
const fear = undefined;
const uncertainty = 87463427340483n;
const nickName = Symbol("Vanini");
const skills = {
  css: 50,
  html: 50,
  js: 33,
  react: 25,
};

console.log(typeof age);
console.log(typeof name);
console.log(typeof female);
console.log(typeof fear);
console.log(typeof uncertainty);
console.log(typeof nickName);
console.log(typeof skills);

//task 2
const firstSentence = "this is just the beginning of the journey";
const secondSentence = "Java script is a cool thing";
const thirdSentence = "let the hunger games begin";

console.log(`${secondSentence},`, `${firstSentence},`, `${thirdSentence}.`);

//task 3
const nick = "43221";
console.log(nick.split("").join(" "));
