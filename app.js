// variables :const/let

// const:you can not change the value  unless in the object and array
// let you can make change in the value


// object
// const user = {
//     name:'omid',
//     age:28,
//     address:"bushehr",
// };

// console.log(user);


// const selectedproperty ="name"
// console.log(user["name"])

// array 
// const items= [1,2,3,4,'omid']

// console.log(items);

// const likedpost=["react.js","omid","photo"]

// likedpost[0]="javascript"
// likedpost[3]="html-css"
// console.log(likedpost);



// season 2 oprators + - =
// let x = 10
// x = x + 5
// x += 5

// console.log(x + 5 ,x*2,x/2,x-3);

// const username="omid"
// const userlastname= "znb"
// console.log(username+" "+userlastname);

// "4" the number in the "" is called numeric string
// - , / , * ==> the numeric string change to the number 
// console.log("4" - false ,"4" + 1 , "4" - 1);
// true ==>1
// false ==>0
// null ==0


// comparison operators
// ex:
// totalprice:قیمت 
// limit:1000

// const totalprice=100_000
// const limit=1_000
// const isfree = totalprice < limit;
// console.log(isfree);
// console.log(totalprice > limit); 

// 3.equality operation == == =/= ===
// strict equality : === ==> type + value
// loost equality == ==>value
// console.log(1==="1");
// console.log(1=="1");

// console.log("2" !== 2);

// 4.ternary operation:
// condition ? "aaa" : "bbb"
// ex: cart: 200_000 ==>10% | 20%
// const totalprice = 200_000
// const discountLimit = 200_000
// console.log(totalprice > discountLimit);
// const discount = (totalprice > discountLimit) ? "10%" : "5%"

// console.log(discount);

// 5. logical operators
// and :&& both operhand should be true (return when reach to the first falsy)
// or : || :one of them is true (return when reach to first truthy)
// ??
// ! 
// کد تخفیف :باید فعال باشد و ظرفیت داشته باشد 
// coupon : avtive && limit = 20 persons
// const isactive = true
// const couponUsage= 10
// const couponLimit=11
// const isAcceptableCoupon = couponUsage < couponLimit && isactive

// console.log(isAcceptableCoupon);

// 6.truthy 
// falsy :
// 0
// ""
// null
// undifined
// truthy : except above category 

// const slectecedColor ="blue" 
// const deaultColor = "black"
// const userColor = slectecedColor || deaultColor ;
// const userColor = slectecedColor ? slectecedColor :deaultColor;


// console.log(userColor) ;

// 7. nullish ==> if us ?? the falsy change to truthy

// 8.  a,b ==> swap variable value
// let a = "blue"
// let b = "red"

// const c = a //c="blue"
// a = b ; //a = "red"
// b = c; //b = "red"
// console.log(a , b);

// challenge #2
// weeks:7days
// const birthYeara =1994;
// const birthYearb =1995;
// //2024 - 1994 ==> * 365 / 7
// const now=2024;
// const year = now - birthYeara;
// const days =  year * 365;
// const weeks = days / 7;
// console.log(((now - birthYeara) * 365) / 7);
// console.log(((now - birthYearb) * 365) / 7);
// const weeksa=((now - birthYeara) * 365) / 7
// const weeksb=((now - birthYearb) * 365) / 7
// console.log(weeksa % weeksb);
    
// season 4


// 3.1 if -els

// const paymentstatus ="SUCCESS"
// const isVerifiedPayment = true;
// console.log(isVerifiedPayment && paymentstatus === "SUCCESS");
// if (isVerifiedPayment && paymentstatus === "SUCCESS") {
//     console.log("this is verified payment");
// }else if (paymentstatus==="PENDING"){
//     console.log("this is panding payment" );
// }else{
//     console.log("this is rejected payment");
// }


// 3.2 switch-case

// const role= "ADMIN" //admin | teacher|

// switch(role){
// case "ADMIN" :{
//     console.log("the user role is admin");
//     break;
// }
// case "TEACHER" :{
//     console.log("the user role is teacher");
//     break;
// }
// default:
//     console.log("unknown user role");
// }

// diffrence to switchcase and if :
// in switch case you can not use boolean for your case 

// const role ="teacher" ;
//  if (role==="admin") {
//     console.log("the user is admin");
//  }else if(role==="teacher"){
//     console.log("the user is teacher");
//  }
//  else{
//     console.log("this is unknown user ");
// }

// ----------------------------------------------------

// 3.3 loop for ,do while,while,for of

