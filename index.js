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



var sliderPictures=[
  {
    image:"images/mekteb.jpeg"
  },
  {
    image:"images/mekteb3.jpeg"
  },

  {
    image:"images/mekteb5.jpeg"
  },
  {
    image:"images/mekteb6.jpeg"
  },
  {
    image:"images/mekteb7.jpeg"
  },
  {
    image:"images/mekteb8.jpeg"
  }

  
];
var index=0;
var slaytCount=sliderPictures.length;
var interval;

var settings={
  duration:'6000',
  random:false
}

init(settings);




document.querySelector(".fa-arrow-left").addEventListener("click", function(){
index --;
showSlide(index);

});

document.querySelector(".fa-arrow-right").addEventListener("click",function(){
  index ++;
  showSlide(index);

});

document.querySelectorAll(".arrow").forEach(function(item){
  item.addEventListener('mouseenter',function(){
    clearInterval(interval);
  })
})
document.querySelectorAll(".arrow").forEach(function(item){
  item.addEventListener('mouseleave',function(){
   init(settings);
  })
})




function init(settings){
  var prev;
interval=setInterval(function(){
   if(settings.random){
     do{
       index = Math.floor(Math.random() * slaytCount);
     }while(index == prev)
     prev = index;
   }else{
     if(slaytCount == index -1){
       index = 0;
     }
     showSlide(index);
     
     index++;
   }

 
  showSlide(index)

},settings.duration)
}


function showSlide(i){
  index=i;
  if(i<0){
    index=slaytCount-1;
  }
  if(i>=slaytCount){
    index=0;  
  }
  document.querySelector(".slider-image").setAttribute('src',sliderPictures[index].image)
}


const menubarJs=document.getElementById("menu-bar");
const fai=document.getElementById("min-toggle");

// menu.addEventListener("click",function(){
//     if(menu.firstElementChild.classList.contains("fa-bars"))
//     {
//         menu.firstElementChild.classList.replace("fa-bars", "fa-times")
//     }
//    else{
//     menu.firstElementChild.classList.replace("fa-times", "fa-bars")
//    }

//    sidebar.classList.toggle("show-sidebar")
// })
// fai.addEventListener("click",function(){
// menubarJs.classList.toggle("show-ivener");
// });


const videoActive=document.querySelector(".video-active");
const trailer=document.querySelector(".trailer");
const close=document.querySelector(".close");
const video=document.querySelector("video");

videoActive.addEventListener('click',()=>{
  trailer.style.visibility="visible";
  trailer.style.opacity="1";

})

close.addEventListener('click',()=>{
  trailer.style.visibility="hidden";
  trailer.style.opacity="0";

  video.pause();
  video.currentTime=0;
})
