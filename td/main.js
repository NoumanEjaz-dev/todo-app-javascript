let  addToDo = document.getElementById ('addToDo');
let  ToDoContainer = document.getElementById ('ToDoContainer');
let  inputField = document.getElementById ('inputField');


addToDo.addEventListener ('click' , function (){
    var para = document.createElement ('p');
    para.style.backgroundColor = "red";
    para.style.padding ="10px";
    para.style.borderRadius ="20px";
    para.style.color = "#fff";
    para.innerHTML = inputField.value;
    ToDoContainer.appendChild(para);

    inputField.value = " "

    para.addEventListener ('click' , function (){
        para.style.textDecoration = "line-through"
    })
    
    para.addEventListener ('dblclick' , function (){
        ToDoContainer.removeChild(para);
    }) 


 
})




