(function(){
    const buttons = document.querySelectorAll('.counterBtn')

    let count= 0
  
    //Add event listeners and functionailty to each button  
    buttons.forEach(function(button){
        button.addEventListener('click', function(){
            if (button.classList.contains('prevBtn') && count >= 1){
                count--
            } else if (button.classList.contains('nextBtn') && count <= 49){
            count++
            }

            //Select the counter text
            const counter = document.querySelector('#counter')
            counter.textContent = count
          
            if (count == 0 ){
              alert("The Mininum Count is Zero (0)")
          } else if (count == 50){
              alert("The Maximum Count is Fifty (50)")
          }
      })
    })
})()