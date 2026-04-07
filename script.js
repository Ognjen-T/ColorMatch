
const counter = document.querySelector("#counter");
const TrueColorDiv = document.querySelector("#TrueColor");
const PlayerColor = document.querySelector("#PlayerColor");

const Sliders = document.querySelectorAll(".slider")

let CharacterArray = ["0","1","2","3","4","5","6","5","6","7",
                      "8","9","A", "B", "C", "D", "E", "F"];
let Color = "";



    let i = 5;
function Run(){
    TrueColorDiv.style.display ="block"
    Color = "";
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    console.log(R+ " " + G + " "+ B);
    TrueColorDiv.style.backgroundColor = `rgb(`+R+`,`+G+`,`+B+`)`;

    const timer = setInterval(() => {
        counter.textContent = i;
        i--;       
    },1000);

    setTimeout(() => {
        clearInterval(timer);
        counter.textContent = "";
        TrueColorDiv.style.display ="none"
        PlayerColor.style.display = "block";
    },6000);

    
    
}