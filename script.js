
const counter = document.querySelector("#counter");
const TrueColorDiv = document.querySelector("#TrueColor");
const PlayerColor = document.querySelector("#PlayerColor");
const Sliders = document.querySelectorAll(".slider");

let Color = "";
let R;
let G;
let B;
let i = 500;




function GenerateColor(){
    TrueColorDiv.style.display ="block"
    Color = "";
    R = Math.floor(Math.random() * 256);
    G = Math.floor(Math.random() * 256);
    B = Math.floor(Math.random() * 256);
;
    console.log(R+ " " + G + " "+ B);
    TrueColorDiv.style.backgroundColor = `rgb(`+R+`,`+G+`,`+B+`)`;
    brightness = (R * 299 + G * 587 + B * 114) / 1000
    if(brightness <= 128){
        counter.style.color = "white";
    }else{
        counter.style.color = "black";
    }
}


function PlayerGuessColor(){
        const Red = document.querySelector("#Red");
        const Green = document.querySelector("#Green");
        const Blue = document.querySelector("#Blue");
        const Display = document.querySelector("#Display");
        const Tick = document.querySelector("#Tick");
        let vreme = 1000;
        TrueColorDiv.style.display ="none"
        PlayerColor.style.display = "flex";
        const GameTimer = setInterval(() => {
            Tick.textContent = vreme;
            Red.oninput = () => {
                Display.style.backgroundColor = `rgb(${Red.value}, ${Green.value}, ${Blue.value})`;
                brightness = (Red.value * 299 + Green.value * 587 + Blue.value * 114) / 1000
                if(brightness <= 128){
                    Tick.style.color = "white";
                }else{
                    Tick.style.color = "black";
                }
            };
            Green.oninput = () => {
                Display.style.backgroundColor = `rgb(${Red.value}, ${Green.value}, ${Blue.value})`;
                brightness = (Red.value * 299 + Green.value * 587 + Blue.value * 114) / 1000
                if(brightness <= 128){
                    Tick.style.color = "white";
                }else{
                    Tick.style.color = "black";
                }
            };
            Blue.oninput = () => {
                Display.style.backgroundColor = `rgb(${Red.value}, ${Green.value}, ${Blue.value})`;
                brightness = (Red.value * 299 + Green.value * 587 + Blue.value * 114) / 1000
                if(brightness <= 128){
                    Tick.style.color = "white";
                }else{
                    Tick.style.color = "black";
                }
            };
            vreme--;
        },10)

        setTimeout(()=> {
            const CompareDiv = document.querySelector("#CompareDiv");
            Tick.style.display = "none";
            clearInterval(GameTimer);
            setTimeout(() =>{
                CompareDiv.style.display = "block";
                CompareDiv.style.backgroundColor =  `rgb(`+R+`,`+G+`,`+B+`)`;
                const txt = document.querySelector("#txt");
                txt.style.display = "block";
            },200);
          
        },10000);
}


function WatchTimer(){
    const timer = setInterval(() => {
            counter.textContent = i;
            i--;       
        },10);

        setTimeout(() => {     
            clearInterval(timer);
            counter.textContent = "";
            PlayerGuessColor()
        },5000);
}


function Run(){
    
    GenerateColor();

    WatchTimer();
}