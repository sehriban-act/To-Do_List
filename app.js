function geek() {
    var myDiv = document.getElementById("my_check");
    var myList=document.getElementById("my_ul");
    var delButton=document.getElementById("my_del");
   
    // creating checkbox element
    var checkbox = document.createElement('input');

    
    // Assigning the attributes
    // to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
     
    // creating label for checkbox
    var input = document.createElement('input');
    input.type="text";
    
    // assigning attributes for
    // the created label tag
  input.htmlFor = "id";
  // clear.htmlFor="id";
  var clear=document.createElement('button');
    // appending the created text to
    // the created label tag
    input.appendChild(document.createTextNode('write your task...'));
    clear.appendChild(document.createTextNode(''));
    clear.innerHTML='<i class="fas fa-trash"></i>';
     
    // appending the checkbox
    // and label to div
    myDiv.appendChild(checkbox);
    myList.appendChild(input);
    delButton.appendChild(clear);
      
}

var count = 0;
var countEl = document.querySelector(".count");
function plus(){
    count++;
    countEl.value = count;
}
var plusButton=document.querySelector('#add_checkbox');
plusButton.addElementEvent('click',plus);

function minus(){
    count--;
    countEl.value = count;
}
clear.addElementEvent('click',minus);

checkedTask=document.querySelector('.checked');
var num=0;
function completed(){
 num++;
  checkedTask.value=num;
}
checkbox.addElementEvent('click',completed);


function lineThrough(){
     input.style(line-through);
  }
checkbox.addElementEvent("checked=true",lineThrough);

function del(){
  clear.parentNode.removeChild(checkbox,input,clear);
}
  delButton.addElementEvent('click', del);

 