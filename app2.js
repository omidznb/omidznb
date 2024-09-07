// function declration

// function add(a , b) {
//   console.log(a + b);  
//   return a + b;
// }
// add(4,5)
// you can call function befor introducing that
//function expression

// const addExpression=function (a,b) {
//   console.log(a + b);  
//      return a + b;
// }
// addExpression(4,6)
// you can NOT call that befor intrducing

// ----------------------------------------
// ARROW FUNCTION :()==> {} === function (){}

// function calculateDiscount(price, discount) {
//     return price * (1-discount);
// }

// const calculateDiscount= (price, discount)=> price * (1-discount);// function // JUST FOR ONE LINE FUNCTION
//implicit return
// const addByFive = a => a + 5 ; // remove return and ( ) and making summary
// ----------------------------------------------------------------------------
//SCOP ==>where vaiable can be accessed
//LEXCIAL scop
//LET -CONST VS VAR?

// let and const :block-scope

// scope:global , function (local), block
// const appName ="NOT-APP" // global scop 
// function outer() {
//     const userRole ="ADMIN";
//     console.log(appName);
//     function inner (){
//         console.log(userRole);//chain scope ! child have access to father 
//     }
//     inner()
// }//block scope

// function testfun(){
//     console.log(appName);
// }
// outer()// access to global scope 
// testfun()

//chain kardan zamani etfagh miofte ke const dar scope khodesh nabashe .
//var is a functional scope and we should dont use it
// -------------------------------------------
// 52 -default -patameters:
// function calculateOfPrice(numbers,discount=0.3) {
    // discount = discount || 0.3 
//     let total=0;
//     for (const item of numbers) total += item;
//     console.log(total *(1-discount));
//     return total *(1-discount);
// }

//([1,2,3,4],03)

// calculateOfPrice([1,2,3,4],)// olaviat ba addadi ke pass dade shode bad ba parameter
// maghadir default akharin parametr tarif shavand
// -----------------------------------------------------
// 53.PASS PRIMITIVE VS PASS REFERENCE TYPE:
//primitive
// const userName = "omid";
// function stringFun(str){
//     const newstr = 'Hi ${str}';
//     return newstr;
// }

// console.log(stringFun(userName));;

//---refrence
// const user ={
//     name:"omid",

// };

// function usercheck(obj) {
//     obj.name="ali";
//     obj.email="user@test.com"
//     return obj;
// }

// function usercheck2(obj) {
//     obj.mobile=091922222;
//     obj.lastName ="zn"
//     return obj;
// }


// usercheck(user);
// usercheck2(user)
// console.log(user);

// const obj = user;
// obj.name = "folan";
// console.log(obj);
// ------------------------------------------
//* FIRST CLASS FUNCTION
//first class: the function are treated like any other variable

//higher-order function 

//1. const add = () => {};
//2. const sum = (1) => {}
//3. cons myfun = function (fun){
 //   return fun
//}

// ==> first-function => ?? new concept ==>HOF ==> abstraction (OOP)

//callback function :
// function sayHi() {
//     return "Hi ";
    
// }
// function sayHallo () {
//     return "Hello "
// }

//HOf
// function greeting(name,fn) {
//     console.log("the function name is " + fn() + name);
//     return sayHi() + name ;
// }

//CB :call me back later
// greeting("omid",sayHi);
// greeting("Parinaz " , sayHallo);

// function newGreeting(str) {
//     return function (name) {
//         console.log(str + name);
//     };
// }

// const fun = newGreeting(" Hi !; ")("omid");;
// fun("omid");
// ----------------------------------------------

// function sayHi() {
//    return "hi !;";   
// }
// function sayHello() {
//   return "Hello "   
// }

// function greeting(name, cb){
//     console.log ("the function name is "+ cb.name );
// return cb()+ name 
// }



// greeting("omid", sayHi);
// greeting ("omid",sayHello)
// -----------------------------------------------
//56 higher order function usage

//HOF usage:
//[2,4,8] => [4,6,10]
//push ()
// function incArray(data,num) {
//     const newArray = [];
//   for(const item of data ){
//     newArray.push(item + num)
//   } 
//   return newArray;
// }