// for(; ;){} ==syntax
// for(initlizer;condition;statment){}
// 1-5==> odd|even

// for(let i =1; i <= 10;i++){
//     if(i % 2 === 0) console.log("the even number is ",i);

// }

// for(let i =10; i >= 1;i--){
//     if(i % 2 === 0) console.log("the even number is ",i);

// }

// ----------------------------------------------

// 3.3 while /do while
// let i = 1;
// while(i<=10){
//     if(i % 2 === 0) console.log("the even number is ",i);
//     i++;
// }

// let i = 1;
// do{
//  if (i % 2 ===0) console.log("the even number is" , i);
//  i++;
// }while(i<=10);
// -----------------------------------------------------

// for of/ for in
// for in :object
// for of :array

// const user = {
//     name:"omid",
//     email:"omid@exm.com",
//     phonNamber:"01111111",
// };

// for(const key in user){
//     console.log(user[key]);
   
// }

// const roles=["ADMIN","TEACHER","MERCHANT"];
// for(const index  in roles){
//     console.log(index,roles[index]);}  EXAMPLE))

// for (const item of roles){
//     console.log(item); 
// }
//    -----------------------------------------------------

// 3.4 break -continue
// let i = 1;
//  while(i<=10){
    // if (i>=3) break;// until break is going to stop progress
//     if (i % 2===0){
//         i++;
//         continue;
//     }
//      console.log(i);
//      i++;
//  }

// ----------------------------------
// 3.5 function
// area =3.14* r **2 //exampel

//declare ==> parameter
// function sayHello(name) {
    
//     console.log("Hi "+ name +  " from javascript course");
// }
//called function
// sayHello("omid");
// sayHello("ali");

// function circleArea(params) {
// const radious= "5"
// const P = 3.14
//     console.log(P * radious**2);
// }
// circleArea() // task by myself 


// function calculateArea(radius) {

//    const area = 3.14 * radius **2;
//    console.log("the circle area is equal to :", area); 
// }

// calculateArea() // task by Teacher 

// ------------------------------------
// 3.6 return in function

// function calculateArea(radius) {

//    const area = 3.14 * radius **2;
//    console.log("the circle area is equal to :", area);
//    return area ;
//    console.log("this is dddd"); // the codes after return progres of function are stop
// }

// const result =calculateArea(10);
// console.log(result);  

// const role= "ADMIN"
// if (role==="ADMIN") {
//     console.log("the user is admin");
// } else if (role ==="MERCHANT") {
//     console.log("the role is MERCHANT");
// } else if ( role==="TEACHER") {
//     console.log("the role is TEACHER");
// } else {
//     console.log("unkown user rol");
// }

// /function getUserRole(role) {
//     if (role==="ADMIN") {
//         console.log("the user is admin");
//     } else if (role ==="MERCHANT") {
//         console.log("the role is MERCHANT");
//     } else if ( role==="TEACHER") {
//         console.log("the role is TEACHER");
//     } else {
//         console.log("unkown user rol");
//     }
// }
// getUserRole("O")

// function getUserRole(role) {
//     if (role==="ADMIN") return  "the user is admin"
//     if (role ==="MERCHANT") return "the role is MERCHANT"
//     if ( role==="TEACHER")return "the role is TEACHER" 
//     return "unkown user rol"}


// const userRole= getUserRole("ADMISN")
// console.log(userRole);


// function switchUserRole(role) {
//      switch(role) {
//         case "ADMIN" :{
//             return "the user role is admin"
//             }
//         case "TEACHER" :{
//            return "the user role is teacher"
//             }
//         default:
//             return "unknown user role"
//         }
    
        
    
// }

// const ROle2 =switchUserRole("ADMIN")
// console.log(ROle2);

// ------------------------------
// challenge max ==> a . b !!!
// function max(a,b) {
//     if (a > b) return a;
//     return b;
// }
// const resultt= max (3,5)
// console.log(resultt);

// or
// function max(a,b) {
//    return  a > b ? a : b ; 
// }
//     const resultt= max (13,8)
//     console.log(resultt);

// ---------------------------------------------
// 3.29 challenge 2
// fizzbuzz : number ==> 3: fizz ,5 :buzz
// 3 & 5 ==>fizzb

// function fizzBuzz(number) {
//     if (typeof number !== "number") return "please enter a number";
     
//     if ((number % 3===0) & (number %5===0)) return 'fizzbuzz';
//     if (number % 3===0) return 'fizz' ;
//     if (number % 5===0) return 'buzz';
//     return "not valid number" ;
// }
    
