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



var medianav = document.querySelector(".nav-link-open");
var mediasidebar = document.querySelector(".menu-bar");
var colmd = document.querySelector(".col-lg-9");

medianav.addEventListener("click" , function (){
  mediasidebar.classList.toggle("show-sidebar")
  colmd.classList.toggle("col-lg-9-open")
})
