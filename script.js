let eyeButton=document.querySelector("#eyeopen");
eyeButton.addEventListener("click",(e)=>{
    e.preventDefault()
    if (eyeButton.getAttribute("id")=="eyeopen"){
        document.querySelector("#pass").setAttribute("type","text");
        eyeButton.innerHTML="<i class='fa-solid fa-eye icon'></i>";
        eyeButton.setAttribute("id","eyeclosed");
    }
    else{
        document.querySelector("#pass").setAttribute("type","password");
        eyeButton.innerHTML="<i class='fa-solid fa-eye-slash icon'></i>" ;
        eyeButton.setAttribute("id","eyeopen");
    }
})