//  console.log(fizzBuzz("ddd"));   
// ----------------------------------
// 3.30 chalenge diiscount

//this is my approch 
// function calculateDiscount(totalprice) {
//      if (totalprice < 100) {
//         console.log("no discount");
//      }
//      else if  (totalprice >=120) {
//      const discount= totalprice * .25;
//      const finalyPrice=totalprice - discount;
//      return finalyPrice
//    }
   
//     else if (totalprice >=100 && totalprice >= 110) {
//       const discount= totalprice * .03;
//       const finalyPrice=totalprice - discount;
//       return finalyPrice
//     }
//      else if  (totalprice >=110 && totalprice >= 120) {
//       const discount= totalprice * .06;
//       const finalyPrice=totalprice - discount;
//       return finalyPrice
//     }
    
//     }
    
  
    

// console.log(calculateDiscount("10"));
// totlaprice:100
//100 + 10 ==>3%
//100 + 20 ==> 6%
//max ==>25%


// this is the course approch for above challenge

// function calculateDiscount(totalprice) {
//     const discountPerPrice =10;
//     const minPrice=100
//     const discountSteps =3
//     const Maxdiscount =25

//     if (totalprice < minPrice +discountPerPrice) {
//         return "No discount"

//     }

//     const discount = 
//     Math.floor((totalprice - minPrice ) / discountPerPrice) *discountSteps;
    
//     if ( discount > Maxdiscount)
//     return "Max discount " + Maxdiscount
//     return discount
// }

// console.log(calculateDiscount(200));
// -------------------------------------------------

// 4.1


// const course ={
//  title: "next.js" ,
//  price: 100,
//  discount:30,
//  students:["ali","john","omid"],
//  isFree : false,
//  catefory :{
//     id:1,
//     englishTitle:"frontend",
//     title:"Front-End",
//  },
//  calcOffprice: function() {
//     this.Offprice = this.price * (1- this.discount/100);
//     return this.Offprice;
    //console.log(this.price *(1- this.discount/100));
//  },
// }
//object ==> prperty
//object ==> method (function)

// course.calcOffprice(); // its important to run this log for first time 
// console.log(course.Offprice);// after interduce this property you should use this for avoiding from repita


//4.3 constructor - factory ;

// function creatcours(title,price,discount) {
//     return {

//          title,
//          price,
//          discount,
         
//          calcOffprice() {
//          return price * (1 - discount/100)
    
   
//          },
//        };
//     }
    

// console.log(creatcours("next.js",200,10).calcOffprice());

// ---------------------------------------------------------
// 4.4 new 
// function creatcours(title,price,discount) {
//     this.title= title
//     this.price=price
//     this.discount=discount 
    //object whit 3 property
//     this.caclOfprice = function(){
//         return price * (1 - discount /100)
//     }
//     }

//     const course1 = new creatcours("next.js",200,10);
//     const course2 = new creatcours("react.js",500,30);
    //1.creat{}
    //2. this points to {}
    //3.return {}
//     console.log(course2.caclOfprice());
  
// ------------------------------------------------------
// 4.5 
// const strlit ="omid" //string literal
// const strObj = new String ("omid")
// console.log(strlit ,typeof strlit);
// console.log(strObj ,typeof strObj);

//task ==> number ,boolean ,array

// const numLit=23; //number literal
// const numObj= new Number(23);
// console.log(numLit,typeof numLit);
// console.log(numObj,constructor);// use (constructor for define the ingrediants)

// const booleanLit = true// boolean litera
// const booleanObj= new Boolean (true)

// console.log(booleanLit,typeof booleanLit);
// console.log(booleanObj,typeof booleanObj);

// const arrayLit=[1,2,3,5] //array literal
// const arrayobj= new Array ([1,2,3,5])

// console.log(arrayLit,typeof arrayLit);
// console.log(arrayobj,typeof arrayobj);
// ---------------------------------------------------------------
//4.6 
// check : hasownproperty

//
//Object.keys  ==> show objects in an array 
//object.value ==> show values in an array
//object.entries ==> show values with objects

// -----------------------------------------------------------
//4.7 refrence vs primitive
//object , array ==> object
//string , number , boolean ==> primitive

// const userName ="omid";
// let copiedUserName = userName;
// copiedUserName = "Parinaz"
// console.log(userName,copiedUserName);

