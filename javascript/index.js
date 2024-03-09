// let userone= 'rizwan'
// let usertwo='farid'
// console.log(userone,usertwo);
// userone='hafiz'
// usertwo='rahman'
// console.log(userone,usertwo);
// console.log(userone,'says mawo',usertwo,'says bawu');


// let cat = 'bore'
// let dog ='moti'


// console.log(cat,'says meow and',dog,'says baw baw');


// function checkcolur(){
// var user = document.getElementById("user").value;
// var message = document.getElementById("message");

// if (user == "red" ) {
//     message.textContent='yahoo you got red';
//     document.getElementById("user").innerHTML;
// }else if(user == "blue"){
//     console.log('blue is nice colur');
//     message.textContent='yahoo blue is my fav colour'
// }else if(user == "orange"){
//     console.log('ornage is nice colur');
// }else if(user == "pink"){
//     console.log('pink is nice colur');
//     message.innerHTML='yahoo you picked red'
// } else{ 
//     console.log('not valid enter red or blue pink orange');
//     message.innerHTML='not valid enter red or blue pink orange'
// }
// }

// var age = 10;
// if(age>= 65){
//     console.log("You get your income from your pension")
// }else if(age<65&& age >=18){
//     console.log("Each month you get a salary")
// }else if(age>18){
//     console.log("You get an allowance")
// }else{
//     console.log("The value of the age variable is not numerical")
// }

// function but() {
//     let inp=document.getElementById('inp').value
//     let page=document.getElementById('p');
//     if(inp=='red'){
//         console.log('red');
//         page.innerHTML='red'
//     }else{
//         console.log('no colour');  
//         page.innerHTML='not valid colour you can select red only'
//     }
// }

// function post() {
//     let day =document.getElementById('dayinput').value
//     let dispaly=document.getElementById('dis')

//     switch (day) {
//         case "monday":
//             console.log("Doing something");
//             dispaly.innerHTML="doing something"
//             break;
//             case "tuedsay":
//                 console.log("Doing something");
//                 dispaly.innerHTML=''
//                 break;
//                 case "wed":
//             console.log("Doing something");
//             dispaly.innerHTML="doing something"
//             break;
//             case "tsday":
//             console.log("Doing something");
//             dispaly.innerHTML="doing something"
//             break;
//             case "friday":
//             console.log("Doing something");
//             dispaly.innerHTML="doing something"
//             break;
//             case "saturday":
//             console.log("Doing something");
//             dispaly.innerHTML="doing something"
//             break;
//         default:
//             console.log('weekend');
//             dispaly.innerHTML="weekend or wrong day"
//             break;
//     }
// }

// let boy ='rizwan'
// let boyage=23
// let girl = 'zaib'
// let girlage=22
// console.log(boy,"is",boyage,"and the", girl,"is",girlage,"years old");

// function clic() {
//     let inp = document.getElementById('inpt').value;
//     let but = document.getElementById('dev');

//     if (inp== "first") {
//         but.innerHTML='you won gold meddel'
//     } else if(inp=="secound"){
//         but.innerHTML='you won silver meddel'
//     }else if(inp==""){
//         but.innerHTML="you didn't enter any thing"
//     }
//     else{
//         but.innerHTML='no medde'
//     }
// }

function clic() {
    let age= document.getElementById('inpt').value;
    let dis= document.getElementById('dev')
    if (age>=100) {
        dis.innerHTML='are you still alive '
    } else if(age>=65) {
        dis.innerHTML=' you can have pension'
    }else if(age>=65){
        dis.innerHTML="you have work "
    }
     else if(age>=17){
        
        dis.innerHTML=' you need to study'
    } 
    else{
        dis.innerHTML='you are still kid'
    }
    }

// for(let i=0; i <= 2; i++){
//     console.log(i);
// }

// console.log("happy new year");
// let counter=10
// while (counter>0) {
//     console.log(counter);
//     counter= counter -1
// }
// console.log("happy new year");

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
    
// }console.log("count done");

// for (let i = 5; i >= 0; i--) {
//     console.log(i);
    
// }console.log("finished");
// let count =1
// while (count<=5) {
//     console.log(count);
//     count++
// }

// let i= 5
// while (i >=0) {
//     console.log(i);
//     i--;
// }
// var year= 2018;
// while (year<=2021) {
//     console.log(year);
//     year++
// }


    // NESTED LOOP

   
    
  
    // let da= document.getElementById('dev')
    // for (let i = 0; i < 2; i++) {
    //     console.log(i);
    //     console.log("da");
    
    //     for (let j = 0; j < 2; j++) {
    //         let styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    //         console.log("%c"+ i,"node",j,"react",styles);
            
            
    //     }
    // }

//     var cubes = 'ABCDEFG';
// //styling console output using CSS with a %c format specifier
// for (var i = 0; i < 7; i++) {
//     var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
//     console.log("%c" + cubes[i], styles)
// // }
// let aplha="abcdef"
// for (let i = 0; i < 6; i++) {
//     let styles="font-size:20px; ;background: pink;;"
//     console.log("%c"+aplha[i],styles);
// }

// function arraylist(par) {
//     for (let i = 0; i < par.length; i++) {
//         console.log(i+1, par[i])
//         if (par[i] == "red") {
//             console.log(i*100,"tomato")
//         }else{
//             console.log(i*100,par[i])
//         }
        
//     }
// }

// let col=['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
// arraylist(col);

function vicals(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(i, arr[i]); 
        if (arr[i]) {
            console.log(i*100,'bike');
        } else {
            console.log(i*100,arr[i]);
        }
        
    }
}
let cars=['bmw','honda','toyota','prius']
vicals(cars);


function letterFinder(Word,match) {
    for (let i = 0; i < Word.length; i++) {
        console.log(i+1, Word[i]);
        if (Word[i]) {
            console.log('Found the', match, 'at', i)
        }else{
            console.log('---No match found at', i);
        }
    }
}letterFinder('test')
