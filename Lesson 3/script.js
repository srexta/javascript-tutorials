/**
 * Conditions
 */
/**
 * References-
 * @link https://www.w3schools.com/js/js_if_else.asp
 * @link https://www.w3schools.com/js/js_switch.asp
 */

// let themesTeam = ['Sagar', 'Madan', 'Rashmi', 'Nisha', 'Prakritee', 'Ashish', 'Pujan', 'Sita', 'Bibek' ]

// if( themesTeam.includes('Naresh') ){
//     alert("How is Australia?")
// }else if( themesTeam.includes('Rashmi') ){
//     alert("Hello Rashmi");
// }else{
//     alert('How are you Themes Team?');
// }





// themesTeam.includes('Naresh') ? alert("How is Australia?") : alert('How are you Themes Team?');
// themesTeam.includes('Naresh') ? alert("How is Australia?") : 
//     themesTeam.includes('Sita') ? alert('Hello Sita') : alert('How are you Themes Team?');

// let lookingForPerson = 1;
// switch(themesTeam.at(lookingForPerson)) { //Switch cases use strict comparison (===)
    
//     default: //The default case does not have to be the last case in a switch block
//         alert('How are you Themes Team?')
//         break;
//     case 'Sagar':
//         console.debug("Hello Sagar")
//         break; //break is important in Switch Case
//     case 'Madan':
//         console.debug("Hello Madan")
//         break;
//     case 'Rashmi':
//         console.debug("Hello Rashmi")
//       break;
//     case 'Nisha':
//         console.debug("Hello Nisha")
//       break;
//     case 'Prakritee':
//         console.debug("Hello Prakritee")
//       break;
//     case 'Ashish':
//         console.debug("Hello Ashish")
//       break;
//     case 'Pujan':
//         console.debug("Hello Pujan")
//       break;
//     case 'Sita':
//         console.debug("Hello Sita")
//       break;
// }

/**
 * Loops
 */
/**
 * References-
 * @link https://www.w3schools.com/js/js_loop_for.asp
 * @link https://www.w3schools.com/js/js_loop_forin.asp
 * @link https://www.w3schools.com/js/js_loop_forof.asp
 * @link https://www.w3schools.com/js/js_loop_while.asp
 * @link https://javascript.info/while-for
 * 
 */
let themesTeam = ['Sagar', 'Madan', 'Rashmi', 'Nisha', 'Prakritee', 'Ashish', 'Pujan', 'Sita', 'Bibek' ]
// console.debug(themesTeam[5])
let printText = "Hello Themes Team - For Loop" + "<br>";
for (let i = 0; i < themesTeam.length; i++) {
    // if( i === 2 ){break;}
    // printText +=  themesTeam[i] + "<br>";
    printText = printText + themesTeam[i] + "<br>";
}
document.querySelector(".forloop").innerHTML = printText;

//FOR IN
let printAgain = "Hello Again Themes Team - FOR IN LOOP" + "<br>";
for (let x in themesTeam) {
  printAgain += themesTeam[x] + "<br>";
}

document.querySelector(".forinloop").innerHTML = printAgain;
//Can loop through object see reference example in the above link
//Diclaimer: Do not use for in over an Array if the index order is important.

/**
 * FOR OF
 * For/of was added to JavaScript in 2015 (ES6)
 * For/of is not supported in Internet Explorer.
 */
let forOfLoop = "Hello For Of Loop" + "<br>";
for (let x of "JAVASCRIPT") { //can loop through strings as well
  forOfLoop += x + "<br>";
}
document.querySelector(".forofloop").innerHTML = forOfLoop;

//FOR Each
let txt = "Hello ForEach Loop" + "<br>";
themesTeam.forEach(myFunction);
function myFunction(value, index, array) {
  txt += value + "<br>";
}
document.querySelector(".foreach").innerHTML = txt;

/**
 * Reference for Array forEach
 *  @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/

//WHILE LOOP

let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.querySelector(".whileloop").innerHTML = text;

//DO WHILE LOOP
let doWhileText = ""
let j = 0;

do {
  doWhileText += "<br>The number is " + j;
  j++;
}
while (j < 10);  
document.querySelector(".dowhileloop").innerHTML = doWhileText;

/**
 * Reference for Break and Continue
 *  @link https://www.w3schools.com/js/js_break.asp
 *  @link https://www.programiz.com/javascript/continue-statement#:~:text=continue%20with%20while%20Loop,while%20loops.
*/
//The break statement "jumps out" of a loop.
//The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

/**
 * Reference for Nested Loops
 *  @link https://javascript.plainenglish.io/nested-for-loops-in-javascript-6d7c9ffba5e
*/
/**
 * When to use For Loops and While Loops
 *  @link https://builtin.com/software-engineering-perspectives/for-loop-vs-while-loop
 *  
*/