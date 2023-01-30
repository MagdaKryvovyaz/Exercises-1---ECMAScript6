/*
//Exercise 1
let user = {
    name: "John",
    years: 30
  }
let {name, years:age, isAdmin = false} = user;

//Exercise 2

let ourPlanetName = "Earth";
let currentVisitorName = prompt('Enter your name')


//Exercise 3

let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}
sayHi()

//Exercise 4

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


//Exercise 5

const user = {
    name: "John"
  }
  
  // does it work?
  user.name = "Pete"

  // yes, because we can change the parameter values ​​inside the variable const


//Exercise 6
let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
  }
  
  let sum = 0
  for (let i in salaries){
    sum += salaries[i]
  }

  console.log(sum);


//Exercise 7
(a + b < 4) ?  'Below' : 'Over';


//Exercise 8
let message = (login == 'Employee') ? 'Hello' : 
    (login == 'Director') ? 'Greetings' :
    (login == '') ?  'No login' : 
    '';
*/