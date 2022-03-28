// let addToDoButton = document.getElementById('addToDo');
// let ToDoContainer = document.getElementById('ToDoContainer');
// let inputField = document.getElementById('inputField');

// addToDoButton.addEventListener('click',  function  (){
// var para = document.createElement ('p')
// para.style.backgroundColor = "red";
//     para.style.padding ="10px";
//     para.style.borderRadius ="20px";
//     para.style.color = "#fff";
//     para.style.marginTop = "20px";
// para.classList.add('para')
// para.innerText = inputField.value;
// ToDoContainer.appendChild(para);
// inputField.value = "";
// para.addEventListener ('click' , function(){
//     para.style.textDecoration = "line-through";
// })
// para.addEventListener ('dblclick' , function(){
//     ToDoContainer.removeChild(para);
// })
// })




let inputtext  = document.getElementById ('inputbox');
let addTodoBtn  = document.getElementById ('addTodo');
let todoList  = document.getElementById ('todoList');


addTodoBtn.addEventListener( 'click' ,  function (){
    var p = document.createElement('p');
    // p.classList.add('para');
    p.innerText = inputtext.value;
    todoList.appendChild(p);
    inputtext.value = " ";

 p.addEventListener('click' , function (){
     p.style.textDecoration = "line-through";
 })
 
 p.addEventListener ('dblclick' , function (){
     todoList.removeChild(p);
 })

})