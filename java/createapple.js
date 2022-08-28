document.querySelector("form").addEventListener("submit",details);

let detailsArr=[]

document.querySelector("#terms").addEventListener("click",function(){
    console.log("check")
})

function details(){
    event.preventDefault();
    
    let f_name=document.querySelector("#name").value;
    let l_name=document.querySelector("#cast").value;
    let birth=document.querySelector("#dob").value;
    let email=document.querySelector("#mail").value;
    let password=document.querySelector("#pass").value;
 

    if(f_name==""|| l_name==""|| birth=="" || email=="" || password==""){
     alert("Fill all the details")
    }else if((f_name!==""|| l_name!==""|| birth!=="" || email!=="" || password!=="")){
      alert("OTP has been sent to your Mail")
    }

    let details_obj={
        f_name,
        l_name,
        birth,
        email,
        password

    }

    detailsArr.push(details_obj)

    localStorage.setItem("details_list",JSON.stringify(detailsArr))

}



document.querySelector(".next").addEventListener("click",function(){
    document.querySelector(".pop3").style.display="flex";
    document.querySelector("body").style.overflow="hidden"
})


document.querySelector(".close3").addEventListener("click",function(){
    document.querySelector(".pop3").style.display="none";
    document.querySelector("body").style.overflow="auto"
})

