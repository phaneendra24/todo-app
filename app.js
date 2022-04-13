const btn = document.querySelector('button')
const inputField = document.querySelector('input')
const todos = document.querySelector('todo-list')
let todoArray = []
btn.addEventListener('click',(e)=>
{
    e.preventDefault();
    let arrayobject ={
        text : "",
        checkmark : "",
        deletebtn:"",
        id : ""
    }
    arrayobject.text=inputField.value;
    arrayobject.checkmark=false;
    arrayobject.deletebtn=false;
    arrayobject.id= Math.random();

    todoArray.push(arrayobject);

}
)
console.log(todoArray)
