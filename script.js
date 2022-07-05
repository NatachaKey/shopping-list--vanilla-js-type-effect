const inputField = document.querySelectorAll('.inputField');
const btn = document.querySelectorAll('.btn');
const toBuyContainer = document.querySelectorAll('.toBuyContainer');


btn.forEach((item, index) => {
   
    item.addEventListener("click", () => {
    const item= document.createElement('li');
    item.innerText=inputField[index].value;
    toBuyContainer[index].appendChild(item);
    item.classList.add('toBuyAdded');
    inputField[index].value='';
      
      
      
item.addEventListener('click', ()=>{
item.classList.add('toBuyCompleted');
})
  
item.addEventListener('dblclick', ()=>{
toBuyContainer[index].removeChild(item);
    
})  
})  
  })  