// Taking reference

let screen = document.getElementById("screen");
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let dot = document.getElementById("dot");
let clear = document.getElementById("clear");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let mult = document.getElementById("mult");
let divide = document.getElementById("divide");
let equals = document.getElementById("equals");

// global variable

let str = "";
let str_display = "";

zero.addEventListener("click", function () {
  str_display += zero.innerText;
  str += "0";
  console.log(str_display);
  screen.innerText = str;
});

one.addEventListener("click", function () {
  str_display += one.innerText;
  str += "1";
  console.log(str);
  screen.innerText = str_display;
});

two.addEventListener("click", function () {
  str_display += two.innerText;
  str += "2";
  console.log(str);
  screen.innerText = str_display;
});

three.addEventListener("click", function () {
  str_display += three.innerText;
  str += "3";
  console.log(str);
  screen.innerText = str_display;
});

four.addEventListener("click", function () {
  str_display += four.innerText;
  str += "4";
  console.log(str);
  screen.innerText = str_display;
});

five.addEventListener("click", function () {
  str_display += five.innerText;
  str += "5";
  console.log(str);
  screen.innerText = str_display;
});

six.addEventListener("click", function () {
  str_display += six.innerText;
  str += "6";
  console.log(str);
  screen.innerText = str_display;
});

seven.addEventListener("click", function () {
  str_display += seven.innerText;
  str += "7";
  console.log(str);
  screen.innerText = str_display;
});

eight.addEventListener("click", function () {
  str_display += eight.innerText;
  str += "8";
  console.log(str);
  screen.innerText = str_display;
});

nine.addEventListener("click", function () {
  str_display += nine.innerText;
  str += "9";
  console.log(str);
  screen.innerText = str_display;
});

dot.addEventListener("click", function () {
  str_display += dot.innerText;
  str += ".";
  console.log(str);
  screen.innerText = str_display;
});

plus.addEventListener("click", function () {
  str_display += plus.innerText;
  str += "+";
  console.log(str);
  screen.innerText = str_display;
});

minus.addEventListener("click", function () {
  str_display += minus.innerText;
  str += "-";
  console.log(str);
  screen.innerText = str_display;
});

mult.addEventListener("click", function () {
  str_display += mult.innerText;
  str += "*";
  console.log(str);
  screen.innerText = str_display;
});

divide.addEventListener("click", function () {
  str_display += divide.innerText;
  str += "/";
  console.log(str);
  screen.innerText = str_display;
});

clear.addEventListener("click", function () {
  str_display = "";
  str = "";
  screen.innerText = str_display;
});

equals.addEventListener("click", function () {
  let output = eval(str);
  str_display = output;
  str = output;
  console.log(output);
  screen.innerText = output;
});
