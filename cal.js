let eqlbtn = document.querySelector(".eqlbtn")
let inp =document.querySelector(".inp")
let btns =document.querySelectorAll("button")
let str = "";
let ac = document.querySelector(".ac")

eqlbtn.addEventListener("click",()=>{

inp.classList.remove("remimg")
inp.classList.add("addinp")
})

ac.addEventListener("click",()=>{
    inp.classList.add("remimg")
    inp.classList.remove("addinp")
})


btns.forEach((btn)=>{

btn.addEventListener("click",(e)=>{


    
if (e.target.innerHTML==="DEL") {
    str = str.substring(0,str.length-1)
    inp.value = str;
}
else if(e.target.innerHTML==="AC"){
str = "";
inp.value = str
}else if (e.target.innerHTML === "=") {
    str = eval(str)
    inp.value =str
}
else{
    str = str + e.target.innerHTML;
    inp.value = str
}
})
})

