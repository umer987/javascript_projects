let number = document.querySelector(".num")
let incrementa = document.querySelector(".max")
let sub = document.querySelector(".min")

let count=0

incrementa.addEventListener("click" ,function(){
   count += 1
   number.innerHTML=count
})

sub.addEventListener("click" , function(){
    if(count >= 1)
    {count -= 1
    number.innerHTML=count 
} 
else{
    number.innerHTML="0"

}

})