// function decArray(data,num) {
//     const newArray = [];
//   for(const item of data ){
//     newArray.push(item - num)
//   } 
//   return newArray;
// }

// console.log(incArray([2,4,6],2));
// console.log(decArray([2,4,6],2)); // for add or reduce item

// //-rah hal behtr :
// function operationOnArray(data,cb,num) {
//     const newArray =[];
//     for (const item of data){
//         newArray.push(cb(item,num))
//     }
//     return newArray;
// }


// //make cb
// function inc(item , num) {
//     return item + num  ;
// }
// function dec(item,num) {
//   return item - num ;    
// }
// function mul(item,num) {
//   return item * num ;    
// }

// console.log(operationOnArray([2,4,6],inc,2));
// console.log(operationOnArray([2,4,6],dec,2));
// console.log(operationOnArray([2,4,6],mul,2));
// -----------------------------------------
// //*57 call apply method
// "use strict ";

// //? 1. TO borrow another objects methrod or
// //? 2. To creat a custom value of this

// const user ={


//     name: "omid",
//     job : "developer",
//     birthday :1995,
//     getyearOfBirth() {
//         console.log( 2024 - this.birthday);
//         return 2024 - this.birthday; 

//     },
//     introduceUser(greeting, message) {
//         console.log( ` ${greeting}  Im ${this.name} , a ${this.job}. My message to the world is ${message}`);
//         return  `Im  ${this.name} , ${this.job}. My message to the world is ${message}  ` ;
//     },
// };

// user.getyearOfBirth();

// const newgetyearOfBirth = user.getyearOfBirth ;
// const newintroduceUser = user.introduceUser;

// const geustUser = {
//     name : "Parinaz", 
//     job : "Doktor" ,
//     birthday : 1999,
// } ;

// newgetyearOfBirth.call(geustUser) // use (call method) ,,it must creat after geustUser ==> change this to 
// newintroduceUser.call(geustUser ,"Hi" ,"learn coding")
// const params = [ "Hi " , "learn Coding !"];
// newintroduceUser.apply(geustUser , params);
// newintroduceUser.call(geustUser , ...params);


// function sayHello(greeting) {
//     console.log(`${greeting} , ${this.name}`);
// }

// // sayHello("hello")

// const testUser = {
//     name : "john" , 

// };

// sayHello.call(testUser, "Hi ")

// ------------------------------------------------
//58 BIND METHOD
   
//     const user={

//     name : "omid",
//     job : "developer",
//     birthday :1995,
//     getyearOfBirth() {
//         console.log( 2024 - this.birthday);
//         return 2024 - this.birthday; 

//     },
//     introduceUser(greeting, message) {
//         console.log( ` ${greeting}  Im ${this.name} , a ${this.job}. My message to the world is ${message}`);
//         return  `Im  ${this.name} , ${this.job}. My message to the world is ${message}  ` ;
//     },
// };

// user.getyearOfBirth();

// const newgetyearOfBirth = user.getyearOfBirth ;
// const newintroduceUser = user.introduceUser;

// const geustUser = {
//     name : "Parinaz", 
//     job : "Doktor" ,
//     birthday : 1999,
// } ;

// const newintroduceUserBind=  newintroduceUser.bind (geustUser);
// newintroduceUserBind("hi" , "learn java script")

// const newintroduceUserBind2=  newintroduceUser.bind (geustUser,"Hello"); // hello is as first arguman called greeeting

// newintroduceUserBind2( "learn java script")

// // exampel

// document.querySelector(".add_user").addEventListener("click",user.getyearOfBirth.bind(geustUser))

// //partial application
// const counter = (count, number) =>{
//     return number + count;
// }

// console.log(counter(5,4));

// const countByFive= counter.bind(null,5);
// console.log(countByFive(0));

// //challeng

// const countByFive2 = (number) => (count) =>  count +number;

   

// console.log(countByFive2(4)(5)
// );

