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

  function myFun(){
    alert("hello");  
  }

  function myFun2(){
    console.log("myFun2 called");
  }

 //receives the event parameter from addEventListener high order function
  function logEventType(event){
    console.log(event.type);
  }

  let myBtn = document.querySelector("#myBtn");

  //attach myFun2 in addition to myFun to the click event of myBtn
  myBtn.addEventListener("click", myFun2);

  //There are other events such as mouseover and mouseout
  
  //Any callback passed to addeventListener receives an event object
  myBtn.addEventListener("mouseover", logEventType);//logs 'mouseover'
  myBtn.addEventListener("mouseout", logEventType);// logs 'mouseout'
 //these events will fire when the mouse pointer hovers/passes over the button

  function loaded() {
    console.log('img loaded');
  }

  let img = document.querySelector('img');
  img.addEventListener('load', loaded);

  let obj2 = myobj;

//obj2 and myobj are the same variable

obj2.name = "Shelly";

console.log(myobj.name);//Shelly

//if you need to create a new object and copy its values use Object.assign

let obj3 = {};
Object.assign(obj3, myobj);

obj3.name = 'Smith';

console.log(myobj.name, obj3.name);//Shelly, Smith