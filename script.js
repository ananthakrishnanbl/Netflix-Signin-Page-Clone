for (let i=1;i<=10;i++){
    let a=document.querySelector(`#p${i}`);
    a.style.background=`url('p${i}.jpeg')`;
    a.style.backgroundSize='cover';
}




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