// ----
//* 59 CLOSURE : COMBINATION OF A FUNCTION BUNDLED WITH ITS LEXICAL ENVIROMENT

//1.count numbers of login req

//?cenario : 1.count login number -2. count signup number


// function loginCount() {
//     let counter = 0;
//     counter ++;
//     return counter
// }

// console.log(loginCount()); // answer is 1 and not true
// console.log(loginCount()); // answer is 1 and not true
// console.log(loginCount()); // answer is 1 and not true
 
//! persistency :  this approch dose not persistency

// ---
//  let counter = 0;
// function loginCount() {
//     counter ++;
//     return counter
// }

// function signUpCount() {
//     counter++;
//     return counter;
// }

// console.log(loginCount()); // answer is 1 and not true
// console.log(loginCount()); // answer is 2 and not true
// console.log(loginCount()); // answer is 3 and not true
 
// console.log(signUpCount());
// console.log(signUpCount());

//!encapsulating :this approch does not 

//? true approch is  CLOSURE

// function counterReq() {
//     let counter = 0;
//     function inner() {
//         counter++;
//         return counter;
//     }
//      //it is a closure function !
   
// }

// const loginreqs = counterReq();
// console.log(loginreqs());
// ---------------------------------------------------------------
// 60 BASIC STRING METHOD
// const userName = "omid mim znb mim";

// console.log(userName.length); //behave like array


// method indexOf

// console.log(userName.indexOf("mim"));
// console.log(userName.lastIndexOf("i")); 

//2,method slice()

// console.log(userName.slice(-4));
// console.log(userName.slice(2,4));
// console.log(userName.slice(1,-1));


//3.includes

// console.log(userName.includes("omid"));

//4. method startWith

// const url = "/courses/react.js" ;
// console.log(url.startsWith("/courses"));
// console.log(url.split("/")[2]); //product title

//5. join - split
// const postTitle = "The new feature in next.js"

// console.log(postTitle.split(" "));
// console.log(postTitle.split(" ").join("-"));

//6. method trim
//=> for cuting scpaces

//7. to loWercase 

// -------------------------------------------
 //62 SEARCH IN STING CHALLENGE

//? 1.find the index of searchTerm in string
//? 2. if not exist return "Not includes"
///tips  : if in use of indexOf there are not any thing return will be -1
// function searchInSting(string,searchTerm) {
//     const indexOf = string.toLowerCase().indexOf(searchTerm.toLowerCase().trim())
//     if(indexOf> -1) {
//         return `The first occurance of ${searchTerm} in the string is ${indexOf}; `
//     }
//     return "NOT Includes"
// }
// const str ="this is dummy string just for Test Boom!"
// console.log(searchInSting(str , "  "));

// ----------
//? CHALLENGE 2

// const registeredEmail = "omid.test@yahoo.com";

// function checkEmailExist(email) {
//  const signUpEmail = email.toLowerCase().trim();
//  const username = signUpEmail.split("@")[0];

  
//  if(registeredEmail === signUpEmail) return " Email already exist" ;
//   return `Welcome ! , this is your username ${username}`;
// }

// console.log(checkEmailExist(" Omid2.test@yahoo.com "));
// -------------------------------
//64

const username = "oMId";
function capitilizeFirstLetter(string) {
    const newString = string[0].toUpperCase() + string.toLowerCase().slice(1);
    return newString;
}
console.log(capitilizeFirstLetter("oMId"));


// method Replace() and replaceAll()

const usernamee = "oMID"
function capitilizeFirstLetter(string){
    const toLowerstring = string.toLowerCase();

    const newStringg = toLowerstring[0].toUpperCase() + toLowerstring.slice(1);
    return newStringg;
}

console.log(capitilizeFirstLetter("oMId"));

//------------------------------------------------------

const msg = " the dogs , dogs are my favourite pet !";
console.log(msg);

function capitilizestatment(string ) {
    const names = string.split(" ");
    const newNames= [];
    for (const n of names){
        newNames.push(capitilizeFirstLetter(n))
    }
    

}

console.log(capitilizestatment(msg));