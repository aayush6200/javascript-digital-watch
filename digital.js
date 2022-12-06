let clockHours= Number(document.getElementById('hrs-elem').innerText)
let clockMinutes= Number(document.getElementById('min-elem').innerText)
let clockSeconds= Number(document.getElementById('sec-elem').innerText)
let k=0

const myStop=()=>{
    clearInterval(k)
}

const hourControlUp=()=>{
    clockHours=parseInt(clockHours)+Number(1)
    
    if (clockHours===24){
        clockHours='00'
    }
    else if (clockHours>0 && clockHours<10){
        clockHours='0'+clockHours
    }
    document.getElementById('hrs-elem').innerText=clockHours
}
const hourControlDown=()=>{
    clockHours=parseInt(clockHours)-Number(1)
    
    if (clockHours===-1){
        clockHours='23'
    }
    else if (clockHours>=0 && clockHours<10){
        clockHours='0'+clockHours
    }
    document.getElementById('hrs-elem').innerText=clockHours

}

const minuteControlUp=()=>{
    clockMinutes=parseInt(clockMinutes)+Number(1)
    
    if (clockMinutes===60){
        hourControlUp()
        clockMinutes='00'
    }
    else if (clockMinutes>=0 && clockMinutes<10){
        clockMinutes='0'+clockMinutes
    }
    document.getElementById('min-elem').innerText=clockMinutes

}

const minuteControlDown=()=>{
    clockMinutes=parseInt(clockMinutes)-Number(1)
    
    if (clockMinutes===-1){
        clockMinutes='59'
    }
    else if (clockMinutes>=0 && clockMinutes<10){
        clockMinutes='0'+clockMinutes
    }
    document.getElementById('min-elem').innerText=clockMinutes

}

const secondControlUp=()=>{
    clockSeconds=parseInt(clockSeconds)+Number(1)
    
    if (clockSeconds===60){
        clockSeconds='00'
    }
    else if (clockSeconds>=0 && clockSeconds<10){
        clockSeconds='0'+clockSeconds
    }
    document.getElementById('sec-elem').innerText=clockSeconds


}
const secondControlDown=()=>{
    clockSeconds=parseInt(clockMinutes)-Number(1)
    
    if (clockSeconds===-1){
        clockSeconds='59'
    }
    else if (clockSeconds>=0 && clockSeconds<10){
        clockSeconds='0'+clockSeconds
    }
    document.getElementById('sec-elem').innerText=clockSeconds

}

const myWatch=()=>{
    k=setInterval(function aayush (){
        console.log('aayush')
        clockSeconds=parseInt(clockSeconds)+Number(1)
    
    if (clockSeconds===61){
        minuteControlUp()
        clockSeconds='01'
    }
    else if (clockSeconds>=0 && clockSeconds<10){
        clockSeconds='0'+clockSeconds
    }
    document.getElementById('sec-elem').innerText=clockSeconds

    },1000)
}







