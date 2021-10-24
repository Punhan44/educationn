
const letter=document.getElementById("letter");
const nameSername=document.getElementById("nameSername");
const telephone=document.getElementById("telephone");
const email=document.getElementById("email");

function error(input, message){
    input.className="error";
    const div=input.previousElementSibling;
    div.innerText=message;
    }
    
    function succes(input){
        input.className="succes";
        const div=input.previousElementSibling;
        div.style="display:none";
    }