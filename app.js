const btn = document.querySelector('.add-btn')
const inputField = document.querySelector('input')
const todoList = document.querySelector('.todo-list')

let todoArray = []
btn.addEventListener('click',(e)=>
{
    e.preventDefault();
    objects();
    print()
})

function objects(){
    if(inputField.value !==""){
        
        const arrayobject ={
            text : inputField.value,
            checkmark : false,
            id : Date.now(),
        }
        todoArray.push(arrayobject);
        
        console.log(todoArray);
    }
}
function print(){
    if(inputField.value===""){
        alert("please enter your todo")
    }
    else{
        todoArray.forEach((i)=>{
            const div =document.createElement('div')
            div.classList.add("content-div")
            const li =document.createElement('li')
            li.classList.add('.style-li')
            li.innerText=i.text
            div.appendChild(li)
            const completedBtn = document.createElement('button')
            completedBtn.innerText="check"
            completedBtn.classList.add('checkbtn')
            completedBtn.addEventListener('click',()=>{
                const text = li.innerText
                const flag =text.strike();
                li.innerHTML=flag
            })
            div.appendChild(completedBtn)
            let trashbtn = document.createElement('button')
            trashbtn.innerText="delete"
            trashbtn.classList.add('trashButton')
            trashbtn.addEventListener('click',(
                )=>{
                div.remove()
            })
            div.appendChild(trashbtn)
            todoList.appendChild(div)
        })
        todoArray=[];
        inputField.value=''
    }
}




