/* functions */

function clockUpdate() {
  let d = new Date();
  let t = d.toLocaleTimeString();
  document.getElementById("clock").innerHTML = t;
}

function linkUpdate(){
    let el = document.getElementById("link");
    if(el.className.indexOf('fa-link') > -1 ){ //className is a string of all class names see if one of the class names is fa-link
        el.classList.remove('fa-link'); // remove only fa-link
        el.classList.add('fa-chain-broken'); // add fa-chain-broken
    } else {
        el.classList.remove('fa-chain-broken'); 
        el.classList.add('fa-link');
    }    
}


/* Start animations here */

function battUpdate(){
    let el = document.getElementById("batt");
    switch(el.className.indexOf('fa-battery') > -1){
        case el.className.indexOf('fa-battery-empty') > -1:
        el.classList.remove('fa-battery-empty');
        el.classList.add('fa-battery-quarter');
        break;
        case el.className.indexOf('fa-battery-quarter') > -1:
        el.classList.remove('fa-battery-quarter');
        el.classList.add('fa-battery-half');
        break;
        case el.className.indexOf('fa-battery-half') > -1:
        el.classList.remove('fa-battery-half');
        el.classList.add('fa-battery-three-quarters');
        break;
        case el.className.indexOf('fa-battery-three-quarters') > -1:
        el.classList.remove('fa-battery-three-quarters');
        el.classList.add('fa-battery-full');
        break;
        case el.className.indexOf('fa-battery-full') > -1:
        el.classList.remove('fa-battery-full');
        el.classList.add('fa-battery-empty');
        break;
    }
}

/* Simpler battery animation */
function batt2Update(){
    const fabatt = "fa-battery-"  // constant string for font awesome battery
    let el = document.getElementById("batt2");
    let index = el.className.indexOf(fabatt); 
    let state = el.className.charAt(index + fabatt.length);
    let i = 0; // starting battery
    if(state !== '4'){
        i = parseInt(state) + 1; // next battery state
    }
    el.classList.remove(fabatt + state);
    el.classList.add(fabatt + i);

}

function thermUpdate(){
    let el = document.getElementById("therm");
    switch(el.className.indexOf('fa-thermometer') > -1){
        case el.className.indexOf('fa-thermometer-empty') > -1:
        el.classList.remove('fa-thermometer-empty');
        el.classList.add('fa-thermometer-quarter');
        break;
        case el.className.indexOf('fa-thermometer-quarter') > -1:
        el.classList.remove('fa-thermometer-quarter');
        el.classList.add('fa-thermometer-half');
        break;
        case el.className.indexOf('fa-thermometer-half') > -1:
        el.classList.remove('fa-thermometer-half');
        el.classList.add('fa-thermometer-three-quarters');
        break;
        case el.className.indexOf('fa-thermometer-three-quarters') > -1:
        el.classList.remove('fa-thermometer-three-quarters');
        el.classList.add('fa-thermometer-full');
        break;
        case el.className.indexOf('fa-thermometer-full') > -1:
        el.classList.remove('fa-thermometer-full');
        el.classList.add('fa-thermometer-empty');
        break;
    }
}

function hourUpdate(){
    let el = document.getElementById("hour");
    switch(el.className.indexOf('fa-hourglass') > -1){
        case el.className.indexOf('fa-hourglass-start') > -1:
        el.classList.remove('fa-hourglass-start');
        el.classList.add('fa-hourglass-half');
        break;
        case el.className.indexOf('fa-hourglass-half') > -1:
        el.classList.remove('fa-hourglass-half');
        el.classList.add('fa-hourglass-end');
        break;
        case (el.className.indexOf('fa-hourglass-end') > -1) && (el.className.indexOf('fa-rotate-270') == -1):  
        el.classList.remove('fa-hourglass-end');
        el.classList.add('fa-hourglass-end', 'fa-rotate-270');
        break;
        case (el.className.indexOf('fa-hourglass-end') > -1) && (el.className.indexOf('fa-rotate-270') > -1):
        el.classList.remove('fa-hourglass-end', 'fa-rotate-270');
        el.classList.add('fa-hourglass-start');
        break;
    }
}

function hour2Update(){
    if(typeof hour2Update.currentState == "undefined")
    {
        hour2Update.currentState = -1; // initial state so that the first state can be zero
    }
    hour2Update.currentState ++; // increments the state
    /* List of States
    0 hourglass-1 ''
    1 hourglass-2 ''
    2 hourglass-3 ''
    3 hourglass-3 fa-rotate-270
    */
   const STATE_INDEX = 0;      // starting state equal to array
   const CURRENT_ICON = 1;     // current icon equal to array
   const NEXT_ICON = 2;        // icon we're changing to equal to array
   const ROT_STATE = false;
    let states = [ // state number, state name, state next step, rotation element (false except in state 3)
        [0, 'fa-hourglass-1', 'fa-hourglass-2', false]
        [1, 'fa-hourglass-2', 'fa-hourglass-3', false]
        [2, 'fa-hourglass-3', 'fa-hourglass-3', true]
        [3, 'fa-hourglass-3', 'fa-hourglass-1', false]
    STATE_INDEX = states [0];
   let el = document.getElementById("hour2");
   for (i = 0; i < hour2Update.length; i++){
       el.classList.remove(CURRENT_ICON);
       el.classList.add(NEXT_ICON);
       if(ROT_STATE = true){
            el.classList.add(ROT_STATE);
       }
   } 
}


/* below code will function under function hour2Update(){  -- but won't rotate!

 const fahour = "fa-hourglass-"  // constant string for font awesome hourglass
    let el = document.getElementById("hour2");
    let index = el.className.indexOf(fahour); 
    let state = el.className.charAt(index + fahour.length);
    let i = 1; // starting hourglass
    if(state !== '3'){
        i = parseInt(state) + 1; // next hourglass state
    }
    el.classList.remove(fahour + state);
    el.classList.add(fahour + i);

*/


/* setInterval will call the function ever x milliseconds
    1000 milliseconds = 1 second
*/
var clock = setInterval(clockUpdate, 1000); //update clock every second
//
// if you set the return value of setInterval to a variable
// you can stop it later by calling clearInterval(var);
// clearInterval(clock);
//
var link = setInterval(linkUpdate, 1000);

/* add new animations here */

var batt = setInterval(battUpdate, 500);
var batt2 = setInterval(batt2Update, 500);
var therm = setInterval(thermUpdate, 750);
var hour = setInterval(hourUpdate, 500);
var hour2 = setInterval(hour2Update, 500);