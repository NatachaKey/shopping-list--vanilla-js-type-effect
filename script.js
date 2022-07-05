const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toBuyContainer = document.querySelector('.toBuyContainer');



btn.addEventListener('click', ()=>{
    const item= document.createElement('li');
    item.innerText=inputField.value;
    toBuyContainer.appendChild(item);
    item.classList.add('toBuyAdded');
    inputField.value='';

  
btn.forEach((item, index) => {
  item.addEventListener("click", () => {
  const item= document.createElement('li');
  item.innerText=inputField[index].value;
  toBuyContainer[index].appendChild(item);
  item.classList.add('toBuyAdded');
  inputField[index].value='';
  })})  
  
  
item.addEventListener('click', ()=>{
    item.classList.add('toBuyCompleted');
})
  
item.addEventListener('dblclick', ()=>{
    toBuyContainer.removeChild(item);
    
})

})


