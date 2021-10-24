const form=document.getElementById("form");
const username = document.getElementById("username");
const sernmae= document.getElementById("sername");
const telephone = document.getElementById("telephone");
const email = document.getElementById("email");
const message = document.getElementById("message");





function error(input, message){
input.className="error";
const div=input.previousElementSibling;
div.innerText=message;
}
function success(input){
    input.className="success";
    const div=input.previousElementSibling;
    div.style="display:none"
}
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(input.value)){
        success(input)
    
    }else{  
          error(input,'Mailinizi düzgün qeyd edin')
        
    }
}

// function checkRequired(inputs){
//  inputs.forEach(function(input){
//     if(input.value===""){
//         error(input,`${input.placeholder} qeyd edin`);
//         return 
//     }else{
//         success(input)
//     };
//  })


// }


function checkLength(input,min,max){
    if(input.value.length<min){
        error(input,`${input.placeholder} ən az ${min} simvol olmalıdır`)
    }else if(input.value.length>max){
        error(input,`${input.placeholder} ən çox ${max} simvol olmalıdır`)
    }else{
        success(input);
    }
}


form.addEventListener("submit",function(e){
    e.preventDefault();
    checkEmail(email);
checkLength(username,3,12);
checkLength(message,12,120);
checkLength(sernmae,3,12);
checkLength(telephone,4,15);




})






// let messages= [];
// if(telephone === "" || telephone.value== String){
//  messages.push("Düzgün nömrə qeyd edin")
// }







