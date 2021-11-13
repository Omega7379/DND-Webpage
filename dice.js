//Javascript page for G2TWebpageDice.html, created by Josip Bailey, last edited 101220

var multipliedRoll = parseInt(document.getElementById('multiplier').value);


//set code for 3 sided die
function dice3(multipliedRoll){
  for (i = 0; i < multipliedRoll; i++){
var dice3 = {
    sides3: 3,
    roll: function () {
      //random number variable within function using math syntaxes
      var randomNumber = Math.floor(Math.random() * this.sides3) + 1;
      //output final answer
      return randomNumber;
    }
  };
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById("placeholder");
    placeholder.innerHTML += number + "  ";
    }
  printNumber(dice3.roll())
  var button = document.getElementById("button3");
  
}
}
//set code for 4 sided die
function dice4(multipliedRoll){
  for (i = 0; i < multipliedRoll; i++){
var dice4 = {
    sides4: 4,
    roll: function () {
      //random number variable within function using math syntaxes
      var randomNumber = Math.floor(Math.random() * this.sides4) + 1;
      //output final answer
      return randomNumber;
    }
  };
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById("placeholder");
    placeholder.innerHTML += number + "  ";
    }
  printNumber(dice4.roll())
  var button = document.getElementById("button4");
  
}
}


//set code for 1d6  
function dice6(multipliedRoll){
  for (i = 0; i < multipliedRoll; i++){
var dice6 = {
    sides6: 6,
    roll: function () {
      //random number variable within function using math syntaxes
      var randomNumber = Math.floor(Math.random() * this.sides6) + 1;
      //output final answer
      return randomNumber;
    }
  };
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById("placeholder");
    placeholder.innerHTML += number + "  ";
    }
  printNumber(dice6.roll())
  var button = document.getElementById("button6");
  }
}

//set code for 1d8
function dice8(multipliedRoll){
  for (i = 0; i < multipliedRoll; i++){
var dice8 = {
    sides8: 8,
    roll: function () {
      //random number variable within function using math syntaxes
      var randomNumber = Math.floor(Math.random() * this.sides8) + 1;
      //output final answer
      return randomNumber;
    }
  };
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById("placeholder");
    placeholder.innerHTML += number + "  ";
    }
  printNumber(dice8.roll())
  var button = document.getElementById("button8");
  
}
}


//set code for 1d10
function dice10(multipliedRoll){
  for (i = 0; i < multipliedRoll; i++){
var dice10 = {
    sides10: 10,
    roll: function () {
      //random number variable within function using math syntaxes
      var randomNumber = Math.floor(Math.random() * this.sides10) + 1;
      //output final answer
      return randomNumber;
    }
  };
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById("placeholder");
    placeholder.innerHTML += number + "  ";
    }
  printNumber(dice10.roll())
  var button = document.getElementById("button10");
  
}
}


//set code for 1d12
function dice12(multipliedRoll){
  for (i = 0; i < multipliedRoll; i++){
var dice12 = {
    sides12: 12,
    roll: function () {
      //random number variable within function using math syntaxes
      var randomNumber = Math.floor(Math.random() * this.sides12) + 1;
      //output final answer
      return randomNumber;
    }
  };
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById("placeholder");
    placeholder.innerHTML += number + "  ";
    }
  printNumber(dice12.roll())
  var button = document.getElementById("button12");
  
}
}


//set code for 1d20
function dice20(multipliedRoll){
  for (i = 0; i < multipliedRoll; i++){
var dice20 = {
    sides20: 20,
    roll: function () {
      //random number variable within function using math syntaxes
      var randomNumber = Math.floor(Math.random() * this.sides20) + 1;
      //output final answer
      return randomNumber;
    }
  };
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById("placeholder");
    placeholder.innerHTML += number + "  ";
    }
  printNumber(dice20.roll())
  var button = document.getElementById("button20");
  
}
}


//set code for 1d24
function dice24(multipliedRoll){
  for (i = 0; i < multipliedRoll; i++){
var dice24 = {
    sides24: 24,
    roll: function () {
      //random number variable within function using math syntaxes
      var randomNumber = Math.floor(Math.random() * this.sides24) + 1;
      //output final answer
      return randomNumber;
    }
  };
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById("placeholder");
    placeholder.innerHTML += number + "  ";
    }
  printNumber(dice24.roll())
  var button = document.getElementById("button24");
  
}
}


//set code for 1d30
function dice30(multipliedRoll){
  for (i = 0; i < multipliedRoll; i++){
var dice30 = {
    sides30: 30,
    roll: function () {
      //random number variable within function using math syntaxes
      var randomNumber = Math.floor(Math.random() * this.sides30) + 1;
      //output final answer
      return randomNumber;
    }
  };
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById("placeholder");
    placeholder.innerHTML += number + "  ";
    }
  printNumber(dice30.roll())
  var button = document.getElementById("button30");
  
}
}


//set code for 1d50
function dice50(multipliedRoll){
  for (i = 0; i < multipliedRoll; i++){
var dice50 = {
    sides50: 50,
    roll: function () {
      //random number variable within function using math syntaxes
      var randomNumber = Math.floor(Math.random() * this.sides50) + 1;
      //output final answer
      return randomNumber;
    }
  };
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById("placeholder");
    placeholder.innerHTML += number + "  ";
    }
  printNumber(dice50.roll())
  var button = document.getElementById("button50");
  
}
}


//set code for 1d70
function dice70(multipliedRoll){
  for (i = 0; i < multipliedRoll; i++){
var dice70 = {
    sides70: 70,
    roll: function () {
      //random number variable within function using math syntaxes
      var randomNumber = Math.floor(Math.random() * this.sides70) + 1;
      //output final answer
      return randomNumber;
    }
  };
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById("placeholder");
    placeholder.innerHTML += number + "  ";
    }
  printNumber(dice70.roll())
  var button = document.getElementById("button70");
  
}
}


//set code for 1d100
function dice100(multipliedRoll){
  for (i = 0; i < multipliedRoll; i++){
var dice100 = {
    sides100: 100,
    roll: function () {
      //random number variable within function using math syntaxes
      var randomNumber = Math.floor(Math.random() * this.sides100) + 1;
      //output final answer
      return randomNumber;
    }
  };
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById("placeholder");
    placeholder.innerHTML += number + "  ";
    }
  printNumber(dice100.roll())
  var button = document.getElementById("button100");
  
}
}

//clear the line of numbers
function clearNumbers(){
  //location.reload as the name suggests reloads the page effectively clearing the numbers
  location.reload()
}