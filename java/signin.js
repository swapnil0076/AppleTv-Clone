document.querySelector(".signin").addEventListener("click",function(){
    document.querySelector(".popup").style.display="flex";
    document.querySelector("body").style.overflow="hidden"
})


document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none";
    document.querySelector("body").style.overflow="auto"
})



document.querySelector(".sign-logo").addEventListener("click",function(){
  let apple_id=document.querySelector(".apple-id").value;  
  localStorage.setItem("Id",(apple_id))
})

// let body=document.querySelector("body");
// let popeup=document.querySelector(".popeup")

// let show=function(e){
//     popeup.classList.toggle("hidden");

//     if(! popeup.classList.toggle("hidden")){
//         body.style.overflow="hidden"
//     }else{
//         body.style.overflow="auto"
//     }
// }
