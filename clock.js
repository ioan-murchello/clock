let deg = 6;
let hour = document.querySelector('.hour'),
    min = document.querySelector('.min'),
    sec = document.querySelector('.sec');

function setClock(){
    let date = new Date();
    let h = date.getHours() * 30,
        m = date.getMinutes() * deg,
        s = date.getSeconds() * deg;

    hour.style.transform = `rotateZ(${(h)+(m/12)}deg)`;
    min.style.transform = `rotateZ(${m}deg)`;
    sec.style.transform = `rotateZ(${s}deg)`;
    
};
setClock();
setInterval(setClock, 1000)

 
// setInterval(() => {
//     let date = new Date();
//     let h = date.getHours() * 30,
//         m = date.getMinutes() * deg,
//         s = date.getSeconds() * deg;
      
//     hour.style.transform = `rotateZ(${(h)+(m/12)}deg)`;
//     min.style.transform = `rotateZ(${m}deg)`;
//     sec.style.transform = `rotateZ(${s}deg)`;
// }, 1000);