const count = document.querySelectorAll(".counter");

count.forEach((countEl) =>{
    countEl.innerText = "0";
    increment();

    function increment(){
        let currentNum = +countEl.innerText;
        const maxNum = countEl.getAttribute("data-ceil");
        const  increments = maxNum /15
        currentNum = Math.ceil(currentNum + increments)
        
        if(currentNum < maxNum){
            countEl.innerText = currentNum
            setTimeout(increment, 50);
        }
        else{
            countEl.innerText = maxNum;
        }
    }
})