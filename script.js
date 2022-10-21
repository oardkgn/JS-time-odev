let myname = prompt("Adınız:");
let span = document.querySelector("#myName");
span.innerHTML = myname;

let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
function showTime() {
     let time = new Date();
     let day = days[time.getDay()];
     let hours = time.getHours();
     hours = addzero(hours);
     let minutes = time.getMinutes();
     minutes = addzero(minutes);
     let secs = time.getSeconds();
     secs = addzero(secs);
     document.getElementById("myClock").innerHTML= `${hours}: ${minutes}: ${secs} ${day} `;
}

function addzero(a){
    if(a < 10){ 
        return `0${a}`
    }else{
        return a;
    }
    
}
setInterval(showTime, 1000);
