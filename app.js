const btn =document.querySelector('.add-btn')
const inputvalue =document.querySelector('input')
const todoList = document.querySelector('.todo-list')

const array = []

btn.addEventListener(
    'click',(e)=>{
        e.preventDefault()
        if(inputvalue.value===""){
            alert("please enter the value")
        }
        else{
            let input = inputvalue.value
            const arrayObj = {
            todoValue : input,
            id: Date.now()
        }
        array.push(arrayObj)
        //iterating through the array to create dom elements
         for (let index = array.length-1; index <= array.length-1;index++) 
         {
                const element = array[index].todoValue;
                const tododiv = document.createElement('div')
                tododiv.classList.add('div')
                const listedItem = document.createElement('li')
                listedItem.classList.add("liStyle")
                listedItem.innerText = element
                tododiv.appendChild(listedItem)
                const delbtn = document.createElement('button')
                delbtn.classList.add("deleteStyle")
                delbtn.innerHTML ="delete"
                delbtn.id = array[index].id
                tododiv.id = delbtn.id            
                delbtn.addEventListener('click',(e)=>{
                const process = e.target.id
                e.preventDefault
                //getting the desired position in the array to delete
                const getDelIndex = deletion(process)
                for (let index = 0; index < array.length; index++) {
                    if(index === getDelIndex)
                    array.splice(index,1)
                    
                }
                // deleting dom with response to array
                if(process === tododiv.id){
                    tododiv.remove()
                }
                console.log(array);                
            }
            )
            //deleting the element in the array
            function deletion(x)
                {
                    y=parseInt(x)
                    for(let i=0;i<=array.length-1;i++){
                    const flag = array[i].id
                    const idholder = parseInt(flag)
                    if(idholder===y)
                    {
                        return i
                    }
                    
                }
            }
            tododiv.appendChild(delbtn)
            todoList.appendChild(tododiv)
            
        }
        inputvalue.value=''
        console.log(array)
    }
    }
    )
    