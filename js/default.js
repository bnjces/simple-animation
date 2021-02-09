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

/* setInterval will call the function ever x milliseconds
    1000 milliseconds = 1 second
*/
var clock = setInterval(clockUpdate, 1000); //update clock every second
//
// if you set the return value of setInterval to a varable
// you can stop it later by calling clearInterval(var);
// clearInterval(clock);
//
var link = setInterval(linkUpdate, 1000);

/* add new animations here */