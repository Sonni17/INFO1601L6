function alertFun(){
    alert("Hello !");
   }

   function confirmFun(){
     let didConfirm = confirm("Are you sure about that?");
     if(didConfirm){
       alert("You confirmed :)");
     }else{
      alert("You did not confirm :(");
     }
   }

   function promptFun(){
    let val = prompt("What is your name?");
    alert(`You've entered: ${val}`);
   }

   //get client data using navigator
console.log(window.navigator.cookieEnabled);
console.log(window.navigator.onLine);
console.log(navigator.appVersion);
console.log(navigator.userAgent)
console.log(navigator.platform);

//get window metadata using window
console.log(window.location.href);//get full url
console.log(window.location.protocol);
console.log(window.location.hostname);

function redirect(url){
  window.location.assign(url);//redirects the page to another url
}

window.onload = function(event){
   console.log("Page has loaded");
   //do other javascript stuff here
}

const result = document.querySelector('#result');
result.innerHTML = '<h2>My Span</h2>';
result.style.color = 'blue';

<input id="myBtn" type="button" onclick="myFun()" value="click me"/>