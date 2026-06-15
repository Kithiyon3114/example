const answerContainer=document.querySelector(".container")
document.getElementById("btn").addEventListener('click',(event)=>{
     const selectedButton=event.target
     console.log(selectedButton)
     Array.from(answerContainer.children).forEach((button)=>{
              console.log(button)
     })
})