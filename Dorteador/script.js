
function generateNumber(){
    const min = document.querySelector('.input-min').value
    const max = document.querySelector('.input-max').value
   const result = Math.floor(Math.random() * (max - min) + min)
    alert(result)
}

 
