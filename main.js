let logo = document.getElementById("logo")

let btnGetIntouch= document.getElementById("get-intouch")

let counter=0


function increaseCounter(){
    counter=counter+1
    if(counter%2==0){
        logo.style="color:#d45d37"
    }else{
        logo.style="color:#dedede"
    }
    logo.textContent=counter
}


// btnGetIntouch.addEventListener("click",increaseCounter)

setInterval(increaseCounter,1000)