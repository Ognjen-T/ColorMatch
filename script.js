
const counter = document.querySelector("#counter");
const TrueColorDiv = document.querySelector("#TrueColor");
const PlayerColor = document.querySelector("#PlayerColor");

const Sliders = document.querySelectorAll(".slider");

let CharacterArray = ["0","1","2","3","4","5","6","5","6","7",
                      "8","9","A", "B", "C", "D", "E", "F"];
let Color = "";
let R;
let G;
let B;


    let i = 500;
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
    },10);

    setTimeout(() => {
        clearInterval(timer);
        counter.textContent = "";

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
            };
            Green.oninput = () => {
                Display.style.backgroundColor = `rgb(${Red.value}, ${Green.value}, ${Blue.value})`;
            };
            Blue.oninput = () => {
                Display.style.backgroundColor = `rgb(${Red.value}, ${Green.value}, ${Blue.value})`;
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
        
    },5000);

    
    
}