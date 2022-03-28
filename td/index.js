let addToDoButton = document.getElementById('addToDo');
let ToDoContainer = document.getElementById('ToDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click',  function  (){
var para = document.createElement ('p')
para.classList.add('para')
para.innerText = inputField.value;
ToDoContainer.appendChild(para);
inputField.value = "";
para.addEventListener ('click' , function(){
    para.style.textDecoration = "line-through";
})
para.addEventListener ('dblclick' , function(){
    ToDoContainer.removeChild(para);
})
})
