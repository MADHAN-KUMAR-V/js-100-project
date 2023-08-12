
const btn = document.querySelector(".btn");
const inputE = document.querySelector(".input");
const copyE = document.querySelector(".fa-copy");
const alertE = document.querySelector(".alert__container");

btn.addEventListener("click",()=>{
    generatePassword();
})

copyE.addEventListener("click",()=>{
    copyPassword();
    if(inputE.value){
        alertE.classList.remove("active");
        setTimeout(()=>{
            alertE.classList.add("active");
        },2000);

    }
})

function generatePassword(){
    const chars = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    const passLength = 8;

    let password = "";

    for(let i = 0 ; i < passLength ; i++ ){
        const randomNum = Math.floor(Math.random()* chars.length);

        password += chars.substring(randomNum,randomNum+1);
        inputE.value = password;

    }
}

function copyPassword(){
    inputE.select();
    navigator.clipboard.write(inputE.value);
}