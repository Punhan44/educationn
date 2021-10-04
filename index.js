var menu= document.querySelector(".menu-toggle");
var sidebar=document.querySelector(".col-lg-9");

menu.addEventListener("click",function(){
    if(menu.firstElementChild.classList.contains("fa-bars"))
    {
        menu.firstElementChild.classList.replace("fa-bars", "fa-times")
    }
   else{
    menu.firstElementChild.classList.replace("fa-times", "fa-bars")
   }

   sidebar.classList.toggle("show-sidebar")
})