// const user ={
//     name:"omid",
//     age:29,
//     friends:["x", "s" ,"l"]
// };
// const copiedUser= user;
// copiedUser.name = "parinaz"
// console.log(copiedUser);

//refrence type : point to address 
// for copying an object should use from this approch:
// const copiedUser = Object.assign({} ,user) //shallow copy : copy frist level value
// copiedUser.name= "parinaz"
// copiedUser.friends.push("alex")
// console.log(user,copiedUser);

//deep ==>all,nested
//loadash
// const deepcopyUser = JSON.parse(JSON.stringify(user));
// deepcopyUser.friends.push("my love")
// console.log(deepcopyUser);

// ---------------------------------------------------------
//season 5 .1 object desctructuring
// const course ={
//     title :"next.js",
//     price:100,
//     discount:30,
//     students:["omid","john","parinaz"],
//     Tags:["frontend","backend","web developer"],
//     isfree:false,
//     category:{
//         id:1,
//         englishTitle :"frontend",
//         title:"front-end",
//     },
//     calcOffPrice: function (params) {
//         this.offprice=this.price * (1- this.discount /100);
//         return this.offprice;
        
//     },
//     showWelcomeMsg({name,phonnumber,email = ""})// ="" for arrange a defaulte or without  
//     {
//     console.log("welcom" + 
//     name +
//     " with email "
//     + email+
//     " and phon number "
//     +phonnumber);
//     } //write the function as an object 
// } 


// const {title,category} = course ; // solution // choose better and cleaner
// const {title :courseTitle,category} = course // change the name 
// console.log(courseTitle);
// const {title :courseTitle,
//     category: {englishTitle}, Tags= []} = course // meghdar defulte besh dadim
// const {englishTitle,id,title} = category  //destructuring category for writtieng cleaner
// console.log(courseTitle ,englishTitle)

// course.showWelcomeMsg({
//  name:"omid" ,
//    email:"user@export.com" ,
//    phonnumber :0912222222

// })
//  ---------------------------------------------------------
// 5.2 template literal
 //for write code cleaner to compareing above code (showWelcomeMsg)
 // use `` $
    // console.log(` welcome ${name} + with email ${email}
    // and phonnumber ${phonnumber}`
    // );
   
// ---------------------------------------------------------------------
// array destructuring

// const numbers= [1,2,3];
// const [a,b]=numbers
// console.log(a,b);

//default value

// const numbers= [1,2,3];
// const [a,b,c,d=4]=numbers
// console.log(a,b,d);
// -----nested
// const numbers= [1,2,[3,4]];
// const [a,,[c,d]]=numbers;
// console.log(a,c,d);
// --------
// const course ={
//         title :"next.js",
//         price:100,
//         discount:30,
//         students:["omid","john","parinaz"],
//         Tags:["frontend","backend","web developer"],
//         isfree:false,
//         category:{
//             id:1,
//             englishTitle :"frontend",
//             title:"front-end",
//         },
//         calcOffPrice: function (params) {
//             this.offprice=this.price * (1- this.discount /100);
//             return this.offprice;
            
//         },
//         showOrderMsg(studentsIndex,tagsIndex){
//             return[this.students[studentsIndex],this.Tags[tagsIndex]]
//         }
    
//     }
//     const [studentName,tagName] =course.showOrderMsg(2,0);
//     console.log(studentName,tagName);
// ------------------------------------
//spread operator : ...
//exp: add some data to the end
// const arr=[4.5]
// const arr2=[1,2,...arr];
// console.log(arr2);

// ----- pass all array index as arguments
// const arr=[1,2,3,4,5]
// console.log(...arr);

//push items to array
// const Tags=["frontend","backend","web developer"];
// console.log([...Tags,"full stack"]); 

//copy

// const Tags=["frontend","backend","web developer"];
// const newTags=[...Tags] //shallow copy

//join array
// const backendTags=['nodejs','nest.js']
// console.log([...Tags,...backendTags]);

//string :
//add charecters to string 
// const str ="omid"

// console.log([...str,"m"]);

//iterable; array,set,map,string ,NOT object


// objects:
// const user = {
//     name: "omid",
//     id:1,

// };
// add key value to object 
// console.log({...user,email:"user.com"});
// console.log(user);

//copy===> clone object.assign () or ...

