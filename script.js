gsap.to("h1", {
  text:"Mi lista de compra 🛍️",
  duration:2,
  ease:"power1.in" 
});

gsap.from(".smallHeader", {x: -200, delay:3,opacity:0, duration:3});
gsap.from(".container", {x: 200, delay:3,opacity:0, duration:3});


const inputField = document.querySelectorAll('.inputField');
const btn = document.querySelectorAll('.btn');
const toBuyContainer = document.querySelectorAll('.toBuyContainer');


inputField.forEach((item,index)=>{
  
  item.addEventListener('keypress', function(e){
    
    if (e.keyCode === 13){
      
    const item= document.createElement('li');
    item.innerText= inputField[index].value;
    toBuyContainer[index].appendChild(item);
    item.classList.add('toBuyAdded');
    inputField[index].value='';
      
    item.addEventListener('click', ()=>{
    item.classList.add('toBuyCompleted');
    })
  
    item.addEventListener('dblclick', ()=>{
    toBuyContainer[index].removeChild(item);
    }) 
    }
    
  })
})


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