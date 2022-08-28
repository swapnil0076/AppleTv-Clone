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