// const newUser ={...user}; 
// newUser.email ="user@exp.com"; // add charecter to user object (dont use newtateing)
// console.log(newUser);
// -----------------------------------------------------------
//REST OPERATOR :...
//rest : 1:left of = , 2: packing 
// const [a,b,c,...other]=[1,2,3,4,5,6,7]
// console.log(a,b,c,other);
// ------task
// const tags1 = ["react.js", "vue.js"];
// const tag2 =["next.js", "javaa"];
// const [reactTag,...otherTag]=[...tags1,tag2];
// console.log(reactTag,otherTag);

//object:
// const user={
//     id:345,
//     name:"omid",
//     email:"user@ex.com",
//     phoneNumber: "0192929",
     

// };

// const {id,email,...otherUserData}= user;
// console.log(id,email,otherUserData);
// -------------------------------------------
//function :
// function sum(...args){
//     // console.log(args);
//     let total=0; //start of 0
//     for (const item of args) total += item; 
//     console.log(total);
   
// }

// sum(1,2);
// sum(1,2,3,4,5);
// sum(1,2,3,4,5,6,7,8);

// const nums= [1,2,3,444,5,6,7]
// sum(...nums)// use ... for unpacking above array and use as function
// -----task
// function getTotalPrice (discount,...rest){

//   console.log(rest);
//   let total = 0
//   for (const item of rest) total=+item;
//   console.log(total * (1 - discount));
//   return total * (1 - discount)

// }
// getTotalPrice (0.3,12,34,56,5)

// ------------------------------------------------
//SET : iterable data ==> array, string
// const set = new Set ([1,2,3,4]);
// console.log(set);

//1.size 
// console.log(set.size);
//2. check ==> has
// console.log(set.has (4));
// 3.add
// console.log(set.add(9));// just add for new items
//4.delet
// console.log(set.delete(4));
// console.log(set);
//5. not get value in set

//6.clear
// set.clear()
// console.log(set);

//7. loop
// for(const item of set) console.log(item);

//use case 
// const Role=["admin","student","teacher"];
//creat uniqe array
// const uniqueRole= [... new Set (Role)]

// console.log(uniqueRole);
// console.log(new Set(Role).size);

// console.log(new Set("omid znb"))

//creat uniqe string
// console.log([...new Set("omid znb")].join(""));
// -----------------------------------------------------
//MAP :==>object and key ,value ,key-number

// const user = new Map();
//1.set: return updated map and key value
// console.log(user.set("name","omid"))//(key,value)

//2chain set:
// user.set("email","user@test.com").set(true,"ok").set("role","admin")
// console.log(user);
//3.get data
// console.log(user.get("name"));

//4. check exist data
// console.log(user.has("name"));

//5. delete
//6.clear
// ---------------------------------------------------------------
//MAP EXAMPEL
//  const omid={ name:"omid znb"},
//     parinaz={name:"parinaz ashk"},
//     iran={name:"iran znb"};//(; important)

//   const userRole = new Map();
//   userRole.set(omid,"admin").set(parinaz,"mother").set(iran,"child");

// console.log(userRole);

//approch 2:

// const userRole= new Map([
//     [omid,"admin"],
//     [parinaz,"mother"],
//     [iran,"child"],
// ]);
// console.log(userRole);

// for(const role of userRole.values()){
//    console.log(role);
// }

// ----
// for(const [user,role] of userRole.entries()){
//    console.log(user.name,role);
// }

//----- convert map keys  to a array
// console.log([...userRole.keys()]); // important

//----- convert map values to a array
// console.log([...userRole.values()]); 
// ----------------------------------------------------
//WHAT TYPE OF DATA TO SELECT
//LIST ==> set ,array ==> 1.unique 2. ترتیب
//object ==> object , map ==> key:primitive and object

//array of object : 98%
//json ==>{name,email,role}
//json ==> [name,email,role},name,email,role},name,email,role}] :array of object

//----EXAMPEL
// const users = [
//     {name:"omid",age:28}
//     {name:"taghi",age:20}
//     {name:"alex",age:38}
// ]
// ---------------------------------------------------------
//MAP AND SET CHALLENGE
// const john ={name:" john doe"},
//   lily={name :"lily bush"},
//    peter ={name:"peter drucker"},
//    omid={name:"omid znb"},
//    ali={name:"ali"};

//    const userRoles= new Map(
//    [[john,"admin"],
//     [lily,"editor"],
//     [peter,"subscriber"],
//     [omid,"admin"],
//     [ali,"subscriber"],
// ]
//    );
//    const uniqueUserRoles =[...new Set (userRoles.values())]; // use set for making unique array and with speread operator change to the array 
//    console.log(uniqueUserRoles);

// -----------------------------------------------------

// until end of season 5 //