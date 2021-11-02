
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item


// let countTask=tasksList.length;

// Create a new list item when clicking on the "Add" button

let tasksList=[];
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
 
  

  if (inputValue === '') {
    alert("You must write something!");
  } else { 
  
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
    tasksList.push(`${li.innerText}`);
    console.log(tasksList);
    var addList=tasksList.length;
var totalNum=document.getElementById("display");
    console.log(addList);
  
  console.log(totalNum);
totalNum.innerText=addList;
    

  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      // let totalNum=document.getElementById("display");
      addList-=1;
      totalNum.innerText=addList;    

    }
  }
   
}
// //var numList = [];
let deletedTask = 0;
var list = document.querySelector('ul');
list.addEventListener('click',function (ev) {
    if (ev.target.tagName === 'LI' && ev.target.className !== 'checked') {
      ev.target.classList.add('checked');
      deletedTask++;
    }
      else{
      ev.target.classList.remove('checked');
      deletedTask--;
      }
      //numList.push(ev.target.innerText);
      //console.log(numList);
      //var checkedNum = numList.length;
      //console.log(checkedNum);
      //  var checkedNum=document.getElementById("display").innerText;
      var x = document.getElementById('tick');
      //console.log(x);
      x.innerHTML = deletedTask;
  },
  false
);


//--- add butonu---
var btn = document.getElementById("btn");
btn.addEventListener("click", newElement);

    
    
    
