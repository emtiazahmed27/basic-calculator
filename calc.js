//     input: name 
// p-1 output: 1bar use hoise j char gula segula count korte hbe jodi count value ta odd hoy print"tumi ajibon single"
//     else tmr life set

// p-2 input full name output first name

// p-3 function( num1 ,num2, plus)

//p-4 random num > pc 
//    user > value static 
//    diff

// p-5 1234*6789**....





// -------------------------p-4 solve-------------------------//

// let r=Math.ceil( Math.random()*10);
// let x=19;

// let res= myFunction(r,x)
// function myFunction(){
    
//     return(Math.abs(r-x));
// }
// console.log(res);

// -------------------------p-4 solve-------------------------//


// -------------------------p-5 solve-------------------------//

// let a=10;
// myFunction_1(a);

// function myFunction_1(){
//     let arr=[]
//     let count=0;
//     for(let i=1; i<=a; i++){
//         if(i%5==0){
//             count++;
//             arr.push("*".repeat(count));
//         }
//         else{
//             arr.push(i);
//         }  
//     }
//     return(arr);
// }
// console.log(myFunction_1());
// -------------------------p-5 solve-------------------------//




// -------------------------p-2 solve-------------------------//

// const str = 'Murgi kabir';

// let firstName= myFunction_2(str);

// function myFunction_2(){
//     return(str.slice(0,str.indexOf(" ")));
// }
// console.log(firstName);

// -------------------------p-2 solve-------------------------//



// function sumAll() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log(sumAll(num1, num2));

// function subAll() {
//   let sub = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sub -= arguments[i];
//   }
//   return sub;
// }
// console.log(subAll(num1, num2));

// function mulAll() {
//     let mul = 1;
//     for (let i = 0; i < arguments.length; i++) {
//       mul *= arguments[i];
//     }
//     return mul;
// }
//console.log(mulAll(num1, num2));

// function divAll() {
//         let div = 1;
//         for (let i = 0; i < arguments.length; i++) {
//           div /= arguments[i];
//         }
//         return div;
// }
// console.log (Math.ceil((divAll(num1, num2))));




function myCalc(){

  
    const operator = prompt('Enter operator ( either +, -, * or / ): ');
  
    
    const number1 = parseFloat(prompt('Enter first number: '));
    const number2 = parseFloat(prompt('Enter second number: '));
  
    let result;
  
    
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else {
        result = number1 / number2;
    }
  
    return ("Your calculation is: "+ result);
  
  }
  
  document.getElementById("calculator").innerHTML= myCalc();

